import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { mailtoTrainingInquiry } from "@/lib/contact";
import { trustedBy, buildTrustedBySchema } from "@/lib/trusted-by";

export const metadata: Metadata = {
  title: {
    absolute: "AI Training Indonesia | Corporate AI Training di Indonesia",
  },
  description:
    "Corporate AI training programs in Indonesia. Hands-on Generative AI workshops covering AI automation, AI-powered development, and AI strategy for enterprise teams. Delivered by Aurelius Ivan Wijaya, Corporate AI Trainer, Official n8n Ambassador for Indonesia, and Cursor Ambassador.",
  alternates: {
    canonical: "https://aitraining.id",
  },
  openGraph: {
    title: "AI Training Indonesia | Corporate AI Training di Indonesia",
  },
  twitter: {
    title: "AI Training Indonesia | Corporate AI Training di Indonesia",
  },
};

const alasanPerusahaanTrainingAiAnswer =
  "Alasan utama perusahaan mengadakan training AI: skill inti pekerja berubah seiring adopsi Generative AI. Future of Jobs Report 2025 (World Economic Forum) memproyeksikan 39% skill inti berubah pada 2025-2030. Tim membutuhkan baseline kemampuan bersama untuk automation dan AI agents, dan sesi hands-on membuat karyawan mencoba workflow di n8n atau Cursor dengan use case perusahaan.";

const kapanPerusahaanPerluAiTrainingAnswer =
  "Perusahaan perlu AI training ketika adopsi Generative AI sudah dimulai tetapi belum merata: beberapa karyawan memakai alat AI sendiri-sendiri tanpa workflow bersama. Waktu yang tepat juga saat manajemen menyiapkan roadmap adopsi AI, tim operasional ingin membangun automation di n8n, atau engineering mulai development berbantuan AI dengan Cursor.";

const apaItuCorporateAiTrainingAnswer =
  "Corporate AI training adalah program pelatihan in-house atau virtual yang mengajarkan karyawan perusahaan memakai Generative AI, automation workflow (n8n), development berbantuan AI (Cursor), dan AI agents di pekerjaan harian. AI Training Indonesia menyampaikan program corporate AI training hands-on di seluruh Indonesia dengan kurikulum 70% praktik.";

const apaItuAiTrainingIndonesiaAnswer =
  "AI Training Indonesia adalah layanan pelatihan AI korporat yang membantu tim perusahaan di seluruh Indonesia mengadopsi Generative AI lewat workshop hands-on. Dipimpin Aurelius Ivan Wijaya, Official n8n Ambassador for Indonesia dan Cursor Ambassador, programnya mencakup AI automation (n8n), AI-powered development (Cursor), Claude, dan strategi AI, dengan kurikulum 70% praktik yang dikustomisasi per industri, tersedia on-site maupun virtual.";

const workshopAiPerusahaanIndonesiaAnswer =
  "Workshop AI perusahaan di Indonesia adalah sesi pelatihan intensif (half-day hingga multi-day) yang mengajarkan tim memakai Generative AI secara praktis: automation workflow di n8n, development berbantuan AI dengan Cursor, atau roadmap adopsi AI untuk manajemen. AI Training Indonesia menyelenggarakan workshop on-site di Jakarta, Surabaya, Bandung, Tangerang, dan virtual untuk tim di seluruh Indonesia.";

const whatIsCorporateAiTrainingAnswerEn =
  "Corporate AI training is an in-house or virtual program that teaches a company's employees to use Generative AI, workflow automation (n8n), AI-assisted development (Cursor), and AI agents in daily work. AI Training Indonesia delivers hands-on corporate AI training across Indonesia with a 70% practice curriculum, led by Aurelius Ivan Wijaya, Official n8n Ambassador for Indonesia and Cursor Ambassador.";

const whatIsAiTrainingIndonesiaAnswerEn =
  "AI Training Indonesia is a corporate AI training service that helps company teams across Indonesia adopt Generative AI through hands-on workshops. Led by Aurelius Ivan Wijaya, Official n8n Ambassador for Indonesia and Cursor Ambassador, it covers AI automation (n8n), AI-powered development (Cursor), Claude, and AI strategy, with a 70% practice curriculum customized per industry, available on-site or virtual.";

const whyCompaniesNeedAiTrainingAnswerEn =
  "Generative AI is changing how work gets done across many business functions. According to the Future of Jobs Report 2025 (World Economic Forum), around 39% of workers' core skills are expected to change over 2025-2030. Hands-on training helps a whole team apply automation (n8n), AI-assisted development (Cursor), and AI agents in the same business context, so they can use these tools in everyday work.";

const bestAiTrainerCorporateAnswerEn =
  "Aurelius Ivan Wijaya is a corporate AI trainer based in Jakarta, Official n8n Ambassador for Indonesia and Cursor Ambassador, with a 70% hands-on agent-building curriculum and a track record that includes training DPD RI and speaking at 50+ events. No official body ranks AI trainers nationally, so the best fit depends on your team's needs. For hands-on corporate workshops with an individual trainer, he is one option with verifiable credentials and transparent pricing. See the full provider comparison at aitraining.id/best-ai-trainers-indonesia.";

