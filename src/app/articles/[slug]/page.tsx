import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ARTICLE_CALENDLY, articles, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const url = `https://aitraining.id/articles/${article.slug}`;
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: url,
      languages: { id: url, en: url },
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url,
      locale: "id_ID",
      alternateLocale: "en_US",
      type: "article",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const url = `https://aitraining.id/articles/${article.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.h1,
    description: article.metaDescription,
    inLanguage: "id",
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Person",
      "@id": "https://aurelivan.com/#person",
      name: "Aurelius Ivan Wijaya",
      url: "https://aurelivan.com",
    },
    publisher: {
      "@type": "Person",
      "@id": "https://aurelivan.com/#person",
      name: "Aurelius Ivan Wijaya",
      url: "https://aurelivan.com",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: "Articles", item: "https://aitraining.id/articles" },
      { "@type": "ListItem", position: 3, name: article.h1, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="min-h-screen bg-black text-white">
        <Nav />
        <main>
          {/* Hero */}
          <section className="relative pt-32 pb-16 px-6 sm:px-8">
            <div className="max-w-[1400px] mx-auto">
              <nav aria-label="Breadcrumb" className="text-sm text-white/50 mb-8">
                <Link href="/" className="hover:text-white/80 transition-colors">
                  Beranda
                </Link>
                <span className="mx-2">/</span>
                <Link href="/articles" className="hover:text-white/80 transition-colors">
                  Articles
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white/70">{article.h1}</span>
              </nav>

              <div className="max-w-3xl">
                <p className="text-white/50 text-sm tracking-wide mb-4">
                  [ {article.category} ]
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight mb-4">
                  {article.h1}
                </h1>
                <p className="text-white/60 text-xl mb-6">{article.h1sub}</p>
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  {article.lede}
                </p>
                <p className="text-white/50 text-sm max-w-2xl leading-relaxed">
                  Ditulis oleh{" "}
                  <a
                    href="https://aurelivan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/70 transition-colors"
                  >
                    Aurelius Ivan Wijaya
                  </a>
                  , {article.authorNote}.
                </p>
                <p className="text-white/40 text-xs mt-3">
                  Terakhir diperbarui: {article.updated}
                </p>
              </div>
            </div>
          </section>

          {/* Definition blocks */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="max-w-3xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {article.defId.q}
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">{article.defId.a}</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {article.defEn.q}
                </h2>
                <p className="text-white/70 leading-relaxed">{article.defEn.a}</p>
              </div>
            </div>
          </section>

          {/* Editorial sections */}
          {article.sections.map((section) => (
            <section key={section.h2} className="py-16 px-6 sm:px-8 border-t border-white/10">
              <div className="max-w-[1400px] mx-auto">
                <div className="max-w-3xl">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    {section.h2}
                  </h2>
                  {section.body.map((para) => (
                    <p key={para.slice(0, 40)} className="text-white/70 leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* Feature cards */}
          {article.features ? (
            <section className="py-16 px-6 sm:px-8 border-t border-white/10">
              <div className="max-w-[1400px] mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {article.features.heading}
                </h2>
                <p className="text-white/60 mb-10 max-w-2xl">{article.features.intro}</p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {article.features.items.map((item) => (
                    <div key={item.title} className="p-6 border border-white/10 rounded-2xl">
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {/* FAQ */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Pertanyaan umum
              </h2>
              <div className="space-y-8 max-w-3xl">
                {article.faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                    <p className="text-white/70 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cross-links */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Referensi lanjutan</h2>
              <div className="space-y-3 max-w-2xl text-sm">
                {article.relatedHref ? (
                  <p className="text-white/70">
                    Program pelatihan terkait:{" "}
                    <Link
                      href={article.relatedHref}
                      className="underline hover:text-white/90 transition-colors"
                    >
                      {article.relatedLabel ?? "Lihat program"}
                    </Link>
                  </p>
                ) : null}
                {article.externalUrl ? (
                  <p className="text-white/70">
                    Situs resmi:{" "}
                    <a
                      href={article.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-white/90 transition-colors"
                    >
                      {article.externalName}
                    </a>
                  </p>
                ) : null}
                <p className="text-white/70">
                  Semua artikel aitraining.id:{" "}
                  <Link href="/articles" className="underline hover:text-white/90 transition-colors">
                    aitraining.id/articles
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ingin tim Anda dilatih untuk topik ini?
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Konsultasi awal 30 menit gratis. Kami bantu petakan kebutuhan tim Anda
                sebelum menyusun program.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={ARTICLE_CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all font-medium"
                >
                  Jadwalkan via Calendly
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
                >
                  Hubungi kami
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
