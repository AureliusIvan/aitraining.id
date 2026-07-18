"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { EduFaq, EduGlossaryEntry, EduSlide } from "@/lib/edu";
import { AuthorPopover } from "./AuthorPopover";
import { EduBlocks } from "./EduBlocks";
import { FaqTarotDeck, type FaqTarotHandle } from "./FaqTarotDeck";

// Client-side presentation overlay. The corner "Mode presentasi" pill opens a
// full-screen, light-themed deck rendered from the SAME slide data the page
// shows. Features:
//   - one slide per screen with page numbers; content auto-scales to fit the
//     viewport (algorithmic and measured, so slides never clip)
//   - Ivan's logo as a screenshot-surviving watermark
//   - a per-slide QR (bottom-right) that deep-links to that section on the page
//   - drawing that is toggled on/off (off by default, so clicks reach glossary
//     terms); strokes are kept per slide and restored when you navigate back
//   - glossary term popovers (handled by GlossaryTerm inside the blocks)

type DeckItem =
  | { kind: "title" }
  | { kind: "slide"; slide: EduSlide }
  | { kind: "faq"; faqs: EduFaq[] };

type Point = { x: number; y: number }; // normalized 0..1 to the viewport

type Props = {
  title: string;
  tagline: string;
  slides: EduSlide[];
  faqs: EduFaq[];
  glossary: EduGlossaryEntry[];
  qrPrefix: string; // e.g. "/assets/edu/claude-skills--"; key + ".svg" appended
  logoSrc: string;
  pageUrl: string;
};

// Vertical/horizontal room reserved for the top logo + controls and bottom
// nav + QR, so auto-fit never tucks content under the chrome.
const RESERVE_V = 176;
const RESERVE_H = 128;

