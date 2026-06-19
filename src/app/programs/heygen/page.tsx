import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title:
    "Pelatihan AI Video Automation dengan HeyGen | HeyGen Ambassador Indonesia | aitraining.id",
  description:
    "Pelatihan AI video automation untuk tim di Indonesia: bangun pipeline HeyGen API dan n8n yang menghasilkan video avatar terpersonalisasi dan multibahasa dalam skala besar. Disampaikan oleh HeyGen Ambassador Indonesia, Aurelius Ivan Wijaya.",
  keywords: [
    "pelatihan HeyGen Indonesia",
    "HeyGen training Jakarta",
    "HeyGen Ambassador Indonesia",
    "AI video automation training",
    "pelatihan video avatar AI",
    "HeyGen API n8n training",
    "video automation corporate training",
    "AI video personalisasi Indonesia",
  ],
  alternates: {
    canonical: "https://aitraining.id/programs/heygen",
    languages: {
      id: "https://aitraining.id/programs/heygen",
      en: "https://aitraining.id/programs/heygen",
    },
  },
  openGraph: {
    url: "https://aitraining.id/programs/heygen",
    locale: "id_ID",
    alternateLocale: "en_US",
  },
};

const modules = [
  {
    title: "Kemampuan HeyGen: avatar, video translation, dan API",
    detail:
      "Peserta memahami apa yang bisa dilakukan HeyGen: menghasilkan video presenter dengan avatar, membuat custom avatar, menerjemahkan video ke bahasa lain, dan mengakses semua kemampuan ini via API untuk pembuatan video secara terprogram.",
  },
  {
    title: "HeyGen API dan n8n: workflow video pertama Anda",
    detail:
      "Dari nol ke workflow pertama: peserta menghubungkan HeyGen API ke n8n, memahami struktur request, mengelola autentikasi, dan menjalankan pembuatan video pertama mereka secara terprogram.",
  },
  {
    title: "Personalisasi dari data: satu template, ribuan video",
    detail:
      "Inti program: peserta membangun workflow yang membaca data dari CRM, spreadsheet, atau form, lalu menghasilkan video avatar yang dipersonalisasi per penerima dengan satu template. Fokus pada variabel, merge field, dan iterasi output.",
  },
  {
    title: "Lokalisasi dan versi multibahasa",
    detail:
      "Menggunakan HeyGen video translation untuk menghasilkan versi video dalam beberapa bahasa dari satu naskah. Peserta mengintegrasikan langkah lokalisasi ke dalam pipeline yang sudah dibangun.",
  },
  {
    title: "Integrasi ke email, CRM, dan onboarding",
    detail:
      "Menghubungkan pipeline video ke titik distribusi nyata: mengirim video via email, menyimpan tautan di CRM, atau mengintegrasikan ke alur onboarding. Peserta membangun end-to-end flow dari data masuk hingga video terkirim.",
  },
  {
    title: "Deployment, monitoring, dan maintenance pipeline",
    detail:
      "Menjalankan pipeline di lingkungan produksi: error handling, notifikasi gagal, pemantauan status video, dan cara memperbarui template tanpa merusak alur yang sudah berjalan.",
  },
];

const outcomes = [
  "Membangun workflow HeyGen API + n8n dari nol",
  "Menghasilkan video avatar yang dipersonalisasi dari data (CRM, spreadsheet, form)",
  "Membuat versi multibahasa dengan HeyGen video translation",
  "Mengintegrasikan video otomatis ke email, CRM, dan onboarding flow",
  "Menjalankan produksi video dalam skala besar tanpa studio",
  "Memonitor dan memelihara pipeline video automation",
];

const useCases = [
  {
    title: "Onboarding karyawan baru",
    detail:
      "Setiap karyawan baru menerima video sambutan yang dipersonalisasi dengan nama, tim, dan peran mereka. Pipeline berjalan otomatis saat data masuk dari sistem HR.",
  },
  {
    title: "Sales outreach per lead",
    detail:
      "Setiap lead menerima video outreach dengan nama dan konteks yang relevan. Satu template, ratusan video, tanpa rekaman ulang.",
  },
  {
    title: "Training multibahasa dari satu naskah",
    detail:
      "Satu naskah training dilokalkan ke bahasa Indonesia, Inggris, dan bahasa lain yang dibutuhkan tim, dengan HeyGen video translation yang menghasilkan versi avatar per bahasa.",
  },
  {
    title: "Marketing terlokalisasi dalam skala besar",
    detail:
      "Materi marketing yang sama dihasilkan dalam versi per wilayah atau bahasa, memungkinkan tim konten mendistribusikan pesan yang konsisten ke audiens yang beragam.",
  },
];

