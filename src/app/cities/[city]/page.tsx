import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { cities, getCity } from "@/lib/cities";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: cityId } = await params;
  const city = getCity(cityId);
  if (!city) return {};
  return {
    title: city.title,
    description: city.description,
    keywords: city.aiTrainer
      ? [
          `AI trainer ${city.name}`,
          `pelatihan AI terbaik ${city.name}`,
          `pelatihan AI korporat ${city.name}`,
          `pelatihan AI ${city.name} untuk perusahaan`,
          `corporate AI training ${city.name}`,
          `AI training ${city.name}`,
          `best AI training ${city.name}`,
          ...(city.keywords ?? []),
        ]
      : city.keywords,
    alternates: { canonical: `https://aitraining.id/cities/${city.id}` },
    openGraph: { url: `https://aitraining.id/cities/${city.id}` },
  };
}

const programs = [
  {
    name: "AI Workflow Automation",
    note: "n8n: operations, marketing, HR, finance",
  },
  {
    name: "AI-Powered Development",
    note: "Cursor, agent building, engineering teams",
  },
  {
    name: "AI Strategy & Adoption",
    note: "executive session, C-suite & leaders",
  },
  { name: "OpenClaw Training", note: "hands-on AI agent workflows" },
];

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: cityId } = await params;
  const city = getCity(cityId);
  if (!city) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: city.title,
    description: city.description,
    serviceType: "Corporate AI Training",
    provider: {
      "@type": "Person",
      name: "Aurelius Ivan Wijaya",
      url: "https://aurelivan.com",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "Country", name: "Indonesia" },
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1500000",
        priceCurrency: "IDR",
        unitCode: "HUR",
        unitText: "per hour",
      },
      url: "https://aitraining.id/pricing",
    },
    url: `https://aitraining.id/cities/${city.id}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://aitraining.id",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cities",
        item: "https://aitraining.id/cities",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: city.name,
        item: `https://aitraining.id/cities/${city.id}`,
      },
    ],
  };

  // General "best AI trainer <city>" FAQ schema, rendered only for cities that
  // carry an aiTrainer block (currently Jakarta) to target "AI trainer <city>"
  // and "pelatihan AI terbaik <city>".
  const aiTrainerFaqSchema = city.aiTrainer
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          ...(city.aiTrainer.defBlock
            ? [
                {
                  "@type": "Question",
                  name: city.aiTrainer.defBlock.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: city.aiTrainer.defBlock.a,
                  },
                },
              ]
            : []),
          ...(city.aiTrainer.defBlock?.qEn && city.aiTrainer.defBlock?.aEn
            ? [
                {
                  "@type": "Question",
                  name: city.aiTrainer.defBlock.qEn,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: city.aiTrainer.defBlock.aEn,
                  },
                },
              ]
            : []),
          ...city.aiTrainer.faqs.flatMap((f) => [
            {
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            },
            ...(f.qEn && f.aEn
              ? [
                  {
                    "@type": "Question",
                    name: f.qEn,
                    acceptedAnswer: { "@type": "Answer", text: f.aEn },
                  },
                ]
              : []),
          ]),
        ],
      }
    : null;

  // GEO (Generative Engine Optimization) schema, rendered only for cities that
  // carry a geo block (currently Jakarta) to target "GEO trainer <city>".
  const geoServiceSchema = city.geo
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Generative Engine Optimization Training",
        name: `GEO Training ${city.name}`,
        description: `Pelatihan Generative Engine Optimization (GEO) untuk tim perusahaan di ${city.name}: membuat konten dikutip ChatGPT, Perplexity, dan Google AI Overviews.`,
        provider: {
          "@type": "Person",
          "@id": "https://aurelivan.com/#person",
          name: "Aurelius Ivan Wijaya",
        },
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: { "@type": "Country", name: "Indonesia" },
        },
        url: `https://aitraining.id/cities/${city.id}`,
      }
    : null;

  const geoFaqSchema = city.geo
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: city.geo.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {aiTrainerFaqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aiTrainerFaqSchema),
          }}
        />
      )}
      {geoServiceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(geoServiceSchema),
          }}
        />
      )}
      {geoFaqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(geoFaqSchema) }}
        />
      )}
      <div className="min-h-screen bg-black text-white">
        <Nav />
        <main>
          <section className="relative pt-32 pb-16 px-6 sm:px-8">
            <div className="max-w-[1400px] mx-auto">
              <div className="max-w-3xl">
                <p className="text-white/50 text-sm mb-4 tracking-wide">
                  <Link
                    href="/cities"
                    className="hover:text-white transition-colors"
                  >
                    Cakupan Wilayah
                  </Link>{" "}
                  / {city.name}
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight mb-6">
                  {city.title}
                </h1>
                <p className="text-white/70 text-lg sm:text-xl leading-relaxed">
                  {city.intro}
                </p>
              </div>
            </div>
          </section>

          <section className="bg-black py-12 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-sm text-white/70 font-medium tracking-wide mb-4">
                  KENAPA DI {city.name.toUpperCase()}
                </p>
                <ul className="space-y-3">
                  {city.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-white/70 text-sm">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm text-white/70 font-medium tracking-wide mb-4">
                  PROGRAM DI {city.name.toUpperCase()}
                </p>
                <ul className="space-y-3">
                  {programs.map((p) => (
                    <li
                      key={p.name}
                      className="border border-white/10 rounded-xl p-4"
                    >
                      <p className="text-white font-medium text-sm">{p.name}</p>
                      <p className="text-white/50 text-xs mt-1">{p.note}</p>
                    </li>
                  ))}
                </ul>
                <p className="text-white/40 text-xs mt-4">
                  Rate dasar Rp 1.500.000 / jam ·{" "}
                  <Link href="/pricing" className="underline hover:text-white">
                    lihat paket lengkap
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {city.aiTrainer && (
            <section className="bg-black py-16 px-6 sm:px-8 border-t border-white/10">
              <div className="max-w-[1400px] mx-auto">
                {city.aiTrainer.defBlock && (
                  <div
                    id={city.aiTrainer.defBlock.id}
                    className="max-w-3xl mb-10 border border-white/10 rounded-2xl p-8"
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      {city.aiTrainer.defBlock.q}
                    </h2>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {city.aiTrainer.defBlock.a}
                    </p>
                    {city.aiTrainer.defBlock.qEn &&
                      city.aiTrainer.defBlock.aEn && (
                        <>
                          <h2 className="text-xl sm:text-2xl font-bold text-white mt-6 mb-3">
                            {city.aiTrainer.defBlock.qEn}
                          </h2>
                          <p className="text-white/70 text-sm leading-relaxed">
                            {city.aiTrainer.defBlock.aEn}
                          </p>
                        </>
                      )}
                  </div>
                )}
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Memilih Pelatihan AI dan AI Trainer Terbaik di {city.name}
                </h2>
                <p
                  className={`text-white/60 text-sm leading-relaxed max-w-3xl ${
                    city.aiTrainer.introEn ? "mb-2" : "mb-8"
                  }`}
                >
                  {city.aiTrainer.intro}
                </p>
                {city.aiTrainer.introEn && (
                  <p className="text-white/50 text-sm leading-relaxed max-w-3xl mb-8">
                    {city.aiTrainer.introEn}
                  </p>
                )}
                <div className="space-y-6 max-w-3xl">
                  {city.aiTrainer.faqs.map((f) => (
                    <div key={f.q} className="border-b border-white/10 pb-6">
                      <h3 className="text-white font-semibold mb-2">{f.q}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {f.a}
                      </p>
                      {f.qEn && f.aEn && (
                        <>
                          <h3 className="text-white/90 font-semibold mt-4 mb-2">
                            {f.qEn}
                          </h3>
                          <p className="text-white/60 text-sm leading-relaxed">
                            {f.aEn}
                          </p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-white/50 text-sm">
                  Bandingkan opsi lengkap di{" "}
                  <Link
                    href="/best-ai-trainers-indonesia"
                    className="underline hover:text-white/80 transition-colors"
                  >
                    Top 10 AI Trainer Indonesia
                  </Link>{" "}
                  atau lihat{" "}
                  <Link
                    href="/pricing"
                    className="underline hover:text-white/80 transition-colors"
                  >
                    paket harga
                  </Link>
                  .
                </p>
              </div>
            </section>
          )}

          {city.geo && (
            <section className="bg-black py-16 px-6 sm:px-8 border-t border-white/10">
              <div className="max-w-[1400px] mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                  Pelatihan GEO di {city.name}
                </h2>
                <div className="space-y-6 max-w-3xl">
                  {city.geo.faqs.map((f) => (
                    <div key={f.q} className="border-b border-white/10 pb-6">
                      <h3 className="text-white font-semibold mb-2">{f.q}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-white/50 text-sm">
                  Detail lengkap di{" "}
                  <Link
                    href="/geo-training"
                    className="underline hover:text-white/80 transition-colors"
                  >
                    halaman GEO training
                  </Link>{" "}
                  dan{" "}
                  <Link
                    href="/best-geo-trainers-indonesia"
                    className="underline hover:text-white/80 transition-colors"
                  >
                    Best GEO Trainers in Indonesia
                  </Link>
                  .
                </p>
              </div>
            </section>
          )}

          <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="border border-white/10 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Book corporate AI training di {city.name}
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                  Jadwalkan konsultasi gratis 30 menit untuk membahas kebutuhan
                  tim Anda di {city.name}. On-site maupun virtual.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://calendly.com/aureliusivanwijaya/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all text-lg font-medium"
                  >
                    <span>Book di {city.name}</span>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all text-lg text-white/90"
                  >
                    Hubungi kami
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
