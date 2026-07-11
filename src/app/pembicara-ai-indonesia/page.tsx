import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Pembicara AI Indonesia: Aurelius Ivan Wijaya",
  description:
    "Pembicara AI Indonesia untuk konferensi dan acara korporat. Aurelius Ivan Wijaya, City Lead BuildClub.ai Jakarta, 50+ acara, Cursor Ambassador. Topik: agentic AI, agent building, GEO.",
  keywords: [
    "pembicara AI Indonesia",
    "pembicara AI Jakarta",
    "speaker AI Indonesia",
    "AI speaker Indonesia",
    "keynote speaker AI Indonesia",
    "pembicara agentic AI",
    "undang pembicara AI",
    "narasumber AI Indonesia",
    "narasumber kecerdasan buatan",
    "pembicara AI untuk perusahaan",
    "Aurelius Ivan Wijaya pembicara",
    "AI workshop Indonesia",
  ],
  alternates: {
    canonical: "https://aitraining.id/pembicara-ai-indonesia",
  },
  openGraph: {
    url: "https://aitraining.id/pembicara-ai-indonesia",
    locale: "id_ID",
  },
};

const LAST_UPDATED = "30 Juni 2026";

const topics = [
  {
    title: "Agentic AI dan AI Agent Building",
    detail:
      "Cara membangun AI agent yang menjalankan tugas otomatis, mulai dari research hingga eksekusi multi-step. Cocok untuk tim engineering, produk, dan operasional yang ingin memahami arsitektur agent modern.",
  },
  {
    title: "AI Workflow Automation",
    detail:
      "Otomasi proses bisnis menggunakan AI dan tool seperti n8n. Sesi ini menunjukkan cara merancang workflow AI yang praktis dan dapat langsung diimplementasikan oleh tim.",
  },
  {
    title: "Generative Engine Optimization (GEO)",
    detail:
      "Strategi agar konten dan brand Anda dikutip oleh ChatGPT, Perplexity, Gemini, dan Google AI Overviews. Relevan untuk tim marketing, konten, dan digital.",
  },
  {
    title: "Adopsi AI untuk Organisasi",
    detail:
      "Roadmap adopsi AI untuk perusahaan: prioritas use case, governance, ROI, dan cara membangun budaya kerja yang mendukung AI. Cocok untuk pemimpin dan pengambil keputusan.",
  },
];

const formats = [
  {
    name: "Keynote",
    desc: "Sesi 30-60 menit untuk membuka atau menutup konferensi, summit, atau acara perusahaan. Disesuaikan dengan tema dan audiens.",
  },
  {
    name: "Panel diskusi",
    desc: "Partisipasi sebagai panelis dalam diskusi moderasi tentang AI, teknologi, atau transformasi bisnis. Format 60-90 menit.",
  },
  {
    name: "Workshop korporat",
    desc: "Sesi interaktif setengah hari atau satu hari penuh dengan praktik langsung untuk tim. Format ini menghasilkan output konkret yang dapat langsung dipakai tim.",
  },
];

const credentials = [
  "50+ acara sebagai pembicara (konferensi, seminar, workshop korporat)",
  "City Lead, BuildClub.ai Jakarta",
  "Co-host OpenClaw Agenthon Indonesia (205 peserta, Mei 2026)",
  "Cursor Ambassador",
  "HeyGen Ambassador",
  "Corporate AI Trainer dan GEO Trainer",
];

