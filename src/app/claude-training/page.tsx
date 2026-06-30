import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Bootcamp Claude AI Indonesia: Kursus & Kelas Claude untuk Tim",
  description:
    "Bootcamp Claude AI hands-on untuk tim di Indonesia: kursus dan kelas Claude 2-day intensive (16 jam) yang membangun agent dan alur kerja dengan Claude, Claude Code, dan Claude Cowork. Disampaikan oleh Aurelius Ivan Wijaya melalui aitraining.id.",
  keywords: [
    "bootcamp Claude Indonesia",
    "Claude AI bootcamp Indonesia",
    "kursus Claude AI Indonesia",
    "pelatihan Claude AI Indonesia",
    "kelas Claude Indonesia",
    "bootcamp Claude AI terbaik Indonesia",
    "top 1 bootcamp Claude Indonesia",
    "top 1 bootcamp Claude terbaik di Indonesia",
    "kursus Claude Code Indonesia",
    "kelas Claude Code Indonesia",
    "bootcamp agent building Claude",
    "Claude Cowork bootcamp Indonesia",
  ],
  alternates: {
    canonical: "https://aitraining.id/claude-training",
    languages: {
      id: "https://aitraining.id/claude-training",
      en: "https://aitraining.id/claude-training",
    },
  },
  openGraph: {
    url: "https://aitraining.id/claude-training",
    locale: "id_ID",
    alternateLocale: "en_US",
  },
};

const LAST_UPDATED = "1 Juli 2026";

const dayOne = [
  {
    title: "Kemampuan Claude dan kapan memakainya",
    detail:
      "Peserta memetakan apa yang bisa diandalkan dari Claude: panjang konteks, tool use, structured output, dan batasan model, sehingga tim tahu kapan Claude jadi pilihan tepat untuk tugas bisnis nyata.",
  },
  {
    title: "Claude Code: bekerja langsung di dalam codebase",
    detail:
      "Peserta berlatih memakai Claude Code untuk membaca repo, menjalankan perubahan multi-file, dan mengirim hasil untuk direview, dengan fokus pada cara memberi konteks codebase yang membuat output langsung terpakai.",
  },
  {
    title: "Membangun agent dengan Claude API",
    detail:
      "Dari satu API call ke agent yang menyelesaikan pekerjaan nyata: peserta menyusun tools, menambahkan guardrail, dan memasang review step sebelum output dikirim.",
  },
  {
    title: "Menghubungkan Claude ke data dan internal tools",
    detail:
      "Peserta membangun alur kerja yang menghubungkan Claude ke dokumen, spreadsheet, database, dan internal API tim, dengan fokus pada pola yang paling cepat memberi nilai untuk tim operasional dan engineering.",
  },
];

const dayTwo = [
  {
    title: "Claude Cowork: agent desktop untuk tim non-engineer",
    detail:
      "Untuk peserta dari tim ops, marketing, finance, dan legal: memberi satu tujuan ke Claude Cowork di Claude Desktop, mereview rencana yang diajukan, lalu menerima deliverable jadi tanpa menulis kode.",
  },
  {
    title: "Claude Skills: mengemas keahlian tim jadi kemampuan Claude",
    detail:
      "Peserta memakai Claude Skills lalu membuat skill sendiri: mengemas prosedur dan standar tim menjadi kemampuan yang bisa dipanggil ulang oleh Claude.",
  },
  {
    title: "Review, guardrail, dan kualitas output",
    detail:
      "Pola review dan struktur instruksi yang menghasilkan output Claude konsisten, plus cara tim menetapkan standar kualitas yang bertahan setelah bootcamp selesai.",
  },
  {
    title: "Capstone: build dan presentasi Claude Skill atau agent",
    detail:
      "Tiap peserta menutup bootcamp dengan membangun satu Claude Skill atau agent dari proses kerja nyata timnya, lalu mempresentasikan hasilnya ke kelompok untuk direview bersama.",
  },
];

