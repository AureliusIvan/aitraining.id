import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { cities } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Corporate AI Training di Kota-Kota Indonesia",
  description:
    "Corporate AI training on-site di Jakarta, Surabaya, Bandung, Tangerang, dan kota lainnya di Indonesia. Delivered by Aurelius Ivan Wijaya dari aurelivan.com.",
  alternates: {
    canonical: "https://aitraining.id/cities",
  },
  openGraph: {
    url: "https://aitraining.id/cities",
  },
};

export default function CitiesPage() {
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
    ],
  };

  const localBusinessSchema = cities.map((city) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Corporate AI Training ${city.name}`,
    description: city.description,
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
    url: `https://aitraining.id/cities#${city.id}`,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <div className="min-h-screen bg-black text-white">
        <Nav />
        <main>
          <section className="relative pt-32 pb-16 px-6 sm:px-8">
            <div className="max-w-[1400px] mx-auto">
              <div className="max-w-3xl">
                <p className="text-white/70 text-sm mb-4 tracking-wide">
                  [ Cakupan Wilayah ]
                </p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight mb-6">
                  <span className="text-white">Corporate AI Training</span>
                  <br />
                  <span className="text-white/60">di Indonesia</span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed">
                  Corporate AI training on-site tersedia di kota-kota besar
                  Indonesia. Didelivery langsung di kantor perusahaan Anda oleh{" "}
                  <a
                    href="https://aurelivan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-white/90 hover:text-white transition-colors"
                  >
                    Aurelius Ivan Wijaya
                  </a>
                  . Virtual session juga tersedia untuk tim remote di seluruh
                  Indonesia.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-black py-12 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto space-y-8">
              {cities.map((city) => (
                <div
                  key={city.id}
                  id={city.id}
                  className="border border-white/10 rounded-2xl p-8 md:p-12 scroll-mt-24"
                >
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        {city.title}
                      </h2>
                      <p className="text-white/70 leading-relaxed mb-6">
                        {city.description}
                      </p>
                      <div className="flex gap-4">
                        <a
                          href="https://calendly.com/aureliusivanwijaya/30min"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full hover:bg-white/90 transition-all group text-sm font-medium"
                        >
                          <span>Book di {city.name}</span>
                          <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </a>
                        <Link
                          href={`/cities/${city.id}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 rounded-full hover:bg-white/5 transition-all text-sm text-white/80"
                        >
                          Halaman {city.name} →
                        </Link>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-white/70 font-medium tracking-wide mb-4">
                        HIGHLIGHTS
                      </p>
                      <ul className="space-y-3">
                        {city.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
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
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="border border-white/10 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Kota Anda tidak ada di list?
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                  Corporate AI training tersedia di seluruh Indonesia —
                  Yogyakarta, Semarang, Medan, Makassar, Bali, dan kota lainnya.
                  Hubungi kami untuk diskusi.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://calendly.com/aureliusivanwijaya/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all group text-lg font-medium"
                  >
                    <span>Tanya ketersediaan</span>
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://aurelivan.com/corporate-training"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all text-lg"
                  >
                    <span className="text-white/90">
                      Lihat di aurelivan.com
                    </span>
                  </a>
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
