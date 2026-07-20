import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Brand | AI Training Indonesia",
  description:
    "Logo, mark, warna, dan aturan pakai brand AI Training Indonesia. Unduh lockup dan icon untuk web, slide, dan materi cetak.",
  alternates: {
    canonical: "https://aitraining.id/brand",
  },
  openGraph: {
    url: "https://aitraining.id/brand",
    title: "Brand | AI Training Indonesia",
    description:
      "Logo, mark, warna, dan aturan pakai brand AI Training Indonesia.",
  },
};

const CRIMSON = "#B3282D";

const lockups = [
  {
    label: "Lockup · dark",
    note: "Nav, header hitam, slide gelap",
    src: "/assets/brand/logo-ondark.png",
    bg: "bg-black",
    border: "border-white/15",
    w: 1539,
    h: 267,
  },
  {
    label: "Lockup · light",
    note: "Print putih, deck terang, dokumen",
    src: "/assets/brand/logo.png",
    bg: "bg-[#f7f7f4]",
    border: "border-black/10",
    w: 1539,
    h: 267,
  },
] as const;

const marks = [
  {
    label: "AI mark · dark",
    src: "/assets/brand/mark-ai-ondark.png",
    bg: "bg-black",
    border: "border-white/15",
    w: 341,
    h: 238,
  },
  {
    label: "AI mark · light",
    src: "/assets/brand/mark-ai.png",
    bg: "bg-[#f7f7f4]",
    border: "border-black/10",
    w: 341,
    h: 238,
  },
  {
    label: "Icon · dark",
    src: "/assets/brand/icon-ondark.png",
    bg: "bg-black",
    border: "border-white/15",
    w: 512,
    h: 512,
  },
  {
    label: "Icon · light",
    src: "/assets/brand/icon.png",
    bg: "bg-[#f7f7f4]",
    border: "border-black/10",
    w: 512,
    h: 512,
  },
] as const;

const downloads = [
  {
    name: "logo-ondark.png",
    href: "/assets/brand/logo-ondark.png",
    use: "Lockup untuk permukaan gelap",
  },
  {
    name: "logo.png",
    href: "/assets/brand/logo.png",
    use: "Lockup untuk permukaan terang",
  },
  {
    name: "mark-ai-ondark.png",
    href: "/assets/brand/mark-ai-ondark.png",
    use: "Mark AI kecil (tinggi < 28 px)",
  },
  {
    name: "mark-ai.png",
    href: "/assets/brand/mark-ai.png",
    use: "Mark AI di permukaan terang",
  },
  {
    name: "icon-ondark.png",
    href: "/assets/brand/icon-ondark.png",
    use: "Icon kotak 512 px, dark",
  },
  {
    name: "icon.png",
    href: "/assets/brand/icon.png",
    use: "Icon kotak 512 px, light",
  },
  {
    name: "icon-red-1024.png",
    href: "/assets/brand/icon-red-1024.png",
    use: "Icon kotak 1024 px (master)",
  },
] as const;