export function PresentationMode({
  title,
  tagline,
  slides,
  faqs,
  glossary,
  qrPrefix,
  logoSrc,
  pageUrl,
}: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [pen, setPen] = useState(false);
  const [scale, setScale] = useState(1);
  const [qrOpen, setQrOpen] = useState(false);

  const deck = useMemo<DeckItem[]>(
    () => [
      { kind: "title" },
      ...slides.map((slide) => ({ kind: "slide" as const, slide })),
      { kind: "faq" as const, faqs },
    ],
    [slides, faqs],
  );
  const total = deck.length;
  const clampedIndex = Math.min(index, total - 1);

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fitRef = useRef<HTMLDivElement>(null);
  const faqDeckRef = useRef<FaqTarotHandle>(null);
  const drawing = useRef(false);
  const currentStroke = useRef<Point[]>([]);
  // Per-slide strokes: index -> list of strokes -> list of normalized points.
  const strokesBySlide = useRef<Record<number, Point[][]>>({});

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => Math.max(0, Math.min(total - 1, i + dir))),
    [total],
  );

  const toggleFullscreen = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else {
      el.requestFullscreen?.();
    }
  }, []);

  // --- drawing helpers ------------------------------------------------------
  const drawStroke = useCallback(
    (ctx: CanvasRenderingContext2D, stroke: Point[]) => {
      const canvas = ctx.canvas;
      if (stroke.length === 0) return;
      ctx.strokeStyle = "rgba(245, 158, 11, 0.55)";
      ctx.fillStyle = "rgba(245, 158, 11, 0.55)";
      ctx.lineWidth = 12;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      if (stroke.length === 1) {
        const p = stroke[0];
        ctx.beginPath();
        ctx.arc(p.x * canvas.width, p.y * canvas.height, 6, 0, Math.PI * 2);
        ctx.fill();
        return;
      }
      ctx.beginPath();
      ctx.moveTo(stroke[0].x * canvas.width, stroke[0].y * canvas.height);
      for (let i = 1; i < stroke.length; i++) {
        ctx.lineTo(stroke[i].x * canvas.width, stroke[i].y * canvas.height);
      }
      ctx.stroke();
    },
    [],
  );

  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const stroke of strokesBySlide.current[clampedIndex] ?? []) {
      drawStroke(ctx, stroke);
    }
  }, [clampedIndex, drawStroke]);

  const sizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  const clearCurrent = useCallback(() => {
    delete strokesBySlide.current[clampedIndex];
    redraw();
  }, [clampedIndex, redraw]);

  // --- auto-fit: measure natural content, scale to fit the viewport ---------
  const fit = useCallback(() => {
    const el = fitRef.current;
    if (!el) return;
    // scrollHeight/Width are layout sizes, unaffected by the transform we apply,
    // so this reads the natural (unscaled) content box and converges in one pass.
    const h = el.scrollHeight;
    const w = el.scrollWidth;
    if (h === 0 || w === 0) return;
    const availH = window.innerHeight - RESERVE_V;
    const availW = window.innerWidth - RESERVE_H;
    const next = Math.max(0.3, Math.min(1, availH / h, availW / w));
    setScale(next);
  }, []);

  // Lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Size the canvas and restore this slide's strokes on open / slide change / resize.
  useEffect(() => {
    if (!open) return;
    sizeCanvas();
    redraw();
    const onResize = () => {
      sizeCanvas();
      redraw();
      fit();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open, sizeCanvas, redraw, fit]);

  // Re-fit whenever the slide changes or the content resizes (e.g. a GIF loads).
  // biome-ignore lint/correctness/useExhaustiveDependencies: clampedIndex intentionally retriggers fitting
  useLayoutEffect(() => {
    if (!open) return;
    fit();
  }, [open, clampedIndex, fit]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: clampedIndex replaces the observed slide node
  useEffect(() => {
    if (!open) return;
    const el = fitRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => fit());
    ro.observe(el);
    return () => ro.disconnect();
  }, [open, clampedIndex, fit]);

  // Keyboard: arrows/space navigate, "d" toggles drawing, "c" clears, Esc exits.
  // On the FAQ slide, arrows/space drive the tarot deck first, then advance the deck.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        e.key === " " &&
        target?.closest("button, a, input, textarea, select")
      ) {
        return;
      }

      const onFaq = deck[clampedIndex]?.kind === "faq";
      const faqDeck = faqDeckRef.current;

      if (onFaq && faqDeck) {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          faqDeck.flip();
          return;
        }
        if (e.key === "ArrowRight" || e.key === "PageDown") {
          e.preventDefault();
          if (!faqDeck.isFlipped()) {
            faqDeck.flip();
            return;
          }
          if (!faqDeck.next()) go(1);
          return;
        }
        if (e.key === "ArrowLeft" || e.key === "PageUp") {
          e.preventDefault();
          if (faqDeck.isFlipped()) {
            faqDeck.flip();
            return;
          }
          if (!faqDeck.prev()) go(-1);
          return;
        }
      }

      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "d" || e.key === "D") {
        setPen((p) => !p);
      } else if (e.key === "c" || e.key === "C") {
        clearCurrent();
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      } else if (e.key === "Escape") {
        if (qrOpen) setQrOpen(false);
        else setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go, clearCurrent, toggleFullscreen, qrOpen, deck, clampedIndex]);

  const toPoint = (e: React.PointerEvent): Point => {
    const c = canvasRef.current;
    return {
      x: c ? e.clientX / c.width : 0,
      y: c ? e.clientY / c.height : 0,
    };
  };

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!pen) return;
    drawing.current = true;
    currentStroke.current = [toPoint(e)];
    canvasRef.current?.setPointerCapture(e.pointerId);
    redraw();
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!pen || !drawing.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const pt = toPoint(e);
    const prev = currentStroke.current[currentStroke.current.length - 1];
    currentStroke.current.push(pt);
    ctx.strokeStyle = "rgba(245, 158, 11, 0.55)";
    ctx.lineWidth = 12;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(prev.x * canvas.width, prev.y * canvas.height);
    ctx.lineTo(pt.x * canvas.width, pt.y * canvas.height);
    ctx.stroke();
  };

  const onPointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    drawing.current = false;
    if (currentStroke.current.length > 0) {
      const strokes = strokesBySlide.current[clampedIndex] ?? [];
      strokes.push(currentStroke.current);
      strokesBySlide.current[clampedIndex] = strokes;
    }
    currentStroke.current = [];
    canvasRef.current?.releasePointerCapture(e.pointerId);
  };

  const current = deck[clampedIndex];
  const qrKey =
    current.kind === "title"
      ? "top"
      : current.kind === "faq"
        ? "faq"
        : current.slide.id;
  const qrUrl =
    current.kind === "title"
      ? pageUrl
      : current.kind === "faq"
        ? `${pageUrl}#faq`
        : `${pageUrl}#${current.slide.id}`;
  const qrSrc = `${qrPrefix}${qrKey}.svg`;

  return (
    <>
      {!open ? (
        <button
          type="button"
          onClick={() => {
            setIndex(0);
            setOpen(true);
          }}
          className="fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2.5 text-sm font-medium text-white shadow-lg ring-1 ring-black/10 transition-transform hover:scale-[1.03]"
          aria-label="Buka mode presentasi"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Mode presentasi
        </button>
      ) : null}

      {open ? (
        <div
          ref={containerRef}
          onContextMenu={(e) => {
            // Right-click is a fast toggle between drawing and normal clicking.
            e.preventDefault();
            setPen((p) => !p);
          }}
          className="fixed inset-0 z-[100] select-none overflow-hidden bg-[#f7f7f4] text-stone-900"
          role="dialog"
          aria-modal="true"
          aria-label="Mode presentasi"
        >
          {/* Faint screenshot-surviving watermark behind the content. */}
          <div
            className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
            aria-hidden="true"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc}
              alt=""
              className="w-[70%] max-w-3xl -rotate-12 opacity-[0.06]"
            />
          </div>

          {/* Slide content, auto-scaled to fit. The inner element carries the
              transform; its glossary terms stay clickable (pointer-events-auto). */}
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center overflow-hidden px-6 sm:px-16">
            <div
              ref={fitRef}
              style={{
                transform: `scale(${scale})`,
                transformOrigin: "center",
              }}
              className="pointer-events-auto w-full max-w-4xl"
            >
              {current.kind === "title" ? (
                <div className="text-center">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#B3282D]">
                    AI Training Indonesia
                  </p>
                  <h1 className="text-4xl font-bold leading-tight tracking-tight text-stone-900 sm:text-6xl">
                    {title}
                  </h1>
                  <p className="mx-auto mt-5 max-w-2xl text-xl text-stone-600 sm:text-2xl">
                    {tagline}
                  </p>
                  <p className="mt-8 text-base text-stone-500">
                    <AuthorPopover
                      name="Aurelius Ivan Wijaya"
                      bio="Corporate AI Trainer di Indonesia. Official n8n Ambassador dan Cursor Ambassador, dan sudah berbicara di 50+ acara AI."
                      photo="/assets/hero.webp"
                    />
                  </p>
                </div>
              ) : null}

              {current.kind === "slide" ? (
                <div>
                  {current.slide.kicker ? (
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#B3282D]">
                      {current.slide.kicker}
                    </p>
                  ) : null}
                  <h2 className="text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl">
                    {current.slide.title}
                  </h2>
                  {current.slide.subtitle ? (
                    <p className="mt-3 text-lg text-stone-500 sm:text-2xl">
                      {current.slide.subtitle}
                    </p>
                  ) : null}
                  <div className="mt-8">
                    <EduBlocks
                      blocks={current.slide.blocks}
                      mode="slide"
                      glossary={glossary}
                    />
                  </div>
                </div>
              ) : null}

              {current.kind === "faq" ? (
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#B3282D]">
                    Pertanyaan umum
                  </p>
                  <h2 className="text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl">
                    FAQ
                  </h2>
                  <p className="mt-3 max-w-2xl text-lg text-stone-600">
                    Ketuk kartu untuk membuka jawaban. Geser atau panah untuk
                    kartu berikutnya.
                  </p>
                  <div className="mt-6">
                    <FaqTarotDeck
                      ref={faqDeckRef}
                      faqs={current.faqs}
                      mode="slide"
                      captureKeys={false}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          {/* Drawing surface: above content, below the control chrome. Only
              captures pointer events while the pen is on. */}
          <canvas
            ref={canvasRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            style={{ pointerEvents: pen ? "auto" : "none" }}
            className={`absolute inset-0 z-20 touch-none ${pen ? "cursor-crosshair" : ""}`}
          />

          {/* Corner logo credit (top-left). */}
          <div className="pointer-events-none absolute left-6 top-6 z-30">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc}
              alt="AI Training Indonesia"
              className="h-7 w-auto opacity-90"
            />
          </div>

          {/* Per-slide QR (bottom-right): deep-links to this section on the page.
              Click to enlarge (in case it is hard to scan from a distance). */}
          <div className="absolute bottom-6 right-6 z-30 flex flex-col items-center gap-1">
            <button
              type="button"
              onClick={() => setQrOpen(true)}
              className="rounded-xl bg-white p-2 shadow-md ring-1 ring-black/5 transition-transform hover:scale-105"
              title="Perbesar QR"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qrSrc}
                alt={`QR menuju ${qrUrl}`}
                className="h-24 w-24"
              />
            </button>
            <span className="text-[11px] font-medium text-stone-400">
              scan atau klik untuk perbesar
            </span>
          </div>

          {/* Top-right controls (icon-only for compactness). */}
          <div className="absolute right-6 top-6 z-40 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPen((p) => !p)}
              aria-pressed={pen}
              className={`flex h-9 w-9 items-center justify-center rounded-full shadow-sm ring-1 backdrop-blur transition-colors ${
                pen
                  ? "bg-amber-400 text-stone-900 ring-amber-500"
                  : "bg-white/90 text-stone-600 ring-black/5 hover:text-stone-900"
              }`}
              title={
                pen
                  ? "Coret nyala. Klik, klik kanan, atau D untuk mematikan."
                  : "Coret mati. Klik, klik kanan, atau D untuk menyalakan."
              }
              aria-label="Aktifkan atau matikan coretan"
            >
              <svg
                className="h-[18px] w-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536M9 11l6.5-6.5a2.121 2.121 0 013 3L12 14l-4 1 1-4z"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={clearCurrent}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-stone-600 shadow-sm ring-1 ring-black/5 backdrop-blur transition-colors hover:text-stone-900"
              title="Hapus coretan slide ini (C)"
              aria-label="Hapus coretan slide ini"
            >
              <svg
                className="h-[18px] w-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M4 7h16m-9 0V4a1 1 0 011-1h2a1 1 0 011 1v3"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-stone-600 shadow-sm ring-1 ring-black/5 backdrop-blur transition-colors hover:text-stone-900"
              title="Layar penuh (F)"
              aria-label="Layar penuh"
            >
              <svg
                className="h-[18px] w-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 4H4v4m0 8v4h4m8-16h4v4m0 8v4h-4"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-white shadow-sm transition-colors hover:bg-stone-700"
              title="Keluar (Esc)"
              aria-label="Keluar"
            >
              <svg
                className="h-[18px] w-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Enlarged QR (click the small QR): easier to scan, with the link
              spelled out below for anyone who prefers to type it. */}
          {qrOpen ? (
            <button
              type="button"
              aria-label="Tutup QR"
              onClick={() => setQrOpen(false)}
              className="absolute inset-0 z-[110] flex cursor-default items-center justify-center bg-black/50 p-6"
            >
              {/* biome-ignore lint/a11y/noStaticElementInteractions: stop-propagation panel */}
              <div
                className="relative flex flex-col items-center gap-5 rounded-3xl bg-white p-8 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setQrOpen(false)}
                  aria-label="Tutup"
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-stone-400 hover:bg-stone-100 hover:text-stone-700"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6l12 12M18 6L6 18"
                    />
                  </svg>
                </button>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={qrSrc}
                  alt={`QR menuju ${qrUrl}`}
                  className="h-64 w-64 sm:h-80 sm:w-80"
                />
                <div className="max-w-xs text-center">
                  <p className="text-sm text-stone-500">
                    Scan, atau buka tautan ini:
                  </p>
                  <p className="mt-1 select-all break-all font-mono text-sm text-stone-800">
                    {qrUrl}
                  </p>
                </div>
              </div>
            </button>
          ) : null}

          {/* Bottom navigation + page number. */}
          <div className="absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={clampedIndex === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/5 transition-opacity disabled:opacity-30"
              aria-label="Slide sebelumnya"
            >
              <svg
                className="h-5 w-5 text-stone-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <span className="min-w-[64px] text-center text-sm font-medium tabular-nums text-stone-500">
              {clampedIndex + 1} / {total}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={clampedIndex === total - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/5 transition-opacity disabled:opacity-30"
              aria-label="Slide berikutnya"
            >
              <svg
                className="h-5 w-5 text-stone-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
