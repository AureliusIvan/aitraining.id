import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { partners } from "@/lib/partners";

export const metadata: Metadata = {
  title:
    "Partners aitraining.id: n8n, Cursor, Build Club, HeyGen | Corporate AI Training Indonesia",
  description:
    "Tools dan komunitas yang menjadi dasar pelatihan AI aitraining.id: n8n (workflow automation), Cursor (agentic development), Build Club (komunitas AI builder), dan HeyGen (video automation). Disampaikan oleh Aurelius Ivan Wijaya.",
  keywords: [
    "partner aitraining.id",
    "n8n Indonesia",
    "Cursor Indonesia",
    "Build Club Indonesia",
    "HeyGen Indonesia",
    "corporate AI training partner",
  ],
  alternates: { canonical: "https://aitraining.id/partners" },
  openGraph: { url: "https://aitraining.id/partners" },
};

export default function PartnersPage() {
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
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: partners.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `https://aitraining.id/partners/${p.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="min-h-screen bg-black text-white">
        <Nav />
        <main>
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
                <span className="text-white/70">Partners</span>
              </nav>
              <div className="max-w-3xl">
                <p className="text-white/70 text-sm mb-4 tracking-wide">
                  [ Partners ]
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight mb-6">
                  <span className="text-white">Tools dan komunitas</span>
                  <br />
                  <span className="text-white/60">
                    di balik pelatihan aitraining.id
                  </span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed">
                  Setiap program aitraining.id berdiri di atas tools dan
                  komunitas yang dipakai tim setiap hari. Berikut empat partner
                  utama dan peran masing-masing dalam pelatihan.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid sm:grid-cols-2 gap-6">
                {partners.map((partner) => (
                  <Link
                    key={partner.slug}
                    href={`/partners/${partner.slug}`}
                    className="group p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="inline-flex items-center justify-center rounded-xl bg-white/90 px-5 py-3">
                        <Image
                          src={partner.logo}
                          alt={`Logo ${partner.name}`}
                          width={120}
                          height={40}
                          className="h-7 w-auto object-contain"
                        />
                      </span>
                      <span className="text-white/40 text-xs tracking-wide">
                        {partner.kind}
                      </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-white mb-1">
                      {partner.name}
                    </h2>
                    <p className="text-white/50 text-sm mb-4">
                      {partner.category} · {partner.credentialBadge}
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {partner.defId.a}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-6 text-white/80 text-sm group-hover:text-white transition-colors">
                      Baca selengkapnya
                      <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ingin melatih tim Anda dengan tools ini?
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Konsultasi awal 30 menit gratis. Kami bantu petakan kebutuhan
                tim Anda sebelum menyusun program.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://calendly.com/aureliusivanwijaya/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all font-medium"
                >
                  Jadwalkan via Calendly
                </a>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
                >
                  Lihat semua program
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
