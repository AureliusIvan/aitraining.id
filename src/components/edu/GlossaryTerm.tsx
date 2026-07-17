"use client";

import { useEffect, useRef, useState } from "react";

// A hard-to-translate technical term: rendered inline with a blue wavy underline
// (the "spidol"/marker look) and, on click, a short definition popover. Works in
// both the web page (server-rendered island) and the presentation overlay. The
// popover closes on outside-click or Escape. In present mode the drawing canvas
// is disabled by default, so these clicks reach the term; with the pen toggled
// on, the canvas is on top and captures drags instead.

export function GlossaryTerm({
  term,
  def,
  mode = "web",
}: {
  term: string;
  def: string;
  mode?: "web" | "slide";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
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

  return (
    <span ref={ref} className="relative inline-block align-baseline">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        aria-expanded={open}
        className="cursor-help font-medium text-blue-700 underline decoration-blue-500 decoration-wavy decoration-2 underline-offset-[3px] transition-colors hover:text-blue-900"
      >
        {term}
      </button>
      {open ? (
        <span
          role="tooltip"
          className={`absolute left-0 top-full z-[60] mt-2 block rounded-xl border border-stone-200 bg-white p-4 text-left font-normal leading-relaxed text-stone-600 shadow-2xl ${
            mode === "slide"
              ? "w-80 max-w-[70vw] text-base"
              : "w-72 max-w-[85vw] text-sm"
          }`}
        >
          <span className="mb-1 block font-semibold text-stone-900">{term}</span>
          {def}
        </span>
      ) : null}
    </span>
  );
}
