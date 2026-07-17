"use client";

import { useEffect, useRef, useState } from "react";

// The presenter byline. Renders the name as a subtly-underlined button that, on
// click, pops a small card with a photo, a one-line bio, and a link to the full
// profile. Placement flips to stay on-screen (the byline sits low on the title
// slide, so it opens upward by default).

export function AuthorPopover({
  name,
  bio,
  photo,
  profileHref = "/about",
}: {
  name: string;
  bio: string;
  photo: string;
  profileHref?: string;
}) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ v: "top" | "bottom"; h: "left" | "right" }>({
    v: "top",
    h: "left",
  });
  const ref = useRef<HTMLSpanElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen((wasOpen) => {
      if (!wasOpen && btnRef.current) {
        const r = btnRef.current.getBoundingClientRect();
        setPos({
          v: r.top > window.innerHeight * 0.5 ? "top" : "bottom",
          h: r.left > window.innerWidth * 0.6 ? "right" : "left",
        });
      }
      return !wasOpen;
    });
  };

  const placement = [
    pos.v === "top" ? "bottom-full mb-3" : "top-full mt-3",
    pos.h === "right" ? "right-0" : "left-0",
  ].join(" ");

  return (
    <span ref={ref} className="relative inline-block align-baseline">
      by{" "}
      <button
        ref={btnRef}
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="cursor-pointer font-medium text-stone-700 underline decoration-stone-400 decoration-dotted underline-offset-4 transition-colors hover:text-stone-900"
      >
        {name}
      </button>
      {open ? (
        <span
          role="dialog"
          className={`absolute z-[60] block w-72 max-w-[80vw] overflow-hidden rounded-2xl border border-stone-200 bg-white text-left shadow-2xl ${placement}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo}
            alt={name}
            className="h-28 w-full object-cover object-[46%_26%]"
          />
          <span className="block p-4">
            <span className="block font-semibold text-stone-900">{name}</span>
            <span className="mt-1 block text-sm font-normal leading-relaxed text-stone-600">
              {bio}
            </span>
            <a
              href={profileHref}
              className="mt-3 inline-block text-sm font-medium text-[#B3282D] hover:underline"
            >
              Profil lengkap
            </a>
          </span>
        </span>
      ) : null}
    </span>
  );
}