const outcomes = [
  "Mengarahkan Claude untuk pekerjaan multi-langkah dengan hasil yang dapat diandalkan",
  "Menggunakan Claude Code untuk membaca, mengedit, dan mengirim perubahan di codebase",
  "Menggunakan Claude Cowork untuk pekerjaan knowledge work tanpa menulis kode",
  "Membuat Claude Skill dari proses kerja tim agar bisa dipakai ulang",
  "Membangun agent yang menjalankan tugas nyata dengan Claude API",
  "Pulang dengan satu Claude Skill atau agent capstone yang siap dipakai tim",
];

const comparison = [
  {
    aspect: "Tujuan",
    bootcamp: "Tim Anda menguasai Claude dan bisa menjalankannya sendiri",
    selfPaced: "Belajar sendiri dari dokumentasi dan video publik",
  },
  {
    aspect: "Kecepatan",
    bootcamp: "Terstruktur, 2 hari intensif dengan review langsung dari trainer",
    selfPaced: "Bergantung pada waktu dan konsistensi belajar masing-masing",
  },
  {
    aspect: "Hasil",
    bootcamp: "Capstone Claude Skill atau agent yang langsung dipakai tim",
    selfPaced: "Pemahaman umum, tanpa review atau capstone terarah",
  },
  {
    aspect: "Cocok untuk",
    bootcamp: "Tim yang ingin kapabilitas Claude menetap secara in-house",
    selfPaced: "Individu yang ingin eksplorasi mandiri tanpa target waktu",
  },
];

