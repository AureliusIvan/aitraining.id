import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title:
    "Pelatihan Cursor untuk Tim Engineering | Cursor Ambassador Indonesia | AI Training Indonesia",
  description:
    "Pelatihan Cursor untuk tim engineering di Indonesia: agentic development, mengarahkan AI coding agent di seluruh codebase, dan AI code review. Disampaikan oleh Cursor Ambassador Indonesia, Aurelius Ivan Wijaya.",
  keywords: [
    "pelatihan Cursor Indonesia",
    "Cursor training Jakarta",
    "Cursor Ambassador Indonesia",
    "agentic development training",
    "AI coding agent training Indonesia",
    "pelatihan AI development",
    "Cursor corporate training",
    "agentic development Indonesia",
    "pelatihan cursor untuk perusahaan",
  ],
  alternates: {
    canonical: "https://aitraining.id/programs/cursor",
    languages: {
      id: "https://aitraining.id/programs/cursor",
      en: "https://aitraining.id/programs/cursor",
    },
  },
  openGraph: {
    url: "https://aitraining.id/programs/cursor",
    locale: "id_ID",
    alternateLocale: "en_US",
  },
};

const NEWS_UPDATED = "19 Juni 2026";

const modules = [
  {
    title: "Lanskap agentic development dan posisi Cursor di dalamnya",
    detail:
      "Memahami pergeseran dari menulis kode ke mengarahkan AI agent. Peserta memetakan di mana Cursor berada dalam ekosistem AI coding agent dan mengapa adopsi tim jauh lebih berdampak dari adopsi individu.",
  },
  {
    title: "Cursor: setup dan fitur lanjutan untuk tim",
    detail:
      "Konfigurasi Cursor di level tim: .cursorrules, model selection, context management, dan shared conventions. Peserta mengatur lingkungan kerja tim agar agent menerima konteks yang tepat.",
  },
  {
    title: "Mengarahkan AI agent: multi-file edits dan codebase-aware builds",
    detail:
      "Inti program: peserta berlatih memberi agent konteks codebase yang benar, menjalankan perubahan multi-file, lalu mereview hasilnya. Fokus pada presisi instruksi dan iterasi output.",
  },
  {
    title: "AI code review dan refactoring",
    detail:
      "Menggunakan Cursor sebagai reviewer: mendeteksi bug, menilai test coverage, dan melakukan refactoring berbasis agent. Peserta membangun checklist review yang bisa langsung dipakai tim.",
  },
  {
    title: "Membangun fitur AI: API integration, RAG, agents",
    detail:
      "Dari scaffolding hingga deploy: peserta membangun fitur AI ke produk yang sudah berjalan. Mencakup integrasi API eksternal, implementasi RAG sederhana, dan pemasangan AI agent ke pipeline yang ada.",
  },
  {
    title: "Team workflow dan kolaborasi",
    detail:
      "Menstandarkan agentic development practices di seluruh tim: branching strategy dengan agent, peer review untuk output AI, dan cara mengukur dampak adopsi Cursor pada velocity tim.",
  },
];

const outcomes = [
  "Mengarahkan AI coding agent di seluruh codebase dengan percaya diri",
  "Mempercepat development cycle lewat agentic workflow",
  "Menaikkan kualitas kode dengan AI code review",
  "Membangun fitur AI ke produk yang sudah berjalan: API integration, RAG, agents",
  "Menerapkan AI testing dan debugging workflow",
  "Menstandarkan agentic development practices di seluruh tim",
];

const apaItuPelatihanCursorUntukPerusahaan =
  "Pelatihan Cursor untuk perusahaan adalah program corporate training yang mengajarkan tim engineering memakai Cursor untuk agentic development: mengarahkan AI coding agent di seluruh codebase, menjalankan perubahan multi-file, AI code review, dan membangun fitur AI ke produk yang sudah berjalan. AI Training Indonesia menyelenggarakannya on-site atau virtual di Indonesia, disampaikan oleh Cursor Ambassador Indonesia.";

