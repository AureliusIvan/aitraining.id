import type { Metadata } from 'next';
import PlaybookClient from './PlaybookClient';

export const metadata: Metadata = {
  title: 'Daily Prompt Playbook — Panduan Praktis AI untuk Kerja Harian',
  description:
    "Kumpulan 7 prompt template siap pakai untuk kerja harian: email profesional, rangkum meeting, konten social media, analisis data, brainstorming, review tulisan, dan persiapan presentasi. Companion guide dari webinar 'Cara Pakai AI Biar Hasilnya Nggak Sampah' oleh Aurelius Ivan Wijaya.",
  keywords: [
    'prompt template AI',
    'cara pakai AI untuk kerja',
    'AI prompting Indonesia',
    'template prompt ChatGPT',
    'prompt email profesional',
    'AI untuk non-tech',
    'panduan AI kerja harian',
    'cara bikin prompt yang bagus',
    'AI productivity Indonesia',
    'webinar AI Indonesia',
    'aitraining.id',
  ],
  authors: [{ name: 'Aurelius Ivan Wijaya', url: 'https://aurelivan.com' }],
  creator: 'Aurelius Ivan Wijaya',
  alternates: {
    canonical: 'https://aitraining.id/playbook/daily-prompt',
  },
  openGraph: {
    title: 'Daily Prompt Playbook — Panduan Praktis AI untuk Kerja Harian',
    description:
      '7 prompt template siap pakai untuk email, meeting, konten social media, analisis data, brainstorming, review tulisan, dan presentasi. Tinggal copy, edit variabel, paste ke AI.',
    url: 'https://aitraining.id/playbook/daily-prompt',
    type: 'article',
    images: [
      {
        url: 'https://aurelivan.com/assets/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Daily Prompt Playbook — Panduan Praktis AI untuk Kerja Harian by Aurelius Ivan Wijaya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daily Prompt Playbook — Panduan Praktis AI untuk Kerja Harian',
    description:
      '7 prompt template siap pakai untuk kerja harian. Tinggal copy, edit variabel, paste ke AI.',
    creator: '@aurelivan',
    images: ['https://aurelivan.com/assets/hero.webp'],
  },
};

export default function PlaybookPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Daily Prompt Playbook — Panduan Praktis AI untuk Kerja Harian',
    description:
      "Kumpulan 7 prompt template siap pakai untuk kerja harian. Companion guide dari webinar 'Cara Pakai AI Biar Hasilnya Nggak Sampah'.",
    url: 'https://aitraining.id/playbook/daily-prompt',
    datePublished: '2026-03-07',
    dateModified: '2026-03-07',
    author: {
      '@type': 'Person',
      name: 'Aurelius Ivan Wijaya',
      url: 'https://aurelivan.com',
      jobTitle: 'Corporate AI Trainer & Speaker',
      sameAs: ['https://aurelivan.com', 'https://www.linkedin.com/in/aurelius-ivan-wijaya'],
    },
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'aitraining.id',
      url: 'https://aitraining.id',
    },
    image: 'https://aurelivan.com/assets/hero.webp',
    inLanguage: 'id-ID',
    about: [
      { '@type': 'Thing', name: 'AI Prompting' },
      { '@type': 'Thing', name: 'Artificial Intelligence' },
      { '@type': 'Thing', name: 'Productivity' },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Cara Membuat Prompt AI yang Bagus (Anatomy of a Good Prompt)',
    description:
      '5 elemen yang membuat prompt AI menghasilkan output yang jauh lebih baik: Role, Context, Task, Format, dan Constraint.',
    author: {
      '@type': 'Person',
      name: 'Aurelius Ivan Wijaya',
      url: 'https://aurelivan.com',
    },
    step: [
      {
        '@type': 'HowToStep',
        name: 'Role',
        text: 'Tentukan siapa AI dalam konteks ini. Contoh: "Kamu adalah seorang copywriter senior dengan 10 tahun pengalaman di industri FMCG."',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Context',
        text: 'Jelaskan situasi dan latar belakang. Contoh: "Perusahaan kami baru launching produk skincare untuk remaja usia 15-20 tahun."',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Task',
        text: 'Sebutkan dengan jelas apa yang diminta. Contoh: "Buatkan 5 variasi caption Instagram untuk launching produk ini."',
        position: 3,
      },
      {
        '@type': 'HowToStep',
        name: 'Format',
        text: 'Tentukan bentuk output yang diinginkan. Contoh: "Format: caption max 150 kata, include emoji, ada CTA di akhir."',
        position: 4,
      },
      {
        '@type': 'HowToStep',
        name: 'Constraint',
        text: 'Berikan batasan dan aturan main. Contoh: "Jangan pakai bahasa yang terlalu formal. Tone: playful, relatable, Gen-Z friendly."',
        position: 5,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Apa saja elemen prompt AI yang bagus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prompt AI yang bagus terdiri dari 5 elemen: Role (siapa AI dalam konteks ini), Context (situasi dan latar belakang), Task (apa yang diminta), Format (bentuk output yang diinginkan), dan Constraint (batasan atau aturan main). Tidak harus semua dipakai, tapi makin lengkap makin bagus hasilnya.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kenapa hasil output AI sering jelek atau tidak relevan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Output AI sering jelek karena prompt yang terlalu pendek atau tidak ada konteks. Solusinya: kasih feedback spesifik bagian mana yang kurang, tambahkan konteks tentang audiens dan industri, berikan contoh output yang diinginkan, dan pecah tugas besar jadi langkah-langkah kecil.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bagaimana cara membuat prompt email profesional untuk AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Untuk email profesional, berikan AI: role (profesional di bidang apa), tujuan email (follow-up meeting, minta approval, dll), konteks penerima (nama, jabatan, hubungan), format yang diinginkan (bahasa, panjang, tone), dan constraint (langsung to the point, sertakan subject line, akhiri dengan CTA).',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah perlu fact-check hasil output AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya, selalu lakukan fact-check. AI bisa terlihat confident tapi menghasilkan informasi yang salah. Gunakan AI untuk first draft dan brainstorming, tapi verifikasi fakta, data, dan angka sebelum menggunakannya di pekerjaan nyata.',
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aitraining.id' },
      { '@type': 'ListItem', position: 2, name: 'Daily Prompt Playbook', item: 'https://aitraining.id/playbook/daily-prompt' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PlaybookClient />
    </>
  );
}
