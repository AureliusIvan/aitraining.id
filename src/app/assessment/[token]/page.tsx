import { redirect } from "next/navigation";

// /assessment/<token> was the original path (shared with Bukalapak before the
// route moved to /form/<token>). Keep it alive as a redirect so already
// -distributed links never 404 — token validation happens on the /form side.
export default async function LegacyAssessmentRedirect({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  redirect(`/form/${token}`);
}