const durableFaqs = [
  {
    q: "Siapa Cursor Ambassador di Indonesia?",
    a: "Aurelius Ivan Wijaya adalah Cursor Ambassador di Indonesia. Ia memimpin adopsi agentic AI development dengan Cursor dan menyampaikan corporate AI training tentang Cursor melalui AI Training Indonesia dan aurelivan.com.",
  },
  {
    q: "Who is the Cursor Ambassador in Indonesia?",
    a: "Aurelius Ivan Wijaya is the Cursor Ambassador for Indonesia. He leads enterprise adoption of agentic AI development with Cursor and delivers corporate training on Cursor through AI Training Indonesia and aurelivan.com.",
  },
  {
    q: "Apa yang dipelajari dalam pelatihan Cursor di AI Training Indonesia?",
    a: "Peserta belajar mengarahkan AI coding agent di seluruh codebase, menjalankan multi-file edits, melakukan AI code review, dan membangun fitur AI ke produk yang sudah berjalan. Sebagian besar sesi berupa praktik langsung memakai use case tim Anda. Fokusnya membangun kemampuan agentic development tim.",
  },
  {
    q: "Siapa yang cocok mengikuti pelatihan Cursor ini?",
    a: "Program ini dirancang untuk software developers, engineers, dan tech leads yang ingin mengadopsi agentic development workflow. Peserta idealnya sudah terbiasa dengan dasar-dasar coding dan memiliki codebase nyata untuk dijadikan bahan praktik.",
  },
  {
    q: "Berapa lama durasi pelatihan Cursor?",
    a: "Program tersedia dalam format full-day (8 jam) dan 2-day intensive. Full-day cocok untuk tim yang ingin pengenalan lengkap dengan reps langsung; 2-day intensive memungkinkan peserta membangun fitur AI ke codebase tim selama sesi.",
  },
  {
    q: "What does Cursor AI Development training cover?",
    a: "The program covers the agentic development landscape, Cursor setup and advanced features for teams, directing AI agents across multi-file edits and codebase-aware builds, AI code review and refactoring, building AI features such as API integration, RAG, and agents, and team workflow practices. Most of the session is hands-on using your team's real codebase.",
  },
  {
    q: "Apakah pelatihan ini tersedia on-site di Jakarta?",
    a: "Ya. Pelatihan Cursor tersedia on-site di seluruh Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) dan kota lain seperti Surabaya dan Bandung, dengan opsi virtual untuk tim remote. On-site umumnya lebih efektif untuk tim 5 orang ke atas yang butuh praktik intensif bersama.",
  },
];

