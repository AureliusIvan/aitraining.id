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
  {
    slug: "apa-itu-claude-for-chrome",
    category: "Claude Tools Explained",
    metaTitle:
      "Apa itu Claude for Chrome? Extensi Browser Claude yang Bisa Klik dan Isi Form | AI Training Indonesia",
    metaDescription:
      "Apa itu Claude for Chrome: ekstensi Chrome dari Anthropic yang membuat Claude bisa membaca halaman, mengklik, menavigasi, dan mengisi form di browser. Penjelasan independen dari Aurelius Ivan Wijaya untuk tim di Indonesia.",
    keywords: [
      "apa itu Claude for Chrome",
      "Claude in Chrome",
      "Claude Chrome extension",
      "Claude for Chrome adalah",
      "cara pakai Claude di Chrome",
      "ekstensi Claude Chrome",
      "Claude browser agent",
      "Claude Cowork Chrome",
      "Claude Code Chrome",
      "pelatihan Claude Indonesia",
    ],
    updated: "18 Juli 2026",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    h1: "Apa itu Claude for Chrome?",
    h1sub:
      "Ekstensi Chrome yang membuat Claude bisa bekerja langsung di tab browser Anda",
    lede: "Claude for Chrome adalah ekstensi Google Chrome dari Anthropic yang membuat Claude bisa membaca halaman web, mengklik, menavigasi, dan mengisi form bersama Anda. Fitur ini tersedia untuk paket berbayar (Pro, Max, Team, dan Enterprise), berstatus beta di browser Chrome, dan juga bisa dipakai bersama Claude Cowork serta Claude Code. Artikel ini adalah penjelasan independen dari Aurelius Ivan Wijaya berdasarkan dokumentasi resmi Anthropic dan praktik pelatihan Claude untuk tim di Indonesia.",
    authorNote:
      "pelatih Claude untuk tim korporat di Indonesia; tidak berafiliasi dengan Anthropic",
    externalName: "claude.com/claude-for-chrome",
    externalUrl: "https://claude.com/claude-for-chrome",
    relatedHref: "/programs/claude",
    relatedLabel: "Lihat program Claude Training",
    defId: {
      q: "Apa itu Claude for Chrome?",
      a: "Claude for Chrome (juga disebut Claude in Chrome) adalah ekstensi Google Chrome dari Anthropic. Claude bisa membaca isi halaman, mengklik, mengetik, menavigasi antar tab, dan mengisi form di browser. Anda bisa membukanya lewat panel samping Chrome, atau menghubungkannya dari Claude Desktop, Cowork, dan Claude Code. Fitur ini tersedia di paket Pro, Max, Team, dan Enterprise.",
    },
    defEn: {
      q: "What is Claude for Chrome?",
      a: "Claude for Chrome (also called Claude in Chrome) is Anthropic’s Google Chrome extension. Claude can read page content, click, type, navigate tabs, and fill forms in the browser. You can open it from the Chrome side panel, or connect it from Claude Desktop, Cowork, and Claude Code. It is available on Pro, Max, Team, and Enterprise plans.",
    },
    sections: [
      {
        h2: "Kenapa AI Training Indonesia menulis tentang Claude for Chrome",
        body: [
          "Aurelius Ivan Wijaya melatih tim di Indonesia memakai Claude untuk kerja sehari-hari dan membangun agent. Banyak peserta sudah memakai Claude di web atau Desktop, lalu bertanya bagaimana Claude bisa ikut mengerjakan tugas yang terjadi di dalam browser: membuka dashboard, menyalin angka, mengisi form, atau menguji situs yang baru dibangun.",
          "Claude for Chrome menjawab kebutuhan itu. Artikel ini merangkum cara kerjanya dari dokumentasi resmi Anthropic (support.claude.com dan claude.com/claude-for-chrome), lalu menempatkannya dalam konteks pelatihan: kapan fitur ini berguna untuk tim, dan risiko apa yang harus dipahami sebelum mengaktifkannya di akun kerja.",
          "AI Training Indonesia tidak berafiliasi dengan Anthropic. Detail produk, harga paket, dan ketersediaan bisa berubah; selalu cek halaman resmi Claude sebelum memutuskan adopsi di organisasi.",
        ],
      },
      {
        h2: "Apa yang bisa dilakukan Claude di Chrome",
        body: [
          "Setelah ekstensi terpasang dan izin diberikan, Claude bisa melihat halaman yang sedang dibuka, lalu bertindak seperti pengguna: mengklik tombol, mengetik di kolom, pindah tab, mengisi formulir, dan mengunduh file jika tugasnya meminta itu. Anthropic juga menyediakan navigasi bawaan untuk beberapa platform umum seperti Gmail, Google Docs, Google Calendar, Slack, dan GitHub.",
          "Kemampuan lain yang relevan untuk kerja rutin: merekam alur kerja agar bisa diulang, menyimpan instruksi yang sudah terbukti sebagai shortcut (dipanggil dengan garis miring), menjadwalkan tugas berulang, membaca console browser untuk debugging, dan tetap menjalankan alur di latar belakang selama Chrome terbuka.",
          "Claude for Chrome bisa dipasangkan dengan Claude Cowork. Chrome mengerjakan riset dan aksi di web; Cowork menyusun hasil menjadi berkas seperti spreadsheet, deck, atau laporan tanpa salin-tempel manual.",
        ],
      },
      {
        h2: "Cara memasang dan membuka Claude for Chrome",
        body: [
          "Claude for Chrome hanya didukung di Google Chrome di desktop. Browser Chromium lain dan perangkat mobile belum didukung menurut dokumentasi resmi Anthropic.",
          "Langkah ringkas: buka Chrome Web Store, cari ekstensi Claude, klik Add to Chrome, masuk dengan akun Claude berbayar, pin ikon Claude di toolbar, lalu berikan izin yang diminta. Klik ikon Claude untuk membuka panel samping yang tetap terlihat saat Anda browsing.",
          "Dari Claude Desktop, aktifkan konektor Claude in Chrome lewat Settings → Connectors, lalu nyalakan konektor itu per percakapan. Dari situ, tugas yang butuh aksi di situs bisa dibuka langsung di Chrome tanpa pindah jendela kerja.",
        ],
      },
      {
        h2: "Risiko yang perlu dipahami sebelum dipakai di kerja",
        body: [
          "Claude for Chrome memberi Claude akses langsung ke situs yang Anda buka. Anthropic menyatakan fitur ini masih berisiko meski sudah dilengkapi pengaman, dan meminta pengguna membaca panduan Using Claude in Chrome safely sebelum memakai.",
          "Risiko utama yang disebut Anthropic termasuk prompt injection: instruksi tersembunyi di halaman web yang mencoba mengalihkan tindakan Claude. Anthropic menganjurkan memulai dari situs yang dipercaya, mengonfirmasi aksi sensitif (keuangan, data pribadi, keputusan kritis), dan menghentikan sesi jika perilaku Claude terlihat tidak wajar.",
          "Di paket Team dan Enterprise, admin organisasi bisa mengontrol ketersediaan ekstensi serta daftar situs yang diizinkan atau diblokir. Jika instalasi gagal di akun perusahaan, hubungi admin terlebih dahulu.",
        ],
      },
      {
        h2: "Kenapa topik ini relevan untuk tim di Indonesia",
        body: [
          "Banyak pekerjaan kantor di Indonesia sudah berjalan di Chrome: email, spreadsheet online, CRM, dashboard analytics, dan portal internal. Claude for Chrome menempatkan agent di permukaan kerja yang sama, sehingga tugas riset web, ringkasan tab, dan pengisian form berulang bisa dikerjakan tanpa memindahkan konteks ke chat terpisah.",
          "Untuk developer, integrasi dengan Claude Code memungkinkan alur bangun-uji-verifikasi: kode ditulis di terminal atau editor, lalu diuji di browser dengan Claude yang bisa membaca error console, network request, dan keadaan DOM.",
          "Adopsi yang aman tetap butuh kebijakan internal: situs mana yang boleh diakses Claude, aksi mana yang wajib dikonfirmasi manusia, dan siapa yang boleh memasang ekstensi di perangkat kerja. Pelatihan Claude AI Training Indonesia membahas pola agent building di permukaan Claude yang dipakai tim, termasuk kapan browser automation masuk ke alur kerja.",
        ],
      },
    ],
    features: {
      heading: "Yang perlu Anda ingat tentang Claude for Chrome",
      intro:
        "Enam poin praktis dari dokumentasi resmi Anthropic yang paling relevan untuk evaluasi awal.",
      items: [
        {
          title: "Bekerja di tab Chrome yang sedang dibuka",
          detail:
            "Claude membaca halaman, mengklik, mengetik, menavigasi, dan mengisi form dari panel samping atau dari konektor di Desktop, Cowork, dan Claude Code.",
        },
        {
          title: "Tersedia di paket berbayar",
          detail:
            "Menurut Anthropic, Claude in Chrome tersedia untuk Pro, Max, Team, dan Enterprise. Di Chrome statusnya beta; di Cowork dan Claude Code sudah generally available.",
        },
        {
          title: "Chrome desktop saja",
          detail:
            "Instalasi resmi mengarah ke Google Chrome di desktop. Browser Chromium lain dan mobile belum didukung.",
        },
        {
          title: "Bisa dijadwalkan dan dijalankan di latar",
          detail:
            "Shortcut dan alur kerja bisa dijadwalkan harian sampai tahunan. Claude bisa terus bekerja saat Anda pindah tab, selama Chrome tetap terbuka.",
        },
        {
          title: "Terhubung ke Cowork dan Claude Code",
          detail:
            "Cowork bisa menyusun deliverable dari hasil riset browser. Claude Code bisa memakai ekstensi untuk uji dan debug di situs yang baru dibangun.",
        },
        {
          title: "Butuh pengawasan untuk aksi sensitif",
          detail:
            "Anthropic menyarankan menghindari transaksi keuangan, pengelolaan password, dan data pribadi berisiko tinggi tanpa pengawasan ketat.",
        },
      ],
    },
    faqs: [
      {
        q: "Apa itu Claude for Chrome?",
        a: "Claude for Chrome (Claude in Chrome) adalah ekstensi Google Chrome dari Anthropic yang memungkinkan Claude membaca halaman, mengklik, mengetik, menavigasi tab, dan mengisi form di browser. Fitur ini tersedia untuk paket Pro, Max, Team, dan Enterprise.",
      },
      {
        q: "Apakah Claude for Chrome gratis?",
        a: "Menurut dokumentasi resmi Anthropic, Claude in Chrome tersedia untuk semua paket berbayar: Pro, Max, Team, dan Enterprise. Paket gratis tidak termasuk akses fitur ini.",
      },
      {
        q: "Bagaimana Claude for Chrome dipakai dibanding chat Claude biasa?",
        a: "Chat Claude biasa menjawab di jendela chat; Anda membawa konteks dari browser ke percakapan itu. Claude for Chrome bekerja di tab Chrome yang sama: Claude melihat halaman dan bisa melakukan aksi di situs atas permintaan Anda.",
      },
      {
        q: "Bagaimana cara memasang Claude for Chrome?",
        a: "Buka Google Chrome di desktop, pasang ekstensi Claude dari Chrome Web Store, masuk dengan akun Claude berbayar, pin ikon Claude, lalu berikan izin yang diminta. Buka panel samping lewat ikon Claude di toolbar.",
      },
      {
        q: "Apakah aman dipakai untuk akun kerja?",
        a: "Anthropic menyebut Claude in Chrome masih berisiko, termasuk prompt injection dari konten halaman. Mulai dari situs tepercaya, konfirmasi aksi sensitif, dan ikuti kebijakan admin jika Anda memakai paket Team atau Enterprise.",
      },
      {
        q: "What is Claude for Chrome?",
        a: "Claude for Chrome (also called Claude in Chrome) is Anthropic’s Google Chrome extension that lets Claude read pages, click, type, navigate tabs, and fill forms in the browser. It is available on Pro, Max, Team, and Enterprise plans.",
      },
      {
        q: "Apa beda artikel ini dengan program pelatihan Claude?",
        a: "Artikel ini menjelaskan apa itu Claude for Chrome berdasarkan dokumentasi resmi Anthropic, ditulis sebagai penjelasan independen. Untuk kurikulum dan pemesanan pelatihan Claude, kunjungi aitraining.id/programs/claude.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const ARTICLE_CALENDLY = CALENDLY;