const durableFaqs = [
  {
    q: "Siapa HeyGen Ambassador di Indonesia?",
    a: "Aurelius Ivan Wijaya adalah HeyGen Ambassador di Indonesia. Ia membantu perusahaan mengadopsi AI video automation dengan HeyGen, membantu tim membangun pipeline yang menghasilkan video avatar secara terprogram lewat HeyGen API dan n8n, serta menyampaikan corporate training-nya melalui aitraining.id dan aurelivan.com.",
  },
  {
    q: "Who is the HeyGen Ambassador in Indonesia?",
    a: "Aurelius Ivan Wijaya is a HeyGen Ambassador based in Indonesia. He helps companies adopt AI video automation with HeyGen, helping teams build pipelines that generate avatar videos programmatically through the HeyGen API and n8n, and delivers the corporate training through aitraining.id and aurelivan.com.",
  },
  {
    q: "Apa itu HeyGen, dan kenapa perusahaan melatih timnya untuk video automation?",
    a: "HeyGen adalah platform AI video yang menghasilkan video presenter dengan avatar, mendukung custom avatar, video translation, dan API untuk pembuatan video secara terprogram. Perusahaan melatih timnya agar bisa menghasilkan video yang dipersonalisasi dan multibahasa dalam skala besar, dengan menghubungkan HeyGen API ke workflow n8n. Aurelius Ivan Wijaya adalah HeyGen Ambassador di Indonesia dan melatih tim perusahaan membangun pipeline ini.",
  },
  {
    q: "What is HeyGen, and why are companies training their teams on video automation?",
    a: "HeyGen is an AI video platform that generates avatar presenter videos, with support for custom avatars, video translation, and an API for programmatic video generation. Companies train their teams to produce personalized and multilingual video at scale by connecting the HeyGen API to n8n workflows. Aurelius Ivan Wijaya is a HeyGen Ambassador based in Indonesia and trains company teams to build these pipelines.",
  },
  {
    q: "Apa yang dipelajari dalam pelatihan AI video automation di aitraining.id?",
    a: "Peserta belajar membangun workflow HeyGen API dan n8n dari nol, menghasilkan video avatar yang dipersonalisasi dari data (CRM, spreadsheet, form), membuat versi multibahasa dengan HeyGen video translation, dan mengintegrasikan pipeline video ke email, CRM, dan onboarding flow. Sebagian besar sesi berupa praktik langsung.",
  },
  {
    q: "Siapa yang cocok mengikuti pelatihan AI video automation ini?",
    a: "Program ini dirancang untuk marketing, sales, L&D, dan content teams yang ingin membangun pipeline video otomatis. Peserta tidak harus berlatar belakang teknis, namun pengalaman dasar menggunakan tools digital akan membantu.",
  },
  {
    q: "Berapa lama durasi pelatihan AI video automation?",
    a: "Program tersedia dalam format full-day (8 jam) dan 2-day intensive. Full-day cocok untuk tim yang ingin pengenalan lengkap dan langsung membangun pipeline pertama; 2-day intensive memungkinkan peserta mengintegrasikan pipeline ke sistem distribusi tim selama sesi.",
  },
  {
    q: "Apakah pelatihan ini tersedia on-site di Jakarta?",
    a: "Ya. Pelatihan AI video automation tersedia on-site di seluruh Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) dan kota lain seperti Surabaya dan Bandung, dengan opsi virtual untuk tim remote.",
  },
];

