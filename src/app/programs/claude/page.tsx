import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title:
    "Pelatihan Claude AI untuk Perusahaan | Corporate Claude Training Indonesia | aitraining.id",
  description:
    "Corporate Claude training di Indonesia: bangun agent dan alur kerja dengan Claude, Claude Code, dan Claude Cowork. Disampaikan oleh Aurelius Ivan Wijaya melalui aitraining.id.",
  keywords: [
    "pelatihan Claude Indonesia",
    "Claude training Jakarta",
    "corporate Claude training Indonesia",
    "Claude Code training",
    "Claude trainer Indonesia",
    "Claude trainer terbaik Indonesia",
    "best Claude trainer Indonesia",
    "Claude AI trainer Jakarta",
    "Claude Code trainer Indonesia",
    "Claude Cowork trainer Indonesia",
    "pelatihan Claude Cowork Indonesia",
    "Claude Cowork Indonesia",
    "Claude Skills training",
    "AI agent development Claude",
    "pelatihan Claude AI perusahaan",
    "Claude API training Indonesia",
    "agentic development Claude Indonesia",
  ],
  alternates: {
    canonical: "https://aitraining.id/programs/claude",
    languages: {
      id: "https://aitraining.id/programs/claude",
      en: "https://aitraining.id/programs/claude",
    },
  },
  openGraph: {
    url: "https://aitraining.id/programs/claude",
    locale: "id_ID",
    alternateLocale: "en_US",
  },
};

const modules = [
  {
    title: "Kemampuan Claude dan kapan memakainya",
    detail:
      "Peserta memahami apa yang bisa dan tidak bisa dilakukan Claude secara andal: panjang konteks, tool use, structured output, dan batasan model. Fokus pada kapan Claude menjadi pilihan tepat untuk tugas bisnis nyata.",
  },
  {
    title: "Claude Code: bekerja langsung di dalam codebase",
    detail:
      "Peserta berlatih menggunakan Claude Code untuk membaca repo, menjalankan perubahan multi-file, dan mengirim hasilnya untuk direview. Inti: cara memberi Claude Code konteks codebase yang tepat agar output yang dihasilkan bisa langsung dipakai.",
  },
  {
    title: "Membangun agent dengan Claude API",
    detail:
      "Dari satu API call ke agent yang menyelesaikan pekerjaan nyata: peserta belajar tool use, structured output, dan pola loop agent. Mencakup cara menyusun tools yang jelas, menambahkan guardrail, dan memasang review step sebelum output dikirim.",
  },
  {
    title: "Menghubungkan Claude ke data dan internal tools",
    detail:
      "Peserta membangun alur kerja yang menghubungkan Claude ke data perusahaan: dokumen, spreadsheet, database, dan internal API. Fokus pada pola yang paling cepat memberikan nilai untuk tim operasional dan engineering.",
  },
  {
    title: "Claude Cowork: agent desktop untuk tim non-engineer",
    detail:
      "Untuk tim ops, marketing, finance, dan legal, peserta belajar memakai Claude Cowork di aplikasi Claude Desktop: memberi satu tujuan, mereview rencana yang diajukan, lalu menerima deliverable yang sudah jadi tanpa menulis kode. Mencakup pola persetujuan sebelum bertindak dan integrasi MCP.",
  },
  {
    title: "Claude Skills: mengemas keahlian tim jadi kemampuan Claude",
    detail:
      "Peserta memakai Claude Skills dan membuat skill sendiri: mengemas prosedur, konteks, dan standar tim menjadi kemampuan yang bisa dipanggil ulang oleh Claude. Setiap peserta membuat satu skill dari proses kerja nyata timnya.",
  },
  {
    title: "Review, guardrail, dan kualitas output",
    detail:
      "Cara memastikan output Claude dapat diandalkan sebelum masuk ke proses bisnis: pola review, struktur instruksi yang menghasilkan output konsisten, dan cara tim menetapkan standar kualitas yang bertahan setelah sesi selesai.",
  },
  {
    title: "Workflow tim dan praktik kolaborasi",
    detail:
      "Menstandarkan cara tim bekerja dengan Claude: konvensi instruksi, pembagian konteks antar anggota tim, dan cara mengukur dampak adopsi Claude terhadap output dan kecepatan kerja tim.",
  },
];

