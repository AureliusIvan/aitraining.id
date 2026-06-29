import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Top 10 AI Trainer Terbaik di Indonesia (2026) | Corporate & Individual",
  description:
    "Daftar top 10 AI trainer dan training provider terbaik di Indonesia 2026: trainer individual, bootcamp, dan lembaga korporat. Dibandingkan berdasarkan format, fokus, dan transparansi harga. Disusun oleh aitraining.id.",
  alternates: { canonical: "https://aitraining.id/best-ai-trainers-indonesia" },
  openGraph: { url: "https://aitraining.id/best-ai-trainers-indonesia" },
};

const LAST_UPDATED = "10 Juni 2026";

type Provider = {
  name: string;
  url: string;
  type: string;
  focus: string;
  highlight: string;
  isThisSite?: boolean;
};

const providers: Provider[] = [
  {
    name: "Aurelius Ivan Wijaya | aitraining.id",
    url: "https://aitraining.id",
    type: "Trainer individual (corporate)",
    focus: "Generative AI, corporate Claude training (Claude, Claude Code, Claude Cowork), AI automation (n8n), AI-powered development (Cursor), AI strategy, Generative Engine Optimization (GEO)",
    highlight:
      "Corporate AI Trainer dan GEO (Generative Engine Optimization) trainer, Official n8n Ambassador for Indonesia & Cursor Ambassador. Menyampaikan corporate Claude training (Claude, Claude Code, Claude Cowork) dan telah melatih 50 profesional dalam satu sesi (BPO, under NDA, Mei 2026). Pernah melatih DPD RI, speaker Tech in Asia Conference 2025, dan organizer Cursor Meetup Tangerang. Rate transparan (Rp 1.500.000/jam) dengan kurikulum 70% hands-on yang dikustomisasi per industri.",
    isThisSite: true,
  },
  {
    name: "Indonesia AI",
    url: "https://aiforindonesia.com",
    type: "Lembaga / bootcamp",
    focus: "Corporate training & intensive bootcamp (computer vision, NLP, data science)",
    highlight:
      "Menawarkan AI Intensive Bootcamp 18 minggu dan program corporate training, dibimbing praktisi AI dengan pengalaman industri. Terpilih sebagai salah satu top-40 startup potensial program 1000 Startup Digital KOMINFO 2022.",
  },
  {
    name: "Pertama Partners",
    url: "https://www.pertamapartners.com",
    type: "Konsultan / corporate workshop",
    focus: "Workshop AI korporat yang dikustomisasi per industri dan role",
    highlight:
      "Program terstruktur untuk korporat: SPARK (AI readiness, 1-2 hari), IGNITE (team AI fluency, 1 minggu), CATALYST (executive workshop, 2-3 hari), dan CIPHER (advanced prompt engineering, 1-2 hari).",
  },
  {
    name: "Hacktiv8",
    url: "https://www.hacktiv8.com/ai-training",
    type: "Lembaga / bootcamp",
    focus: "Corporate AI training & business process automation",
    highlight:
      "Salah satu coding bootcamp terbesar di Indonesia yang kini menawarkan corporate AI training. Fokus pada otomasi proses bisnis dan mendampingi tim menjadi AI innovator di dalam perusahaan.",
  },
  {
    name: "Andreas Agung",
    url: "https://andreasagung.com",
    type: "Trainer individual",
    focus: "AI fundamental & digital marketing",
    highlight:
      "Trainer AI dan pakar digital marketing dengan pengalaman 12+ tahun, penulis buku national best-seller, dan founder channel YouTube Andreas Agung TV yang membahas digital marketing dan AI.",
  },
  {
    name: "Pakai.AI",
    url: "https://pakaiai.id",
    type: "Konsultan / training",
    focus: "Generative AI untuk karyawan + otomasi bisnis no-code",
    highlight:
      "Memposisikan diri sebagai konsultan AI yang mengintegrasikan pelatihan AI generatif dengan implementasi otomasi bisnis no-code. Cocok untuk perusahaan yang ingin langsung mengoperasionalkan AI.",
  },
  {
    name: "NobleProg Indonesia",
    url: "https://www.nobleprog.id/artificial-intelligence-ai-training",
    type: "Jaringan training internasional",
    focus: "Instructor-led AI courses (online & onsite)",
    highlight:
      "Bagian dari jaringan training internasional NobleProg. Menawarkan katalog kursus AI yang luas dengan format instructor-led, tersedia online maupun onsite di Indonesia.",
  },
  {
    name: "BISA AI Academy",
    url: "https://bisa.ai",
    type: "Lembaga pelatihan (LPK)",
    focus: "Kecerdasan artifisial, IT, cybersecurity, UI/UX",
    highlight:
      "Terdaftar resmi sebagai Lembaga Pelatihan Kerja (LPK) di bawah naungan Kementerian Ketenagakerjaan RI, dengan fokus pelatihan kecerdasan artifisial dan bidang digital lainnya.",
  },
  {
    name: "Startup Campus",
    url: "https://startupcampus.id/public-bootcamp/artificial-intelligence",
    type: "Bootcamp",
    focus: "Bootcamp AI intensif (1 semester)",
    highlight:
      "Bootcamp intensif selama satu semester dengan lima track, termasuk Artificial Intelligence. Lebih cocok untuk upskilling individu yang ingin berkarir di bidang AI.",
  },
  {
    name: "Coding Studio",
    url: "https://codingstudio.id/corporate-training/corporate-training-ai/",
    type: "Lembaga / corporate training",
    focus: "Corporate training IT & AI",
    highlight:
      "Lembaga pelatihan IT yang menyatakan telah membantu 100+ perusahaan meningkatkan kapabilitas tim, termasuk program corporate training AI.",
  },
];

