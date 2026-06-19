"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

// ─────────────────────────────────────────
// DATA
// ─────────────────────────────────────────

const anatomyElements = [
  {
    number: "01",
    label: "Role",
    question: "Lo mau AI jadi siapa?",
    example:
      "Kamu adalah seorang copywriter senior dengan 10 tahun pengalaman di industri FMCG.",
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5",
  },
  {
    number: "02",
    label: "Context",
    question: "Situasi dan latar belakangnya apa?",
    example:
      "Perusahaan kami baru launching produk skincare untuk remaja usia 15-20 tahun.",
    color: "text-purple-400",
    border: "border-purple-400/20",
    bg: "bg-purple-400/5",
  },
  {
    number: "03",
    label: "Task",
    question: "Apa yang diminta?",
    example: "Buatkan 5 variasi caption Instagram untuk launching produk ini.",
    color: "text-emerald-400",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/5",
  },
  {
    number: "04",
    label: "Format",
    question: "Output-nya mau bentuk apa?",
    example: "Format: caption max 150 kata, include emoji, ada CTA di akhir.",
    color: "text-amber-400",
    border: "border-amber-400/20",
    bg: "bg-amber-400/5",
  },
  {
    number: "05",
    label: "Constraint",
    question: "Batasan atau aturan mainnya?",
    example:
      "Jangan pakai bahasa yang terlalu formal. Tone: playful, relatable, Gen-Z friendly.",
    color: "text-rose-400",
    border: "border-rose-400/20",
    bg: "bg-rose-400/5",
  },
];

