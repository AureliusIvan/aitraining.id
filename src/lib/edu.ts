// Edu: the tool-by-tool learning surface for AI Training Indonesia.
//
// One content model, two renders. Each module is authored as an array of
// `slides`. In web mode the slides stack into a normal scrolling page (good for
// SEO and for reading in detail). In presentation mode the SAME slides render
// one-per-screen with page numbers, watermark, and QR. So author each slide to
// fit a single 16:9 screen; when a topic needs more depth, add another slide
// rather than overloading one. A block may set `webOnly: true` when it is extra
// reading that should show on the page but stay off the projected slide.
//
// Everything here is PURE, serializable data (no JSX, no functions) so it can be
// rendered server-side (crawlable HTML) and also handed to the client
// presentation overlay untouched.
//
// House rules honored: Bahasa-first, very basic language, no "prompting" framing
// (Skills are reusable capabilities you package once and call by name), no
// em-dashes, no "X bukan Y" comparison-by-foil, claims grounded in how Claude
// skills actually work (a folder under `.claude/skills/<name>/` with a
// `SKILL.md`, invoked by typing `/<name>`).

export type EduStep = { text: string; hint?: string };

type BlockBase = { webOnly?: boolean };

export type EduBlock = BlockBase &
  (
    | { type: "lead"; text: string }
    | { type: "paragraph"; text: string }
    | { type: "steps"; items: EduStep[] }
    | {
        type: "cards";
        items: { title: string; text: string }[];
      }
    | {
        type: "callout";
        tone?: "info" | "tip" | "warn";
        title?: string;
        text: string;
      }
    | { type: "code"; caption?: string; lines: string[] }
    | {
        type: "gif";
        // When `src` is empty the page renders a labelled placeholder frame
        // built from `describe`. Set `src` once the real clip is recorded.
        src?: string;
        alt: string;
        caption: string;
        describe: string;
      }
  );

export type EduSlide = {
  id: string; // anchor + react key, kebab-case
  kicker?: string;
  title: string;
  subtitle?: string;
  blocks: EduBlock[];
};

export type EduFaq = { q: string; a: string };

export type EduSource = { label: string; url: string };

export type EduModule = {
  toolSlug: string; // "claude"
  toolName: string; // "Claude"
  slug: string; // "skills"
  moduleName: string; // "Skills"
  level: string; // "Level dasar"
  readingLabel: string; // "sekitar 10 menit"
  h1: string;
  tagline: string;
  heroLede: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  updated: string; // human date
  datePublished: string; // ISO
  dateModified: string; // ISO
  slides: EduSlide[];
  faqs: EduFaq[];
  // Feeds HowTo JSON-LD for the "cara membuat skill" query.
  howto: { name: string; steps: { name: string; text: string }[] };
  sources: EduSource[];
};

export type EduToolStatus = "live" | "soon";

export type EduToolModuleRef = {
  slug: string;
  name: string;
  blurb: string;
  status: EduToolStatus;
};

export type EduTool = {
  slug: string;
  name: string;
  tagline: string;
  status: EduToolStatus;
  accent: string; // hex, used for the tool card accent
  modules: EduToolModuleRef[];
};

// ---------------------------------------------------------------------------
// Tools shown on the /edu index. Claude is live with the Skills module. Cursor
// and ChatGPT Agent are listed as upcoming so the tool-by-tool grouping (the
// SEO structure Ivan asked for) reads clearly from day one.
// ---------------------------------------------------------------------------

export const eduTools: EduTool[] = [
  {
    slug: "claude",
    name: "Claude",
    tagline: "Asisten AI dari Anthropic untuk kerja sehari-hari dan membangun agent.",
    status: "live",
    accent: "#B3282D",
    modules: [
      {
        slug: "skills",
        name: "Skills",
        blurb:
          "Jurus siap pakai yang Anda ajarkan sekali ke Claude, lalu dipanggil hanya dengan mengetik namanya.",
        status: "live",
      },
    ],
  },
  {
    slug: "cursor",
    name: "Cursor",
    tagline: "Editor kode dengan AI untuk membangun perangkat lunak lebih cepat.",
    status: "soon",
    accent: "#4B5563",
    modules: [],
  },
  {
    slug: "chatgpt-agent",
    name: "ChatGPT Agent",
    tagline: "Mode agent di ChatGPT yang bisa mengerjakan tugas bertahap untuk Anda.",
    status: "soon",
    accent: "#10A37F",
    modules: [],
  },
];

