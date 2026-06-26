// Partner articles — editorial/explainer pages for each tool and community
// aitraining.id works with. Distinct from /programs/* (which sell the training
// program): these answer "what is X, why we partner with it, why it matters
// for Indonesian teams" and cross-link to the program page for booking.
//
// Honesty guardrails baked into copy (do not loosen without Ivan's sign-off):
//  - n8n: "Official n8n Ambassador for Indonesia"
//  - Cursor: "Cursor Ambassador Indonesia"; never imply ownership by SpaceX/xAI;
//    the dated acquisition block lives only on /programs/cursor, not here.
//  - HeyGen: "a HeyGen Ambassador" (non-exclusive; not "Official/the").
//  - Build Club: Ivan was one of 8 CO-HOSTS; Build Club is the organizer.
//  - Everything is agent building, never "prompting".

export type PartnerFaq = { q: string; a: string };
export type PartnerFeature = { title: string; detail: string };
export type PartnerSection = { h2: string; body: string[] };

export type Partner = {
  slug: string;
  name: string;
  logo: string;
  kind: "Tool" | "Community";
  category: string; // short kicker label, e.g. "Workflow Automation"
  credentialBadge: string; // e.g. "Official n8n Ambassador Indonesia"
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  updated: string; // human date, e.g. "24 Juni 2026"
  datePublished: string; // ISO, for Article schema
  dateModified: string; // ISO
  h1: string;
  h1sub: string;
  lede: string;
  externalName: string; // "n8n.io"
  externalUrl: string; // "https://n8n.io"
  programHref?: string; // internal program/booking destination
  programLabel?: string;
  defId: { q: string; a: string }; // definition block (Bahasa), 40-60 words
  defEn: { q: string; a: string }; // definition block (English)
  sections: PartnerSection[];
  features?: { heading: string; intro: string; items: PartnerFeature[] };
  faqs: PartnerFaq[];
};

const CALENDLY = "https://calendly.com/aureliusivanwijaya/30min";

