import Link from "next/link";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_HREF } from "@/lib/contact";

// Light footer for the /edu surface. Keeps the bright aesthetic and carries the
// cross-links + contact that the rest of the site expects for SEO and booking.

export function EduFooter() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold text-stone-900">
              AI Training Indonesia
            </p>
            <p className="mt-2 text-sm leading-relaxed text-stone-500">
              Materi belajar AI gratis dan pelatihan AI untuk tim perusahaan,
              oleh Aurelius Ivan Wijaya.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="mb-3 font-medium text-stone-900">Jelajah</p>
              <ul className="space-y-2 text-stone-500">
                <li>
                  <Link href="/edu" className="transition-colors hover:text-stone-900">
                    Semua materi edu
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="transition-colors hover:text-stone-900">
                    Program pelatihan
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="transition-colors hover:text-stone-900">
                    Artikel
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-medium text-stone-900">Kontak</p>
              <ul className="space-y-2 text-stone-500">
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="transition-colors hover:text-stone-900"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-stone-900"
                  >
                    WhatsApp {WHATSAPP_DISPLAY}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-10 text-xs text-stone-400">
          © {new Date().getFullYear()} AI Training Indonesia. Materi di halaman
          ini boleh dipakai untuk belajar dengan tetap mencantumkan sumber.
        </p>
      </div>
    </footer>
  );
}
