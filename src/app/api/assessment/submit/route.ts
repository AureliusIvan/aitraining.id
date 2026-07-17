import { NextResponse } from "next/server";
import {
  appendSubmission,
  getQuestions,
  resolveToken,
} from "@/lib/assessment-sheets";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  const { token, answers, website } = body as {
    token?: string;
    answers?: Record<string, string>;
    website?: string;
  };

  // Honeypot field: real users never fill it (hidden via CSS). Bots that
  // auto-fill every input do. Pretend success without writing a row.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (
    !token ||
    typeof token !== "string" ||
    !answers ||
    typeof answers !== "object"
  ) {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  // Re-resolve server-side rather than trusting a client-supplied client
  // identity — a submitted token can only ever write under whichever client
  // it's mapped to in the Links tab, never an arbitrary caller-chosen name.
  const link = await resolveToken(token);
  if (!link) {
    return NextResponse.json({ error: "invalid token" }, { status: 404 });
  }

  const questions = await getQuestions();
  const missing = questions.filter(
    (q) => q.required && !answers[q.id]?.toString().trim(),
  );
  if (missing.length > 0) {
    return NextResponse.json(
      { error: "missing required answers", missing: missing.map((q) => q.id) },
      { status: 400 },
    );
  }

  await appendSubmission(link.clientSlug, answers);
  return NextResponse.json({ ok: true });
}