const faqs = [
  {
    q: "Apa itu bootcamp Claude AI?",
    a: "Bootcamp Claude AI adalah pelatihan hands-on intensif yang melatih tim memakai Claude, model AI dari Anthropic, untuk pekerjaan nyata: mengarahkan Claude pada tugas multi-langkah, memakai Claude Code di dalam codebase, membangun agent dengan Claude API, dan memakai Claude Cowork untuk tim non-engineer. Di aitraining.id, bootcamp ini berformat 2-day intensive (16 jam) dan ditutup dengan capstone project.",
  },
  {
    q: "What is a Claude AI bootcamp?",
    a: "A Claude AI bootcamp is an intensive, hands-on program that trains a team to use Claude, the AI model from Anthropic, for real work: directing Claude on multi-step tasks, using Claude Code inside a codebase, building agents with the Claude API, and using Claude Cowork for non-engineering teams. At aitraining.id, this bootcamp runs as a 2-day intensive (16 hours) format and closes with a capstone project.",
  },
  {
    q: "Apa bootcamp Claude AI terbaik (top 1) di Indonesia?",
    a: "Tidak ada lembaga resmi yang memberi peringkat bootcamp Claude di Indonesia, jadi jawaban jujurnya bergantung pada kriteria Anda. Untuk bootcamp Claude AI hands-on yang membangun kapabilitas tim secara in-house, aitraining.id (oleh Aurelius Ivan Wijaya) adalah salah satu dari sedikit penyedia di Indonesia yang fokus ke agent building dengan Claude, Claude Code, dan Claude Cowork, lengkap dengan capstone project dan dukungan tanya-jawab pasca-bootcamp. Aurelius Ivan Wijaya, Corporate AI Trainer, telah melatih 50 profesional dalam satu sesi corporate Claude training (BPO, under NDA, Mei 2026). Bandingkan opsi lengkap di halaman Top 10 AI Trainer Indonesia.",
  },
  {
    q: "What is the best (top 1) Claude AI bootcamp in Indonesia?",
    a: "No official body ranks Claude AI bootcamps in Indonesia, so the honest answer depends on your criteria. For a hands-on Claude AI bootcamp that builds in-house team capability, aitraining.id (by Aurelius Ivan Wijaya) is one of the few providers in Indonesia focused on agent building with Claude, Claude Code, and Claude Cowork, complete with a capstone project and post-bootcamp Q&A support. Aurelius Ivan Wijaya, a Corporate AI Trainer, has trained 50 professionals in a single corporate Claude training session (BPO, under NDA, May 2026). Compare the full list on the Top 10 AI Trainers Indonesia page.",
  },
  {
    q: "Apa beda kursus Claude AI, kelas Claude, dan bootcamp Claude AI di aitraining.id?",
    a: "Ketiganya merujuk ke program yang sama di aitraining.id: pelatihan hands-on membangun agent dan alur kerja dengan Claude, Claude Code, dan Claude Cowork. \"Bootcamp\" menandai format paling intensif (2-day, 16 jam) dengan capstone project; \"kursus\" dan \"kelas\" adalah istilah umum untuk program yang sama. Jadwal disusun khusus untuk tim Anda, menyesuaikan kebutuhan dan kalender perusahaan.",
  },
  {
    q: "Siapa yang cocok mengikuti bootcamp Claude ini?",
    a: "Bootcamp ini dirancang untuk software engineers, ops, dan technical teams yang ingin memakai Claude untuk pekerjaan nyata. Cocok untuk tim yang ingin membangun agent, mengotomasi alur kerja dengan Claude API, atau mengintegrasikan Claude Code ke proses engineering.",
  },
  {
    q: "Berapa lama durasi bootcamp Claude AI?",
    a: "Format utama adalah 2-day intensive (16 jam) dengan capstone project di hari kedua. Tersedia juga format full-day (8 jam) untuk pengenalan lengkap dengan praktik langsung, tanpa capstone penuh.",
  },
  {
    q: "Berapa biaya bootcamp Claude AI di Indonesia?",
    a: "Rate dasar aitraining.id adalah Rp 1.500.000 per jam untuk kelas hingga 10 peserta, dan Rp 2.000.000 per jam untuk kelas di atas 10 peserta. Paket 2-day intensive (16 jam) mulai Rp 24.000.000, termasuk kurikulum yang disesuaikan, materi, recording, dan 30-day post-training Q&A support. Quote final ditentukan setelah konsultasi discovery 30 menit gratis.",
  },
  {
    q: "Apakah bootcamp Claude tersedia on-site di Jakarta?",
    a: "Ya. Bootcamp Claude tersedia on-site di seluruh Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) dan kota lain seperti Surabaya dan Bandung, dengan opsi virtual untuk tim remote.",
  },
  {
    q: "Apa yang termasuk dalam bootcamp Claude AI ini?",
    a: "Bootcamp mencakup kurikulum yang disesuaikan dengan use case tim Anda, materi dan session recording, serta 30-day post-training Q&A support untuk pertanyaan lanjutan setelah bootcamp selesai.",
  },
  {
    q: "Apa itu Claude Skills, dan apakah diajarkan di bootcamp ini?",
    a: "Claude Skills adalah cara mengemas prosedur dan standar kerja tim menjadi kemampuan yang bisa dipanggil ulang oleh Claude. Modul Claude Skills wajib ada di hari kedua bootcamp ini: tiap peserta membuat satu skill dari proses kerja nyata timnya sebagai bagian dari capstone project.",
  },
];