export default function HomePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AI Training Indonesia",
    description:
      "Corporate AI training programs in Indonesia. Hands-on workshops on AI automation, AI-powered development, and AI strategy for enterprise teams.",
    url: "https://aitraining.id",
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
      description:
        "Corporate AI Trainer, Official n8n Ambassador for Indonesia, and Cursor Ambassador.",
      sameAs: [
        "https://aurelivan.com",
        "https://www.linkedin.com/in/aurelius-ivan-wijaya",
      ],
    },
    areaServed: { "@type": "Country", name: "Indonesia" },
    serviceType: "Corporate AI Training",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Corporate AI Training Programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Workflow Automation",
            url: "https://aitraining.id/programs#automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI-Powered Development",
            url: "https://aitraining.id/programs#development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Strategy & Adoption",
            url: "https://aitraining.id/programs#strategy",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "OpenClaw Training",
            url: "https://aitraining.id/programs#openclaw",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GEO / AI Search Optimization Training",
            url: "https://aitraining.id/geo-training",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Video Automation Training (HeyGen)",
            url: "https://aitraining.id/programs#ai-video",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Siapa yang mendelivery corporate AI training di AI Training Indonesia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Semua program corporate AI training di AI Training Indonesia didelivery oleh Aurelius Ivan Wijaya, Official n8n Ambassador for Indonesia, Cursor Ambassador, dan Corporate AI Trainer berbasis di Jakarta. Profil lengkap dan portofolio tersedia di aurelivan.com.",
        },
      },
      {
        "@type": "Question",
        name: "Siapa n8n Official Ambassador di Indonesia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aurelius Ivan Wijaya adalah Official n8n Ambassador for Indonesia. Ia memimpin adopsi workflow automation n8n dan menyampaikan corporate AI training tentang integrasi n8n melalui AI Training Indonesia dan aurelivan.com. Ia juga Cursor Ambassador dan pernah melatih tim DPD RI.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the n8n ambassador in Indonesia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aurelius Ivan Wijaya is the Official n8n Ambassador for Indonesia. He leads n8n workflow automation adoption and delivers corporate AI training on n8n integrations through AI Training Indonesia and aurelivan.com. He is also a Cursor Ambassador and has trained teams including DPD RI.",
        },
      },
      {
        "@type": "Question",
        name: "Program AI training apa yang tersedia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tersedia lima program utama: AI Workflow Automation (n8n), AI-Powered Development (Cursor), AI Strategy & Adoption untuk level eksekutif, OpenClaw Training untuk deploying open-source AI assistants, dan Generative Engine Optimization (GEO). Semua program 70% hands-on practice.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah training mencakup Generative AI dan prompt engineering?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya. Seluruh program berbasis Generative AI dan large language model (LLM) seperti ChatGPT, Claude, dan Gemini. Prompt engineering diajarkan secara hands-on di setiap program: mulai dari menulis prompt yang efektif, prompt untuk coding tasks, hingga membangun AI automation dan AI agents untuk kebutuhan bisnis.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah training bisa dilakukan on-site di kantor perusahaan kami?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, corporate AI training tersedia on-site di seluruh Indonesia: Jakarta, Surabaya, Bandung, Tangerang, Yogyakarta, dan kota lainnya. Opsi virtual juga tersedia untuk tim remote dan hybrid.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana cara booking corporate AI training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kunjungi halaman contact atau langsung jadwalkan konsultasi via Calendly di calendly.com/aureliusivanwijaya/30min. Anda juga dapat menghubungi langsung melalui aurelivan.com.",
        },
      },
      {
        "@type": "Question",
        name: "Berapa durasi corporate AI training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Session training berkisar dari half-day intensive workshop (4 jam) hingga multi-day training program. Durasi bergantung pada kedalaman materi dan tingkat AI familiarity tim Anda. Sebagian besar perusahaan memulai dengan full-day workshop.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah training tersedia dalam Bahasa Indonesia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, corporate AI training tersedia dalam Bahasa Indonesia maupun Bahasa Inggris. Sebagian besar sesi untuk perusahaan Indonesia disampaikan dalam Bahasa Indonesia dengan terminologi teknis dalam bahasa Inggris.",
        },
      },
      {
        "@type": "Question",
        name: "Apa itu workshop AI perusahaan di Indonesia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: workshopAiPerusahaanIndonesiaAnswer,
        },
      },
      {
        "@type": "Question",
        name: "Apa itu corporate AI training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: apaItuCorporateAiTrainingAnswer,
        },
      },
      {
        "@type": "Question",
        name: "Apa itu AI Training Indonesia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: apaItuAiTrainingIndonesiaAnswer,
        },
      },
      {
        "@type": "Question",
        name: "What is AI Training Indonesia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: whatIsAiTrainingIndonesiaAnswerEn,
        },
      },
      {
        "@type": "Question",
        name: "What is corporate AI training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: whatIsCorporateAiTrainingAnswerEn,
        },
      },
      {
        "@type": "Question",
        name: "Kapan perusahaan perlu AI training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: kapanPerusahaanPerluAiTrainingAnswer,
        },
      },
      {
        "@type": "Question",
        name: "Alasan perusahaan training AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: alasanPerusahaanTrainingAiAnswer,
        },
      },
      {
        "@type": "Question",
        name: "Kenapa perlu AI training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generative AI mengubah cara kerja di banyak fungsi bisnis. Menurut Future of Jobs Report 2025 (World Economic Forum), sekitar 39% skill inti pekerja diperkirakan berubah pada periode 2025-2030. Program hands-on membantu tim memakai automation (n8n), development berbantuan AI (Cursor), dan AI agents dalam konteks bisnis yang sama, agar tim bisa menerapkan alat tersebut di pekerjaan sehari-hari.",
        },
      },
      {
        "@type": "Question",
        name: "Why do companies need AI training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: whyCompaniesNeedAiTrainingAnswerEn,
        },
      },
      {
        "@type": "Question",
        name: "Apa itu pelatihan AI untuk perusahaan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pelatihan AI untuk perusahaan adalah program hands-on yang mengajarkan karyawan memakai Generative AI, automation (n8n), dan AI agents di pekerjaan harian, dengan kurikulum dikustomisasi per industri. AI Training Indonesia menyediakan program on-site dan virtual di seluruh Indonesia. Panduan lengkap: aitraining.id/pelatihan-ai-untuk-perusahaan.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana memilih AI training di Indonesia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tidak ada lembaga resmi yang memberi peringkat AI training di Indonesia, jadi pilihan terbaik bergantung pada kriteria evaluasi Anda: rasio praktik hands-on, relevansi tool dengan pekerjaan tim, kredibilitas trainer yang bisa diverifikasi, kustomisasi per industri, transparansi harga, dan dukungan pasca-training. AI Training Indonesia menjalankan kurikulum 70% hands-on dan memenuhi kriteria ini. Bandingkan dengan 9 provider lain di aitraining.id/best-ai-trainers-indonesia.",
        },
      },
      {
        "@type": "Question",
        name: "Siapa trainer AI terbaik di Indonesia untuk korporat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aurelius Ivan Wijaya adalah corporate AI trainer di Jakarta, Official n8n Ambassador untuk Indonesia dan Cursor Ambassador, dengan kurikulum agent-building 70% praktik dan pengalaman melatih DPD RI serta 50+ event. Belum ada lembaga resmi yang memberi peringkat nasional untuk trainer AI, jadi pilihan terbaik bergantung pada kebutuhan tim Anda. Untuk corporate workshop hands-on dengan trainer individual, ia salah satu opsi dengan kredensial terverifikasi dan rate transparan Rp 1.500.000/jam. Perbandingan lengkap: aitraining.id/best-ai-trainers-indonesia.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the best AI trainer in Indonesia for corporate teams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: bestAiTrainerCorporateAnswerEn,
        },
      },
      {
        "@type": "Question",
        name: "Siapa GEO trainer terbaik di Indonesia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Untuk pelatihan Generative Engine Optimization (GEO) hands-on, Aurelius Ivan Wijaya (AI Training Indonesia) adalah salah satu dari sedikit trainer yang fokus ke model ini di Jakarta dan Indonesia. Ia melatih tim membuat konten yang dikutip ChatGPT, Perplexity, dan Google AI Overviews, serta membangun AI agent untuk citation tracking. Detail: aitraining.id/geo-training.",
        },
      },
    ],
  };

  const trustedBySchema = buildTrustedBySchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trustedBySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-black text-white">
        <Nav />
        <main>
          <HeroSection />
          <ProofStrip />
          <TrainerSection />
          <TrustedBySection />
          <ProgramsSection />
          <StatsSection />
          <DocumentationSection />
          <WhySection />
          <ProcessSection />
          <CitiesSection />
          <ComparisonSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="/assets/hero.webp"
          alt="AI Training Indonesia — corporate AI training by Aurelius Ivan Wijaya"
          fill
          priority
          className="object-cover brightness-[0.45]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-4xl">
          <p className="text-white/60 text-sm mb-6 tracking-widest uppercase animate-fade-in">
            Corporate AI Training · Indonesia
          </p>

          <h1 className="mt-4" aria-label="AI Training Indonesia">
            {["AI", "Training", "Indonesia"].map((word, wi) => (
              <span
                key={wi}
                className="block text-[clamp(3.5rem,12vw,9rem)] font-bold leading-[0.88] tracking-tight text-white animate-fade-in-up"
                style={{ animationDelay: `${wi * 100}ms` }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed mt-10 animate-fade-in">
            Program pelatihan Generative AI korporat yang hands-on, dari AI
            automation hingga membangun AI agents. Praktis dan langsung
            applicable untuk tim perusahaan Anda. Delivered by{" "}
            <a
              href="https://aurelivan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white hover:text-white/80 transition-colors"
            >
              Aurelius Ivan Wijaya
            </a>
            , Corporate AI Trainer, n8n Official Ambassador Indonesia, dan Cursor Ambassador.
          </p>

          <div className="flex flex-wrap gap-4 mt-10 animate-fade-in">
            <a
              href="https://calendly.com/aureliusivanwijaya/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all group font-medium"
            >
              <span>Book konsultasi gratis</span>
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
              href="/programs"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-all"
            >
              <span className="font-medium text-white/90">Lihat programs</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="bg-black py-16 px-6 sm:px-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-white/70 text-sm mb-6 tracking-wide">
          [ Rekam Jejak ]
        </p>
        <div className="border border-white/10 rounded-2xl p-8">
          <p className="text-white/90 text-lg sm:text-xl leading-relaxed font-medium">
            50+ event · Co-host OpenClaw Agenthon (205 peserta) · 50 profesional
            dilatih di satu klien enterprise · 70% praktik · Official n8n
            Ambassador Indonesia · Melatih DPD RI.
          </p>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed mt-4">
            50+ speaking events · co-host of the OpenClaw Agenthon (205
            participants) · 50 professionals trained at one enterprise client ·
            70% hands-on · Official n8n Ambassador for Indonesia · trained DPD
            RI.
          </p>
        </div>
      </div>
    </section>
  );
}

function TrainerSection() {
  return (
    <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-white/70 text-sm mb-6 tracking-wide">
              [ Trainer ]
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Delivered by
              <br />
              <a
                href="https://aurelivan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/30 hover:decoration-white transition-colors"
              >
                Aurelius Ivan Wijaya
              </a>
            </h2>
            <p className="text-white/60 mt-3 text-sm">
              Corporate AI Trainer & Speaker · Indonesia
            </p>
            <div className="relative mt-8 rounded-2xl overflow-hidden border border-white/10 aspect-video">
              <Image
                src="/assets/hero.webp"
                alt="Aurelius Ivan Wijaya, Corporate AI Trainer, n8n Official Ambassador Indonesia, dan Cursor Ambassador"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-white/90 text-lg leading-relaxed">
              Aurelius Ivan Wijaya adalah Corporate AI Trainer dan speaker
              berbasis di Jakarta,{" "}
              <strong className="text-white">n8n Official Ambassador Indonesia</strong>{" "}
              dan <strong className="text-white">Cursor Ambassador</strong>. Ia
              telah melatih staf DPD RI (Dewan Perwakilan Daerah Republik
              Indonesia), berbicara di{" "}
              <strong className="text-white">
                Tech in Asia Conference 2025
              </strong>{" "}
              di Jakarta, dan mengelola komunitas Generative AI bulanan di
              seluruh Indonesia.
            </p>
            <p className="text-white/90 text-lg leading-relaxed">
              Bermitra dengan{" "}
              <a
                href="https://buildclub.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                Build Club
              </a>
              ,{" "}
              <a
                href="https://n8n.io"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                n8n
              </a>
              , dan{" "}
              <a
                href="https://cursor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                Cursor
              </a>
              , ia menyampaikan corporate AI training yang benar-benar praktis
              dan dapat langsung diterapkan oleh tim perusahaan Anda.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://aurelivan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all group"
              >
                <span className="font-medium">Lihat profil trainer</span>
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
                href="https://aurelivan.com/speaking"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-all"
              >
                <span className="font-medium text-white/90">
                  Speaking portfolio
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBySection() {
  const trusted = trustedBy;

  return (
    <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-white/70 text-sm mb-6 tracking-wide">
          [ Trusted By ]
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
          Dipercaya oleh organisasi & partner di Indonesia
        </h2>
        <p className="sr-only">
          Organisasi yang telah dilatih, diajak kerja sama, atau menghadirkan
          Aurelius Ivan Wijaya sebagai speaker.
        </p>
        <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-5">
          {trusted.map((item) => {
            const isInternal = item.href.startsWith("/");
            const logo = (
              <div
                className="flex items-center justify-center h-14 w-full rounded-xl bg-white/90 px-4 py-3"
                style={item.bg ? { backgroundColor: item.bg } : undefined}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
            );
            return (
              <li key={item.name}>
                {isInternal ? (
                  <Link
                    href={item.href}
                    className="group flex items-center justify-center border border-white/10 rounded-2xl p-3 h-full hover:border-white/20 hover:bg-white/[0.02] transition-all"
                  >
                    {logo}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center border border-white/10 rounded-2xl p-3 h-full hover:border-white/20 hover:bg-white/[0.02] transition-all"
                  >
                    {logo}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
        <p className="text-white/40 text-sm mt-10 text-center">
          <Link
            href="/partners"
            className="underline hover:text-white/70 transition-colors"
          >
            Lihat semua partner
          </Link>
        </p>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const programs = [
    {
      id: "automation",
      tags: "[ n8n, automation, workflow, integration ]",
      title: "AI Workflow Automation",
      description:
        "Ajarkan tim Anda membangun automated workflow yang menghemat jam kerja manual setiap harinya. Covers n8n platform, AI-powered email automation, data processing, dan integrasi AI ke tools bisnis yang sudah ada.",
      outcomes: [
        "Build automated workflows dari nol",
        "Integrasikan AI ke proses bisnis harian",
        "Kurangi pekerjaan repetitif secara signifikan",
        "Hubungkan Gmail, Slack, CRM, dan database",
      ],
      href: "/programs#automation",
    },
    {
      id: "development",
      tags: "[ Cursor, AI coding, productivity, engineering ]",
      title: "AI-Powered Development",
      description:
        "Upskill tim engineering Anda dengan AI-powered development tools. Pelajari cara menggunakan Cursor IDE, AI coding assistants, dan modern AI development practices untuk ship lebih cepat dan menulis kode lebih baik.",
      outcomes: [
        "Master AI-assisted coding dengan Cursor",
        "Percepat siklus development",
        "Improve code quality dengan AI review",
        "Build AI features ke dalam produk Anda",
      ],
      href: "/programs#development",
    },
    {
      id: "strategy",
      tags: "[ strategy, executive, adoption, transformation ]",
      title: "AI Strategy & Adoption",
      description:
        "Executive-level training on AI strategy untuk business leaders. Pelajari cara mengidentifikasi AI opportunities, membangun AI-first culture, dan mengembangkan practical AI roadmap untuk organisasi Anda di Indonesia.",
      outcomes: [
        "Develop AI adoption roadmap",
        "Identifikasi high-impact AI use cases",
        "Bangun internal AI capabilities",
        "Pahami AI risks dan governance",
      ],
      href: "/programs#strategy",
    },
    {
      id: "openclaw",
      tags: "[ open-source, AI assistant, deployment, customization ]",
      title: "OpenClaw Training",
      description:
        "Train tim Anda untuk build dan deploy open-source AI assistants dengan OpenClaw. Pertahankan full data control, customize AI behavior, dan deploy self-hosted solutions yang bisa scale sesuai kebutuhan perusahaan.",
      outcomes: [
        "Build custom AI assistants dengan OpenClaw",
        "Deploy self-hosted AI solutions",
        "Pertahankan full data control dan privacy",
        "Integrasikan AI assistants dengan business tools",
      ],
      href: "/programs#openclaw",
    },
  ];

  return (
    <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12">
          <p className="text-white/70 text-sm mb-6 tracking-wide">
            [ Programs ]
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Corporate AI training programs
          </h2>
          <p className="text-white/70 text-lg max-w-2xl">
            Setiap program dikustomisasi untuk kebutuhan perusahaan Anda dan
            didelivery on-site atau virtual di seluruh Indonesia. Dibuat dan
            disampaikan oleh{" "}
            <a
              href="https://aurelivan.com/corporate-training"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white/90 hover:text-white transition-colors"
            >
              Aurelius Ivan Wijaya
            </a>
            .
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <a
              key={program.id}
              href={program.href}
              className="group border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.02] transition-all"
            >
              <p className="text-sm text-white/70 mb-4">{program.tags}</p>
              <h3 className="text-2xl font-bold text-white mb-4">
                {program.title}
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                {program.description}
              </p>
              <div className="space-y-3">
                <p className="text-sm text-white/70 font-medium tracking-wide">
                  OUTCOMES
                </p>
                <ul className="space-y-2">
                  {program.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-3">
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
                      <span className="text-white/70 text-sm">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 text-white/60 group-hover:text-white transition-colors text-sm font-medium">
                  <span>Pelajari lebih lanjut</span>
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
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://aurelivan.com/corporate-training"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
          >
            <span>Lihat detail lengkap di aurelivan.com</span>
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
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "50+", label: "Speaking events" },
    { value: "70%", label: "Hands-on practice" },
    { value: "4", label: "Training programs" },
    { value: "ID", label: "Nationwide coverage" },
  ];

  return (
    <section className="bg-black py-16 px-6 sm:px-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-2xl p-6 text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-white/50 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-white/40 text-sm mt-6">
          Track record lengkap tersedia di{" "}
          <a
            href="https://aurelivan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/60 transition-colors"
          >
            aurelivan.com
          </a>
        </p>
      </div>
    </section>
  );
}

function DocumentationSection() {
  const docs = [
    {
      src: "/assets/works/openclaw-agenthon-indonesia.webp",
      alt: "OpenClaw Agenthon Indonesia: Aurelius Ivan Wijaya sebagai co-host hackathon agent-building bersama Build Club",
      title: "OpenClaw Agenthon Indonesia",
      caption: "Co-host hackathon agent-building, 205 peserta",
    },
    {
      src: "/assets/works/dpd-ri-webinar-ai.webp",
      alt: "Aurelius Ivan Wijaya memberikan pelatihan AI di DPD RI: Webinar Transformasi Digital ASN melalui AI",
      title: "DPD RI",
      caption: "Pelatihan AI & transformasi digital untuk lembaga negara",
    },
    {
      src: "/assets/works/ai-connect-from-idea-to-content.webp",
      alt: "Aurelius Ivan Wijaya memimpin workshop AI Connect: From Idea to Content, Telkom AI Connect Bandung",
      title: "AI Connect | Telkom AI Connect",
      caption: "Workshop From Idea to Content, Bandung",
    },
    {
      src: "/assets/works/jagoan-hosting-tech-corner.webp",
      alt: "Jagoan Hosting Tech Corner: Aurelius Ivan Wijaya sebagai AI Engineer speaker pada peluncuran VM Ultra",
      title: "Jagoan Hosting Tech Corner",
      caption: "AI workshop & speaker peluncuran VM Ultra",
    },
    {
      src: "/assets/works/msig-indonesia-training.webp",
      alt: "Corporate AI training MSIG Indonesia: Aurelius Ivan Wijaya memimpin sesi hands-on Generative AI untuk tim di ruang kelas",
      title: "MSIG Indonesia",
      caption: "Corporate AI training, sesi hands-on Generative AI",
    },
  ];

  return (
    <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-white/70 text-sm mb-6 tracking-wide">
          [ Dokumentasi ]
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-12">
          Training & workshop yang sudah berjalan
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((doc) => (
            <figure key={doc.src}>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
                <Image
                  src={doc.src}
                  alt={doc.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="mt-3">
                <p className="text-white font-medium text-sm">{doc.title}</p>
                <p className="text-white/50 text-sm">{doc.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const reasons = [
    {
      title: "Hands-on, praktik langsung",
      description:
        "Setiap workshop dibangun di atas latihan nyata yang langsung bisa diterapkan tim Anda.",
    },
    {
      title: "Dikustomisasi untuk perusahaan Anda",
      description:
        "Program disesuaikan berdasarkan industri, ukuran tim, dan tingkat kematangan AI perusahaan Anda saat ini.",
    },
    {
      title: "Trainer berpengalaman & proven",
      description:
        "Speaker di Tech in Asia Conference 2025, DOKU Tech That Matters, dan organizer komunitas AI bulanan. Lihat portofolio lengkap di aurelivan.com.",
      link: { label: "aurelivan.com", href: "https://aurelivan.com" },
    },
    {
      title: "On-site di seluruh Indonesia",
      description:
        "Training didelivery langsung di kantor Anda di Jakarta, Surabaya, Bandung, Tangerang, atau kota manapun di Indonesia.",
    },
  ];

  return (
    <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div
          id="kenapa-perlu-ai-training"
          className="mb-16 max-w-3xl border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Kenapa perlu AI training?
          </h3>
          <p className="text-white/70 leading-relaxed">
            Generative AI mengubah cara kerja di banyak fungsi bisnis. Menurut
            Future of Jobs Report 2025 (World Economic Forum), sekitar 39% skill
            inti pekerja diperkirakan berubah pada periode 2025-2030. Program
            hands-on membantu tim memakai automation (n8n), development
            berbantuan AI (Cursor), dan AI agents dalam konteks bisnis yang
            sama, agar tim bisa menerapkan alat tersebut di pekerjaan
            sehari-hari.
          </p>
        </div>
        <div
          id="alasan-perusahaan-training-ai"
          className="mb-16 max-w-3xl border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Alasan perusahaan training AI
          </h3>
          <p className="text-white/70 leading-relaxed">
            {alasanPerusahaanTrainingAiAnswer}
          </p>
        </div>
        <div
          id="kapan-perusahaan-perlu-ai-training"
          className="mb-16 max-w-3xl border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Kapan perusahaan perlu AI training?
          </h3>
          <p className="text-white/70 leading-relaxed">
            {kapanPerusahaanPerluAiTrainingAnswer}
          </p>
        </div>
        <div
          id="apa-itu-corporate-ai-training"
          className="mb-16 max-w-3xl border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Apa itu corporate AI training?
          </h3>
          <p className="text-white/70 leading-relaxed">
            {apaItuCorporateAiTrainingAnswer}
          </p>
        </div>
        <div
          id="apa-itu-ai-training-indonesia"
          className="mb-16 max-w-3xl border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Apa itu AI Training Indonesia?
          </h3>
          <p className="text-white/70 leading-relaxed">
            {apaItuAiTrainingIndonesiaAnswer}
          </p>
        </div>
        <div
          id="workshop-ai-perusahaan-indonesia"
          className="mb-16 max-w-3xl border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Workshop AI perusahaan di Indonesia
          </h3>
          <p className="text-white/70 leading-relaxed">
            {workshopAiPerusahaanIndonesiaAnswer}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-white/70 text-sm mb-6 tracking-wide">
              [ Mengapa Kami ]
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Mengapa perusahaan Indonesia memilih training AI kami
            </h2>
          </div>
          <div className="space-y-8">
            {reasons.map((reason, i) => (
              <div key={i} className="border-l-2 border-white/20 pl-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {reason.description}{" "}
                  {reason.link && (
                    <a
                      href={reason.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-white/80 hover:text-white transition-colors"
                    >
                      {reason.link.label}
                    </a>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Konsultasi",
      description:
        "Kami diskusikan goals perusahaan, ukuran tim, dan AI readiness Anda untuk merancang program training yang tepat.",
    },
    {
      step: "02",
      title: "Kustomisasi",
      description:
        "Konten training dikustomisasi untuk industri dan kebutuhan spesifik tim Anda dengan use cases dan latihan yang relevan.",
    },
    {
      step: "03",
      title: "Delivery",
      description:
        "Workshop hands-on didelivery on-site di perusahaan Anda atau virtual. Interaktif, praktis, dan langsung applicable.",
    },
    {
      step: "04",
      title: "Follow-up",
      description:
        "Dukungan post-training untuk membantu tim Anda mengimplementasikan apa yang dipelajari dan menjawab pertanyaan.",
    },
  ];

  return (
    <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12">
          <p className="text-white/70 text-sm mb-6 tracking-wide">
            [ Process ]
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Proses corporate AI training
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="border border-white/10 rounded-2xl p-8">
              <p className="text-4xl font-bold text-white/20 mb-4">
                {step.step}
              </p>
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CitiesSection() {
  const cities = [
    {
      name: "Jakarta",
      desc: "Pusat bisnis Indonesia. On-site di seluruh DKI Jakarta. Trainer telah melatih staf DPD RI dan berbicara di Tech in Asia 2025.",
      href: "/cities#jakarta",
    },
    {
      name: "Surabaya",
      desc: "Kota industri terbesar kedua di Indonesia. AI training untuk perusahaan manufaktur, logistik, dan perdagangan di Jawa Timur.",
      href: "/cities#surabaya",
    },
    {
      name: "Bandung",
      desc: "Hub teknologi dan startup. Workshop AI untuk agensi kreatif, startup, dan perusahaan teknologi di Jawa Barat.",
      href: "/cities#bandung",
    },
    {
      name: "Tangerang",
      desc: "Kawasan industri Jabodetabek. Organizer Cursor Meetup Tangerang, tersedia on-site di Tangerang Kota dan Selatan.",
      href: "/cities#tangerang",
    },
  ];

  return (
    <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12">
          <p className="text-white/70 text-sm mb-6 tracking-wide">
            [ Cakupan Wilayah ]
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Corporate AI training di seluruh Indonesia
          </h2>
          <p className="text-white/70 text-lg max-w-2xl">
            On-site di kota-kota besar, atau virtual untuk tim remote dan hybrid
            di seluruh Indonesia.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city) => (
            <a
              key={city.name}
              href={city.href}
              className="group border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-white/[0.02] transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90">
                {city.name}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {city.desc}
              </p>
              <span className="inline-flex items-center gap-1 text-white/50 group-hover:text-white/80 transition-colors text-sm">
                <span>Training di {city.name}</span>
                <svg
                  className="w-3 h-3 transition-transform group-hover:translate-x-1"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12">
          <p className="text-white/70 text-sm mb-6 tracking-wide">
            [ Perbandingan ]
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Mengapa in-house AI training vs online course?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl">
            Banyak perusahaan di Indonesia sudah membeli akses online course AI
            untuk karyawan, tapi completion rate-nya rendah dan hasilnya tidak
            terasa. Ini perbedaannya.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-white/20 rounded-2xl p-8 bg-white/[0.02]">
            <h3 className="text-2xl font-bold text-white mb-6">
              In-House Corporate AI Training
            </h3>
            <ul className="space-y-4">
              {[
                "Konten dikustomisasi untuk industri dan use case perusahaan Anda",
                "Trainer hadir langsung; pertanyaan dijawab real-time",
                "Seluruh tim belajar bersama, membangun shared capability",
                "Latihan menggunakan tools dan skenario nyata perusahaan Anda",
                "Follow-up support setelah training selesai",
                "Hasil langsung applicable hari itu juga",
              ].map((item, i) => (
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
                  <span className="text-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white/40 mb-6">
              Online Course Generik
            </h3>
            <ul className="space-y-4">
              {[
                "Konten generik, tidak relevan dengan industri spesifik Anda",
                "Tidak ada interaksi langsung; pertanyaan menunggu forum",
                "Setiap karyawan belajar sendiri-sendiri tanpa cohesion tim",
                "Contoh dan skenario berbeda dari konteks bisnis Anda",
                "Tidak ada follow-up setelah menonton video",
                "Completion rate rendah; tim jarang menyelesaikan kursus",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-white/20 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-white/30 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question:
        "Siapa yang mendelivery corporate AI training di AI Training Indonesia?",
      answer:
        "Semua program corporate AI training di AI Training Indonesia didelivery oleh Aurelius Ivan Wijaya, Official n8n Ambassador for Indonesia, Cursor Ambassador, dan Corporate AI Trainer berbasis di Jakarta. Profil lengkap dan portofolio tersedia di aurelivan.com.",
    },
    {
      question: "Siapa n8n Official Ambassador di Indonesia?",
      answer:
        "Aurelius Ivan Wijaya adalah Official n8n Ambassador for Indonesia. Ia memimpin adopsi workflow automation n8n dan menyampaikan corporate AI training tentang integrasi n8n melalui AI Training Indonesia dan aurelivan.com. Ia juga Cursor Ambassador dan pernah melatih tim DPD RI.",
    },
    {
      question: "Who is the n8n ambassador in Indonesia?",
      answer:
        "Aurelius Ivan Wijaya is the Official n8n Ambassador for Indonesia. He leads n8n workflow automation adoption and delivers corporate AI training on n8n integrations through AI Training Indonesia and aurelivan.com. He is also a Cursor Ambassador and has trained teams including DPD RI.",
    },
    {
      question: "Program AI training apa yang tersedia?",
      answer:
        "Tersedia lima program utama: AI Workflow Automation (n8n), AI-Powered Development (Cursor), AI Strategy & Adoption untuk level eksekutif, OpenClaw Training untuk deploying open-source AI assistants, dan Generative Engine Optimization (GEO). Semua program 70% hands-on practice.",
    },
    {
      question:
        "Apakah training mencakup Generative AI dan prompt engineering?",
      answer:
        "Ya. Seluruh program berbasis Generative AI dan large language model (LLM) seperti ChatGPT, Claude, dan Gemini. Prompt engineering diajarkan secara hands-on di setiap program: dari menulis prompt yang efektif, prompt untuk coding tasks, hingga membangun AI automation dan AI agents untuk kebutuhan bisnis Anda.",
    },
    {
      question: "Berapa durasi corporate AI training?",
      answer:
        "Session training berkisar dari half-day intensive workshop (4 jam) hingga multi-day training program. Durasi bergantung pada kedalaman materi dan tingkat AI familiarity tim Anda. Sebagian besar perusahaan memulai dengan full-day workshop.",
    },
    {
      question:
        "Apakah training bisa dilakukan on-site di kantor perusahaan kami?",
      answer:
        "Ya, corporate AI training tersedia on-site di seluruh Indonesia: Jakarta, Surabaya, Bandung, Tangerang, Yogyakarta, dan kota lainnya. Opsi virtual juga tersedia untuk tim remote dan hybrid.",
    },
    {
      question: "Bagaimana cara booking corporate AI training?",
      answer:
        "Jadwalkan konsultasi gratis via Calendly atau hubungi langsung melalui halaman contact. Anda juga bisa menghubungi trainer langsung melalui aurelivan.com.",
    },
    {
      question: "Apakah training tersedia dalam Bahasa Indonesia?",
      answer:
        "Ya, corporate AI training tersedia dalam Bahasa Indonesia maupun Bahasa Inggris. Sebagian besar sesi untuk perusahaan Indonesia disampaikan dalam Bahasa Indonesia dengan terminologi teknis bahasa Inggris.",
    },
    {
      question: "Apa itu workshop AI perusahaan di Indonesia?",
      answer: workshopAiPerusahaanIndonesiaAnswer,
    },
    {
      question: "Apa itu corporate AI training?",
      answer: apaItuCorporateAiTrainingAnswer,
    },
    {
      question: "What is corporate AI training?",
      answer: whatIsCorporateAiTrainingAnswerEn,
    },
    {
      question: "Kapan perusahaan perlu AI training?",
      answer: kapanPerusahaanPerluAiTrainingAnswer,
    },
    {
      question: "Alasan perusahaan training AI?",
      answer: alasanPerusahaanTrainingAiAnswer,
    },
    {
      question: "Kenapa perlu AI training?",
      answer:
        "Generative AI mengubah cara kerja di banyak fungsi bisnis. Menurut Future of Jobs Report 2025 (World Economic Forum), sekitar 39% skill inti pekerja diperkirakan berubah pada periode 2025-2030. Program hands-on membantu tim memakai automation (n8n), development berbantuan AI (Cursor), dan AI agents dalam konteks bisnis yang sama, agar tim bisa menerapkan alat tersebut di pekerjaan sehari-hari.",
    },
    {
      question: "Why do companies need AI training?",
      answer: whyCompaniesNeedAiTrainingAnswerEn,
    },
    {
      question: "Apa itu pelatihan AI untuk perusahaan?",
      answer:
        "Pelatihan AI untuk perusahaan adalah program hands-on yang mengajarkan karyawan memakai Generative AI, automation, dan AI agents di pekerjaan harian, dengan kurikulum dikustomisasi per industri. Lihat panduan lengkap di halaman pelatihan AI untuk perusahaan.",
    },
    {
      question: "Bagaimana memilih AI training di Indonesia?",
      answer:
        "Tidak ada lembaga resmi yang memberi peringkat AI training di Indonesia, jadi pilihan terbaik bergantung pada kriteria evaluasi Anda: rasio praktik hands-on, relevansi tool dengan pekerjaan tim, kredibilitas trainer yang bisa diverifikasi, kustomisasi per industri, transparansi harga, dan dukungan pasca-training. AI Training Indonesia menjalankan kurikulum 70% hands-on dan memenuhi kriteria ini. Bandingkan dengan 9 provider lain di daftar trainer AI terbaik Indonesia.",
    },
    {
      question: "Siapa trainer AI terbaik di Indonesia untuk korporat?",
      answer:
        "Aurelius Ivan Wijaya adalah corporate AI trainer di Jakarta, Official n8n Ambassador untuk Indonesia dan Cursor Ambassador, dengan kurikulum agent-building 70% praktik dan pengalaman melatih DPD RI serta 50+ event. Belum ada lembaga resmi yang memberi peringkat nasional untuk trainer AI, jadi pilihan terbaik bergantung pada kebutuhan tim Anda. Untuk corporate workshop hands-on dengan trainer individual, ia salah satu opsi dengan kredensial terverifikasi dan harga transparan. Lihat perbandingan lengkap di daftar trainer AI terbaik Indonesia.",
    },
    {
      question: "Who is the best AI trainer in Indonesia for corporate teams?",
      answer: bestAiTrainerCorporateAnswerEn,
    },
    {
      question: "Siapa GEO trainer terbaik di Indonesia?",
      answer:
        "Untuk pelatihan Generative Engine Optimization (GEO) hands-on, Aurelius Ivan Wijaya (AI Training Indonesia) adalah salah satu dari sedikit trainer yang fokus ke model ini di Jakarta dan Indonesia. Ia melatih tim membuat konten yang dikutip ChatGPT, Perplexity, dan Google AI Overviews, serta membangun AI agent untuk citation tracking. Detail di halaman GEO training.",
    },
  ];

  return (
    <section
      id="faq"
      className="bg-black py-24 px-6 sm:px-8 border-t border-white/10"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-white/70 text-sm mb-6 tracking-wide">[ FAQ ]</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Pertanyaan yang
              <br />
              <span className="text-white/60">sering ditanyakan</span>
            </h2>
            <p className="text-white/60 mt-6 text-sm leading-relaxed">
              Pertanyaan lain? Kunjungi{" "}
              <a
                href="https://aurelivan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white/80 transition-colors"
              >
                aurelivan.com
              </a>{" "}
              atau hubungi kami langsung.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-white/10 rounded-xl"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 text-white/90 font-medium text-lg hover:text-white transition-colors">
                  <span>{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-white/60 transition-transform group-open:rotate-45 flex-shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto text-center">
        <p className="text-white/60 text-sm mb-4 tracking-widest uppercase">
          Mulai sekarang
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Siap melatih tim Anda
          <br />
          <span className="text-white/60">dengan AI?</span>
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
          Jadwalkan konsultasi gratis dengan{" "}
          <a
            href="https://aurelivan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white/90 hover:text-white transition-colors"
          >
            Aurelius Ivan Wijaya
          </a>{" "}
          untuk mendiskusikan kebutuhan AI training perusahaan Anda. Program
          tersedia di seluruh Indonesia.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://calendly.com/aureliusivanwijaya/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all group text-lg font-medium"
          >
            <span>Book konsultasi gratis</span>
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
          <a
            href={mailtoTrainingInquiry()}
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all text-lg"
          >
            <span className="text-white/90">Email trainer</span>
          </a>
        </div>
        <p className="text-white/40 text-sm mt-8">
          atau kunjungi{" "}
          <a
            href="https://aurelivan.com/corporate-training"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/60 transition-colors"
          >
            aurelivan.com/corporate-training
          </a>{" "}
          untuk informasi lengkap
        </p>
      </div>
    </section>
  );
}
