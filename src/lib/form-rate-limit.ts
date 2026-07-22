/**
 * In-memory sliding-window rate limits for the assessment form APIs.
 *
 * Durable enough to blunt burst abuse on a warm isolate; counters reset on
 * cold start / new instance (expected for serverless). Token must already be
 * valid before these run — unknown tokens 404 first.
 */

type Bucket = { hits: number[] };

const buckets = new Map<string, Bucket>();

const MAX_BUCKETS = 5_000;

function pruneBucket(bucket: Bucket, windowMs: number, now: number): void {
  const cutoff = now - windowMs;
  // drop from the front — hits are appended in order
  let i = 0;
  while (i < bucket.hits.length && bucket.hits[i]! < cutoff) i += 1;
  if (i > 0) bucket.hits = bucket.hits.slice(i);
}

function evictIfNeeded(): void {
  if (buckets.size <= MAX_BUCKETS) return;
  // Drop oldest half of keys (Map insertion order) under pressure.
  const drop = Math.ceil(buckets.size / 2);
  let n = 0;
  for (const key of buckets.keys()) {
    buckets.delete(key);
    n += 1;
    if (n >= drop) break;
  }
}

export type RateLimitResult =
  | { ok: true }
  | { ok: false; retryAfterSec: number };

export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number,
): RateLimitResult {
  const now = Date.now();
  let bucket = buckets.get(key);
  if (!bucket) {
    bucket = { hits: [] };
    buckets.set(key, bucket);
    evictIfNeeded();
  }
  pruneBucket(bucket, windowMs, now);
  if (bucket.hits.length >= limit) {
    const oldest = bucket.hits[0] ?? now;
    const retryAfterSec = Math.max(
      1,
      Math.ceil((oldest + windowMs - now) / 1000),
    );
    return { ok: false, retryAfterSec };
  }
  bucket.hits.push(now);
  return { ok: true };
}

/** Client IP from Vercel / proxy headers. */
export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first.slice(0, 64);
  }
  const real = request.headers.get("x-real-ip")?.trim();
  if (real) return real.slice(0, 64);
  return "unknown";
}

// Sized for a whole cohort, because that is the real unit of traffic here:
// one link token is handed to every participant of a client, and an on-site
// room shares a single office NAT IP. So a session where the trainer says
// "isi formnya sekarang" arrives as one synchronized burst on one token and
// one IP. Headroom covers a 200+ participant cohort at a couple of writes
// each (edit-after-submit re-POSTs, plus retries on flaky venue wifi), which
// also absorbs a link reused across batches.
//
// Generous is the right call: the counters are per-isolate and best-effort
// anyway, tokens are opaque and only ever reach the cohort, and a burnt token
// can only write RAW rows under its own client_slug.
export const FORM_RATE_LIMITS = {
  uploadPerToken: { limit: 600, windowMs: 15 * 60 * 1000 },
  uploadPerIp: { limit: 800, windowMs: 60 * 60 * 1000 },
  submitPerToken: { limit: 600, windowMs: 15 * 60 * 1000 },
  submitPerIp: { limit: 800, windowMs: 60 * 60 * 1000 },
} as const;

export function enforceFormUploadLimits(
  token: string,
  ip: string,
): RateLimitResult {
  const byToken = checkRateLimit(
    `upload:token:${token}`,
    FORM_RATE_LIMITS.uploadPerToken.limit,
    FORM_RATE_LIMITS.uploadPerToken.windowMs,
  );
  if (!byToken.ok) return byToken;
  return checkRateLimit(
    `upload:ip:${ip}`,
    FORM_RATE_LIMITS.uploadPerIp.limit,
    FORM_RATE_LIMITS.uploadPerIp.windowMs,
  );
}

export function enforceFormSubmitLimits(
  token: string,
  ip: string,
): RateLimitResult {
  const byToken = checkRateLimit(
    `submit:token:${token}`,
    FORM_RATE_LIMITS.submitPerToken.limit,
    FORM_RATE_LIMITS.submitPerToken.windowMs,
  );
  if (!byToken.ok) return byToken;
  return checkRateLimit(
    `submit:ip:${ip}`,
    FORM_RATE_LIMITS.submitPerIp.limit,
    FORM_RATE_LIMITS.submitPerIp.windowMs,
  );
}

export function rateLimitResponse(retryAfterSec: number): Response {
  return Response.json(
    {
      error: "rate limit exceeded",
      retryAfterSec,
    },
    {
      status: 429,
      headers: {
        "Retry-After": String(retryAfterSec),
      },
    },
  );
}
