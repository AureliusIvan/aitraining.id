import type { Metadata } from "next";
import Image from "next/image";
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
    <div className="min-h-screen bg-white text-neutral-900">
      {loadError || questions.length === 0 ? (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
          <Image
            src="/assets/brand/logo.png"
            alt="AI Training Indonesia"
            width={220}
            height={39}
            priority
            className="h-9 w-auto mb-10"
          />
          <p className="text-neutral-500 text-center text-lg">
            Form assessment belum tersedia saat ini. Silakan hubungi trainer
            Anda.
          </p>
        </div>
      ) : (
        <AssessmentForm
          token={token}
          questions={questions}
          clientLabel={link?.label}
        />
      )}
    </div>
  );
}
