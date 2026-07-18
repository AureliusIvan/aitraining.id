import type { EduBlock, EduGlossaryEntry } from "@/lib/edu";
import { CodeBlock } from "./CodeBlock";
import { GlossaryTerm } from "./GlossaryTerm";
import { MotionBlock } from "./MotionBlock";

// Shared renderer for a slide's blocks. Used in two places with no "use client"
// directive so it works in both trees: the server-rendered web page (mode
// "web") and the client presentation overlay (mode "slide"). `slide` mode uses
// larger type + tighter vertical rhythm to fit one screen, and drops any block
// flagged `webOnly` (extra reading that belongs on the page, off the deck).
//
// Prose fields run through RichText, which turns [[term]] markers into clickable
// GlossaryTerm islands (wavy underline + definition popover). Titles and code
// are left literal on purpose.

type Mode = "web" | "slide";

const toneStyles: Record<string, string> = {
  info: "border-stone-200 bg-stone-50",
  tip: "border-[#B3282D]/25 bg-[#B3282D]/5",
  warn: "border-amber-300/60 bg-amber-50",
};

const toneDot: Record<string, string> = {
  info: "bg-stone-400",
  tip: "bg-[#B3282D]",
  warn: "bg-amber-500",
};

// Splits a string on [[term]] markers and renders matched terms as glossary
// islands. Directive-free: renders static text on the server, GlossaryTerm
// hydrates as a client island.
function RichText({
  text,
  glossary,
  mode,
}: {
  text: string;
  glossary: EduGlossaryEntry[];
  mode: Mode;
}) {
  if (glossary.length === 0 || !text.includes("[[")) return <>{text}</>;
  const parts = text.split(/(\[\[.+?\]\])/g);
  return (
    <>
      {parts.map((part, i) => {
        const match = /^\[\[(.+?)\]\]$/.exec(part);
        if (match) {
          const entry = glossary.find((g) => g.term === match[1]);
          if (entry) {
            return (
              <GlossaryTerm
                // biome-ignore lint/suspicious/noArrayIndexKey: static tokens
                key={i}
                term={entry.term}
                def={entry.def}
                mode={mode}
              />
            );
          }
          return match[1];
        }
        return part;
      })}
    </>
  );
}

function GifFrame({
  src,
  alt,
  caption,
  describe,
  mode,
}: {
  src?: string;
  alt: string;
  caption: string;
  describe: string;
  mode: Mode;
}) {
  return (
    <figure className="not-prose">
      <div
        className={`overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm ${
          mode === "slide" ? "mx-auto max-h-[34vh] w-fit" : ""
        }`}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className={
              mode === "slide"
                ? "mx-auto max-h-[34vh] w-auto object-contain"
                : "h-auto w-full"
            }
          />
        ) : (
          <div
            className={`flex flex-col items-center justify-center gap-3 bg-[repeating-linear-gradient(45deg,#faf9f7,#faf9f7_14px,#f3f1ee_14px,#f3f1ee_28px)] text-center ${
              mode === "slide"
                ? "h-[34vh] w-[60.4vh] max-w-full px-8"
                : "aspect-video px-6"
            }`}
          >
            <span className="rounded-full bg-[#B3282D] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              GIF
            </span>
            <p
              className={`max-w-md text-stone-500 ${
                mode === "slide" ? "text-base" : "text-sm"
              }`}
            >
              {describe}
            </p>
          </div>
        )}
      </div>
      <figcaption
        className={`mt-2 text-stone-400 ${
          mode === "slide" ? "text-center text-base" : "text-sm"
        }`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

function Block({
  block,
  mode,
  glossary,
}: {
  block: EduBlock;
  mode: Mode;
  glossary: EduGlossaryEntry[];
}) {
  const rich = (text: string) => (
    <RichText text={text} glossary={glossary} mode={mode} />
  );

  switch (block.type) {
    case "lead":
      return (
        <p
          className={`font-medium leading-relaxed text-stone-800 ${
            mode === "slide" ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {rich(block.text)}
        </p>
      );
    case "paragraph":
      return (
        <p
          className={`leading-relaxed text-stone-600 ${
            mode === "slide" ? "text-xl sm:text-2xl" : "text-lg"
          }`}
        >
          {rich(block.text)}
        </p>
      );
    case "steps":
      return (
        <ol className={mode === "slide" ? "space-y-3" : "space-y-4"}>
          {block.items.map((step, i) => (
            <li key={step.text} className="flex gap-4">
              <span
                className={`flex shrink-0 items-center justify-center rounded-full bg-[#B3282D] font-semibold text-white ${
                  mode === "slide" ? "h-9 w-9 text-base" : "h-8 w-8 text-sm"
                }`}
              >
                {i + 1}
              </span>
              <div>
                <p
                  className={`leading-relaxed text-stone-800 ${
                    mode === "slide" ? "text-xl" : "text-lg"
                  }`}
                >
                  {rich(step.text)}
                </p>
                {step.hint ? (
                  <p
                    className={`mt-1 text-stone-500 ${
                      mode === "slide" ? "text-base" : "text-sm"
                    }`}
                  >
                    {rich(step.hint)}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      );
    case "cards":
      return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {block.items.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <h3
                className={`mb-2 font-semibold text-stone-900 ${
                  mode === "slide" ? "text-xl" : "text-lg"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`leading-relaxed text-stone-600 ${
                  mode === "slide" ? "text-lg" : "text-base"
                }`}
              >
                {rich(card.text)}
              </p>
            </div>
          ))}
        </div>
      );
    case "callout": {
      const tone = block.tone ?? "info";
      return (
        <div className={`rounded-2xl border p-5 ${toneStyles[tone]}`}>
          <div className="flex items-start gap-3">
            <span
              className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${toneDot[tone]}`}
              aria-hidden="true"
            />
            <div>
              {block.title ? (
                <p
                  className={`mb-1 font-semibold text-stone-900 ${
                    mode === "slide" ? "text-xl" : "text-base"
                  }`}
                >
                  {block.title}
                </p>
              ) : null}
              <p
                className={`leading-relaxed text-stone-700 ${
                  mode === "slide" ? "text-lg sm:text-xl" : "text-base"
                }`}
              >
                {rich(block.text)}
              </p>
            </div>
          </div>
        </div>
      );
    }
    case "code":
      return (
        <CodeBlock caption={block.caption} lines={block.lines} mode={mode} />
      );
    case "gif":
      return (
        <GifFrame
          src={block.src}
          alt={block.alt}
          caption={block.caption}
          describe={block.describe}
          mode={mode}
        />
      );
    case "motion":
      return (
        <MotionBlock
          scene={block.scene}
          alt={block.alt}
          caption={block.caption}
          command={block.scene === "claude-skill" ? block.command : undefined}
          output={block.scene === "claude-skill" ? block.output : undefined}
          items={block.scene === "edu-storyboard" ? block.items : undefined}
          mode={mode}
        />
      );
    default:
      return null;
  }
}

export function EduBlocks({
  blocks,
  mode,
  glossary = [],
}: {
  blocks: EduBlock[];
  mode: Mode;
  glossary?: EduGlossaryEntry[];
}) {
  const visible = mode === "slide" ? blocks.filter((b) => !b.webOnly) : blocks;
  return (
    <div className={mode === "slide" ? "space-y-5" : "space-y-6"}>
      {visible.map((block, i) => (
        <Block
          key={`${block.type}-${i}`}
          block={block}
          mode={mode}
          glossary={glossary}
        />
      ))}
    </div>
  );
}
