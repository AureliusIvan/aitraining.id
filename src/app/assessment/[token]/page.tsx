import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getQuestions, resolveToken } from "@/lib/assessment-sheets";
import { AssessmentForm } from "./AssessmentForm";

export const metadata: Metadata = {
  title: "Assessment Peserta Training",
  robots: { index: false, follow: false },
};

// Always reads live — never statically cached, so a Sheet edit (new question,
// new/revoked token) shows up on the next load with no redeploy.
export const dynamic = "force-dynamic";

export default async function AssessmentPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  let loadError = false;
  let questions: Awaited<ReturnType<typeof getQuestions>> = [];
  let link: Awaited<ReturnType<typeof resolveToken>> = null;
  try {
    link = await resolveToken(token);
    if (link) questions = await getQuestions();
  } catch {
    loadError = true;
  }

  // Unknown/inactive token gets the same 404 as any nonexistent route — no
  // hint that distinguishes "wrong token" from "page doesn't exist", so the
  // URL space can't be probed for valid links.
  if (!loadError && !link) notFound();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-2xl">
        {loadError || questions.length === 0 ? (
          <p className="text-white/70 text-center">
            Form assessment belum tersedia saat ini. Silakan hubungi trainer
            Anda.
          </p>
        ) : (
          <AssessmentForm token={token} questions={questions} />
        )}
      </div>
    </div>
  );
}
