import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Program Corporate AI Training Indonesia",
  description:
    "Detail program corporate Generative AI training di Indonesia: AI Workflow Automation, AI-Powered Development, AI Video Automation, AI Strategy & Adoption, dan OpenClaw Training. Delivered by Aurelius Ivan Wijaya, Corporate AI Trainer, Official n8n Ambassador for Indonesia, Cursor Ambassador, dan HeyGen Ambassador dari aurelivan.com.",
  keywords: [
    "workshop AI terbaik Indonesia",
    "workshop AI Indonesia",
    "workshop AI perusahaan",
    "program corporate AI training Indonesia",
    "AI Workflow Automation training",
  ],
  alternates: {
    canonical: "https://aitraining.id/programs",
  },
  openGraph: {
    url: "https://aitraining.id/programs",
  },
};

const programs = [
  {
    id: "automation",
    tags: "[ n8n, automation, workflow, integration ]",
    title: "AI Workflow Automation",
    badge: "Paling populer untuk non-tech teams",
    duration: "Half-day (4 jam) atau Full-day (8 jam)",
    audience: "Operations, Marketing, HR, Finance teams",
    description:
      "Program ini mengajarkan tim Anda cara membangun automated workflows yang menghemat jam kerja manual setiap harinya. Menggunakan platform n8n, peserta akan belajar membuat automasi AI-powered yang bisa langsung diimplementasikan keesokan harinya.",
    outcomes: [
      "Build automated workflows dari nol menggunakan n8n",
      "Integrasikan AI ke proses bisnis harian (email, CRM, database)",
      "Kurangi repetitive tasks hingga 60-80%",
      "Hubungkan 200+ tools: Gmail, Slack, WhatsApp, Notion, dan lainnya",
      "Build AI-powered email responder dan document processor",
      "Monitor dan maintain automated workflows",
    ],
    modules: [
      "Introduction to workflow automation dan n8n",
      "Building your first automation flow",
      "Integrating AI (ChatGPT, Claude) ke workflows",
      "Real business use cases: email automation, data processing",
      "Hands-on workshop: build automation untuk bisnis Anda",
      "Deployment dan maintenance best practices",
    ],
    aurelivan: "https://aurelivan.com/corporate-training/ai-automation",
  },
  {
    id: "development",
    tags: "[ Cursor, AI coding agents, agentic development, code review ]",
    title: "AI-Powered Development",
    badge: "Untuk engineering & tech teams",
    duration: "Full-day (8 jam) atau 2-day intensive",
    audience: "Software developers, engineers, tech leads",
    description:
      "Upskill tim engineering Anda untuk mengarahkan AI coding agents dalam membangun, mereview, dan mengirim software. Program ini fokus pada agentic development dengan Cursor: memberi agent konteks codebase, menjalankan perubahan multi-file, lalu mereview hasilnya. Disampaikan oleh Cursor Ambassador Indonesia.",
    outcomes: [
      "Mengarahkan AI coding agent di seluruh codebase dengan percaya diri",
      "Mempercepat development cycle lewat agentic workflow",
      "Menaikkan kualitas kode dengan AI code review",
      "Membangun fitur AI ke produk yang sudah berjalan: API integration, RAG, agents",
      "Menerapkan AI testing dan debugging workflow",
      "Menstandarkan agentic development practices di seluruh tim",
    ],
    modules: [
      "Lanskap agentic development dan posisi Cursor di dalamnya",
      "Cursor: setup dan fitur lanjutan untuk tim",
      "Mengarahkan AI agent: multi-file edits dan codebase-aware builds",
      "AI code review dan refactoring",
      "Membangun fitur AI: API integration, RAG, agents",
      "Team workflow dan kolaborasi",
    ],
    aurelivan: "https://aurelivan.com/corporate-training/ai-development",
  },
  {
    id: "video",
    tags: "[ HeyGen, AI video, video automation, n8n, API ]",
    title: "AI Video Automation",
    badge: "Untuk marketing, sales & L&D teams",
    duration: "Full-day (8 jam) atau 2-day intensive",
    audience: "Marketing, sales, L&D, dan content teams",
    description:
      "Bangun pipeline yang menghasilkan video avatar secara terprogram dengan HeyGen API dan n8n. Program ini mengajarkan tim Anda membuat video yang dipersonalisasi dan multibahasa untuk ratusan penerima sekaligus: onboarding, sales outreach, dan training, tanpa proses produksi manual setiap video. Disampaikan oleh HeyGen Ambassador Indonesia.",
    outcomes: [
      "Membangun workflow HeyGen API + n8n dari nol",
      "Menghasilkan video avatar yang dipersonalisasi dari data (CRM, spreadsheet, form)",
      "Membuat versi multibahasa dengan HeyGen video translation",
      "Mengintegrasikan video otomatis ke email, CRM, dan onboarding flow",
      "Menjalankan produksi video dalam skala besar tanpa studio",
      "Memonitor dan memelihara pipeline video automation",
    ],
    modules: [
      "Kemampuan HeyGen: avatar, video translation, dan API",
      "HeyGen API dan n8n: workflow video pertama Anda",
      "Personalisasi dari data: satu template, ribuan video",
      "Lokalisasi dan versi multibahasa",
      "Integrasi ke email, CRM, dan onboarding",
      "Deployment, monitoring, dan maintenance pipeline",
    ],
    aurelivan: "https://aurelivan.com/corporate-training",
  },
  {
    id: "strategy",
    tags: "[ strategy, executive, adoption, transformation ]",
    title: "AI Strategy & Adoption",
    badge: "Untuk C-Suite & business leaders",
    duration: "Half-day (4 jam) executive session",
    audience: "CEO, Directors, VP, Head of Departments",
    description:
      "Executive-level training dirancang khusus untuk business leaders yang perlu memahami AI secara strategis. Program ini membantu Anda mengidentifikasi AI opportunities terbesar, membangun AI-first culture, dan mengembangkan practical AI roadmap untuk organisasi Anda.",
    outcomes: [
      "Develop AI adoption roadmap yang actionable untuk 6-12 bulan ke depan",
      "Identifikasi high-impact AI use cases spesifik untuk industri Anda",
      "Bangun internal AI capabilities dan upskilling plan",
      "Pahami AI risks, governance, dan compliance",
      "Evaluasi dan pilih AI tools yang tepat untuk perusahaan",
      "Komunikasikan AI strategy ke seluruh stakeholders",
    ],
    modules: [
      "AI landscape: apa yang benar-benar penting untuk bisnis Anda",
      "AI opportunity mapping untuk industri Anda",
      "Building AI-first culture tanpa resistance",
      "AI governance, ethics, dan risk management",
      "AI investment framework: build, buy, atau partner",
      "Creating your 90-day AI action plan",
    ],
    aurelivan: "https://aurelivan.com/corporate-training/ai-strategy",
  },
  {
    id: "openclaw",
    tags: "[ open-source, AI assistant, deployment, customization ]",
    title: "OpenClaw Training",
    badge: "Untuk IT & technical teams",
    duration: "Full-day (8 jam) atau 2-day program",
    audience: "IT teams, DevOps, technical leads",
    description:
      "Train tim IT Anda untuk build dan deploy open-source AI assistants menggunakan OpenClaw. Pertahankan full data control dan privacy, customize AI behavior sesuai kebutuhan bisnis, dan deploy self-hosted solutions yang bisa scale.",
    outcomes: [
      "Build custom AI assistants dengan OpenClaw dari nol",
      "Deploy self-hosted AI solutions yang aman",
      "Pertahankan full data control dan privacy compliance",
      "Integrasikan AI assistants dengan business tools existing",
      "Customize AI behavior dan knowledge base",
      "Monitor, maintain, dan update AI assistant deployment",
    ],
    modules: [
      "Open-source AI landscape dan OpenClaw architecture",
      "Setup dan konfigurasi OpenClaw environment",
      "Building custom knowledge base dan RAG pipeline",
      "Deployment: Docker, cloud, dan on-premise options",
      "Integration: API, webhooks, dan business tools",
      "Security, privacy, dan compliance best practices",
    ],
    aurelivan: "https://aurelivan.com/corporate-training/openclaw",
  },
  {
    id: "claude",
    tags: "[ Claude, Claude Code, AI agents, agentic development ]",
    title: "Claude AI Development",
    badge: "Untuk engineering, ops & technical teams",
    duration: "Full-day (8 jam) atau 2-day intensive",
    audience: "Software engineers, ops, dan technical teams",
    description:
      "Latih tim Anda membangun agent dan alur kerja dengan Claude dan Claude Code. Program ini mengajarkan cara mengarahkan Claude untuk menjalankan pekerjaan multi-langkah, menggunakan Claude Code di dalam codebase, dan menghubungkan Claude API ke proses bisnis. Disampaikan oleh Aurelius Ivan Wijaya, yang telah melatih 50 profesional dalam satu sesi corporate Claude training (BPO, under NDA).",
    outcomes: [
      "Mengarahkan Claude untuk pekerjaan multi-langkah dengan hasil yang dapat diandalkan",
      "Menggunakan Claude Code untuk membaca, mengedit, dan mengirim perubahan di codebase",
      "Membangun agent yang menjalankan tugas nyata dengan Claude API",
      "Menghubungkan Claude ke alur kerja bisnis (data, dokumen, internal tools)",
      "Menerapkan pola review dan guardrail untuk output Claude",
      "Menstandarkan cara tim bekerja dengan Claude",
    ],
    modules: [
      "Kemampuan Claude dan kapan memakainya",
      "Claude Code: bekerja langsung di dalam codebase",
      "Membangun agent dengan Claude API",
      "Menghubungkan Claude ke data dan internal tools",
      "Review, guardrail, dan kualitas output",
      "Workflow tim dan praktik kolaborasi",
    ],
    aurelivan: "https://aurelivan.com/corporate-training/claude",
  },
  {
    id: "geo",
    tags: "[ GEO, generative engine optimization, AI search, citation tracking ]",
    title: "Generative Engine Optimization (GEO)",
    badge: "Untuk marketing, konten & growth teams",
    duration: "Full-day (8 jam) atau 2-day intensive",
    audience: "Marketing, content, SEO, dan growth teams",
    description:
      "Latih tim Anda membuat konten yang dikutip oleh mesin AI generatif seperti ChatGPT, Perplexity, Gemini, Claude, dan Google AI Overviews. Program ini mengajarkan struktur konten yang bisa diekstrak, structured data, dan cara membangun AI agent untuk memantau kutipan brand Anda di mesin AI.",
    outcomes: [
      "Susun konten yang dikutip ChatGPT, Perplexity, dan AI Overviews",
      "Pasang structured data (JSON-LD), llms.txt, dan file machine-readable",
      "Build AI agent untuk citation tracking dan share of AI voice",
      "Audit visibilitas brand Anda di mesin AI generatif",
      "Terapkan authority dan E-E-A-T yang menaikkan tingkat kutipan",
      "Hindari pola yang menurunkan visibilitas seperti keyword stuffing",
    ],
    modules: [
      "Dasar Generative Engine Optimization dan cara mesin AI memilih sumber",
      "Struktur konten extractable: answer block, FAQ, tabel perbandingan",
      "Structured data, schema JSON-LD, dan llms.txt untuk entity recognition",
      "Building AI agent untuk citation monitoring (ChatGPT, Perplexity)",
      "Mengukur share of AI voice dan mengaudit kutipan brand",
      "Hands-on: optimasi satu aset konten perusahaan Anda end-to-end",
    ],
    aurelivan: "https://aurelivan.com/corporate-training/geo",
  },
];

