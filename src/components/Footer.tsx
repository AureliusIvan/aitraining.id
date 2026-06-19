import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Siap melatih tim Anda?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Konsultasikan kebutuhan pelatihan AI perusahaan Anda bersama{" "}
                <a
                  href="https://aurelivan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white/90 hover:text-white transition-colors"
                >
                  Aurelius Ivan Wijaya
                </a>{" "}
                , corporate AI trainer berpengalaman di Indonesia.
              </p>
              <a
                href="https://calendly.com/aureliusivanwijaya/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all group text-lg font-medium"
              >
                <span>Jadwalkan konsultasi</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
            <div className="flex items-end">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Lihat profil lengkap trainer
                </h3>
                <p className="text-white/70 mb-6">
                  Kunjungi{" "}
                  <a
                    href="https://aurelivan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-white/90 hover:text-white transition-colors"
                  >
                    aurelivan.com
                  </a>{" "}
                  untuk portofolio lengkap, artikel, dan testimoni dari klien
                  korporat di Indonesia.
                </p>
                <a
                  href="https://aurelivan.com/corporate-training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
                >
                  <span>Lihat corporate training portfolio</span>
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
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-3">
            <Link
              href="/programs"
              className="block text-white/70 hover:text-white transition-colors"
            >
              Programs
            </Link>
            <Link
              href="/geo-training"
              className="block text-white/70 hover:text-white transition-colors"
            >
              GEO Training
            </Link>
            <Link
              href="/about"
              className="block text-white/70 hover:text-white transition-colors"
            >
              About Trainer
            </Link>
            <Link
              href="/cities"
              className="block text-white/70 hover:text-white transition-colors"
            >
              Cities
            </Link>
            <Link
              href="/best-ai-trainers-indonesia"
              className="block text-white/70 hover:text-white transition-colors"
            >
              Top 10 AI Trainers
            </Link>
            <Link
              href="/best-geo-trainers-indonesia"
              className="block text-white/70 hover:text-white transition-colors"
            >
              Best GEO Trainers
            </Link>
            <Link
              href="/contact"
              className="block text-white/70 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="space-y-3">
            <a
              href="https://aurelivan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/70 hover:text-white transition-colors"
            >
              Trainer Profile ↗
            </a>
            <a
              href="https://aurelivan.com/corporate-training"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/70 hover:text-white transition-colors"
            >
              Corporate Training ↗
            </a>
            <a
              href="https://aurelivan.com/speaking"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/70 hover:text-white transition-colors"
            >
              Speaking Portfolio ↗
            </a>
            <a
              href="https://aurelivan.com/articles"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/70 hover:text-white transition-colors"
            >
              Articles ↗
            </a>
            <a
              href="https://aiforkarir.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/70 hover:text-white transition-colors"
            >
              Belajar AI untuk Karir ↗
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
            <span>Powered by</span>
            <a
              href="https://aurelivan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/90 transition-colors underline"
            >
              aurelivan.com
            </a>
            <span>/</span>
            <Link
              href="/contact"
              className="hover:text-white/70 transition-colors"
            >
              Book a session
            </Link>
          </div>
          <div className="text-sm text-white/60">
            <p>
              corporate <strong className="text-white/60">AI training</strong>
            </p>
            <p>Indonesia · since 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
