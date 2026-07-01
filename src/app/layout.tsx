import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aitraining.id"),
  title: {
    default: "AI Corporate Training Indonesia | aitraining.id",
    template: "%s | aitraining.id",
  },
  description:
    "Corporate AI training programs in Indonesia. Hands-on Generative AI workshops covering AI automation, AI-powered development, and AI strategy for enterprise teams. Delivered by Aurelius Ivan Wijaya, Corporate AI Trainer, Official n8n Ambassador for Indonesia, and Cursor Ambassador.",
  keywords: [
    "corporate AI training Indonesia",
    "Generative AI training Indonesia",
    "AI training Indonesia",
    "AI Corporate Trainer Indonesia",
    "Corporate AI Trainer Indonesia",
    "Generative AI trainer Indonesia",
    "AI agent building training Indonesia",
    "AI consultant Indonesia",
    "AI workshop perusahaan",
    "pelatihan AI korporat",
    "enterprise AI training Jakarta",
    "AI trainer Jakarta",
    "pelatihan AI terbaik Jakarta",
    "AI trainer Indonesia",
    "workshop AI Indonesia",
    "corporate AI workshop",
    "AI upskilling Indonesia",
    "n8n automation training",
    "n8n ambassador Indonesia",
    "Cursor AI training",
    "Cursor ambassador Indonesia",
    "AI strategy training",
    "AI educator Indonesia",
    "tokoh AI Indonesia",
    "pengajar AI Indonesia",
    "praktisi AI Indonesia",
    "AI bootcamp Indonesia",
    "AI workshop Indonesia",
  ],
  authors: [{ name: "Aurelius Ivan Wijaya", url: "https://aurelivan.com" }],
  creator: "Aurelius Ivan Wijaya",
  publisher: "aitraining.id",
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    url: "https://aitraining.id",
    siteName: "aitraining.id",
    title: "AI Corporate Training Indonesia | aitraining.id",
    description:
      "Hands-on corporate AI training for companies in Indonesia. Workshops on AI automation, AI-powered development, and enterprise AI strategy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Corporate Training Indonesia | aitraining.id",
    description:
      "Hands-on corporate AI training for companies in Indonesia. Delivered by Aurelius Ivan Wijaya.",
    creator: "@aurelivan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://aitraining.id",
    languages: {
      id: "https://aitraining.id",
      en: "https://aitraining.id",
    },
  },
  ...(process.env.BING_SITE_VERIFICATION
    ? {
        verification: {
          other: {
            "msvalidate.01": process.env.BING_SITE_VERIFICATION,
          },
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://aitraining.id/#organization",
    name: "aitraining.id",
    url: "https://aitraining.id",
    description:
      "Corporate AI training programs in Indonesia. Hands-on Generative AI workshops covering AI agent building, AI automation, AI-powered development, and AI strategy for enterprise teams.",
    founder: {
      "@type": "Person",
      "@id": "https://aurelivan.com/#person",
      name: "Aurelius Ivan Wijaya",
      url: "https://aurelivan.com",
      jobTitle: [
        "Corporate AI Trainer",
        "AI Corporate Trainer",
        "Generative AI Trainer",
        "AI Educator",
        "Generative AI Educator",
        "Claude AI Trainer",
        "GEO Trainer",
        "GEO Specialist",
        "Generative Engine Optimization Trainer",
        "AI Consultant",
        "Speaker",
      ],
      description:
        "Corporate AI Trainer, GEO (Generative Engine Optimization) Trainer and Specialist, Official n8n Ambassador for Indonesia, and Cursor Ambassador. Helps Indonesian enterprises adopt Generative AI and get cited by AI engines through hands-on workshops on AI automation, AI-powered development, and Generative Engine Optimization.",
      award: [
        "Official n8n Ambassador for Indonesia",
        "Cursor Ambassador",
        "Speaker, Tech in Asia Conference 2025",
      ],
      sameAs: [
        "https://aurelivan.com",
        "https://aitraining.id",
        "https://aiforkarir.com",
        "https://www.linkedin.com/in/aurelius-ivan-wijaya",
        "https://github.com/AureliusIvan",
        "https://scholar.google.com/citations?user=1ld-BRwAAAAJ",
        "https://www.superprof.co.id/corporate-trainer-berpengalaman-indonesia-mengajar-workflow-automation-powered-development-dan-strategy-untuk-tim.html",
        "https://aurelivan.substack.com",
      ],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta",
    },
    areaServed: [
      { "@type": "City", name: "Jakarta" },
      { "@type": "City", name: "Surabaya" },
      { "@type": "City", name: "Bandung" },
      { "@type": "City", name: "Tangerang" },
      { "@type": "Country", name: "Indonesia" },
    ],
    knowsAbout: [
      "Corporate AI Training",
      "Generative AI",
      "AI Education",
      "AI Educator",
      "Corporate Claude Training",
      "Claude",
      "Claude Code",
      "Claude Cowork",
      "Generative Engine Optimization",
      "GEO Training",
      "AI Search Optimization",
      "Answer Engine Optimization",
      "Large Language Models",
      "AI Engineering",
      "AI Consulting",
      "Enterprise AI Workshops",
      "AI Automation",
      "n8n Workflow Automation",
      "Cursor AI Development",
      "AI Strategy",
    ],
    email: "ivan@aurelivan.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "ivan@aurelivan.com",
      availableLanguage: ["Indonesian", "English"],
    },
    sameAs: [
      "https://aurelivan.com",
      "https://aurelivan.com/corporate-training",
      "https://www.linkedin.com/in/aurelius-ivan-wijaya",
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://aurelivan.com/#person",
    name: "Aurelius Ivan Wijaya",
    alternateName: "Aurelivan",
    url: "https://aurelivan.com",
    jobTitle: [
      "Corporate AI Trainer",
      "Claude AI Trainer",
      "AI Educator",
      "Generative AI Educator",
      "GEO Trainer",
      "GEO Specialist",
      "Generative Engine Optimization Trainer",
      "Generative AI Trainer",
      "AI Consultant",
      "Speaker",
    ],
    description:
      "Corporate AI Trainer and GEO (Generative Engine Optimization) trainer and specialist in Indonesia. Official n8n Ambassador for Indonesia and Cursor Ambassador. Helps Indonesian enterprises adopt Generative AI and get cited by AI engines such as ChatGPT, Perplexity, and Google AI Overviews.",
    nationality: { "@type": "Country", name: "Indonesia" },
    worksFor: {
      "@type": "EducationalOrganization",
      "@id": "https://aitraining.id/#organization",
    },
    knowsAbout: [
      "Corporate AI Training",
      "Generative AI",
      "AI Education",
      "AI Educator",
      "Corporate Claude Training",
      "Claude",
      "Claude Code",
      "Claude Cowork",
      "Generative Engine Optimization",
      "GEO Training",
      "AI Search Optimization",
      "Answer Engine Optimization",
      "AI Automation",
      "n8n Workflow Automation",
      "Cursor AI Development",
      "AI Strategy",
    ],
    award: [
      "Official n8n Ambassador for Indonesia",
      "Cursor Ambassador",
      "Speaker, Tech in Asia Conference 2025",
    ],
    sameAs: [
      "https://aurelivan.com",
      "https://aitraining.id",
      "https://aiforkarir.com",
      "https://www.linkedin.com/in/aurelius-ivan-wijaya",
      "https://github.com/AureliusIvan",
      "https://scholar.google.com/citations?user=1ld-BRwAAAAJ",
      "https://www.superprof.co.id/corporate-trainer-berpengalaman-indonesia-mengajar-workflow-automation-powered-development-dan-strategy-untuk-tim.html",
      "https://aurelivan.substack.com",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://aitraining.id/#website",
    name: "aitraining.id",
    url: "https://aitraining.id",
    description:
      "Corporate AI training programs in Indonesia by Aurelius Ivan Wijaya.",
    publisher: {
      "@type": "EducationalOrganization",
      "@id": "https://aitraining.id/#organization",
    },
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
