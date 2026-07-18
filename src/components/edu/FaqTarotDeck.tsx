"use client";

import {
  forwardRef,
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import type { EduFaq } from "@/lib/edu";
import styles from "./FaqTarotDeck.module.css";

export type FaqTarotHandle = {
  flip: () => void;
  next: () => boolean;
  prev: () => boolean;
  isFlipped: () => boolean;
  index: () => number;
  total: () => number;
};

type Mode = "web" | "slide";

type Props = {
  faqs: EduFaq[];
  mode?: Mode;
  /** When false, parent (e.g. presentation) owns keyboard navigation. */
  captureKeys?: boolean;
  className?: string;
};

const SWIPE_THRESHOLD = 56;
const FLIP_DRAG_IGNORE = 18;

export const FaqTarotDeck = forwardRef<FaqTarotHandle, Props>(
  function FaqTarotDeck(
    { faqs, mode = "web", captureKeys = true, className },
    ref,
  ) {
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [dragX, setDragX] = useState(0);
    const [dragging, setDragging] = useState(false);
    const pointerStart = useRef<{ x: number; y: number } | null>(null);
    const dragXRef = useRef(0);
    const total = faqs.length;
    const safeIndex = Math.min(index, Math.max(total - 1, 0));
    const current = faqs[safeIndex];

    const go = useCallback(
      (dir: 1 | -1) => {
        setIndex((value) => {
          const next = value + dir;
          if (next < 0 || next >= total) return value;
          setFlipped(false);
          setDragX(0);
          return next;
        });
      },
      [total],
    );

    const flip = useCallback(() => {
      setFlipped((value) => !value);
    }, []);

    const next = useCallback(() => {
      if (safeIndex >= total - 1) return false;
      go(1);
      return true;
    }, [go, safeIndex, total]);

    const prev = useCallback(() => {
      if (safeIndex <= 0) return false;
      go(-1);
      return true;
    }, [go, safeIndex]);

    useImperativeHandle(
      ref,
      () => ({
        flip,
        next,
        prev,
        isFlipped: () => flipped,
        index: () => safeIndex,
        total: () => total,
      }),
      [flip, flipped, next, prev, safeIndex, total],
    );

    useEffect(() => {
      if (!captureKeys || total === 0) return;

      const onKey = (event: KeyboardEvent) => {
        if (
          event.target instanceof HTMLElement &&
          (event.target.tagName === "INPUT" ||
            event.target.tagName === "TEXTAREA" ||
            event.target.isContentEditable)
        ) {
          return;
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();
          if (!flipped) flip();
          else next();
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          if (flipped) setFlipped(false);
          else prev();
        } else if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          flip();
        }
      };

      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [captureKeys, flip, flipped, next, prev, total]);

    const onPointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
      pointerStart.current = { x: event.clientX, y: event.clientY };
      dragXRef.current = 0;
      setDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
      if (!pointerStart.current || !dragging) return;
      const dx = event.clientX - pointerStart.current.x;
      dragXRef.current = dx;
      setDragX(dx);
    };

    const onPointerUp = (event: ReactPointerEvent<HTMLButtonElement>) => {
      if (!pointerStart.current) return;
      const dx = dragXRef.current;
      const dy = event.clientY - pointerStart.current.y;
      pointerStart.current = null;
      setDragging(false);
      setDragX(0);

      if (Math.abs(dx) >= SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) next();
        else prev();
        return;
      }

      if (Math.abs(dx) < FLIP_DRAG_IGNORE && Math.abs(dy) < FLIP_DRAG_IGNORE) {
        flip();
      }
    };

    if (!current) return null;

    const exitOpacity =
      Math.abs(dragX) > SWIPE_THRESHOLD
        ? Math.max(0.35, 1 - Math.abs(dragX) / 220)
        : 1;
    const cardTransform = flipped
      ? `translateX(${dragX}px) rotate(${dragX / 28}deg) rotateY(180deg)`
      : `translateX(${dragX}px) rotate(${dragX / 28}deg)`;

    return (
      <div
        className={`${styles.wrap} ${mode === "slide" ? styles.slide : ""} ${className ?? ""}`}
      >
        <div className={styles.stage} aria-live="polite">
          {total > 2 ? (
            <div className={styles.stackCard} data-depth="2" />
          ) : null}
          {total > 1 ? (
            <div className={styles.stackCard} data-depth="1" />
          ) : null}

          <button
            type="button"
            className={styles.active}
            style={{
              transform: cardTransform,
              opacity: exitOpacity,
              transition: dragging ? "none" : undefined,
            }}
            aria-label={
              flipped
                ? `Jawaban: ${current.a}. Ketuk untuk balik, geser untuk kartu lain.`
                : `Pertanyaan ${safeIndex + 1} dari ${total}: ${current.q}. Ketuk untuk membuka jawaban.`
            }
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <div className={`${styles.face} ${styles.front}`}>
              <div className={styles.frame}>
                <span className={styles.ornament} data-pos="tl" />
                <span className={styles.ornament} data-pos="tr" />
                <span className={styles.ornament} data-pos="bl" />
                <span className={styles.ornament} data-pos="br" />
                <p className={styles.badge}>Kartu {safeIndex + 1}</p>
                <p className={styles.question}>{current.q}</p>
                <p className={styles.hint}>
                  Ketuk untuk membuka · Geser untuk ganti
                </p>
              </div>
            </div>
            <div className={`${styles.face} ${styles.back}`}>
              <div className={styles.frame}>
                <span className={styles.ornament} data-pos="tl" />
                <span className={styles.ornament} data-pos="tr" />
                <span className={styles.ornament} data-pos="bl" />
                <span className={styles.ornament} data-pos="br" />
                <p className={styles.answerLabel}>Jawaban</p>
                <p className={styles.answer}>{current.a}</p>
                <p className={styles.hint}>
                  {safeIndex < total - 1
                    ? "Geser kiri untuk kartu berikutnya"
                    : "Ini kartu terakhir"}
                </p>
              </div>
            </div>
          </button>
        </div>

        <div className={styles.controls}>
          <p className={styles.counter}>
            {safeIndex + 1} / {total}
          </p>
          <div
            className={styles.dots}
            role="tablist"
            aria-label="Daftar pertanyaan FAQ"
          >
            {faqs.map((faq, i) => (
              <button
                key={faq.q}
                type="button"
                role="tab"
                aria-selected={i === safeIndex}
                aria-label={`Kartu ${i + 1}`}
                className={styles.dot}
                data-active={i === safeIndex}
                onClick={() => {
                  setIndex(i);
                  setFlipped(false);
                }}
              />
            ))}
          </div>
          <div className={styles.nav}>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => prev()}
              disabled={safeIndex === 0}
            >
              Sebelumnya
            </button>
            <button
              type="button"
              className={styles.navButton}
              data-primary="true"
              onClick={flip}
            >
              {flipped ? "Balik kartu" : "Buka jawaban"}
            </button>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => next()}
              disabled={safeIndex === total - 1}
            >
              Berikutnya
            </button>
          </div>
        </div>

        {/* Crawlable full FAQ text for SEO / no-JS readers */}
        <div className={styles.srOnly}>
          {faqs.map((faq) => (
            <div key={`seo-${faq.q}`}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    );
  },
);