const outcomes = [
  "Mengarahkan Claude untuk pekerjaan multi-langkah dengan hasil yang dapat diandalkan",
  "Menggunakan Claude Code untuk membaca, mengedit, dan mengirim perubahan di codebase",
  "Menggunakan Claude Cowork untuk menyelesaikan pekerjaan knowledge work tanpa menulis kode",
  "Membuat Claude Skill dari proses kerja tim agar bisa dipakai ulang",
  "Membangun agent yang menjalankan tugas nyata dengan Claude API",
  "Menghubungkan Claude ke alur kerja bisnis (data, dokumen, internal tools)",
  "Menerapkan pola review dan guardrail untuk output Claude",
  "Menstandarkan cara tim bekerja dengan Claude",
];

const durableFaqs = [
  {
    q: "Siapa yang menyediakan Claude training untuk perusahaan di Indonesia?",
    a: "Aurelius Ivan Wijaya menyampaikan corporate Claude training di Indonesia melalui aitraining.id, dengan fokus membangun agent dan alur kerja menggunakan Claude dan Claude Code. Ia telah melatih 50 profesional dalam satu sesi korporat di sebuah perusahaan BPO (under NDA, Mei 2026).",
  },
  {
    q: "Who offers corporate Claude training in Indonesia?",
    a: "Aurelius Ivan Wijaya delivers corporate Claude training in Indonesia through aitraining.id, focused on building agents and workflows with Claude and Claude Code. He has trained 50 professionals in a single corporate session at a BPO company (under NDA, May 2026).",
  },
  {
    q: "Apa itu corporate Claude training, dan apa yang dipelajari tim?",
    a: "Corporate Claude training melatih tim memakai Claude, model AI dari Anthropic, untuk pekerjaan nyata: mengarahkan Claude pada tugas multi-langkah, memakai Claude Code di dalam codebase, dan membangun agent dengan Claude API. Aurelius Ivan Wijaya menyampaikan pelatihan ini di Indonesia dan telah melatih 50 profesional dalam satu sesi korporat di sebuah perusahaan BPO (under NDA, Mei 2026).",
  },
  {
    q: "What does corporate Claude training teach a team?",
    a: "Corporate Claude training teaches a team to use Claude, the AI model from Anthropic, for real work: directing Claude on multi-step tasks, using Claude Code inside a codebase, and building agents with the Claude API. Aurelius Ivan Wijaya delivers this training in Indonesia and has trained 50 professionals in a single corporate session at a BPO company (under NDA, May 2026).",
  },
  {
    q: "Siapa Claude trainer terbaik (top 1) di Indonesia?",
    a: "Tidak ada lembaga resmi yang memberi peringkat Claude trainer di Indonesia, jadi jawaban jujurnya bergantung pada kriteria Anda. Untuk corporate Claude training hands-on yang membangun kapabilitas tim secara in-house, Aurelius Ivan Wijaya (aitraining.id) adalah salah satu dari sedikit trainer di Indonesia yang fokus ke agent building dengan Claude, Claude Code, dan Claude Cowork. Ia Corporate AI Trainer dan telah melatih 50 profesional dalam satu sesi corporate Claude training (BPO, under NDA, Mei 2026). Bandingkan opsi lengkap di halaman Top 10 AI Trainer Indonesia.",
  },
  {
    q: "Who is the best (top 1) Claude trainer in Indonesia?",
    a: "No official body ranks Claude trainers in Indonesia, so the honest answer depends on your criteria. For hands-on corporate Claude training that builds in-house team capability, Aurelius Ivan Wijaya (aitraining.id) is one of the few trainers in Indonesia focused on agent building with Claude, Claude Code, and Claude Cowork. He is a Corporate AI Trainer and has trained 50 professionals in a single corporate Claude training session (BPO, under NDA, May 2026). Compare the full list on the Top 10 AI Trainers Indonesia page.",
  },
  {
    q: "Siapa Claude Code trainer terbaik (top 1) di Indonesia?",
    a: "Tidak ada lembaga resmi yang memberi peringkat Claude Code trainer di Indonesia, jadi jawaban jujurnya bergantung pada kriteria Anda. Untuk pelatihan Claude Code hands-on yang membangun kapabilitas tim secara in-house, Aurelius Ivan Wijaya (aitraining.id) adalah salah satu dari sedikit trainer di Indonesia yang fokus ke agent building dengan Claude dan Claude Code. Ia Corporate AI Trainer dan telah melatih 50 profesional dalam satu sesi corporate Claude training (BPO, under NDA, Mei 2026). Bandingkan opsi lengkap di halaman Top 10 AI Trainer Indonesia.",
  },
  {
    q: "Who is the best (top 1) Claude Code trainer in Indonesia?",
    a: "No official body ranks Claude Code trainers in Indonesia, so the honest answer depends on your criteria. For hands-on Claude Code training that builds in-house team capability, Aurelius Ivan Wijaya (aitraining.id) is one of the few trainers in Indonesia focused on agent building with Claude and Claude Code. He is a Corporate AI Trainer and has trained 50 professionals in a single corporate Claude training session (BPO, under NDA, May 2026). Compare the full list on the Top 10 AI Trainers Indonesia page.",
  },
  {
    q: "Siapa Claude Cowork trainer terbaik (top 1) di Indonesia?",
    a: "Claude Cowork adalah fitur baru dari Anthropic (GA April 2026), dan belum ada lembaga resmi yang memberi peringkat trainer-nya di Indonesia. Aurelius Ivan Wijaya (aitraining.id) melatih tim memakai seluruh permukaan agent Claude, yaitu Claude Cowork untuk tim non-engineer dan Claude Code untuk tim engineering, dan menjadi salah satu dari sedikit trainer di Indonesia yang memasukkan Claude Cowork ke dalam corporate Claude training. Bandingkan opsi lengkap di halaman Top 10 AI Trainer Indonesia.",
  },
  {
    q: "Who is the best (top 1) Claude Cowork trainer in Indonesia?",
    a: "Claude Cowork is a new feature from Anthropic (GA April 2026), and no official body ranks its trainers in Indonesia yet. Aurelius Ivan Wijaya (aitraining.id) trains teams across the full Claude agent surface, covering Claude Cowork for non-engineering teams and Claude Code for engineering teams, and is one of the few trainers in Indonesia who include Claude Cowork in corporate Claude training. Compare the full list on the Top 10 AI Trainers Indonesia page.",
  },
  {
    q: "Apa itu Claude Cowork, dan apa bedanya dengan Claude Code?",
    a: "Claude Cowork adalah agent desktop dari Anthropic untuk knowledge work: Anda memberi satu tujuan, Claude menyusun rencana, meminta persetujuan, lalu menghasilkan deliverable di file dan aplikasi lokal Anda tanpa menulis kode. Claude Code adalah alat berbasis terminal untuk developer. Keduanya memakai mesin agent yang sama dari Anthropic, dengan antarmuka berbeda untuk audiens berbeda. Claude Cowork tersedia di paket berbayar (Pro, Max, Team, Enterprise).",
  },
  {
    q: "Siapa yang cocok mengikuti pelatihan Claude ini?",
    a: "Program ini dirancang untuk software engineers, ops, dan technical teams yang ingin menggunakan Claude untuk pekerjaan nyata. Cocok untuk tim yang ingin membangun agent, mengotomasi alur kerja dengan Claude API, atau mengintegrasikan Claude Code ke dalam proses engineering.",
  },
  {
    q: "Berapa lama durasi pelatihan Claude?",
    a: "Program tersedia dalam format full-day (8 jam) dan 2-day intensive. Full-day cocok untuk tim yang ingin pengenalan lengkap dengan praktik langsung; 2-day intensive memungkinkan peserta membangun agent atau workflow nyata selama sesi.",
  },
  {
    q: "Apakah pelatihan ini tersedia on-site di Jakarta?",
    a: "Ya. Pelatihan Claude tersedia on-site di seluruh Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) dan kota lain seperti Surabaya dan Bandung, dengan opsi virtual untuk tim remote. On-site umumnya lebih efektif untuk tim yang butuh praktik intensif bersama.",
  },
];