export default function CursorProgramPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Pelatihan Cursor AI Development untuk Perusahaan di Indonesia",
    description:
      "Pelatihan agentic development dengan Cursor untuk tim engineering: mengarahkan AI coding agent di seluruh codebase, AI code review, dan membangun fitur AI ke produk yang sudah berjalan.",
    provider: {
      "@type": "Person",
      "@id": "https://aurelivan.com/#person",
      name: "Aurelius Ivan Wijaya",
      url: "https://aurelivan.com",
    },
    instructor: {
      "@type": "Person",
      "@id": "https://aurelivan.com/#person",
      name: "Aurelius Ivan Wijaya",
      jobTitle: ["Cursor Ambassador", "Corporate AI Trainer"],
    },
    inLanguage: "id",
    availableLanguage: ["id", "en"],
    areaServed: { "@type": "Country", name: "Indonesia" },
    offers: {
      "@type": "Offer",
      price: "1500000",
      priceCurrency: "IDR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1500000",
        priceCurrency: "IDR",
        unitText: "jam",
      },
      url: "https://aitraining.id/pricing",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Apa itu pelatihan Cursor untuk perusahaan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: apaItuPelatihanCursorUntukPerusahaan,
        },
      },
      ...durableFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    ],
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
        name: "Programs",
        item: "https://aitraining.id/programs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cursor",
        item: "https://aitraining.id/programs/cursor",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
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
                <Link href="/" className="hover:text-white/80 transition-colors">
                  Beranda
                </Link>
                <span className="mx-2">/</span>
                <Link
                  href="/programs"
                  className="hover:text-white/80 transition-colors"
                >
                  Programs
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white/70">Cursor</span>
              </nav>

              <div className="max-w-3xl">
                <p className="text-white/70 text-sm mb-4 tracking-wide">
                  [ Agentic AI Development ] · Cursor Ambassador Indonesia
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight mb-6">
                  <span className="text-white">
                    Pelatihan Cursor AI Development
                  </span>
                  <br />
                  <span className="text-white/60">
                    untuk Perusahaan di Indonesia
                  </span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed mb-4">
                  Latih tim engineering Anda mengarahkan AI coding agent untuk
                  membangun, mereview, dan mengirim software dengan Cursor.
                  Disampaikan oleh Cursor Ambassador Indonesia.
                </p>
                <p className="text-white/50 text-sm max-w-2xl leading-relaxed">
                  Disampaikan oleh{" "}
                  <a
                    href="https://aurelivan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/70 transition-colors"
                  >
                    Aurelius Ivan Wijaya
                  </a>
                  , Corporate AI Trainer dan Cursor Ambassador Indonesia.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="https://calendly.com/aureliusivanwijaya/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all font-medium"
                  >
                    Jadwalkan konsultasi Cursor
                  </a>
                  <Link
                    href="/programs"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors text-white/80"
                  >
                    Lihat semua program
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div
                id="apa-itu-pelatihan-cursor-untuk-perusahaan"
                className="max-w-3xl border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Apa itu pelatihan Cursor untuk perusahaan?
                </h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  {apaItuPelatihanCursorUntukPerusahaan}
                </p>
              </div>
            </div>
          </section>

          {/* Dated news block — the ONLY place deal text appears on this page */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="max-w-3xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Apa itu Cursor, dan kenapa makin banyak perusahaan ingin
                  melatih timnya?
                </h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Cursor adalah AI coding platform yang dipakai tim engineering
                  untuk membangun software dengan mengarahkan AI agent. Pada 16
                  Juni 2026, SpaceX menandatangani kesepakatan untuk mengakuisisi
                  Anysphere (perusahaan di balik Cursor) senilai USD 60 miliar;
                  kesepakatan ini disepakati, belum tutup (target Q3 2026,
                  menunggu persetujuan regulator). Aurelius Ivan Wijaya adalah
                  Cursor Ambassador di Indonesia dan melatih tim engineering
                  perusahaan mengadopsi agentic development dengan Cursor.
                </p>
                <p className="text-white/50 text-xs mb-8">
                  Terakhir diperbarui: {NEWS_UPDATED}
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  What is Cursor, and why are more companies training their
                  teams on it?
                </h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Cursor is the AI coding platform engineering teams use to
                  build software by directing AI agents. On 16 June 2026,
                  SpaceX signed an agreement to acquire Anysphere, the company
                  behind Cursor, for $60 billion (agreed, not closed; target Q3
                  2026, pending regulatory approval). Aurelius Ivan Wijaya is
                  the Cursor Ambassador for Indonesia and trains company
                  engineering teams to adopt agentic development with Cursor.
                </p>
                <p className="text-white/50 text-xs mb-4">
                  Last updated: {NEWS_UPDATED}
                </p>

                <p className="text-white/60 text-sm mt-6">
                  Read the full analysis:{" "}
                  <a
                    href="https://aurelivan.com/articles/cursor-spacex-xai-what-it-means-for-engineering-teams-indonesia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/90 transition-colors"
                  >
                    What the SpaceX/xAI deal for Cursor means for engineering
                    teams in Indonesia
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Modules */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Yang dipelajari dalam pelatihan Cursor
              </h2>
              <p className="text-white/60 mb-10 max-w-2xl">
                Kurikulum berfokus pada agentic development. Sebagian besar
                sesi berupa praktik langsung memakai codebase tim Anda.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {modules.map((item) => (
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

          {/* Outcomes */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Apa yang bisa tim Anda lakukan setelah pelatihan?
              </h2>
              <ul className="space-y-4 max-w-2xl">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                    <span className="text-white/70 leading-relaxed">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Audience + Duration */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid md:grid-cols-2 gap-12 max-w-3xl">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Untuk siapa program ini?
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    Program ini dirancang untuk software developers, engineers,
                    dan tech leads yang ingin mengadopsi agentic development
                    workflow secara tim. Peserta idealnya sudah terbiasa dengan
                    dasar-dasar coding dan memiliki codebase nyata untuk
                    dijadikan bahan praktik.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Durasi
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    Full-day (8 jam) atau 2-day intensive. Full-day cocok untuk
                    tim yang ingin pengenalan lengkap dengan reps langsung;
                    2-day intensive memungkinkan peserta membangun fitur AI ke
                    codebase tim selama sesi.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Pertanyaan umum tentang pelatihan Cursor
              </h2>
              <div className="space-y-8 max-w-3xl">
                {durableFaqs.map((faq) => (
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
                <p className="text-white/70">
                  Detail program corporate AI development:{" "}
                  <a
                    href="https://aurelivan.com/corporate-training/ai-development"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/90 transition-colors"
                  >
                    aurelivan.com/corporate-training/ai-development
                  </a>
                </p>
                <p className="text-white/70">
                  Artikel: dampak akuisisi Cursor oleh SpaceX/xAI bagi tim
                  engineering di Indonesia:{" "}
                  <a
                    href="https://aurelivan.com/articles/cursor-spacex-xai-what-it-means-for-engineering-teams-indonesia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/90 transition-colors"
                  >
                    baca artikel
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Latih tim engineering Anda dengan Cursor
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