const templates = [
  {
    id: "email",
    icon: "✉",
    title: "Email Profesional",
    description:
      "Follow-up meeting, minta approval, update ke atasan: email bisnis yang langsung to the point.",
    prompt: `Kamu adalah seorang profesional di bidang [BIDANG/INDUSTRI].

Bantu saya menulis email untuk [TUJUAN EMAIL: contoh: follow-up meeting, minta approval, dll].

Konteks:
- Penerima: [NAMA & JABATAN PENERIMA]
- Hubungan saya dengan penerima: [ATASAN / KOLEGA / KLIEN / VENDOR]
- Situasi: [JELASKAN KONTEKS SINGKAT]

Format:
- Bahasa: [INDONESIA FORMAL / ENGLISH PROFESSIONAL]
- Panjang: Maksimal [JUMLAH] paragraf
- Tone: [FORMAL / SEMI-FORMAL / FRIENDLY PROFESSIONAL]

Constraint:
- Langsung to the point, jangan bertele-tele
- Sertakan subject line yang jelas
- Akhiri dengan clear next step / CTA`,
  },
  {
    id: "rangkum",
    icon: "📋",
    title: "Rangkum Dokumen / Meeting Notes",
    description:
      "Dokumen panjang, notulen meeting, artikel: jadi ringkasan terstruktur yang bisa langsung dipakai.",
    prompt: `Kamu adalah seorang executive assistant yang ahli merangkum informasi.

Tolong rangkum [DOKUMEN / NOTULEN MEETING / ARTIKEL] berikut ini.

Konteks:
- Jenis dokumen: [NOTULEN MEETING / LAPORAN / ARTIKEL / PROPOSAL]
- Tujuan rangkuman: [UNTUK DILAPORKAN KE ATASAN / UNTUK ARSIP / UNTUK SHARING KE TIM]

Format output:
1. Ringkasan Eksekutif (max 3 kalimat)
2. Poin-Poin Utama (bullet points, max 7 poin)
3. Action Items (jika ada, sebutkan siapa melakukan apa dan deadline-nya)
4. Keputusan yang Diambil (jika ada)

Constraint:
- Bahasa: [INDONESIA / ENGLISH]
- Jangan tambahkan opini atau informasi di luar dokumen
- Prioritaskan informasi yang actionable

[PASTE DOKUMEN/NOTULEN DI SINI]`,
  },
  {
    id: "konten",
    icon: "📱",
    title: "Bikin Konten Social Media",
    description:
      "Generate caption, copy, dan ide konten yang sesuai platform, audiens, dan tujuan kampanye.",
    prompt: `Kamu adalah seorang social media strategist dengan pengalaman di industri [INDUSTRI].

Buatkan [JUMLAH] variasi konten untuk platform [INSTAGRAM / LINKEDIN / TWITTER/X / TIKTOK].

Konteks:
- Brand/produk: [NAMA BRAND & DESKRIPSI SINGKAT]
- Target audiens: [DESKRIPSI TARGET AUDIENS]
- Tujuan konten: [AWARENESS / ENGAGEMENT / CONVERSION / EDUKASI]
- Campaign/tema: [TEMA ATAU CAMPAIGN YANG SEDANG JALAN]

Format per konten:
- Hook/opening line yang attention-grabbing
- Body caption (max [JUMLAH] kata)
- CTA yang jelas
- Saran hashtag (5-10 relevan)
- Saran visual/foto/video yang cocok

Constraint:
- Tone: [PLAYFUL / PROFESIONAL / INSPIRATIF / EDUKATIF]
- Jangan pakai clickbait atau misleading hook
- Sesuaikan dengan character limit platform`,
  },
  {
    id: "data",
    icon: "📊",
    title: "Analisis Data Sederhana",
    description:
      "Interpretasi sales report, survey result, atau analytics dalam bahasa yang bisa dipresentasikan.",
    prompt: `Kamu adalah seorang data analyst yang menjelaskan data dengan bahasa yang mudah dipahami non-technical audience.

Tolong analisis data berikut ini:

Konteks:
- Jenis data: [SALES REPORT / SURVEY RESULT / WEBSITE ANALYTICS / FINANCIAL DATA]
- Periode: [PERIODE WAKTU DATA]
- Tujuan analisis: [CARI TREND / BANDINGKAN PERFORMA / IDENTIFIKASI MASALAH / REKOMENDASI]

Yang saya butuhkan:
1. Overview singkat kondisi data
2. 3-5 insight utama yang ditemukan
3. Anomali atau hal yang perlu diperhatikan
4. Rekomendasi actionable berdasarkan data
5. Visualisasi yang disarankan untuk presentasi (sebutkan jenis chart yang cocok)

Constraint:
- Jelaskan dalam bahasa non-teknis
- Jangan asumsikan data yang tidak ada
- Kalau data kurang lengkap, sebutkan data apa yang masih dibutuhkan

[PASTE DATA DI SINI: bisa tabel, CSV, atau deskripsi]`,
  },
  {
    id: "brainstorm",
    icon: "💡",
    title: "Brainstorming & Ideation",
    description:
      "Stuck? Generate ide dari yang safe sampai bold, lengkap dengan kelebihan, risiko, dan effort level.",
    prompt: `Kamu adalah seorang creative strategist yang jago brainstorming.

Bantu saya generate ide untuk [TOPIK/PROJECT].

Konteks:
- Masalah/tantangan: [JELASKAN MASALAH YANG MAU DIPECAHKAN]
- Batasan yang ada: [BUDGET / WAKTU / RESOURCE / REGULASI]
- Apa yang sudah dicoba: [IDE ATAU SOLUSI YANG SUDAH PERNAH DILAKUKAN]
- Target outcome: [HASIL YANG DIHARAPKAN]

Format:
- Berikan [JUMLAH] ide
- Untuk setiap ide, jelaskan:
  • Nama ide (catchy, mudah diingat)
  • Deskripsi singkat (2-3 kalimat)
  • Kelebihan
  • Kekurangan/risiko
  • Estimasi effort (Low/Medium/High)

Constraint:
- Ide harus realistis dan bisa dieksekusi
- Variasikan dari yang safe/conventional sampai yang bold/unconventional
- Jangan ulangi ide yang sudah pernah dicoba`,
  },
  {
    id: "review",
    icon: "✏",
    title: "Review & Perbaiki Tulisan",
    description:
      "Polish email, proposal, laporan, atau artikel: grammar, flow, tone, dan struktur sekaligus.",
    prompt: `Kamu adalah seorang editor profesional.

Tolong review dan perbaiki tulisan berikut ini.

Konteks:
- Jenis tulisan: [EMAIL / PROPOSAL / ARTIKEL / LAPORAN / PRESENTASI]
- Audiens: [SIAPA YANG AKAN BACA]
- Tujuan: [INFORM / PERSUADE / ENTERTAIN / INSTRUCT]

Yang perlu di-review:
1. Grammar dan ejaan
2. Kejelasan dan flow tulisan
3. Tone: apakah sudah sesuai dengan [TONE YANG DIINGINKAN]
4. Struktur dan organisasi informasi
5. Redundansi atau bagian yang bisa dipersingkat

Format output:
- Versi tulisan yang sudah diperbaiki (tampilkan lengkap)
- List perubahan yang dilakukan dan alasannya

Constraint:
- Pertahankan voice dan style asli penulis
- Jangan ubah fakta atau data yang disebutkan
- Bahasa: [INDONESIA / ENGLISH]

[PASTE TULISAN DI SINI]`,
  },
  {
    id: "meeting",
    icon: "🎯",
    title: "Persiapan Meeting / Presentasi",
    description:
      "Dari agenda, talking points, sampai antisipasi pertanyaan sulit; siap masuk ruangan dalam menit.",
    prompt: `Kamu adalah seorang business consultant yang berpengalaman.

Bantu saya mempersiapkan [MEETING / PRESENTASI] tentang [TOPIK].

Konteks:
- Tujuan: [APA YANG MAU DICAPAI DARI MEETING/PRESENTASI INI]
- Audiens: [SIAPA YANG HADIR: jabatan, department, level]
- Durasi: [BERAPA MENIT/JAM]
- Situasi: [ADA KONTEKS POLITIK KANTOR / URGENSI / HISTORY YANG PERLU DIKETAHUI?]

Yang saya butuhkan:
1. Agenda/outline yang terstruktur dengan alokasi waktu
2. Talking points untuk setiap section
3. Antisipasi pertanyaan sulit yang mungkin muncul + suggested jawaban
4. Rekomendasi data/visual yang perlu disiapkan
5. Opening statement yang kuat

Constraint:
- Sesuaikan kedalaman materi dengan level audiens
- Fokus pada actionable outcomes, bukan sekedar informasi`,
  },
];