export const partners: Partner[] = [
  {
    slug: "n8n",
    name: "n8n",
    logo: "/assets/clients/n8n.png",
    kind: "Tool",
    category: "Workflow Automation",
    credentialBadge: "Official n8n Ambassador Indonesia",
    metaTitle:
      "n8n di Indonesia: Workflow Automation & AI Agents | Official n8n Ambassador | aitraining.id",
    metaDescription:
      "Apa itu n8n, kenapa tim di Indonesia memakainya untuk workflow automation dan AI agents, dan bagaimana aitraining.id melatihnya. Disampaikan oleh Aurelius Ivan Wijaya, Official n8n Ambassador for Indonesia.",
    keywords: [
      "n8n Indonesia",
      "apa itu n8n",
      "n8n workflow automation",
      "n8n AI agent",
      "Official n8n Ambassador Indonesia",
      "pelatihan n8n Indonesia",
      "n8n self-hosted",
      "automation tools Indonesia",
    ],
    updated: "24 Juni 2026",
    datePublished: "2026-06-24",
    dateModified: "2026-06-24",
    h1: "n8n: workflow automation dan AI agents",
    h1sub: "untuk tim di Indonesia",
    lede: "n8n adalah platform workflow automation yang dipakai tim untuk menghubungkan aplikasi, menjalankan proses otomatis, dan membangun AI agent yang bekerja di seluruh tools bisnis. aitraining.id melatih tim perusahaan mengadopsi n8n melalui Official n8n Ambassador for Indonesia, Aurelius Ivan Wijaya.",
    externalName: "n8n.io",
    externalUrl: "https://n8n.io",
    programHref: "/programs#automation",
    programLabel: "Lihat program AI Workflow Automation",
    defId: {
      q: "Apa itu n8n?",
      a: "n8n adalah platform workflow automation yang bisa di-self-host. Tim memakainya untuk menghubungkan aplikasi, mengotomasi proses manual, dan membangun AI agent yang bertindak di seluruh tools bisnis melalui ratusan integrasi node. n8n cocok untuk tim operasi, marketing, HR, dan finance yang ingin menghemat jam kerja berulang.",
    },
    defEn: {
      q: "What is n8n?",
      a: "n8n is a workflow automation platform that teams can self-host. It connects apps, automates manual processes, and runs AI agents that act across business tools through hundreds of integration nodes. n8n suits operations, marketing, HR, and finance teams that want to remove repetitive manual work.",
    },
    sections: [
      {
        h2: "Kenapa aitraining.id bermitra dengan n8n",
        body: [
          "Aurelius Ivan Wijaya adalah Official n8n Ambassador for Indonesia. Peran ambassador adalah advokasi: memimpin adopsi n8n di tim perusahaan, berbagi pola workflow yang terbukti, dan menyampaikan corporate training tentang automation dengan n8n.",
          "Kemitraan ini membuat materi pelatihan aitraining.id berdiri di atas pemakaian n8n yang nyata. Setiap sesi dibangun dari workflow yang benar-benar dipakai tim untuk pekerjaan harian.",
        ],
      },
      {
        h2: "Kenapa tim di Indonesia memakai n8n",
        body: [
          "Banyak proses bisnis di Indonesia masih dikerjakan manual: menyalin data antar aplikasi, mengirim laporan rutin, memproses formulir, dan menjawab pesan berulang. n8n memindahkan pekerjaan ini ke workflow otomatis yang berjalan sendiri.",
          "Karena n8n bisa di-self-host, perusahaan bisa menjaga data tetap di infrastruktur sendiri. Ini penting untuk tim yang punya aturan kepatuhan data atau ingin kontrol penuh atas tempat data diproses.",
          "n8n juga menjadi fondasi untuk AI agent: tim bisa memasang model AI ke dalam workflow sehingga agent membaca konteks, mengambil keputusan, lalu bertindak di tools yang sudah berjalan.",
        ],
      },
    ],
    features: {
      heading: "Yang bisa dibangun tim dengan n8n",
      intro:
        "Empat pola yang paling sering dipakai tim perusahaan saat mengadopsi n8n.",
      items: [
        {
          title: "Otomasi proses lintas aplikasi",
          detail:
            "Menghubungkan email, spreadsheet, CRM, database, dan messaging lewat satu workflow yang berjalan otomatis setiap kali ada pemicu.",
        },
        {
          title: "AI agent di dalam workflow",
          detail:
            "Memasang model AI ke node n8n sehingga agent memproses data, mengambil keputusan, dan bertindak tanpa langkah manual.",
        },
        {
          title: "Integrasi ke tools yang sudah dipakai",
          detail:
            "Ratusan integrasi node membuat n8n menyambung ke tools bisnis yang sudah berjalan tanpa membongkar sistem yang ada.",
        },
        {
          title: "Self-hosting untuk kontrol data",
          detail:
            "Menjalankan n8n di infrastruktur perusahaan sendiri agar data tetap berada di tempat yang Anda kendalikan.",
        },
      ],
    },
    faqs: [
      {
        q: "Siapa Official n8n Ambassador di Indonesia?",
        a: "Aurelius Ivan Wijaya adalah Official n8n Ambassador for Indonesia. Ia memimpin adopsi workflow automation n8n dan menyampaikan corporate AI training tentang integrasi n8n melalui aitraining.id dan aurelivan.com.",
      },
      {
        q: "Who is the n8n ambassador in Indonesia?",
        a: "Aurelius Ivan Wijaya is the Official n8n Ambassador for Indonesia. He leads n8n workflow automation adoption and delivers corporate AI training on n8n integrations through aitraining.id and aurelivan.com.",
      },
      {
        q: "Apakah n8n gratis dan bisa di-self-host?",
        a: "n8n menyediakan opsi self-hosting, sehingga tim bisa menjalankannya di infrastruktur sendiri dan menjaga data tetap di tempat yang dikendalikan perusahaan. Tersedia juga versi cloud berbayar bagi tim yang tidak ingin mengelola server. Pemilihan opsi dibahas saat menyusun program pelatihan agar sesuai kebutuhan tim.",
      },
      {
        q: "Apa yang dipelajari dalam pelatihan n8n di aitraining.id?",
        a: "Peserta belajar membangun workflow automation, menghubungkan tools bisnis yang sudah dipakai, dan memasang AI agent ke dalam proses harian. Sebagian besar sesi berupa praktik langsung memakai use case tim Anda.",
      },
    ],
  },
  {
    slug: "cursor",
    name: "Cursor",
    logo: "/assets/clients/cursor.webp",
    kind: "Tool",
    category: "Agentic Development",
    credentialBadge: "Cursor Ambassador Indonesia",
    metaTitle:
      "Cursor di Indonesia: AI Coding Agent untuk Tim Engineering | Cursor Ambassador | aitraining.id",
    metaDescription:
      "Apa itu Cursor, kenapa tim engineering di Indonesia memakainya untuk agentic development, dan bagaimana aitraining.id melatihnya. Disampaikan oleh Cursor Ambassador Indonesia, Aurelius Ivan Wijaya.",
    keywords: [
      "Cursor Indonesia",
      "apa itu Cursor",
      "Cursor AI coding",
      "agentic development Indonesia",
      "Cursor Ambassador Indonesia",
      "AI coding agent Indonesia",
      "Cursor IDE",
    ],
    updated: "24 Juni 2026",
    datePublished: "2026-06-24",
    dateModified: "2026-06-24",
    h1: "Cursor: AI coding agent",
    h1sub: "untuk tim engineering di Indonesia",
    lede: "Cursor adalah platform AI coding yang dipakai tim engineering untuk membangun software dengan mengarahkan AI agent di seluruh codebase. aitraining.id melatih tim engineering mengadopsi agentic development dengan Cursor melalui Cursor Ambassador Indonesia, Aurelius Ivan Wijaya.",
    externalName: "cursor.com",
    externalUrl: "https://cursor.com",
    programHref: "/programs/cursor",
    programLabel: "Lihat program pelatihan Cursor",
    defId: {
      q: "Apa itu Cursor?",
      a: "Cursor adalah platform AI coding yang dipakai tim engineering untuk membangun software dengan mengarahkan AI agent. Developer memberi agent konteks codebase, menjalankan perubahan multi-file, lalu mereview hasilnya. Cursor menggeser fokus kerja dari menulis tiap baris kode ke mengarahkan agent dan menilai outputnya.",
    },
    defEn: {
      q: "What is Cursor?",
      a: "Cursor is an AI coding platform engineering teams use to build software by directing AI agents. Developers give the agent codebase context, run multi-file edits, then review the result. Cursor shifts the work from writing every line to directing agents and judging their output.",
    },
    sections: [
      {
        h2: "Kenapa aitraining.id bermitra dengan Cursor",
        body: [
          "Aurelius Ivan Wijaya adalah Cursor Ambassador di Indonesia. Peran ambassador adalah advokasi: memimpin adopsi agentic development dengan Cursor dan menyampaikan corporate training tentang cara tim mengarahkan AI coding agent.",
          "Ivan mengadopsi Cursor sejak awal, sebelum platform ini menjadi sorotan industri. Keyakinan awal itu kini menjadi dasar materi pelatihan yang berdiri di atas pemakaian Cursor sehari-hari di codebase nyata.",
        ],
      },
      {
        h2: "Kenapa tim engineering di Indonesia memakai Cursor",
        body: [
          "Cursor mengubah cara tim engineering bekerja: dari menulis tiap baris kode menjadi mengarahkan agent untuk membangun, mereview, dan mengirim software. Saat satu tim mengadopsinya bersama, praktik agentic development menyebar lebih cepat di seluruh tim.",
          "Cursor banyak diadopsi tim engineering, dan minat untuk melatih engineer memakainya ikut naik. Latar belakang perkembangan itu dibahas lengkap di halaman program Cursor.",
        ],
      },
    ],
    features: {
      heading: "Yang bisa dilakukan tim dengan Cursor",
      intro:
        "Empat kemampuan inti yang dilatih saat tim mengadopsi agentic development dengan Cursor.",
      items: [
        {
          title: "Mengarahkan agent di seluruh codebase",
          detail:
            "Memberi agent konteks codebase yang tepat, menjalankan perubahan multi-file, lalu mereview hasilnya dengan presisi.",
        },
        {
          title: "AI code review dan refactoring",
          detail:
            "Memakai Cursor sebagai reviewer untuk mendeteksi bug, menilai test coverage, dan melakukan refactoring berbasis agent.",
        },
        {
          title: "Membangun fitur AI ke produk berjalan",
          detail:
            "Integrasi API eksternal, implementasi RAG, dan pemasangan AI agent ke pipeline yang sudah ada.",
        },
        {
          title: "Standar tim untuk output agent",
          detail:
            "Menstandarkan konvensi, peer review untuk output AI, dan cara mengukur dampak adopsi pada velocity tim.",
        },
      ],
    },
    faqs: [
      {
        q: "Siapa Cursor Ambassador di Indonesia?",
        a: "Aurelius Ivan Wijaya adalah Cursor Ambassador di Indonesia. Ia memimpin adopsi agentic AI development dengan Cursor dan menyampaikan corporate AI training tentang Cursor melalui aitraining.id dan aurelivan.com.",
      },
      {
        q: "Who is the Cursor Ambassador in Indonesia?",
        a: "Aurelius Ivan Wijaya is the Cursor Ambassador for Indonesia. He leads enterprise adoption of agentic AI development with Cursor and delivers corporate training on Cursor through aitraining.id and aurelivan.com.",
      },
      {
        q: "Apa beda halaman ini dengan program pelatihan Cursor?",
        a: "Halaman ini menjelaskan apa itu Cursor dan kenapa tim engineering di Indonesia memakainya. Untuk kurikulum, durasi, dan cara memesan pelatihan, kunjungi halaman program pelatihan Cursor di aitraining.id/programs/cursor.",
      },
    ],
  },
  {
    slug: "build-club",
    name: "Build Club",
    logo: "/assets/clients/build-club.webp",
    kind: "Community",
    category: "AI Builder Community",
    credentialBadge: "Co-host OpenClaw Agenthon Indonesia",
    metaTitle:
      "Build Club di Indonesia: Komunitas AI Builder & OpenClaw Agenthon | aitraining.id",
    metaDescription:
      "Apa itu Build Club, komunitas AI builder global, dan bagaimana aitraining.id ikut menggerakkannya. Aurelius Ivan Wijaya co-host OpenClaw Agenthon Indonesia, hackathon agent-building yang diorganisir Build Club.",
    keywords: [
      "Build Club Indonesia",
      "apa itu Build Club",
      "komunitas AI Indonesia",
      "OpenClaw Agenthon Indonesia",
      "agent building hackathon Indonesia",
      "AI builder community",
    ],
    updated: "24 Juni 2026",
    datePublished: "2026-06-24",
    dateModified: "2026-06-24",
    h1: "Build Club: komunitas AI builder",
    h1sub: "dan OpenClaw Agenthon Indonesia",
    lede: "Build Club adalah komunitas AI builder global yang menjalankan hackathon dan acara agent-building di puluhan kota. Aurelius Ivan Wijaya co-host OpenClaw Agenthon Indonesia, hackathon agent-building yang diorganisir Build Club.",
    externalName: "OpenClaw Agenthon (Luma)",
    externalUrl: "https://luma.com/a8ynp66a",
    defId: {
      q: "Apa itu Build Club?",
      a: "Build Club adalah komunitas AI builder global dengan jangkauan 50+ kota dan 30.000+ anggota. Komunitas ini menjalankan hackathon, acara agent-building, dan program belajar bagi orang yang ingin membangun produk AI. Build Club mengorganisir OpenClaw Agenthon Indonesia yang ikut di-host Aurelius Ivan Wijaya.",
    },
    defEn: {
      q: "What is Build Club?",
      a: "Build Club is a global AI builder community spanning 50+ cities and 30,000+ members. It runs hackathons, agent-building events, and learning programs for people who want to build AI products. Build Club organized the OpenClaw Agenthon Indonesia, co-hosted by Aurelius Ivan Wijaya.",
    },
    sections: [
      {
        h2: "Kemitraan aitraining.id dengan Build Club",
        body: [
          "Aurelius Ivan Wijaya menjadi salah satu dari delapan co-host OpenClaw Agenthon Indonesia, sebuah hackathon agent-building selama 12 jam pada 15 sampai 16 Mei 2026, diselenggarakan online. Acara ini diorganisir oleh Build Club.",
          "Agenthon ini diikuti 205 peserta terdaftar dengan prize pool lebih dari Rp 12.000.000, termasuk jalur khusus untuk use case pembayaran. Fokusnya adalah membangun AI agent, sejalan dengan arah pelatihan aitraining.id.",
        ],
      },
      {
        h2: "Kenapa komunitas penting untuk adopsi AI",
        body: [
          "Adopsi AI di perusahaan berjalan lebih cepat ketika orang belajar dengan membangun bersama. Hackathon dan acara komunitas memberi tim ruang untuk mencoba ide agent dalam waktu singkat dan melihat apa yang benar-benar berjalan.",
          "Lewat peran co-host di acara Build Club, aitraining.id terhubung dengan jaringan builder yang aktif. Koneksi ini menjaga materi pelatihan tetap dekat dengan praktik agent-building terbaru.",
        ],
      },
    ],
    faqs: [
      {
        q: "Apa peran Aurelius Ivan Wijaya di OpenClaw Agenthon Indonesia?",
        a: "Aurelius Ivan Wijaya adalah salah satu dari delapan co-host OpenClaw Agenthon Indonesia. Acara ini diorganisir oleh Build Club, yang berperan sebagai penyelenggara.",
      },
      {
        q: "Kapan dan di mana OpenClaw Agenthon Indonesia berlangsung?",
        a: "OpenClaw Agenthon Indonesia berlangsung pada 15 sampai 16 Mei 2026 secara online. Acara ini adalah hackathon agent-building selama 12 jam dengan 205 peserta terdaftar dan prize pool lebih dari Rp 12.000.000.",
      },
      {
        q: "What is the OpenClaw Agenthon Indonesia?",
        a: "The OpenClaw Agenthon Indonesia was a 12-hour agent-building hackathon held online on 15 to 16 May 2026, organized by Build Club. It drew 205 registered participants and a prize pool of over IDR 12,000,000. Aurelius Ivan Wijaya was one of eight co-hosts.",
      },
    ],
  },
  {
    slug: "heygen",
    name: "HeyGen",
    logo: "/assets/clients/heygen.png",
    kind: "Tool",
    category: "AI Video Automation",
    credentialBadge: "HeyGen Ambassador",
    metaTitle:
      "HeyGen di Indonesia: AI Video Automation untuk Tim | HeyGen Ambassador | aitraining.id",
    metaDescription:
      "Apa itu HeyGen, kenapa tim di Indonesia memakainya untuk video automation, dan bagaimana aitraining.id melatihnya. Disampaikan oleh Aurelius Ivan Wijaya, HeyGen Ambassador.",
    keywords: [
      "HeyGen Indonesia",
      "apa itu HeyGen",
      "HeyGen AI video",
      "AI video automation Indonesia",
      "HeyGen Ambassador",
      "HeyGen API",
      "avatar video AI",
    ],
    updated: "24 Juni 2026",
    datePublished: "2026-06-24",
    dateModified: "2026-06-24",
    h1: "HeyGen: AI video automation",
    h1sub: "untuk tim di Indonesia",
    lede: "HeyGen adalah platform AI avatar video. aitraining.id memposisikannya sebagai mesin video automation: membangun pipeline yang menghasilkan video avatar yang dipersonalisasi dan multibahasa dalam skala besar. Disampaikan oleh HeyGen Ambassador, Aurelius Ivan Wijaya.",
    externalName: "heygen.com",
    externalUrl: "https://heygen.com",
    programHref: "/programs/heygen",
    programLabel: "Lihat program AI Video Automation",
    defId: {
      q: "Apa itu HeyGen?",
      a: "HeyGen adalah platform AI avatar video. Tim memakainya untuk membuat avatar kustom, menerjemahkan dan melokalkan video, serta menghasilkan video lewat API secara programatik. Lewat API dan n8n, HeyGen menjadi mesin video automation yang memproduksi video avatar personal dan multibahasa dalam skala besar.",
    },
    defEn: {
      q: "What is HeyGen?",
      a: "HeyGen is an AI avatar video platform. Teams use it to create custom avatars, translate and localize video, and generate video programmatically through an API. Paired with an API and n8n, HeyGen becomes a video automation engine that produces personalized, multilingual avatar video at scale.",
    },
    sections: [
      {
        h2: "Kenapa aitraining.id bermitra dengan HeyGen",
        body: [
          "Aurelius Ivan Wijaya adalah HeyGen Ambassador. Peran ambassador adalah advokasi: memperkenalkan cara tim memakai HeyGen untuk membangun video automation yang menghasilkan banyak video dari satu pipeline.",
          "aitraining.id membingkai HeyGen sebagai pipeline produksi video otomatis. Tim belajar menyambungkan HeyGen API dengan n8n agar video avatar dihasilkan otomatis dari data, sejalan dengan fokus agent-building dan automation.",
        ],
      },
      {
        h2: "Kenapa tim di Indonesia memakai HeyGen",
        body: [
          "Tim marketing, sales, L&D, dan content sering perlu memproduksi banyak video serupa: onboarding karyawan, sapaan personal untuk prospek, atau materi pelatihan dalam beberapa bahasa. Memproduksi satu per satu memakan waktu besar.",
          "Dengan HeyGen API dan n8n, produksi ini berubah menjadi pipeline otomatis. Data masuk, video avatar yang dipersonalisasi keluar, dan lokalisasi multibahasa berjalan dalam alur yang sama tanpa kerja manual berulang.",
        ],
      },
    ],
    features: {
      heading: "Yang bisa dibangun tim dengan HeyGen",
      intro:
        "Empat pola video automation yang paling berdampak untuk tim perusahaan.",
      items: [
        {
          title: "Avatar kustom untuk brand",
          detail:
            "Membuat avatar yang konsisten dengan brand untuk dipakai berulang di banyak video tanpa syuting baru.",
        },
        {
          title: "Video personal dalam skala besar",
          detail:
            "Menghasilkan video sapaan personal untuk onboarding atau outreach langsung dari data lewat HeyGen API.",
        },
        {
          title: "Lokalisasi multibahasa",
          detail:
            "Menerjemahkan dan melokalkan satu video ke beberapa bahasa untuk menjangkau audiens lintas wilayah.",
        },
        {
          title: "Pipeline HeyGen API plus n8n",
          detail:
            "Menyambungkan HeyGen ke n8n agar produksi video berjalan otomatis sebagai bagian dari workflow tim.",
        },
      ],
    },
    faqs: [
      {
        q: "Siapa HeyGen Ambassador di Indonesia?",
        a: "Aurelius Ivan Wijaya adalah HeyGen Ambassador yang berbasis di Indonesia. Ia memperkenalkan cara tim memakai HeyGen untuk membangun video automation dan menyampaikan corporate training tentang pipeline video avatar lewat aitraining.id dan aurelivan.com.",
      },
      {
        q: "Who is the HeyGen Ambassador in Indonesia?",
        a: "Aurelius Ivan Wijaya is a HeyGen Ambassador based in Indonesia. He shows teams how to use HeyGen to build video automation and delivers corporate training on avatar video pipelines through aitraining.id and aurelivan.com.",
      },
      {
        q: "Apa beda halaman ini dengan program pelatihan HeyGen?",
        a: "Halaman ini menjelaskan apa itu HeyGen dan kenapa tim di Indonesia memakainya untuk video automation. Untuk kurikulum, durasi, dan cara memesan pelatihan, kunjungi halaman program AI Video Automation di aitraining.id/programs/heygen.",
      },
    ],
  },
];

export function getPartner(slug: string): Partner | undefined {
  return partners.find((p) => p.slug === slug);
}

export const PARTNER_CALENDLY = CALENDLY;
