import { NextResponse } from "next/server";
import {
  allowedExtensionsFor,
  getQuestions,
  MAX_UPLOAD_BYTES,
  resolveToken,
  serializeFileAnswer,
  uploadAssessmentFile,
} from "@/lib/assessment-sheets";
import {
  clientIp,
  enforceFormUploadLimits,
  rateLimitResponse,
} from "@/lib/form-rate-limit";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "invalid multipart body" }, { status: 400 });
  }

  const token = String(form.get("token") ?? "");
  const questionId = String(form.get("questionId") ?? "");
  const website = String(form.get("website") ?? "");
  const file = form.get("file");

  // Same honeypot contract as /api/form/submit — pretend success, write nothing.
  if (website) {
    return NextResponse.json({
      ok: true,
      answer: serializeFileAnswer({
        name: "ok",
        url: "https://blob.vercel-storage.com/honeypot",
      }),
    });
  }

  if (!token || !questionId || !(file instanceof File)) {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  const link = await resolveToken(token);
  if (!link) {
    return NextResponse.json({ error: "invalid token" }, { status: 404 });
  }

  const limited = enforceFormUploadLimits(token, clientIp(request));
  if (!limited.ok) {
    return rateLimitResponse(limited.retryAfterSec);
  }

  const questions = await getQuestions();
  const question = questions.find((q) => q.id === questionId);
  if (!question || question.type !== "file") {
    return NextResponse.json({ error: "invalid question" }, { status: 400 });
  }

  if (file.size > MAX_UPLOAD_BYTES) {
    return NextResponse.json(
      {
        error: "file too large",
        maxBytes: MAX_UPLOAD_BYTES,
      },
      { status: 413 },
    );
  }

  const allowed = allowedExtensionsFor(question);
  const bytes = Buffer.from(await file.arrayBuffer());

  try {
    const result = await uploadAssessmentFile({
      clientSlug: link.clientSlug,
      questionId,
      filename: file.name || "upload",
      bytes,
      allowedExtensions: allowed,
    });
    return NextResponse.json({
      ok: true,
      answer: serializeFileAnswer(result),
      name: result.name,
      url: result.url,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "upload failed";
    const status =
      message === "file type not allowed"
        ? 415
        : message === "file too large"
          ? 413
          : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
