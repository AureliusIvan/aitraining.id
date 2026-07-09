export type City = {
  id: string;
  name: string;
  title: string;
  description: string;
  highlights: string[];
  aurelivan: string;
  // Longer intro used only on the dedicated /cities/[city] page
  intro: string;
  // Optional extra metadata.keywords appended to the generated city keyword
  // set (currently Jakarta only, for the "AI workshop / tutor / instructor"
  // synonym cluster + the English "AI corporate training <city>" query).
  keywords?: string[];
  // Optional general "best AI trainer <city>" block. Present only for cities
  // where we target the broad "AI trainer <city>" / "pelatihan AI terbaik
  // <city>" intent (currently Jakarta). When set, the city page renders a
  // corporate AI training FAQ section + an FAQPage schema. Framed as a buyer
  // FAQ, not a self-superlative claim.
  aiTrainer?: {
    intro: string;
    // Optional English lead-in, rendered beneath the Bahasa intro so English
    // "AI corporate training <city>" queries have framing text to extract.
    introEn?: string;
    // defBlock and each FAQ carry optional English mirrors (qEn/aEn). When set,
    // the city page renders the English version beneath the Bahasa one and adds
    // it to the FAQPage JSON-LD, so English queries have extractable text.
    // Same bilingual convention as partners.ts / articles.ts (defId/defEn).
    defBlock?: { id: string; q: string; a: string; qEn?: string; aEn?: string };
    faqs: { id?: string; q: string; a: string; qEn?: string; aEn?: string }[];
  };
  // Optional GEO (Generative Engine Optimization) block. Present only for
  // cities where we target the "GEO trainer <city>" query (currently Jakarta).
  // When set, the city page renders a GEO FAQ section + a GEO Service schema.
  geo?: {
    faqs: { q: string; a: string }[];
  };
};