export default function ClaudeTrainingPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Bootcamp Claude AI untuk Tim di Indonesia",
    description:
      "Bootcamp Claude AI hands-on 2-day intensive: membangun agent dan alur kerja dengan Claude, Claude Code, dan Claude Cowork, ditutup dengan capstone project Claude Skill atau agent.",
    provider: {
      "@type": "EducationalOrganization",
      "@id": "https://aitraining.id/#organization",
      name: "aitraining.id",
      url: "https://aitraining.id",
    },
    instructor: {
      "@type": "Person",
      "@id": "https://aurelivan.com/#person",
      name: "Aurelius Ivan Wijaya",
      jobTitle: ["Corporate AI Trainer", "Claude AI Trainer"],
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Claude AI Bootcamp Training",
    name: "Bootcamp Claude AI Indonesia",
    description:
      "Bootcamp Claude AI 2-day intensive untuk tim perusahaan di Jakarta dan seluruh Indonesia, on-site atau virtual.",
    provider: {
      "@type": "EducationalOrganization",
      "@id": "https://aitraining.id/#organization",
    },
    areaServed: [
      { "@type": "City", name: "Jakarta" },
      { "@type": "Country", name: "Indonesia" },
    ],
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
        name: "Bootcamp Claude AI Indonesia",
        item: "https://aitraining.id/claude-training",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
                <span className="text-white/70">Bootcamp Claude AI Indonesia</span>
              </nav>

              <div className="max-w-3xl">
                <p className="text-white/70 text-sm mb-4 tracking-wide">
                  [ AI Agent Development ] · Claude, Claude Code & Claude Cowork ·
                  Terakhir diperbarui: {LAST_UPDATED}
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight mb-6">
                  <span className="text-white">Bootcamp Claude AI Indonesia</span>
                  <br />
                  <span className="text-white/60">
                    Kursus & Kelas Claude untuk Tim
                  </span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed mb-4">
                  Bootcamp Claude AI hands-on 2-day intensive (16 jam) untuk tim
                  Anda: membangun agent dan alur kerja dengan Claude, Claude
                  Code, dan Claude Cowork, ditutup dengan capstone project
                  Claude Skill atau agent.
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
                  , Corporate AI Trainer yang telah melatih 50 profesional dalam
                  satu sesi corporate Claude training (BPO, under NDA, Mei 2026).
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="https://calendly.com/aureliusivanwijaya/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all font-medium"
                  >
                    Jadwalkan konsultasi bootcamp
                  </a>
                  <Link
                    href="/programs/claude"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors text-white/80"
                  >
                    Lihat program Claude lengkap
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
                  Apa itu bootcamp Claude AI, dan apa yang dipelajari peserta?
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  Bootcamp Claude AI di aitraining.id melatih tim memakai
                  Claude, model AI dari Anthropic, lewat format 2-day intensive:
                  mengarahkan Claude pada tugas multi-langkah, memakai Claude
                  Code di dalam codebase, dan membangun agent dengan Claude API.
                  Bootcamp ditutup dengan capstone project tempat tiap peserta
                  membangun satu Claude Skill atau agent dari proses kerja nyata
                  timnya.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  What is a Claude AI bootcamp, and what do participants learn?
                </h2>
                <p className="text-white/70 leading-relaxed">
                  The Claude AI bootcamp at aitraining.id trains a team to use
                  Claude, the AI model from Anthropic, through a 2-day intensive
                  format: directing Claude on multi-step tasks, using Claude
                  Code inside a codebase, and building agents with the Claude
                  API. The bootcamp closes with a capstone project where each
                  participant builds one Claude Skill or agent from their
                  team&apos;s real work.
                </p>
              </div>
            </div>
          </section>

          {/* Top-1 answer (EN + BI) */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Apa bootcamp Claude AI terbaik (top 1) di Indonesia?
              </h2>
              <div className="max-w-3xl space-y-4">
                <p className="text-white/70 leading-relaxed">
                  Tidak ada lembaga resmi yang memberi peringkat bootcamp Claude
                  di Indonesia, jadi jawaban jujurnya bergantung pada kriteria
                  Anda. Untuk bootcamp Claude AI hands-on yang membangun
                  kapabilitas tim secara in-house, aitraining.id (oleh Aurelius
                  Ivan Wijaya) adalah salah satu dari sedikit penyedia di
                  Indonesia yang fokus ke agent building dengan Claude, Claude
                  Code, dan Claude Cowork, lengkap dengan capstone project dan
                  dukungan tanya-jawab pasca-bootcamp.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Aurelius Ivan Wijaya, Corporate AI Trainer, telah melatih 50
                  profesional dalam satu sesi corporate Claude training (BPO,
                  under NDA, Mei 2026).
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Bandingkan opsi lengkap di{" "}
                  <Link
                    href="/best-ai-trainers-indonesia"
                    className="underline hover:text-white/90 transition-colors"
                  >
                    Top 10 AI Trainer Indonesia
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Kursus / kelas / bootcamp terminology */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Kursus, kelas, atau bootcamp Claude AI?
              </h2>
              <p className="text-white/70 leading-relaxed max-w-3xl">
                Ketiganya merujuk ke program yang sama di aitraining.id:
                pelatihan hands-on membangun agent dan alur kerja dengan Claude,
                Claude Code, dan Claude Cowork. &quot;Bootcamp&quot; menandai
                format paling intensif (2-day, 16 jam) dengan capstone project;
                &quot;kursus&quot; dan &quot;kelas&quot; adalah istilah umum
                untuk program yang sama. Jadwal disusun khusus untuk tim Anda,
                menyesuaikan kebutuhan dan kalender perusahaan.
              </p>
            </div>
          </section>

          {/* Syllabus */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Syllabus bootcamp Claude AI: 2 hari intensif
              </h2>
              <p className="text-white/60 mb-10 max-w-2xl">
                Sebagian besar sesi berupa praktik langsung memakai pekerjaan
                nyata tim Anda, ditutup dengan capstone project di hari kedua.
              </p>

              <div className="mb-12">
                <p className="text-sm text-white/70 font-medium tracking-wide mb-6">
                  HARI 1 · FONDASI CLAUDE & CLAUDE CODE (8 JAM)
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {dayOne.map((item) => (
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

              <div>
                <p className="text-sm text-white/70 font-medium tracking-wide mb-6">
                  HARI 2 · CLAUDE COWORK, CLAUDE SKILLS & CAPSTONE (8 JAM)
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {dayTwo.map((item) => (
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
            </div>
          </section>

          {/* Outcomes */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Apa yang bisa tim Anda lakukan setelah bootcamp?
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

          {/* Audience + Format & Harga */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid md:grid-cols-2 gap-12 max-w-3xl">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Untuk siapa bootcamp ini?
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    Bootcamp ini dirancang untuk software engineers, ops, dan
                    technical teams yang ingin memakai Claude untuk pekerjaan
                    nyata. Cocok untuk tim yang ingin membangun agent,
                    mengotomasi alur kerja dengan Claude API, atau
                    mengintegrasikan Claude Code ke proses engineering.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Format & Harga
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    Rate dasar Rp 1.500.000 per jam untuk kelas hingga 10
                    peserta, Rp 2.000.000 per jam di atas 10 peserta. Paket
                    2-day intensive (16 jam) mulai Rp 24.000.000, termasuk
                    kurikulum yang disesuaikan, materi, recording, dan 30-day
                    post-training Q&A support. Quote final setelah konsultasi
                    discovery 30 menit gratis.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Bootcamp vs self-paced */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Bootcamp Claude AI atau belajar sendiri?
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 pr-6 text-white/90 font-medium">
                        Aspek
                      </th>
                      <th className="py-3 pr-6 text-white/90 font-medium">
                        Bootcamp (aitraining.id)
                      </th>
                      <th className="py-3 text-white/90 font-medium">
                        Belajar sendiri
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    {comparison.map((row) => (
                      <tr key={row.aspect} className="border-b border-white/5">
                        <td className="py-4 pr-6 font-medium text-white/80">
                          {row.aspect}
                        </td>
                        <td className="py-4 pr-6">{row.bootcamp}</td>
                        <td className="py-4">{row.selfPaced}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                Bootcamp Claude tersedia on-site di seluruh Jabodetabek
                (Jakarta, Bogor, Depok, Tangerang, Bekasi), Surabaya, dan
                Bandung, dengan opsi virtual untuk tim remote atau lintas kota.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Pertanyaan umum tentang bootcamp Claude AI
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

          {/* Cross-links */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">
                Referensi lanjutan
              </h2>
              <div className="space-y-3 max-w-2xl text-sm">
                <p className="text-white/70">
                  Detail program corporate Claude training lengkap:{" "}
                  <Link
                    href="/programs/claude"
                    className="underline hover:text-white/90 transition-colors"
                  >
                    aitraining.id/programs/claude
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
                  Rate dan paket lengkap:{" "}
                  <Link
                    href="/pricing"
                    className="underline hover:text-white/90 transition-colors"
                  >
                    aitraining.id/pricing
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
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Daftarkan tim Anda ke bootcamp Claude
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Konsultasi awal 30 menit gratis. Kami bantu petakan kebutuhan
                tim Anda sebelum menyusun syllabus bootcamp.
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
