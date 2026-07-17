"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { EduFaq, EduSlide } from "@/lib/edu";
import { EduBlocks } from "./EduBlocks";

// Client-side presentation overlay. The corner "Present" pill opens a
// full-screen, light-themed deck rendered from the SAME slide data the page
// shows. Features Ivan asked for: one slide per screen with page numbers, his
// logo as a screenshot-surviving watermark, a QR (bottom-right) that opens this
// page, and hold-to-draw highlighting for pointing at parts of a slide live.

type DeckItem =
  | { kind: "title" }
  | { kind: "slide"; slide: EduSlide }
  | { kind: "faq"; faqs: EduFaq[] };

type Point = { x: number; y: number };

type Props = {
  title: string;
  tagline: string;
  slides: EduSlide[];
  faqs: EduFaq[];
  qrSrc: string;
  logoSrc: string;
  pageUrl: string;
};

export function PresentationMode({
  title,
  tagline,
  slides,
  faqs,
  qrSrc,
  logoSrc,
  pageUrl,
}: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const deck = useMemo<DeckItem[]>(
    () => [
      { kind: "title" },
      ...slides.map((slide) => ({ kind: "slide" as const, slide })),
      { kind: "faq" as const, faqs },
    ],
    [slides, faqs],
  );
  const total = deck.length;

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const stroke = useRef<Point[]>([]);

  const clampedIndex = Math.min(index, total - 1);

  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => Math.max(0, Math.min(total - 1, i + dir)));
    },
    [total],
  );

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  // Lock body scroll while the deck is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Wipe any highlighter strokes whenever the slide changes so marks from one
  // slide never bleed onto the next.
  useEffect(() => {
    clearCanvas();
  }, [clearCanvas]);

  // Size the drawing canvas to the viewport (and keep it sized on resize).
  useEffect(() => {
    if (!open) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [open]);

  // Keyboard: arrows/space navigate, "c" clears drawing, Escape exits.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "c" || e.key === "C") {
        clearCanvas();
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go, clearCanvas]);

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    drawing.current = true;
    stroke.current = [{ x: e.clientX, y: e.clientY }];
    canvas.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const pt = { x: e.clientX, y: e.clientY };
    const prev = stroke.current[stroke.current.length - 1];
    stroke.current.push(pt);
    ctx.strokeStyle = "rgba(245, 158, 11, 0.55)";
    ctx.lineWidth = 12;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(prev.x, prev.y);
    ctx.lineTo(pt.x, pt.y);
    ctx.stroke();
  };

  const onPointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    drawing.current = false;
    stroke.current = [];
    canvasRef.current?.releasePointerCapture(e.pointerId);
  };

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else {
      el.requestFullscreen?.();
    }
  };

  const current = deck[clampedIndex];

  return (
    <>
      {/* Corner trigger (hidden while the deck is open). */}
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
          className="fixed inset-0 z-[100] select-none bg-[#f7f7f4] text-stone-900"
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

          {/* Slide content (never intercepts pointer events, so drags draw). */}
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6 sm:px-16">
            <div className="mx-auto w-full max-w-4xl">
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
                  <p className="mt-8 text-base text-stone-400">
                    Aurelius Ivan Wijaya
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
                    <EduBlocks blocks={current.slide.blocks} mode="slide" />
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
                  <div className="mt-8 space-y-5">
                    {current.faqs.map((faq) => (
                      <div key={faq.q}>
                        <p className="text-xl font-semibold text-stone-900">
                          {faq.q}
                        </p>
                        <p className="mt-1 text-lg leading-relaxed text-stone-600">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          {/* Drawing surface: sits above content, below the control chrome. */}
          <canvas
            ref={canvasRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            className="absolute inset-0 z-20 cursor-crosshair touch-none"
          />

          {/* Corner logo credit (top-left) — the visible provenance mark. */}
          <div className="pointer-events-none absolute left-6 top-6 z-30">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt="AI Training Indonesia" className="h-7 w-auto opacity-90" />
          </div>

          {/* QR (bottom-right): scan to open this page. */}
          <div className="pointer-events-none absolute bottom-6 right-6 z-30 flex flex-col items-center gap-1">
            <div className="rounded-xl bg-white p-2 shadow-md ring-1 ring-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={qrSrc} alt={`QR menuju ${pageUrl}`} className="h-24 w-24" />
            </div>
            <span className="text-[11px] font-medium text-stone-400">
              scan untuk buka halaman
            </span>
          </div>

          {/* Top-right controls. */}
          <div className="absolute right-6 top-6 z-40 flex items-center gap-2">
            <button
              type="button"
              onClick={clearCanvas}
              className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-stone-600 shadow-sm ring-1 ring-black/5 backdrop-blur hover:text-stone-900"
              title="Hapus coretan (C)"
            >
              Hapus coretan
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-stone-600 shadow-sm ring-1 ring-black/5 backdrop-blur hover:text-stone-900"
              title="Layar penuh"
            >
              Layar penuh
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full bg-stone-900 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-stone-700"
              title="Keluar (Esc)"
            >
              Keluar
            </button>
          </div>

          {/* Bottom navigation + page number. */}
          <div className="absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={clampedIndex === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/5 transition-opacity disabled:opacity-30"
              aria-label="Slide sebelumnya"
            >
              <svg className="h-5 w-5 text-stone-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
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
              <svg className="h-5 w-5 text-stone-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
