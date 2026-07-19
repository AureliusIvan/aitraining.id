import { NextResponse } from "next/server";
import { cleanupExpiredFormUploads } from "@/lib/form-upload-retention";

export const runtime = "nodejs";
export const maxDuration = 60;

/**
 * Daily cron: purge assessment form blobs older than retention.
 * Secured by CRON_SECRET (Vercel Cron sends Authorization: Bearer <CRON_SECRET>).
 */
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "CRON_SECRET is not configured" },
      { status: 500 },
    );
  }

  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  try {
    const result = await cleanupExpiredFormUploads();
    return NextResponse.json({ ok: true, ...result });
  } catch (err) {
    const message = err instanceof Error ? err.message : "cleanup failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
