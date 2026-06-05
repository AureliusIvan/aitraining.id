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
    default: "AI Corporate Training Indonesia — aitraining.id",
    template: "%s | aitraining.id",
  },
  description:
    "Corporate AI training programs in Indonesia. Hands-on Generative AI workshops covering prompt engineering, AI automation, AI-powered development, and AI strategy for enterprise teams. Delivered by Aurelius Ivan Wijaya — Corporate AI Trainer, Cursor Ambassador, and founder of AICON ASIA.",
  keywords: [
    "corporate AI training Indonesia",
    "Generative AI training Indonesia",
    "AI training Indonesia",
    "AI Corporate Trainer Indonesia",
    "Corporate AI Trainer Indonesia",
    "Generative AI trainer Indonesia",
    "prompt engineering training Indonesia",
    "AI consultant Indonesia",
    "AI workshop perusahaan",
    "pelatihan AI korporat",
    "enterprise AI training Jakarta",
    "AI trainer Indonesia",
    "workshop AI Indonesia",
    "corporate AI workshop",
    "AI upskilling Indonesia",
    "n8n automation training",
    "Cursor AI training",
    "AI strategy training",
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
    title: "AI Corporate Training Indonesia — aitraining.id",
    description:
      "Hands-on corporate AI training for companies in Indonesia. Workshops on AI automation, AI-powered development, and enterprise AI strategy.",
    images: [
      {
        url: "https://aurelivan.com/assets/hero.webp",
        width: 1200,
        height: 630,
        alt: "Corporate AI Training Indonesia — aitraining.id by Aurelius Ivan Wijaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Corporate Training Indonesia — aitraining.id",
    description:
      "Hands-on corporate AI training for companies in Indonesia. Delivered by Aurelius Ivan Wijaya.",
    creator: "@aurelivan",
    images: ["https://aurelivan.com/assets/hero.webp"],
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
      "Corporate AI training programs in Indonesia. Hands-on Generative AI workshops covering prompt engineering, AI automation, AI-powered development, and AI strategy for enterprise teams.",
    founder: {
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
        "Corporate AI Trainer, Cursor Ambassador, and founder of AICON ASIA. Helps Indonesian enterprises adopt Generative AI through hands-on workshops on prompt engineering, AI automation, and AI-powered development.",
      sameAs: [
        "https://aurelivan.com",
        "https://www.linkedin.com/in/aurelius-ivan-wijaya",
        "https://github.com/AureliusIvan",
      ],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    knowsAbout: [
      "Corporate AI Training",
      "Generative AI",
      "Prompt Engineering",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
