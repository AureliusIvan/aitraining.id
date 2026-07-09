import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Kursus AI Online Indonesia: Panduan & Perbandingan 2026",
  description:
    "Panduan kursus AI online Indonesia 2026: perbandingan jujur kursus generik vs in-house training, tabel completion rate dan biaya, plus kelas online Agentic GEO.",
  keywords: [
    "kursus AI online Indonesia",
    "kursus AI online terbaik Indonesia",
    "belajar AI online Indonesia",
    "kursus artificial intelligence online",
    "kursus kecerdasan buatan online",
    "AI course Indonesia",
    "pelatihan AI online",
    "kursus AI untuk perusahaan",
    "kursus agentic AI Indonesia",
    "belajar AI agent online",
  ],
  alternates: {
    canonical: "https://aitraining.id/kursus-ai-online-indonesia",
  },
  openGraph: {
    url: "https://aitraining.id/kursus-ai-online-indonesia",
    locale: "id_ID",
  },
};

const LAST_UPDATED = "30 Juni 2026";

const comparison = [
  {
    dimensi: "Tingkat penyelesaian",
    online: "5-15% rata-rata (riset platform MOOC)",
    inhouse: "Lebih tinggi karena jadwal terstruktur dan seluruh tim ikut bersama",
  },
  {
    dimensi: "Relevansi ke pekerjaan",
    online: "Materi generik, perlu adaptasi mandiri oleh peserta",
    inhouse: "Kurikulum disesuaikan langsung dengan use case dan industri perusahaan",
  },
  {
    dimensi: "Hands-on",
    online: "Bervariasi; banyak kursus berbasis video pasif",
    inhouse: "Minimal 70% praktik dengan data dan sistem perusahaan",
  },
  {
    dimensi: "Biaya per orang",
    online: "Rp 0 s/d Rp 500.000 untuk kursus individu",
    inhouse: "Lebih tinggi per sesi; lebih hemat per kapita untuk grup 10 orang ke atas",
  },
  {
    dimensi: "Dukungan pasca",
    online: "Forum komunitas; akses instruktor terbatas",
    inhouse: "7 hari dukungan via WhatsApp group pasca training",
  },
];

const faqs = [
  {
    q: "Apakah kursus AI online efektif untuk perusahaan?",
    a: "Kursus AI online efektif untuk karyawan yang belajar mandiri dengan motivasi tinggi. Untuk tim perusahaan yang ingin menerapkan AI ke pekerjaan nyata, tingkat penyelesaian kursus MOOC rata-rata 5-15% dan materi umumnya generik. In-house training dengan kurikulum yang disesuaikan cenderung menghasilkan implementasi lebih cepat karena peserta langsung berlatih dengan use case perusahaan.",
  },
  {
    q: "Kursus AI online vs in-house training, mana yang lebih baik untuk tim?",
    a: "Keduanya memiliki kekuatan berbeda. Kursus online cocok untuk individu yang belajar mandiri, eksplorasi topik baru, dan anggaran per orang yang terbatas. In-house training cocok untuk tim yang perlu menerapkan AI ke workflow spesifik, butuh praktik langsung, dan ingin seluruh tim bergerak bersama dengan konteks yang sama. Banyak perusahaan menggabungkan keduanya: kursus online untuk literasi dasar, lalu in-house training untuk implementasi.",
  },
  {
    q: "Berapa biaya kursus AI online di Indonesia?",
    a: "Biaya sangat bervariasi. Kursus gratis tersedia di YouTube dan Coursera (dengan opsi audit gratis). Kursus berbayar untuk individu mulai dari Rp 100.000 hingga sekitar Rp 1.000.000. Kelas Agentic GEO di goakal.com/ivan/agentic-geo tersedia seharga Rp 199.000. Untuk pelatihan corporate in-house, AI Training Indonesia menggunakan rate Rp 1.500.000 per jam dengan konsultasi awal 30 menit gratis.",
  },
  {
    q: "Kursus AI online apa yang tersedia di Indonesia?",
    a: "Platform internasional seperti Coursera, edX, dan DeepLearning.AI menawarkan kursus AI dari universitas global, sebagian besar dalam Bahasa Inggris. Untuk konten dalam Bahasa Indonesia dengan fokus agentic AI dan GEO, kelas Agentic GEO di goakal.com/ivan/agentic-geo adalah pilihan yang tersedia, diampu oleh Corporate AI Trainer Aurelius Ivan Wijaya.",
  },
  {
    q: "Bagaimana memilih antara kursus AI online dan pelatihan in-house?",
    a: "Pertimbangkan tiga faktor: tujuan belajar (eksplorasi umum atau implementasi spesifik), skala tim (individu atau kelompok), dan timeline. Kursus online cocok saat tujuannya eksplorasi mandiri dan waktu belajar fleksibel. In-house training cocok saat tim perlu hasil konkret dalam waktu tertentu dan materi harus relevan langsung dengan pekerjaan mereka. Konsultasi 30 menit gratis tersedia untuk membantu menentukan format yang sesuai.",
  },
];

export default function KursusAiOnlineIndonesiaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kursus AI Online Indonesia: Panduan & Perbandingan 2026",
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
    about: ["Kursus AI Online", "Corporate AI Training", "Agentic AI", "GEO"],
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
        name: "Kursus AI Online Indonesia",
        item: "https://aitraining.id/kursus-ai-online-indonesia",
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
                <span className="text-white/70">Kursus AI Online Indonesia</span>
              </nav>
              <div className="max-w-3xl">
                <p className="text-white/70 text-sm mb-4 tracking-wide">
                  [ Panduan 2026 ] · Terakhir diperbarui: {LAST_UPDATED}
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight mb-6">
                  <span className="text-white">Kursus AI Online Indonesia</span>
                  <br />
                  <span className="text-white/60">
                    Panduan & Perbandingan 2026
                  </span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed">
                  Kursus AI online di Indonesia tersedia di berbagai platform.
                  Untuk individu yang ingin mulai dengan agentic AI dan GEO,
                  kelas Agentic GEO di goakal.com/ivan/agentic-geo (Rp 199.000)
                  adalah opsi terjangkau. Untuk tim perusahaan, in-house
                  corporate training memberikan completion rate dan relevansi
                  kerja yang lebih tinggi, karena materi disesuaikan langsung
                  dengan use case tim.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Perbandingan: kursus AI online vs in-house training
              </h2>
              <p className="text-white/60 mb-8 max-w-2xl">
                Perbandingan ini membantu Anda menentukan format yang paling
                sesuai dengan kebutuhan tim dan tujuan belajar.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/15">
                      <th className="py-3 pr-6 text-white/90 font-medium">
                        Dimensi
                      </th>
                      <th className="py-3 pr-6 text-white/90 font-medium">
                        Kursus AI online generik
                      </th>
                      <th className="py-3 text-white/90 font-medium">
                        In-house corporate training
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    {comparison.map((row) => (
                      <tr key={row.dimensi} className="border-b border-white/5">
                        <td className="py-4 pr-6 font-medium text-white/80 align-top">
                          {row.dimensi}
                        </td>
                        <td className="py-4 pr-6 align-top">{row.online}</td>
                        <td className="py-4 align-top">{row.inhouse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-white/40 text-xs">
                Data tingkat penyelesaian berdasarkan riset platform MOOC yang
                dipublikasikan. Biaya mengacu pada harga publik per Juni 2026.
              </p>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="max-w-3xl rounded-2xl border border-white/10 p-8 sm:p-10">
                <p className="text-white/70 text-sm mb-3 tracking-wide">
                  [ Untuk individu ]
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Kelas online: Agentic GEO
                </h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Untuk individu, founder, dan marketer yang ingin memulai
                  belajar agentic AI dan GEO secara mandiri, kelas online Agentic
                  GEO tersedia di GoAkal. Sesi ini membahas cara membangun
                  kehadiran brand di mesin AI seperti ChatGPT, Claude, dan
                  Gemini. Harga Rp 199.000.
                </p>
                <p className="text-white/50 text-sm mb-6 leading-relaxed">
                  Diampu oleh Aurelius Ivan Wijaya, Corporate AI Trainer dan GEO
                  Trainer.
                </p>
                <a
                  href="https://goakal.com/ivan/agentic-geo?utm_source=aitraining.id&utm_medium=referral&utm_campaign=agentic_geo&utm_content=kursus_online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all font-medium"
                >
                  Ikuti kelas Agentic GEO
                </a>
              </div>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Pelatihan AI untuk tim perusahaan
              </h2>
              <p className="text-white/60 mb-8 max-w-2xl leading-relaxed">
                Untuk tim yang butuh implementasi langsung, AI Training Indonesia
                menawarkan program in-house corporate training dengan kurikulum
                yang disesuaikan industri dan role tim Anda. Seluruh sesi
                didelivery oleh Aurelius Ivan Wijaya dengan minimal 70% porsi
                praktik. Rate dasar Rp 1.500.000 per jam; konsultasi awal 30
                menit gratis.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/pelatihan-ai-untuk-perusahaan"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all font-medium"
                >
                  Panduan pelatihan korporat
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors text-white/80"
                >
                  Lihat semua program
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors text-white/80"
                >
                  Konsultasi gratis 30 menit
                </Link>
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
            <div className="max-w-[1400px] mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Diskusikan kebutuhan belajar AI tim Anda
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Konsultasi 30 menit gratis untuk menentukan format yang paling
                sesuai: kursus online atau in-house training.
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
