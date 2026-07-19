import { del, list } from "@vercel/blob";
import {
  FORM_UPLOAD_RETENTION_MS,
} from "@/lib/form-upload-constants";

export type CleanupFormUploadsResult = {
  scanned: number;
  deleted: number;
  errors: number;
};

/**
 * Delete public blobs under `assessment/` older than FORM_UPLOAD_RETENTION_DAYS.
 * Vercel Blob has no native TTL — this is the retention mechanism.
 */
export async function cleanupExpiredFormUploads(): Promise<CleanupFormUploadsResult> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    throw new Error("BLOB_READ_WRITE_TOKEN is not configured");
  }

  const cutoff = Date.now() - FORM_UPLOAD_RETENTION_MS;
  let cursor: string | undefined;
  let scanned = 0;
  let deleted = 0;
  let errors = 0;

  do {
    const page = await list({
      prefix: "assessment/",
      cursor,
      limit: 1000,
      token,
    });
    scanned += page.blobs.length;

    const expiredUrls = page.blobs
      .filter((b) => {
        const uploaded =
          b.uploadedAt instanceof Date
            ? b.uploadedAt.getTime()
            : new Date(b.uploadedAt).getTime();
        return Number.isFinite(uploaded) && uploaded < cutoff;
      })
      .map((b) => b.url);

    if (expiredUrls.length > 0) {
      try {
        await del(expiredUrls, { token });
        deleted += expiredUrls.length;
      } catch {
        // Fall back to one-by-one so a single bad URL doesn't block the batch.
        for (const url of expiredUrls) {
          try {
            await del(url, { token });
            deleted += 1;
          } catch {
            errors += 1;
          }
        }
      }
    }

    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);

  return { scanned, deleted, errors };
}