const tips = [
  {
    emoji: "🔄",
    text: "Hasil jelek? Jangan buang; kasih feedback spesifik ke AI tentang bagian mana yang kurang.",
  },
  {
    emoji: "✂️",
    text: "Pecah tugas besar jadi langkah kecil. Jangan minta proposal 20 halaman dalam 1 prompt.",
  },
  {
    emoji: "📎",
    text: "Selalu kasih contoh output yang lo mau. AI jauh lebih akurat kalau ada referensi.",
  },
  { emoji: "⚠️", text: "Jangan lupa fact-check. AI bisa confident tapi salah." },
  {
    emoji: "💾",
    text: "Simpan prompt yang berhasil. Bikin swipe file prompt lo sendiri.",
  },
  {
    emoji: "🎯",
    text: "Kalau output terlalu generic, tambahin konteks spesifik tentang audiens, industri, atau situasi lo.",
  },
  {
    emoji: "🍒",
    text: "Minta AI kasih beberapa opsi, bukan cuma satu jawaban. Lo bisa cherry-pick yang terbaik.",
  },
  {
    emoji: "🤝",
    text: "Pakai AI buat first draft, bukan final output. Sentuhan manusia tetap penting.",
  },
];

// ─────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────

function renderTemplate(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    /^\[[^\]]+\]$/.test(part) ? (
      <mark
        key={i}
        className="bg-amber-400/15 text-amber-300 rounded px-0.5 not-italic"
      >
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

// ─────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────

function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      setPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-0.5 z-[60] bg-white/5">
      <div
        className="h-full bg-amber-400 transition-[width] duration-75"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function CopyBtn({
  text,
  label = "Copy Prompt",
}: {
  text: string;
  label?: string;
}) {
  const [done, setDone] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setDone(true);
    setTimeout(() => setDone(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
        done
          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
          : "bg-white/8 text-white/80 border border-white/15 hover:bg-white/15 hover:text-white"
      }`}
    >
      {done ? (
        <>
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Copied! ✓
        </>
      ) : (
        <>
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          {label}
        </>
      )}
    </button>
  );
}

function TemplateCard({
  t,
  open,
  onToggle,
}: {
  t: (typeof templates)[0];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      id={`tpl-${t.id}`}
      className="border border-white/10 rounded-2xl overflow-hidden scroll-mt-24 transition-colors hover:border-white/15"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-6 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="text-xl w-8 text-center flex-shrink-0 select-none">
          {t.icon}
        </span>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-white text-base">{t.title}</p>
          <p className="text-sm text-white/50 mt-0.5 leading-snug">
            {t.description}
          </p>
        </div>
        <svg
          className={`w-4 h-4 text-white/30 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div className={`border-t border-white/10 ${open ? "" : "hidden"}`}>
        <div className="p-6 pt-5">
          <div className="flex justify-end mb-3">
            <CopyBtn text={t.prompt} />
          </div>
          <div className="bg-[#0d0d0f] border border-white/10 rounded-xl p-5 font-mono text-sm text-white/75 leading-relaxed whitespace-pre-wrap select-all">
            {renderTemplate(t.prompt)}
          </div>
          <p className="mt-3 text-xs text-white/30 font-mono">
            Klik blok di atas untuk select-all, atau pakai tombol Copy di atas.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────

export default function PlaybookClient() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState<Set<string>>(new Set(["email"]));
  const [activeSection, setActiveSection] = useState("hero");

  const filtered = templates.filter(
    (t) =>
      search === "" ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase()),
  );

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const expandAndScroll = (id: string) => {
    setOpen((prev) => new Set([...prev, id]));
    setTimeout(
      () =>
        document
          .getElementById(`tpl-${id}`)
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      80,
    );
  };

  const allText = templates
    .map((t) => `=== ${t.title} ===\n\n${t.prompt}`)
    .join("\n\n" + "─".repeat(60) + "\n\n");

  // Scroll spy
  useEffect(() => {
    const ids = ["hero", "anatomy", "templates", "tips", "cta"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const navSections = [
    { id: "hero", label: "Overview" },
    { id: "anatomy", label: "Anatomy Prompt" },
    { id: "templates", label: "Template Library" },
    { id: "tips", label: "Tips Cheat Sheet" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollProgress />
      <Nav />

      <main className="pt-24">
        {/* ── HERO ──────────────────────────────── */}
        <section
          id="hero"
          className="px-6 sm:px-8 py-16 border-b border-white/10"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-3xl">
              <p className="text-white/40 text-xs mb-5 tracking-widest font-mono uppercase">
                [ Companion Guide: Cara Pakai AI Biar Hasilnya Nggak Sampah ]
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight mb-6">
                <span className="text-white">Daily Prompt</span>
                <br />
                <span className="text-amber-400">Playbook</span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed mb-8">
                Kumpulan prompt template siap pakai; tinggal copy, edit
                variabel, paste ke AI.
              </p>
              <div className="flex flex-wrap gap-3">
                <CopyBtn text={allText} label="Copy All Templates" />
                <button
                  onClick={() => scrollTo("templates")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-white/15 text-white/60 hover:text-white hover:bg-white/5 transition-all"
                >
                  Browse Templates
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/30 font-mono">
                <span>{templates.length} templates</span>
                <span>·</span>
                <span>7 kategori kerja</span>
                <span>·</span>
                <span>Siap copy-paste</span>
                <span>·</span>
                <span>
                  oleh{" "}
                  <a
                    href="https://aurelivan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/60 transition-colors"
                  >
                    Aurelius Ivan Wijaya
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── LAYOUT ────────────────────────────── */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="flex gap-12 py-14">
            {/* Sidebar — desktop */}
            <aside className="hidden lg:block w-52 flex-shrink-0">
              <div className="sticky top-28">
                <p className="text-[10px] text-white/25 uppercase tracking-widest mb-4 font-mono">
                  Sections
                </p>
                <nav className="space-y-0.5 mb-8">
                  {navSections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-all ${
                        activeSection === s.id
                          ? "text-amber-400 bg-amber-400/10 font-medium"
                          : "text-white/45 hover:text-white/80 hover:bg-white/5"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </nav>

                <p className="text-[10px] text-white/25 uppercase tracking-widest mb-3 font-mono">
                  Templates
                </p>
                <nav className="space-y-0.5">
                  {templates.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => expandAndScroll(t.id)}
                      className="w-full text-left text-xs px-3 py-1.5 rounded-lg text-white/35 hover:text-white/65 hover:bg-white/5 transition-all truncate"
                    >
                      {t.icon} {t.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0 space-y-20">
              {/* ── ANATOMY ─────────────────────── */}
              <section id="anatomy" className="scroll-mt-24">
                <div className="mb-8">
                  <p className="text-white/30 text-xs font-mono mb-2 tracking-widest">
                    [ Section 01 ]
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                    Anatomy of a Good Prompt
                  </h2>
                  <p className="text-white/55">
                    5 elemen yang bikin prompt lo menghasilkan output yang jauh
                    lebih baik. Nggak harus semua dipake, tapi makin lengkap,
                    makin bagus hasilnya.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {anatomyElements.map((el) => (
                    <div
                      key={el.number}
                      className={`border ${el.border} ${el.bg} rounded-2xl p-6 transition-all`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-xs text-white/25">
                          {el.number}
                        </span>
                        <span className={`text-xl font-bold ${el.color}`}>
                          {el.label}
                        </span>
                      </div>
                      <p className="text-white/55 text-sm mb-4">
                        {el.question}
                      </p>
                      <div className="bg-black/40 border border-white/8 rounded-xl p-3">
                        <p className="text-[10px] text-white/25 font-mono mb-1.5 uppercase tracking-wider">
                          Contoh
                        </p>
                        <p className="text-white/65 text-sm italic leading-relaxed">
                          &ldquo;{el.example}&rdquo;
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Formula card */}
                  <div className="border border-amber-400/20 bg-amber-400/[0.03] rounded-2xl p-6 sm:col-span-2 xl:col-span-3">
                    <p className="text-[10px] text-amber-400/50 font-mono uppercase tracking-wider mb-4">
                      Formula
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {["Role", "Context", "Task", "Format", "Constraint"].map(
                        (el, i, arr) => (
                          <span key={el} className="flex items-center gap-2">
                            <span className="px-3 py-1.5 bg-white/8 border border-white/10 rounded-full text-sm font-mono text-white/75">
                              {el}
                            </span>
                            {i < arr.length - 1 && (
                              <span className="text-white/25">+</span>
                            )}
                          </span>
                        ),
                      )}
                      <span className="text-white/25 mx-1 text-lg">=</span>
                      <span className="px-3 py-1.5 bg-amber-400/20 border border-amber-400/30 rounded-full text-sm font-mono text-amber-300">
                        Output yang Bagus ✓
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── TEMPLATES ───────────────────── */}
              <section id="templates" className="scroll-mt-24">
                <div className="mb-8">
                  <p className="text-white/30 text-xs font-mono mb-2 tracking-widest">
                    [ Section 02 ]
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                    Template Prompt Library
                  </h2>
                  <p className="text-white/55 mb-6">
                    Klik template untuk expand. Variabel berwarna{" "}
                    <mark className="bg-amber-400/15 text-amber-300 rounded px-1 not-italic font-mono text-sm">
                      [SEPERTI INI]
                    </mark>{" "}
                    , ganti dengan konteks lo sebelum paste.
                  </p>

                  {/* Search */}
                  <div className="relative max-w-md">
                    <svg
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Cari template..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-amber-400/30 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  {filtered.length === 0 ? (
                    <div className="text-center py-12 text-white/35 border border-white/8 rounded-2xl">
                      Tidak ada template yang cocok dengan &ldquo;{search}
                      &rdquo;
                    </div>
                  ) : (
                    filtered.map((t) => (
                      <TemplateCard
                        key={t.id}
                        t={t}
                        open={open.has(t.id)}
                        onToggle={() => toggle(t.id)}
                      />
                    ))
                  )}
                </div>

                {search === "" && filtered.length > 1 && (
                  <div className="mt-5 flex gap-4">
                    <button
                      onClick={() =>
                        setOpen(new Set(templates.map((t) => t.id)))
                      }
                      className="text-xs text-white/35 hover:text-white/65 transition-colors"
                    >
                      Expand all
                    </button>
                    <span className="text-white/15">·</span>
                    <button
                      onClick={() => setOpen(new Set())}
                      className="text-xs text-white/35 hover:text-white/65 transition-colors"
                    >
                      Collapse all
                    </button>
                  </div>
                )}
              </section>

              {/* ── TIPS ────────────────────────── */}
              <section id="tips" className="scroll-mt-24">
                <div className="mb-8">
                  <p className="text-white/30 text-xs font-mono mb-2 tracking-widest">
                    [ Section 03 ]
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                    Tips Cheat Sheet
                  </h2>
                  <p className="text-white/55">
                    Hal-hal kecil yang bikin hasil AI lo lebih konsisten dan
                    predictable.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {tips.map((tip, i) => (
                    <div
                      key={i}
                      className="flex gap-4 border border-white/10 rounded-2xl p-5 hover:border-white/15 hover:bg-white/[0.02] transition-all"
                    >
                      <span className="text-xl flex-shrink-0 select-none">
                        {tip.emoji}
                      </span>
                      <p className="text-white/65 text-sm leading-relaxed">
                        {tip.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── CTA ─────────────────────────── */}
              <section
                id="cta"
                className="scroll-mt-24 border-t border-white/10 pt-16 pb-8"
              >
                <div className="max-w-2xl">
                  <p className="text-white/30 text-xs font-mono mb-4 tracking-widest">
                    [ Mau lebih? ]
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Belajar lebih dalam
                  </h2>
                  <p className="text-white/65 mb-8 leading-relaxed text-lg">
                    Playbook ini adalah companion guide dari webinar{" "}
                    <span className="text-white font-medium">
                      &ldquo;Cara Pakai AI Biar Hasilnya Nggak Sampah&rdquo;
                    </span>
                    . Join webinar lengkapnya untuk belajar cara pakai AI secara
                    optimal di tempat kerja.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://calendly.com/aureliusivanwijaya/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all group font-medium"
                    >
                      <span>Join Webinar</span>
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
                      href="https://aitraining.id/programs"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 rounded-full text-white/65 hover:text-white hover:bg-white/5 transition-all"
                    >
                      Lihat semua program &rarr;
                    </a>
                  </div>
                </div>

                <p className="mt-14 text-white/25 text-xs font-mono leading-relaxed">
                  Playbook ini dibuat sebagai companion guide dari webinar
                  &ldquo;Cara Pakai AI Biar Hasilnya Nggak Sampah&rdquo;
                  <br />
                  oleh{" "}
                  <a
                    href="https://aurelivan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/55 transition-colors"
                  >
                    Aurelius Ivan Wijaya
                  </a>{" "}
                  &middot;{" "}
                  <a
                    href="https://aitraining.id"
                    className="underline hover:text-white/55 transition-colors"
                  >
                    aitraining.id
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