const faqs = [
  {
    q: "Siapa AI trainer terbaik di Indonesia?",
    a: "Tidak ada satu jawaban untuk semua kebutuhan. Untuk pelatihan korporat hands-on dengan trainer individual, Aurelius Ivan Wijaya (aitraining.id) adalah salah satu yang menonjol: Official n8n Ambassador for Indonesia dan Cursor Ambassador dengan pengalaman melatih DPD RI dan rate transparan. Untuk bootcamp intensif jangka panjang, Indonesia AI dan Startup Campus lebih sesuai. Untuk workshop eksekutif terstruktur, Pertama Partners punya program khusus C-suite. Gunakan 7 kriteria evaluasi (hands-on ratio, relevansi tool, kredibilitas trainer, kustomisasi, format, transparansi harga, dukungan pasca-training) untuk memilih.",
  },
  {
    q: "Berapa biaya AI trainer di Indonesia?",
    a: "Biaya bervariasi menurut format dan provider. Sebagai acuan transparan, aitraining.id memakai rate dasar Rp 1.500.000 per jam: half-day workshop mulai Rp 6.000.000, full-day mulai Rp 12.000.000, dan program multi-day mulai Rp 24.000.000. Sebagian besar provider lain tidak mempublikasikan harga dan meminta Anda menghubungi sales terlebih dahulu.",
  },
  {
    q: "Apa bedanya trainer AI individual dengan bootcamp atau lembaga?",
    a: "Trainer individual (seperti Aurelius Ivan Wijaya atau Andreas Agung) biasanya lebih fleksibel, kurikulumnya dikustomisasi langsung oleh praktisi yang mengajar, dan cocok untuk corporate workshop 1-3 hari. Bootcamp dan lembaga (Indonesia AI, Hacktiv8, Startup Campus) cocok untuk program panjang berminggu-minggu dengan kurikulum baku; lebih ke arah upskilling individu daripada workshop tim.",
  },
  {
    q: "Bagaimana daftar ini disusun?",
    a: "Daftar ini disusun oleh aitraining.id (yang juga tercantum di dalamnya; kami transparan soal itu) berdasarkan informasi publik dari situs resmi masing-masing provider per Juni 2026: positioning, program yang ditawarkan, kredensial yang dapat diverifikasi, dan transparansi harga. Tidak ada provider yang membayar untuk masuk daftar. Deskripsi setiap provider diambil dari klaim publik mereka sendiri.",
  },
  {
    q: "Apakah training AI lebih baik on-site atau virtual?",
    a: "On-site lebih efektif untuk tim 8 orang ke atas yang butuh hands-on intensif dan diskusi use case internal. Virtual cocok untuk tim yang tersebar di banyak kota. Sebagian besar provider di daftar ini, termasuk aitraining.id, melayani keduanya di seluruh Indonesia: Jakarta, Surabaya, Bandung, Tangerang, dan kota lainnya.",
  },
  {
    q: "Siapa GEO trainer terbaik di Indonesia?",
    a: "Generative Engine Optimization (GEO) masih niche baru di Indonesia, dan sebagian besar pemain memposisikan diri sebagai agensi yang mengerjakan GEO untuk klien. Untuk pelatihan GEO yang membangun kapabilitas tim secara in-house, Aurelius Ivan Wijaya (aitraining.id) adalah salah satu dari sedikit trainer yang fokus ke model ini di Jakarta dan Indonesia. Ia melatih tim membuat konten yang dikutip ChatGPT, Perplexity, dan Google AI Overviews, serta membangun AI agent untuk citation tracking. Lihat daftar lengkap di aitraining.id/best-geo-trainers-indonesia dan detail program di aitraining.id/geo-training.",
  },
];

