"use client";

import { useState } from "react";

// Code panel with a subtle line-number gutter (so you can say "line 1, line 2")
// and a copy button in the top-right corner. Line numbers are select-none and
// the copy uses the raw lines, so copied text never includes the numbers.

export function CodeBlock({
  caption,
  lines,
  mode,
}: {
  caption?: string;
  lines: string[];
  mode: "web" | "slide";
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard blocked (insecure context); ignore silently
    }
  };

  const isSlide = mode === "slide";

  return (
    <figure className="not-prose">
      {caption ? (
        <figcaption className="mb-2 text-xs font-medium uppercase tracking-wide text-stone-400">
          {caption}
        </figcaption>
      ) : null}
      <div className="relative overflow-hidden rounded-2xl bg-[#0f0f10] ring-1 ring-black/10">
        <button
          type="button"
          onClick={copy}
          className="absolute right-2.5 top-2.5 z-10 inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2 py-1 text-xs font-medium text-stone-300 transition-colors hover:bg-white/20 hover:text-white"
          title="Salin kode"
          aria-label="Salin kode"
        >
          {copied ? (
            <>
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Tersalin
            </>
          ) : (
            <>
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <rect x="9" y="9" width="11" height="11" rx="2" />
                <path d="M5 15V5a2 2 0 012-2h10" />
              </svg>
              Salin
            </>
          )}
        </button>
        <pre
          className={`overflow-x-auto ${isSlide ? "p-6 text-base sm:text-lg" : "p-5 text-sm"}`}
        >
          <code className="block font-mono leading-relaxed">
            {lines.map((line, i) => (
              <span
                // biome-ignore lint/suspicious/noArrayIndexKey: fixed code lines
                key={i}
                className="flex"
              >
                <span
                  className={`shrink-0 select-none text-right text-stone-600 tabular-nums ${
                    isSlide ? "mr-5 w-8" : "mr-4 w-6"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="whitespace-pre text-stone-100">
                  {line || " "}
                </span>
              </span>
            ))}
          </code>
        </pre>
      </div>
    </figure>
  );
}
