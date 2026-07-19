"use client";

import { useState } from "react";
import { CodeBlock } from "./CodeBlock";

export type EduOsKey = "mac" | "linux" | "windows";

export type EduOsVariant = {
  lines: string[];
  caption?: string;
};

const OS_TABS: { key: EduOsKey; label: string }[] = [
  { key: "mac", label: "Mac" },
  { key: "linux", label: "Linux" },
  { key: "windows", label: "Windows" },
];

// Tabbed code panel for commands that differ by OS. Audience OS is unknown in
// a live class, so every command block that needs a path or shell flavor
// should ship all three variants.

export function OsCodeBlock({
  caption,
  note,
  variants,
  defaultOs = "mac",
  mode,
}: {
  caption?: string;
  note?: string;
  variants: Record<EduOsKey, EduOsVariant>;
  defaultOs?: EduOsKey;
  mode: "web" | "slide";
}) {
  const [os, setOs] = useState<EduOsKey>(defaultOs);
  const active = variants[os];
  const isSlide = mode === "slide";

  return (
    <div className="not-prose space-y-2">
      {caption ? (
        <p className="text-xs font-medium uppercase tracking-wide text-stone-400">
          {caption}
        </p>
      ) : null}
      {note ? (
        <p className={`text-stone-500 ${isSlide ? "text-base" : "text-sm"}`}>
          {note}
        </p>
      ) : null}
      <div
        role="tablist"
        aria-label="Pilih sistem operasi"
        className="inline-flex rounded-xl border border-stone-200 bg-stone-100/80 p-1"
      >
        {OS_TABS.map((tab) => {
          const selected = tab.key === os;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setOs(tab.key)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                selected
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-500 hover:text-stone-800"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <CodeBlock caption={active.caption} lines={active.lines} mode={mode} />
    </div>
  );
}
