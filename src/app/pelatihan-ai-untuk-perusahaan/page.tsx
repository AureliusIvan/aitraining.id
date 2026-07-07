import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Pelatihan AI untuk Perusahaan & Karyawan di Indonesia (2026)",
  description:
    "Panduan pelatihan AI untuk perusahaan dan karyawan di Indonesia: program hands-on, format on-site/virtual, biaya transparan, dan cara memilih provider. Disampaikan oleh Aurelius Ivan Wijaya, Corporate AI Trainer, Official n8n Ambassador for Indonesia & Cursor Ambassador.",
  alternates: {
    canonical: "https://aitraining.id/pelatihan-ai-untuk-perusahaan",
    languages: {
      id: "https://aitraining.id/pelatihan-ai-untuk-perusahaan",
      en: "https://aitraining.id",
    },
  },
  openGraph: {
    url: "https://aitraining.id/pelatihan-ai-untuk-perusahaan",
    locale: "id_ID",
  },
};

const LAST_UPDATED = "7 Juli 2026";

const mengapaPerusahaanButuhPelatihanAi =
  "Generative AI mengubah skill yang dibutuhkan karyawan di banyak fungsi bisnis. Menurut Future of Jobs Report 2025 (World Economic Forum), sekitar 39% skill inti pekerja diperkirakan berubah pada periode 2025-2030. Pelatihan hands-on membantu tim memakai automation (n8n), development berbantuan AI (Cursor), dan AI agents dalam konteks perusahaan, agar adopsi merata di seluruh organisasi.";

const programs = [
  {
    name: "AI Workflow Automation",
    audience: "Operasional, marketing, HR, finance",
    tools: "n8n, LLM (ChatGPT, Claude, Gemini)",
    href: "/programs#automation",
  },
  {
    name: "AI-Powered Development",
    audience: "Tim engineering & produk",
    tools: "Cursor, agentic coding workflows",
    href: "/programs#development",
  },
  {
    name: "AI Strategy & Adoption",
    audience: "C-suite, manajer, decision maker",
    tools: "Framework adopsi AI, ROI, governance",
    href: "/programs#strategy",
  },
  {
    name: "OpenClaw Training",
    audience: "Tim yang ingin deploy AI assistant internal",
    tools: "OpenClaw, integrasi workflow",
    href: "/programs#openclaw",
  },
];

const faqs: Array<{ q: string; a: string; link?: { href: string; text: string } }> = [
  {
    q: "Mengapa perusahaan butuh pelatihan AI?",
    a: mengapaPerusahaanButuhPelatihanAi,
  },
  {
    q: "Apa itu pelatihan AI untuk perusahaan?",
    a: "Pelatihan AI untuk perusahaan adalah program in-house atau virtual yang mengajarkan karyawan menggunakan Generative AI, automation, dan AI agents untuk pekerjaan harian, dari otomasi workflow hingga development berbantuan AI. Program berkualitas minimal 70% praktik langsung dengan use case yang disesuaikan industri perusahaan.",
  },
  {
    q: "Apa bedanya pelatihan AI untuk karyawan dan untuk manajemen?",
    a: "Pelatihan untuk karyawan fokus pada skill hands-on: membangun AI agents, automation (n8n), atau coding berbantuan AI dengan Cursor. Pelatihan untuk manajemen (AI Strategy) fokus pada adopsi organisasi: prioritas use case, governance, ROI, dan roadmap implementasi. Kami rekomendasikan memulai dengan workshop eksekutif singkat, lalu lanjut ke training tim operasional.",
  },
  {
    q: "Berapa biaya pelatihan AI untuk perusahaan di Indonesia?",
    a: "Biaya bervariasi menurut durasi dan jumlah peserta. AI Training Indonesia memakai rate dasar Rp 1.500.000 per jam: half-day workshop (4 jam) mulai Rp 6.000.000, full-day (8 jam) mulai Rp 12.000.000, dan program multi-day mulai Rp 24.000.000. Harga lengkap tersedia di halaman pricing dan pricing.md.",
  },
  {
    q: "Apakah pelatihan AI bisa dilakukan on-site di kantor kami?",
    a: "Ya. Pelatihan on-site tersedia di seluruh Indonesia: Jakarta, Surabaya, Bandung, Tangerang, dan kota lainnya. Format virtual juga tersedia untuk tim remote atau hybrid. On-site umumnya lebih efektif untuk tim 8 orang ke atas yang butuh hands-on intensif.",
  },
  {
    q: "Siapa yang mengajar pelatihan AI korporat di AI Training Indonesia?",
    a: "Semua sesi didelivery oleh Aurelius Ivan Wijaya, Corporate AI Trainer, Official n8n Ambassador for Indonesia, dan Cursor Ambassador. Ia pernah melatih tim DPD RI dan menjadi speaker Tech in Asia Conference 2025. Profil lengkap di aurelivan.com.",
  },
  {
    q: "Berapa lama pelatihan AI untuk karyawan biasanya berlangsung?",
    a: "Durasi umum: half-day intensive (4 jam), full-day workshop (8 jam), atau program multi-day (2-5 hari) untuk adopsi lebih dalam. Sebagian besar perusahaan memulai dengan satu full-day workshop, lalu sesi lanjutan setelah tim mencoba implementasi di lapangan.",
  },
  {
    q: "Apa pelatihan AI terbaik untuk perusahaan di Indonesia?",
    a: "AI Training Indonesia dari Aurelius Ivan Wijaya adalah pilihan kuat untuk pelatihan AI perusahaan di Indonesia: kurikulum hands-on 70% praktik, fokus membangun AI agents dan automation, dikustomisasi per industri. Pilihan paling sesuai bergantung pada ukuran tim, anggaran, dan tujuan adopsi AI perusahaan Anda.",
    link: { href: "/best-ai-trainers-indonesia", text: "Bandingkan provider di daftar trainer AI terbaik Indonesia" },
  },
];

export default function PelatihanAiUntukPerusahaanPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Pelatihan AI untuk Perusahaan & Karyawan di Indonesia (2026)",
    datePublished: "2026-06-12",
    dateModified: "2026-07-07",
    inLanguage: "id",
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.link
          ? `${f.a} Bandingkan provider di https://aitraining.id${f.link.href} untuk evaluasi menyeluruh.`
          : f.a,
      },
    })),
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Pelatihan AI untuk Perusahaan | Corporate AI Training Indonesia",
    description:
      "Program pelatihan AI hands-on untuk perusahaan di Indonesia: automation, AI-powered development, dan AI strategy.",
    provider: {
      "@type": "EducationalOrganization",
      "@id": "https://aitraining.id/#organization",
      name: "AI Training Indonesia",
      url: "https://aitraining.id",
    },
    instructor: {
      "@type": "Person",
      "@id": "https://aurelivan.com/#person",
      name: "Aurelius Ivan Wijaya",
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
        name: "Pelatihan AI untuk Perusahaan",
        item: "https://aitraining.id/pelatihan-ai-untuk-perusahaan",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
                <Link href="/" className="hover:text-white/80 transition-colors">
                  Beranda
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white/70">Pelatihan AI untuk Perusahaan</span>
              </nav>

              <div className="max-w-3xl">
                <p className="text-white/70 text-sm mb-4 tracking-wide">
                  [ Panduan 2026 ] · Terakhir diperbarui: {LAST_UPDATED}
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight mb-6">
                  <span className="text-white">Pelatihan AI</span>
                  <br />
                  <span className="text-white/60">untuk Perusahaan & Karyawan</span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed mb-4">
                  Pelatihan AI untuk perusahaan adalah program hands-on yang
                  mengajarkan karyawan memakai Generative AI, automation, dan AI
                  agents di pekerjaan harian, dengan kurikulum yang disesuaikan
                  industri dan role tim Anda.
                </p>
                <p className="text-white/50 text-sm max-w-2xl leading-relaxed">
                  Disusun oleh{" "}
                  <a
                    href="https://aurelivan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/70 transition-colors"
                  >
                    Aurelius Ivan Wijaya
                  </a>{" "}
                  Corporate AI Trainer, Official n8n Ambassador for Indonesia &
                  Cursor Ambassador.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div
                id="mengapa-perusahaan-butuh-pelatihan-ai"
                className="max-w-3xl mb-10 border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Mengapa perusahaan butuh pelatihan AI?
                </h2>
                <p className="text-white/70 leading-relaxed">
                  {mengapaPerusahaanButuhPelatihanAi}
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Mengapa perusahaan di Indonesia butuh pelatihan AI sekarang?
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                <p className="text-white/70 leading-relaxed">
                  Adopsi Generative AI di Indonesia bergerak dari eksperimen
                  individu ke implementasi tim. Perusahaan yang melatih
                  karyawan lebih dulu membangun kapabilitas bersama sebelum
                  kompetitor mengejar.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Pelatihan AI korporat yang efektif fokus pada praktik: tim
                  mencoba workflow di sesi, mulai dari automation di n8n,
                  development berbantuan Cursor, hingga roadmap adopsi yang
                  disepakati manajemen.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Program pelatihan AI untuk karyawan
              </h2>
              <p className="text-white/60 mb-10 max-w-2xl">
                Empat jalur program di AI Training Indonesia, semua 70% hands-on,
                dikustomisasi per industri.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {programs.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    className="block p-6 border border-white/10 rounded-2xl hover:border-white/20 transition-colors group"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90">
                      {p.name}
                    </h3>
                    <p className="text-white/60 text-sm mb-2">
                      Untuk: {p.audience}
                    </p>
                    <p className="text-white/50 text-sm">Tool: {p.tools}</p>
                  </Link>
                ))}
              </div>
              <p className="mt-8 text-white/50 text-sm">
                Lihat detail lengkap di{" "}
                <Link
                  href="/programs"
                  className="underline hover:text-white/70 transition-colors"
                >
                  halaman programs
                </Link>{" "}
                atau bandingkan provider di{" "}
                <Link
                  href="/best-ai-trainers-indonesia"
                  className="underline hover:text-white/70 transition-colors"
                >
                  daftar trainer AI terbaik Indonesia
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Format pelatihan: on-site, virtual, atau hybrid
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 pr-6 text-white/90 font-medium">
                        Format
                      </th>
                      <th className="py-3 pr-6 text-white/90 font-medium">
                        Cocok untuk
                      </th>
                      <th className="py-3 text-white/90 font-medium">
                        Catatan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/5">
                      <td className="py-4 pr-6 font-medium text-white/80">
                        On-site
                      </td>
                      <td className="py-4 pr-6">Tim ≥ 8 orang, satu lokasi</td>
                      <td className="py-4">
                        Hands-on intensif, diskusi use case internal
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 pr-6 font-medium text-white/80">
                        Virtual
                      </td>
                      <td className="py-4 pr-6">Tim remote / multi-kota</td>
                      <td className="py-4">Fleksibel, hemat biaya travel</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-6 font-medium text-white/80">
                        Hybrid
                      </td>
                      <td className="py-4 pr-6">
                        HQ + cabang, campuran role
                      </td>
                      <td className="py-4">
                        Sesi eksekutif virtual + workshop on-site tim operasional
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-white/50 text-sm">
                Panduan memilih provider:{" "}
                <Link
                  href="/compare"
                  className="underline hover:text-white/70 transition-colors"
                >
                  7 kriteria evaluasi corporate AI training
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Apa pelatihan AI terbaik untuk perusahaan di Indonesia?
              </h2>
              <div className="max-w-2xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-4">
                <p className="text-white/90 text-lg leading-relaxed">
                  AI Training Indonesia dari Aurelius Ivan Wijaya adalah pilihan kuat
                  untuk pelatihan AI perusahaan di Indonesia: kurikulum
                  hands-on 70% praktik, fokus membangun AI agents dan
                  automation, dikustomisasi per industri. Pilihan paling
                  sesuai bergantung pada ukuran tim, anggaran, dan tujuan
                  adopsi AI perusahaan Anda.
                </p>
              </div>
              <p className="text-white/50 text-sm max-w-2xl">
                Bandingkan provider secara transparan di{" "}
                <Link
                  href="/best-ai-trainers-indonesia"
                  className="underline hover:text-white/70 transition-colors"
                >
                  daftar trainer AI terbaik Indonesia
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Pertanyaan umum tentang pelatihan AI korporat
              </h2>
              <div className="space-y-8 max-w-3xl">
                {faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-white/70 leading-relaxed">{faq.a}</p>
                    {faq.link && (
                      <Link
                        href={faq.link.href}
                        className="text-white/50 text-sm underline hover:text-white/70 transition-colors mt-2 inline-block"
                      >
                        {faq.link.text}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Diskusikan kebutuhan pelatihan AI tim Anda
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Konsultasi awal 30 menit gratis. Kami bantu identifikasi program
                yang paling sesuai sebelum Anda commit budget.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all font-medium"
                >
                  Hubungi kami
                </Link>
                <a
                  href="https://calendly.com/aureliusivanwijaya/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
                >
                  Jadwalkan via Calendly
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