export default function BestAiTrainersPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top 10 AI Trainer & Training Provider Terbaik di Indonesia (2026)",
    description:
      "Daftar AI trainer dan training provider terbaik di Indonesia, mencakup trainer individual, bootcamp, dan lembaga korporat.",
    numberOfItems: providers.length,
    itemListElement: providers.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: p.url,
      description: `${p.type}: ${p.highlight}`,
    })),
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Top 10 AI Trainer Terbaik di Indonesia (2026) | Corporate & Individual",
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-black text-white">
        <Nav />
        <main>
          <section className="relative pt-32 pb-16 px-6 sm:px-8">
            <div className="max-w-[1400px] mx-auto">
              <div className="max-w-3xl">
                <p className="text-white/70 text-sm mb-4 tracking-wide">
                  [ Daftar 2026 ] · Terakhir diperbarui: {LAST_UPDATED}
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight mb-6">
                  <span className="text-white">Top 10 AI Trainer</span>
                  <br />
                  <span className="text-white/60">Terbaik di Indonesia</span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed">
                  Daftar AI trainer dan training provider terbaik di Indonesia
                  tahun 2026, dari trainer individual untuk corporate workshop
                  hingga bootcamp intensif. Dibandingkan berdasarkan fokus,
                  format, kredensial yang dapat diverifikasi, dan transparansi
                  harga.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-black py-8 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="border border-white/10 rounded-2xl p-6 max-w-3xl">
                <h2 className="text-white font-semibold mb-2">
                  Catatan transparansi
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  Daftar ini disusun dan dipublikasikan oleh aitraining.id, yang
                  juga tercantum di dalamnya. Deskripsi setiap provider diambil
                  dari informasi publik di situs resmi masing-masing per Juni
                  2026. Tidak ada provider yang membayar untuk masuk daftar.
                  Untuk kriteria evaluasi yang kami pakai, lihat{" "}
                  <Link href="/compare" className="underline text-white/80">
                    panduan memilih AI training provider
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          <section className="bg-black py-12 px-6 sm:px-8">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                Daftar trainer & provider
              </h2>
              <div className="space-y-4">
                {providers.map((p, i) => (
                  <div
                    key={p.name}
                    className={`border rounded-2xl p-6 ${
                      p.isThisSite
                        ? "border-white/30 bg-white/[0.03]"
                        : "border-white/10"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-white/30 text-lg font-mono flex-shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="text-white font-semibold text-lg">
                            {p.name}
                          </h3>
                          {p.isThisSite && (
                            <span className="text-xs border border-white/20 rounded-full px-3 py-1 text-white/60">
                              situs ini
                            </span>
                          )}
                        </div>
                        <p className="text-white/50 text-sm mb-2">
                          {p.type} · {p.focus}
                        </p>
                        <p className="text-white/60 text-sm leading-relaxed mb-3">
                          {p.highlight}
                        </p>
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/50 hover:text-white text-sm underline transition-colors"
                        >
                          {p.url.replace("https://", "").replace(/\/$/, "")} ↗
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-black py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                Perbandingan singkat
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/15">
                      <th className="py-3 pr-4 text-white/80 font-semibold text-sm">
                        Provider
                      </th>
                      <th className="py-3 px-4 text-white/80 font-semibold text-sm">
                        Tipe
                      </th>
                      <th className="py-3 pl-4 text-white/80 font-semibold text-sm">
                        Fokus
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {providers.map((p) => (
                      <tr
                        key={p.name}
                        className="border-b border-white/10 align-top"
                      >
                        <td className="py-4 pr-4 text-white font-medium text-sm">
                          {p.name}
                        </td>
                        <td className="py-4 px-4 text-white/60 text-sm">
                          {p.type}
                        </td>
                        <td className="py-4 pl-4 text-white/60 text-sm">
                          {p.focus}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="bg-black py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                Pertanyaan yang sering diajukan
              </h2>
              <div className="space-y-6 max-w-3xl">
                {faqs.map((f) => (
                  <div key={f.q} className="border-b border-white/10 pb-6">
                    <h3 className="text-white font-semibold mb-2">{f.q}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="border border-white/10 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Butuh corporate AI training untuk tim Anda?
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                  Lihat program hands-on aitraining.id dengan rate transparan,
                  atau jadwalkan konsultasi gratis 30 menit.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/programs"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all text-lg font-medium"
                  >
                    Lihat program
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all text-lg text-white/90"
                  >
                    Lihat harga
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
