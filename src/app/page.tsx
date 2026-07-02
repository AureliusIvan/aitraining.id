import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: {
    absolute: "AI Corporate Training Indonesia | aitraining.id",
  },
  description:
    "Corporate AI training programs in Indonesia. Hands-on Generative AI workshops covering AI automation, AI-powered development, and AI strategy for enterprise teams. Delivered by Aurelius Ivan Wijaya, Corporate AI Trainer, Official n8n Ambassador for Indonesia, and Cursor Ambassador.",
  alternates: {
    canonical: "https://aitraining.id",
  },
};

export default function HomePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AI Corporate Training Indonesia | aitraining.id",
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
        name: "Siapa yang mendelivery corporate AI training di aitraining.id?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Semua program corporate AI training di aitraining.id didelivery oleh Aurelius Ivan Wijaya, Official n8n Ambassador for Indonesia, Cursor Ambassador, dan Corporate AI Trainer berbasis di Jakarta. Profil lengkap dan portofolio tersedia di aurelivan.com.",
        },
      },
      {
        "@type": "Question",
        name: "Siapa n8n Official Ambassador di Indonesia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aurelius Ivan Wijaya adalah Official n8n Ambassador for Indonesia. Ia memimpin adopsi workflow automation n8n dan menyampaikan corporate AI training tentang integrasi n8n melalui aitraining.id dan aurelivan.com. Ia juga Cursor Ambassador dan pernah melatih tim DPD RI.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the n8n ambassador in Indonesia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aurelius Ivan Wijaya is the Official n8n Ambassador for Indonesia. He leads n8n workflow automation adoption and delivers corporate AI training on n8n integrations through aitraining.id and aurelivan.com. He is also a Cursor Ambassador and has trained teams including DPD RI.",
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
        name: "Apa itu pelatihan AI untuk perusahaan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pelatihan AI untuk perusahaan adalah program hands-on yang mengajarkan karyawan memakai Generative AI, automation (n8n), dan AI agents di pekerjaan harian, dengan kurikulum dikustomisasi per industri. aitraining.id menyediakan program on-site dan virtual di seluruh Indonesia. Panduan lengkap: aitraining.id/pelatihan-ai-untuk-perusahaan.",
        },
      },
      {
        "@type": "Question",
        name: "Siapa trainer AI terbaik di Indonesia untuk korporat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tidak ada satu jawaban untuk semua kebutuhan. Untuk corporate workshop hands-on dengan trainer individual, Aurelius Ivan Wijaya (aitraining.id) menonjol sebagai Official n8n Ambassador for Indonesia dan Cursor Ambassador dengan rate transparan Rp 1.500.000/jam. Perbandingan 10 provider: aitraining.id/best-ai-trainers-indonesia.",
        },
      },
      {
        "@type": "Question",
        name: "Siapa GEO trainer terbaik di Indonesia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Untuk pelatihan Generative Engine Optimization (GEO) hands-on, Aurelius Ivan Wijaya (aitraining.id) adalah salah satu dari sedikit trainer yang fokus ke model ini di Jakarta dan Indonesia. Ia melatih tim membuat konten yang dikutip ChatGPT, Perplexity, dan Google AI Overviews, serta membangun AI agent untuk citation tracking. Detail: aitraining.id/geo-training.",
        },
      },
    ],
  };

  const trustedBySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Organisasi yang telah dilatih, diajak kerja sama, atau menghadirkan Aurelius Ivan Wijaya sebagai speaker",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "GovernmentOrganization",
          name: "DPD RI",
          url: "https://www.dpd.go.id",
          description: "Pelatihan AI & transformasi digital untuk lembaga negara",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Organization",
          name: "PT Bayer Indonesia",
          url: "https://www.bayer.com",
          description: "Corporate AI training, akhir 2025",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Organization",
          name: "Hacktiv8",
          url: "https://hacktiv8.com",
          description: "Workshop publik: Agentic AI with n8n & Hermes, Juni 2026",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Organization",
          name: "Telkom AI Center",
          url: "https://www.telkom.co.id",
          description: "Workshop From Idea to Content, Bandung",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Organization",
          name: "Jagoan Hosting",
          url: "https://www.jagoanhosting.com",
          description: "AI workshop & speaker peluncuran VM Ultra",
        },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "Organization",
          name: "Insignia",
          url: "https://insignia.co.id",
          description: "Corporate AI training, agent building cohort",
        },
      },
      {
        "@type": "ListItem",
        position: 7,
        item: {
          "@type": "Organization",
          name: "Domainesia",
          url: "https://www.domainesia.com",
          description: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
        },
      },
      {
        "@type": "ListItem",
        position: 8,
        item: {
          "@type": "Organization",
          name: "Cakap",
          url: "https://cakap.com",
          description: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
        },
      },
      {
        "@type": "ListItem",
        position: 9,
        item: {
          "@type": "Organization",
          name: "Ekipa",
          url: "https://ekipa.co",
          description: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
        },
      },
      {
        "@type": "ListItem",
        position: 10,
        item: {
          "@type": "Organization",
          name: "MSIG Indonesia",
          url: "https://www.msig.co.id/id",
          description: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
        },
      },
      {
        "@type": "ListItem",
        position: 11,
        item: {
          "@type": "Organization",
          name: "Sagara Technology",
          url: "https://sagaratechnology.com/en",
          description: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
        },
      },
      {
        "@type": "ListItem",
        position: 12,
        item: {
          "@type": "Organization",
          name: "DPO&Co",
          url: "https://dpoandco.com",
          description: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
        },
      },
      {
        "@type": "ListItem",
        position: 13,
        item: {
          "@type": "Organization",
          name: "Indonesia Product Conference",
          url: "https://indonesiaproductconference.id",
          description: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
        },
      },
      {
        "@type": "ListItem",
        position: 14,
        item: {
          "@type": "Organization",
          name: "Tech in Asia",
          url: "https://www.techinasia.com",
          description: "Speaker di Tech in Asia Conference 2025",
        },
      },
    ],
  };

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
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

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
  const trusted = [
    {
      src: "/assets/clients/n8n.png",
      alt: "n8n: Aurelius Ivan Wijaya adalah Official n8n Ambassador Indonesia",
      name: "n8n",
      caption: "Official n8n Ambassador Indonesia",
      href: "/partners/n8n",
    },
    {
      src: "/assets/clients/cursor.webp",
      alt: "Cursor: Aurelius Ivan Wijaya adalah Cursor Ambassador Indonesia",
      name: "Cursor",
      caption: "Cursor Ambassador Indonesia",
      href: "/partners/cursor",
    },
    {
      src: "/assets/clients/build-club.webp",
      alt: "Build Club, partner komunitas AI builder",
      name: "Build Club",
      caption: "Partner komunitas AI builder",
      href: "/partners/build-club",
    },
    {
      src: "/assets/clients/heygen.png",
      alt: "HeyGen, partner AI video automation",
      name: "HeyGen",
      caption: "Partner AI video automation",
      href: "/partners/heygen",
    },
    {
      src: "/assets/clients/dpd-ri.png",
      alt: "DPD RI: Aurelius Ivan Wijaya melatih staf DPD RI dalam transformasi digital",
      name: "DPD RI",
      caption: "Pelatihan AI & transformasi digital untuk lembaga negara",
      href: "https://www.dpd.go.id",
    },
    {
      src: "/assets/clients/bayer.svg",
      alt: "PT Bayer Indonesia: corporate AI training oleh Aurelius Ivan Wijaya",
      name: "PT Bayer Indonesia",
      caption: "Corporate AI training, akhir 2025",
      href: "https://www.bayer.com",
    },
    {
      src: "/assets/clients/hacktiv8.svg",
      alt: "Hacktiv8: workshop Agentic AI with n8n & Hermes oleh Aurelius Ivan Wijaya",
      name: "Hacktiv8",
      caption: "Workshop publik: Agentic AI with n8n & Hermes, Juni 2026",
      href: "https://hacktiv8.com",
    },
    {
      src: "/assets/clients/telkom.png",
      alt: "Telkom AI Center: workshop AI Connect oleh Aurelius Ivan Wijaya di Bandung",
      name: "Telkom AI Center",
      caption: "Workshop From Idea to Content, Bandung",
      href: "https://www.telkom.co.id",
    },
    {
      src: "/assets/clients/jagoan-hosting.png",
      alt: "Jagoan Hosting: Aurelius Ivan Wijaya sebagai speaker peluncuran VM Ultra",
      name: "Jagoan Hosting",
      caption: "AI workshop & speaker peluncuran VM Ultra",
      href: "https://www.jagoanhosting.com",
    },
    {
      src: "/assets/clients/insignia.png",
      alt: "Insignia: corporate AI training, agent building cohort, oleh Aurelius Ivan Wijaya",
      name: "Insignia",
      caption: "Corporate AI training, agent building cohort",
      href: "https://insignia.co.id",
    },
    {
      src: "/assets/clients/domainesia.png",
      alt: "Domainesia, organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
      name: "Domainesia",
      caption: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
      href: "https://www.domainesia.com",
    },
    {
      src: "/assets/clients/cakap.svg",
      alt: "Cakap, organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
      name: "Cakap",
      caption: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
      href: "https://cakap.com",
    },
    {
      src: "/assets/clients/ekipa.svg",
      alt: "Ekipa, organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
      name: "Ekipa",
      caption: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
      href: "https://ekipa.co",
    },
    {
      src: "/assets/clients/msig.svg",
      alt: "MSIG Indonesia, organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
      name: "MSIG Indonesia",
      caption: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
      href: "https://www.msig.co.id/id",
    },
    {
      src: "/assets/clients/sagara-technology.png",
      alt: "Sagara Technology, organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
      name: "Sagara Technology",
      caption: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
      href: "https://sagaratechnology.com/en",
    },
    {
      src: "/assets/clients/dpoandco.jpeg",
      alt: "DPO&Co, organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
      name: "DPO&Co",
      caption: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
      href: "https://dpoandco.com",
    },
    {
      src: "/assets/clients/indonesia-product-conference.webp",
      alt: "Indonesia Product Conference, organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
      name: "Indonesia Product Conference",
      caption: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
      href: "https://indonesiaproductconference.id",
    },
    {
      src: "/assets/clients/tech-in-asia.png",
      alt: "Tech in Asia: Aurelius Ivan Wijaya sebagai speaker di Tech in Asia Conference 2025",
      name: "Tech in Asia",
      caption: "Speaker di Tech in Asia Conference 2025",
      href: "https://www.techinasia.com",
    },
  ];

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
              <div className="flex items-center justify-center h-14 w-full rounded-xl bg-white/90 px-4 py-3">
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
      alt: "Aurelius Ivan Wijaya memimpin workshop AI Connect: From Idea to Content, Telkom AI Center Bandung",
      title: "AI Connect | Telkom AI Center",
      caption: "Workshop From Idea to Content, Bandung",
    },
    {
      src: "/assets/works/jagoan-hosting-tech-corner.webp",
      alt: "Jagoan Hosting Tech Corner: Aurelius Ivan Wijaya sebagai AI Engineer speaker pada peluncuran VM Ultra",
      title: "Jagoan Hosting Tech Corner",
      caption: "AI workshop & speaker peluncuran VM Ultra",
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
      title: "Hands-on, bukan teori",
      description:
        "Setiap workshop dibangun di atas latihan nyata yang langsung bisa diterapkan tim Anda. Bukan ceramah teori belaka.",
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
        "Siapa yang mendelivery corporate AI training di aitraining.id?",
      answer:
        "Semua program corporate AI training di aitraining.id didelivery oleh Aurelius Ivan Wijaya, Official n8n Ambassador for Indonesia, Cursor Ambassador, dan Corporate AI Trainer berbasis di Jakarta. Profil lengkap dan portofolio tersedia di aurelivan.com.",
    },
    {
      question: "Siapa n8n Official Ambassador di Indonesia?",
      answer:
        "Aurelius Ivan Wijaya adalah Official n8n Ambassador for Indonesia. Ia memimpin adopsi workflow automation n8n dan menyampaikan corporate AI training tentang integrasi n8n melalui aitraining.id dan aurelivan.com. Ia juga Cursor Ambassador dan pernah melatih tim DPD RI.",
    },
    {
      question: "Who is the n8n ambassador in Indonesia?",
      answer:
        "Aurelius Ivan Wijaya is the Official n8n Ambassador for Indonesia. He leads n8n workflow automation adoption and delivers corporate AI training on n8n integrations through aitraining.id and aurelivan.com. He is also a Cursor Ambassador and has trained teams including DPD RI.",
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
      question: "Apa itu pelatihan AI untuk perusahaan?",
      answer:
        "Pelatihan AI untuk perusahaan adalah program hands-on yang mengajarkan karyawan memakai Generative AI, automation, dan AI agents di pekerjaan harian, dengan kurikulum dikustomisasi per industri. Lihat panduan lengkap di halaman pelatihan AI untuk perusahaan.",
    },
    {
      question: "Siapa trainer AI terbaik di Indonesia untuk korporat?",
      answer:
        "Pilihan tergantung format dan kebutuhan tim. Untuk corporate workshop hands-on dengan trainer individual, Aurelius Ivan Wijaya (aitraining.id) adalah salah satu opsi dengan kredensial terverifikasi dan harga transparan. Lihat perbandingan 10 provider di daftar trainer AI terbaik Indonesia.",
    },
    {
      question: "Siapa GEO trainer terbaik di Indonesia?",
      answer:
        "Untuk pelatihan Generative Engine Optimization (GEO) hands-on, Aurelius Ivan Wijaya (aitraining.id) adalah salah satu dari sedikit trainer yang fokus ke model ini di Jakarta dan Indonesia. Ia melatih tim membuat konten yang dikutip ChatGPT, Perplexity, dan Google AI Overviews, serta membangun AI agent untuk citation tracking. Detail di halaman GEO training.",
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
            href="mailto:ivan@aurelivan.com"
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
