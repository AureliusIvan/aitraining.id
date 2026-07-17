"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { EduMotionScene } from "@/lib/edu";
import styles from "./MotionBlock.module.css";

type Mode = "web" | "slide";
type SceneVariant = "success" | "missing-data";

// Official Claude Spark vector from Anthropic's press kit:
// https://anthropic.com/press-kit
const CLAUDE_SPARK_PATH =
  "M18.7657 62.4437L37.1822 52.1167L37.4857 51.2122L37.1822 50.7085H36.2715L33.1852 50.5208L22.6615 50.2391L13.5545 49.8636L4.70044 49.3942L2.47428 48.9248L0.399902 46.1553L0.602281 44.794L2.47428 43.5266L5.15579 43.7613L11.0754 44.1837L19.98 44.794L26.4055 45.1695L35.9679 46.1553H37.4857L37.6881 45.545L37.1822 45.1695L36.7774 44.794L27.5692 38.5508L17.6021 31.9791L12.3908 28.1769L9.60812 26.2524L8.19147 24.4686L7.58433 20.5256L10.1141 17.7091L13.5545 17.9438L14.4146 18.1785L17.9056 20.8542L25.343 26.6279L35.0572 33.7629L36.4739 34.9364L37.0443 34.5514L37.1316 34.2792L36.4739 33.1996L31.212 23.6706L25.596 13.9539L23.0663 9.91695L22.4086 7.52296C22.1538 6.51831 22.0038 5.68714 22.0038 4.65957L24.8877 0.716544L26.5067 0.200195L30.4025 0.716544L32.0215 2.12477L34.4501 7.66379L38.3458 16.3478L44.4172 28.1769L46.188 31.6975L47.1493 34.9364L47.5035 35.9222H48.1106V35.3589L48.6166 28.6933L49.5273 20.5256L50.438 10.0108L50.7415 7.05356L52.2088 3.48605L55.1433 1.56148L57.42 2.64112L59.292 5.31674L59.039 7.05356L57.926 14.2824L55.7504 25.5952L54.3337 33.1996H55.1433L56.1046 32.2138L59.9497 27.1442L66.3752 19.0704L69.2085 15.8784L72.5478 12.3579L74.6728 10.668H78.7203L81.6548 15.0804L80.3394 19.6337L76.1906 24.8911L72.7502 29.3504L67.8172 35.9595L64.7562 41.2734L65.0307 41.7118L65.7681 41.6489L76.8989 39.255L82.9197 38.1753L90.1041 36.9549L93.3422 38.457L93.6963 40.006L92.4315 43.151L84.7411 45.0287L75.7353 46.8594L62.3244 50.0164L62.1759 50.1358L62.3512 50.3958L68.399 50.9432L70.9794 51.084H77.3037L89.0922 51.9759L92.1785 53.9944L93.9999 56.4822L93.6963 58.4068L88.9404 60.8008L82.5655 59.2987L67.6401 55.7312L62.5301 54.4638H61.8217V54.8862L66.0717 59.064L73.9139 66.1051L83.6786 75.2116L84.1845 77.4648L82.9197 79.2485L81.6042 79.0608L73.0032 72.5829L69.6639 69.6726L62.1759 63.3356H61.67V63.9928L63.3902 66.5276L72.5478 80.2812L73.0032 84.5059L72.3454 85.8672L69.9675 86.7121L67.3871 86.2427L61.9735 78.6852L56.4587 70.2359L52.0064 62.6315L51.4687 62.971L48.8189 91.2654L47.6047 92.7206L44.7714 93.8002L42.3934 92.0164L41.1286 89.1061L42.3934 83.3324L43.9113 75.8219L45.1255 69.8604L46.2386 62.4437L46.9184 59.9661L46.8583 59.8003L46.3153 59.8916L40.7238 67.5603L32.2239 79.0608L25.4948 86.2427L23.8758 86.8999L21.0931 85.4447L21.3461 82.863L22.9145 80.5629L32.2239 68.7338L37.8399 61.3641L41.4594 57.1337L41.4242 56.5218L41.2244 56.5048L16.489 72.6299L12.0873 73.1932L10.1647 71.4094L10.4176 68.4991L11.3283 67.5603L18.7657 62.4437Z";

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
        <g transform="translate(574 128) scale(.62)">
          <path className={styles.assistantSpark} d={CLAUDE_SPARK_PATH} />
        </g>
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
        <rect x="462" y="286" width="216" height="66" rx="18" />
        <circle cx="492" cy="319" r="13" />
        <path d="M492 311v10M492 327h.01" />
        <text x="516" y="325">
          Data belum lengkap
        </text>
      </g>
    </svg>
  );
}
