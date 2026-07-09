// Articles: editorial/explainer content for AI Training Indonesia, distinct from
// /partners/* (which covers tools and communities AI Training Indonesia has a formal
// relationship with: ambassador programs, community leadership roles).
// Articles cover topics AI Training Indonesia has genuine hands-on expertise in but
// no formal affiliation with the underlying project/company. First case:
// OpenClaw. Aurelius Ivan Wijaya co-hosted the OpenClaw Agenthon Indonesia
// (organized by Build Club) and built the OpenClaw training VM installer,
// but has no relationship with OpenClaw the project or Peter Steinberger.
//
// Honesty guardrail: never imply a formal partnership/ambassador/affiliation
// with the article's subject unless one genuinely exists. State the real
// credential: what Ivan actually did.

export type ArticleFaq = { q: string; a: string };
export type ArticleSection = { h2: string; body: string[] };
export type ArticleFeature = { title: string; detail: string };

export type Article = {
  slug: string;
  category: string; // kicker label, e.g. "AI Agents Explained"
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  updated: string; // human date, e.g. "1 Juli 2026"
  datePublished: string; // ISO
  dateModified: string; // ISO
  h1: string;
  h1sub: string;
  lede: string;
  authorNote: string; // credential line under the byline (the real, current relationship)
  externalName?: string; // official source, e.g. "openclaw.ai"
  externalUrl?: string;
  relatedHref?: string; // internal program/booking destination
  relatedLabel?: string;
  defId: { q: string; a: string }; // definition block (Bahasa), 40-60 words
  defEn: { q: string; a: string }; // definition block (English)
  sections: ArticleSection[];
  features?: { heading: string; intro: string; items: ArticleFeature[] };
  faqs: ArticleFaq[];
};

const CALENDLY = "https://calendly.com/aureliusivanwijaya/30min";

