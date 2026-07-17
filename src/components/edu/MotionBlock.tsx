"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { EduMotionScene } from "@/lib/edu";
import styles from "./MotionBlock.module.css";

type Mode = "web" | "slide";
type SceneVariant = "success" | "missing-data";

export function MotionBlock({
  scene,
  alt,
  caption,
  command,
  output,
  mode,
}: {
  scene: EduMotionScene;
  alt: string;
  caption: string;
  command: string;
  output: string;
  mode: Mode;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(mode === "slide");
  const [runId, setRunId] = useState(0);
  const [variant, setVariant] = useState<SceneVariant>("success");
  const [paused, setPaused] = useState(false);
  const id = useId();
  const titleId = `${id}-title`;
  const descId = `${id}-desc`;

  useEffect(() => {
    if (mode === "slide") {
      setStarted(true);
      return;
    }

    const frame = frameRef.current;
    if (!frame || typeof IntersectionObserver === "undefined") {
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setStarted(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );
    observer.observe(frame);
    return () => observer.disconnect();
  }, [mode]);

  const toggleMissingData = () => {
    const nextVariant = variant === "missing-data" ? "success" : "missing-data";
    setVariant(nextVariant);
    setPaused(false);
    setStarted(true);
    setRunId((value) => value + 1);
  };

  return (
    <figure className="not-prose">
      <div
        ref={frameRef}
        className={`${styles.frame} ${mode === "slide" ? styles.slideFrame : ""}`}
      >
        <div className={styles.controls}>
          <button
            type="button"
            onClick={toggleMissingData}
            aria-pressed={variant === "missing-data"}
            className={`${styles.control} ${styles.failureControl} ${
              variant === "missing-data" ? styles.activeControl : ""
            }`}
          >
            {variant === "missing-data" ? "Pakai Data lagi" : "Coba tanpa Data"}
          </button>
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            aria-pressed={paused}
            aria-label={paused ? "Lanjutkan animasi" : "Jeda animasi"}
            className={`${styles.control} ${styles.pauseControl}`}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {paused ? (
                <path d="m9 7 8 5-8 5Z" />
              ) : (
                <>
                  <path d="M9 7v10" />
                  <path d="M15 7v10" />
                </>
              )}
            </svg>
          </button>
        </div>

        {scene === "claude-skill" ? (
          <ClaudeSkillScene
            key={runId}
            running={started}
            paused={paused}
            variant={variant}
            titleId={titleId}
            descId={descId}
            alt={alt}
            command={command}
            output={output}
          />
        ) : null}
        <span className="sr-only" aria-live="polite">
          {variant === "missing-data"
            ? "Percobaan tanpa data menghasilkan status Data belum lengkap."
            : `Skill menghasilkan ${output}.`}
        </span>
      </div>
      <figcaption
        className={`mt-2 ${
          mode === "slide"
            ? "text-center text-lg font-semibold text-stone-700"
            : "text-sm text-stone-500"
        }`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

function ClaudeSkillScene({
  running,
  paused,
  variant,
  titleId,
  descId,
  alt,
  command,
  output,
}: {
  running: boolean;
  paused: boolean;
  variant: SceneVariant;
  titleId: string;
  descId: string;
  alt: string;
  command: string;
  output: string;
}) {
  return (
    <svg
      className={`${styles.art} ${running ? styles.running : ""} ${
        variant === "missing-data" ? styles.failure : ""
      } ${paused ? styles.paused : ""}`}
      viewBox="0 0 720 405"
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
    >
      <title id={titleId}>
        {variant === "missing-data"
          ? "Cara kerja Claude Skill tanpa data"
          : "Cara kerja Claude Skill"}
      </title>
      <desc id={descId}>
        {alt}
        {variant === "missing-data"
          ? " Percobaan tanpa Data berakhir dengan status Data belum lengkap."
          : ""}
      </desc>

      <rect className={styles.backdrop} x="0" y="0" width="720" height="405" />
      <path className={styles.guide} d="M92 255C214 274 436 265 601 214" />

      <g className={styles.user}>
        <circle cx="72" cy="154" r="24" />
        <path d="M31 222c5-31 20-48 41-48s36 17 41 48" />
        <text x="72" y="249">
          Kamu
        </text>
      </g>

      <g className={`${styles.chip} ${styles.chipOne}`}>
        <rect x="122" y="66" width="142" height="43" rx="13" />
        <circle cx="144" cy="87.5" r="5" />
        <text x="158" y="93">
          Tujuan
        </text>
      </g>
      <g className={`${styles.chip} ${styles.chipTwo} ${styles.dataChip}`}>
        <rect x="147" y="128" width="142" height="43" rx="13" />
        <circle cx="169" cy="149.5" r="5" />
        <text x="183" y="155">
          Data
        </text>
        <path
          className={styles.dataMissingMarker}
          d="m257 140 14 19m0-19-14 19"
        />
      </g>
      <g className={`${styles.chip} ${styles.chipThree}`}>
        <rect x="114" y="190" width="175" height="43" rx="13" />
        <circle cx="136" cy="211.5" r="5" />
        <text x="150" y="217">
          Langkah kerja
        </text>
      </g>

      <g className={styles.skill}>
        <rect
          className={styles.skillTab}
          x="310"
          y="93"
          width="80"
          height="28"
          rx="10"
        />
        <rect
          className={styles.skillCard}
          x="280"
          y="108"
          width="204"
          height="116"
          rx="21"
        />
        <circle cx="314" cy="151" r="15" />
        <path d="M314 141v20M304 151h20" />
        <text className={styles.skillTitle} x="340" y="151">
          Skill tersimpan
        </text>
        <text
          className={styles.skillCommand}
          x="382"
          y="194"
          textAnchor="middle"
        >
          {command}
        </text>
      </g>

      <path
        className={styles.connector}
        pathLength="1"
        d="M485 165C511 165 528 157 548 157"
      />

      <g className={styles.assistant}>
        <circle className={styles.assistantRing} cx="603" cy="157" r="52" />
        <image
          className={styles.assistantSpark}
          href="/assets/edu/claude-spark.svg"
          x="568"
          y="122"
          width="70"
          height="70"
        />
        <text x="603" y="230">
          Claude
        </text>
      </g>

      <g className={styles.command}>
        <rect x="86" y="298" width="163" height="44" rx="15" />
        <text x="106" y="326">
          {command}
        </text>
      </g>

      <g className={`${styles.output} ${styles.successOutput}`}>
        <rect x="512" y="286" width="166" height="66" rx="18" />
        <circle cx="541" cy="319" r="13" />
        <path d="m535 319 4 4 8-9" />
        <text x="563" y="325">
          {output}
        </text>
      </g>

      <g className={`${styles.output} ${styles.failureOutput}`}>
        <rect x="490" y="286" width="188" height="66" rx="18" />
        <circle cx="518" cy="319" r="13" />
        <path d="M518 311v10M518 327h.01" />
        <text x="540" y="325">
          Data belum lengkap
        </text>
      </g>
    </svg>
  );
}
