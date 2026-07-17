import { NextResponse } from "next/server";
import { appendSubmission, getQuestions } from "@/lib/assessment-sheets";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  const { slug, answers, website } = body as {
    slug?: string;
    answers?: Record<string, string>;
    website?: string;
  };

  // Honeypot field: real users never fill it (hidden via CSS). Bots that
  // auto-fill every input do. Pretend success without writing a row.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (
    !slug ||
    typeof slug !== "string" ||
    !answers ||
    typeof answers !== "object"
  ) {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
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

  await appendSubmission(slug, answers);
  return NextResponse.json({ ok: true });
}