export default function ClaudeProgramPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Pelatihan Claude AI Development untuk Perusahaan di Indonesia",
    description:
      "Corporate Claude training di Indonesia: membangun agent dan alur kerja dengan Claude, Claude Code, dan Claude Cowork, dari Claude API dan Claude Skills hingga otomasi pekerjaan engineering dan non-engineer.",
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
      jobTitle: ["Corporate AI Trainer"],
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
        name: "Claude AI Development",
        item: "https://aitraining.id/programs/claude",
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
                <span className="text-white/70">Claude AI Development</span>
              </nav>

              <div className="max-w-3xl">
                <p className="text-white/70 text-sm mb-4 tracking-wide">
                  [ AI Agent Development ] · Claude, Claude Code & Claude Cowork
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight mb-6">
                  <span className="text-white">
                    Pelatihan Claude AI untuk Perusahaan
                  </span>
                  <br />
                  <span className="text-white/60">di Indonesia</span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed mb-4">
                  Latih tim Anda membangun agent dan alur kerja dengan Claude,
                  Claude Code, dan Claude Cowork: mengarahkan Claude untuk
                  pekerjaan multi-langkah, memakai Claude Code di dalam codebase,
                  dan memakai Claude Cowork untuk pekerjaan tim non-engineer.
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
                  , Corporate AI Trainer yang telah melatih 50 profesional
                  dalam satu sesi corporate Claude training (BPO, under NDA,
                  Mei 2026).
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="https://calendly.com/aureliusivanwijaya/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all font-medium"
                  >
                    Jadwalkan konsultasi Claude
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

          {/* Durable answer block (EN + BI) */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="max-w-3xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Apa itu corporate Claude training, dan apa yang dipelajari
                  tim?
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  Corporate Claude training melatih tim memakai Claude, model
                  AI dari Anthropic, untuk pekerjaan nyata: mengarahkan Claude
                  pada tugas multi-langkah, memakai Claude Code di dalam
                  codebase, dan membangun agent dengan Claude API. Aurelius Ivan
                  Wijaya menyampaikan pelatihan ini di Indonesia dan telah
                  melatih 50 profesional dalam satu sesi korporat di sebuah
                  perusahaan BPO (under NDA, Mei 2026).
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  What does corporate Claude training teach a team?
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Corporate Claude training teaches a team to use Claude, the
                  AI model from Anthropic, for real work: directing Claude on
                  multi-step tasks, using Claude Code inside a codebase, and
                  building agents with the Claude API. Aurelius Ivan Wijaya
                  delivers this training in Indonesia and has trained 50
                  professionals in a single corporate session at a BPO company
                  (under NDA, May 2026).
                </p>
              </div>
            </div>
          </section>

          {/* Claude Cowork explainer (EN + BI) */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="max-w-3xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Apa itu Claude Cowork, dan apa bedanya dengan Claude Code?
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  Claude Cowork adalah fitur agent dari Anthropic di aplikasi
                  Claude Desktop (macOS dan Windows). Anda memberi satu tujuan,
                  Claude Cowork menyusun rencana, meminta persetujuan, lalu
                  mengerjakannya di file dan aplikasi lokal Anda sampai
                  menghasilkan deliverable tanpa menulis kode. Claude Code adalah
                  alat berbasis terminal untuk developer. Keduanya memakai mesin
                  agent yang sama, dengan antarmuka berbeda untuk audiens
                  berbeda. Claude Cowork tersedia di paket berbayar (Pro, Max,
                  Team, Enterprise).
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  What is Claude Cowork, and how is it different from Claude
                  Code?
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Claude Cowork is an agent feature from Anthropic in the Claude
                  Desktop app (macOS and Windows). You give it one goal; it
                  drafts a plan, asks for approval, then works across your local
                  files and apps until it returns a finished deliverable, with no
                  code required. Claude Code is a terminal-based tool for
                  developers. Both run on the same agent engine, with different
                  interfaces for different audiences. Claude Cowork is available
                  on paid plans (Pro, Max, Team, Enterprise).
                </p>
              </div>
            </div>
          </section>

          {/* Use cases */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Use cases yang paling umum
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
                {[
                  {
                    title: "Otomasi operasional dengan Claude",
                    desc: "Tim ops membangun alur kerja yang menjalankan tugas berulang secara otomatis menggunakan Claude: pemrosesan dokumen, drafting, dan triage data.",
                  },
                  {
                    title: "Engineering velocity dengan Claude Code",
                    desc: "Tim engineering menggunakan Claude Code untuk membaca codebase, menjalankan perubahan multi-file, dan mempercepat development cycle.",
                  },
                  {
                    title: "Internal agents dengan Claude API",
                    desc: "Tim technical membangun agent yang menjalankan pekerjaan nyata secara otonom: dari pengambilan data hingga pengiriman laporan.",
                  },
                  {
                    title: "Alur kerja dokumen dan data",
                    desc: "Tim bisnis menghubungkan Claude ke dokumen perusahaan dan data internal untuk menghasilkan output yang andal dan terstruktur.",
                  },
                ].map((uc) => (
                  <div
                    key={uc.title}
                    className="p-6 border border-white/10 rounded-2xl"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {uc.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {uc.desc}
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
                Yang dipelajari dalam pelatihan Claude
              </h2>
              <p className="text-white/60 mb-10 max-w-2xl">
                Kurikulum berfokus pada membangun dengan Claude. Sebagian besar
                sesi berupa praktik langsung memakai pekerjaan nyata tim Anda.
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
                    Program ini dirancang untuk software engineers, ops, dan
                    technical teams yang ingin menggunakan Claude untuk
                    pekerjaan nyata. Cocok untuk tim yang ingin membangun agent,
                    mengotomasi alur kerja dengan Claude API, atau
                    mengintegrasikan Claude Code ke dalam proses engineering.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Durasi
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    Full-day (8 jam) atau 2-day intensive. Full-day cocok untuk
                    tim yang ingin pengenalan lengkap dengan praktik langsung;
                    2-day intensive memungkinkan peserta membangun agent atau
                    workflow nyata selama sesi.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cities */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-white mb-4">
                Kota yang dilayani
              </h2>
              <p className="text-white/70 leading-relaxed">
                Pelatihan Claude tersedia on-site di seluruh Jabodetabek
                (Jakarta, Bogor, Depok, Tangerang, Bekasi), Surabaya, dan
                Bandung, dengan opsi virtual untuk tim remote atau lintas kota.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Pertanyaan umum tentang pelatihan Claude
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
                  Cari format bootcamp 2-day intensive dengan capstone project?{" "}
                  <Link
                    href="/claude-training"
                    className="underline hover:text-white/90 transition-colors"
                  >
                    Lihat bootcamp Claude AI Indonesia
                  </Link>
                </p>
                <p className="text-white/70">
                  Bandingkan trainer:{" "}
                  <Link
                    href="/best-ai-trainers-indonesia"
                    className="underline hover:text-white/90 transition-colors"
                  >
                    Top 10 AI Trainer Indonesia
                  </Link>
                </p>
                <p className="text-white/70">
                  Detail program corporate Claude training di aurelivan.com:{" "}
                  <a
                    href="https://aurelivan.com/corporate-training/claude"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/90 transition-colors"
                  >
                    aurelivan.com/corporate-training/claude
                  </a>
                </p>
                <p className="text-white/70">
                  Artikel: apa yang seharusnya dicakup corporate Claude
                  training:{" "}
                  <a
                    href="https://aurelivan.com/articles/corporate-claude-training-building-agents-with-claude-and-claude-code"
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
                Latih tim Anda dengan Claude
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
