import Link from "next/link";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-medium text-white/90 hover:text-white transition-colors"
        >
          aitraining.id
        </Link>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8 text-sm text-white/70">
            {[
              { name: "programs", href: "/programs" },
              { name: "about trainer", href: "/about" },
              { name: "cities", href: "/cities" },
              { name: "panduan", href: "/compare" },
              { name: "FAQ", href: "/#faq" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  className="hover:text-white transition-colors"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            title="Book a consultation"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-white/20 rounded-full hover:bg-white/5 transition-colors"
          >
            <span>book now</span>
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
