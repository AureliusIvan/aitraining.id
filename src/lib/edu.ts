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

export type EduMotionScene =
  | "claude-skill"
  | "claude-skill-benefits"
  | "edu-storyboard";

export type EduStoryboardIcon =
  | "folder"
  | "file"
  | "slash"
  | "select"
  | "enter"
  | "spark"
  | "notes"
  | "list"
  | "plus"
  | "search"
  | "trigger"
  | "message"
  | "sheet"
  | "node"
  | "tag"
  | "test"
  | "lock"
  | "settings";

export type EduStoryboardItem = {
  label: string;
  icon: EduStoryboardIcon;
  tone?: "red" | "blue" | "yellow" | "clay" | "green";
};

type EduMotionBlock = {
  type: "motion";
  alt: string;
  caption: string;
} & (
  | {
      scene: "claude-skill";
      command: string;
      output: string;
    }
  | {
      scene: "claude-skill-benefits";
    }
  | {
      scene: "edu-storyboard";
      items: EduStoryboardItem[];
    }
);

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
    | EduMotionBlock
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

// A hard-to-translate technical term. Inside slide-block prose, wrap the term in
// double brackets ([[SKILL.md]]) and the renderer turns it into a wavy-underlined
// word that pops a short definition on click. `term` must match the bracketed key
// exactly. Keep markers out of FAQ/HowTo/meta strings (those feed JSON-LD).
export type EduGlossaryEntry = { term: string; def: string };

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
  glossary: EduGlossaryEntry[];
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
    tagline:
      "Asisten AI dari Anthropic untuk kerja sehari-hari dan membangun agent.",
    status: "live",
    accent: "#B3282D",
    modules: [
      {
        slug: "skills",
        name: "Skills",
        blurb:
          "Jurus siap pakai yang kamu ajarkan sekali ke Claude, lalu dipanggil hanya dengan mengetik namanya.",
        status: "live",
      },
    ],
  },
  {
    slug: "n8n",
    name: "n8n",
    tagline:
      "Alat otomatisasi alur kerja. Kamu susun langkah lewat kotak-kotak tanpa banyak ngoding.",
    status: "live",
    accent: "#EA4B71",
    modules: [
      {
        slug: "node",
        name: "Node",
        blurb:
          "Kenali unit paling dasar di n8n: node, satu kotak yang mengerjakan satu tugas.",
        status: "live",
      },
    ],
  },
  {
    slug: "cursor",
    name: "Cursor",
    tagline:
      "Editor kode dengan AI untuk membangun perangkat lunak lebih cepat.",
    status: "soon",
    accent: "#4B5563",
    modules: [],
  },
  {
    slug: "chatgpt-agent",
    name: "ChatGPT Agent",
    tagline:
      "Mode agent di ChatGPT yang bisa mengerjakan tugas bertahap untuk kamu.",
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
  tagline: "Ajarkan cara kerjamu sekali, panggil kapan saja.",
  heroLede:
    "Skills adalah cara kamu menyimpan sebuah cara kerja ke dalam Claude satu kali, lalu memanggilnya kembali kapan saja hanya dengan mengetik namanya. Halaman ini menjelaskannya dari nol untuk kamu yang baru mengenal AI: apa itu Skills, di mana letaknya, bagaimana cara memakainya lewat tombol garis miring, dan bagaimana membuat skill pertamamu.",
  metaTitle: "Apa itu Skills di Claude? Panduan Dasar untuk Pemula",
  metaDescription:
    "Penjelasan dasar Skills di Claude untuk pemula: apa itu skill, di mana letak file SKILL.md, cara menjalankannya dengan mengetik garis miring, dan cara membuat skill pertamamu. Dari AI Training Indonesia oleh Aurelius Ivan Wijaya.",
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
  updated: "18 Juli 2026",
  datePublished: "2026-07-17",
  dateModified: "2026-07-18",
  slides: [
    {
      id: "apa-itu",
      kicker: "Claude · Modul Skills",
      title: "Apa itu Skills di Claude?",
      subtitle: "Mulai dari analogi yang paling sederhana.",
      blocks: [
        {
          type: "lead",
          text: "Bayangkan kamu punya asisten baru. Setiap kali kamu minta bantuan, kamu harus menjelaskan ulang cara kerjanya dari awal. Skills membuat penjelasan itu cukup sekali. Kamu simpan cara kerjanya, beri nama, lalu panggil namanya setiap kali dibutuhkan.",
          webOnly: true,
        },
        {
          type: "motion",
          scene: "claude-skill",
          alt: "Kartu Tujuan, Data, dan Langkah kerja bergerak menjadi satu Skill bernama buat-laporan. Perintah /buat-laporan kemudian mengaktifkan Claude dan menghasilkan laporan.",
          caption:
            "30 detik: pilih satu tugas berulang dan beri nama /skill-mu. Angkat tangan kalau siap cerita.",
          command: "/buat-laporan",
          output: "Laporan siap",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Analogi singkat",
          text: "Skill itu seperti jurus yang sudah kamu ajarkan ke [[Claude]]. Sekali diajarkan, tinggal sebut namanya dan Claude langsung tahu harus melakukan apa.",
          webOnly: true,
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
          type: "motion",
          scene: "claude-skill-benefits",
          alt: "Tiga adegan: /buat-laporan dijalankan sekali, tiga hasil mengikuti satu format, dan satu folder skill dibagikan ke tiga anggota tim.",
          caption:
            "Untuk /skill-mu tadi, pilih 1, 2, atau 3 dan catat. Satu orang dari tiap pilihan cerita. Kelas pilih contoh paling relevan.",
        },
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
          webOnly: true,
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
          type: "motion",
          scene: "edu-storyboard",
          alt: "Folder skills berisi folder ringkas-rapat, lalu file SKILL.md di dalamnya.",
          caption:
            "Ivan keliling 60 detik. Tunjuk di laptopmu: mana skill proyek, mana skill pribadi?",
          items: [
            { label: ".claude/skills", icon: "folder", tone: "blue" },
            { label: "ringkas-rapat", icon: "folder", tone: "red" },
            { label: "SKILL.md", icon: "file", tone: "clay" },
          ],
        },
        {
          type: "paragraph",
          text: "Setiap skill tinggal di dalam folder bernama sesuai skill itu, dan di dalamnya ada satu file utama bernama [[SKILL.md]]. Struktur foldernya seperti ini:",
          webOnly: true,
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
          webOnly: true,
        },
        {
          type: "cards",
          items: [
            {
              title: "Skill proyek",
              text: "Diletakkan di folder [[.claude/skills/]] di dalam proyek. Cuma aktif waktu kamu kerja di proyek itu.",
            },
            {
              title: "Skill pribadi",
              text: "Diletakkan di [[~/.claude/skills/]] di komputermu. Aktif di semua proyek yang kamu buka.",
            },
          ],
          webOnly: true,
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
          type: "motion",
          scene: "edu-storyboard",
          alt: "Blok name, description, lalu langkah instruksi di dalam SKILL.md.",
          caption:
            "30 detik: tulis name skill yang mau kamu buat. Angkat tangan, lalu kita panggil satu skill demo bareng.",
          items: [
            { label: "name", icon: "tag", tone: "blue" },
            { label: "description", icon: "notes", tone: "yellow" },
            { label: "langkah", icon: "list", tone: "green" },
          ],
        },
        {
          type: "paragraph",
          text: "File [[SKILL.md]] dibuka dengan blok identitas di antara dua garis tiga strip, lalu diikuti instruksinya dalam bahasa biasa. Contoh sederhana:",
          webOnly: true,
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
          webOnly: true,
        },
        {
          type: "cards",
          items: [
            {
              title: "name",
              text: "Nama singkat skill. Inilah yang kamu ketik setelah garis miring untuk memanggilnya.",
            },
            {
              title: "description",
              text: "Penjelasan singkat tentang kapan skill ini dipakai, supaya mudah dikenali di daftar.",
            },
          ],
          webOnly: true,
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
          type: "motion",
          scene: "edu-storyboard",
          alt: "Ketik garis miring, pilih skill, tekan Enter, lalu Claude menjalankan skill.",
          caption:
            "Ikuti empat ketukan: / → pilih → Enter → hasil. Volunter pertama: kelas tepuk untuk hasil paling rapi.",
          items: [
            { label: "Ketik /", icon: "slash", tone: "blue" },
            { label: "Pilih skill", icon: "select", tone: "yellow" },
            { label: "Enter", icon: "enter", tone: "green" },
            { label: "Claude jalan", icon: "spark", tone: "clay" },
          ],
        },
        {
          type: "steps",
          items: [
            { text: "Ketik tanda garis miring ( / ) di kolom obrolan." },
            {
              text: "Daftar skill yang tersedia akan muncul secara otomatis.",
              hint: "Kamu bisa mengetik beberapa huruf nama skill untuk menyaring daftarnya.",
            },
            { text: "Pilih skill yang kamu mau, lalu tekan Enter." },
            {
              text: "Claude langsung menjalankan langkah-langkah di dalam skill itu.",
            },
          ],
          webOnly: true,
        },
        {
          type: "gif",
          src: "",
          alt: "Mengetik garis miring lalu daftar skill muncul di Claude",
          caption: "Ketik / lalu daftar skill muncul.",
          describe:
            "GIF: kursor mengetik tanda / di kolom obrolan, daftar skill muncul, lalu satu skill dipilih.",
          webOnly: true,
        },
      ],
    },
    {
      id: "contoh-nyata",
      kicker: "Contoh",
      title: "Contoh saat dipakai",
      subtitle: "Misalnya kamu punya skill bernama ringkas-rapat.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Catatan rapat dipanggil lewat /ringkas-rapat lalu keluar poin dan daftar tugas.",
          caption:
            "Pakai catatan rapatmu. Setelah /ringkas-rapat, tulis 1 baris di chat: format hasil yang kamu butuh besok pagi.",
          items: [
            { label: "Catatan panjang", icon: "notes", tone: "yellow" },
            { label: "/ringkas-rapat", icon: "slash", tone: "blue" },
            { label: "Claude", icon: "spark", tone: "clay" },
            { label: "Poin + tugas", icon: "list", tone: "green" },
          ],
        },
        {
          type: "paragraph",
          text: "Kamu tempel catatan rapat yang panjang, lalu panggil skill dengan mengetik namanya. Claude mengikuti langkah yang sudah kamu simpan tadi dan mengembalikan rangkuman yang rapi.",
          webOnly: true,
        },
        {
          type: "code",
          caption: "Yang kamu ketik",
          lines: ["/ringkas-rapat"],
          webOnly: true,
        },
        {
          type: "gif",
          src: "",
          alt: "Menjalankan skill ringkas-rapat dan hasil rangkuman muncul",
          caption: "Satu perintah, hasil langsung keluar.",
          describe:
            "GIF: skill /ringkas-rapat dijalankan atas sebuah catatan rapat, lalu hasil rangkuman berupa poin dan daftar tugas muncul.",
          webOnly: true,
        },
      ],
    },
    {
      id: "buat-skill",
      kicker: "Praktik",
      title: "Membuat skill pertamamu",
      subtitle: "Empat langkah, tanpa perlu bisa coding.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Buat folder, buat SKILL.md, isi instruksi, lalu panggil skill baru.",
          caption:
            "Langkah 1–3 di laptop sekarang. Di langkah 4: panggil / dengan 1 langkah sengaja salah, baca error bareng, lalu betulkan.",
          items: [
            { label: "Buat folder", icon: "folder", tone: "blue" },
            { label: "SKILL.md", icon: "file", tone: "yellow" },
            { label: "Isi langkah", icon: "notes", tone: "green" },
            { label: "Panggil /", icon: "slash", tone: "clay" },
          ],
        },
        {
          type: "steps",
          items: [
            {
              text: "Buat folder baru di dalam .claude/skills/ dan beri nama skillmu.",
              hint: "Contoh: .claude/skills/ringkas-rapat/",
            },
            { text: "Di dalam folder itu, buat file bernama SKILL.md." },
            {
              text: "Isi file dengan blok identitas (name dan description) lalu tulis instruksinya dalam bahasa biasa.",
            },
            {
              text: "Buka Claude, ketik garis miring, dan panggil skill barumu.",
            },
          ],
          webOnly: true,
        },
        {
          type: "gif",
          src: "",
          alt: "Membuat folder skill dan file SKILL.md lalu memanggilnya",
          caption: "Dari folder kosong sampai skill yang bisa dipanggil.",
          describe:
            "GIF: membuat folder skill, membuat file SKILL.md, mengisinya, lalu memanggil skill lewat garis miring.",
          webOnly: true,
        },
      ],
    },
    {
      id: "tips",
      kicker: "Supaya rapi",
      title: "Tips dan kesalahan umum",
      subtitle: "Tiga hal kecil yang membuat skillmu jauh lebih andal.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Tiga tip: deskripsi jelas, satu tugas per skill, pasang dari sumber terpercaya.",
          caption:
            "Berdiri. Pilih tip yang paling sering kamu langgar. 45 detik cerita ke sebelahmu. Duduk, panggil /skill-mu sekali lagi, screenshot hasilnya.",
          items: [
            { label: "Description jelas", icon: "notes", tone: "blue" },
            { label: "Satu tugas", icon: "tag", tone: "green" },
            { label: "Sumber aman", icon: "lock", tone: "red" },
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Tulis description yang jelas",
          text: "Deskripsi yang jelas membuat skill mudah dikenali saat kamu mencarinya di daftar.",
          webOnly: true,
        },
        {
          type: "callout",
          tone: "info",
          title: "Satu skill untuk satu tugas",
          text: "Skill yang fokus lebih mudah dipanggil dan dirawat. Sebaiknya satu skill menangani satu tugas.",
          webOnly: true,
        },
        {
          type: "callout",
          tone: "warn",
          title: "Pasang hanya dari sumber terpercaya",
          text: "Skill berisi instruksi yang akan dijalankan Claude. Pastikan kamu memahami isinya sebelum memasang skill buatan orang lain.",
          webOnly: true,
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Apakah aku perlu bisa coding untuk membuat skill?",
      a: "Tidak. Sebuah skill pada dasarnya adalah instruksi dalam bahasa biasa yang disimpan di file SKILL.md. Kamu cukup menulis langkah kerja yang kamu mau, mirip menulis catatan untuk rekan kerja.",
    },
    {
      q: "Di mana file skillku disimpan?",
      a: "Di dalam folder .claude/skills/ untuk skill yang khusus satu proyek, atau di ~/.claude/skills/ untuk skill pribadi yang aktif di semua proyek. Setiap skill adalah satu folder yang berisi file SKILL.md.",
    },
    {
      q: "Bagaimana cara memanggil skill?",
      a: "Ketik tanda garis miring ( / ) di kolom obrolan, pilih skill dari daftar yang muncul, lalu tekan Enter. Kamu juga bisa mengetik sebagian nama skill untuk menyaring daftarnya.",
    },
    {
      q: "Apa bedanya name dan description di SKILL.md?",
      a: "name adalah nama singkat yang kamu ketik untuk memanggil skill. description adalah penjelasan satu kalimat tentang kapan skill itu sebaiknya dipakai, supaya mudah dikenali saat kamu memilihnya dari daftar.",
    },
    {
      q: "Apakah satu skill bisa dipakai seluruh tim?",
      a: "Bisa. Karena skill hanyalah sebuah folder, kamu bisa membagikannya ke rekan tim atau menyimpannya di dalam proyek bersama, sehingga semua orang memakai cara kerja yang sama.",
    },
  ],
  glossary: [
    {
      term: "Claude",
      def: "Asisten AI buatan perusahaan Anthropic. Kamu ajak ngobrol lewat teks untuk mengerjakan macam-macam tugas.",
    },
    {
      term: "SKILL.md",
      def: "File utama sebuah skill. Isinya identitas skill (nama dan deskripsi) plus langkah kerja yang kamu mau Claude jalankan.",
    },
    {
      term: ".claude/skills/",
      def: "Folder tempat skill disimpan di dalam sebuah proyek. Skill di sini cuma aktif waktu kamu kerja di proyek itu.",
    },
    {
      term: "~/.claude/skills/",
      def: "Folder skill pribadi di komputermu. Skill di sini aktif di semua proyek yang kamu buka.",
    },
  ],
  howto: {
    name: "Cara membuat skill pertama di Claude",
    steps: [
      {
        name: "Buat folder skill",
        text: "Buat folder baru di dalam .claude/skills/ dan beri nama sesuai skillmu.",
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
        text: "Buka Claude, ketik garis miring, pilih skillmu, lalu tekan Enter.",
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

const n8nNode: EduModule = {
  toolSlug: "n8n",
  toolName: "n8n",
  slug: "node",
  moduleName: "Node",
  level: "Level dasar",
  readingLabel: "sekitar 8 menit",
  h1: "Node di n8n",
  tagline: "Satu kotak, satu tugas.",
  heroLede:
    "Node adalah kotak paling dasar di n8n. Satu node mengerjakan satu tugas, lalu memberikan hasilnya ke node berikutnya. Halaman ini menjelaskannya dari nol untuk kamu yang baru mengenal otomatisasi: apa itu node, apa bedanya node pemicu dan node aksi, bagaimana data mengalir, dan cara menambah node pertamamu.",
  metaTitle: "Apa itu Node di n8n? Panduan Dasar untuk Pemula",
  metaDescription:
    "Penjelasan dasar node di n8n untuk pemula: apa itu node, bedanya node trigger dan node aksi, bagaimana data mengalir antar-node, dan cara menambah node. Dari AI Training Indonesia oleh Aurelius Ivan Wijaya.",
  keywords: [
    "apa itu node n8n",
    "node n8n adalah",
    "trigger n8n",
    "workflow n8n",
    "belajar n8n bahasa indonesia",
    "cara menambah node n8n",
    "n8n untuk pemula",
    "otomatisasi n8n",
  ],
  updated: "18 Juli 2026",
  datePublished: "2026-07-17",
  dateModified: "2026-07-18",
  slides: [
    {
      id: "apa-itu",
      kicker: "n8n · Modul Node",
      title: "Apa itu node?",
      subtitle: "Mulai dari satu kotak.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Satu node menerima data, mengerjakan tugas, lalu mengirim hasil ke node berikutnya.",
          caption:
            "Bayangkan satu kotak di meja kerjamu. 20 detik: tulis tugas nyata yang mau masuk ke kotak itu.",
          items: [
            { label: "Data masuk", icon: "message", tone: "yellow" },
            { label: "Satu node", icon: "node", tone: "blue" },
            { label: "Hasil keluar", icon: "sheet", tone: "green" },
          ],
        },
        {
          type: "lead",
          text: "Di [[n8n]], sebuah pekerjaan otomatis dibangun dari kotak-kotak yang disambung. Satu kotak itu namanya [[node]]. Setiap node mengerjakan satu tugas, lalu memberikan hasilnya ke node berikutnya.",
          webOnly: true,
        },
        {
          type: "callout",
          tone: "tip",
          title: "Analogi singkat",
          text: "Node itu seperti satu langkah di resep masakan. Satu langkah melakukan satu hal, dan langkah-langkah itu berjalan berurutan sampai masakannya jadi.",
          webOnly: true,
        },
        {
          type: "paragraph",
          text: "Kumpulan node yang tersambung disebut [[workflow]]. Di halaman ini kita bahas node dulu, satu per satu.",
          webOnly: true,
        },
      ],
    },
    {
      id: "kenapa-berguna",
      kicker: "Kenapa penting",
      title: "Kenapa node berguna?",
      subtitle: "Tiga hal yang bikin otomatisasi jadi gampang.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Tiga manfaat node: alur kelihatan, sedikit kode, dan bisa dipakai ulang.",
          caption:
            "Pilih satu manfaat yang paling kamu butuhkan di kerjaanmu. Angkat tangan, bilang kenapa dalam satu kalimat.",
          items: [
            { label: "Kelihatan", icon: "list", tone: "blue" },
            { label: "Sedikit kode", icon: "settings", tone: "yellow" },
            { label: "Pakai ulang", icon: "plus", tone: "green" },
          ],
        },
        {
          type: "cards",
          items: [
            {
              title: "Kelihatan jelas",
              text: "Setiap langkah jadi satu kotak, jadi kamu bisa lihat alurnya dari awal sampai akhir.",
            },
            {
              title: "Sedikit ngoding",
              text: "Kebanyakan node cukup diatur lewat isian, tanpa harus menulis kode panjang.",
            },
            {
              title: "Bisa dipakai ulang",
              text: "Node yang sama bisa dipakai di banyak workflow, tinggal atur ulang isinya.",
            },
          ],
          webOnly: true,
        },
      ],
    },
    {
      id: "jenis-node",
      kicker: "Dua jenis utama",
      title: "Node pemicu dan node aksi",
      subtitle: "Hampir semua workflow dibangun dari dua jenis ini.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Node trigger memulai workflow, lalu node aksi mengerjakan tugas berikutnya.",
          caption:
            "30 detik: tulis trigger dari kerjaanmu di chat. Dua orang dibacakan; kelas pilih yang paling sering muncul.",
          items: [
            { label: "Trigger", icon: "trigger", tone: "yellow" },
            { label: "Aksi 1", icon: "message", tone: "blue" },
            { label: "Aksi 2", icon: "sheet", tone: "green" },
          ],
        },
        {
          type: "cards",
          items: [
            {
              title: "Node pemicu (trigger)",
              text: "[[trigger]] adalah node yang memulai workflow, misalnya saat ada form baru diisi atau pada jadwal tertentu.",
            },
            {
              title: "Node aksi (action)",
              text: "Node yang melakukan sesuatu setelah dipicu, misalnya kirim WhatsApp, simpan ke spreadsheet, atau ambil data.",
            },
          ],
          webOnly: true,
        },
        {
          type: "callout",
          tone: "info",
          title: "Satu trigger untuk memulai",
          text: "Sebuah workflow biasanya diawali satu node trigger, lalu disusul beberapa node aksi.",
          webOnly: true,
        },
      ],
    },
    {
      id: "aliran-data",
      kicker: "Cara jalannya",
      title: "Bagaimana data mengalir",
      subtitle: "Searah, mengikuti garis sambungan.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Data mengalir searah dari trigger ke proses lalu ke hasil akhir.",
          caption:
            "Kalau node tengah berhenti, node berikutnya menunggu. Tunjuk bottleneck-mu, lalu ceritakan error terakhir yang pernah kamu lihat.",
          items: [
            { label: "Mulai", icon: "trigger", tone: "yellow" },
            { label: "Proses", icon: "node", tone: "blue" },
            { label: "Lanjut", icon: "node", tone: "clay" },
            { label: "Selesai", icon: "sheet", tone: "green" },
          ],
        },
        {
          type: "paragraph",
          text: "Node disambung pakai garis. Data mengalir searah: keluaran satu node jadi masukan untuk node sesudahnya. Kalau satu node berhenti, node sesudahnya ikut menunggu.",
          webOnly: true,
        },
        {
          type: "callout",
          tone: "info",
          title: "Urutan itu penting",
          text: "n8n menjalankan node satu per satu mengikuti garis sambungannya, dari trigger sampai node terakhir.",
          webOnly: true,
        },
      ],
    },
    {
      id: "contoh-nyata",
      kicker: "Contoh",
      title: "Contoh workflow tiga node",
      subtitle: "Setiap ada form masuk, kirim WhatsApp lalu catat.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Form baru memicu kirim WhatsApp lalu menyimpan data ke spreadsheet.",
          caption:
            "Ganti contoh ini dengan alurmu: trigger apa, aksi terakhir apa. Ivan gambar satu alur anonim dari ruangan ke kanvas.",
          items: [
            { label: "Form baru", icon: "trigger", tone: "yellow" },
            { label: "WhatsApp", icon: "message", tone: "blue" },
            { label: "Sheet", icon: "sheet", tone: "green" },
          ],
        },
        {
          type: "paragraph",
          text: "Misalnya kamu mau: setiap ada pengisian form, kirim WhatsApp lalu catat ke spreadsheet. Workflow-nya jadi tiga node yang tersambung berurutan.",
          webOnly: true,
        },
        {
          type: "code",
          caption: "Alur tiga node",
          lines: [
            "[ Form baru ]        (trigger)",
            "      |",
            "      v",
            "[ Kirim WhatsApp ]   (aksi)",
            "      |",
            "      v",
            "[ Simpan ke Sheet ]  (aksi)",
          ],
          webOnly: true,
        },
      ],
    },
    {
      id: "cara-menambah",
      kicker: "Praktik",
      title: "Cara menambah node",
      subtitle: "Empat langkah di dalam editor n8n.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Tombol plus, cari node, pilih, lalu atur isian dan sambungkan.",
          caption:
            "Sekarang: klik +, cari satu node, drop ke kanvas. Jangan connect dulu. Kalau error merah muncul, angkat tangan: itu bahan kelas.",
          items: [
            { label: "Tombol +", icon: "plus", tone: "blue" },
            { label: "Cari", icon: "search", tone: "yellow" },
            { label: "Pilih", icon: "select", tone: "clay" },
            { label: "Atur", icon: "settings", tone: "green" },
          ],
        },
        {
          type: "steps",
          items: [
            {
              text: "Buka sebuah workflow di n8n, lalu klik tombol tambah (tanda +).",
            },
            {
              text: "Ketik nama aplikasi atau aksi yang kamu cari di kolom pencarian.",
              hint: "Misalnya 'Gmail', 'WhatsApp', atau 'Schedule'.",
            },
            { text: "Pilih node yang cocok dari daftar hasil pencarian." },
            { text: "Atur isian node, lalu sambungkan garisnya ke node lain." },
          ],
          webOnly: true,
        },
        {
          type: "gif",
          src: "",
          alt: "Menambah node baru di editor n8n",
          caption: "Dari tombol + sampai node tersambung.",
          describe:
            "GIF: menekan tombol +, mencari node, memilihnya, lalu menyambungkan garisnya ke node lain.",
          webOnly: true,
        },
      ],
    },
    {
      id: "tips",
      kicker: "Supaya rapi",
      title: "Tips membangun dengan node",
      subtitle: "Tiga kebiasaan kecil yang bikin workflow lebih andal.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Tiga tip: beri nama node, uji satu per satu, simpan rahasia di credential.",
          caption:
            "Uji satu node tanpa credential dulu. Error merah = bahan kelas. Lalu beri nama node-mu dan simpan workflow dengan namamu.",
          items: [
            { label: "Beri nama", icon: "tag", tone: "blue" },
            { label: "Uji satu-satu", icon: "test", tone: "yellow" },
            { label: "Credential", icon: "lock", tone: "red" },
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Beri nama tiap node",
          text: "Ganti nama node sesuai tugasnya, biar workflow gampang dibaca lagi nanti.",
          webOnly: true,
        },
        {
          type: "callout",
          tone: "info",
          title: "Uji satu per satu",
          text: "Jalankan node satu per satu waktu membangun, jadi kamu tahu di node mana yang bermasalah.",
          webOnly: true,
        },
        {
          type: "callout",
          tone: "warn",
          title: "Simpan rahasia di credential",
          text: "Jangan tempel token atau password langsung di isian node. Pakai fitur credential n8n.",
          webOnly: true,
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Apa itu node di n8n?",
      a: "Node adalah satu kotak di dalam workflow n8n yang mengerjakan satu tugas, misalnya mengirim email atau mengambil data. Beberapa node yang tersambung membentuk satu proses otomatis.",
    },
    {
      q: "Apa bedanya node trigger dan node aksi?",
      a: "Node trigger memulai workflow, misalnya saat ada form baru atau pada jadwal tertentu. Node aksi melakukan pekerjaan setelah dipicu, seperti mengirim pesan atau menyimpan data.",
    },
    {
      q: "Apakah aku perlu bisa coding untuk memakai node?",
      a: "Untuk kebanyakan node, tidak. Sebagian besar node cukup diatur lewat isian. Kalau butuh logika khusus ada node Code, tetapi itu opsional.",
    },
    {
      q: "Berapa node yang boleh ada dalam satu workflow?",
      a: "Tidak ada batas kaku. Mulai dari beberapa node, lalu tambah sesuai kebutuhan proses yang mau kamu otomatiskan.",
    },
    {
      q: "Bagaimana data berpindah antar-node?",
      a: "Data mengalir searah mengikuti garis sambungan: keluaran satu node menjadi masukan untuk node berikutnya.",
    },
  ],
  glossary: [
    {
      term: "n8n",
      def: "Alat otomatisasi alur kerja. Kamu susun langkah-langkah lewat kotak-kotak (node) tanpa harus banyak ngoding.",
    },
    {
      term: "node",
      def: "Satu kotak di dalam workflow n8n yang mengerjakan satu tugas, misalnya kirim email atau ambil data.",
    },
    {
      term: "workflow",
      def: "Rangkaian node yang tersambung dan berjalan berurutan untuk menyelesaikan satu proses otomatis.",
    },
    {
      term: "trigger",
      def: "Node pertama yang memulai workflow, misalnya jadwal, form baru, atau pesan masuk.",
    },
  ],
  howto: {
    name: "Cara menambah node di n8n",
    steps: [
      {
        name: "Klik tombol tambah",
        text: "Buka sebuah workflow di n8n, lalu klik tombol tambah (tanda +).",
      },
      {
        name: "Cari node",
        text: "Ketik nama aplikasi atau aksi yang kamu cari di kolom pencarian.",
      },
      {
        name: "Pilih node",
        text: "Pilih node yang cocok dari daftar hasil pencarian.",
      },
      {
        name: "Atur dan sambungkan",
        text: "Atur isian node, lalu sambungkan garisnya ke node lain.",
      },
    ],
  },
  sources: [
    {
      label: "n8n Docs: Nodes",
      url: "https://docs.n8n.io/workflows/components/nodes/",
    },
    {
      label: "n8n Docs: Glossary",
      url: "https://docs.n8n.io/glossary/",
    },
  ],
};

export const eduModules: EduModule[] = [claudeSkills, n8nNode];

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