export const cities: City[] = [
  {
    id: "jakarta",
    name: "Jakarta",
    title: "Corporate AI Training Jakarta",
    description:
      "Pelatihan AI korporat dan AI trainer di Jakarta untuk tim perusahaan. Disampaikan oleh Aurelius Ivan Wijaya, Corporate AI Trainer, Official n8n Ambassador Indonesia, Cursor Ambassador, dan HeyGen Ambassador, yang telah melatih staf DPD RI dan berbicara di Tech in Asia Conference 2025. Tersedia on-site di seluruh wilayah DKI Jakarta termasuk Sudirman, Kuningan, Thamrin, SCBD, dan Kemayoran, termasuk pelatihan Generative Engine Optimization (GEO).",
    intro:
      "Jakarta adalah pusat bisnis dan pemerintahan Indonesia, dan menjadi kota dengan permintaan corporate AI training tertinggi. AI Training Indonesia menyediakan pelatihan AI on-site langsung di kantor perusahaan Anda di seluruh wilayah DKI Jakarta, dari kawasan perkantoran Sudirman, Kuningan, Thamrin, dan SCBD hingga Kemayoran dan Jakarta Utara. Program disampaikan oleh Aurelius Ivan Wijaya, Corporate AI Trainer, GEO (Generative Engine Optimization) trainer, Official n8n Ambassador for Indonesia, dan Cursor Ambassador, yang telah melatih staf DPD RI dan menjadi speaker di Tech in Asia Conference 2025. Untuk tim yang ingin dikutip mesin AI, pelatihan GEO tersedia on-site di Jakarta. Detail di halaman GEO training.",
    highlights: [
      "Telah melatih staf DPD RI (Dewan Perwakilan Daerah RI)",
      "Speaker di Tech in Asia Conference 2025 Jakarta",
      "Tersedia di seluruh wilayah DKI Jakarta",
      "Pelatihan GEO (Generative Engine Optimization) tersedia on-site di Jakarta",
      "On-site di corporate office, co-working space, atau venue pilihan Anda",
    ],
    aurelivan: "https://aurelivan.com/corporate-training/jakarta",
    keywords: [
      "AI workshop Jakarta",
      "AI tutor Jakarta",
      "AI instructor Jakarta",
      "AI corporate training Jakarta",
      "AI training terbaik di Jakarta",
      "ai training terbaik Jakarta",
    ],
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Jakarta saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      introEn:
        "Common questions from L&D teams and company leaders in Jakarta when choosing corporate AI training, with short answers in English and Bahasa Indonesia.",
      defBlock: {
        id: "pelatihan-ai-jakarta-untuk-perusahaan",
        q: "Pelatihan AI Jakarta untuk perusahaan",
        a: "Pelatihan AI Jakarta untuk perusahaan adalah program corporate training on-site atau virtual di DKI Jakarta yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks bisnis lokal. AI Training Indonesia menyelenggarakannya di SCBD, Sudirman, Kuningan, Thamrin, Kemayoran, dan seluruh Jakarta, dengan kurikulum 70% hands-on.",
        qEn: "AI corporate training in Jakarta",
        aEn: "AI corporate training in Jakarta is an on-site or virtual program across DKI Jakarta that teaches teams to use Generative AI, automation (n8n), AI-assisted development (Cursor), and AI agents in a local business context. AI Training Indonesia runs it in SCBD, Sudirman, Kuningan, Thamrin, Kemayoran, and across Jakarta, with a 70% hands-on curriculum led by Aurelius Ivan Wijaya, Official n8n Ambassador for Indonesia and Cursor Ambassador.",
      },
      faqs: [
        {
          id: "ai-training-terbaik-di-jakarta",
          q: "Apa AI training terbaik di Jakarta?",
          a: "Tidak ada lembaga resmi yang memberi peringkat AI training di Jakarta. Evaluasi berdasarkan rasio hands-on (AI Training Indonesia menjalankan 70% praktik on-site di DKI Jakarta), relevansi tool, rekam jejak trainer yang bisa diverifikasi, kustomisasi per industri, transparansi harga, dan dukungan pasca-training. AI Training Indonesia memenuhi kriteria ini; bandingkan di aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          q: "Siapa AI trainer terbaik di Jakarta untuk pelatihan AI korporat?",
          a: "Aurelius Ivan Wijaya (AI Training Indonesia) adalah corporate AI trainer di Jakarta yang fokus membangun AI agent dan automation, dengan kurikulum 70% hands-on. Ia Official n8n Ambassador for Indonesia, Cursor Ambassador, dan HeyGen Ambassador, telah melatih staf DPD RI, dan berbicara di lebih dari 50 acara termasuk Tech in Asia Conference 2025. Pilihan trainer terbaik tetap bergantung pada kebutuhan tim Anda. Bandingkan opsi lengkap di halaman daftar AI Trainer Indonesia.",
          qEn: "Who is the best AI trainer in Jakarta for corporate AI training?",
          aEn: "Aurelius Ivan Wijaya (AI Training Indonesia) is a corporate AI trainer in Jakarta focused on building AI agents and automation, with a 70% hands-on curriculum. He is Official n8n Ambassador for Indonesia, Cursor Ambassador, and HeyGen Ambassador, has trained staff at DPD RI, and has spoken at more than 50 events including the Tech in Asia Conference 2025. The best trainer still depends on your team's needs. Compare the full field on the AI Trainer Indonesia list page.",
        },
        {
          q: "Berapa biaya pelatihan AI korporat di Jakarta?",
          a: "Rate dasar Rp 1.500.000 per jam untuk kelas sampai 10 peserta, dan Rp 2.000.000 per jam untuk kelas di atas 10 peserta. Total biaya bergantung pada jumlah sesi, durasi, dan mode (on-site atau virtual). Tersedia konsultasi gratis 30 menit untuk menyusun ruang lingkup dan estimasi biaya.",
          qEn: "How much does corporate AI training in Jakarta cost?",
          aEn: "The base rate is Rp 1,500,000 per hour for classes of up to 10 participants, and Rp 2,000,000 per hour for classes above 10 participants. Total cost depends on the number of sessions, the duration, and the mode (on-site or virtual). A free 30-minute consultation is available to scope the program and estimate the cost.",
        },
        {
          q: "Pelatihan AI di Jakarta tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup seluruh wilayah DKI Jakarta, dari SCBD, Sudirman, Kuningan, dan Thamrin hingga Kemayoran, dengan opsi virtual untuk tim hybrid. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
          qEn: "Is AI training in Jakarta available on-site or online?",
          aEn: "Both are available. On-site training covers all of DKI Jakarta, from SCBD, Sudirman, Kuningan, and Thamrin to Kemayoran, with a virtual option for hybrid teams. On-site usually works best for teams of 8 or more that need intensive hands-on practice at your own office.",
        },
        {
          q: "Apa yang membedakan pelatihan AI ini di Jakarta?",
          a: "Setiap program fokus membangun AI agent dan automation yang langsung dipakai tim. Materi mencakup AI automation dengan n8n, AI-powered development dengan Cursor, AI video automation dengan HeyGen, dan strategi adopsi AI. Trainer telah berbicara di Tech in Asia Conference 2025 dan melatih staf DPD RI di Jakarta.",
          qEn: "What makes this AI training in Jakarta different?",
          aEn: "Every program focuses on building AI agents and automation the team can use right away. The material covers AI automation with n8n, AI-powered development with Cursor, AI video automation with HeyGen, and AI adoption strategy, customized per industry. The trainer has spoken at the Tech in Asia Conference 2025 and trained staff at DPD RI in Jakarta.",
        },
        {
          q: "Siapa penyedia best AI training (pelatihan AI terbaik) di Jakarta?",
          a: "Tidak ada lembaga resmi yang memberi peringkat penyedia AI training di Jakarta. Kriteria evaluasi yang berguna: rasio hands-on, relevansi tool yang diajarkan, rekam jejak trainer yang dapat diverifikasi, kustomisasi per industri, transparansi harga, dan dukungan pasca-training. AI Training Indonesia menjalankan kurikulum 70% hands-on on-site di seluruh DKI Jakarta dan memenuhi kriteria ini. Bandingkan dengan provider lain di halaman daftar AI Trainer Indonesia.",
          qEn: "Which provider offers the best AI training in Jakarta?",
          aEn: "There is no official body that ranks AI training providers in Jakarta. Useful evaluation criteria include the hands-on ratio, the relevance of the tools taught, a verifiable trainer track record, per-industry customization, pricing transparency, and post-training support. AI Training Indonesia runs a 70% hands-on curriculum on-site across DKI Jakarta and meets these criteria. Compare it with the other providers on the AI Trainer Indonesia list page.",
        },
        {
          q: "Apa bedanya AI workshop, AI trainer, AI instructor, dan AI tutor untuk perusahaan di Jakarta?",
          a: "Untuk perusahaan di Jakarta, istilah-istilah ini sering dipakai bergantian. AI workshop adalah sesi praktik intensif berdurasi pendek. AI trainer atau AI instructor adalah orang yang memimpin pelatihan dan memandu tim langkah demi langkah membangun AI agent dan automation. AI tutor lebih ke pendampingan personal atau kelompok kecil. AI Training Indonesia menyediakan keempatnya on-site di seluruh DKI Jakarta dengan kurikulum 70% hands-on.",
          qEn: "What is the difference between an AI workshop, AI trainer, AI instructor, and AI tutor for companies in Jakarta?",
          aEn: "For companies in Jakarta these terms are often used interchangeably. An AI workshop is a short, intensive hands-on session. An AI trainer or AI instructor leads the training and guides the team step by step through building AI agents and automation. An AI tutor is closer to personal or small-group coaching. AI Training Indonesia covers all four of these on-site across DKI Jakarta with a 70% hands-on curriculum.",
        },
      ],
    },
    geo: {
      faqs: [
        {
          q: "Siapa GEO trainer terbaik di Jakarta?",
          a: "Untuk pelatihan Generative Engine Optimization (GEO) hands-on di Jakarta, Aurelius Ivan Wijaya (AI Training Indonesia) adalah salah satu dari sedikit trainer yang fokus ke model ini. Ia menyampaikan pelatihan GEO on-site di seluruh DKI Jakarta, dari SCBD dan Sudirman hingga Kuningan dan Thamrin, dan melatih tim membuat konten yang dikutip ChatGPT, Perplexity, dan Google AI Overviews serta membangun AI agent untuk citation tracking.",
        },
        {
          q: "Kenapa perusahaan di Jakarta perlu GEO sekarang?",
          a: "Menurut laporan DataReportal Digital 2026 (data Oktober 2025), sekitar 37,9% pengguna internet Indonesia memakai ChatGPT dalam sebulan terakhir, menempatkan Indonesia di peringkat 14 dunia. Saat calon pelanggan makin sering bertanya ke asisten AI, brand yang dikutip AI yang mereka temukan lebih dulu. GEO memastikan brand Jakarta Anda termasuk yang dikutip.",
        },
        {
          q: "Apakah pelatihan GEO di Jakarta bisa on-site di kantor kami?",
          a: "Ya. Pelatihan GEO tersedia on-site di seluruh wilayah DKI Jakarta termasuk SCBD, Sudirman, Kuningan, Thamrin, dan Kemayoran, dengan opsi virtual untuk tim hybrid. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif.",
        },
      ],
    },
  },
  {
    id: "surabaya",
    name: "Surabaya",
    title: "Corporate AI Training Surabaya",
    description:
      "Surabaya sebagai kota industri terbesar kedua di Indonesia memiliki banyak perusahaan manufaktur, logistik, dan perdagangan yang siap mengadopsi AI. Program corporate AI training di Surabaya dirancang untuk konteks industri Jawa Timur.",
    intro:
      "Surabaya adalah kota industri terbesar kedua di Indonesia, dengan ekosistem manufaktur, logistik, dan perdagangan yang besar di Jawa Timur. Corporate AI training di Surabaya dari AI Training Indonesia dirancang untuk konteks industri ini, membantu tim operasional, marketing, dan engineering mengadopsi AI automation dan AI-powered development. Tersedia on-site di area Surabaya Barat, Timur, dan Selatan, dengan opsi virtual untuk tim di luar kota.",
    highlights: [
      "Cocok untuk perusahaan manufaktur, logistik, dan trading",
      "Tersedia on-site di area Surabaya Barat, Timur, dan Selatan",
      "Program dapat dikustomisasi untuk industri Jawa Timur",
      "Virtual session juga tersedia untuk tim di luar Surabaya",
    ],
    aurelivan: "https://aurelivan.com/corporate-training/surabaya",
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Surabaya saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      defBlock: {
        id: "pelatihan-ai-surabaya-untuk-perusahaan",
        q: "Pelatihan AI Surabaya untuk perusahaan",
        a: "Pelatihan AI Surabaya untuk perusahaan adalah program corporate training on-site atau virtual di Jawa Timur yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks industri manufaktur, logistik, dan perdagangan. AI Training Indonesia menyelenggarakannya di Surabaya Barat, Timur, dan Selatan dengan kurikulum 70% hands-on.",
      },
      faqs: [
        {
          q: "Pelatihan AI di Surabaya tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup area Surabaya Barat, Timur, dan Selatan, dengan opsi virtual untuk tim hybrid atau cabang di luar kota. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
        },
        {
          q: "Industri apa yang paling cocok untuk pelatihan AI korporat di Surabaya?",
          a: "Program dirancang untuk konteks Jawa Timur: manufaktur, logistik, perdagangan, dan operasional skala menengah-besar. Kurikulum mencakup AI automation dengan n8n untuk proses operasional, AI-powered development dengan Cursor untuk tim engineering, dan AI strategy untuk manajemen.",
        },
      ],
    },
  },
  {
    id: "bandung",
    name: "Bandung",
    title: "Corporate AI Training Bandung",
    description:
      "Bandung adalah hub teknologi dan startup terbesar di Jawa Barat dengan ekosistem kreatif dan digital yang dinamis. Corporate AI training di Bandung tersedia untuk agensi kreatif, startup, dan perusahaan teknologi yang ingin mengintegrasikan AI ke workflow mereka.",
    intro:
      "Bandung adalah hub teknologi, startup, dan industri kreatif terbesar di Jawa Barat. Corporate AI training di Bandung dari AI Training Indonesia cocok untuk startup, agensi kreatif, dan tech company yang ingin mengintegrasikan Generative AI ke dalam workflow harian, mulai dari AI automation hingga AI-powered development dengan Cursor. Tersedia on-site di kawasan Dago, area startup, dan sekitarnya, serta dapat dikombinasikan dengan company retreat.",
    highlights: [
      "Cocok untuk startup, agensi kreatif, dan tech companies",
      "Tersedia di kawasan IT Del, Dago, dan area startup Bandung",
      "Program AI Development cocok untuk engineering teams di Bandung",
      "Workshop bisa dikombinasikan dengan company retreat",
    ],
    aurelivan: "https://aurelivan.com/corporate-training/bandung",
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Bandung saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      defBlock: {
        id: "pelatihan-ai-bandung-untuk-perusahaan",
        q: "Pelatihan AI Bandung untuk perusahaan",
        a: "Pelatihan AI Bandung untuk perusahaan adalah program corporate training on-site atau virtual di Jawa Barat yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks startup, agensi kreatif, dan tech company. AI Training Indonesia menyelenggarakannya di Dago, kawasan startup, dan seluruh Bandung dengan kurikulum 70% hands-on.",
      },
      faqs: [
        {
          q: "Pelatihan AI di Bandung tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup kawasan Dago, area startup, dan sekitarnya, dengan opsi virtual untuk tim hybrid. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
        },
        {
          q: "Industri apa yang paling cocok untuk pelatihan AI korporat di Bandung?",
          a: "Program cocok untuk startup, agensi kreatif, dan tech company di Bandung yang ingin mengintegrasikan Generative AI ke workflow harian: AI automation dengan n8n, AI-powered development dengan Cursor, atau AI strategy untuk manajemen.",
        },
      ],
    },
  },
  {
    id: "tangerang",
    name: "Tangerang",
    title: "Corporate AI Training Tangerang",
    description:
      "Tangerang adalah kawasan industri utama di Jabodetabek dengan banyak perusahaan multinasional dan domestik. Trainer adalah organizer Cursor Meetup Tangerang, komunitas AI developer yang aktif di wilayah ini. Tersedia on-site di Tangerang Kota dan Tangerang Selatan (Serpong, BSD, Alam Sutera).",
    intro:
      "Tangerang adalah kawasan industri dan bisnis utama di Jabodetabek, rumah bagi banyak perusahaan multinasional dan domestik. AI Training Indonesia punya kehadiran lokal yang kuat di sini; trainer Aurelius Ivan Wijaya adalah organizer Cursor Meetup Tangerang, komunitas AI developer yang aktif di wilayah ini. Corporate AI training tersedia on-site di Tangerang Kota dan Tangerang Selatan (BSD, Serpong, Alam Sutera) dengan akses cepat dari Jakarta tanpa biaya transport tambahan.",
    highlights: [
      "Organizer Cursor Meetup Tangerang, trainer lokal yang familiar dengan ekosistem Tangerang",
      "Tersedia di Tangerang Kota dan Tangerang Selatan (BSD, Serpong, Alam Sutera)",
      "Cocok untuk perusahaan di kawasan industri Jababeka dan KIIC",
      "Quick on-site access dari Jakarta tanpa biaya transport tambahan",
    ],
    aurelivan: "https://aurelivan.com/corporate-training/tangerang",
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Tangerang saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      defBlock: {
        id: "pelatihan-ai-tangerang-untuk-perusahaan",
        q: "Pelatihan AI Tangerang untuk perusahaan",
        a: "Pelatihan AI Tangerang untuk perusahaan adalah program corporate training on-site atau virtual di Jabodetabek yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks industri dan bisnis Tangerang. AI Training Indonesia menyelenggarakannya di Tangerang Kota, BSD, Serpong, Alam Sutera, dan kawasan industri Jababeka dengan kurikulum 70% hands-on.",
      },
      faqs: [
        {
          q: "Pelatihan AI di Tangerang tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup Tangerang Kota dan Tangerang Selatan (BSD, Serpong, Alam Sutera), dengan opsi virtual untuk tim hybrid. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
        },
        {
          q: "Apa keunggulan pelatihan AI di Tangerang dari AI Training Indonesia?",
          a: "Trainer Aurelius Ivan Wijaya adalah organizer Cursor Meetup Tangerang dan familiar dengan ekosistem AI developer lokal. Program mencakup AI automation dengan n8n, AI-powered development dengan Cursor, dan AI agents, dengan akses on-site cepat dari Jakarta tanpa biaya transport tambahan.",
        },
      ],
    },
  },
];

export function getCity(id: string): City | undefined {
  return cities.find((c) => c.id === id);
}
