import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { getPartner, PARTNER_CALENDLY, partners } from "@/lib/partners";

export function generateStaticParams() {
  return partners.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const partner = getPartner(slug);
  if (!partner) return {};
  const url = `https://aitraining.id/partners/${partner.slug}`;
  return {
    title: partner.metaTitle,
    description: partner.metaDescription,
    keywords: partner.keywords,
    alternates: {
      canonical: url,
      languages: { id: url, en: url },
    },
    openGraph: {
      title: partner.metaTitle,
      description: partner.metaDescription,
      url,
      locale: "id_ID",
      alternateLocale: "en_US",
      type: "article",
    },
  };
}

export default async function PartnerArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const partner = getPartner(slug);
  if (!partner) notFound();

  const url = `https://aitraining.id/partners/${partner.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: partner.h1,
    description: partner.metaDescription,
    inLanguage: "id",
    datePublished: partner.datePublished,
    dateModified: partner.dateModified,
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
    about: { "@type": "Thing", name: partner.name },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: partner.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
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
        name: "Partners",
        item: "https://aitraining.id/partners",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: partner.name,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-black text-white">
        <Nav />
        <main>
          {/* Hero */}
          <section className="relative pt-32 pb-16 px-6 sm:px-8">
            <div className="max-w-[1400px] mx-auto">
              <nav
                aria-label="Breadcrumb"
                className="text-sm text-white/50 mb-8"
              >
                <Link
                  href="/"
                  className="hover:text-white/80 transition-colors"
                >
                  Beranda
                </Link>
                <span className="mx-2">/</span>
                <Link
                  href="/partners"
                  className="hover:text-white/80 transition-colors"
                >
                  Partners
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white/70">{partner.name}</span>
              </nav>

              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <span className="inline-flex items-center justify-center rounded-xl bg-white/90 px-4 py-3">
                    <Image
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      width={120}
                      height={40}
                      className="h-7 w-auto object-contain"
                    />
                  </span>
                  <span className="text-white/50 text-sm tracking-wide">
                    [ {partner.category} ] · {partner.kind}
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight mb-6">
                  <span className="text-white">{partner.h1}</span>
                  <br />
                  <span className="text-white/60">{partner.h1sub}</span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed mb-4">
                  {partner.lede}
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
                  , {partner.credentialBadge}.
                </p>
                <p className="text-white/40 text-xs mt-3">
                  Terakhir diperbarui: {partner.updated}
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href={PARTNER_CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all font-medium"
                  >
                    Jadwalkan konsultasi
                  </a>
                  {partner.programHref ? (
                    <Link
                      href={partner.programHref}
                      className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors text-white/80"
                    >
                      {partner.programLabel ?? "Lihat program"}
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </section>

          {/* Definition blocks — bilingual, snippet-sized for AI extraction */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="max-w-3xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {partner.defId.q}
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  {partner.defId.a}
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {partner.defEn.q}
                </h2>
                <p className="text-white/70 leading-relaxed">
                  {partner.defEn.a}
                </p>
              </div>
            </div>
          </section>

          {/* Editorial sections */}
          {partner.sections.map((section) => (
            <section
              key={section.h2}
              className="py-16 px-6 sm:px-8 border-t border-white/10"
            >
              <div className="max-w-[1400px] mx-auto">
                <div className="max-w-3xl">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    {section.h2}
                  </h2>
                  {section.body.map((para) => (
                    <p
                      key={para.slice(0, 40)}
                      className="text-white/70 leading-relaxed mb-4"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* Feature cards */}
          {partner.features ? (
            <section className="py-16 px-6 sm:px-8 border-t border-white/10">
              <div className="max-w-[1400px] mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {partner.features.heading}
                </h2>
                <p className="text-white/60 mb-10 max-w-2xl">
                  {partner.features.intro}
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {partner.features.items.map((item) => (
                    <div
                      key={item.title}
                      className="p-6 border border-white/10 rounded-2xl"
                    >
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {item.detail}
                      </p>
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
                Pertanyaan umum tentang {partner.name}
              </h2>
              <div className="space-y-8 max-w-3xl">
                {partner.faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-white/70 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cross-links */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">
                Referensi lanjutan
              </h2>
              <div className="space-y-3 max-w-2xl text-sm">
                {partner.programHref ? (
                  <p className="text-white/70">
                    Program pelatihan terkait:{" "}
                    <Link
                      href={partner.programHref}
                      className="underline hover:text-white/90 transition-colors"
                    >
                      {partner.programLabel ?? "Lihat program"}
                    </Link>
                  </p>
                ) : null}
                <p className="text-white/70">
                  Situs resmi {partner.name}:{" "}
                  <a
                    href={partner.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/90 transition-colors"
                  >
                    {partner.externalName}
                  </a>
                </p>
                <p className="text-white/70">
                  Semua partner aitraining.id:{" "}
                  <Link
                    href="/partners"
                    className="underline hover:text-white/90 transition-colors"
                  >
                    aitraining.id/partners
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Latih tim Anda dengan {partner.name}
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Konsultasi awal 30 menit gratis. Kami bantu petakan kebutuhan
                tim Anda sebelum menyusun program.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={PARTNER_CALENDLY}
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
