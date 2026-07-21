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

// `webOnly` keeps a block off the projected deck (extra reading for the page).
// `deckOnly` is the mirror: room-dependent facilitation cues ("angkat tangan",
// "kita baca bareng") that belong on the projected slide but would read as a
// dangling stage direction to a solo reader on the crawlable page. Set at most
// one of the two. Slide-level fields (title/subtitle) and captions inside a
// block cannot carry either flag, so those must be worded for both surfaces.
type BlockBase = { webOnly?: boolean; deckOnly?: boolean };

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

export type EduOsKey = "mac" | "linux" | "windows";

export type EduOsVariant = {
  lines: string[];
  caption?: string;
};

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
        // Commands/config that differ by OS. Renders Mac / Linux / Windows tabs
        // so a mixed classroom can follow along without guessing paths.
        type: "os-code";
        caption?: string;
        note?: string;
        defaultOs?: EduOsKey;
        variants: Record<EduOsKey, EduOsVariant>;
      }
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
      {
        slug: "mcp",
        name: "MCP",
        blurb:
          "Sambungkan Claude ke alat dan data di luar chat: file, API, spreadsheet, lewat Model Context Protocol.",
        status: "live",
      },
      {
        slug: "cowork",
        name: "Cowork",
        blurb:
          "Pasang Claude Desktop sampai Cowork siap dipakai: login, computer use, izin folder, dan perbaikan Missing HCS di Windows.",
        status: "live",
      },
      {
        slug: "subagent",
        name: "Subagent",
        blurb:
          "Titipkan satu tugas panjang ke asisten terpisah, atau jalankan beberapa sekaligus, lalu terima ringkasannya saja.",
        status: "live",
      },
      {
        slug: "agent-team",
        name: "Agent Team",
        blurb:
          "Beberapa agent dalam satu ruangan yang saling mengecek hasil kerja sebelum laporan akhir sampai ke kamu.",
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
            "Langkah 1 sampai 3 di laptop sekarang. Di langkah 4: panggil / dengan 1 langkah sengaja salah, baca error bareng, lalu betulkan.",
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

const claudeMcp: EduModule = {
  toolSlug: "claude",
  toolName: "Claude",
  slug: "mcp",
  moduleName: "MCP",
  level: "Level dasar",
  readingLabel: "sekitar 14 menit",
  h1: "MCP di Claude",
  tagline: "Sambungkan Claude ke alat di luar chat.",
  heroLede:
    "[[MCP]] (Model Context Protocol) adalah cara standar supaya Claude bisa memakai alat dan data di luar obrolan: folder di laptop, spreadsheet, ticket, API. Halaman ini menjelaskan dari nol: apa itu MCP, cara memasang server siap pakai, cara memakainya dengan persetujuanmu, dan cara membuat MCP sendiri yang rapi. Perintah ditampilkan untuk Mac, Linux, dan Windows.",
  metaTitle: "Apa itu MCP di Claude? Panduan Dasar Model Context Protocol",
  metaDescription:
    "Penjelasan dasar MCP (Model Context Protocol) untuk pemula: apa itu MCP, cara pasang di Claude Desktop dan Claude Code, perintah Mac Linux Windows, cara pakai dengan approval, dan cara bikin MCP server sendiri. Dari AI Training Indonesia oleh Aurelius Ivan Wijaya.",
  keywords: [
    "apa itu mcp claude",
    "model context protocol",
    "cara pasang mcp claude",
    "claude desktop mcp",
    "claude code mcp",
    "bikin mcp server",
    "mcp untuk pemula",
    "tutorial mcp bahasa indonesia",
    "claude_desktop_config.json",
    "belajar claude mcp",
  ],
  updated: "19 Juli 2026",
  datePublished: "2026-07-19",
  dateModified: "2026-07-19",
  slides: [
    {
      id: "apa-itu",
      kicker: "Claude · Modul MCP",
      title: "Apa itu MCP?",
      subtitle: "Colokan standar antara Claude dan alatmu.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Claude terhubung ke MCP server lalu membuka alat seperti file dan API.",
          caption:
            "Ivan demo MCP 60 detik dulu. Lalu 30 detik: tulis satu alat di luar chat yang barusan terasa relevan. Angkat tangan kalau siap cerita.",
          items: [
            { label: "Claude", icon: "spark", tone: "clay" },
            { label: "MCP server", icon: "node", tone: "blue" },
            { label: "Alat / data", icon: "folder", tone: "green" },
          ],
        },
        {
          type: "lead",
          text: "Bayangkan Claude punya colokan universal. [[MCP]] adalah colokan itu: satu cara standar supaya Claude bisa memanggil alat di luar chat, dengan izinmu tiap kali ada aksi penting.",
          webOnly: true,
        },
        {
          type: "callout",
          tone: "tip",
          title: "Analogi singkat",
          text: "MCP itu seperti adaptor listrik. Alatnya bisa beda-beda, tapi colokannya sama, jadi Claude tahu cara menyambung.",
          webOnly: true,
        },
        {
          type: "paragraph",
          text: "Yang kamu pasang disebut [[MCP server]]: program kecil yang menawarkan tool (baca file, kirim request, query database). Claude jadi [[MCP client]] yang memanggil tool itu.",
          webOnly: true,
        },
      ],
    },
    {
      id: "kenapa-berguna",
      kicker: "Kenapa penting",
      title: "Kenapa MCP berguna?",
      subtitle: "Tiga alasan yang langsung terasa di kerja sehari-hari.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Tiga manfaat MCP: akses langsung, satu format, dan kontrol persetujuan.",
          caption:
            "Ringkas: pilih 1, 2, atau 3 untuk use case slide 1. Satu orang per angka, satu kalimat. Ivan 20 detik: satu error MCP yang pernah dia alami. Total 2 menit, lalu lanjut pasang.",
          items: [
            { label: "Akses langsung", icon: "folder", tone: "blue" },
            { label: "Satu format", icon: "list", tone: "yellow" },
            { label: "Tetap izinmu", icon: "lock", tone: "red" },
          ],
        },
        {
          type: "cards",
          items: [
            {
              title: "Akses langsung",
              text: "Claude bisa baca folder, ticket, atau API tanpa kamu bolak-balik copy-paste.",
            },
            {
              title: "Satu cara sambung",
              text: "Banyak alat ikut protokol yang sama, jadi pola pasangnya mirip dari satu server ke server lain.",
            },
            {
              title: "Kamu yang setuju",
              text: "Sebelum aksi penting, Claude meminta persetujuan. Kamu bisa tolak kapan saja.",
            },
          ],
          webOnly: true,
        },
      ],
    },
    {
      id: "cara-kerja",
      kicker: "Alur",
      title: "Bagaimana MCP bekerja",
      subtitle: "Claude minta, server jalan, hasil kembali.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Permintaan dari Claude masuk ke MCP server, tool dijalankan, hasil dikembalikan.",
          caption:
            "Kalau demo Ivan sudah jalan, skip chant. Kalau belum: empat ketukan bareng minta → server → tool → hasil. Volunter: tool paling berbahaya kalau salah approve.",
          items: [
            { label: "Kamu minta", icon: "message", tone: "yellow" },
            { label: "Claude", icon: "spark", tone: "clay" },
            { label: "MCP server", icon: "settings", tone: "blue" },
            { label: "Hasil + approve", icon: "test", tone: "green" },
          ],
        },
        {
          type: "steps",
          items: [
            {
              text: "Kamu minta sesuatu yang butuh alat luar, misalnya daftar file di Desktop.",
            },
            {
              text: "Claude memilih tool dari MCP server yang sudah terpasang.",
            },
            {
              text: "Kalau aksi menyentuh sistemmu, Claude meminta persetujuan dulu.",
            },
            {
              text: "Server menjalankan tool, lalu hasilnya masuk kembali ke obrolan.",
            },
          ],
          webOnly: true,
        },
        {
          type: "callout",
          tone: "info",
          title: "Dua tempat pakai yang umum",
          text: "[[Claude Desktop]] memakai file konfigurasi JSON. [[Claude Code]] bisa menambah server lewat perintah claude mcp add. Di Linux, jalur paling mulus biasanya Claude Code.",
          webOnly: true,
        },
      ],
    },
    {
      id: "persiapan",
      kicker: "Sebelum pasang",
      title: "Persiapan di laptopmu",
      subtitle: "Cek Node.js, lalu pilih jalur Claude-mu.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Cek Node.js, buka Claude, lalu siap memasang MCP.",
          caption:
            "Sekarang: buka terminal, jalankan node --version. Angkat tangan kalau versinya muncul. Kalau error, duduk berdua dengan tetangga yang sukses.",
          items: [
            { label: "Terminal", icon: "enter", tone: "blue" },
            { label: "node --version", icon: "tag", tone: "yellow" },
            { label: "Claude siap", icon: "spark", tone: "clay" },
          ],
        },
        {
          type: "paragraph",
          text: "Banyak MCP server lokal jalan lewat Node.js (perintah npx). Cek dulu instalasinya. Kalau belum ada, unduh LTS dari nodejs.org.",
          webOnly: true,
        },
        {
          type: "os-code",
          caption: "Cek Node.js terpasang",
          note: "Pilih tab OS-mu. Hasil yang diharapkan mirip v20.x atau v22.x.",
          variants: {
            mac: {
              caption: "Terminal di Mac",
              lines: ["node --version", "npx --version"],
            },
            linux: {
              caption: "Terminal di Linux",
              lines: ["node --version", "npx --version"],
            },
            windows: {
              caption: "Command Prompt atau PowerShell",
              lines: ["node --version", "npx --version"],
            },
          },
          webOnly: true,
        },
        {
          type: "cards",
          items: [
            {
              title: "Claude Desktop",
              text: "Aplikasi desktop resmi (macOS dan Windows). MCP diatur lewat claude_desktop_config.json.",
            },
            {
              title: "Claude Code",
              text: "CLI agent di terminal (Mac, Linux, Windows). MCP diatur lewat claude mcp add atau file .mcp.json.",
            },
          ],
          webOnly: true,
        },
        {
          type: "callout",
          tone: "warn",
          title: "Catatan Linux",
          text: "Claude Desktop resmi fokus ke macOS dan Windows. Di Linux, ikuti jalur Claude Code di slide berikutnya.",
          webOnly: true,
        },
      ],
    },
    {
      id: "pasang-siap-pakai",
      kicker: "Praktik 1",
      title: "Pasang MCP siap pakai",
      subtitle: "Contoh: Filesystem Server ke folder yang kamu izinkan.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Edit config, restart Claude, lalu MCP filesystem muncul sebagai konektor.",
          caption:
            "Pilih jalur Desktop atau Claude Code. Ivan hitung 90 detik. Yang dulu lihat filesystem connected: berdiri. Yang error: tetap berdiri, kita debug bareng 2 menit.",
          items: [
            { label: "Edit config", icon: "file", tone: "yellow" },
            { label: "Restart / add", icon: "settings", tone: "blue" },
            { label: "Server hidup", icon: "spark", tone: "green" },
          ],
        },
        {
          type: "paragraph",
          text: "Kita pakai server resmi @modelcontextprotocol/server-filesystem. Ganti username dan path folder dengan milikmu. Hanya izinkan folder yang kamu nyaman Claude baca dan ubah.",
          webOnly: true,
        },
        {
          type: "os-code",
          caption: "Claude Desktop: lokasi file config",
          note: "Di Claude Desktop: Settings → Developer → Edit Config. File yang terbuka biasanya di path berikut.",
          variants: {
            mac: {
              caption: "macOS",
              lines: [
                "~/Library/Application Support/Claude/claude_desktop_config.json",
              ],
            },
            linux: {
              caption: "Linux (pakai Claude Code)",
              lines: [
                "# Claude Desktop belum jadi jalur utama di Linux.",
                "# Lewati blok JSON di bawah; pakai perintah Claude Code.",
                "claude mcp add --transport stdio filesystem -- \\",
                "  npx -y @modelcontextprotocol/server-filesystem \\",
                '  "$HOME/Desktop" "$HOME/Downloads"',
              ],
            },
            windows: {
              caption: "Windows",
              lines: ["%APPDATA%\\Claude\\claude_desktop_config.json"],
            },
          },
          webOnly: true,
        },
        {
          type: "os-code",
          caption: "Claude Desktop: isi claude_desktop_config.json",
          note: "Ganti username. Simpan file, lalu quit Claude Desktop sepenuhnya dan buka lagi.",
          variants: {
            mac: {
              lines: [
                "{",
                '  "mcpServers": {',
                '    "filesystem": {',
                '      "command": "npx",',
                '      "args": [',
                '        "-y",',
                '        "@modelcontextprotocol/server-filesystem",',
                '        "/Users/username/Desktop",',
                '        "/Users/username/Downloads"',
                "      ]",
                "    }",
                "  }",
                "}",
              ],
            },
            linux: {
              caption: "Setara di Claude Code (sudah di tab sebelumnya)",
              lines: ["claude mcp list", "claude mcp get filesystem"],
            },
            windows: {
              lines: [
                "{",
                '  "mcpServers": {',
                '    "filesystem": {',
                '      "command": "npx",',
                '      "args": [',
                '        "-y",',
                '        "@modelcontextprotocol/server-filesystem",',
                '        "C:\\\\Users\\\\username\\\\Desktop",',
                '        "C:\\\\Users\\\\username\\\\Downloads"',
                "      ]",
                "    }",
                "  }",
                "}",
              ],
            },
          },
          webOnly: true,
        },
        {
          type: "os-code",
          caption: "Claude Code: perintah yang sama di ketiga OS",
          note: "Jalankan di folder proyekmu. Scope default = local (hanya proyek ini, untukmu).",
          variants: {
            mac: {
              lines: [
                "claude mcp add --transport stdio filesystem -- \\",
                "  npx -y @modelcontextprotocol/server-filesystem \\",
                '  "$HOME/Desktop" "$HOME/Downloads"',
                "",
                "claude mcp list",
              ],
            },
            linux: {
              lines: [
                "claude mcp add --transport stdio filesystem -- \\",
                "  npx -y @modelcontextprotocol/server-filesystem \\",
                '  "$HOME/Desktop" "$HOME/Downloads"',
                "",
                "claude mcp list",
              ],
            },
            windows: {
              caption: "PowerShell",
              lines: [
                "claude mcp add --transport stdio filesystem -- `",
                "  npx -y @modelcontextprotocol/server-filesystem `",
                '  "$env:USERPROFILE\\Desktop" "$env:USERPROFILE\\Downloads"',
                "",
                "claude mcp list",
              ],
            },
          },
          webOnly: true,
        },
        {
          type: "callout",
          tone: "tip",
          title: "Uji manual di terminal",
          text: "Kalau server tidak muncul, jalankan perintah npx server-filesystem dengan path yang sama di terminal. Error di situ biasanya lebih jelas daripada di UI.",
          webOnly: true,
        },
        {
          type: "callout",
          tone: "info",
          title: "Setelah race: debug bareng",
          text: "Ivan ambil satu error dari ruangan (path salah, JSON rusak, atau server diam), buka log sesuai OS, perbaiki di layar. Semua yang berhasil ikut spot-check tetangga.",
          webOnly: true,
        },
      ],
    },
    {
      id: "cara-pakai",
      kicker: "Praktik 2",
      title: "Cara memakai MCP",
      subtitle: "Minta tugas nyata, lalu approve dengan sadar.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Minta tugas, Claude mengajukan tool, kamu approve, hasil muncul.",
          caption:
            "Ketik permintaan ke Claude memakai alat atau folder yang kamu tulis di slide pertama. Saat approve: baca path keras-keras sebelum Allow.",
          items: [
            { label: "Minta tugas", icon: "message", tone: "yellow" },
            { label: "Pilih tool", icon: "select", tone: "blue" },
            { label: "Approve", icon: "lock", tone: "red" },
            { label: "Hasil", icon: "sheet", tone: "green" },
          ],
        },
        {
          type: "paragraph",
          text: "Setelah filesystem terhubung, coba permintaan sederhana. Di Claude Desktop, cek konektor lewat tombol lampiran / connectors. Di Claude Code, ketik /mcp untuk status server.",
          webOnly: true,
        },
        {
          type: "code",
          caption: "Contoh permintaan (ganti path/folder dengan milikmu)",
          lines: [
            "Lihat isi folder kerja yang sudah aku izinkan di MCP filesystem,",
            "lalu buat file catatan-kerja.txt berisi 3 bullet ringkas",
            "tentang tugas yang paling sering aku copy-paste ke chat.",
          ],
          webOnly: true,
        },
        {
          type: "os-code",
          caption: "Cek status di Claude Code",
          variants: {
            mac: {
              lines: ["/mcp", "claude mcp list"],
            },
            linux: {
              lines: ["/mcp", "claude mcp list"],
            },
            windows: {
              lines: ["/mcp", "claude mcp list"],
            },
          },
          webOnly: true,
        },
        {
          type: "steps",
          items: [
            { text: "Pastikan server filesystem terlihat connected." },
            {
              text: "Tulis permintaan yang jelas menyebut folder yang sudah kamu izinkan.",
            },
            {
              text: "Saat Claude meminta izin, baca tool name dan path-nya sebelum approve.",
            },
            {
              text: "Kalau ragu, Deny dulu. Minta Claude jelaskan rencananya, baru ulangi.",
            },
          ],
          webOnly: true,
        },
      ],
    },
    {
      id: "bikin-sendiri",
      kicker: "Praktik 3",
      title: "Bikin MCP yang proper",
      subtitle: "Satu server, satu tujuan, tool yang jelas.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Buat folder proyek, tulis server, daftarkan tool, lalu sambungkan ke Claude.",
          caption:
            "45 detik: /nama-server → tool_apa untuk use case-mu tadi. Tempeld di chat kelas. Lanjut scaffold (Ivan keliling cek). Ganti waktu_sekarang kalau sempat.",
          items: [
            { label: "Folder proyek", icon: "folder", tone: "blue" },
            { label: "server.ts", icon: "file", tone: "yellow" },
            { label: "Daftar tool", icon: "list", tone: "green" },
            { label: "Sambung", icon: "spark", tone: "clay" },
          ],
        },
        {
          type: "paragraph",
          text: "MCP yang rapi punya batas yang jelas: satu domain masalah, nama tool yang bisa ditebak, deskripsi kapan dipakai, dan tidak menyimpan rahasia di kode. Di bawah ini kerangka TypeScript minimal dengan SDK resmi.",
          webOnly: true,
        },
        {
          type: "code",
          caption: "Struktur folder yang rapi",
          lines: [
            "my-mcp-server/",
            "├── package.json",
            "├── tsconfig.json",
            "└── src/",
            "    └── index.ts",
          ],
          webOnly: true,
        },
        {
          type: "os-code",
          caption: "Scaffold proyek",
          note: "Jalankan di folder kosong. Lalu isi src/index.ts dengan kerangka di blok berikutnya.",
          variants: {
            mac: {
              lines: [
                "mkdir my-mcp-server && cd my-mcp-server",
                "npm init -y",
                "npm install @modelcontextprotocol/sdk zod",
                "npm install -D typescript @types/node tsx",
                "npx tsc --init --rootDir src --outDir dist \\",
                "  --module nodenext --moduleResolution nodenext \\",
                "  --target es2022 --esModuleInterop",
              ],
            },
            linux: {
              lines: [
                "mkdir my-mcp-server && cd my-mcp-server",
                "npm init -y",
                "npm install @modelcontextprotocol/sdk zod",
                "npm install -D typescript @types/node tsx",
                "npx tsc --init --rootDir src --outDir dist \\",
                "  --module nodenext --moduleResolution nodenext \\",
                "  --target es2022 --esModuleInterop",
              ],
            },
            windows: {
              caption: "PowerShell",
              lines: [
                "mkdir my-mcp-server; cd my-mcp-server",
                "npm init -y",
                "npm install @modelcontextprotocol/sdk zod",
                "npm install -D typescript @types/node tsx",
                "npx tsc --init --rootDir src --outDir dist `",
                "  --module nodenext --moduleResolution nodenext `",
                "  --target es2022 --esModuleInterop",
              ],
            },
          },
          webOnly: true,
        },
        {
          type: "code",
          caption: "src/index.ts: kerangka tool satu fungsi",
          lines: [
            'import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";',
            'import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";',
            'import { z } from "zod";',
            "",
            "const server = new McpServer({",
            '  name: "halo-waktu",',
            '  version: "1.0.0",',
            "});",
            "",
            "server.tool(",
            '  "waktu_sekarang",',
            '  "Mengembalikan tanggal dan jam lokal mesin ini.",',
            "  {},",
            "  async () => ({",
            '    content: [{ type: "text", text: new Date().toString() }],',
            "  }),",
            ");",
            "",
            "const transport = new StdioServerTransport();",
            "await server.connect(transport);",
          ],
          webOnly: true,
        },
        {
          type: "os-code",
          caption: "Sambungkan server buatanmu ke Claude Code",
          note: "Ganti path absolut ke folder proyekmu. Di Desktop, masukkan command/args yang sama ke mcpServers.",
          variants: {
            mac: {
              lines: [
                "claude mcp add --transport stdio halo-waktu -- \\",
                "  npx tsx /Users/username/my-mcp-server/src/index.ts",
                "",
                "claude mcp get halo-waktu",
              ],
            },
            linux: {
              lines: [
                "claude mcp add --transport stdio halo-waktu -- \\",
                '  npx tsx "$HOME/my-mcp-server/src/index.ts"',
                "",
                "claude mcp get halo-waktu",
              ],
            },
            windows: {
              caption: "PowerShell",
              lines: [
                "claude mcp add --transport stdio halo-waktu -- `",
                '  npx tsx "$env:USERPROFILE\\my-mcp-server\\src\\index.ts"',
                "",
                "claude mcp get halo-waktu",
              ],
            },
          },
          webOnly: true,
        },
        {
          type: "cards",
          items: [
            {
              title: "Nama tool jelas",
              text: "Pakai kata kerja + objek, misalnya waktu_sekarang atau list_invoice_open.",
            },
            {
              title: "Deskripsi jujur",
              text: "Tulis kapan tool ini dipakai, supaya Claude tidak menebak-nebak.",
            },
            {
              title: "Rahasia di env",
              text: "API key masuk lewat environment variable, jangan di-hardcode di index.ts.",
            },
          ],
          webOnly: true,
        },
      ],
    },
    {
      id: "tips",
      kicker: "Supaya aman",
      title: "Tips dan kesalahan umum",
      subtitle: "Tiga kebiasaan yang menjaga MCP tetap sehat.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Tiga tip: folder sempit, sumber terpercaya, dan uji di terminal dulu.",
          caption:
            "Berdiri. Pilih tip yang paling sering kamu langgar. 40 detik ke sebelah. Duduk: screenshot /mcp atau konektor plus satu permintaan kerja asli yang sudah berhasil.",
          items: [
            { label: "Folder sempit", icon: "folder", tone: "blue" },
            { label: "Sumber aman", icon: "lock", tone: "red" },
            { label: "Uji dulu", icon: "test", tone: "yellow" },
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Izinkan folder seminimal mungkin",
          text: "Jangan langsung kasih akses ke seluruh home directory. Mulai dari satu folder kerja.",
          webOnly: true,
        },
        {
          type: "callout",
          tone: "warn",
          title: "Pasang hanya dari sumber yang kamu percaya",
          text: "MCP server bisa menjalankan perintah di mesinmu. Baca dulu apa yang dia tawarkan sebelum menyambung.",
          webOnly: true,
        },
        {
          type: "callout",
          tone: "info",
          title: "JSON salah = server diam",
          text: "Di Desktop, koma atau path relatif yang salah sering membuat server tidak muncul. Cek log Claude, atau jalankan perintah server manual di terminal.",
          webOnly: true,
        },
        {
          type: "os-code",
          caption: "Lihat log Claude Desktop (kalau server gagal connect)",
          variants: {
            mac: {
              lines: ["tail -n 20 -f ~/Library/Logs/Claude/mcp*.log"],
            },
            linux: {
              caption: "Claude Code",
              lines: [
                "claude mcp list",
                "claude mcp get filesystem",
                "# Error koneksi biasanya tampil di output perintah di atas",
              ],
            },
            windows: {
              caption: "Command Prompt",
              lines: ['type "%APPDATA%\\Claude\\logs\\mcp.log"'],
            },
          },
          webOnly: true,
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Apa itu MCP di Claude?",
      a: "MCP (Model Context Protocol) adalah cara standar supaya Claude bisa memakai alat dan data di luar chat, misalnya file di laptop atau layanan online, lewat program kecil yang disebut MCP server.",
    },
    {
      q: "Kapan aku pakai Skills, kapan MCP?",
      a: "Pakai Skills waktu kamu mau menyimpan cara kerja yang dipanggil berulang dengan nama. Pakai MCP waktu Claude perlu menyentuh alat atau data di luar chat, misalnya file di laptop atau layanan online.",
    },
    {
      q: "Apakah aku perlu bisa coding untuk memakai MCP?",
      a: "Untuk memasang server siap pakai, biasanya cukup mengedit file config atau menjalankan perintah claude mcp add. Untuk membuat server sendiri, kamu perlu dasar Node.js atau mengikuti scaffold resmi.",
    },
    {
      q: "Di mana file config Claude Desktop disimpan?",
      a: "Di macOS: ~/Library/Application Support/Claude/claude_desktop_config.json. Di Windows: %APPDATA%\\Claude\\claude_desktop_config.json. Di Linux, jalur utama biasanya Claude Code dengan claude mcp add atau file .mcp.json.",
    },
    {
      q: "Bagaimana cara cek MCP sudah tersambung?",
      a: "Di Claude Desktop, buka connectors / manage connectors dan pastikan servermu muncul. Di Claude Code, ketik /mcp atau jalankan claude mcp list di terminal.",
    },
    {
      q: "Apakah MCP aman?",
      a: "Aman kalau kamu membatasi folder atau API yang diizinkan, hanya memasang server dari sumber terpercaya, dan membaca dialog approve sebelum mengizinkan aksi. Server berjalan dengan izin akunmu.",
    },
  ],
  glossary: [
    {
      term: "MCP",
      def: "Model Context Protocol: cara standar supaya asisten AI seperti Claude bisa menyambung ke alat dan data di luar chat.",
    },
    {
      term: "MCP server",
      def: "Program yang menawarkan tool (baca file, panggil API, dll.) kepada Claude lewat protokol MCP.",
    },
    {
      term: "MCP client",
      def: "Aplikasi yang memanggil MCP server. Di sini client-nya adalah Claude Desktop atau Claude Code.",
    },
    {
      term: "Claude Desktop",
      def: "Aplikasi desktop resmi Claude (macOS dan Windows) yang bisa memuat MCP lewat file konfigurasi JSON.",
    },
    {
      term: "Claude Code",
      def: "CLI agent Claude di terminal. MCP bisa ditambah lewat perintah claude mcp add atau file .mcp.json.",
    },
  ],
  howto: {
    name: "Cara memasang MCP filesystem di Claude",
    steps: [
      {
        name: "Pasang Node.js",
        text: "Pastikan node --version dan npx --version berjalan di terminal Mac, Linux, atau Windows.",
      },
      {
        name: "Pilih jalur Claude",
        text: "Pakai Claude Desktop (edit claude_desktop_config.json) atau Claude Code (claude mcp add).",
      },
      {
        name: "Tambah server filesystem",
        text: "Daftarkan @modelcontextprotocol/server-filesystem dengan path folder yang kamu izinkan saja.",
      },
      {
        name: "Restart atau cek status",
        text: "Restart Claude Desktop, atau jalankan claude mcp list / ketik /mcp di Claude Code.",
      },
      {
        name: "Uji dengan permintaan nyata",
        text: "Minta Claude membuat atau membaca file di folder yang diizinkan, lalu approve dengan membaca path-nya.",
      },
    ],
  },
  sources: [
    {
      label: "Model Context Protocol: Connect to local MCP servers",
      url: "https://modelcontextprotocol.io/docs/develop/connect-local-servers",
    },
    {
      label: "Model Context Protocol: Build a server",
      url: "https://modelcontextprotocol.io/docs/develop/build-server",
    },
    {
      label: "Claude Code Docs: MCP",
      url: "https://code.claude.com/docs/en/mcp",
    },
  ],
};