const palette = [
  {
    name: "Crimson",
    hex: CRIMSON,
    role: "Aksen A/I, rule, mark I",
    text: "text-white",
  },
  {
    name: "Black",
    hex: "#000000",
    role: "Surface default situs",
    text: "text-white",
  },
  {
    name: "Charcoal",
    hex: "#111111",
    role: "Lockup light (stem utama)",
    text: "text-white",
  },
  {
    name: "White",
    hex: "#FFFFFF",
    role: "Lockup dark / teks",
    text: "text-black",
  },
  {
    name: "Medium grey",
    hex: "#555555",
    role: "Stem sekunder lockup light",
    text: "text-white",
  },
] as const;

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main>
        <section className="relative pt-32 pb-20 px-6 sm:px-8">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-white/70 text-sm mb-4 tracking-wide">
              [ Brand ]
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight mb-8">
              <span className="text-white">AI Training</span>
              <br />
              <span className="text-white/60">Indonesia</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed mb-14">
              Sistem logo aktif sejak Juli 2026: caret geometris{" "}
              <span className="text-white">A</span> + batang crimson{" "}
              <span style={{ color: CRIMSON }}>I</span>, diulang di dalam
              TRAINING, dengan rule crimson di bawah INDONESIA.
            </p>
            <div className="rounded-2xl border border-white/15 bg-black px-8 py-12 sm:px-14 sm:py-16">
              <Image
                src="/assets/brand/logo-ondark.png"
                alt="AI Training Indonesia lockup on dark"
                width={1539}
                height={267}
                priority
                className="w-full max-w-3xl h-auto mx-auto"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16 px-6 sm:px-8">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Lockup</h2>
            <p className="text-white/60 mb-10 max-w-2xl">
              Minimum tinggi lockup ~28 px. Di bawah itu, ganti ke mark AI
              kotak.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {lockups.map((item) => (
                <figure
                  key={item.src}
                  className={`rounded-2xl border ${item.border} overflow-hidden`}
                >
                  <div
                    className={`${item.bg} px-8 py-14 sm:px-12 flex items-center justify-center min-h-[200px]`}
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={item.w}
                      height={item.h}
                      className="w-full max-w-md h-auto"
                      sizes="(max-width: 768px) 100vw, 448px"
                    />
                  </div>
                  <figcaption className="border-t border-white/10 px-6 py-4 bg-black">
                    <p className="font-medium text-white">{item.label}</p>
                    <p className="text-sm text-white/50 mt-1">{item.note}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16 px-6 sm:px-8">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Mark & icon</h2>
            <p className="text-white/60 mb-10 max-w-2xl">
              Mark untuk favicon, avatar, dan space sempit. Icon kotak untuk
              app tile dan materi yang butuh rasio 1:1.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {marks.map((item) => (
                <figure
                  key={item.src}
                  className={`rounded-2xl border ${item.border} overflow-hidden`}
                >
                  <div
                    className={`${item.bg} aspect-square flex items-center justify-center p-8`}
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={item.w}
                      height={item.h}
                      className="w-full max-w-[160px] h-auto"
                      sizes="160px"
                    />
                  </div>
                  <figcaption className="border-t border-white/10 px-4 py-3 bg-black text-sm text-white/70">
                    {item.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16 px-6 sm:px-8">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Palette</h2>
            <p className="text-white/60 mb-10 max-w-2xl">
              Crimson aksen jangan di-recolor. Red A/I di TRAINING dan batang I
              di mark adalah bagian kritis identitas.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {palette.map((swatch) => (
                <div
                  key={swatch.hex}
                  className="rounded-2xl border border-white/10 overflow-hidden"
                >
                  <div
                    className={`h-28 ${swatch.text} flex items-end p-4`}
                    style={{ backgroundColor: swatch.hex }}
                  >
                    <span className="font-mono text-sm opacity-90">
                      {swatch.hex}
                    </span>
                  </div>
                  <div className="px-4 py-3 bg-black">
                    <p className="font-medium text-white">{swatch.name}</p>
                    <p className="text-sm text-white/50 mt-1">{swatch.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16 px-6 sm:px-8">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">
              Aturan pakai
            </h2>
            <ol className="space-y-6 max-w-3xl text-white/75 text-lg leading-relaxed list-decimal list-inside">
              <li>
                Surface gelap (default situs): pakai{" "}
                <code className="text-white/90 text-base">logo-ondark</code> /{" "}
                <code className="text-white/90 text-base">icon-ondark</code>.
              </li>
              <li>
                Surface terang / print putih: pakai{" "}
                <code className="text-white/90 text-base">logo</code> /{" "}
                <code className="text-white/90 text-base">icon</code> (charcoal +
                crimson).
              </li>
              <li>
                Nama brand resmi:{" "}
                <span className="text-white">AI Training Indonesia</span>. Domain{" "}
                <span className="text-white">aitraining.id</span> untuk URL dan
                canonical saja.
              </li>
              <li>
                Lockup SVG amber lama di folder{" "}
                <code className="text-white/90 text-base">branding/</code> sudah
                diganti sistem crimson ini. Jangan dipakai untuk materi baru.
              </li>
            </ol>
          </div>
        </section>

        <section className="border-t border-white/10 py-16 px-6 sm:px-8 pb-24">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Download</h2>
            <p className="text-white/60 mb-10 max-w-2xl">
              PNG transparan. Klik untuk unduh file dari situs ini.
            </p>
            <ul className="divide-y divide-white/10 border border-white/10 rounded-2xl overflow-hidden">
              {downloads.map((file) => (
                <li
                  key={file.href}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-6 py-4 hover:bg-white/[0.03] transition-colors"
                >
                  <div>
                    <p className="font-medium text-white">{file.name}</p>
                    <p className="text-sm text-white/50">{file.use}</p>
                  </div>
                  <a
                    href={file.href}
                    download
                    className="shrink-0 inline-flex items-center gap-2 text-sm border border-white/20 rounded-full px-4 py-2 hover:bg-white/5 transition-colors"
                  >
                    Unduh
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
