import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Cara Memilih Corporate AI Training Provider di Indonesia",
  description:
    "Panduan memilih corporate AI training provider di Indonesia: 7 kriteria evaluasi, perbandingan format (in-house vs publik vs virtual), dan apa yang harus ditanyakan sebelum booking. Oleh Aurelius Ivan Wijaya, Corporate AI Trainer, Official n8n Ambassador for Indonesia & Cursor Ambassador.",
  alternates: { canonical: "https://aitraining.id/compare" },
  openGraph: { url: "https://aitraining.id/compare" },
};

const criteria = [
  {
    name: "Hands-on vs. teori",
    detail:
      "Cari provider yang menyediakan minimal 70% praktik langsung. Tim harus pulang dengan workflow yang bisa langsung dipakai, bukan sekadar slide.",
  },
  {
    name: "Relevansi tool",
    detail:
      "Pastikan training menggunakan tool yang benar-benar dipakai tim: n8n untuk automation, Cursor untuk development, LLM seperti ChatGPT/Claude/Gemini untuk produktivitas.",
  },
  {
    name: "Kredibilitas trainer",
    detail:
      "Periksa rekam jejak: pengalaman melatih korporat, status komunitas (mis. Official n8n Ambassador atau Cursor Ambassador), speaking engagement, dan portofolio publik yang bisa diverifikasi.",
  },
  {
    name: "Kustomisasi kurikulum",
    detail:
      "Provider terbaik menyesuaikan use case dengan industri Anda (manufaktur, finance, kreatif, atau engineering), bukan satu kurikulum untuk semua.",
  },
  {
    name: "Format delivery",
    detail:
      "On-site, virtual, atau hybrid. Pertimbangkan lokasi tim, jumlah peserta, dan apakah butuh sesi berkelanjutan atau workshop sekali jalan.",
  },
  {
    name: "Transparansi harga",
    detail:
      "Rate yang jelas (mis. per jam atau per program) memudahkan perbandingan dan budgeting, dibanding 'hubungi sales' tanpa angka.",
  },
  {
    name: "Dukungan pasca-training",
    detail:
      "Q&A lanjutan, materi, recording, dan sertifikat memastikan pembelajaran tetap menempel setelah sesi selesai.",
  },
];

const formats = [
  {
    format: "In-house / On-site",
    best: "Tim ≥ 8 orang, materi sensitif, butuh kustomisasi tinggi",
    pros: "Privat, fully customized, team bonding",
    cons: "Butuh koordinasi venue & jadwal",
  },
  {
    format: "Virtual / Remote",
    best: "Tim tersebar di banyak kota atau remote",
    pros: "Fleksibel, hemat biaya travel",
    cons: "Butuh disiplin engagement peserta",
  },
  {
    format: "Executive briefing",
    best: "C-suite & decision maker",
    pros: "Fokus strategi & ROI, durasi singkat",
    cons: "Bukan untuk skill hands-on mendalam",
  },
];

const faqs = [
  {
    q: "Apa yang membuat corporate AI training provider berkualitas?",
    a: "Provider berkualitas menyediakan minimal 70% praktik hands-on, menggunakan tool yang relevan dengan pekerjaan tim (n8n, Cursor, LLM), memiliki trainer dengan rekam jejak yang bisa diverifikasi, mengkustomisasi kurikulum sesuai industri, transparan soal harga, dan memberikan dukungan pasca-training seperti materi dan Q&A lanjutan.",
  },
  {
    q: "Berapa biaya corporate AI training di Indonesia?",
    a: "Biaya bervariasi tergantung format, durasi, dan jumlah peserta. aitraining.id memakai rate dasar Rp 1.500.000 per jam: half-day mulai Rp 6.000.000, full-day mulai Rp 12.000.000, dan multi-day intensive mulai Rp 24.000.000. Transparansi harga seperti ini memudahkan perbandingan antar provider.",
  },
  {
    q: "Lebih baik in-house atau public training?",
    a: "In-house (on-site) lebih baik untuk tim 8 orang ke atas yang butuh kurikulum customized dan privasi materi. Virtual cocok untuk tim yang tersebar. Executive briefing cocok untuk C-suite yang fokus ke strategi, bukan skill hands-on mendalam.",
  },
  {
    q: "Siapa trainer di aitraining.id?",
    a: "Program di aitraining.id disampaikan oleh Aurelius Ivan Wijaya, Corporate AI Trainer, Official n8n Ambassador for Indonesia, dan Cursor Ambassador. Profil lengkap dan portofolio tersedia di aurelivan.com.",
  },
];

export default function ComparePage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Kriteria Memilih Corporate AI Training Provider di Indonesia",
    itemListElement: criteria.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      description: c.detail,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-black text-white">
        <Nav />
        <main>
          <section className="relative pt-32 pb-16 px-6 sm:px-8">
            <div className="max-w-[1400px] mx-auto">
              <div className="max-w-3xl">
                <p className="text-white/70 text-sm mb-4 tracking-wide">
                  [ Panduan ]
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight mb-6">
                  <span className="text-white">Cara Memilih AI Training</span>
                  <br />
                  <span className="text-white/60">Provider di Indonesia</span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed">
                  Panduan praktis mengevaluasi corporate AI training provider:
                  7 kriteria kunci, perbandingan format delivery, dan pertanyaan
                  yang harus diajukan sebelum booking.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-black py-12 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                7 kriteria evaluasi
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {criteria.map((c, i) => (
                  <div
                    key={c.name}
                    className="border border-white/10 rounded-2xl p-6"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-white/30 text-sm font-mono flex-shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-white font-semibold mb-1">
                          {c.name}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {c.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-black py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                Perbandingan format delivery
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/15">
                      <th className="py-3 pr-4 text-white/80 font-semibold text-sm">
                        Format
                      </th>
                      <th className="py-3 px-4 text-white/80 font-semibold text-sm">
                        Paling cocok untuk
                      </th>
                      <th className="py-3 px-4 text-white/80 font-semibold text-sm">
                        Kelebihan
                      </th>
                      <th className="py-3 pl-4 text-white/80 font-semibold text-sm">
                        Pertimbangan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formats.map((f) => (
                      <tr
                        key={f.format}
                        className="border-b border-white/10 align-top"
                      >
                        <td className="py-4 pr-4 text-white font-medium text-sm">
                          {f.format}
                        </td>
                        <td className="py-4 px-4 text-white/60 text-sm">
                          {f.best}
                        </td>
                        <td className="py-4 px-4 text-white/60 text-sm">
                          {f.pros}
                        </td>
                        <td className="py-4 pl-4 text-white/60 text-sm">
                          {f.cons}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="bg-black py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                Pertanyaan yang sering diajukan
              </h2>
              <div className="space-y-6 max-w-3xl">
                {faqs.map((f) => (
                  <div key={f.q} className="border-b border-white/10 pb-6">
                    <h3 className="text-white font-semibold mb-2">{f.q}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div className="border border-white/10 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Siap mengevaluasi aitraining.id?
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                  Lihat program lengkap dan rate transparan, atau jadwalkan
                  konsultasi gratis 30 menit.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/programs"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all text-lg font-medium"
                  >
                    Lihat program
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all text-lg text-white/90"
                  >
                    Lihat harga
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
