import type { Metadata } from "next";
import Link from "next/link";
import { EduFooter } from "@/components/edu/EduFooter";
import { EduHeader } from "@/components/edu/EduHeader";
import { eduTools } from "@/lib/edu";

const PAGE_URL = "https://aitraining.id/edu";

export const metadata: Metadata = {
  title: "Belajar AI per Tool: Claude, Cursor, ChatGPT Agent",
  description:
    "Materi belajar AI gratis yang dikelompokkan per tool: Claude, Cursor, dan ChatGPT Agent. Ditulis dengan bahasa dasar untuk pemula, lengkap dengan mode presentasi yang bisa dipakai ulang. Dari AI Training Indonesia oleh Aurelius Ivan Wijaya.",
  keywords: [
    "belajar AI",
    "belajar Claude",
    "belajar Cursor",
    "belajar ChatGPT Agent",
    "materi AI bahasa Indonesia",
    "tutorial AI pemula",
    "belajar AI untuk pemula",
    "kursus AI gratis Indonesia",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { id: PAGE_URL, en: PAGE_URL },
  },
  openGraph: {
    title: "Belajar AI per Tool | AI Training Indonesia",
    description:
      "Materi belajar AI gratis dikelompokkan per tool: Claude, Cursor, ChatGPT Agent. Bahasa dasar untuk pemula, dengan mode presentasi.",
    url: PAGE_URL,
    locale: "id_ID",
    alternateLocale: "en_US",
    type: "website",
  },
};

export default function EduIndexPage() {
  const liveModules = eduTools.flatMap((tool) =>
    tool.modules
      .filter((m) => m.status === "live")
      .map((m) => ({ tool, module: m })),
  );

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${PAGE_URL}#collection`,
    name: "Belajar AI per Tool",
    url: PAGE_URL,
    inLanguage: "id",
    description:
      "Materi belajar AI gratis dikelompokkan per tool: Claude, Cursor, dan ChatGPT Agent.",
    isPartOf: { "@id": "https://aitraining.id/#website" },
    hasPart: liveModules.map(({ tool, module }) => ({
      "@type": "LearningResource",
      name: `${tool.name}: ${module.name}`,
      url: `${PAGE_URL}/${tool.slug}/${module.slug}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: "https://aitraining.id" },
      { "@type": "ListItem", position: 2, name: "Edu", item: PAGE_URL },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="min-h-screen bg-[#f7f7f4] text-stone-900">
        <EduHeader />
        <main>
          {/* Hero */}
          <section className="px-6 pt-16 pb-10 sm:px-8 sm:pt-24">
            <div className="mx-auto max-w-6xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B3282D]">
                Materi belajar AI
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                Belajar AI, dikelompokkan per tool
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                Setiap tool punya modulnya sendiri, ditulis dengan bahasa dasar
                supaya mudah diikuti walau kamu baru mengenal AI. Setiap halaman
                juga punya mode presentasi, jadi materinya bisa langsung dipakai
                untuk mengajar.
              </p>
            </div>
          </section>

          {/* Tool groups */}
          <section className="px-6 pb-20 sm:px-8">
            <div className="mx-auto max-w-6xl space-y-6">
              {eduTools.map((tool) => (
                <div
                  key={tool.slug}
                  className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="inline-block h-3 w-3 rounded-full"
                      style={{ backgroundColor: tool.accent }}
                      aria-hidden="true"
                    />
                    <h2 className="text-2xl font-bold tracking-tight">
                      {tool.name}
                    </h2>
                    {tool.status === "soon" ? (
                      <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-500">
                        segera
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 max-w-2xl text-stone-500">{tool.tagline}</p>

                  {tool.modules.length > 0 ? (
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {tool.modules.map((mod) =>
                        mod.status === "live" ? (
                          <Link
                            key={mod.slug}
                            href={`/edu/${tool.slug}/${mod.slug}`}
                            className="group rounded-2xl border border-stone-200 bg-[#f7f7f4] p-5 transition-colors hover:border-[#B3282D]/40 hover:bg-white"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-stone-900">
                                {mod.name}
                              </h3>
                              <svg
                                className="h-5 w-5 text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#B3282D]"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                aria-hidden="true"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-stone-500">
                              {mod.blurb}
                            </p>
                          </Link>
                        ) : (
                          <div
                            key={mod.slug}
                            className="rounded-2xl border border-dashed border-stone-200 p-5 text-stone-400"
                          >
                            <h3 className="text-lg font-semibold">{mod.name}</h3>
                            <p className="mt-2 text-sm">{mod.blurb}</p>
                          </div>
                        ),
                      )}
                    </div>
                  ) : (
                    <p className="mt-6 text-sm text-stone-400">
                      Modul untuk {tool.name} sedang disiapkan.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </main>
        <EduFooter />
      </div>
    </>
  );
}