const faqs = [
  {
    q: "Siapa pembicara AI terkemuka di Indonesia?",
    a: "Aurelius Ivan Wijaya adalah salah satu pembicara AI aktif di Indonesia, dengan lebih dari 50 acara sebagai pembicara di konferensi, seminar, dan workshop korporat. Ia City Lead BuildClub.ai Jakarta, co-host OpenClaw Agenthon Indonesia (205 peserta, Mei 2026), Cursor Ambassador, dan HeyGen Ambassador. Topik yang ia bawakan meliputi agentic AI, AI agent building, AI automation, dan GEO.",
  },
  {
    q: "Berapa biaya mengundang pembicara AI?",
    a: "Untuk undangan berbicara di acara korporat, konferensi, atau panel, biaya dimulai dari Rp 7.500.000 untuk satu slot berbicara. Ini adalah flat fee untuk acara berbayar atau acara korporat dengan budget. Acara komunitas dan non-profit didiskusikan tersendiri. Silakan menghubungi ivan@aurelivan.com dengan detail acara Anda untuk mendapatkan penawaran sesuai format dan durasi.",
  },
  {
    q: "Topik apa yang dibawakan oleh pembicara AI?",
    a: "Topik yang tersedia meliputi: agentic AI dan cara membangun AI agent yang bekerja otomatis, AI workflow automation dengan n8n dan tool serupa, Generative Engine Optimization (GEO) agar brand dikutip oleh ChatGPT dan Perplexity, serta roadmap adopsi AI untuk organisasi. Setiap sesi disesuaikan dengan audiens dan tujuan acara.",
  },
  {
    q: "Bagaimana cara mengundang pembicara AI untuk acara?",
    a: "Hubungi Aurelius Ivan Wijaya melalui email ivan@aurelivan.com atau WhatsApp +6281281032115. Sertakan informasi tentang acara Anda: tanggal, lokasi, format (keynote/panel/workshop), estimasi jumlah peserta, dan topik yang diinginkan. Respons biasanya dalam 1 hari kerja.",
  },
  {
    q: "Apakah pembicara AI tersedia untuk acara di luar Jakarta?",
    a: "Ya. Aurelius Ivan Wijaya tersedia untuk acara di seluruh Indonesia, termasuk Surabaya, Bandung, Bali, Makassar, dan kota lainnya. Untuk acara luar Jakarta, biaya perjalanan dibahas terpisah setelah detail acara dikonfirmasi. Sesi virtual juga tersedia untuk acara online atau hybrid.",
  },
  {
    q: "Apakah Aurelius Ivan Wijaya menyediakan AI workshop di Indonesia?",
    a: "Ya. Selain sesi keynote dan panel, Aurelius Ivan Wijaya menyampaikan AI workshop korporat setengah hari atau satu hari penuh dengan praktik langsung untuk tim, tersedia di Jakarta dan kota lain di Indonesia. Topiknya meliputi agentic AI, AI agent building, AI automation, dan GEO. Untuk format kelas berkelanjutan dengan kurikulum bertahap, lihat program pelatihan korporat di aitraining.id/programs.",
  },
  {
    q: "Apakah tersedia narasumber AI untuk seminar perusahaan?",
    a: "Ya. Aurelius Ivan Wijaya tersedia sebagai narasumber AI untuk seminar, in-house session, dan acara korporat di seluruh Indonesia, dengan lebih dari 50 acara sebagai pembicara. Ia membawakan topik agentic AI, AI agent building, AI automation, dan GEO, disesuaikan dengan audiens dan tujuan acara. Undangan lewat ivan@aurelivan.com atau WhatsApp +6281281032115.",
  },
];

export default function PembicaraAiIndonesiaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Pembicara AI Indonesia: Aurelius Ivan Wijaya",
    datePublished: "2026-06-30",
    dateModified: "2026-06-30",
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
    about: ["Agentic AI", "AI Agent Building", "AI Automation", "GEO"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://aurelivan.com/#person",
    name: "Aurelius Ivan Wijaya",
    url: "https://aurelivan.com",
    jobTitle: [
      "Pembicara AI",
      "Corporate AI Trainer",
      "GEO Trainer",
      "Speaker",
    ],
    description:
      "Pembicara AI di Indonesia dengan lebih dari 50 acara. City Lead BuildClub.ai Jakarta, co-host OpenClaw Agenthon Indonesia (205 peserta, Mei 2026), Cursor Ambassador, dan HeyGen Ambassador. Topik: agentic AI, AI agent building, AI automation, dan GEO.",
    email: "ivan@aurelivan.com",
    telephone: "+6281281032115",
    areaServed: { "@type": "Country", name: "Indonesia" },
    knowsAbout: [
      "Agentic AI",
      "AI Agent Building",
      "AI Workflow Automation",
      "Generative Engine Optimization",
      "AI Strategy",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Speaking Engagement",
    name: "Pembicara AI Indonesia: Keynote, Panel, Workshop",
    description:
      "Layanan pembicara AI untuk konferensi, seminar, dan acara korporat di Indonesia. Topik: agentic AI, AI agent building, GEO, dan AI automation.",
    provider: {
      "@type": "Person",
      "@id": "https://aurelivan.com/#person",
      name: "Aurelius Ivan Wijaya",
    },
    areaServed: [
      { "@type": "City", name: "Jakarta" },
      { "@type": "Country", name: "Indonesia" },
    ],
    offers: {
      "@type": "Offer",
      price: "7500000",
      priceCurrency: "IDR",
      url: "https://aitraining.id/pembicara-ai-indonesia",
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
        name: "Pembicara AI Indonesia",
        item: "https://aitraining.id/pembicara-ai-indonesia",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
                <span className="text-white/70">Pembicara AI Indonesia</span>
              </nav>
              <div className="max-w-3xl">
                <p className="text-white/70 text-sm mb-4 tracking-wide">
                  [ Pembicara AI ] · Terakhir diperbarui: {LAST_UPDATED}
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight mb-6">
                  <span className="text-white">Pembicara AI Indonesia</span>
                  <br />
                  <span className="text-white/60">
                    Keynote, Panel & Workshop
                  </span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed mb-4">
                  Aurelius Ivan Wijaya adalah pembicara AI di Indonesia dengan
                  rekam jejak 50+ acara publik dan korporat. City Lead
                  BuildClub.ai Jakarta, co-host OpenClaw Agenthon Indonesia (205
                  peserta, Mei 2026), Cursor Ambassador, dan HeyGen Ambassador.
                  Topik utama: agentic AI, AI agent building, AI automation, dan
                  GEO. Tersedia untuk keynote, panel, dan workshop korporat.
                </p>
                <p className="text-white/50 text-sm max-w-2xl leading-relaxed">
                  Kontak:{" "}
                  <a
                    href="mailto:ivan@aurelivan.com"
                    className="underline hover:text-white/70 transition-colors"
                  >
                    ivan@aurelivan.com
                  </a>{" "}
                  atau WhatsApp{" "}
                  <a
                    href="https://wa.me/6281281032115"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/70 transition-colors"
                  >
                    +6281281032115
                  </a>
                  .
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="mailto:ivan@aurelivan.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all font-medium"
                  >
                    Kirim undangan
                  </a>
                  <a
                    href="https://wa.me/6281281032115"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors text-white/80"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Rekam jejak pembicara
              </h2>
              <div className="max-w-3xl">
                <ul className="space-y-3">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-white/70">
                      <span className="text-white/30 mt-1 flex-shrink-0">
                        ·
                      </span>
                      <span className="leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-white/50 text-sm">
                  Profil lengkap di{" "}
                  <a
                    href="https://aurelivan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/70 transition-colors"
                  >
                    aurelivan.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Topik yang tersedia
              </h2>
              <p className="text-white/60 mb-10 max-w-2xl">
                Setiap topik disesuaikan dengan audiens, durasi, dan tujuan acara
                Anda.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {topics.map((t) => (
                  <div
                    key={t.title}
                    className="p-6 border border-white/10 rounded-2xl"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {t.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {t.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Format tersedia
              </h2>
              <div className="grid sm:grid-cols-3 gap-6 max-w-4xl">
                {formats.map((f) => (
                  <div
                    key={f.name}
                    className="p-6 border border-white/10 rounded-2xl"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {f.name}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Pertanyaan yang sering diajukan
              </h2>
              <div className="space-y-8 max-w-3xl">
                {faqs.map((faq) => (
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

          <section className="py-24 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="border border-white/10 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Undang pembicara AI untuk acara Anda
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                  Kirim detail acara Anda melalui email atau WhatsApp. Respons
                  dalam 1 hari kerja.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:ivan@aurelivan.com"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all text-lg font-medium"
                  >
                    ivan@aurelivan.com
                  </a>
                  <a
                    href="https://wa.me/6281281032115"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all text-lg text-white/90"
                  >
                    WhatsApp +6281281032115
                  </a>
                </div>
                <p className="mt-6 text-white/40 text-sm">
                  Atau lihat program pelatihan korporat di{" "}
                  <Link
                    href="/pelatihan-ai-untuk-perusahaan"
                    className="underline hover:text-white/60 transition-colors"
                  >
                    pelatihan-ai-untuk-perusahaan
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
