import { NextResponse } from "next/server";
import {
  appendSubmission,
  getQuestions,
  resolveToken,
  updateSubmission,
} from "@/lib/assessment-sheets";
import {
  clientIp,
  enforceFormSubmitLimits,
  rateLimitResponse,
} from "@/lib/form-rate-limit";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  const { token, answers, website, submissionId } = body as {
    token?: string;
    answers?: Record<string, string>;
    website?: string;
    submissionId?: string;
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

  const limited = enforceFormSubmitLimits(token, clientIp(request));
  if (!limited.ok) {
    return rateLimitResponse(limited.retryAfterSec);
  }

  const questions = await getQuestions(link.formKind);
  const missing = questions.filter(
    (q) => q.required && !answers[q.id]?.toString().trim(),
  );
  if (missing.length > 0) {
    return NextResponse.json(
      { error: "missing required answers", missing: missing.map((q) => q.id) },
      { status: 400 },
    );
  }

  // A submissionId means "this is an edit" — overwrite the existing row
  // instead of appending a duplicate. If the id no longer resolves to a row
  // (e.g. someone deleted it from the Sheet by hand), fall back to creating
  // a fresh one rather than silently losing the answers.
  let finalId: string;
  if (submissionId && typeof submissionId === "string") {
    const updated = await updateSubmission(
      submissionId,
      link.clientSlug,
      link.formKind,
      answers,
    );
    finalId = updated
      ? submissionId
      : await appendSubmission(link.clientSlug, link.formKind, answers);
  } else {
    finalId = await appendSubmission(link.clientSlug, link.formKind, answers);
  }

  return NextResponse.json({ ok: true, submissionId: finalId });
}