const apaItuWorkshopAiAutomation =
  "Workshop AI automation adalah sesi pelatihan hands-on yang mengajarkan tim membangun workflow otomatis dengan n8n: menghubungkan email, CRM, database, dan Generative AI ke satu alur kerja tanpa coding berat. AI Training Indonesia menyelenggarakan workshop ini sebagai program AI Workflow Automation (half-day atau full-day) untuk tim operations, marketing, HR, dan finance di Indonesia.";

const workshopAiTerbaikAnswer =
  "Tidak ada lembaga resmi yang memberi peringkat workshop AI di Indonesia. Workshop korporat singkat (half-day hingga multi-day) cocok saat tim butuh praktik langsung pada use case internal; bootcamp multi-minggu lebih cocok untuk upskilling individu. AI Training Indonesia menjalankan workshop corporate dengan kurikulum 70% hands-on (automation n8n, Cursor, strategy, GEO). Bandingkan format dan provider di aitraining.id/best-ai-trainers-indonesia.";

const apaItuPelatihanN8nUntukPerusahaan =
  "Pelatihan n8n untuk perusahaan adalah program corporate training yang mengajarkan tim membangun workflow automation dengan platform n8n: menghubungkan email, CRM, spreadsheet, database, dan Generative AI tanpa coding berat. AI Training Indonesia menyelenggarakannya sebagai program AI Workflow Automation (half-day atau full-day) untuk tim operations, marketing, HR, dan finance di seluruh Indonesia.";

