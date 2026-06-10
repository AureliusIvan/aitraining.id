import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Corporate AI Trainer Indonesia — Aurelius Ivan Wijaya",
  description:
    "Aurelius Ivan Wijaya adalah Corporate AI Trainer, Generative AI consultant, dan speaker terkemuka di Indonesia — Cursor Ambassador. Telah melatih DPD RI, berbicara di Tech in Asia Conference 2025. Profil lengkap di aurelivan.com.",
  alternates: {
    canonical: "https://aitraining.id/about",
  },
  openGraph: {
    url: "https://aitraining.id/about",
  },
};

export default function AboutPage() {
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
        name: "About Trainer",
        item: "https://aitraining.id/about",
      },
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://aurelivan.com/#person",
    name: "Aurelius Ivan Wijaya",
    url: "https://aurelivan.com",
    jobTitle: [
      "Corporate AI Trainer",
      "AI Corporate Trainer",
      "Generative AI Trainer",
      "AI Consultant",
      "Speaker",
    ],
    description:
      "Aurelius Ivan Wijaya adalah Corporate AI Trainer, Generative AI consultant, dan speaker terkemuka di Indonesia — Cursor Ambassador — yang membantu perusahaan mengadopsi Generative AI melalui hands-on workshops, prompt engineering, dan enterprise training programs.",
    knowsAbout: [
      "Generative AI",
      "Prompt Engineering",
      "Large Language Models",
      "AI Engineering",
      "AI Consulting",
      "AI Mentorship",
      "Corporate AI Training",
      "AI Automation",
      "Cursor AI Development",
      "AI Strategy",
    ],
    sameAs: [
      "https://aurelivan.com",
      "https://www.linkedin.com/in/aurelius-ivan-wijaya",
      "https://github.com/AureliusIvan",
      "https://aurelivan.substack.com",
    ],
    nationality: { "@type": "Country", name: "Indonesia" },
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressLocality: "Jakarta",
    },
  };

  const credentials = [
    {
      event: "Cursor",
      role: "Cursor Ambassador",
      location: "Indonesia",
      description:
        "Cursor Ambassador resmi — memimpin adopsi AI-powered development dan prompt engineering dengan Cursor di Indonesia.",
    },
    {
      event: "Tech in Asia Conference 2025",
      role: "Speaker",
      location: "Jakarta, Indonesia",
      description:
        "Berbicara tentang AI product development dan enterprise Generative AI adoption di konferensi teknologi terbesar di Asia Tenggara.",
    },
    {
      event: "DPD RI — Dewan Perwakilan Daerah",
      role: "AI Trainer",
      location: "Jakarta, Indonesia",
      description:
        "Melatih staf dan anggota DPD RI tentang AI tools dan digital transformation untuk lembaga pemerintahan.",
    },
    {
      event: "Tech That Matters by DOKU",
      role: "Panelist",
      location: "Jakarta, Indonesia",
      description:
        "Panelist fireside chat tentang building AI products dan strategi adopsi AI untuk perusahaan fintech.",
    },
    {
      event: "Cursor Meetup Tangerang",
      role: "Organizer & Trainer",
      location: "Tangerang, Indonesia",
      description:
        "Menyelenggarakan dan melatih komunitas developer AI bulanan dengan fokus pada AI-powered development menggunakan Cursor.",
    },
    {
      event: "MULAI: Email Automation Workshop",
      role: "Lead Trainer",
      location: "Online (Indonesia)",
      description:
        "Workshop automasi email berbasis AI menggunakan n8n untuk tim non-teknis di perusahaan Indonesia.",
    },
  ];

  const expertise = [
    {
      area: "Generative AI & Prompt Engineering",
      tools: "ChatGPT, Claude, Gemini, LLM APIs",
      description:
        "Melatih tim menguasai Generative AI dan prompt engineering — dari menulis prompt efektif hingga membangun AI agents untuk kebutuhan bisnis.",
    },
    {
      area: "AI Workflow Automation",
      tools: "n8n, Make, Zapier, AI APIs",
      description:
        "Membangun automated workflows yang mengintegrasikan Generative AI ke proses bisnis nyata.",
    },
    {
      area: "AI-Powered Development",
      tools: "Cursor, GitHub Copilot, Claude API",
      description:
        "Melatih engineering teams menggunakan AI coding assistants untuk mempercepat development.",
    },
    {
      area: "AI Strategy",
      tools: "Executive frameworks, AI roadmapping",
      description:
        "Membantu eksekutif mengidentifikasi AI opportunities dan membangun AI-first culture.",
    },
    {
      area: "AI Mentorship & Community Building",
      tools: "Cursor Meetup, Build Club",
      description:
        "Mentor komunitas AI developer terbesar di Tangerang dan corporate mentor untuk tim engineering — berkolaborasi dengan komunitas Generative AI global.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="min-h-screen bg-black text-white">
        <Nav />
        <main>
          {/* Hero */}
          <section className="relative pt-32 pb-16 px-6 sm:px-8">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <p className="text-white/70 text-sm mb-4 tracking-wide">
                    [ Trainer ]
                  </p>
                  <h1 className="text-5xl sm:text-6xl font-bold leading-[0.9] tracking-tight mb-4">
                    <a
                      href="https://aurelivan.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white/80 transition-colors"
                    >
                      Aurelius Ivan
                      <br />
                      Wijaya
                    </a>
                  </h1>
                  <p className="text-white/60 text-lg mb-6">
                    Corporate AI Trainer · Generative AI Consultant · Cursor
                    Ambassador · Indonesia
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://aurelivan.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full hover:bg-white/90 transition-all group text-sm font-medium"
                    >
                      <span>aurelivan.com</span>
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
                      href="https://www.linkedin.com/in/aurelius-ivan-wijaya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 rounded-full hover:bg-white/5 transition-all text-sm text-white/80"
                    >
                      LinkedIn ↗
                    </a>
                    <a
                      href="https://aurelivan.com/speaking"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 rounded-full hover:bg-white/5 transition-all text-sm text-white/80"
                    >
                      Speaking Portfolio ↗
                    </a>
                  </div>
                  <div className="relative mt-10 rounded-2xl overflow-hidden border border-white/10 aspect-video">
                    <Image
                      src="/assets/hero.webp"
                      alt="Aurelius Ivan Wijaya — Corporate AI Trainer dan Cursor Ambassador, Indonesia"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <p className="text-white/90 text-lg leading-relaxed">
                    Aurelius Ivan Wijaya adalah Corporate AI Trainer, Generative
                    AI consultant, dan speaker terkemuka di Indonesia — juga{" "}
                    <strong className="text-white">Cursor Ambassador</strong> —
                    yang membantu perusahaan mengadopsi Generative AI melalui
                    hands-on workshops, prompt engineering, enterprise training
                    programs, dan community events.
                  </p>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Ia telah melatih staf DPD RI (Dewan Perwakilan Daerah
                    Republik Indonesia), berbicara di{" "}
                    <strong className="text-white">
                      Tech in Asia Conference 2025
                    </strong>{" "}
                    di Jakarta, dan menyelenggarakan komunitas Generative AI
                    developer bulanan di Tangerang, Indonesia.
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
                      href="https://cursor.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-white transition-colors"
                    >
                      Cursor
                    </a>
                    , dan{" "}
                    <a
                      href="https://artifisial.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-white transition-colors"
                    >
                      Artifisial
                    </a>
                    , ia memberikan corporate AI training yang benar-benar
                    praktis dan menghasilkan perubahan nyata bagi tim
                    perusahaan.
                  </p>
                  <p className="text-white/50 text-sm">
                    Profil lengkap, portofolio, dan artikel tersedia di{" "}
                    <a
                      href="https://aurelivan.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-white/70 transition-colors"
                    >
                      aurelivan.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Documentation */}
          <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-white/70 text-sm mb-6 tracking-wide">
                    [ Dokumentasi ]
                  </p>
                  <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                    Pelatihan AI untuk DPD RI
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed mb-4">
                    Webinar Transformasi Digital ASN melalui AI — membawa
                    pemanfaatan Generative AI yang praktis ke Dewan Perwakilan
                    Daerah Republik Indonesia.
                  </p>
                  <p className="text-white/50 text-sm">
                    Dokumentasi training dan speaking lainnya tersedia di{" "}
                    <a
                      href="https://aurelivan.com/work"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-white/70 transition-colors"
                    >
                      aurelivan.com/work
                    </a>
                  </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 max-w-sm w-full justify-self-center md:justify-self-end">
                  <Image
                    src="/assets/works/dpd-ri-webinar-ai-collage.webp"
                    alt="Aurelius Ivan Wijaya memberikan pelatihan AI di DPD RI — Dewan Perwakilan Daerah Republik Indonesia"
                    width={560}
                    height={747}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Credentials */}
          <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="mb-12">
                <p className="text-white/70 text-sm mb-6 tracking-wide">
                  [ Track Record ]
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Speaking & training credentials
                </h2>
                <p className="text-white/70 text-lg max-w-2xl">
                  Dipercaya oleh konferensi dan organisasi terkemuka di
                  Indonesia untuk menyampaikan AI training dan speaking
                  engagements. Lihat portofolio lengkap di{" "}
                  <a
                    href="https://aurelivan.com/speaking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-white/80 hover:text-white transition-colors"
                  >
                    aurelivan.com/speaking
                  </a>
                  .
                </p>
              </div>
              <div className="space-y-4">
                {credentials.map((cred, i) => (
                  <div
                    key={i}
                    className="border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all"
                  >
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {cred.event}
                        </h3>
                        <p className="text-white/60 text-sm">
                          {cred.role} · {cred.location}
                        </p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-white/70 leading-relaxed">
                          {cred.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="https://aurelivan.com/work"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
                >
                  <span>Lihat semua speaking & work di aurelivan.com</span>
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

          {/* Expertise */}
          <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="mb-12">
                <p className="text-white/70 text-sm mb-6 tracking-wide">
                  [ Expertise ]
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold text-white">
                  Area keahlian
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {expertise.map((item, i) => (
                  <div
                    key={i}
                    className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.area}
                    </h3>
                    <p className="text-white/50 text-xs mb-4 font-mono">
                      {item.tools}
                    </p>
                    <p className="text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partners */}
          <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-white/70 text-sm mb-6 tracking-wide">
                    [ Partners ]
                  </p>
                  <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                    Bermitra dengan
                    <br />
                    <span className="text-white/60">pemimpin industri AI</span>
                  </h2>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      name: "Build Club",
                      url: "https://buildclub.ai",
                      desc: "Global AI community builder dan partner training program.",
                    },
                    {
                      name: "Cursor",
                      url: "https://cursor.com",
                      desc: "Partner resmi untuk AI-powered development training di Indonesia.",
                    },
                    {
                      name: "Artifisial",
                      url: "https://artifisial.com",
                      desc: "Partner ekosistem AI Indonesia untuk corporate training programs.",
                    },
                  ].map((partner) => (
                    <a
                      key={partner.name}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border border-white/10 rounded-xl p-5 hover:border-white/20 hover:bg-white/[0.02] transition-all group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-white">
                          {partner.name}
                        </h3>
                        <svg
                          className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                      <p className="text-white/60 text-sm">{partner.desc}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Book session bersama Aurelius
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
                Jadwalkan konsultasi gratis atau kunjungi{" "}
                <a
                  href="https://aurelivan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white/90 hover:text-white transition-colors"
                >
                  aurelivan.com
                </a>{" "}
                untuk informasi lengkap tentang corporate AI training programs
                di Indonesia.
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
                  href="https://aurelivan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all text-lg"
                >
                  <span className="text-white/90">Kunjungi aurelivan.com</span>
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
