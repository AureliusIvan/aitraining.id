import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Hubungi Kami — Book Corporate AI Training",
  description:
    "Book corporate AI training untuk perusahaan Anda di Indonesia. Jadwalkan konsultasi gratis dengan Aurelius Ivan Wijaya — corporate AI trainer Indonesia.",
  alternates: {
    canonical: "https://aitraining.id/contact",
  },
  openGraph: {
    url: "https://aitraining.id/contact",
  },
};

export default function ContactPage() {
  const channels = [
    {
      label: "Calendly",
      title: "Jadwalkan konsultasi gratis",
      description:
        "Pilih waktu yang nyaman untuk 30-menit discovery call membahas kebutuhan AI training perusahaan Anda.",
      cta: "Book via Calendly",
      href: "https://calendly.com/aureliusivanwijaya/30min",
      primary: true,
    },
    {
      label: "Email",
      title: "Email langsung",
      description:
        "Kirim brief tentang tim Anda, jumlah peserta, dan program yang Anda minati. Kami respond dalam 1 hari kerja.",
      cta: "ivan@aurelivan.com",
      href: "mailto:ivan@aurelivan.com",
      primary: false,
    },
    {
      label: "LinkedIn",
      title: "Connect di LinkedIn",
      description:
        "Hubungi langsung via LinkedIn untuk diskusi tentang corporate AI training atau speaking engagement.",
      cta: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/aurelius-ivan-wijaya",
      primary: false,
    },
    {
      label: "Website",
      title: "Profil lengkap trainer",
      description:
        "Kunjungi aurelivan.com untuk portofolio lengkap, artikel AI, dan detail semua program training.",
      cta: "aurelivan.com",
      href: "https://aurelivan.com",
      primary: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main>
        <section className="relative pt-32 pb-16 px-6 sm:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-3xl">
              <p className="text-white/70 text-sm mb-4 tracking-wide">
                [ Hubungi Kami ]
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight mb-6">
                <span className="text-white">Book</span>
                <br />
                <span className="text-white/60">AI Training</span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed">
                Hubungi{" "}
                <a
                  href="https://aurelivan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white/90 hover:text-white transition-colors"
                >
                  Aurelius Ivan Wijaya
                </a>{" "}
                untuk mendiskusikan kebutuhan corporate AI training perusahaan
                Anda. Konsultasi pertama gratis.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-black py-12 px-6 sm:px-8 border-t border-white/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {channels.map((channel, i) => (
                <div
                  key={i}
                  className={`border rounded-2xl p-8 ${
                    channel.primary
                      ? "border-white/30 bg-white/[0.03]"
                      : "border-white/10"
                  }`}
                >
                  <p className="text-white/50 text-xs tracking-widest uppercase mb-3">
                    {channel.label}
                  </p>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {channel.title}
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-6">
                    {channel.description}
                  </p>
                  <a
                    href={channel.href}
                    target={
                      channel.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      channel.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all group font-medium ${
                      channel.primary
                        ? "bg-white text-black hover:bg-white/90"
                        : "border border-white/20 text-white/90 hover:bg-white/5"
                    }`}
                  >
                    <span>{channel.cta}</span>
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
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black py-24 px-6 sm:px-8 border-t border-white/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Informasi yang membantu kami mempersiapkan proposal
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  "Industri dan ukuran perusahaan Anda",
                  "Jumlah peserta yang akan dilatih",
                  "Program training yang diminati (Automation, Development, Strategy, OpenClaw)",
                  "Durasi yang diinginkan (half-day, full-day, multi-day)",
                  "Lokasi (Jakarta, Surabaya, Bandung, kota lain, atau virtual)",
                  "Target timeline untuk pelaksanaan training",
                  "Tujuan utama: apa yang ingin dicapai tim setelah training?",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-white/30 text-sm font-mono flex-shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-white/70 text-sm">{item}</p>
                  </div>
                ))}
                <p className="text-white/50 text-sm pt-4">
                  Tidak perlu menjawab semuanya sekarang — kami bisa diskusikan
                  di konsultasi call.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-16 px-6 sm:px-8 border-t border-white/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-white/50 text-sm mb-2">Response time</p>
                  <p className="text-2xl font-bold text-white">{"< 1 hari"}</p>
                  <p className="text-white/40 text-xs mt-1">hari kerja</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-2">Konsultasi awal</p>
                  <p className="text-2xl font-bold text-white">Gratis</p>
                  <p className="text-white/40 text-xs mt-1">
                    30 menit discovery call
                  </p>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-2">Cakupan</p>
                  <p className="text-2xl font-bold text-white">
                    Seluruh Indonesia
                  </p>
                  <p className="text-white/40 text-xs mt-1">
                    On-site & virtual
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