const claudeCowork: EduModule = {
  toolSlug: "claude",
  toolName: "Claude",
  slug: "cowork",
  moduleName: "Cowork",
  level: "Level dasar",
  readingLabel: "sekitar 16 menit",
  h1: "Claude Cowork siap pakai",
  tagline: "Dari unduh Claude Desktop sampai tab Cowork hidup.",
  heroLede:
    "[[Claude Cowork]] adalah mode kerja di Claude Desktop yang bisa mengerjakan tugas bertahap di komputermu: baca file, tulis file, dan (kalau kamu izinkan) menggerakkan mouse serta keyboard. Halaman ini memandu dari cek kelayakan, install, login, setup Cowork, computer use, izin folder, sampai perbaikan error Windows yang sering muncul: Missing HCS services.",
  metaTitle: "Cara Pasang Claude Cowork di Windows | Fix Missing HCS",
  metaDescription:
    "Panduan pasang Claude Desktop dan Claude Cowork sampai siap pakai: cek plan berbayar, install, login, setup Cowork, enable computer use, izin folder, dan cara memperbaiki Missing HCS services (HNS, vmcomputer, vfpext) di Windows. Dari AI Training Indonesia oleh Aurelius Ivan Wijaya.",
  keywords: [
    "cara pasang claude cowork",
    "claude cowork windows",
    "missing hcs services claude",
    "missing hcs services hns vmcomputer vfpext",
    "claude desktop install windows",
    "enable computer use claude",
    "virtual machine platform claude cowork",
    "setup claude cowork bahasa indonesia",
    "tutorial claude cowork",
    "claude cowork untuk pemula",
  ],
  updated: "20 Juli 2026",
  datePublished: "2026-07-20",
  dateModified: "2026-07-20",
  slides: [
    {
      id: "apa-itu",
      kicker: "Claude · Modul Cowork",
      title: "Apa itu Claude Cowork?",
      subtitle: "Mode kerja yang bisa menyentuh file di laptopmu.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Claude Desktop membuka tab Cowork lalu mengerjakan tugas di folder kerja.",
          caption:
            "30 detik: tulis satu tugas berulang di laptopmu yang ingin diserahkan ke Cowork. Angkat tangan kalau siap cerita.",
          items: [
            { label: "Claude Desktop", icon: "spark", tone: "clay" },
            { label: "Tab Cowork", icon: "message", tone: "blue" },
            { label: "File di laptop", icon: "folder", tone: "green" },
          ],
        },
        {
          type: "lead",
          text: "Di Claude Desktop ada dua jalur umum: [[Chat]] untuk ngobrol biasa, dan [[Claude Cowork]] untuk menyerahkan tugas yang butuh akses ke file atau layar. Menurut Help Center Anthropic, Cowork tersedia di plan berbayar (Pro, Max, Team, Enterprise).",
          webOnly: true,
        },
        {
          type: "callout",
          tone: "tip",
          title: "Analogi singkat",
          text: "Chat itu seperti ngobrol di meja. Cowork itu seperti kasih kunci folder kerja ke asisten, lalu biarkan dia kerjakan sampai selesai.",
          webOnly: true,
        },
        {
          type: "paragraph",
          text: "Halaman ini mengikuti alur Windows di kelas. Menurut dokumentasi Anthropic, Claude Desktop (dan Cowork) juga ada di macOS; langkah installernya beda, tapi login, tab Cowork, computer use, dan izin folder polanya sama.",
          webOnly: true,
        },
      ],
    },
    {
      id: "kelayakan",
      kicker: "Sebelum unduh",
      title: "Cek kelayakan dulu",
      subtitle: "Cowork tidak jalan di free tier.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Cek plan berbayar, admin Windows, dan virtualisasi sebelum install.",
          caption:
            "Sekarang: buka claude.ai/settings. Angkat tangan kalau plan-mu Pro, Max, Team, atau Enterprise.",
          items: [
            { label: "Plan berbayar", icon: "lock", tone: "red" },
            { label: "Hak admin", icon: "settings", tone: "yellow" },
            { label: "Virtualisasi", icon: "test", tone: "blue" },
          ],
        },
        {
          type: "cards",
          items: [
            {
              title: "Plan berbayar",
              text: "Claude Cowork butuh Pro, Max, Team, atau Enterprise. Free tier tidak punya Cowork.",
            },
            {
              title: "Hak admin (Windows)",
              text: "Install dan fitur Virtual Machine Platform sering minta izin admin. Siapkan password admin sebelum mulai.",
            },
            {
              title: "Virtualisasi hardware",
              text: "Di Windows, error Missing HCS di kelas sering terkait Virtual Machine Platform yang belum nyala. Kalau tab Cowork abu-abu, cek fitur itu dulu.",
            },
          ],
          webOnly: true,
        },
        {
          type: "callout",
          tone: "warn",
          title: "Jangan unduh dulu kalau plan masih free",
          text: "Upgrade dulu, atau pakai akun Google/email yang sudah punya subscription Anthropic. Baru lanjut install.",
          webOnly: true,
        },
      ],
    },
    {
      id: "install-desktop",
      kicker: "Install",
      title: "Install Claude Desktop",
      subtitle: "Unduh dari claude.com/download, lalu jalankan installer.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Unduh installer Claude Desktop, buka file, lalu install sampai selesai.",
          caption:
            "Ivan demo unduh 40 detik. Kamu ikuti di laptop: Download for Windows, lalu buka file .exe dari folder Downloads.",
          items: [
            { label: "claude.com/download", icon: "search", tone: "blue" },
            { label: "Installer .exe", icon: "file", tone: "yellow" },
            { label: "Allow / Install", icon: "enter", tone: "green" },
          ],
        },
        {
          type: "steps",
          items: [
            {
              text: "Buka https://claude.com/download dan pilih Download for Windows.",
              hint: "Mac: pilih unduhan macOS di halaman yang sama.",
            },
            {
              text: "Simpan file installer (biasanya ke folder Downloads).",
            },
            {
              text: "Buka file dari Recent downloads di browser, atau double-click di File Explorer.",
            },
            {
              text: "Biarkan instalasi selesai. Kalau Windows minta permission, pilih Allow. Izin kamera boleh ditunda.",
            },
            {
              text: "Tunggu layar Get Started muncul. Sampai sini instalasi selesai.",
            },
          ],
          webOnly: true,
        },
        {
          type: "gif",
          alt: "Proses unduh dan install Claude Desktop di Windows sampai layar Get Started.",
          caption: "Rekaman: unduh → buka .exe → Allow → Get Started.",
          describe:
            "Browser di claude.com/download, klik Download for Windows, buka file dari Downloads, izin UAC Allow, tunggu sampai jendela Claude menampilkan Get Started.",
          webOnly: true,
        },
      ],
    },
    {
      id: "login",
      kicker: "Auth",
      title: "Login akun Anthropic",
      subtitle: "Google atau email, yang penting plan-nya berbayar.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Get Started lalu login dengan Google atau email yang punya subscription.",
          caption:
            "Pilih jalur loginmu: Google atau email. Pastikan akun yang sama dengan subscription Anthropic.",
          items: [
            { label: "Get Started", icon: "enter", tone: "clay" },
            { label: "Google / Email", icon: "message", tone: "blue" },
            { label: "Masuk Desktop", icon: "spark", tone: "green" },
          ],
        },
        {
          type: "cards",
          items: [
            {
              title: "Continue with Google",
              text: "Klik Continue with Google, pilih akun Google yang punya subscription Anthropic, lalu lanjut.",
            },
            {
              title: "Continue with email",
              text: "Isi email akun Anthropic, klik continue, buka email verifikasi, lalu klik Sign in to Claude.",
            },
          ],
          webOnly: true,
        },
        {
          type: "callout",
          tone: "info",
          title: "Akun salah = Cowork tetap kosong",
          text: "Kalau kamu login pakai akun free sementara subscription ada di akun lain, tab Cowork tidak akan hidup. Cek lagi email yang dipakai bayar.",
          webOnly: true,
        },
      ],
    },
    {
      id: "setup-cowork",
      kicker: "Setup",
      title: "Setup Cowork",
      subtitle: "Pindah ke tab Cowork, lalu biarkan workspace siap.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Buka tab Cowork, jalankan setup, tunggu download workspace selesai.",
          caption:
            "Pastikan kamu di tab Cowork. Kalau kelas memakai /setup-cowork, ketik sekarang dan tunggu selesai.",
          items: [
            { label: "Tab Cowork", icon: "select", tone: "blue" },
            { label: "/setup-cowork", icon: "slash", tone: "yellow" },
            { label: "Workspace siap", icon: "spark", tone: "green" },
          ],
        },
        {
          type: "steps",
          items: [
            {
              text: "Setelah login, buka Claude Desktop dan pilih tab Cowork.",
            },
            {
              text: "Di kelas, ketik /setup-cowork (pintasan kelas) untuk setup dengan instalasi default.",
              hint: "Di luar kelas, pilih Cowork di kotak pesan lalu deskripsikan tugasmu, sesuai Get started with Claude Cowork di Help Center Anthropic.",
            },
            {
              text: "Tunggu beberapa menit sampai Claude selesai mengunduh workspace. Jangan tutup aplikasinya di tengah jalan.",
            },
            {
              text: "Kalau muncul Setting up Claude's workspace, itu normal: Cowork sedang update ke versi terbaru.",
            },
          ],
          webOnly: true,
        },
        {
          type: "callout",
          tone: "warn",
          title: "Tab Cowork abu-abu?",
          text: "Kalau tab tidak bisa diklik dan hover menampilkan Missing HCS services, loncat ke slide Missing HCS. Selesaikan dulu sebelum lanjut computer use.",
          webOnly: true,
        },
      ],
    },
    {
      id: "computer-use",
      kicker: "Izin layar",
      title: "Nyalakan Computer Use",
      subtitle: "Izinkan Claude pakai screenshot, mouse, dan keyboard.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Buka Settings General lalu nyalakan toggle Enable computer use.",
          caption:
            "Ikuti bareng: Profile → Settings → General → Enable computer use → Turn on. Toggle biru = sudah hidup.",
          items: [
            { label: "Profile", icon: "settings", tone: "clay" },
            { label: "General", icon: "list", tone: "blue" },
            { label: "Computer use ON", icon: "lock", tone: "green" },
          ],
        },
        {
          type: "steps",
          items: [
            { text: "Klik ikon profile di Claude Desktop." },
            { text: "Buka Settings." },
            { text: "Pilih General." },
            {
              text: "Scroll ke bawah sampai menemukan toggle Enable computer use.",
            },
            {
              text: "Klik Turn on. Toggle berwarna biru berarti izin sudah diberikan.",
            },
          ],
          webOnly: true,
        },
        {
          type: "callout",
          tone: "info",
          title: "Apa yang diizinkan",
          text: "Computer use memberi Claude akses screenshot, kontrol mouse, input keyboard, dan interaksi dengan antarmuka di layar. Dokumentasi: platform.claude.com/docs (computer-use-tool).",
          webOnly: true,
        },
      ],
    },
    {
      id: "izin-folder",
      kicker: "Izin file",
      title: "Kasih akses folder kerja",
      subtitle: "Claude hanya menyentuh folder yang kamu pilih.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Buat project Cowork, add folder belajar-claude, lalu Select folder.",
          caption:
            "Buat project belajar claude + folder belajar-claude. Select folder. Itu saja untuk latihan pertama.",
          items: [
            { label: "New project", icon: "plus", tone: "blue" },
            { label: "Add folder", icon: "folder", tone: "yellow" },
            { label: "Read / write", icon: "file", tone: "green" },
          ],
        },
        {
          type: "steps",
          items: [
            {
              text: "Di tab Cowork, klik Project or folder, lalu Create new project.",
            },
            {
              text: "Isi nama project, misalnya belajar claude.",
            },
            {
              text: "Klik Add folder di kanan atas, buat folder baru bernama belajar-claude, lalu Enter.",
            },
            {
              text: "Double-click folder itu sampai path menunjukkan kamu berada di dalam belajar-claude.",
            },
            {
              text: "Klik Select folder. Claude mendapat izin read, write, dan manage di folder ini saja.",
            },
          ],
          webOnly: true,
        },
        {
          type: "callout",
          tone: "tip",
          title: "Mulai dari folder sempit",
          text: "Jangan langsung kasih akses ke seluruh Documents atau home. Satu folder latihan dulu, baru tambah folder kerja yang benar-benar dibutuhkan.",
          webOnly: true,
        },
      ],
    },
    {
      id: "missing-hcs",
      kicker: "Troubleshooting Windows",
      title: "Fix Missing HCS Services",
      subtitle: "Tab Cowork abu-abu? Di kelas, cek Virtual Machine Platform dulu.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Pesan Missing HCS services diperbaiki dengan menyalakan Virtual Machine Platform lalu restart.",
          caption:
            "Hover tab Cowork. Kalau muncul Missing HCS services: HNS, vmcomputer, vfpext, ikuti langkah Windows Features sekarang.",
          items: [
            { label: "HCS missing", icon: "tag", tone: "red" },
            { label: "VM Platform", icon: "settings", tone: "yellow" },
            { label: "Restart", icon: "enter", tone: "green" },
          ],
        },
        {
          type: "lead",
          text: "Gejala: tab Cowork abu-abu dan tidak bisa diklik. Saat di-hover muncul pesan Missing HCS services: HNS, vmcomputer, vfpext. HCS di sini merujuk layanan hypervisor Windows; di kelas, error ini sering hilang setelah Virtual Machine Platform nyala.",
          webOnly: true,
        },
        {
          type: "cards",
          items: [
            {
              title: "Penyebab umum",
              text: "Virtual Machine Platform belum dicentang, virtualisasi BIOS belum nyala, akun tanpa hak admin, atau hardware tidak mendukung virtualisasi.",
            },
            {
              title: "Perbaikan pertama",
              text: "Nyalakan Windows feature Virtual Machine Platform, lalu restart. Di kelas Windows, ini yang paling sering membuat tab Cowork bisa diklik lagi.",
            },
          ],
          webOnly: true,
        },
        {
          type: "steps",
          items: [
            {
              text: "Klik tombol Windows di kiri bawah, cari turn windows features on or off, lalu buka.",
            },
            {
              text: "Scroll ke bawah sampai Virtual Machine Platform.",
            },
            {
              text: "Centang Virtual Machine Platform kalau belum, lalu klik OK.",
            },
            {
              text: "Tunggu Windows mencari file yang dibutuhkan.",
            },
            {
              text: "Simpan semua pekerjaan, lalu Restart now.",
            },
            {
              text: "Setelah boot ulang, buka Claude Desktop lagi dan cek tab Cowork sudah bisa diklik.",
            },
          ],
          webOnly: true,
        },
        {
          type: "callout",
          tone: "warn",
          title: "Kalau masih gagal setelah restart",
          text: "Cek di BIOS/UEFI apakah Intel VT-x atau AMD-V sudah enabled, pastikan kamu login sebagai admin, dan update Claude Desktop ke versi terbaru dari claude.com/download.",
          webOnly: true,
        },
        {
          type: "gif",
          alt: "Menyalakan Virtual Machine Platform di Windows Features lalu restart.",
          caption: "Rekaman: Windows Features → centang Virtual Machine Platform → OK → Restart.",
          describe:
            "Start menu → turn windows features on or off → scroll ke Virtual Machine Platform → centang → OK → dialog restart → Restart now → setelah boot, Claude Desktop dengan tab Cowork aktif.",
          webOnly: true,
        },
      ],
    },
    {
      id: "tips",
      kicker: "Siap pakai",
      title: "Checklist sebelum tugas pertama",
      subtitle: "Empat centang, baru mulai kerja.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Checklist: plan, Cowork hidup, computer use, folder izin.",
          caption:
            "Berdiri. Sebut angka yang belum kamu centang. Duduk lagi kalau keempatnya sudah hijau.",
          items: [
            { label: "Plan berbayar", icon: "lock", tone: "red" },
            { label: "Cowork hidup", icon: "spark", tone: "clay" },
            { label: "Computer use", icon: "settings", tone: "blue" },
            { label: "Folder izin", icon: "folder", tone: "green" },
          ],
        },
        {
          type: "cards",
          items: [
            {
              title: "Plan & login benar",
              text: "Akun di Desktop sama dengan akun yang bayar Pro/Max/Team/Enterprise.",
            },
            {
              title: "Tab Cowork bisa diklik",
              text: "Tidak abu-abu. Kalau masih Missing HCS, selesaikan Virtual Machine Platform dulu.",
            },
            {
              title: "Computer use ON",
              text: "Toggle di Settings → General sudah biru.",
            },
            {
              title: "Satu folder latihan",
              text: "Project punya folder sempit (misalnya belajar-claude) sebelum menyentuh file penting.",
            },
          ],
          webOnly: true,
        },
        {
          type: "callout",
          tone: "tip",
          title: "Tugas pertama yang aman",
          text: "Minta Cowork merapikan isi folder latihan: buat subfolder, pindahkan file dummy, tulis satu catatan Markdown. Baru naik ke file kerja sungguhan.",
          webOnly: true,
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Apa itu Claude Cowork?",
      a: "Claude Cowork adalah mode kerja di Claude Desktop yang bisa mengerjakan tugas bertahap. Menurut Help Center Anthropic, Cowork juga ada di web dan mobile untuk plan berbayar (rollout bertahap). Di Desktop, Cowork bisa membaca dan menulis file di folder yang kamu izinkan, dan kalau dinyalakan, memakai computer use di layarmu.",
    },
    {
      q: "Apakah Claude Cowork gratis?",
      a: "Tidak. Menurut Get started with Claude Cowork di Help Center Anthropic, Cowork tersedia di plan berbayar: Pro, Max, Team, dan Enterprise. Free tier tidak punya Cowork.",
    },
    {
      q: "Apa arti Missing HCS services di Claude Cowork?",
      a: "Di Windows, pesan Missing HCS services: HNS, vmcomputer, vfpext biasanya muncul saat tab Cowork abu-abu. Di kelas, perbaikan pertama yang sering berhasil: nyalakan Virtual Machine Platform di Turn Windows features on or off, lalu restart.",
    },
    {
      q: "Bagaimana cara memperbaiki Missing HCS services Claude?",
      a: "Buka Turn Windows features on or off, centang Virtual Machine Platform, klik OK, simpan pekerjaan, lalu restart. Setelah boot ulang, buka Claude Desktop dan cek tab Cowork. Kalau masih gagal, cek virtualisasi di BIOS dan hak admin. Langkah ini dari runbook kelas AI Training Indonesia, diselaraskan dengan gejala yang muncul di Windows.",
    },
    {
      q: "Di mana tombol Enable computer use?",
      a: "Di Claude Desktop: Profile → Settings → General, lalu scroll ke Enable computer use dan Turn on. Toggle biru berarti sudah aktif.",
    },
    {
      q: "Apakah Mac juga bisa pakai Claude Cowork?",
      a: "Ya. Help Center Anthropic mencantumkan Claude Desktop untuk macOS dan Windows. Langkah Missing HCS dan Virtual Machine Platform hanya relevan di Windows.",
    },
  ],
  glossary: [
    {
      term: "Claude Cowork",
      def: "Mode kerja di Claude yang mengerjakan tugas bertahap dan, di Desktop, bisa menyentuh file serta layar sesuai izinmu.",
    },
    {
      term: "Chat",
      def: "Mode obrolan biasa di Claude Desktop. Beda tab dengan Cowork.",
    },
    {
      term: "Computer use",
      def: "Izin supaya Claude bisa memakai screenshot, mouse, dan keyboard di komputermu.",
    },
    {
      term: "HCS",
      def: "Layanan terkait hypervisor di Windows. Di kelas, error Missing HCS services di tab Cowork sering hilang setelah Virtual Machine Platform dinyalakan dan PC di-restart.",
    },
    {
      term: "Virtual Machine Platform",
      def: "Fitur Windows yang harus dinyalakan; di kelas, error Missing HCS di tab Cowork sering hilang setelah ini dinyalakan dan PC di-restart.",
    },
    {
      term: "Claude Desktop",
      def: "Aplikasi desktop resmi Claude untuk macOS dan Windows, tempat Cowork, computer use, dan akses folder lokal dijalankan.",
    },
  ],
  howto: {
    name: "Cara pasang Claude Cowork sampai siap pakai di Windows",
    steps: [
      {
        name: "Cek plan berbayar",
        text: "Pastikan akun Anthropic-mu Pro, Max, Team, atau Enterprise sebelum mengunduh.",
      },
      {
        name: "Install Claude Desktop",
        text: "Unduh dari claude.com/download, jalankan installer Windows, izinkan permission yang diminta.",
      },
      {
        name: "Login",
        text: "Masuk dengan Google atau email yang terhubung ke subscription Anthropic.",
      },
      {
        name: "Setup Cowork",
        text: "Buka tab Cowork. Di kelas, jalankan /setup-cowork (pintasan kelas) dan tunggu workspace selesai diunduh.",
      },
      {
        name: "Nyalakan computer use dan izin folder",
        text: "Settings → General → Enable computer use, lalu buat project dengan satu folder latihan.",
      },
      {
        name: "Perbaiki Missing HCS bila perlu",
        text: "Kalau tab abu-abu, centang Virtual Machine Platform di Windows Features, restart, lalu buka Claude lagi.",
      },
    ],
  },
  sources: [
    {
      label: "Anthropic Help: Get started with Claude Cowork",
      url: "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork",
    },
    {
      label: "Anthropic Help: Let Claude use your computer in Cowork",
      url: "https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork",
    },
    {
      label: "Claude Desktop download",
      url: "https://claude.com/download",
    },
    {
      label: "Anthropic Docs: Computer use tool",
      url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool",
    },
    {
      label: "Runbook kelas: Install Claude Desktop & fix Missing HCS (AI Training Indonesia)",
      url: "https://docs.google.com/document/d/1Jef4OUnI5-vQ-FcLd2A7PrVBMCPNUkZ4nwYFrtUIgBM/edit",
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

const claudeSubagent: EduModule = {
  toolSlug: "claude",
  toolName: "Claude",
  slug: "subagent",
  moduleName: "Subagent",
  level: "Level menengah",
  readingLabel: "sekitar 12 menit",
  h1: "Subagent di Claude",
  tagline: "Satu tugas besar, dibagi ke asisten terpisah.",
  heroLede:
    "Subagent adalah asisten tambahan yang dipanggil Claude untuk mengerjakan satu tugas khusus di ruang terpisah, lalu mengirim ringkasan hasilnya ke percakapan utama. Halaman ini membahasnya dari nol: apa itu subagent, cara membuat satu subagent di Claude Code, cara menjalankan beberapa subagent sekaligus, hasil percobaan waktu dan token, dan cara memakainya di Claude Cowork.",
  metaTitle: "Apa itu Subagent Claude? Cara Membuat dan Memakainya",
  metaDescription:
    "Panduan dasar subagent Claude untuk pemula: apa itu subagent dan multiple subagent, cara membuatnya di Claude Code, hasil perbandingan waktu dan token, dan cara memakainya di Claude Cowork. Dari AI Training Indonesia oleh Aurelius Ivan Wijaya.",
  keywords: [
    "apa itu subagent claude",
    "subagent claude code",
    "multiple subagent",
    "cara membuat subagent claude",
    "claude agents folder",
    "subagent claude cowork",
    "belajar claude bahasa indonesia",
    "agent claude untuk pemula",
  ],
  updated: "22 Juli 2026",
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  slides: [
    {
      id: "apa-itu",
      kicker: "Claude · Modul Subagent",
      title: "Apa itu subagent?",
      subtitle: "Satu asisten, satu tugas, satu ringkasan.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Tugas besar masuk ke agen utama, diteruskan ke satu subagent, lalu kembali sebagai ringkasan.",
          caption:
            "Bayangkan satu tugas panjang di meja kerjamu. 20 detik: tulis satu tugas nyata yang mau kamu titipkan.",
          items: [
            { label: "Tugas besar", icon: "message", tone: "yellow" },
            { label: "Subagent kerja", icon: "search", tone: "blue" },
            { label: "Ringkasan balik", icon: "notes", tone: "green" },
          ],
        },
        {
          type: "lead",
          text: "Bayangkan seorang manajer proyek menerima tugas besar. Ia menugaskan satu staf untuk mencari data. Staf itu bekerja di ruangannya sendiri, membuka banyak arsip, lalu menyerahkan satu lembar kesimpulan.",
        },
        {
          type: "paragraph",
          text: "Begitulah cara kerja [[subagent]]. Claude sebagai agen utama memanggil asisten tambahan untuk satu tugas khusus, asisten itu bekerja terpisah, dan yang kembali ke percakapan utama hanya ringkasan hasilnya.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Kenapa ini berguna",
          text: "Percakapan utama tetap rapi karena semua detail pencarian tinggal di dalam subagent.",
          webOnly: true,
        },
      ],
    },
    {
      id: "multiple-subagent",
      kicker: "Konsep",
      title: "Multiple subagent",
      subtitle: "Beberapa staf bekerja di waktu yang sama.",
      blocks: [
        {
          type: "lead",
          text: "Sekarang proyeknya makin besar. Manajer menugaskan tiga staf sekaligus: satu mencari data penjualan, satu memeriksa laporan tahun lalu, satu merangkum komunikasi klien. Ketiganya bekerja bersamaan, lalu masing-masing menyerahkan ringkasannya. Inilah [[multiple subagent]].",
        },
        {
          type: "cards",
          items: [
            {
              title: "Lebih cepat",
              text: "Beberapa tugas berjalan bersamaan, jadi total waktunya mendekati tugas yang paling lama saja.",
            },
            {
              title: "Lebih rapi",
              text: "Percakapan utama hanya menerima ringkasan dari tiap subagent.",
            },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Satu batasan penting",
          text: "Para staf ini tidak saling bicara. Mereka hanya melapor ke agen utama. Kalau mereka perlu berdiskusi dulu sebelum melapor, itu konsep lain namanya Agent Team, dibahas di modul terpisah.",
        },
      ],
    },
    {
      id: "buat-folder",
      kicker: "Praktik · Claude Code",
      title: "Langkah 1: siapkan folder project",
      subtitle: "Subagent disimpan di dalam folder project.",
      blocks: [
        {
          type: "gif",
          src: "/assets/edu/claude-subagent/01-buat-folder-project.png",
          alt: "Jendela File Explorer memperlihatkan folder bernama cahaya-topup di dalam folder Repositories.",
          caption:
            "Folder project bernama cahaya-topup. Nama dan lokasinya bebas. Buat sekarang, 60 detik.",
          describe:
            "Membuat folder project baru di File Explorer sebagai tempat subagent disimpan.",
        },
        {
          type: "steps",
          items: [
            {
              text: "Buat satu folder project baru, misalnya cahaya-topup.",
              hint: "Lokasinya bebas. Contoh di sini memakai folder Repositories.",
            },
            {
              text: "Ingat lokasinya, karena semua langkah berikutnya dijalankan dari folder ini.",
            },
          ],
        },
      ],
    },
    {
      id: "buka-terminal",
      kicker: "Praktik · Claude Code",
      title: "Langkah 2: buka terminal di folder itu",
      subtitle: "Terminal harus berada di dalam folder project.",
      blocks: [
        {
          type: "gif",
          src: "/assets/edu/claude-subagent/02-open-in-terminal.png",
          alt: "Menu klik kanan di File Explorer dengan pilihan Open in Terminal disorot.",
          caption:
            "Di Windows: klik kanan di dalam folder, lalu pilih Open in Terminal.",
          describe:
            "Klik kanan di dalam folder project lalu memilih Open in Terminal.",
        },
        {
          type: "os-code",
          caption: "Kalau lebih suka mengetik, pindah folder dari terminal",
          note: "Ganti nama folder sesuai punyamu.",
          defaultOs: "windows",
          variants: {
            windows: {
              lines: ["cd C:\\Users\\<nama>\\Repositories\\cahaya-topup"],
              caption: "PowerShell",
            },
            mac: {
              lines: ["cd ~/Repositories/cahaya-topup"],
              caption: "Terminal",
            },
            linux: {
              lines: ["cd ~/Repositories/cahaya-topup"],
              caption: "Terminal",
            },
          },
        },
      ],
    },
    {
      id: "jalankan-claude",
      kicker: "Praktik · Claude Code",
      title: "Langkah 3: jalankan Claude",
      subtitle: "Satu kata perintah untuk masuk ke Claude Code.",
      blocks: [
        {
          type: "gif",
          src: "/assets/edu/claude-subagent/03-jalankan-claude.png",
          alt: "Jendela PowerShell dengan perintah claude diketik di dalam folder project.",
          caption:
            "Ketik claude lalu tekan Enter. Perhatikan path-nya sudah menunjuk ke folder project.",
          describe:
            "Mengetik perintah claude di terminal yang berada di folder project.",
        },
        {
          type: "code",
          caption: "Di dalam folder project",
          lines: ["claude"],
        },
      ],
    },
    {
      id: "claude-siap",
      kicker: "Praktik · Claude Code",
      title: "Tampilan ketika Claude siap",
      subtitle: "Kalau layarmu seperti ini, kamu sudah masuk.",
      blocks: [
        {
          type: "gif",
          src: "/assets/edu/claude-subagent/04-claude-code-siap.png",
          alt: "Layar sambutan Claude Code menampilkan versi, model, dan path folder project.",
          caption:
            "Layar sambutan [[Claude Code]]. Di bagian bawah kotak terlihat folder project yang sedang aktif.",
          describe:
            "Layar sambutan Claude Code setelah perintah claude dijalankan.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Cek dulu sebelum lanjut",
          text: "Folder di layar sambutan harus sama dengan folder project kamu. Kalau beda, ketik /exit, pindah folder, lalu jalankan claude lagi.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Di kelas",
          text: "Angkat tangan kalau folder kamu belum cocok. Ivan keliling cek.",
          deckOnly: true,
        },
      ],
    },
    {
      id: "minta-subagent",
      kicker: "Praktik · Claude Code",
      title: "Langkah 4: minta Claude membuat subagent",
      subtitle: "Jelaskan tugasnya, Claude yang menyusun filenya.",
      blocks: [
        {
          type: "gif",
          src: "/assets/edu/claude-subagent/05-minta-buat-subagent.png",
          alt: "Permintaan pembuatan subagent price-checker diketik di kolom input Claude Code.",
          caption: "Tulis tugas subagent-nya sejelas mungkin, lalu tekan Enter.",
          describe:
            "Mengetik permintaan pembuatan subagent di kolom input Claude Code.",
        },
        {
          type: "code",
          caption: "Contoh permintaan",
          lines: [
            "Buat subagent price-checker yang membandingkan harga top up game",
            "di beberapa toko Indonesia lalu mengembalikan tabel perbandingan.",
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Pakai tugasmu sendiri",
          text: "Ganti isi permintaannya dengan tugas yang kamu tulis di slide pertama. Ketik sekarang, 3 menit.",
        },
        {
          type: "code",
          caption: "Versi panjang dalam bahasa Inggris, kalau mau menyalin persis",
          lines: [
            "Create a price-checker subagent that compares game top-up",
            "prices (diamonds, UC, points, vouchers) across Indonesian",
            "marketplaces and official channels for any game, discovers",
            "relevant stores itself via web search, and returns a",
            "comparison table flagging the cheapest legitimate option",
          ],
          webOnly: true,
        },
      ],
    },
    {
      id: "subagent-jadi",
      kicker: "Praktik · Claude Code",
      title: "Subagent selesai dibuat",
      subtitle: "Claude melaporkan lokasi filenya.",
      blocks: [
        {
          type: "gif",
          src: "/assets/edu/claude-subagent/06-subagent-selesai-dibuat.png",
          alt: "Claude Code melaporkan bahwa definisi subagent price-checker sudah dibuat beserta ringkasan tugasnya.",
          caption:
            "Claude menyebut file yang dibuat dan alat apa saja yang boleh dipakai subagent itu.",
          describe:
            "Laporan Claude Code setelah selesai menyusun definisi subagent.",
        },
        {
          type: "paragraph",
          text: "Perhatikan dua hal di laporan itu: lokasi file yang dibuat, dan daftar alat yang boleh dipakai subagent tersebut. Subagent hanya bisa memakai alat yang disebut di situ.",
        },
      ],
    },
    {
      id: "cek-file",
      kicker: "Praktik · Claude Code",
      title: "Langkah 5: cek filenya",
      subtitle: "Subagent tersimpan sebagai satu file teks biasa.",
      blocks: [
        {
          type: "gif",
          src: "/assets/edu/claude-subagent/07-file-subagent-tersimpan.png",
          alt: "File Explorer membuka folder .claude/agents dan menampilkan file price-checker.md.",
          caption:
            "File price-checker.md ada di folder [[.claude/agents]]. Kalau file ini ada, subagent siap dipakai.",
          describe:
            "Membuka folder .claude/agents dan melihat file definisi subagent.",
        },
        {
          type: "os-code",
          caption: "Lokasi file subagent",
          note: "Folder .claude di dalam project berlaku untuk project itu saja. Folder di home berlaku untuk semua project.",
          defaultOs: "windows",
          variants: {
            windows: {
              lines: [
                "cahaya-topup\\.claude\\agents\\price-checker.md",
                "%USERPROFILE%\\.claude\\agents\\price-checker.md",
              ],
              caption: "Project, lalu global",
            },
            mac: {
              lines: [
                "cahaya-topup/.claude/agents/price-checker.md",
                "~/.claude/agents/price-checker.md",
              ],
              caption: "Project, lalu global",
            },
            linux: {
              lines: [
                "cahaya-topup/.claude/agents/price-checker.md",
                "~/.claude/agents/price-checker.md",
              ],
              caption: "Project, lalu global",
            },
          },
        },
        {
          type: "paragraph",
          text: "Filenya berbentuk markdown, jadi bisa kamu buka dan sunting sendiri kapan saja. Cara lain membuat subagent adalah menulis file ini langsung tanpa meminta Claude.",
          webOnly: true,
        },
      ],
    },
    {
      id: "jalankan-subagent",
      kicker: "Praktik · Claude Code",
      title: "Langkah 6: jalankan subagent-mu",
      subtitle: "Sekarang kita pakai subagent yang barusan kamu buat.",
      blocks: [
        {
          type: "code",
          caption:
            "Panggil subagent yang baru kamu buat. Ganti nama dan isi tugasnya dengan punyamu.",
          lines: [
            "Pakai subagent <nama-subagent-kamu> untuk <tugas yang kamu tulis",
            "di slide pertama>.",
          ],
        },
        {
          type: "code",
          caption: "Kalau kamu tadi ikut contohnya persis",
          lines: [
            "Pakai subagent price-checker untuk cek harga termurah",
            "top up 85 diamond Mobile Legends.",
          ],
        },
        {
          type: "gif",
          src: "",
          alt: "Claude memanggil subagent price-checker, lalu menampilkan tabel perbandingan harga.",
          caption:
            "Claude memanggil subagent-nya sendiri, lalu menyerahkan tabel hasilnya.",
          describe:
            "Claude Code memanggil subagent price-checker dan menampilkan tabel perbandingan harga sebagai hasil akhir.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Giliran kamu",
          text: "Jalankan sekarang, 4 menit. Pakai nama subagent yang tadi kamu buat, dan isi tugasnya dengan pekerjaanmu sendiri. Kalau muncul error, baca pesannya dari baris paling bawah.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Di kelas",
          text: "Yang tabelnya sudah keluar, angkat tangan. Yang error, biarkan di layar, kita baca bareng. Dua orang tunjukkan tabelnya di layar depan.",
          deckOnly: true,
        },
      ],
    },
    {
      id: "use-case",
      kicker: "Use case",
      title: "Satu tugas, tiga cara",
      subtitle: "Bandingkan harga top up 5 game di 7 toko.",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "Tanpa subagent",
              text: "Claude mengerjakan semua pencarian sendiri di percakapan utama, satu per satu.",
            },
            {
              title: "1 subagent",
              text: "Semua pencarian dititipkan ke satu subagent. Percakapan utama hanya menerima tabel akhirnya.",
            },
            {
              title: "5 subagent paralel",
              text: "Satu subagent memegang satu game, semuanya jalan bersamaan, hasilnya digabung jadi satu tabel.",
            },
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Coba sendiri",
          text: "Pakai tugas rutinmu sendiri sebagai gantinya, misalnya membandingkan harga dari beberapa pemasok.",
          webOnly: true,
        },
      ],
    },
    {
      id: "tebak-hasil",
      kicker: "Tebak dulu",
      title: "Mana yang paling cepat?",
      subtitle: "Pilih satu sebelum lanjut.",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "A. Tanpa subagent",
              text: "Nol waktu persiapan, tapi semua detail menumpuk di percakapan utama.",
            },
            {
              title: "B. 1 subagent",
              text: "Sekali waktu persiapan, dan context percakapan utama paling hemat.",
            },
            {
              title: "C. 5 subagent paralel",
              text: "Lima kali waktu persiapan, tapi kelimanya jalan bersamaan.",
            },
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Catat dulu",
          text: "Catat pilihanmu, lalu cocokkan dengan hasil pengukuran di slide berikutnya.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Di kelas",
          text: "Angkat tangan, satu pilihan per orang. Hitung jumlah suara tiap pilihan sebelum lanjut.",
          deckOnly: true,
        },
      ],
    },
    {
      id: "hasil-perbandingan",
      kicker: "Hasil percobaan",
      title: "Waktu dan pemakaian context",
      subtitle: "Angka dari satu kali percobaan di kelas.",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "Tanpa subagent",
              text: "Waktu 7 menit 6 detik. Context percakapan utama terpakai 95 ribu token.",
            },
            {
              title: "1 subagent",
              text: "Waktu 8 menit 10 detik. Context percakapan utama terpakai 31,7 ribu token.",
            },
            {
              title: "5 subagent paralel",
              text: "Waktu 5 menit 24 detik. Context percakapan utama terpakai 47,9 ribu token.",
            },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Baca angkanya sebagai pembanding",
          text: "Ini hasil satu kali percobaan di kelas pada Juli 2026 memakai Claude Code v2.1.216. Angka [[context]] di sini hanya menghitung sesi utama, jadi token yang dipakai di dalam subagent belum ikut dijumlahkan. Kalau kamu ulangi sendiri, angkanya bisa berbeda karena kecepatan situs yang dibuka ikut berpengaruh.",
        },
      ],
    },
    {
      id: "kapan-pakai",
      kicker: "Panduan pakai",
      title: "Kapan memakai subagent?",
      subtitle: "Lihat dua hal: panjang prosesnya, dan bisa dibagi atau tidak.",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "Pakai satu subagent",
              text: "Kalau prosesnya panjang dan penuh detail, tapi yang kamu butuhkan cuma kesimpulannya. Di percobaan tadi context utama turun dari 95 ribu ke 31,7 ribu token.",
            },
            {
              title: "Pakai beberapa subagent",
              text: "Kalau tugasnya bisa dibagi jadi bagian yang tidak saling menunggu, misalnya satu subagent satu game.",
            },
            {
              title: "Kerjakan langsung saja",
              text: "Kalau tugasnya pendek, sekali jalan, atau kamu perlu sering menjawab pertanyaan Claude di tengah proses.",
            },
            {
              title: "Hindari membagi tugas berantai",
              text: "Kalau subagent B baru bisa mulai setelah hasil A keluar, hasilnya tidak akan nyambung karena subagent tidak bisa saling bicara.",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Cerita dari lapangan",
          text: "Ivan, 30 detik: satu cerita nyata soal batas subagent.",
          deckOnly: true,
        },
      ],
    },
    {
      id: "downside",
      kicker: "Jujur soal batasannya",
      title: "Yang perlu kamu terima",
      subtitle: "Empat hal yang sering bikin kaget di awal.",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "Mulai dari nol",
              text: "Subagent tidak tahu isi percakapan utama. Semua yang ia butuhkan harus ditulis ulang di perintahnya.",
            },
            {
              title: "Ada waktu ekstra",
              text: "Setiap pemanggilan butuh waktu persiapan di awal dan merangkum di akhir. Di percobaan tadi satu subagent malah lebih lambat daripada dikerjakan langsung.",
            },
            {
              title: "Detail prosesnya hilang",
              text: "Yang kembali cuma ringkasan. Kalau ada angka yang terlihat aneh, kamu sulit menelusuri asalnya.",
            },
            {
              title: "Total token naik",
              text: "Tiap subagent punya context sendiri, jadi total token yang terpakai lebih banyak daripada satu proses biasa. Angka di slide sebelumnya hanya menghitung sesi utama, belum menjumlahkan sesi subagent.",
            },
          ],
        },
      ],
    },
    {
      id: "di-cowork",
      kicker: "Claude Cowork",
      title: "Subagent di Claude Cowork",
      subtitle: "Tanpa setup, cukup lewat permintaan biasa.",
      blocks: [
        {
          type: "gif",
          src: "/assets/edu/claude-subagent/08-cowork-satu-subagent.png",
          alt: "Claude Cowork menampilkan satu agent berjalan dengan daftar langkah dan situs yang dibuka.",
          caption:
            "Satu subagent di [[Claude Cowork]]. Langkah dan situs yang dibuka terlihat, termasuk yang gagal diambil.",
          describe:
            "Tampilan Claude Cowork saat satu subagent sedang mengerjakan tugas.",
        },
        {
          type: "paragraph",
          text: "Di Claude Cowork kamu tidak perlu membuat file subagent lebih dulu. Cukup tulis permintaannya, misalnya minta satu bagian dititipkan ke subagent, atau minta beberapa bagian dikerjakan bersamaan. Contoh di bawah memakai tugas yang lebih kecil: cek harga satu game di lima platform.",
        },
      ],
    },
    {
      id: "cowork-paralel",
      kicker: "Claude Cowork",
      title: "Lima subagent berjalan bersamaan",
      subtitle: "Apa yang terjadi di balik layar.",
      blocks: [
        {
          type: "gif",
          src: "/assets/edu/claude-subagent/09-cowork-lima-subagent-paralel.png",
          alt: "Claude Cowork menampilkan lima agent berjalan bersamaan, masing-masing memeriksa satu platform.",
          caption:
            "Lima subagent jalan bersamaan, satu platform per subagent.",
          describe:
            "Tampilan Claude Cowork saat lima subagent berjalan paralel.",
        },
        {
          type: "steps",
          items: [
            {
              text: "Claude memecah permintaanmu jadi lima tugas serupa, satu untuk tiap platform.",
            },
            {
              text: "Kelimanya jalan bersamaan, jadi total waktunya mendekati satu platform saja.",
            },
            {
              text: "Tiap subagent melapor sendiri. Yang gagal tetap dilaporkan sebagai tidak ditemukan.",
              hint: "Hasil yang gagal tetap muncul supaya kamu tahu datanya belum lengkap.",
            },
            {
              text: "Semua hasil disatukan jadi satu tabel, dan platform termurah ditandai.",
            },
          ],
        },
      ],
    },
    {
      id: "punyamu-sekarang",
      kicker: "Penutup",
      title: "Yang kamu punya sekarang",
      subtitle: "Isi empat baris ini sekarang.",
      blocks: [
        {
          type: "steps",
          items: [
            { text: "Nama subagent yang kamu buat hari ini." },
            { text: "Satu kalimat tugasnya, pakai bahasamu sendiri." },
            {
              text: "Satu pekerjaan nyata yang mau kamu kasih ke dia besok pagi.",
              hint: "Ambil dari tugas yang kamu tulis di slide pertama.",
            },
            { text: "Screenshot hasil pertamanya, simpan buat catatanmu." },
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Di kelas",
          text: "Berdiri. Sebut nama subagent kamu ke orang di sebelahmu, 30 detik.",
          deckOnly: true,
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Apa itu subagent di Claude?",
      a: "Subagent adalah asisten tambahan yang dipanggil Claude untuk mengerjakan satu tugas khusus di ruang terpisah. Setelah selesai, ia hanya mengirim ringkasan hasilnya ke percakapan utama.",
    },
    {
      q: "Apa bedanya subagent dan multiple subagent?",
      a: "Subagent berarti satu asisten mengerjakan satu tugas. Multiple subagent berarti beberapa asisten bekerja di waktu yang sama, masing-masing memegang satu bagian tugas.",
    },
    {
      q: "Di mana file subagent disimpan?",
      a: "Di folder .claude/agents di dalam project kalau subagent itu khusus untuk satu project, atau di folder .claude/agents pada folder home kalau mau dipakai di semua project. Formatnya file markdown.",
    },
    {
      q: "Apakah subagent bisa saling berkomunikasi?",
      a: "Tidak. Setiap subagent hanya melapor ke agen utama. Kalau antar bagian tugas perlu saling mengecek, konsep yang dipakai adalah Agent Team.",
    },
    {
      q: "Apakah memakai subagent selalu lebih cepat?",
      a: "Tidak selalu. Setiap pemanggilan subagent butuh waktu persiapan, jadi untuk tugas pendek mengerjakan langsung bisa lebih cepat. Keuntungan terbesarnya muncul saat tugas panjang dibagi ke beberapa subagent yang jalan bersamaan.",
    },
    {
      q: "Apakah subagent bisa dipakai di Claude Cowork?",
      a: "Bisa, dan tanpa setup tambahan. Cukup tulis permintaannya, misalnya minta satu bagian dititipkan ke subagent atau minta beberapa bagian dikerjakan bersamaan.",
    },
  ],
  glossary: [
    {
      term: "subagent",
      def: "Asisten tambahan yang dipanggil Claude untuk satu tugas khusus di ruang terpisah, lalu mengirim ringkasan hasilnya ke percakapan utama.",
    },
    {
      term: "multiple subagent",
      def: "Beberapa subagent yang dijalankan bersamaan, masing-masing memegang satu bagian tugas.",
    },
    {
      term: "context",
      def: "Ingatan percakapan yang sedang berjalan. Ukurannya terbatas, jadi makin banyak detail yang masuk, makin cepat penuh.",
    },
    {
      term: "Claude Code",
      def: "Claude yang dijalankan lewat terminal, bisa membaca dan mengubah file di folder project kamu.",
    },
    {
      term: "Claude Cowork",
      def: "Claude versi desktop untuk pekerjaan sehari-hari, dipakai tanpa menulis kode.",
    },
    {
      term: ".claude/agents",
      def: "Folder tempat file definisi subagent disimpan, satu file markdown untuk satu subagent.",
    },
  ],
  howto: {
    name: "Cara membuat subagent di Claude Code",
    steps: [
      {
        name: "Siapkan folder project",
        text: "Buat satu folder project baru, misalnya cahaya-topup, di lokasi mana saja.",
      },
      {
        name: "Buka terminal di folder itu",
        text: "Di Windows, klik kanan di dalam folder lalu pilih Open in Terminal. Pastikan path terminal menunjuk ke folder project.",
      },
      {
        name: "Jalankan Claude",
        text: "Ketik claude lalu tekan Enter untuk masuk ke Claude Code.",
      },
      {
        name: "Minta Claude membuat subagent",
        text: "Tulis tugas subagent yang kamu inginkan sejelas mungkin, lalu tekan Enter dan tunggu sampai selesai.",
      },
      {
        name: "Cek filenya",
        text: "Buka folder .claude/agents di dalam project. Kalau file markdown subagent sudah ada di situ, subagent siap dipakai.",
      },
    ],
  },
  sources: [
    {
      label: "Claude Docs: Subagents",
      url: "https://docs.claude.com/en/docs/claude-code/sub-agents",
    },
    {
      label: "Claude Docs: Claude Code overview",
      url: "https://docs.claude.com/en/docs/claude-code/overview",
    },
    {
      label: "Claude Support: Get started with Claude Cowork",
      url: "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork",
    },
  ],
};

const claudeAgentTeam: EduModule = {
  toolSlug: "claude",
  toolName: "Claude",
  slug: "agent-team",
  moduleName: "Agent Team",
  level: "Level lanjutan",
  readingLabel: "sekitar 9 menit",
  h1: "Agent Team di Claude Code",
  tagline: "Beberapa agent dalam satu ruangan, saling mengecek.",
  heroLede:
    "Agent Team adalah beberapa agent Claude yang bekerja di ruang yang sama sehingga bisa saling melihat hasil kerja dan saling mengoreksi sebelum laporan akhir sampai ke kamu. Halaman ini menjelaskan bedanya dengan subagent biasa, cara mengaktifkannya di Claude Code, satu contoh nyata dengan anggota verifikator, dan hal yang perlu kamu siapkan sebelum memakainya.",
  metaTitle: "Apa itu Agent Team di Claude Code? Cara Mengaktifkan dan Memakai",
  metaDescription:
    "Panduan Agent Team di Claude Code: bedanya dengan multiple subagent, cara mengaktifkan lewat settings.local.json, contoh tim riset dengan anggota verifikator, dan batasannya. Dari AI Training Indonesia oleh Aurelius Ivan Wijaya.",
  keywords: [
    "apa itu agent team claude",
    "claude code agent teams",
    "multi agent claude",
    "beda subagent dan agent team",
    "cara mengaktifkan agent team",
    "settings local json claude",
    "belajar claude bahasa indonesia",
  ],
  updated: "22 Juli 2026",
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  slides: [
    {
      id: "apa-itu",
      kicker: "Claude · Modul Agent Team",
      title: "Apa itu Agent Team?",
      subtitle: "Staf yang dikumpulkan dalam satu ruangan.",
      blocks: [
        {
          type: "motion",
          scene: "edu-storyboard",
          alt: "Beberapa agent bekerja di satu ruangan, saling mengoreksi, lalu satu laporan akhir keluar.",
          caption:
            "Bayangkan tim kecil di satu ruangan. 20 detik: tentukan siapa yang bertugas mengecek ulang.",
          items: [
            { label: "Ketua tim", icon: "message", tone: "yellow" },
            { label: "Anggota riset", icon: "search", tone: "blue" },
            { label: "Verifikator", icon: "test", tone: "clay" },
            { label: "Laporan akhir", icon: "notes", tone: "green" },
          ],
        },
        {
          type: "lead",
          text: "Bayangkan lima staf duduk di satu meja yang sama. Tiap orang bisa melihat pekerjaan tetangganya, dan hasilnya baru dikirim setelah semua sepakat.",
        },
        {
          type: "paragraph",
          text: "Itulah [[Agent Team]]. Ketua tim membagi tugas di awal, anggota bisa saling mengoreksi bahkan melempar hasil kerja untuk dilanjutkan, lalu ketua tim menyerahkan laporan akhir.",
        },
      ],
    },
    {
      id: "beda-subagent",
      kicker: "Perbandingan",
      title: "Bedanya dengan multiple subagent",
      subtitle: "Sama-sama paralel, beda di tahap pengecekan.",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "Multiple subagent",
              text: "Tiga staf meneliti tiga hal sekaligus. Hasilnya ditumpuk jadi satu tanpa ada yang mengecek ulang.",
            },
            {
              title: "Agent Team",
              text: "Satu anggota bisa membaca hasil anggota lain, menemukan yang keliru, dan meminta diperbaiki sebelum semuanya dianggap selesai.",
            },
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Contoh gampangnya",
          text: "Pada tugas membandingkan harga tadi, satu anggota mengumpulkan harga dari semua toko, lalu anggota lain bertugas khusus mengecek apakah harga itu benar dan masih berlaku, sebelum keduanya sepakat mengirim laporan akhir.",
        },
      ],
    },
    {
      id: "aktifkan",
      kicker: "Praktik",
      title: "Cara mengaktifkannya",
      subtitle: "Satu baris tambahan di settings.local.json.",
      blocks: [
        {
          type: "gif",
          src: "/assets/edu/claude-agent-team/01-aktifkan-agent-teams.png",
          alt: "File settings.local.json dengan bagian env berisi CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS bernilai 1.",
          caption:
            "Tambahkan bagian env di [[settings.local.json]], lalu simpan.",
          describe:
            "Menyunting settings.local.json untuk menyalakan fitur Agent Team.",
        },
        {
          type: "code",
          caption: "Tambahkan di settings.local.json",
          lines: [
            '"env": {',
            '  "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"',
            "}",
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Pengaturan eksperimental",
          text: "Nama pengaturannya sendiri memuat kata experimental, jadi perilakunya bisa berubah kapan saja. Semua contoh di halaman ini diuji langsung dengan Claude Code v2.1.216 pada Juli 2026. Setelah nilainya diisi 1, kamu tinggal meminta Claude membentuk tim lewat permintaan biasa.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Ketik sekarang",
          text: "2 menit, lalu simpan. Kalau editornya menandai merah, cek koma dan kurung kurawalnya dulu.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Di kelas",
          text: "Yang filenya merah, biarkan di layar, kita betulkan bareng. Angkat tangan kalau panel timnya sudah muncul.",
          deckOnly: true,
        },
        {
          type: "callout",
          tone: "info",
          title: "Pastikan pengaturannya kebaca",
          text: "Setelah simpan, minta Claude membentuk tim kecil 2 anggota sebagai tes. Kalau panel timnya belum muncul, tutup sesi Claude Code lalu buka lagi, dan coba sekali lagi.",
        },
      ],
    },
    {
      id: "use-case",
      kicker: "Use case",
      title: "Tim dengan satu verifikator",
      subtitle: "Lima anggota riset, satu tukang cek.",
      blocks: [
        {
          type: "lead",
          text: "Tugasnya sama seperti di modul subagent: bandingkan harga top up 5 game dari 7 toko. Bedanya, timnya punya satu anggota tambahan yang tugasnya mengecek ulang temuan anggota lain sebelum masuk ke laporan akhir.",
        },
        {
          type: "code",
          caption: "Inti permintaannya",
          lines: [
            "Buat tim dengan 5 anggota riset harga, satu anggota per game",
            "(ml, ff, pubgm, genshin, valorant), plus satu anggota bernama",
            "verifikator. Tiap anggota riset mengerjakan 7 toko untuk game",
            "yang jadi tanggung jawabnya, lalu kirim hasilnya ke verifikator,",
            "bukan langsung ke saya. Verifikator mengecek kewajaran harga dan",
            "memastikan sumbernya diakses hari ini. Kalau ada yang janggal,",
            "kirim balik ke anggota riset untuk dicek ulang. Setelah semua",
            "lolos, gabungkan jadi satu tabel dan laporkan ke saya.",
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Giliran kamu",
          text: "Jalankan sekarang, 6 menit. Ganti 5 game dengan 5 hal yang benar-benar kamu urus di kerjaanmu, dan sisakan satu anggota verifikator. Ada anggota yang macet atau berhenti, biarkan di layar, kita lihat bareng.",
        },
      ],
    },
    {
      id: "visualisasi",
      kicker: "Praktik",
      title: "Tampilan saat tim berjalan",
      subtitle: "Tahapan dan anggota terlihat di layar.",
      blocks: [
        {
          type: "gif",
          src: "/assets/edu/claude-agent-team/02-tim-agent-berjalan.png",
          alt: "Terminal Claude Code menampilkan empat tahapan tim dan lima anggota riset beserta pemakaian tokennya.",
          caption:
            "Kolom kiri menampilkan tahapan, kolom kanan menampilkan anggota tim dan token yang sudah terpakai. Perhatikan anggota mana yang paling lama selesai.",
          describe:
            "Tampilan terminal saat Agent Team berjalan, lengkap dengan daftar tahapan dan anggota.",
        },
        {
          type: "paragraph",
          text: "Setiap anggota yang sudah selesai ditandai dengan centang, jadi kamu bisa melihat tahapan mana yang masih berjalan.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Di kelas",
          text: "Sambil tim kamu jalan, sebut anggota yang paling lama selesai. Kita bandingkan antar meja.",
          deckOnly: true,
        },
      ],
    },
    {
      id: "apa-yang-terjadi",
      kicker: "Di balik layar",
      title: "Apa yang terjadi",
      subtitle: "Alurnya lewat verifikator dulu.",
      blocks: [
        {
          type: "steps",
          items: [
            {
              text: "Riset: kelima anggota bekerja bersamaan, masing-masing untuk satu game, lalu mengirim hasilnya ke verifikator.",
            },
            {
              text: "Verifikasi: verifikator membaca satu per satu, mengecek harganya masuk akal dan sumbernya diakses hari ini.",
              hint: "Harga yang jauh berbeda dari toko lain jadi tanda tanya.",
            },
            {
              text: "Verifikasi ulang: yang janggal dikirim balik ke anggota yang pegang game itu untuk dicek lagi.",
            },
            {
              text: "Gabung: setelah semua lolos, hasilnya disatukan jadi satu tabel dan itulah yang sampai ke kamu.",
            },
          ],
        },
      ],
    },
    {
      id: "kapan-pakai",
      kicker: "Panduan pakai",
      title: "Kapan memakai Agent Team?",
      subtitle: "Patokannya: perlu saling cek atau tidak.",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "Ada risiko salah diam-diam",
              text: "Anggota lain bisa mengecek dan menegur sebelum kesalahan itu masuk ke laporan akhir.",
            },
            {
              title: "Beberapa dugaan bersaing",
              text: "Misalnya mencari penyebab bug yang belum jelas. Tiap anggota menyelidiki satu teori dan saling membantah sampai ketemu yang paling kuat.",
            },
            {
              title: "Butuh beberapa sudut pandang",
              text: "Misalnya review kode dari sisi keamanan, performa, dan kelengkapan tes, masing-masing oleh anggota berbeda.",
            },
            {
              title: "Bagian tugasnya saling terkait",
              text: "Misalnya satu anggota mengerjakan tampilan, satu bagian belakang, satu lagi tesnya, dan mereka perlu menyesuaikan di tengah jalan.",
            },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          text: "Untuk tugas yang urut, sederhana, atau menyentuh file yang sama, kerjakan langsung atau lewat subagent biasa.",
        },
      ],
    },
    {
      id: "downside",
      kicker: "Jujur soal batasannya",
      title: "Yang perlu kamu siapkan",
      subtitle: "Tiap anggota punya sesi Claude sendiri.",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "Total token naik",
              text: "Setiap anggota punya sesi dan ingatannya sendiri, jadi tokennya dijumlahkan dari semua anggota. Batasi jumlah anggota ke yang benar-benar perlu.",
            },
            {
              title: "Perlu diawasi",
              text: "Anggota bisa keliru arah atau berhenti saat kena error. Sesekali cek progres tim, lalu arahkan ulang anggota yang macet.",
            },
            {
              title: "Risiko bentrok",
              text: "Dua anggota bisa menyunting file yang sama bersamaan. Bagi tugas supaya tiap anggota pegang bagian berbeda.",
            },
            {
              title: "Masih tahap percobaan",
              text: "Pada versi yang kami uji, satu sesi hanya bisa punya satu tim, dan anggota tim tidak otomatis kembali saat sesi dibuka ulang. Cek lagi di versi Claude Code yang kamu pakai.",
            },
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Cerita dari lapangan",
          text: "Ivan, 30 detik: satu cerita nyata soal anggota tim yang bentrok.",
          deckOnly: true,
        },
      ],
    },
    {
      id: "punyamu-sekarang",
      kicker: "Penutup",
      title: "Yang kamu punya sekarang",
      subtitle: "Tulis spesifikasi tim kamu sendiri sekarang.",
      blocks: [
        {
          type: "steps",
          items: [
            { text: "Berapa anggota yang benar-benar kamu butuhkan." },
            { text: "Tugas tiap anggota, satu baris per anggota." },
            {
              text: "Siapa verifikatornya, dan apa yang dia cek.",
              hint: "Tanpa verifikator, timmu jadi mirip multiple subagent biasa.",
            },
            {
              text: "Simpan spesifikasi ini di catatanmu, lalu jalankan sekali besok pagi buat satu pekerjaan aslimu.",
            },
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Di kelas",
          text: "Berdiri. Sebut jumlah anggota tim kamu dan siapa verifikatornya ke orang di sebelahmu, 30 detik.",
          deckOnly: true,
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Apa itu Agent Team di Claude Code?",
      a: "Agent Team adalah beberapa agent Claude yang bekerja di ruang yang sama sehingga bisa saling melihat hasil kerja dan saling mengoreksi sebelum laporan akhir dikirim ke pengguna.",
    },
    {
      q: "Apa bedanya Agent Team dengan multiple subagent?",
      a: "Pada multiple subagent, tiap subagent bekerja sendiri dan hasilnya digabung tanpa pengecekan silang. Pada Agent Team, anggota bisa membaca hasil anggota lain dan meminta perbaikan sebelum laporan akhir disusun.",
    },
    {
      q: "Bagaimana cara mengaktifkan Agent Team?",
      a: "Buka file settings.local.json, tambahkan bagian env berisi CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS dengan nilai 1, lalu simpan. Setelah itu kamu bisa meminta Claude membentuk tim lewat permintaan biasa.",
    },
    {
      q: "Apakah Agent Team lebih boros daripada subagent biasa?",
      a: "Ya. Setiap anggota tim adalah sesi Claude terpisah dengan ingatannya sendiri, jadi tokennya dijumlahkan dari semua anggota.",
    },
    {
      q: "Apakah anggota tim kembali otomatis saat sesi dibuka ulang?",
      a: "Pada Claude Code v2.1.216 yang kami uji pada Juli 2026, anggota tim perlu dibentuk ulang saat kamu membuka sesi baru. Fitur ini masih tahap percobaan, jadi cek lagi di versi yang kamu pakai.",
    },
  ],
  glossary: [
    {
      term: "Agent Team",
      def: "Beberapa agent Claude yang bekerja di ruang yang sama sehingga bisa saling melihat hasil kerja dan saling mengoreksi sebelum laporan akhir keluar.",
    },
    {
      term: "settings.local.json",
      def: "File pengaturan Claude Code khusus untuk mesin kamu sendiri, tempat menyimpan izin dan variabel lingkungan.",
    },
  ],
  howto: {
    name: "Cara mengaktifkan Agent Team di Claude Code",
    steps: [
      {
        name: "Buka file pengaturan",
        text: "Buka file settings.local.json milik project atau milik akun kamu.",
      },
      {
        name: "Tambahkan bagian env",
        text: "Tambahkan bagian env berisi CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS dengan nilai 1.",
      },
      {
        name: "Simpan filenya",
        text: "Simpan perubahan file settings.local.json.",
      },
      {
        name: "Minta Claude membentuk tim",
        text: "Tulis permintaan yang menyebut jumlah anggota, tugas tiap anggota, dan siapa yang bertugas mengecek ulang.",
      },
    ],
  },
  sources: [
    {
      label: "Claude Docs: Subagents",
      url: "https://docs.claude.com/en/docs/claude-code/sub-agents",
    },
    {
      label: "Claude Docs: Claude Code settings",
      url: "https://docs.claude.com/en/docs/claude-code/settings",
    },
  ],
};

export const eduModules: EduModule[] = [
  claudeSkills,
  claudeMcp,
  claudeCowork,
  claudeSubagent,
  claudeAgentTeam,
  n8nNode,
];

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
