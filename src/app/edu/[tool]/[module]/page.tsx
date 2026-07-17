import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EduBlocks } from "@/components/edu/EduBlocks";
import { EduFooter } from "@/components/edu/EduFooter";
import { EduHeader } from "@/components/edu/EduHeader";
import { PresentationMode } from "@/components/edu/PresentationMode";
import { eduModules, getEduModule } from "@/lib/edu";
import { mailtoTrainingInquiry } from "@/lib/contact";

export function generateStaticParams() {
  return eduModules.map((m) => ({ tool: m.toolSlug, module: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tool: string; module: string }>;
}): Promise<Metadata> {
  const { tool, module } = await params;
  const mod = getEduModule(tool, module);
  if (!mod) return {};
  const url = `https://aitraining.id/edu/${mod.toolSlug}/${mod.slug}`;
  return {
    title: mod.metaTitle,
    description: mod.metaDescription,
    keywords: mod.keywords,
    alternates: { canonical: url, languages: { id: url, en: url } },
    openGraph: {
      title: mod.metaTitle,
      description: mod.metaDescription,
      url,
      locale: "id_ID",
      alternateLocale: "en_US",
      type: "article",
    },
  };
}

export default async function EduModulePage({
  params,
}: {
  params: Promise<{ tool: string; module: string }>;
}) {
  const { tool, module } = await params;
  const mod = getEduModule(tool, module);
  if (!mod) notFound();

  const url = `https://aitraining.id/edu/${mod.toolSlug}/${mod.slug}`;
  const qrPrefix = `/assets/edu/${mod.toolSlug}-${mod.slug}--`;
  const logoSrc = "/assets/brand/logo.png";

  const learningSchema = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: mod.metaTitle,
    headline: mod.h1,
    description: mod.metaDescription,
    inLanguage: "id",
    url,
    datePublished: mod.datePublished,
    dateModified: mod.dateModified,
    educationalLevel: "Beginner",
    learningResourceType: "Tutorial",
    teaches: `${mod.toolName} ${mod.moduleName}`,
    isPartOf: { "@id": "https://aitraining.id/#website" },
    author: {
      "@type": "Person",
      "@id": "https://aurelivan.com/#person",
      name: "Aurelius Ivan Wijaya",
      url: "https://aurelivan.com",
    },
    publisher: {
      "@type": "EducationalOrganization",
      "@id": "https://aitraining.id/#organization",
    },
  };

  const howtoSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: mod.howto.name,
    inLanguage: "id",
    step: mod.howto.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mod.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: "https://aitraining.id" },
      { "@type": "ListItem", position: 2, name: "Edu", item: "https://aitraining.id/edu" },
      { "@type": "ListItem", position: 3, name: mod.toolName, item: `https://aitraining.id/edu/${mod.toolSlug}/${mod.slug}` },
      { "@type": "ListItem", position: 4, name: mod.moduleName, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(learningSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-[#f7f7f4] text-stone-900">
        <EduHeader />
        <main>
          {/* Hero */}
          <section className="px-6 pt-14 pb-10 sm:px-8 sm:pt-20">
            <div className="mx-auto max-w-3xl">
              <nav aria-label="Breadcrumb" className="mb-8 text-sm text-stone-400">
                <Link href="/edu" className="transition-colors hover:text-stone-700">
                  Edu
                </Link>
                <span className="mx-2">/</span>
                <span className="text-stone-600">{mod.toolName}</span>
                <span className="mx-2">/</span>
                <span className="text-stone-600">{mod.moduleName}</span>
              </nav>

              <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                <span className="rounded-full bg-[#B3282D]/10 px-3 py-1 text-[#B3282D]">
                  {mod.toolName}
                </span>
                <span className="rounded-full bg-stone-100 px-3 py-1 text-stone-500">
                  {mod.level}
                </span>
                <span className="rounded-full bg-stone-100 px-3 py-1 text-stone-500">
                  Baca {mod.readingLabel}
                </span>
              </div>

              <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                {mod.h1}
              </h1>
              <p className="mt-4 text-xl text-stone-500">{mod.tagline}</p>
              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                {mod.heroLede}
              </p>
              <p className="mt-6 text-sm text-stone-400">
                Ditulis oleh{" "}
                <a
                  href="https://aurelivan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors hover:text-stone-600"
                >
                  Aurelius Ivan Wijaya
                </a>
                . Terakhir diperbarui {mod.updated}.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm text-stone-500">
                <svg className="h-4 w-4 text-[#B3282D]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Tekan tombol Mode presentasi di pojok untuk menjadikannya slide.
              </p>
            </div>
          </section>

          {/* Web sections, one per slide */}
          {mod.slides.map((slide) => (
            <section
              key={slide.id}
              id={slide.id}
              className="border-t border-stone-200 px-6 py-14 sm:px-8"
            >
              <div className="mx-auto max-w-3xl">
                {slide.kicker ? (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#B3282D]">
                    {slide.kicker}
                  </p>
                ) : null}
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {slide.title}
                </h2>
                {slide.subtitle ? (
                  <p className="mt-3 text-lg text-stone-500">{slide.subtitle}</p>
                ) : null}
                <div className="mt-8">
                  <EduBlocks blocks={slide.blocks} mode="web" glossary={mod.glossary} />
                </div>
              </div>
            </section>
          ))}

          {/* FAQ */}
          <section id="faq" className="border-t border-stone-200 px-6 py-14 sm:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#B3282D]">
                Pertanyaan umum
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                FAQ
              </h2>
              <div className="mt-8 space-y-8">
                {mod.faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="text-lg font-semibold text-stone-900">
                      {faq.q}
                    </h3>
                    <p className="mt-2 leading-relaxed text-stone-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Further reading */}
          <section className="border-t border-stone-200 px-6 py-14 sm:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight">Bacaan lanjutan</h2>
              <ul className="mt-6 space-y-3 text-sm">
                {mod.sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-600 underline transition-colors hover:text-stone-900"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
                <li className="text-stone-500">
                  Semua materi belajar:{" "}
                  <Link href="/edu" className="underline transition-colors hover:text-stone-900">
                    aitraining.id/edu
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t border-stone-200 px-6 py-16 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ingin tim kamu dilatih langsung?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-stone-600">
                AI Training Indonesia membawakan pelatihan AI praktis untuk tim
                perusahaan, termasuk membangun dan memakai Skills di Claude.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href={mailtoTrainingInquiry()}
                  className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-8 py-4 font-medium text-white transition-colors hover:bg-stone-700"
                >
                  Diskusikan kebutuhan tim
                </a>
                <Link
                  href="/programs/claude"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-8 py-4 font-medium text-stone-700 transition-colors hover:bg-white"
                >
                  Lihat program Claude
                </Link>
              </div>
            </div>
          </section>
        </main>
        <EduFooter />
      </div>

      <PresentationMode
        title={mod.h1}
        tagline={mod.tagline}
        slides={mod.slides}
        faqs={mod.faqs}
        glossary={mod.glossary}
        qrPrefix={qrPrefix}
        logoSrc={logoSrc}
        pageUrl={url}
      />
    </>
  );
}
