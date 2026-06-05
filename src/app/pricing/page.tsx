import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Harga Corporate AI Training — Rate & Paket",
  description:
    "Rate corporate AI training Indonesia: mulai dari IDR 1.500.000 per jam. Paket half-day, full-day, dan multi-day intensive untuk AI automation, AI development, dan AI strategy. Delivered by Aurelius Ivan Wijaya — Corporate AI Trainer & Cursor Ambassador.",
  alternates: {
    canonical: "https://aitraining.id/pricing",
  },
  openGraph: {
    url: "https://aitraining.id/pricing",
  },
};

const HOURLY_RATE = "Rp 1.500.000";

const packages = [
  {
    label: "Intro / Executive",
    title: "Half-day Session",
    duration: "4 jam",
    from: "Rp 6.000.000",
    audience: "Single team atau executive briefing C-suite",
    includes: [
      "Slides + hands-on lab",
      "Session recording",
      "Certificate of completion",
    ],
    primary: false,
  },
  {
    label: "Paling populer",
    title: "Full-day Workshop",
    duration: "8 jam",
    from: "Rp 12.000.000",
    audience: "Hingga ±20 peserta per cohort",
    includes: [
      "Custom-fit curriculum",
      "Materi + recordings",
      "Certificate of completion",
    ],
    primary: true,
  },
  {
    label: "Intensive",
    title: "Multi-day Program",
    duration: "2 hari (16 jam), 3–5 hari tersedia",
    from: "Rp 24.000.000",
    audience: "Engineering team atau multi-team rollout",
    includes: [
      "Tailored curriculum + hands-on projects",
      "Materi + recordings",
      "30-day post-training Q&A support",
    ],
    primary: false,
  },
];

const drivers = [
  "Jumlah peserta",
  "Tingkat kustomisasi kurikulum",
  "On-site vs. virtual",
  "Kota dan kebutuhan travel",
  "Jumlah sesi / total jam",
  "Inklusi recording, materi, sertifikat, dan support pasca-training",
];

export default function PricingPage() {
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Corporate AI Training — aitraining.id",
    serviceType: "Corporate AI Training",
    provider: {
      "@type": "Person",
      name: "Aurelius Ivan Wijaya",
      url: "https://aurelivan.com",
    },
    areaServed: { "@type": "Country", name: "Indonesia" },
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1500000",
        priceCurrency: "IDR",
        unitCode: "HUR",
        unitText: "per hour",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: "1",
          unitCode: "HUR",
        },
      },
      availability: "https://schema.org/InStock",
      url: "https://aitraining.id/pricing",
    },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <Nav />
      <main>
        <section className="relative pt-32 pb-16 px-6 sm:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-3xl">
              <p className="text-white/70 text-sm mb-4 tracking-wide">
                [ Harga ]
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight mb-6">
                <span className="text-white">Rate &</span>
                <br />
                <span className="text-white/60">Paket Training</span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed">
                Rate dasar corporate AI training adalah{" "}
                <span className="text-white font-semibold">
                  {HOURLY_RATE} per jam
                </span>
                . Paket di bawah dihitung dari rate tersebut. Quote final
                menyesuaikan jumlah peserta, kustomisasi, dan format delivery.
                Konsultasi pertama gratis.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-black py-12 px-6 sm:px-8 border-t border-white/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, i) => (
                <div
                  key={i}
                  className={`border rounded-2xl p-8 flex flex-col ${
                    pkg.primary
                      ? "border-white/30 bg-white/[0.03]"
                      : "border-white/10"
                  }`}
                >
                  <p className="text-white/50 text-xs tracking-widest uppercase mb-3">
                    {pkg.label}
                  </p>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {pkg.title}
                  </h2>
                  <p className="text-white/50 text-sm mb-5">{pkg.duration}</p>
                  <div className="mb-5">
                    <p className="text-white/40 text-xs mb-1">mulai dari</p>
                    <p className="text-3xl font-bold text-white">{pkg.from}</p>
                  </div>
                  <p className="text-white/70 text-sm mb-5">{pkg.audience}</p>
                  <ul className="space-y-2 mb-8">
                    {pkg.includes.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-white/70 text-sm"
                      >
                        <span className="text-white/30 mt-0.5">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all font-medium ${
                      pkg.primary
                        ? "bg-white text-black hover:bg-white/90"
                        : "border border-white/20 text-white/90 hover:bg-white/5"
                    }`}
                  >
                    <span>Minta proposal</span>
                  </a>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-sm mt-6">
              Butuh rollout multi-team atau enablement retainer berkelanjutan?{" "}
              <a
                href="/contact"
                className="underline text-white/70 hover:text-white transition-colors"
              >
                Request custom / enterprise quote
              </a>
              .
            </p>
          </div>
        </section>

        <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Apa yang menentukan quote final
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Rate dasar tetap {HOURLY_RATE} per jam. Total proposal
                  menyesuaikan beberapa faktor di samping.
                </p>
              </div>
              <div className="space-y-4">
                {drivers.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-white/30 text-sm font-mono flex-shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-white/70 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-16 px-6 sm:px-8 border-t border-white/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-white/50 text-sm mb-2">Rate dasar</p>
                  <p className="text-2xl font-bold text-white">{HOURLY_RATE}</p>
                  <p className="text-white/40 text-xs mt-1">per jam</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-2">Konsultasi awal</p>
                  <p className="text-2xl font-bold text-white">Gratis</p>
                  <p className="text-white/40 text-xs mt-1">
                    30 menit discovery call
                  </p>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-2">Cakupan</p>
                  <p className="text-2xl font-bold text-white">
                    Seluruh Indonesia
                  </p>
                  <p className="text-white/40 text-xs mt-1">
                    On-site & virtual
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