export const articles: Article[] = [
  {
    slug: "apa-itu-openclaw",
    category: "AI Agents Explained",
    metaTitle:
      "Apa itu OpenClaw? AI Agent Open-Source yang Dikendalikan lewat WhatsApp | AI Training Indonesia",
    metaDescription:
      "Apa itu OpenClaw: AI agent open-source dan gratis yang berjalan di perangkat atau server sendiri dan dikendalikan lewat WhatsApp atau Telegram. Dijelaskan oleh Aurelius Ivan Wijaya, co-host OpenClaw Agenthon Indonesia dan pembuat installer training OpenClaw.",
    keywords: [
      "apa itu OpenClaw",
      "OpenClaw Indonesia",
      "OpenClaw AI agent",
      "OpenClaw adalah",
      "OpenClaw training Indonesia",
      "OpenClaw Agenthon Indonesia",
      "open source AI agent Indonesia",
      "pelatihan OpenClaw Indonesia",
      "OpenClaw self-hosted",
      "cara install OpenClaw",
    ],
    updated: "1 Juli 2026",
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    h1: "Apa itu OpenClaw?",
    h1sub: "AI agent open-source yang berjalan di infrastruktur Anda sendiri",
    lede: "OpenClaw adalah AI agent open-source dan gratis yang berjalan di perangkat atau server Anda sendiri, dikendalikan lewat aplikasi chat yang sudah dipakai sehari-hari seperti WhatsApp atau Telegram. Artikel ini adalah penjelasan independen dari Aurelius Ivan Wijaya, yang ikut co-host OpenClaw Agenthon Indonesia dan membangun installer yang dipakai peserta pelatihan untuk memasang OpenClaw dalam hitungan menit. OpenClaw sendiri adalah proyek terpisah milik Peter Steinberger.",
    authorNote:
      "co-host OpenClaw Agenthon Indonesia dan pembuat installer training OpenClaw",
    externalName: "openclaw.ai",
    externalUrl: "https://openclaw.ai",
    relatedHref: "/programs#openclaw",
    relatedLabel: "Lihat program OpenClaw Training",
    defId: {
      q: "Apa itu OpenClaw?",
      a: "OpenClaw adalah AI agent open-source dan gratis, dibuat oleh Peter Steinberger (pendiri PSPDFKit) dan dirilis dengan lisensi MIT awal 2026. OpenClaw berjalan di perangkat atau server milik Anda sendiri, dikendalikan lewat WhatsApp, Telegram, atau Slack, dan mengerjakan tugas nyata: membaca file, menjalankan perintah, mengotomasi browser, sampai mengelola email dan kalender.",
    },
    defEn: {
      q: "What is OpenClaw?",
      a: "OpenClaw is a free, open-source AI agent created by Peter Steinberger (founder of PSPDFKit) and released under the MIT license in early 2026. It runs on your own device or server, is controlled through WhatsApp, Telegram, or Slack, and carries out real tasks: reading files, running commands, automating a browser, and managing email and calendar.",
    },
    sections: [
      {
        h2: "Kenapa AI Training Indonesia menulis tentang OpenClaw",
        body: [
          "Aurelius Ivan Wijaya adalah salah satu dari delapan co-host OpenClaw Agenthon Indonesia, hackathon agent-building 12 jam yang diorganisir Build Club pada 15-16 Mei 2026 dengan 205 peserta terdaftar. Dari situ, ia membangun installer khusus yang menyiapkan VM OpenClaw lengkap dengan Tailscale dan akses Web UI dalam sekitar 5 menit, dipakai untuk peserta pelatihan yang sebagian besar non-teknis.",
          "OpenClaw sendiri adalah proyek open-source independen milik Peter Steinberger, tidak berafiliasi dengan AI Training Indonesia. Pengalaman memasang OpenClaw di VM peserta, lalu menangani masalah yang muncul di lapangan, menjadi dasar artikel ini dan materi pelatihan AI Training Indonesia.",
        ],
      },
      {
        h2: "Kenapa OpenClaw berbeda dari asisten AI lain",
        body: [
          "OpenClaw bersifat proaktif lewat heartbeat scheduler: agent bisa bangun pada interval tertentu dan menjalankan tugas tanpa menunggu perintah baru. Memorinya tersimpan lokal sebagai file Markdown di disk Anda sendiri.",
          "Kemampuan OpenClaw bisa diperluas lewat AgentSkills, format skill yang bisa dibangun komunitas untuk tugas baru. Karena open-source dan tidak ada biaya langganan, biaya yang muncul hanya dari API model AI yang Anda pakai sendiri (bring your own key).",
        ],
      },
      {
        h2: "Kenapa tim di Indonesia mulai memakai OpenClaw",
        body: [
          "WhatsApp adalah aplikasi chat paling dipakai di Indonesia, dan OpenClaw bisa dikendalikan langsung lewat WhatsApp tanpa tim perlu pindah ke tools baru. Karena berjalan di server sendiri, data dan riwayat percakapan tetap berada di infrastruktur yang dikendalikan tim, relevan untuk tim yang punya aturan kepatuhan data.",
          "Memasang OpenClaw dengan benar tetap butuh langkah teknis: server dengan Node.js versi 22.16 ke atas, konfigurasi akses jarak jauh yang aman, dan firewall yang tepat. Pelatihan AI Training Indonesia menutup jarak ini lewat sesi hands-on.",
        ],
      },
    ],
    features: {
      heading: "Yang membuat OpenClaw berbeda",
      intro:
        "Empat karakteristik OpenClaw yang paling relevan untuk tim yang mengevaluasinya.",
      items: [
        {
          title: "Dikendalikan lewat WhatsApp atau Telegram",
          detail:
            "Tidak perlu aplikasi atau dashboard baru. Tim memberi instruksi dan menerima laporan lewat aplikasi chat yang sudah dipakai setiap hari.",
        },
        {
          title: "Menjalankan tugas nyata",
          detail:
            "Membaca dan menulis file, menjalankan perintah sistem, mengontrol browser, serta mengelola email dan kalender secara langsung.",
        },
        {
          title: "Memori lokal, di server Anda sendiri",
          detail:
            "Riwayat dan konteks tersimpan sebagai file Markdown di server atau perangkat Anda sendiri, sehingga data tetap berada di infrastruktur yang Anda kendalikan.",
        },
        {
          title: "Bisa diperluas lewat AgentSkills",
          detail:
            "Komunitas membangun skill baru untuk OpenClaw dalam format yang bisa dipasang dan dibagikan, tanpa harus menunggu update resmi.",
        },
      ],
    },
    faqs: [
      {
        q: "Apa itu OpenClaw?",
        a: "OpenClaw adalah AI agent open-source dan gratis, dibuat oleh Peter Steinberger dan dirilis dengan lisensi MIT awal 2026. OpenClaw berjalan di perangkat atau server milik Anda sendiri, dikendalikan lewat WhatsApp, Telegram, atau Slack, dan menjalankan tugas nyata seperti membaca file, menjalankan perintah, mengotomasi browser, serta mengelola email dan kalender.",
      },
      {
        q: "Siapa yang membuat OpenClaw?",
        a: "OpenClaw dibuat oleh Peter Steinberger, pendiri PSPDFKit, dan dirilis sebagai proyek open-source dengan lisensi MIT awal 2026. Proyek ini sempat memakai nama Clawdbot lalu Moltbot sebelum akhirnya menetap dengan nama OpenClaw.",
      },
      {
        q: "Apakah OpenClaw gratis?",
        a: "OpenClaw sendiri gratis dan open-source, tanpa biaya langganan. Biaya yang muncul hanya dari API model AI yang dipakai untuk menjalankannya (bring your own key).",
      },
      {
        q: "Apa beda OpenClaw dengan ChatGPT atau asisten AI cloud lain?",
        a: "ChatGPT dan asisten cloud lain merespons saat diajak chat dan datanya diproses di server penyedia. OpenClaw berjalan di perangkat atau server Anda sendiri, bisa proaktif menjalankan tugas terjadwal lewat heartbeat scheduler, dan menyimpan memori secara lokal di server itu.",
      },
      {
        q: "What is OpenClaw?",
        a: "OpenClaw is a free, open-source AI agent created by Peter Steinberger and released under the MIT license in early 2026. It runs on your own device or server, is controlled through WhatsApp, Telegram, or Slack, and carries out real tasks such as reading files, running commands, automating a browser, and managing email and calendar.",
      },
      {
        q: "Apa itu OpenClaw Agenthon Indonesia?",
        a: "OpenClaw Agenthon Indonesia adalah hackathon agent-building 12 jam yang diorganisir Build Club secara online pada 15-16 Mei 2026, dengan 205 peserta terdaftar dan prize pool lebih dari Rp 12.000.000. Aurelius Ivan Wijaya menjadi salah satu dari delapan co-host. Detail lengkap komunitas penyelenggara ada di aitraining.id/partners/build-club.",
      },
      {
        q: "Apa beda artikel ini dengan program pelatihan OpenClaw?",
        a: "Artikel ini menjelaskan apa itu OpenClaw dan kenapa tim di Indonesia mulai memakainya, ditulis sebagai penjelasan independen, bukan materi pemasaran. Untuk kurikulum, durasi, dan cara memesan pelatihan, kunjungi halaman program OpenClaw Training di aitraining.id/programs#openclaw.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const ARTICLE_CALENDLY = CALENDLY;
