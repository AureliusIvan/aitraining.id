import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "AI Playbooks — Panduan Praktis AI untuk Kerja",
  description:
    "Kumpulan playbook dan panduan praktis AI dari aitraining.id. Template prompt siap pakai, step-by-step guide, dan companion resource dari workshop & webinar Aurelius Ivan Wijaya.",
  alternates: {
    canonical: "https://aitraining.id/playbook",
  },
  openGraph: {
    url: "https://aitraining.id/playbook",
  },
};

const playbooks = [
  {
    href: "/playbook/daily-prompt",
    badge: "BARU",
    title: "Daily Prompt Playbook",
    description:
      "7 prompt template siap pakai untuk kerja harian — email profesional, meeting notes, konten social media, analisis data, brainstorming, review tulisan, dan persiapan presentasi.",
    tags: ["Email", "Social Media", "Analisis Data", "Brainstorming"],
    companion: "Webinar 'Cara Pakai AI Biar Hasilnya Nggak Sampah'",
  },
];

export default function PlaybookIndexPage() {
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
        name: "Playbooks",
        item: "https://aitraining.id/playbook",
      },
    ],
  };

  return (
    <>
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
              <div className="max-w-3xl">
                <p className="text-white/50 text-sm mb-4 tracking-wide">
                  [ Playbooks & Panduan ]
                </p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight mb-6">
                  <span className="text-white">AI</span>
                  <br />
                  <span className="text-white/60">Playbooks</span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed">
                  Panduan praktis, template prompt, dan companion resource dari
                  workshop & webinar{" "}
                  <a
                    href="https://aurelivan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-white/90 hover:text-white transition-colors"
                  >
                    Aurelius Ivan Wijaya
                  </a>
                  . Gratis. Siap pakai.
                </p>
              </div>
            </div>
          </section>

          {/* Playbook list */}
          <section className="bg-black py-12 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {playbooks.map((pb) => (
                  <Link
                    key={pb.href}
                    href={pb.href}
                    className="group border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.02] transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2.5 py-0.5 bg-amber-400/15 border border-amber-400/25 rounded-full text-amber-300 text-xs font-mono">
                        {pb.badge}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                      {pb.title}
                    </h2>
                    <p className="text-white/65 leading-relaxed mb-5">
                      {pb.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {pb.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-white/50 text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-white/35 font-mono">
                        Companion: {pb.companion}
                      </p>
                      <span className="inline-flex items-center gap-2 text-white/50 group-hover:text-white transition-colors text-sm">
                        <span>Buka</span>
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
                      </span>
                    </div>
                  </Link>
                ))}

                {/* Coming soon placeholder */}
                <div className="border border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3 min-h-[280px]">
                  <p className="text-white/25 text-sm font-mono">
                    [ Coming soon ]
                  </p>
                  <p className="text-white/40 font-medium">
                    More playbooks on the way
                  </p>
                  <p className="text-white/30 text-sm max-w-xs">
                    Playbook baru ditambahkan setiap kali ada workshop atau
                    webinar baru.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-black py-20 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Mau belajar langsung?
                </h2>
                <p className="text-white/65 mb-8 leading-relaxed">
                  Playbook ini adalah versi ringkas dari training langsung.
                  Untuk pengalaman belajar yang lebih mendalam, lihat program
                  corporate AI training atau jadwalkan sesi konsultasi.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/programs"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all group font-medium"
                  >
                    <span>Lihat Programs</span>
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
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white/70 hover:text-white hover:bg-white/5 transition-all"
                  >
                    Konsultasi gratis &rarr;
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