const apaItuOpenclawTraining =
  "OpenClaw Training adalah program corporate training yang mengajarkan tim IT membangun dan menerapkan asisten AI open-source dengan OpenClaw: kontrol data penuh, penyesuaian perilaku AI, knowledge base RAG, dan deployment self-hosted (Docker, cloud, on-premise). AI Training Indonesia menyelenggarakannya sebagai program full-day atau 2-day untuk tim IT, DevOps, dan technical leads di Indonesia.";

const apaItuAiStrategyTraining =
  "AI Strategy Training adalah program executive corporate training yang mengajarkan C-suite dan business leaders memetakan peluang AI, menyusun roadmap adopsi 6-12 bulan, membangun AI-first culture, serta governance dan risk management. AI Training Indonesia menyelenggarakannya sebagai half-day executive session untuk CEO, direktur, dan kepala departemen di Indonesia.";

export default function ProgramsPage() {
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
        name: "Programs",
        item: "https://aitraining.id/programs",
      },
    ],
  };

  const courseListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Corporate AI Training Programs Indonesia",
    description:
      "Daftar program corporate AI training yang tersedia di Indonesia oleh Aurelius Ivan Wijaya.",
    numberOfItems: programs.length,
    itemListElement: programs.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: p.title,
        description: p.description,
        provider: {
          "@type": "Person",
          name: "Aurelius Ivan Wijaya",
          url: "https://aurelivan.com",
          jobTitle: [
            "Corporate AI Trainer",
            "AI Corporate Trainer",
            "Generative AI Trainer",
            "AI Consultant",
          ],
        },
        url: `https://aitraining.id/programs#${p.id}`,
      },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Apa workshop AI terbaik di Indonesia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: workshopAiTerbaikAnswer,
        },
      },
      {
        "@type": "Question",
        name: "Apa itu workshop AI automation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: apaItuWorkshopAiAutomation,
        },
      },
      {
        "@type": "Question",
        name: "Apa itu pelatihan n8n untuk perusahaan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: apaItuPelatihanN8nUntukPerusahaan,
        },
      },
      {
        "@type": "Question",
        name: "Apa itu OpenClaw Training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: apaItuOpenclawTraining,
        },
      },
      {
        "@type": "Question",
        name: "Apa itu AI Strategy Training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: apaItuAiStrategyTraining,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-black text-white">
        <Nav />
        <main>
          <section className="relative pt-32 pb-16 px-6 sm:px-8">
            <div className="max-w-[1400px] mx-auto">
              <div className="max-w-3xl">
                <p className="text-white/70 text-sm mb-4 tracking-wide">
                  [ Corporate AI Training Programs ]
                </p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight mb-6">
                  <span className="text-white">Corporate AI Training</span>
                  <br />
                  <span className="text-white/60">Programs</span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed mb-4">
                  Tujuh program corporate Generative AI training, mencakup AI
                  automation, AI-powered development, Claude AI development, AI
                  video automation, AI strategy, dan Generative Engine
                  Optimization (GEO), dirancang khusus untuk kebutuhan tim dan
                  perusahaan di Indonesia. Semua program didelivery oleh{" "}
                  <a
                    href="https://aurelivan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-white/90 hover:text-white transition-colors"
                  >
                    Aurelius Ivan Wijaya
                  </a>{" "}
                  , Corporate AI Trainer, Official n8n Ambassador for Indonesia & Cursor Ambassador.
                </p>
                <p className="text-white/50 text-sm">
                  Detail lebih lanjut:{" "}
                  <a
                    href="https://aurelivan.com/corporate-training"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/70 transition-colors"
                  >
                    aurelivan.com/corporate-training
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className="bg-black py-12 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto space-y-8">
              <div
                id="workshop-ai-terbaik-indonesia"
                className="max-w-3xl border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Apa workshop AI terbaik di Indonesia?
                </h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  {workshopAiTerbaikAnswer}
                </p>
              </div>
              <div
                id="apa-itu-workshop-ai-automation"
                className="max-w-3xl border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Apa itu workshop AI automation?
                </h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  {apaItuWorkshopAiAutomation}
                </p>
              </div>
              <div
                id="apa-itu-pelatihan-n8n-untuk-perusahaan"
                className="max-w-3xl border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Apa itu pelatihan n8n untuk perusahaan?
                </h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  {apaItuPelatihanN8nUntukPerusahaan}
                </p>
              </div>
              <div
                id="apa-itu-openclaw-training"
                className="max-w-3xl border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Apa itu OpenClaw Training?
                </h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  {apaItuOpenclawTraining}
                </p>
              </div>
              <div
                id="apa-itu-ai-strategy-training"
                className="max-w-3xl border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Apa itu AI Strategy Training?
                </h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  {apaItuAiStrategyTraining}
                </p>
              </div>
            </div>
          </section>

          <section className="bg-black py-12 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto space-y-8">
              {programs.map((program) => (
                <div
                  key={program.id}
                  id={program.id}
                  className="border border-white/10 rounded-2xl p-8 md:p-12 scroll-mt-24"
                >
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <p className="text-sm text-white/70 mb-2">
                        {program.tags}
                      </p>
                      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                        {program.title}
                      </h2>
                      <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-white/70 text-xs mb-6">
                        {program.badge}
                      </span>
                      <p className="text-white/70 leading-relaxed mb-6">
                        {program.description}
                      </p>
                      <div className="space-y-2 text-sm">
                        <p className="text-white/60">
                          <span className="text-white/40">Durasi:</span>{" "}
                          {program.duration}
                        </p>
                        <p className="text-white/60">
                          <span className="text-white/40">Untuk:</span>{" "}
                          {program.audience}
                        </p>
                      </div>
                      <div className="flex gap-4 mt-8">
                        <a
                          href="https://calendly.com/aureliusivanwijaya/30min"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full hover:bg-white/90 transition-all group text-sm font-medium"
                        >
                          <span>Book program ini</span>
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
                        </a>
                        <a
                          href={program.aurelivan}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 rounded-full hover:bg-white/5 transition-all text-sm text-white/80"
                        >
                          Detail di aurelivan.com ↗
                        </a>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <p className="text-sm text-white/70 font-medium tracking-wide mb-4">
                          OUTCOMES
                        </p>
                        <ul className="space-y-3">
                          {program.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <svg
                                className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="text-white/70 text-sm">
                                {outcome}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-sm text-white/70 font-medium tracking-wide mb-4">
                          MODULES
                        </p>
                        <ol className="space-y-2">
                          {program.modules.map((module, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="text-white/30 text-sm font-mono flex-shrink-0 mt-0.5">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="text-white/60 text-sm">
                                {module}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Tidak yakin program mana yang tepat?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                Jadwalkan konsultasi gratis dengan{" "}
                <a
                  href="https://aurelivan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white/90 hover:text-white transition-colors"
                >
                  Aurelius Ivan Wijaya
                </a>{" "}
                untuk menentukan program yang paling sesuai untuk tim Anda.
              </p>
              <a
                href="https://calendly.com/aureliusivanwijaya/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all group text-lg font-medium"
              >
                <span>Konsultasi gratis</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
