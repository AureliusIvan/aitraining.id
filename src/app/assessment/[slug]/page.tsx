import type { Metadata } from "next";
import { getQuestions } from "@/lib/assessment-sheets";
import { AssessmentForm } from "./AssessmentForm";

export const metadata: Metadata = {
  title: "Assessment Peserta Training",
  robots: { index: false, follow: false },
};

// Always reads the live Questions tab — never statically cached, so an edit
// to the Sheet shows up on the next page load with no redeploy.
export const dynamic = "force-dynamic";

export default async function AssessmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let questions: Awaited<ReturnType<typeof getQuestions>> = [];
  let loadError = false;
  try {
    questions = await getQuestions();
  } catch {
    loadError = true;
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-2xl">
        {loadError || questions.length === 0 ? (
          <p className="text-white/70 text-center">
            Form assessment belum tersedia saat ini. Silakan hubungi trainer
            Anda.
          </p>
        ) : (
          <AssessmentForm slug={slug} questions={questions} />
        )}
      </div>
    </div>
  );
}
