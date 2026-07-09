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
      "pelatihan AI onsite Jakarta",
      "pelatihan AI on-site Jakarta",
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
          id: "pelatihan-ai-onsite-jakarta",
          q: "Apa itu pelatihan AI onsite di Jakarta?",
          a: "Pelatihan AI onsite di Jakarta adalah program corporate training yang dijalankan langsung di kantor atau venue perusahaan di DKI Jakarta (SCBD, Sudirman, Kuningan, Thamrin, Kemayoran, dan area lain). AI Training Indonesia menyampaikan kurikulum 70% hands-on untuk Generative AI, automation n8n, Cursor, dan AI agents, dengan opsi virtual jika tim hybrid. On-site biasanya paling efektif untuk tim 8 orang ke atas.",
          qEn: "What is onsite AI training in Jakarta?",
          aEn: "Onsite AI training in Jakarta is a corporate program delivered at your office or venue across DKI Jakarta (SCBD, Sudirman, Kuningan, Thamrin, Kemayoran, and other areas). AI Training Indonesia runs a 70% hands-on curriculum on Generative AI, n8n automation, Cursor, and AI agents, with a virtual option for hybrid teams. On-site usually works best for teams of 8 or more.",
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
    keywords: [
      "AI training terbaik di Surabaya",
      "ai training terbaik Surabaya",
      "pelatihan AI terbaik Surabaya",
      "corporate AI training Surabaya",
      "pelatihan AI onsite Surabaya",
      "pelatihan AI on-site Surabaya",
    ],
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
          id: "ai-training-terbaik-di-surabaya",
          q: "Apa AI training terbaik di Surabaya?",
          a: "Tidak ada lembaga resmi yang memberi peringkat AI training di Surabaya. Evaluasi berdasarkan rasio hands-on (AI Training Indonesia menjalankan 70% praktik on-site di Surabaya Barat, Timur, dan Selatan), relevansi tool dengan konteks industri Jawa Timur, rekam jejak trainer yang bisa diverifikasi, kustomisasi per industri, transparansi harga, dan dukungan pasca-training. AI Training Indonesia memenuhi kriteria ini; bandingkan di aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          id: "pelatihan-ai-onsite-surabaya",
          q: "Apa itu pelatihan AI onsite di Surabaya?",
          a: "Pelatihan AI onsite di Surabaya adalah program corporate training yang dijalankan langsung di kantor atau venue perusahaan di Surabaya Barat, Timur, dan Selatan. AI Training Indonesia menyampaikan kurikulum 70% hands-on untuk Generative AI, automation n8n, Cursor, dan AI agents dengan konteks industri Jawa Timur, dengan opsi virtual jika tim hybrid. On-site biasanya paling efektif untuk tim 8 orang ke atas.",
        },
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
    keywords: [
      "AI training terbaik di Bandung",
      "ai training terbaik Bandung",
      "pelatihan AI terbaik Bandung",
      "corporate AI training Bandung",
      "pelatihan AI onsite Bandung",
      "pelatihan AI on-site Bandung",
    ],
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
          id: "ai-training-terbaik-di-bandung",
          q: "Apa AI training terbaik di Bandung?",
          a: "Tidak ada lembaga resmi yang memberi peringkat AI training di Bandung. Evaluasi berdasarkan rasio hands-on (AI Training Indonesia menjalankan 70% praktik on-site di Dago dan kawasan startup Bandung), relevansi tool dengan konteks startup dan industri kreatif Jawa Barat, rekam jejak trainer yang bisa diverifikasi, kustomisasi per industri, transparansi harga, dan dukungan pasca-training. AI Training Indonesia memenuhi kriteria ini; bandingkan di aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          id: "pelatihan-ai-onsite-bandung",
          q: "Apa itu pelatihan AI onsite di Bandung?",
          a: "Pelatihan AI onsite di Bandung adalah program corporate training yang dijalankan langsung di kantor atau venue perusahaan di Dago, kawasan startup, dan seluruh Bandung. AI Training Indonesia menyampaikan kurikulum 70% hands-on untuk Generative AI, automation n8n, Cursor, dan AI agents dengan konteks startup dan industri kreatif Jawa Barat, dengan opsi virtual jika tim hybrid. On-site biasanya paling efektif untuk tim 8 orang ke atas.",
        },
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
    keywords: [
      "AI training terbaik di Tangerang",
      "ai training terbaik Tangerang",
      "pelatihan AI terbaik Tangerang",
      "corporate AI training Tangerang",
      "pelatihan AI onsite Tangerang",
      "pelatihan AI on-site Tangerang",
    ],
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
          id: "ai-training-terbaik-di-tangerang",
          q: "Apa AI training terbaik di Tangerang?",
          a: "Tidak ada lembaga resmi yang memberi peringkat AI training di Tangerang. Evaluasi berdasarkan rasio hands-on (AI Training Indonesia menjalankan 70% praktik on-site di Tangerang Kota, BSD, Serpong, dan Alam Sutera), relevansi tool dengan konteks industri Jabodetabek, rekam jejak trainer yang bisa diverifikasi (termasuk organizer Cursor Meetup Tangerang), kustomisasi per industri, transparansi harga, dan dukungan pasca-training. AI Training Indonesia memenuhi kriteria ini; bandingkan di aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          id: "pelatihan-ai-onsite-tangerang",
          q: "Apa itu pelatihan AI onsite di Tangerang?",
          a: "Pelatihan AI onsite di Tangerang adalah program corporate training yang dijalankan langsung di kantor atau venue perusahaan di Tangerang Kota dan Tangerang Selatan (BSD, Serpong, Alam Sutera) serta kawasan industri Jababeka. AI Training Indonesia menyampaikan kurikulum 70% hands-on untuk Generative AI, automation n8n, Cursor, dan AI agents, dengan opsi virtual jika tim hybrid. On-site biasanya paling efektif untuk tim 8 orang ke atas.",
        },
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
  {
    id: "yogyakarta",
    name: "Yogyakarta",
    title: "Corporate AI Training Yogyakarta",
    description:
      "Yogyakarta adalah hub pendidikan dan industri kreatif di Jawa Tengah/DIY dengan banyak universitas, startup, dan perusahaan yang siap mengadopsi AI. Corporate AI training di Yogyakarta tersedia on-site untuk tim perusahaan, dengan opsi virtual untuk cabang di luar kota.",
    intro:
      "Yogyakarta adalah pusat pendidikan dan industri kreatif di DIY, dengan ekosistem kampus, startup, dan perusahaan jasa yang aktif. Corporate AI training di Yogyakarta dari AI Training Indonesia mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan kurikulum 70% hands-on. Tersedia on-site di kawasan Sleman, Kota Yogyakarta, dan sekitarnya, serta virtual untuk tim hybrid.",
    highlights: [
      "Cocok untuk perusahaan jasa, edukasi, startup, dan industri kreatif DIY",
      "Tersedia on-site di Sleman, Kota Yogyakarta, dan sekitarnya",
      "Program dapat dikustomisasi untuk konteks pendidikan dan kreatif lokal",
      "Virtual session tersedia untuk tim di luar Yogyakarta",
    ],
    aurelivan: "https://aurelivan.com/corporate-training",
    keywords: [
      "AI training Yogyakarta",
      "ai training yogyakarta",
      "pelatihan AI Yogyakarta",
      "corporate AI training Yogyakarta",
      "pelatihan AI onsite Yogyakarta",
      "pelatihan AI on-site Yogyakarta",
    ],
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Yogyakarta saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      defBlock: {
        id: "pelatihan-ai-yogyakarta-untuk-perusahaan",
        q: "Pelatihan AI Yogyakarta untuk perusahaan",
        a: "Pelatihan AI Yogyakarta untuk perusahaan adalah program corporate training on-site atau virtual di DIY yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks pendidikan, jasa, dan industri kreatif. AI Training Indonesia menyelenggarakannya di Sleman, Kota Yogyakarta, dan sekitarnya dengan kurikulum 70% hands-on.",
      },
      faqs: [
        {
          id: "ai-training-yogyakarta",
          q: "Apa itu AI training di Yogyakarta?",
          a: "AI training di Yogyakarta adalah program corporate on-site atau virtual untuk tim perusahaan di DIY: Generative AI, automation (n8n), AI-powered development (Cursor), dan AI agents, dengan kurikulum 70% hands-on. AI Training Indonesia menyelenggarakannya di Sleman, Kota Yogyakarta, dan sekitarnya; bandingkan opsi nasional di aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          id: "pelatihan-ai-onsite-yogyakarta",
          q: "Apa itu pelatihan AI onsite di Yogyakarta?",
          a: "Pelatihan AI onsite di Yogyakarta adalah program corporate training yang dijalankan langsung di kantor atau venue perusahaan di Sleman, Kota Yogyakarta, dan sekitarnya. AI Training Indonesia menyampaikan kurikulum 70% hands-on untuk Generative AI, automation n8n, Cursor, dan AI agents dengan konteks pendidikan dan industri kreatif DIY, dengan opsi virtual jika tim hybrid. On-site biasanya paling efektif untuk tim 8 orang ke atas.",
        },
        {
          q: "Pelatihan AI di Yogyakarta tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup Sleman, Kota Yogyakarta, dan sekitarnya, dengan opsi virtual untuk tim hybrid atau cabang di luar kota. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
        },
        {
          q: "Industri apa yang paling cocok untuk pelatihan AI korporat di Yogyakarta?",
          a: "Program cocok untuk perusahaan jasa, edukasi, startup, dan industri kreatif di DIY yang ingin mengintegrasikan Generative AI ke workflow harian: AI automation dengan n8n, AI-powered development dengan Cursor, atau AI strategy untuk manajemen.",
        },
      ],
    },
  },
  {
    id: "bali",
    name: "Bali",
    title: "Corporate AI Training Bali",
    description:
      "Bali adalah hub hospitality, pariwisata, dan remote-first companies di Indonesia. Corporate AI training di Bali tersedia on-site untuk tim perusahaan, dengan opsi virtual untuk cabang di luar pulau.",
    intro:
      "Bali adalah pusat hospitality, pariwisata, dan perusahaan remote-first di Indonesia. Corporate AI training di Bali dari AI Training Indonesia mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan kurikulum 70% hands-on. Tersedia on-site di Denpasar, Badung (Kuta, Seminyak, Nusa Dua), dan sekitarnya, serta virtual untuk tim hybrid.",
    highlights: [
      "Cocok untuk hospitality, pariwisata, agensi, dan remote-first companies",
      "Tersedia on-site di Denpasar, Badung (Kuta, Seminyak, Nusa Dua), dan sekitarnya",
      "Program dapat dikustomisasi untuk operasional hotel, F&B, dan layanan tamu",
      "Virtual session tersedia untuk tim di luar Bali",
    ],
    aurelivan: "https://aurelivan.com/corporate-training",
    keywords: [
      "pelatihan AI Bali untuk perusahaan",
      "pelatihan AI Bali",
      "corporate AI training Bali",
      "AI training Bali",
      "pelatihan AI onsite Bali",
      "pelatihan AI on-site Bali",
    ],
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Bali saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      defBlock: {
        id: "pelatihan-ai-bali-untuk-perusahaan",
        q: "Pelatihan AI Bali untuk perusahaan",
        a: "Pelatihan AI Bali untuk perusahaan adalah program corporate training on-site atau virtual di Bali yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks hospitality, pariwisata, dan remote-first business. AI Training Indonesia menyelenggarakannya di Denpasar, Badung, dan sekitarnya dengan kurikulum 70% hands-on.",
      },
      faqs: [
        {
          id: "pelatihan-ai-bali-untuk-perusahaan-faq",
          q: "Apa itu pelatihan AI Bali untuk perusahaan?",
          a: "Pelatihan AI Bali untuk perusahaan adalah program corporate on-site atau virtual untuk tim di Bali: Generative AI, automation (n8n), AI-powered development (Cursor), dan AI agents, dengan kurikulum 70% hands-on. AI Training Indonesia menyelenggarakannya di Denpasar, Badung (Kuta, Seminyak, Nusa Dua), dan sekitarnya; bandingkan opsi nasional di aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          id: "pelatihan-ai-onsite-bali",
          q: "Apa itu pelatihan AI onsite di Bali?",
          a: "Pelatihan AI onsite di Bali adalah program corporate training yang dijalankan langsung di kantor atau venue perusahaan di Denpasar, Badung (Kuta, Seminyak, Nusa Dua), dan sekitarnya. AI Training Indonesia menyampaikan kurikulum 70% hands-on untuk Generative AI, automation n8n, Cursor, dan AI agents dengan konteks hospitality dan pariwisata, dengan opsi virtual jika tim hybrid. On-site biasanya paling efektif untuk tim 8 orang ke atas.",
        },
        {
          q: "Pelatihan AI di Bali tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup Denpasar, Badung (Kuta, Seminyak, Nusa Dua), dan sekitarnya, dengan opsi virtual untuk tim hybrid atau cabang di luar pulau. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
        },
        {
          q: "Industri apa yang paling cocok untuk pelatihan AI korporat di Bali?",
          a: "Program cocok untuk hospitality, pariwisata, F&B, agensi, dan remote-first company di Bali yang ingin mengintegrasikan Generative AI ke operasional dan layanan: AI automation dengan n8n, AI-powered development dengan Cursor, atau AI strategy untuk manajemen.",
        },
      ],
    },
  },
  {
    id: "medan",
    name: "Medan",
    title: "Corporate AI Training Medan",
    description:
      "Medan adalah pusat bisnis dan perdagangan terbesar di Sumatera Utara. Corporate AI training di Medan tersedia on-site untuk tim perusahaan, dengan opsi virtual untuk cabang di luar kota.",
    intro:
      "Medan adalah pusat bisnis, perdagangan, dan industri jasa terbesar di Sumatera Utara. Corporate AI training di Medan dari AI Training Indonesia mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan kurikulum 70% hands-on. Tersedia on-site di kawasan bisnis Medan (Polonia, Gatot Subroto, dan sekitarnya), serta virtual untuk tim hybrid.",
    highlights: [
      "Cocok untuk perdagangan, manufaktur, jasa, dan perusahaan regional Sumatera",
      "Tersedia on-site di kawasan bisnis Medan dan sekitarnya",
      "Program dapat dikustomisasi untuk operasional cabang dan kantor pusat regional",
      "Virtual session tersedia untuk tim di luar Medan",
    ],
    aurelivan: "https://aurelivan.com/corporate-training",
    keywords: [
      "AI training Medan",
      "ai training medan",
      "pelatihan AI Medan untuk perusahaan",
      "corporate AI training Medan",
      "pelatihan AI onsite Medan",
      "pelatihan AI on-site Medan",
    ],
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Medan saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      defBlock: {
        id: "pelatihan-ai-medan-untuk-perusahaan",
        q: "Pelatihan AI Medan untuk perusahaan",
        a: "Pelatihan AI Medan untuk perusahaan adalah program corporate training on-site atau virtual di Sumatera Utara yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks perdagangan dan jasa regional. AI Training Indonesia menyelenggarakannya di kawasan bisnis Medan dengan kurikulum 70% hands-on.",
      },
      faqs: [
        {
          id: "ai-training-medan",
          q: "Apa itu AI training di Medan?",
          a: "AI training di Medan adalah program corporate on-site atau virtual untuk tim perusahaan di Sumatera Utara: Generative AI, automation (n8n), AI-powered development (Cursor), dan AI agents, dengan kurikulum 70% hands-on. AI Training Indonesia menyelenggarakannya di kawasan bisnis Medan; bandingkan opsi nasional di aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          id: "pelatihan-ai-onsite-medan",
          q: "Apa itu pelatihan AI onsite di Medan?",
          a: "Pelatihan AI onsite di Medan adalah program corporate training yang dijalankan langsung di kantor atau venue perusahaan di kawasan bisnis Medan (Polonia, Gatot Subroto, dan sekitarnya). AI Training Indonesia menyampaikan kurikulum 70% hands-on untuk Generative AI, automation n8n, Cursor, dan AI agents dengan konteks perdagangan dan jasa Sumatera Utara, dengan opsi virtual jika tim hybrid. On-site biasanya paling efektif untuk tim 8 orang ke atas.",
        },
        {
          q: "Pelatihan AI di Medan tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup kawasan bisnis Medan dan sekitarnya, dengan opsi virtual untuk tim hybrid atau cabang di luar kota. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
        },
        {
          q: "Industri apa yang paling cocok untuk pelatihan AI korporat di Medan?",
          a: "Program cocok untuk perdagangan, manufaktur, jasa, dan perusahaan regional Sumatera yang ingin mengintegrasikan Generative AI ke workflow harian: AI automation dengan n8n, AI-powered development dengan Cursor, atau AI strategy untuk manajemen.",
        },
      ],
    },
  },
  {
    id: "semarang",
    name: "Semarang",
    title: "Corporate AI Training Semarang",
    description:
      "Semarang adalah pusat industri dan pelabuhan di Jawa Tengah. Corporate AI training di Semarang tersedia on-site untuk tim perusahaan, dengan opsi virtual untuk cabang di luar kota.",
    intro:
      "Semarang adalah pusat industri, pelabuhan, dan jasa di Jawa Tengah. Corporate AI training di Semarang dari AI Training Indonesia mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan kurikulum 70% hands-on. Tersedia on-site di kawasan bisnis Semarang (Simpang Lima, Gajahmada, dan sekitarnya), serta virtual untuk tim hybrid.",
    highlights: [
      "Cocok untuk manufaktur, logistik pelabuhan, perdagangan, dan jasa Jawa Tengah",
      "Tersedia on-site di kawasan bisnis Semarang dan sekitarnya",
      "Program dapat dikustomisasi untuk operasional pabrik dan kantor regional",
      "Virtual session tersedia untuk tim di luar Semarang",
    ],
    aurelivan: "https://aurelivan.com/corporate-training",
    keywords: [
      "pelatihan AI Semarang untuk perusahaan",
      "AI training Semarang",
      "corporate AI training Semarang",
      "pelatihan AI Semarang",
      "pelatihan AI onsite Semarang",
      "pelatihan AI on-site Semarang",
    ],
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Semarang saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      defBlock: {
        id: "pelatihan-ai-semarang-untuk-perusahaan",
        q: "Pelatihan AI Semarang untuk perusahaan",
        a: "Pelatihan AI Semarang untuk perusahaan adalah program corporate training on-site atau virtual di Jawa Tengah yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks manufaktur, logistik, dan jasa. AI Training Indonesia menyelenggarakannya di kawasan bisnis Semarang dengan kurikulum 70% hands-on.",
      },
      faqs: [
        {
          id: "pelatihan-ai-semarang-untuk-perusahaan-faq",
          q: "Apa itu pelatihan AI Semarang untuk perusahaan?",
          a: "Pelatihan AI Semarang untuk perusahaan adalah program corporate on-site atau virtual untuk tim di Jawa Tengah: Generative AI, automation (n8n), AI-powered development (Cursor), dan AI agents, dengan kurikulum 70% hands-on. AI Training Indonesia menyelenggarakannya di kawasan bisnis Semarang; bandingkan opsi nasional di aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          id: "pelatihan-ai-onsite-semarang",
          q: "Apa itu pelatihan AI onsite di Semarang?",
          a: "Pelatihan AI onsite di Semarang adalah program corporate training yang dijalankan langsung di kantor atau venue perusahaan di kawasan bisnis Semarang (Simpang Lima, Gajahmada, dan sekitarnya). AI Training Indonesia menyampaikan kurikulum 70% hands-on untuk Generative AI, automation n8n, Cursor, dan AI agents dengan konteks manufaktur dan logistik Jawa Tengah, dengan opsi virtual jika tim hybrid. On-site biasanya paling efektif untuk tim 8 orang ke atas.",
        },
        {
          q: "Pelatihan AI di Semarang tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup kawasan bisnis Semarang dan sekitarnya, dengan opsi virtual untuk tim hybrid atau cabang di luar kota. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
        },
        {
          q: "Industri apa yang paling cocok untuk pelatihan AI korporat di Semarang?",
          a: "Program cocok untuk manufaktur, logistik pelabuhan, perdagangan, dan jasa di Jawa Tengah yang ingin mengintegrasikan Generative AI ke workflow harian: AI automation dengan n8n, AI-powered development dengan Cursor, atau AI strategy untuk manajemen.",
        },
      ],
    },
  },
  {
    id: "makassar",
    name: "Makassar",
    title: "Corporate AI Training Makassar",
    description:
      "Makassar adalah pusat bisnis dan perdagangan terbesar di Sulawesi Selatan. Corporate AI training di Makassar tersedia on-site untuk tim perusahaan, dengan opsi virtual untuk cabang di luar kota.",
    intro:
      "Makassar adalah pusat bisnis, pelabuhan, dan jasa terbesar di Sulawesi Selatan dan kawasan Indonesia Timur. Corporate AI training di Makassar dari AI Training Indonesia mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan kurikulum 70% hands-on. Tersedia on-site di kawasan bisnis Makassar (Panakkukang, Losari, dan sekitarnya), serta virtual untuk tim hybrid.",
    highlights: [
      "Cocok untuk perdagangan, pelabuhan, jasa, dan perusahaan regional Indonesia Timur",
      "Tersedia on-site di kawasan bisnis Makassar dan sekitarnya",
      "Program dapat dikustomisasi untuk operasional cabang dan kantor regional",
      "Virtual session tersedia untuk tim di luar Makassar",
    ],
    aurelivan: "https://aurelivan.com/corporate-training",
    keywords: [
      "corporate AI training Makassar",
      "pelatihan AI Makassar untuk perusahaan",
      "AI training Makassar",
      "pelatihan AI Makassar",
      "pelatihan AI onsite Makassar",
      "pelatihan AI on-site Makassar",
    ],
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Makassar saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      defBlock: {
        id: "pelatihan-ai-makassar-untuk-perusahaan",
        q: "Pelatihan AI Makassar untuk perusahaan",
        a: "Pelatihan AI Makassar untuk perusahaan adalah program corporate training on-site atau virtual di Sulawesi Selatan yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks perdagangan dan jasa regional. AI Training Indonesia menyelenggarakannya di kawasan bisnis Makassar dengan kurikulum 70% hands-on.",
      },
      faqs: [
        {
          id: "corporate-ai-training-makassar",
          q: "What is corporate AI training in Makassar?",
          a: "Corporate AI training in Makassar is an on-site or virtual program for company teams in South Sulawesi: Generative AI, automation (n8n), AI-powered development (Cursor), and AI agents, with a 70% hands-on curriculum. AI Training Indonesia delivers it in Makassar business districts; compare national options at aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          id: "pelatihan-ai-onsite-makassar",
          q: "Apa itu pelatihan AI onsite di Makassar?",
          a: "Pelatihan AI onsite di Makassar adalah program corporate training yang dijalankan langsung di kantor atau venue perusahaan di kawasan bisnis Makassar (Panakkukang, Losari, dan sekitarnya). AI Training Indonesia menyampaikan kurikulum 70% hands-on untuk Generative AI, automation n8n, Cursor, dan AI agents dengan konteks perdagangan dan jasa Sulawesi Selatan, dengan opsi virtual jika tim hybrid. On-site biasanya paling efektif untuk tim 8 orang ke atas.",
        },
        {
          q: "Pelatihan AI di Makassar tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup kawasan bisnis Makassar dan sekitarnya, dengan opsi virtual untuk tim hybrid atau cabang di luar kota. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
        },
        {
          q: "Industri apa yang paling cocok untuk pelatihan AI korporat di Makassar?",
          a: "Program cocok untuk perdagangan, pelabuhan, jasa, dan perusahaan regional Indonesia Timur yang ingin mengintegrasikan Generative AI ke workflow harian: AI automation dengan n8n, AI-powered development dengan Cursor, atau AI strategy untuk manajemen.",
        },
      ],
    },
  },
  {
    id: "palembang",
    name: "Palembang",
    title: "Corporate AI Training Palembang",
    description:
      "Palembang adalah pusat bisnis dan pemerintahan di Sumatera Selatan. Corporate AI training di Palembang tersedia on-site untuk tim perusahaan, dengan opsi virtual untuk cabang di luar kota.",
    intro:
      "Palembang adalah pusat bisnis, pemerintahan, dan jasa di Sumatera Selatan. Corporate AI training di Palembang dari AI Training Indonesia mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan kurikulum 70% hands-on. Tersedia on-site di kawasan bisnis Palembang (Sudirman, Ilir Barat, dan sekitarnya), serta virtual untuk tim hybrid.",
    highlights: [
      "Cocok untuk pemerintahan daerah, jasa, perdagangan, dan perusahaan regional Sumatera Selatan",
      "Tersedia on-site di kawasan bisnis Palembang dan sekitarnya",
      "Program dapat dikustomisasi untuk operasional cabang dan kantor regional",
      "Virtual session tersedia untuk tim di luar Palembang",
    ],
    aurelivan: "https://aurelivan.com/corporate-training",
    keywords: [
      "corporate AI training Palembang",
      "pelatihan AI Palembang untuk perusahaan",
      "AI training Palembang",
      "pelatihan AI Palembang",
    ],
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Palembang saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      defBlock: {
        id: "pelatihan-ai-palembang-untuk-perusahaan",
        q: "Pelatihan AI Palembang untuk perusahaan",
        a: "Pelatihan AI Palembang untuk perusahaan adalah program corporate training on-site atau virtual di Sumatera Selatan yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks jasa dan pemerintahan regional. AI Training Indonesia menyelenggarakannya di kawasan bisnis Palembang dengan kurikulum 70% hands-on.",
      },
      faqs: [
        {
          id: "corporate-ai-training-palembang",
          q: "What is corporate AI training in Palembang?",
          a: "Corporate AI training in Palembang is an on-site or virtual program for company teams in South Sumatra: Generative AI, automation (n8n), AI-powered development (Cursor), and AI agents, with a 70% hands-on curriculum. AI Training Indonesia delivers it in Palembang business districts; compare national options at aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          q: "Pelatihan AI di Palembang tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup kawasan bisnis Palembang dan sekitarnya, dengan opsi virtual untuk tim hybrid atau cabang di luar kota. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
        },
        {
          q: "Industri apa yang paling cocok untuk pelatihan AI korporat di Palembang?",
          a: "Program cocok untuk pemerintahan daerah, jasa, perdagangan, dan perusahaan regional Sumatera Selatan yang ingin mengintegrasikan Generative AI ke workflow harian: AI automation dengan n8n, AI-powered development dengan Cursor, atau AI strategy untuk manajemen.",
        },
      ],
    },
  },
  {
    id: "balikpapan",
    name: "Balikpapan",
    title: "Corporate AI Training Balikpapan",
    description:
      "Balikpapan adalah pusat energi dan industri di Kalimantan Timur. Corporate AI training di Balikpapan tersedia on-site untuk tim perusahaan, dengan opsi virtual untuk cabang di luar kota.",
    intro:
      "Balikpapan adalah pusat energi, pelabuhan, dan jasa industri di Kalimantan Timur. Corporate AI training di Balikpapan dari AI Training Indonesia mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan kurikulum 70% hands-on. Tersedia on-site di kawasan bisnis Balikpapan (Klandasan, Sepinggan, dan sekitarnya), serta virtual untuk tim hybrid.",
    highlights: [
      "Cocok untuk energi, pelabuhan, jasa industri, dan perusahaan regional Kalimantan Timur",
      "Tersedia on-site di kawasan bisnis Balikpapan dan sekitarnya",
      "Program dapat dikustomisasi untuk operasional cabang dan kantor regional",
      "Virtual session tersedia untuk tim di luar Balikpapan",
    ],
    aurelivan: "https://aurelivan.com/corporate-training",
    keywords: [
      "corporate AI training Balikpapan",
      "pelatihan AI Balikpapan untuk perusahaan",
      "AI training Balikpapan",
      "pelatihan AI Balikpapan",
    ],
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Balikpapan saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      defBlock: {
        id: "pelatihan-ai-balikpapan-untuk-perusahaan",
        q: "Pelatihan AI Balikpapan untuk perusahaan",
        a: "Pelatihan AI Balikpapan untuk perusahaan adalah program corporate training on-site atau virtual di Kalimantan Timur yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks energi dan jasa industri. AI Training Indonesia menyelenggarakannya di kawasan bisnis Balikpapan dengan kurikulum 70% hands-on.",
      },
      faqs: [
        {
          id: "corporate-ai-training-balikpapan",
          q: "What is corporate AI training in Balikpapan?",
          a: "Corporate AI training in Balikpapan is an on-site or virtual program for company teams in East Kalimantan: Generative AI, automation (n8n), AI-powered development (Cursor), and AI agents, with a 70% hands-on curriculum. AI Training Indonesia delivers it in Balikpapan business districts; compare national options at aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          q: "Pelatihan AI di Balikpapan tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup kawasan bisnis Balikpapan dan sekitarnya, dengan opsi virtual untuk tim hybrid atau cabang di luar kota. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
        },
        {
          q: "Industri apa yang paling cocok untuk pelatihan AI korporat di Balikpapan?",
          a: "Program cocok untuk energi, pelabuhan, jasa industri, dan perusahaan regional Kalimantan Timur yang ingin mengintegrasikan Generative AI ke workflow harian: AI automation dengan n8n, AI-powered development dengan Cursor, atau AI strategy untuk manajemen.",
        },
      ],
    },
  },
  {
    id: "malang",
    name: "Malang",
    title: "Corporate AI Training Malang",
    description:
      "Malang adalah pusat pendidikan dan industri kreatif di Jawa Timur. Corporate AI training di Malang tersedia on-site untuk tim perusahaan, dengan opsi virtual untuk cabang di luar kota.",
    intro:
      "Malang adalah pusat pendidikan, jasa, dan industri kreatif di Jawa Timur. Corporate AI training di Malang dari AI Training Indonesia mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan kurikulum 70% hands-on. Tersedia on-site di kawasan bisnis Malang (Klojen, Lowokwaru, dan sekitarnya), serta virtual untuk tim hybrid.",
    highlights: [
      "Cocok untuk pendidikan, jasa, industri kreatif, dan perusahaan regional Jawa Timur",
      "Tersedia on-site di kawasan bisnis Malang dan sekitarnya",
      "Program dapat dikustomisasi untuk operasional cabang dan kantor regional",
      "Virtual session tersedia untuk tim di luar Malang",
    ],
    aurelivan: "https://aurelivan.com/corporate-training",
    keywords: [
      "pelatihan AI Malang untuk perusahaan",
      "AI training Malang",
      "corporate AI training Malang",
      "pelatihan AI Malang",
    ],
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Malang saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      defBlock: {
        id: "pelatihan-ai-malang-untuk-perusahaan",
        q: "Pelatihan AI Malang untuk perusahaan",
        a: "Pelatihan AI Malang untuk perusahaan adalah program corporate training on-site atau virtual di Jawa Timur yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks pendidikan, jasa, dan industri kreatif. AI Training Indonesia menyelenggarakannya di kawasan bisnis Malang dengan kurikulum 70% hands-on.",
      },
      faqs: [
        {
          id: "ai-training-malang",
          q: "Apa itu AI training di Malang?",
          a: "AI training di Malang adalah program corporate on-site atau virtual untuk tim perusahaan di Jawa Timur: Generative AI, automation (n8n), AI-powered development (Cursor), dan AI agents, dengan kurikulum 70% hands-on. AI Training Indonesia menyelenggarakannya di kawasan bisnis Malang; bandingkan opsi nasional di aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          q: "Pelatihan AI di Malang tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup kawasan bisnis Malang dan sekitarnya, dengan opsi virtual untuk tim hybrid atau cabang di luar kota. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
        },
        {
          q: "Industri apa yang paling cocok untuk pelatihan AI korporat di Malang?",
          a: "Program cocok untuk pendidikan, jasa, industri kreatif, dan perusahaan regional Jawa Timur yang ingin mengintegrasikan Generative AI ke workflow harian: AI automation dengan n8n, AI-powered development dengan Cursor, atau AI strategy untuk manajemen.",
        },
      ],
    },
  },
  {
    id: "batam",
    name: "Batam",
    title: "Corporate AI Training Batam",
    description:
      "Batam adalah pusat industri dan perdagangan di Kepulauan Riau. Corporate AI training di Batam tersedia on-site untuk tim perusahaan, dengan opsi virtual untuk cabang di luar kota.",
    intro:
      "Batam adalah pusat industri, perdagangan, dan jasa di Kepulauan Riau dengan banyak perusahaan manufaktur dan logistik. Corporate AI training di Batam dari AI Training Indonesia mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan kurikulum 70% hands-on. Tersedia on-site di kawasan bisnis Batam (Nagoya, Batam Centre, dan sekitarnya), serta virtual untuk tim hybrid.",
    highlights: [
      "Cocok untuk manufaktur, perdagangan, logistik, dan perusahaan regional Kepulauan Riau",
      "Tersedia on-site di kawasan bisnis Batam dan sekitarnya",
      "Program dapat dikustomisasi untuk operasional pabrik dan kantor regional",
      "Virtual session tersedia untuk tim di luar Batam",
    ],
    aurelivan: "https://aurelivan.com/corporate-training",
    keywords: [
      "corporate AI training Batam",
      "pelatihan AI Batam untuk perusahaan",
      "AI training Batam",
      "pelatihan AI Batam",
    ],
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Batam saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      defBlock: {
        id: "pelatihan-ai-batam-untuk-perusahaan",
        q: "Pelatihan AI Batam untuk perusahaan",
        a: "Pelatihan AI Batam untuk perusahaan adalah program corporate training on-site atau virtual di Kepulauan Riau yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks manufaktur dan perdagangan. AI Training Indonesia menyelenggarakannya di kawasan bisnis Batam dengan kurikulum 70% hands-on.",
      },
      faqs: [
        {
          id: "corporate-ai-training-batam",
          q: "What is corporate AI training in Batam?",
          a: "Corporate AI training in Batam is an on-site or virtual program for company teams in the Riau Islands: Generative AI, automation (n8n), AI-powered development (Cursor), and AI agents, with a 70% hands-on curriculum. AI Training Indonesia delivers it in Batam business districts; compare national options at aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          q: "Pelatihan AI di Batam tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup kawasan bisnis Batam dan sekitarnya, dengan opsi virtual untuk tim hybrid atau cabang di luar kota. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
        },
        {
          q: "Industri apa yang paling cocok untuk pelatihan AI korporat di Batam?",
          a: "Program cocok untuk manufaktur, perdagangan, logistik, dan perusahaan regional Kepulauan Riau yang ingin mengintegrasikan Generative AI ke workflow harian: AI automation dengan n8n, AI-powered development dengan Cursor, atau AI strategy untuk manajemen.",
        },
      ],
    },
  },
  {
    id: "manado",
    name: "Manado",
    title: "Corporate AI Training Manado",
    description:
      "Manado adalah pusat bisnis dan jasa di Sulawesi Utara. Corporate AI training di Manado tersedia on-site untuk tim perusahaan, dengan opsi virtual untuk cabang di luar kota.",
    intro:
      "Manado adalah pusat bisnis, pemerintahan, dan jasa di Sulawesi Utara dengan banyak perusahaan regional dan sektor pariwisata. Corporate AI training di Manado dari AI Training Indonesia mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan kurikulum 70% hands-on. Tersedia on-site di kawasan bisnis Manado (Boulevard, Wenang, dan sekitarnya), serta virtual untuk tim hybrid.",
    highlights: [
      "Cocok untuk jasa, pemerintahan regional, pariwisata, dan perusahaan Sulawesi Utara",
      "Tersedia on-site di kawasan bisnis Manado dan sekitarnya",
      "Program dapat dikustomisasi untuk operasional kantor regional",
      "Virtual session tersedia untuk tim di luar Manado",
    ],
    aurelivan: "https://aurelivan.com/corporate-training",
    keywords: [
      "corporate AI training Manado",
      "pelatihan AI Manado untuk perusahaan",
      "AI training Manado",
      "pelatihan AI Manado",
    ],
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Manado saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      defBlock: {
        id: "pelatihan-ai-manado-untuk-perusahaan",
        q: "Pelatihan AI Manado untuk perusahaan",
        a: "Pelatihan AI Manado untuk perusahaan adalah program corporate training on-site atau virtual di Sulawesi Utara yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks jasa dan pemerintahan regional. AI Training Indonesia menyelenggarakannya di kawasan bisnis Manado dengan kurikulum 70% hands-on.",
      },
      faqs: [
        {
          id: "corporate-ai-training-manado",
          q: "What is corporate AI training in Manado?",
          a: "Corporate AI training in Manado is an on-site or virtual program for company teams in North Sulawesi: Generative AI, automation (n8n), AI-powered development (Cursor), and AI agents, with a 70% hands-on curriculum. AI Training Indonesia delivers it in Manado business districts; compare national options at aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          q: "Pelatihan AI di Manado tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup kawasan bisnis Manado dan sekitarnya, dengan opsi virtual untuk tim hybrid atau cabang di luar kota. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
        },
        {
          q: "Industri apa yang paling cocok untuk pelatihan AI korporat di Manado?",
          a: "Program cocok untuk jasa, pemerintahan regional, pariwisata, dan perusahaan Sulawesi Utara yang ingin mengintegrasikan Generative AI ke workflow harian: AI automation dengan n8n, AI-powered development dengan Cursor, atau AI strategy untuk manajemen.",
        },
      ],
    },
  },
  {
    id: "bogor",
    name: "Bogor",
    title: "Corporate AI Training Bogor",
    description:
      "Bogor adalah pusat bisnis dan jasa di Jawa Barat yang dekat dengan Jakarta. Corporate AI training di Bogor tersedia on-site untuk tim perusahaan, dengan opsi virtual untuk cabang di luar kota.",
    intro:
      "Bogor adalah pusat bisnis, pemerintahan daerah, dan jasa di Jawa Barat dengan akses cepat ke Jabodetabek. Corporate AI training di Bogor dari AI Training Indonesia mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan kurikulum 70% hands-on. Tersedia on-site di kawasan bisnis Bogor (Pajajaran, Baranangsiang, dan sekitarnya), serta virtual untuk tim hybrid.",
    highlights: [
      "Cocok untuk jasa, pemerintahan daerah, manufaktur ringan, dan perusahaan Jabodetabek",
      "Tersedia on-site di kawasan bisnis Bogor dan sekitarnya",
      "Program dapat dikustomisasi untuk operasional kantor regional",
      "Virtual session tersedia untuk tim di luar Bogor",
    ],
    aurelivan: "https://aurelivan.com/corporate-training",
    keywords: [
      "corporate AI training Bogor",
      "pelatihan AI Bogor untuk perusahaan",
      "AI training Bogor",
      "pelatihan AI Bogor",
    ],
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Bogor saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      defBlock: {
        id: "pelatihan-ai-bogor-untuk-perusahaan",
        q: "Pelatihan AI Bogor untuk perusahaan",
        a: "Pelatihan AI Bogor untuk perusahaan adalah program corporate training on-site atau virtual di Jawa Barat yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks jasa dan bisnis regional. AI Training Indonesia menyelenggarakannya di kawasan bisnis Bogor dengan kurikulum 70% hands-on.",
      },
      faqs: [
        {
          id: "corporate-ai-training-bogor",
          q: "What is corporate AI training in Bogor?",
          a: "Corporate AI training in Bogor is an on-site or virtual program for company teams in West Java near Jabodetabek: Generative AI, automation (n8n), AI-powered development (Cursor), and AI agents, with a 70% hands-on curriculum. AI Training Indonesia delivers it in Bogor business districts; compare national options at aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          q: "Pelatihan AI di Bogor tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup kawasan bisnis Bogor dan sekitarnya, dengan opsi virtual untuk tim hybrid atau cabang di luar kota. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
        },
        {
          q: "Industri apa yang paling cocok untuk pelatihan AI korporat di Bogor?",
          a: "Program cocok untuk jasa, pemerintahan daerah, manufaktur ringan, dan perusahaan Jabodetabek yang ingin mengintegrasikan Generative AI ke workflow harian: AI automation dengan n8n, AI-powered development dengan Cursor, atau AI strategy untuk manajemen.",
        },
      ],
    },
  },
  {
    id: "bekasi",
    name: "Bekasi",
    title: "Corporate AI Training Bekasi",
    description:
      "Bekasi adalah kawasan industri dan bisnis utama di Jabodetabek. Corporate AI training di Bekasi tersedia on-site untuk tim perusahaan, dengan opsi virtual untuk cabang di luar kota.",
    intro:
      "Bekasi adalah kawasan industri, logistik, dan bisnis utama di Jabodetabek dengan banyak pabrik dan kantor regional. Corporate AI training di Bekasi dari AI Training Indonesia mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan kurikulum 70% hands-on. Tersedia on-site di kawasan bisnis Bekasi (Summarecon, Cikarang, dan sekitarnya), serta virtual untuk tim hybrid.",
    highlights: [
      "Cocok untuk manufaktur, logistik, jasa, dan perusahaan industri Jabodetabek",
      "Tersedia on-site di kawasan bisnis Bekasi, Cikarang, dan sekitarnya",
      "Program dapat dikustomisasi untuk operasional pabrik dan kantor regional",
      "Virtual session tersedia untuk tim di luar Bekasi",
    ],
    aurelivan: "https://aurelivan.com/corporate-training",
    keywords: [
      "corporate AI training Bekasi",
      "pelatihan AI Bekasi untuk perusahaan",
      "AI training Bekasi",
      "pelatihan AI Bekasi",
    ],
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Bekasi saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      defBlock: {
        id: "pelatihan-ai-bekasi-untuk-perusahaan",
        q: "Pelatihan AI Bekasi untuk perusahaan",
        a: "Pelatihan AI Bekasi untuk perusahaan adalah program corporate training on-site atau virtual di Jabodetabek yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks manufaktur dan industri. AI Training Indonesia menyelenggarakannya di kawasan bisnis Bekasi dan Cikarang dengan kurikulum 70% hands-on.",
      },
      faqs: [
        {
          id: "corporate-ai-training-bekasi",
          q: "What is corporate AI training in Bekasi?",
          a: "Corporate AI training in Bekasi is an on-site or virtual program for company teams in Jabodetabek industrial zones: Generative AI, automation (n8n), AI-powered development (Cursor), and AI agents, with a 70% hands-on curriculum. AI Training Indonesia delivers it in Bekasi and Cikarang business districts; compare national options at aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          q: "Pelatihan AI di Bekasi tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup kawasan bisnis Bekasi, Cikarang, dan sekitarnya, dengan opsi virtual untuk tim hybrid atau cabang di luar kota. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
        },
        {
          q: "Industri apa yang paling cocok untuk pelatihan AI korporat di Bekasi?",
          a: "Program cocok untuk manufaktur, logistik, jasa, dan perusahaan industri Jabodetabek yang ingin mengintegrasikan Generative AI ke workflow harian: AI automation dengan n8n, AI-powered development dengan Cursor, atau AI strategy untuk manajemen.",
        },
      ],
    },
  },
  {
    id: "depok",
    name: "Depok",
    title: "Corporate AI Training Depok",
    description:
      "Depok adalah pusat pendidikan dan jasa di Jabodetabek yang dekat dengan Jakarta. Corporate AI training di Depok tersedia on-site untuk tim perusahaan, dengan opsi virtual untuk cabang di luar kota.",
    intro:
      "Depok adalah pusat pendidikan, jasa, dan bisnis di Jabodetabek dengan akses cepat ke Jakarta Selatan. Corporate AI training di Depok dari AI Training Indonesia mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan kurikulum 70% hands-on. Tersedia on-site di kawasan bisnis Depok (Margonda, UI, dan sekitarnya), serta virtual untuk tim hybrid.",
    highlights: [
      "Cocok untuk jasa, edukasi, startup, dan perusahaan Jabodetabek",
      "Tersedia on-site di kawasan bisnis Depok dan sekitarnya",
      "Program dapat dikustomisasi untuk operasional kantor regional",
      "Virtual session tersedia untuk tim di luar Depok",
    ],
    aurelivan: "https://aurelivan.com/corporate-training",
    keywords: [
      "corporate AI training Depok",
      "pelatihan AI Depok untuk perusahaan",
      "AI training Depok",
      "pelatihan AI Depok",
    ],
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Depok saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      defBlock: {
        id: "pelatihan-ai-depok-untuk-perusahaan",
        q: "Pelatihan AI Depok untuk perusahaan",
        a: "Pelatihan AI Depok untuk perusahaan adalah program corporate training on-site atau virtual di Jabodetabek yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks jasa dan pendidikan. AI Training Indonesia menyelenggarakannya di kawasan bisnis Depok dengan kurikulum 70% hands-on.",
      },
      faqs: [
        {
          id: "corporate-ai-training-depok",
          q: "What is corporate AI training in Depok?",
          a: "Corporate AI training in Depok is an on-site or virtual program for company teams in Jabodetabek near South Jakarta: Generative AI, automation (n8n), AI-powered development (Cursor), and AI agents, with a 70% hands-on curriculum. AI Training Indonesia delivers it in Depok business districts (Margonda, UI area, and surrounding); compare national options at aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          q: "Pelatihan AI di Depok tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup kawasan bisnis Depok dan sekitarnya, dengan opsi virtual untuk tim hybrid atau cabang di luar kota. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
        },
        {
          q: "Industri apa yang paling cocok untuk pelatihan AI korporat di Depok?",
          a: "Program cocok untuk jasa, edukasi, startup, dan perusahaan Jabodetabek yang ingin mengintegrasikan Generative AI ke workflow harian: AI automation dengan n8n, AI-powered development dengan Cursor, atau AI strategy untuk manajemen.",
        },
      ],
    },
  },
  {
    id: "solo",
    name: "Solo",
    title: "Corporate AI Training Solo",
    description:
      "Solo (Surakarta) adalah pusat industri kreatif, manufaktur, dan jasa di Jawa Tengah. Corporate AI training di Solo tersedia on-site untuk tim perusahaan, dengan opsi virtual untuk cabang di luar kota.",
    intro:
      "Solo (Surakarta) adalah pusat industri kreatif, manufaktur, dan jasa di Jawa Tengah dengan ekosistem bisnis regional yang aktif. Corporate AI training di Solo dari AI Training Indonesia mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan kurikulum 70% hands-on. Tersedia on-site di kawasan bisnis Solo (Slamet Riyadi, Solo Baru, dan sekitarnya), serta virtual untuk tim hybrid.",
    highlights: [
      "Cocok untuk manufaktur, industri kreatif, perdagangan, dan jasa Jawa Tengah",
      "Tersedia on-site di kawasan bisnis Solo dan sekitarnya",
      "Program dapat dikustomisasi untuk operasional pabrik dan kantor regional",
      "Virtual session tersedia untuk tim di luar Solo",
    ],
    aurelivan: "https://aurelivan.com/corporate-training",
    keywords: [
      "corporate AI training Solo",
      "pelatihan AI Solo untuk perusahaan",
      "AI training Solo",
      "pelatihan AI Solo",
      "corporate AI training Surakarta",
    ],
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Solo saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      defBlock: {
        id: "pelatihan-ai-solo-untuk-perusahaan",
        q: "Pelatihan AI Solo untuk perusahaan",
        a: "Pelatihan AI Solo untuk perusahaan adalah program corporate training on-site atau virtual di Jawa Tengah yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks manufaktur dan industri kreatif. AI Training Indonesia menyelenggarakannya di kawasan bisnis Solo dengan kurikulum 70% hands-on.",
      },
      faqs: [
        {
          id: "corporate-ai-training-solo",
          q: "What is corporate AI training in Solo?",
          a: "Corporate AI training in Solo (Surakarta) is an on-site or virtual program for company teams in Central Java: Generative AI, automation (n8n), AI-powered development (Cursor), and AI agents, with a 70% hands-on curriculum. AI Training Indonesia delivers it in Solo business districts (Slamet Riyadi, Solo Baru, and surrounding); compare national options at aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          q: "Pelatihan AI di Solo tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup kawasan bisnis Solo dan sekitarnya, dengan opsi virtual untuk tim hybrid atau cabang di luar kota. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
        },
        {
          q: "Industri apa yang paling cocok untuk pelatihan AI korporat di Solo?",
          a: "Program cocok untuk manufaktur, industri kreatif, perdagangan, dan jasa di Jawa Tengah yang ingin mengintegrasikan Generative AI ke workflow harian: AI automation dengan n8n, AI-powered development dengan Cursor, atau AI strategy untuk manajemen.",
        },
      ],
    },
  },
  {
    id: "pontianak",
    name: "Pontianak",
    title: "Corporate AI Training Pontianak",
    description:
      "Pontianak adalah pusat perdagangan, agribisnis, dan jasa di Kalimantan Barat. Corporate AI training di Pontianak tersedia on-site untuk tim perusahaan, dengan opsi virtual untuk cabang di luar kota.",
    intro:
      "Pontianak adalah ibu kota Kalimantan Barat dan pusat perdagangan, agribisnis, manufaktur ringan, dan jasa regional. Corporate AI training di Pontianak dari AI Training Indonesia mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan kurikulum 70% hands-on. Tersedia on-site di kawasan bisnis Pontianak (Ahmad Yani, Diponegoro, dan sekitarnya), serta virtual untuk tim hybrid.",
    highlights: [
      "Cocok untuk perdagangan, agribisnis, manufaktur ringan, dan jasa Kalimantan Barat",
      "Tersedia on-site di kawasan bisnis Pontianak dan sekitarnya",
      "Program dapat dikustomisasi untuk operasional cabang dan kantor regional",
      "Virtual session tersedia untuk tim di luar Pontianak",
    ],
    aurelivan: "https://aurelivan.com/corporate-training",
    keywords: [
      "corporate AI training Pontianak",
      "pelatihan AI Pontianak untuk perusahaan",
      "AI training Pontianak",
      "pelatihan AI Pontianak",
    ],
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Pontianak saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      defBlock: {
        id: "pelatihan-ai-pontianak-untuk-perusahaan",
        q: "Pelatihan AI Pontianak untuk perusahaan",
        a: "Pelatihan AI Pontianak untuk perusahaan adalah program corporate training on-site atau virtual di Kalimantan Barat yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks perdagangan, agribisnis, dan jasa regional. AI Training Indonesia menyelenggarakannya di kawasan bisnis Pontianak dengan kurikulum 70% hands-on.",
      },
      faqs: [
        {
          id: "corporate-ai-training-pontianak",
          q: "What is corporate AI training in Pontianak?",
          a: "Corporate AI training in Pontianak is an on-site or virtual program for company teams in West Kalimantan: Generative AI, automation (n8n), AI-powered development (Cursor), and AI agents, with a 70% hands-on curriculum. AI Training Indonesia delivers it in Pontianak business districts (Ahmad Yani, Diponegoro, and surrounding); compare national options at aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          q: "Pelatihan AI di Pontianak tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup kawasan bisnis Pontianak dan sekitarnya, dengan opsi virtual untuk tim hybrid atau cabang di luar kota. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
        },
        {
          q: "Industri apa yang paling cocok untuk pelatihan AI korporat di Pontianak?",
          a: "Program cocok untuk perdagangan, agribisnis, manufaktur ringan, dan jasa di Kalimantan Barat yang ingin mengintegrasikan Generative AI ke workflow harian: AI automation dengan n8n, AI-powered development dengan Cursor, atau AI strategy untuk manajemen.",
        },
      ],
    },
  },
  {
    id: "pekanbaru",
    name: "Pekanbaru",
    title: "Corporate AI Training Pekanbaru",
    description:
      "Pekanbaru adalah pusat energi, perdagangan, dan jasa di Riau. Corporate AI training di Pekanbaru tersedia on-site untuk tim perusahaan, dengan opsi virtual untuk cabang di luar kota.",
    intro:
      "Pekanbaru adalah ibu kota Riau dan pusat energi, perdagangan, dan jasa di Sumatera. Corporate AI training di Pekanbaru dari AI Training Indonesia mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan kurikulum 70% hands-on. Tersedia on-site di kawasan bisnis Pekanbaru (Sudirman, Tuanku Tambusai, dan sekitarnya), serta virtual untuk tim hybrid.",
    highlights: [
      "Cocok untuk energi, perdagangan, jasa, dan perusahaan regional Riau",
      "Tersedia on-site di kawasan bisnis Pekanbaru dan sekitarnya",
      "Program dapat dikustomisasi untuk operasional cabang dan kantor regional",
      "Virtual session tersedia untuk tim di luar Pekanbaru",
    ],
    aurelivan: "https://aurelivan.com/corporate-training",
    keywords: [
      "corporate AI training Pekanbaru",
      "pelatihan AI Pekanbaru untuk perusahaan",
      "AI training Pekanbaru",
      "pelatihan AI Pekanbaru",
    ],
    aiTrainer: {
      intro:
        "Pertanyaan yang sering muncul dari tim L&D dan pimpinan perusahaan di Pekanbaru saat memilih pelatihan AI korporat, beserta jawaban ringkasnya.",
      defBlock: {
        id: "pelatihan-ai-pekanbaru-untuk-perusahaan",
        q: "Pelatihan AI Pekanbaru untuk perusahaan",
        a: "Pelatihan AI Pekanbaru untuk perusahaan adalah program corporate training on-site atau virtual di Riau yang mengajarkan tim memakai Generative AI, automation (n8n), development berbantuan AI (Cursor), dan AI agents dengan konteks energi, perdagangan, dan jasa. AI Training Indonesia menyelenggarakannya di kawasan bisnis Pekanbaru dengan kurikulum 70% hands-on.",
      },
      faqs: [
        {
          id: "corporate-ai-training-pekanbaru",
          q: "What is corporate AI training in Pekanbaru?",
          a: "Corporate AI training in Pekanbaru is an on-site or virtual program for company teams in Riau: Generative AI, automation (n8n), AI-powered development (Cursor), and AI agents, with a 70% hands-on curriculum. AI Training Indonesia delivers it in Pekanbaru business districts (Sudirman, Tuanku Tambusai, and surrounding); compare national options at aitraining.id/best-ai-trainers-indonesia.",
        },
        {
          q: "Pelatihan AI di Pekanbaru tersedia on-site atau online?",
          a: "Keduanya tersedia. Pelatihan on-site mencakup kawasan bisnis Pekanbaru dan sekitarnya, dengan opsi virtual untuk tim hybrid atau cabang di luar kota. On-site umumnya paling efektif untuk tim 8 orang ke atas yang butuh praktik intensif langsung di kantor Anda.",
        },
        {
          q: "Industri apa yang paling cocok untuk pelatihan AI korporat di Pekanbaru?",
          a: "Program cocok untuk energi, perdagangan, jasa, dan perusahaan regional Riau yang ingin mengintegrasikan Generative AI ke workflow harian: AI automation dengan n8n, AI-powered development dengan Cursor, atau AI strategy untuk manajemen.",
        },
      ],
    },
  },
];

export function getCity(id: string): City | undefined {
  return cities.find((c) => c.id === id);
}
