import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EduFooter } from "@/components/edu/EduFooter";
import { EduHeader } from "@/components/edu/EduHeader";
import { eduTools, getEduTool } from "@/lib/edu";

export function generateStaticParams() {
  return eduTools.map((t) => ({ tool: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tool: string }>;
}): Promise<Metadata> {
  const { tool } = await params;
  const t = getEduTool(tool);
  if (!t) return {};
  const url = `https://aitraining.id/edu/${t.slug}`;
  const title = `Belajar ${t.name}: Materi Dasar untuk Pemula`;
  const description = `${t.tagline} Kumpulan materi belajar ${t.name} dari AI Training Indonesia oleh Aurelius Ivan Wijaya, ditulis dengan bahasa dasar dan bisa dipakai sebagai slide presentasi.`;
  return {
    title,
    description,
    keywords: [
      `belajar ${t.name}`,
      `apa itu ${t.name}`,
      `tutorial ${t.name}`,
      `${t.name} untuk pemula`,
      `materi ${t.name} bahasa Indonesia`,
    ],
    alternates: { canonical: url, languages: { id: url, en: url } },
    openGraph: {
      title: `Belajar ${t.name} | AI Training Indonesia`,
      description,
      url,
      locale: "id_ID",
      alternateLocale: "en_US",
      type: "website",
    },
  };
}

export default async function EduToolPage({
  params,
}: {
  params: Promise<{ tool: string }>;
}) {
  const { tool } = await params;
  const t = getEduTool(tool);
  if (!t) notFound();

  const url = `https://aitraining.id/edu/${t.slug}`;
  const liveModules = t.modules.filter((m) => m.status === "live");

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    name: `Belajar ${t.name}`,
    url,
    inLanguage: "id",
    description: t.tagline,
    isPartOf: { "@id": "https://aitraining.id/#website" },
    hasPart: liveModules.map((m) => ({
      "@type": "LearningResource",
      name: `${t.name}: ${m.name}`,
      url: `${url}/${m.slug}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: "https://aitraining.id",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Edu",
        item: "https://aitraining.id/edu",
      },
      { "@type": "ListItem", position: 3, name: t.name, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-[#f7f7f4] text-stone-900">
        <EduHeader />
        <main>
          <section className="px-6 pt-16 pb-10 sm:px-8 sm:pt-24">
            <div className="mx-auto max-w-6xl">
              <nav
                aria-label="Breadcrumb"
                className="mb-8 text-sm text-stone-400"
              >
                <Link
                  href="/edu"
                  className="transition-colors hover:text-stone-700"
                >
                  Edu
                </Link>
                <span className="mx-2">/</span>
                <span className="text-stone-600">{t.name}</span>
              </nav>
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ backgroundColor: t.accent }}
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
                  Materi belajar
                </p>
              </div>
              <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                Belajar {t.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                {t.tagline}
              </p>
            </div>
          </section>

          <section className="px-6 pb-20 sm:px-8">
            <div className="mx-auto max-w-6xl">
              {t.modules.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {t.modules.map((mod) =>
                    mod.status === "live" ? (
                      <Link
                        key={mod.slug}
                        href={`/edu/${t.slug}/${mod.slug}`}
                        className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-colors hover:border-[#B3282D]/40"
                      >
                        <div className="flex items-center justify-between">
                          <h2 className="text-xl font-semibold text-stone-900">
                            {mod.name}
                          </h2>
                          <svg
                            className="h-5 w-5 text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#B3282D]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-stone-500">
                          {mod.blurb}
                        </p>
                      </Link>
                    ) : (
                      <div
                        key={mod.slug}
                        className="rounded-2xl border border-dashed border-stone-200 p-6 text-stone-400"
                      >
                        <div className="flex items-center gap-2">
                          <h2 className="text-xl font-semibold">{mod.name}</h2>
                          <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium">
                            segera
                          </span>
                        </div>
                        <p className="mt-2 text-sm">{mod.blurb}</p>
                      </div>
                    ),
                  )}
                </div>
              ) : (
                <div className="rounded-3xl border border-dashed border-stone-200 bg-white p-10 text-center">
                  <p className="text-lg font-medium text-stone-700">
                    Materi {t.name} sedang disiapkan.
                  </p>
                  <p className="mt-2 text-stone-500">
                    Sementara ini, jelajahi tool lain di{" "}
                    <Link
                      href="/edu"
                      className="underline transition-colors hover:text-stone-900"
                    >
                      halaman edu
                    </Link>
                    .
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>
        <EduFooter />
      </div>
    </>
  );
}
