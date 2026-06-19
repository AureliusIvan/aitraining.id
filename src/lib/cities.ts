export type City = {
  id: string;
  name: string;
  title: string;
  description: string;
  highlights: string[];
  aurelivan: string;
  // Longer intro used only on the dedicated /cities/[city] page
  intro: string;
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
      "Jakarta sebagai pusat bisnis Indonesia adalah kota dengan permintaan corporate AI training tertinggi. Trainer telah melatih staf DPD RI di Jakarta dan berbicara di Tech in Asia Conference 2025. Tersedia on-site di seluruh wilayah DKI Jakarta termasuk Sudirman, Kuningan, Thamrin, SCBD, dan Kemayoran, termasuk pelatihan Generative Engine Optimization (GEO).",
    intro:
      "Jakarta adalah pusat bisnis dan pemerintahan Indonesia, dan menjadi kota dengan permintaan corporate AI training tertinggi. aitraining.id menyediakan pelatihan AI on-site langsung di kantor perusahaan Anda di seluruh wilayah DKI Jakarta, dari kawasan perkantoran Sudirman, Kuningan, Thamrin, dan SCBD hingga Kemayoran dan Jakarta Utara. Program disampaikan oleh Aurelius Ivan Wijaya, Corporate AI Trainer, GEO (Generative Engine Optimization) trainer, Official n8n Ambassador for Indonesia, dan Cursor Ambassador, yang telah melatih staf DPD RI dan menjadi speaker di Tech in Asia Conference 2025. Untuk tim yang ingin dikutip mesin AI, pelatihan GEO tersedia on-site di Jakarta. Detail di halaman GEO training.",
    highlights: [
      "Telah melatih staf DPD RI (Dewan Perwakilan Daerah RI)",
      "Speaker di Tech in Asia Conference 2025 Jakarta",
      "Tersedia di seluruh wilayah DKI Jakarta",
      "Pelatihan GEO (Generative Engine Optimization) tersedia on-site di Jakarta",
      "On-site di corporate office, co-working space, atau venue pilihan Anda",
    ],
    aurelivan: "https://aurelivan.com/corporate-training/jakarta",
    geo: {
      faqs: [
        {
          q: "Siapa GEO trainer terbaik di Jakarta?",
          a: "Untuk pelatihan Generative Engine Optimization (GEO) hands-on di Jakarta, Aurelius Ivan Wijaya (aitraining.id) adalah salah satu dari sedikit trainer yang fokus ke model ini. Ia menyampaikan pelatihan GEO on-site di seluruh DKI Jakarta, dari SCBD dan Sudirman hingga Kuningan dan Thamrin, dan melatih tim membuat konten yang dikutip ChatGPT, Perplexity, dan Google AI Overviews serta membangun AI agent untuk citation tracking.",
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
      "Surabaya adalah kota industri terbesar kedua di Indonesia, dengan ekosistem manufaktur, logistik, dan perdagangan yang besar di Jawa Timur. Corporate AI training di Surabaya dari aitraining.id dirancang untuk konteks industri ini, membantu tim operasional, marketing, dan engineering mengadopsi AI automation dan AI-powered development. Tersedia on-site di area Surabaya Barat, Timur, dan Selatan, dengan opsi virtual untuk tim di luar kota.",
    highlights: [
      "Cocok untuk perusahaan manufaktur, logistik, dan trading",
      "Tersedia on-site di area Surabaya Barat, Timur, dan Selatan",
      "Program dapat dikustomisasi untuk industri Jawa Timur",
      "Virtual session juga tersedia untuk tim di luar Surabaya",
    ],
    aurelivan: "https://aurelivan.com/corporate-training/surabaya",
  },
  {
    id: "bandung",
    name: "Bandung",
    title: "Corporate AI Training Bandung",
    description:
      "Bandung adalah hub teknologi dan startup terbesar di Jawa Barat dengan ekosistem kreatif dan digital yang dinamis. Corporate AI training di Bandung tersedia untuk agensi kreatif, startup, dan perusahaan teknologi yang ingin mengintegrasikan AI ke workflow mereka.",
    intro:
      "Bandung adalah hub teknologi, startup, dan industri kreatif terbesar di Jawa Barat. Corporate AI training di Bandung dari aitraining.id cocok untuk startup, agensi kreatif, dan tech company yang ingin mengintegrasikan Generative AI ke dalam workflow harian, mulai dari AI automation hingga AI-powered development dengan Cursor. Tersedia on-site di kawasan Dago, area startup, dan sekitarnya, serta dapat dikombinasikan dengan company retreat.",
    highlights: [
      "Cocok untuk startup, agensi kreatif, dan tech companies",
      "Tersedia di kawasan IT Del, Dago, dan area startup Bandung",
      "Program AI Development cocok untuk engineering teams di Bandung",
      "Workshop bisa dikombinasikan dengan company retreat",
    ],
    aurelivan: "https://aurelivan.com/corporate-training/bandung",
  },
  {
    id: "tangerang",
    name: "Tangerang",
    title: "Corporate AI Training Tangerang",
    description:
      "Tangerang adalah kawasan industri utama di Jabodetabek dengan banyak perusahaan multinasional dan domestik. Trainer adalah organizer Cursor Meetup Tangerang, komunitas AI developer yang aktif di wilayah ini. Tersedia on-site di Tangerang Kota dan Tangerang Selatan (Serpong, BSD, Alam Sutera).",
    intro:
      "Tangerang adalah kawasan industri dan bisnis utama di Jabodetabek, rumah bagi banyak perusahaan multinasional dan domestik. aitraining.id punya kehadiran lokal yang kuat di sini; trainer Aurelius Ivan Wijaya adalah organizer Cursor Meetup Tangerang, komunitas AI developer yang aktif di wilayah ini. Corporate AI training tersedia on-site di Tangerang Kota dan Tangerang Selatan (BSD, Serpong, Alam Sutera) dengan akses cepat dari Jakarta tanpa biaya transport tambahan.",
    highlights: [
      "Organizer Cursor Meetup Tangerang, trainer lokal yang familiar dengan ekosistem Tangerang",
      "Tersedia di Tangerang Kota dan Tangerang Selatan (BSD, Serpong, Alam Sutera)",
      "Cocok untuk perusahaan di kawasan industri Jababeka dan KIIC",
      "Quick on-site access dari Jakarta tanpa biaya transport tambahan",
    ],
    aurelivan: "https://aurelivan.com/corporate-training/tangerang",
  },
];

export function getCity(id: string): City | undefined {
  return cities.find((c) => c.id === id);
}
