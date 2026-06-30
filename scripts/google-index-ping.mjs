/**
 * Ping the Google Indexing API after production builds so Google fetches new /
 * updated pages quickly, instead of waiting for the next scheduled sitemap
 * re-crawl. The URL list is derived from the built sitemap (same source as the
 * IndexNow ping), so new pages are submitted automatically.
 *
 * DORMANT until configured: if GOOGLE_INDEXING_SA_JSON is absent the script
 * logs and exits 0, so builds never break. To activate:
 *   1. Google Cloud → create a service account, enable the "Indexing API".
 *   2. Create a JSON key for it.
 *   3. Search Console (sc-domain:aitraining.id) → Settings → Users and
 *      permissions → add the service-account email as an **Owner**.
 *   4. Set the Vercel env var GOOGLE_INDEXING_SA_JSON to the full key JSON
 *      (Production scope). Optionally GOOGLE_INDEX_FORCE=1 to run off-Vercel.
 *
 * Honesty note: Google officially scopes this API to JobPosting / BroadcastEvent
 * pages. Using it for general marketing pages is common and usually works, but
 * it's a gray area — treat it as a *nudge on top of* the sitemap, never the only
 * mechanism. Failures here are non-fatal by design.
 */

import crypto from "node:crypto";
import { readSitemapUrls } from "./lib/sitemap-urls.mjs";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const PUBLISH_URL =
  "https://indexing.googleapis.com/v3/urlNotifications:publish";
const SCOPE = "https://www.googleapis.com/auth/indexing";

function base64url(input) {
  return Buffer.from(input).toString("base64url");
}

async function getAccessToken(sa) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = base64url(
    JSON.stringify({
      iss: sa.client_email,
      scope: SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600,
    }),
  );
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(`${header}.${claim}`);
  const signature = signer.sign(sa.private_key).toString("base64url");
  const assertion = `${header}.${claim}.${signature}`;

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });
  if (!res.ok) {
    throw new Error(`token ${res.status}: ${await res.text().catch(() => "")}`);
  }
  return (await res.json()).access_token;
}

async function publish(url, token) {
  const res = await fetch(PUBLISH_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url, type: "URL_UPDATED" }),
  });
  return res.ok;
}

async function main() {
  const shouldPing =
    process.env.VERCEL_ENV === "production" ||
    process.env.GOOGLE_INDEX_FORCE === "1";
  if (!shouldPing) {
    console.log(
      "[google-index] skip (production build or GOOGLE_INDEX_FORCE=1 required)",
    );
    return;
  }

  const raw = process.env.GOOGLE_INDEXING_SA_JSON;
  if (!raw) {
    console.log(
      "[google-index] skip — GOOGLE_INDEXING_SA_JSON not set (see script header to enable)",
    );
    return;
  }

  let sa;
  try {
    sa = JSON.parse(raw);
  } catch {
    console.warn(
      "[google-index] skip — GOOGLE_INDEXING_SA_JSON is not valid JSON",
    );
    return;
  }
  if (!sa.client_email || !sa.private_key) {
    console.warn("[google-index] skip — service-account JSON missing fields");
    return;
  }

  const urls = readSitemapUrls();
  if (urls.length === 0) {
    console.warn("[google-index] sitemap body not found — nothing to submit");
    return;
  }

  const token = await getAccessToken(sa);

  // Indexing API quota is 200 publish calls/day by default — submit sequentially
  // and stop reporting individual failures loudly (they're expected on quota).
  let ok = 0;
  for (const url of urls) {
    try {
      if (await publish(url, token)) ok += 1;
    } catch (err) {
      console.warn(`[google-index] ${url}: ${err.message}`);
    }
  }
  console.log(`[google-index] submitted ${ok}/${urls.length} URLs`);
}

main().catch((err) => {
  console.warn("[google-index] failed (non-fatal):", err.message);
  process.exit(0);
});