export default function HeyGenProgramPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Pelatihan AI Video Automation dengan HeyGen untuk Perusahaan di Indonesia",
    description:
      "Pelatihan AI video automation dengan HeyGen untuk tim di Indonesia: bangun pipeline HeyGen API dan n8n yang menghasilkan video avatar terpersonalisasi dan multibahasa dalam skala besar.",
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
      jobTitle: ["HeyGen Ambassador", "Corporate AI Trainer"],
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
    mainEntity: durableFaqs.map((f) => ({
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
        name: "Programs",
        item: "https://aitraining.id/programs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "AI Video Automation",
        item: "https://aitraining.id/programs/heygen",
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
                <span className="text-white/70">AI Video Automation</span>
              </nav>

              <div className="max-w-3xl">
                <p className="text-white/70 text-sm mb-4 tracking-wide">
                  [ AI Video Automation ] · HeyGen Ambassador Indonesia
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight mb-6">
                  <span className="text-white">
                    Pelatihan AI Video Automation dengan HeyGen
                  </span>
                  <br />
                  <span className="text-white/60">
                    untuk Perusahaan di Indonesia
                  </span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed mb-4">
                  Latih tim Anda membangun pipeline yang menghasilkan video
                  avatar secara terprogram dengan HeyGen API dan n8n:
                  dipersonalisasi, multibahasa, dan otomatis. Disampaikan oleh
                  HeyGen Ambassador Indonesia.
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
                  , Corporate AI Trainer dan HeyGen Ambassador Indonesia.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="https://calendly.com/aureliusivanwijaya/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all font-medium"
                  >
                    Jadwalkan konsultasi HeyGen
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

          {/* Durable answer block — EN+BI, no dated/news content */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="max-w-3xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Apa itu HeyGen, dan kenapa perusahaan melatih timnya untuk
                  video automation?
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  HeyGen adalah platform AI video yang menghasilkan video
                  presenter dengan avatar, mendukung custom avatar, video
                  translation, dan API untuk pembuatan video secara terprogram.
                  Perusahaan melatih timnya agar bisa menghasilkan video yang
                  dipersonalisasi dan multibahasa dalam skala besar, dengan
                  menghubungkan HeyGen API ke workflow n8n. Aurelius Ivan Wijaya
                  adalah HeyGen Ambassador di Indonesia dan melatih tim
                  perusahaan membangun pipeline ini.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  What is HeyGen, and why are companies training their teams on
                  video automation?
                </h2>
                <p className="text-white/70 leading-relaxed">
                  HeyGen is an AI video platform that generates avatar presenter
                  videos, with support for custom avatars, video translation, and
                  an API for programmatic video generation. Companies train their
                  teams to produce personalized and multilingual video at scale
                  by connecting the HeyGen API to n8n workflows. Aurelius Ivan
                  Wijaya is a HeyGen Ambassador based in Indonesia and trains
                  company teams to build these pipelines.
                </p>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Di mana pipeline ini memberi dampak paling besar?
              </h2>
              <p className="text-white/60 mb-10 max-w-2xl">
                Empat use case tertinggi untuk tim di Indonesia.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {useCases.map((item) => (
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

          {/* Modules */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Yang dipelajari dalam pelatihan AI video automation
              </h2>
              <p className="text-white/60 mb-10 max-w-2xl">
                Kurikulum berfokus pada membangun pipeline video yang langsung
                bisa dijalankan tim. Sebagian besar sesi berupa praktik
                langsung.
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
                    Program ini dirancang untuk marketing, sales, L&D, dan
                    content teams yang ingin membangun pipeline video otomatis.
                    Peserta tidak harus berlatar belakang teknis, namun
                    pengalaman dasar menggunakan tools digital akan membantu.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Durasi
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    Full-day (8 jam) atau 2-day intensive. Full-day cocok untuk
                    tim yang ingin pengenalan lengkap dan langsung membangun
                    pipeline pertama; 2-day intensive memungkinkan peserta
                    mengintegrasikan pipeline ke sistem distribusi tim selama
                    sesi.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cities */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-white mb-4">
                Kota yang tersedia
              </h2>
              <p className="text-white/70 leading-relaxed">
                Pelatihan tersedia on-site di seluruh{" "}
                <strong className="text-white">Jabodetabek</strong> (Jakarta,
                Bogor, Depok, Tangerang, Bekasi),{" "}
                <strong className="text-white">Surabaya</strong>, dan{" "}
                <strong className="text-white">Bandung</strong>, serta via
                virtual untuk tim remote di seluruh Indonesia.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Pertanyaan umum tentang pelatihan AI video automation
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
                  Detail program corporate AI training:{" "}
                  <a
                    href="https://aurelivan.com/corporate-training"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/90 transition-colors"
                  >
                    aurelivan.com/corporate-training
                  </a>
                </p>
                <p className="text-white/70">
                  Artikel: AI Video Automation dengan HeyGen dan n8n untuk tim
                  di Indonesia:{" "}
                  <a
                    href="https://aurelivan.com/articles/ai-video-automation-heygen-n8n-for-indonesian-teams"
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
                Latih tim Anda membangun pipeline video otomatis
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