// ---------------------------------------------------------------------------
// Modules (full content).
// ---------------------------------------------------------------------------

const claudeSkills: EduModule = {
  toolSlug: "claude",
  toolName: "Claude",
  slug: "skills",
  moduleName: "Skills",
  level: "Level dasar",
  readingLabel: "sekitar 10 menit",
  h1: "Skills di Claude",
  tagline: "Ajarkan cara kerja Anda sekali, panggil kapan saja.",
  heroLede:
    "Skills adalah cara Anda menyimpan sebuah cara kerja ke dalam Claude satu kali, lalu memanggilnya kembali kapan saja hanya dengan mengetik namanya. Halaman ini menjelaskannya dari nol untuk Anda yang baru mengenal AI: apa itu Skills, di mana letaknya, bagaimana cara memakainya lewat tombol garis miring, dan bagaimana membuat skill pertama Anda.",
  metaTitle: "Apa itu Skills di Claude? Panduan Dasar untuk Pemula",
  metaDescription:
    "Penjelasan dasar Skills di Claude untuk pemula: apa itu skill, di mana letak file SKILL.md, cara menjalankannya dengan mengetik garis miring, dan cara membuat skill pertama Anda. Dari AI Training Indonesia oleh Aurelius Ivan Wijaya.",
  keywords: [
    "apa itu skills claude",
    "claude skills adalah",
    "cara membuat skill claude",
    "skill claude untuk pemula",
    "cara pakai skill claude",
    "SKILL.md",
    "slash command claude",
    "claude code skills",
    "belajar claude bahasa indonesia",
    "tutorial claude skills",
  ],
  updated: "17 Juli 2026",
  datePublished: "2026-07-17",
  dateModified: "2026-07-17",
  slides: [
    {
      id: "apa-itu",
      kicker: "Claude · Modul Skills",
      title: "Apa itu Skills di Claude?",
      subtitle: "Mulai dari analogi yang paling sederhana.",
      blocks: [
        {
          type: "lead",
          text: "Bayangkan Anda punya asisten baru. Setiap kali Anda minta bantuan, Anda harus menjelaskan ulang cara kerjanya dari awal. Skills membuat penjelasan itu cukup sekali. Anda simpan cara kerjanya, beri nama, lalu panggil namanya setiap kali dibutuhkan.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Analogi singkat",
          text: "Skill itu seperti jurus yang sudah Anda ajarkan ke Claude. Sekali diajarkan, tinggal sebut namanya dan Claude langsung tahu harus melakukan apa.",
        },
        {
          type: "paragraph",
          text: "Jadi sebuah skill berisi dua hal: nama supaya mudah dipanggil, dan langkah kerja yang ingin Claude lakukan. Di halaman ini kita akan buka satu per satu.",
          webOnly: true,
        },
      ],
    },
    {
      id: "kenapa-berguna",
      kicker: "Kenapa penting",
      title: "Kenapa Skills berguna?",
      subtitle: "Tiga alasan yang langsung terasa saat pertama dipakai.",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "Hemat waktu",
              text: "Cara kerja yang sama tidak perlu dijelaskan berulang. Ketik namanya, selesai.",
            },
            {
              title: "Cara kerja konsisten",
              text: "Karena langkahnya tersimpan, Claude mengikuti cara yang sama setiap kali, siapa pun yang memanggilnya.",
            },
            {
              title: "Mudah dibagikan",
              text: "Satu skill bisa dipakai seluruh tim. Cukup bagikan foldernya, semua orang punya jurus yang sama.",
            },
          ],
        },
      ],
    },
    {
      id: "di-mana",
      kicker: "Letak file",
      title: "Di mana Skills berada?",
      subtitle: "Sebuah skill adalah satu folder berisi satu file.",
      blocks: [
        {
          type: "paragraph",
          text: "Setiap skill tinggal di dalam folder bernama sesuai skill itu, dan di dalamnya ada satu file utama bernama SKILL.md. Struktur foldernya seperti ini:",
        },
        {
          type: "code",
          caption: "Struktur folder sebuah skill",
          lines: [
            ".claude/",
            "└── skills/",
            "    └── ringkas-rapat/",
            "        └── SKILL.md",
          ],
        },
        {
          type: "cards",
          items: [
            {
              title: "Skill proyek",
              text: "Diletakkan di folder .claude/skills/ di dalam proyek. Hanya aktif saat Anda bekerja di proyek itu.",
            },
            {
              title: "Skill pribadi",
              text: "Diletakkan di ~/.claude/skills/ di komputer Anda. Aktif di semua proyek yang Anda buka.",
            },
          ],
        },
      ],
    },
    {
      id: "isi-skill",
      kicker: "Isi file",
      title: "Apa isi sebuah SKILL.md?",
      subtitle: "Dua bagian saja: identitas dan instruksi.",
      blocks: [
        {
          type: "paragraph",
          text: "File SKILL.md dibuka dengan blok identitas di antara dua garis tiga strip, lalu diikuti instruksinya dalam bahasa biasa. Contoh sederhana:",
        },
        {
          type: "code",
          caption: "Contoh SKILL.md",
          lines: [
            "---",
            "name: ringkas-rapat",
            "description: Merangkum catatan rapat jadi poin dan daftar tugas.",
            "---",
            "",
            "Ringkas catatan rapat berikut menjadi:",
            "1. Tiga poin utama.",
            "2. Daftar tugas beserta penanggung jawabnya.",
            "3. Keputusan yang sudah disepakati.",
          ],
        },
        {
          type: "cards",
          items: [
            {
              title: "name",
              text: "Nama singkat skill. Inilah yang Anda ketik setelah garis miring untuk memanggilnya.",
            },
            {
              title: "description",
              text: "Penjelasan singkat tentang kapan skill ini dipakai, supaya mudah dikenali di daftar.",
            },
          ],
        },
      ],
    },
    {
      id: "cara-menjalankan",
      kicker: "Cara memakai",
      title: "Menjalankannya: ketik garis miring",
      subtitle: "Semua skill dipanggil dengan cara yang sama.",
      blocks: [
        {
          type: "steps",
          items: [
            { text: "Ketik tanda garis miring ( / ) di kolom obrolan." },
            {
              text: "Daftar skill yang tersedia akan muncul secara otomatis.",
              hint: "Anda bisa mengetik beberapa huruf nama skill untuk menyaring daftarnya.",
            },
            { text: "Pilih skill yang Anda mau, lalu tekan Enter." },
            { text: "Claude langsung menjalankan langkah-langkah di dalam skill itu." },
          ],
        },
        {
          type: "gif",
          src: "",
          alt: "Mengetik garis miring lalu daftar skill muncul di Claude",
          caption: "Ketik / lalu daftar skill muncul.",
          describe:
            "GIF: kursor mengetik tanda / di kolom obrolan, daftar skill muncul, lalu satu skill dipilih.",
        },
      ],
    },
    {
      id: "contoh-nyata",
      kicker: "Contoh",
      title: "Contoh saat dipakai",
      subtitle: "Misalnya Anda punya skill bernama ringkas-rapat.",
      blocks: [
        {
          type: "paragraph",
          text: "Anda tempel catatan rapat yang panjang, lalu panggil skill dengan mengetik namanya. Claude mengikuti langkah yang sudah Anda simpan tadi dan mengembalikan rangkuman yang rapi.",
        },
        {
          type: "code",
          caption: "Yang Anda ketik",
          lines: ["/ringkas-rapat"],
        },
        {
          type: "gif",
          src: "",
          alt: "Menjalankan skill ringkas-rapat dan hasil rangkuman muncul",
          caption: "Satu perintah, hasil langsung keluar.",
          describe:
            "GIF: skill /ringkas-rapat dijalankan atas sebuah catatan rapat, lalu hasil rangkuman berupa poin dan daftar tugas muncul.",
        },
      ],
    },
    {
      id: "buat-skill",
      kicker: "Praktik",
      title: "Membuat skill pertama Anda",
      subtitle: "Empat langkah, tanpa perlu bisa coding.",
      blocks: [
        {
          type: "steps",
          items: [
            {
              text: "Buat folder baru di dalam .claude/skills/ dan beri nama skill Anda.",
              hint: "Contoh: .claude/skills/ringkas-rapat/",
            },
            { text: "Di dalam folder itu, buat file bernama SKILL.md." },
            {
              text: "Isi file dengan blok identitas (name dan description) lalu tulis instruksinya dalam bahasa biasa.",
            },
            {
              text: "Buka Claude, ketik garis miring, dan panggil skill baru Anda.",
            },
          ],
        },
        {
          type: "gif",
          src: "",
          alt: "Membuat folder skill dan file SKILL.md lalu memanggilnya",
          caption: "Dari folder kosong sampai skill yang bisa dipanggil.",
          describe:
            "GIF: membuat folder skill, membuat file SKILL.md, mengisinya, lalu memanggil skill lewat garis miring.",
        },
      ],
    },
    {
      id: "tips",
      kicker: "Supaya rapi",
      title: "Tips dan kesalahan umum",
      subtitle: "Tiga hal kecil yang membuat skill Anda jauh lebih andal.",
      blocks: [
        {
          type: "callout",
          tone: "tip",
          title: "Tulis description yang jelas",
          text: "Deskripsi yang jelas membuat skill mudah dikenali saat Anda mencarinya di daftar.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Satu skill untuk satu tugas",
          text: "Skill yang fokus lebih mudah dipanggil dan dirawat. Sebaiknya satu skill menangani satu tugas.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Pasang hanya dari sumber terpercaya",
          text: "Skill berisi instruksi yang akan dijalankan Claude. Pastikan Anda memahami isinya sebelum memasang skill buatan orang lain.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Apakah saya perlu bisa coding untuk membuat skill?",
      a: "Tidak. Sebuah skill pada dasarnya adalah instruksi dalam bahasa biasa yang disimpan di file SKILL.md. Anda cukup menulis langkah kerja yang Anda mau, mirip menulis catatan untuk rekan kerja.",
    },
    {
      q: "Di mana file skill saya disimpan?",
      a: "Di dalam folder .claude/skills/ untuk skill yang khusus satu proyek, atau di ~/.claude/skills/ untuk skill pribadi yang aktif di semua proyek. Setiap skill adalah satu folder yang berisi file SKILL.md.",
    },
    {
      q: "Bagaimana cara memanggil skill?",
      a: "Ketik tanda garis miring ( / ) di kolom obrolan, pilih skill dari daftar yang muncul, lalu tekan Enter. Anda juga bisa mengetik sebagian nama skill untuk menyaring daftarnya.",
    },
    {
      q: "Apa bedanya name dan description di SKILL.md?",
      a: "name adalah nama singkat yang Anda ketik untuk memanggil skill. description adalah penjelasan satu kalimat tentang kapan skill itu sebaiknya dipakai, supaya mudah dikenali saat Anda memilihnya dari daftar.",
    },
    {
      q: "Apakah satu skill bisa dipakai seluruh tim?",
      a: "Bisa. Karena skill hanyalah sebuah folder, Anda dapat membagikannya ke rekan tim atau menyimpannya di dalam proyek bersama, sehingga semua orang memakai cara kerja yang sama.",
    },
  ],
  howto: {
    name: "Cara membuat skill pertama di Claude",
    steps: [
      {
        name: "Buat folder skill",
        text: "Buat folder baru di dalam .claude/skills/ dan beri nama sesuai skill Anda.",
      },
      {
        name: "Buat file SKILL.md",
        text: "Di dalam folder itu, buat file bernama SKILL.md.",
      },
      {
        name: "Isi identitas dan instruksi",
        text: "Tulis blok identitas berisi name dan description, lalu tuliskan langkah kerja dalam bahasa biasa.",
      },
      {
        name: "Panggil lewat garis miring",
        text: "Buka Claude, ketik garis miring, pilih skill Anda, lalu tekan Enter.",
      },
    ],
  },
  sources: [
    {
      label: "Anthropic: What are skills?",
      url: "https://support.claude.com/en/articles/12512176-what-are-skills",
    },
    {
      label: "Anthropic: How to create custom skills",
      url: "https://support.claude.com/en/articles/12512198-how-to-create-custom-skills",
    },
  ],
};

export const eduModules: EduModule[] = [claudeSkills];

// ---------------------------------------------------------------------------
// Lookups.
// ---------------------------------------------------------------------------

export function getEduModule(
  toolSlug: string,
  slug: string,
): EduModule | undefined {
  return eduModules.find((m) => m.toolSlug === toolSlug && m.slug === slug);
}

export function getEduTool(slug: string): EduTool | undefined {
  return eduTools.find((t) => t.slug === slug);
}
