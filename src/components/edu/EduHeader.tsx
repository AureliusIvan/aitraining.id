import Image from "next/image";
import Link from "next/link";

// Light-themed header for the /edu surface. The rest of the site is dark; the
// edu pages are deliberately bright (they double as projected slides in lit
// rooms), so they carry their own light chrome with the light-background logo.

export function EduHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-[#f7f7f4]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-8">
        <Link
          href="/"
          className="shrink-0 opacity-95 transition-opacity hover:opacity-100"
          aria-label="AI Training Indonesia"
        >
          <Image
            src="/assets/brand/logo.png"
            alt="AI Training Indonesia"
            width={200}
            height={35}
            priority
            className="h-8 w-auto sm:h-9"
            sizes="200px"
          />
        </Link>
        <nav className="flex items-center gap-6 text-sm text-stone-600">
          <Link href="/edu" className="hidden transition-colors hover:text-stone-900 sm:inline">
            edu
          </Link>
          <Link href="/programs" className="hidden transition-colors hover:text-stone-900 sm:inline">
            program
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 transition-colors hover:bg-white"
          >
            konsultasi
          </Link>
        </nav>
      </div>
    </header>
  );
}
