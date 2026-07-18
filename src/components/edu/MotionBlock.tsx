"use client";

import { useEffect, useId, useRef, useState } from "react";
import type {
  EduMotionScene,
  EduStoryboardIcon,
  EduStoryboardItem,
} from "@/lib/edu";
import styles from "./MotionBlock.module.css";
import { SmartSvgCard } from "./SmartSvgCard";

type Mode = "web" | "slide";
type SceneVariant = "success" | "missing-data" | "random-format";

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
  items,
  mode,
}: {
  scene: EduMotionScene;
  alt: string;
  caption: string;
  command?: string;
  output?: string;
  items?: EduStoryboardItem[];
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

  const toggleRandomFormat = () => {
    const nextVariant =
      variant === "random-format" ? "success" : "random-format";
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
          {scene === "claude-skill" ? (
            <button
              type="button"
              onClick={toggleMissingData}
              aria-pressed={variant === "missing-data"}
              className={`${styles.control} ${styles.failureControl} ${
                variant === "missing-data" ? styles.activeControl : ""
              }`}
            >
              {variant === "missing-data"
                ? "Pakai Data lagi"
                : "Coba tanpa Data"}
            </button>
          ) : null}
          {scene === "claude-skill-benefits" ? (
            <button
              type="button"
              onClick={toggleRandomFormat}
              aria-pressed={variant === "random-format"}
              className={`${styles.control} ${styles.failureControl} ${
                variant === "random-format" ? styles.activeControl : ""
              }`}
            >
              {variant === "random-format"
                ? "Pakai satu format"
                : "Acak format"}
            </button>
          ) : null}
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

        {scene === "claude-skill" && command && output ? (
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
        {scene === "claude-skill-benefits" ? (
          <ClaudeSkillBenefitsScene
            key={runId}
            running={started}
            paused={paused}
            randomFormat={variant === "random-format"}
            titleId={titleId}
            descId={descId}
            alt={alt}
          />
        ) : null}
        {scene === "edu-storyboard" ? (
          <EduStoryboardScene
            key={runId}
            running={started}
            paused={paused}
            titleId={titleId}
            descId={descId}
            alt={alt}
            items={items ?? []}
          />
        ) : null}
        <span className="sr-only" aria-live="polite">
          {scene === "edu-storyboard"
            ? alt
            : scene === "claude-skill-benefits"
              ? variant === "random-format"
                ? "Tiga hasil memakai format yang berbeda."
                : "Tiga adegan menunjukkan satu perintah, satu format hasil, dan satu skill yang dibagikan ke tim."
              : variant === "missing-data"
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
  const [skillWidth, setSkillWidth] = useState(204);

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
      <path className={styles.guideArrow} d="m584 204 17 10-18 8" />

      <g className={styles.user}>
        <path
          className={styles.userBody}
          d="M28 222c3-25 13-40 29-46l15 14 15-14c16 6 26 21 29 46Z"
        />
        <path
          className={styles.userBodyShade}
          d="m72 190 15-14c16 6 26 21 29 46H72Z"
        />
        <path className={styles.userNeck} d="M64 169h16v13l-8 8-8-8Z" />
        <path
          className={styles.userCollar}
          d="m57 176 15 14-10 10-12-18Zm30 0-15 14 10 10 12-18Z"
        />
        <path className={styles.userShirtLine} d="M72 190v32" />
        <rect
          className={styles.userPocket}
          x="84"
          y="201"
          width="15"
          height="11"
          rx="2"
        />
        <circle className={styles.userFace} cx="72" cy="151" r="25" />
        <g className={styles.userHair}>
          <circle cx="49" cy="141" r="8" />
          <circle cx="52" cy="131" r="9" />
          <circle cx="58" cy="122" r="10" />
          <circle cx="69" cy="118" r="11" />
          <circle cx="81" cy="120" r="11" />
          <circle cx="91" cy="126" r="10" />
          <circle cx="96" cy="136" r="9" />
        </g>
        <circle className={styles.userEye} cx="64" cy="153" r="2.5" />
        <circle className={styles.userEye} cx="81" cy="153" r="2.5" />
        <path className={styles.userSmile} d="M65 163c5 4 10 4 15 0" />
        <path className={styles.userOtherArm} d="M52 186c-8 9-11 20-11 32" />
        <g className={styles.userPhoneArm}>
          <path className={styles.userUpperArm} d="m86 180 19 10-6 13-20-11Z" />
          <path className={styles.userForearm} d="m99 190 8-22 11 4-7 28Z" />
          <circle className={styles.userHand} cx="112" cy="170" r="6" />
          <rect
            className={styles.userPhone}
            x="106"
            y="140"
            width="18"
            height="32"
            rx="3"
            transform="rotate(6 115 156)"
          />
          <path className={styles.userPhoneScreen} d="m112 146 7 1" />
        </g>
        <text x="72" y="249">
          Kamu
        </text>
      </g>

      <SmartSvgCard
        className={`${styles.chip} ${styles.chipOne}`}
        centerX={193}
        y={66}
        height={43}
        minWidth={142}
        maxWidth={210}
        paddingX={14}
        rx={13}
        rows={[{ text: "Tujuan", y: 93, leadingWidth: 22 }]}
      >
        {({ x }) => <circle cx={x + 22} cy="87.5" r="5" />}
      </SmartSvgCard>
      <SmartSvgCard
        className={`${styles.chip} ${styles.chipTwo} ${styles.dataChip}`}
        centerX={218}
        y={128}
        height={43}
        minWidth={142}
        maxWidth={220}
        paddingX={14}
        rx={13}
        rows={[
          {
            text: "Data",
            y: 155,
            leadingWidth: 22,
            trailingWidth: 28,
          },
        ]}
      >
        {({ x, width }) => (
          <>
            <circle cx={x + 22} cy="149.5" r="5" />
            <path
              className={styles.dataMissingMarker}
              d={`m${x + width - 32} 140 14 19m0-19-14 19`}
            />
          </>
        )}
      </SmartSvgCard>
      <SmartSvgCard
        className={`${styles.chip} ${styles.chipThree}`}
        centerX={201.5}
        y={190}
        height={43}
        minWidth={175}
        maxWidth={235}
        paddingX={14}
        rx={13}
        rows={[{ text: "Langkah kerja", y: 217, leadingWidth: 22 }]}
      >
        {({ x }) => <circle cx={x + 22} cy="211.5" r="5" />}
      </SmartSvgCard>

      <SmartSvgCard
        className={styles.skill}
        rectClassName={styles.skillCard}
        centerX={382}
        y={108}
        height={116}
        minWidth={204}
        maxWidth={260}
        paddingX={18}
        rx={21}
        rows={[
          {
            text: "Skill tersimpan",
            y: 151,
            className: styles.skillTitle,
            leadingWidth: 40,
          },
          {
            text: command,
            y: 194,
            className: styles.skillCommand,
            align: "center",
          },
        ]}
        underlay={({ x }) => (
          <rect
            className={styles.skillTab}
            x={x + 30}
            y="93"
            width="80"
            height="28"
            rx="10"
          />
        )}
        onWidthChange={setSkillWidth}
      >
        {({ x }) => (
          <>
            <circle cx={x + 34} cy="151" r="15" />
            <path d={`M${x + 34} 141v20M${x + 24} 151h20`} />
          </>
        )}
      </SmartSvgCard>

      <path
        className={styles.connector}
        pathLength="1"
        d={`M${382 + skillWidth / 2 + 1} 165C511 165 528 157 548 157`}
      />
      <path className={styles.connectorHead} d="m535 148 13 9-14 9" />

      <g className={styles.assistant}>
        <circle className={styles.assistantRing} cx="603" cy="157" r="52" />
        <g transform="translate(574 128) scale(.62)">
          <path className={styles.assistantSpark} d={CLAUDE_SPARK_PATH} />
        </g>
        <text x="603" y="230">
          Claude
        </text>
        <g className={styles.assistantAccents}>
          <path d="m646 119 13-10" />
          <path d="m653 138 17-2" />
          <path d="m638 101 4-15" />
        </g>
      </g>

      <SmartSvgCard
        className={styles.command}
        centerX={167.5}
        y={298}
        height={44}
        minWidth={163}
        maxWidth={230}
        paddingX={20}
        rx={15}
        rows={[
          {
            text: command,
            y: 326,
            align: "center",
          },
        ]}
      />

      <SmartSvgCard
        className={`${styles.output} ${styles.successOutput}`}
        centerX={595}
        y={286}
        height={66}
        minWidth={166}
        maxWidth={225}
        paddingX={18}
        rx={18}
        rows={[
          {
            text: output,
            y: 325,
            leadingWidth: 36,
          },
        ]}
      >
        {({ x }) => (
          <>
            <circle cx={x + 29} cy="319" r="13" />
            <path d={`m${x + 23} 319 4 4 8-9`} />
          </>
        )}
      </SmartSvgCard>

      <SmartSvgCard
        className={`${styles.output} ${styles.failureOutput}`}
        centerX={570}
        y={286}
        height={66}
        minWidth={216}
        maxWidth={250}
        paddingX={18}
        rx={18}
        rows={[
          {
            text: "Data belum lengkap",
            y: 325,
            leadingWidth: 36,
          },
        ]}
      >
        {({ x }) => (
          <>
            <circle cx={x + 30} cy="319" r="13" />
            <path d={`M${x + 30} 311v10M${x + 30} 327h.01`} />
          </>
        )}
      </SmartSvgCard>
    </svg>
  );
}

function ClaudeSkillBenefitsScene({
  running,
  paused,
  randomFormat,
  titleId,
  descId,
  alt,
}: {
  running: boolean;
  paused: boolean;
  randomFormat: boolean;
  titleId: string;
  descId: string;
  alt: string;
}) {
  const outputRows = randomFormat
    ? [
        { x: 324, y: 74, width: 82, lineOne: 37, lineTwo: 23 },
        { x: 292, y: 120, width: 130, lineOne: 66, lineTwo: 46 },
        { x: 329, y: 166, width: 72, lineOne: 29, lineTwo: 18 },
      ]
    : [
        { x: 313, y: 74, width: 104, lineOne: 49, lineTwo: 38 },
        { x: 313, y: 120, width: 104, lineOne: 49, lineTwo: 38 },
        { x: 313, y: 166, width: 104, lineOne: 49, lineTwo: 38 },
      ];

  return (
    <svg
      className={`${styles.art} ${styles.benefitsArt} ${
        running ? styles.running : ""
      } ${paused ? styles.paused : ""} ${
        randomFormat ? styles.randomFormat : ""
      }`}
      viewBox="0 0 720 405"
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
    >
      <title id={titleId}>
        {randomFormat
          ? "Tiga hasil dengan format acak"
          : "Tiga adegan Claude Skills"}
      </title>
      <desc id={descId}>
        {alt}
        {randomFormat
          ? " Mode Acak format menampilkan tiga kartu hasil dengan ukuran dan susunan yang berbeda."
          : ""}
      </desc>
      <rect className={styles.backdrop} x="0" y="0" width="720" height="405" />

      <g className={`${styles.benefitPanel} ${styles.benefitTime}`}>
        <g className={styles.paperStack}>
          <rect x="45" y="78" width="72" height="82" rx="10" />
          <rect x="58" y="66" width="72" height="82" rx="10" />
          <path d="M73 87h42M73 100h34M73 113h39" />
        </g>
        <g className={styles.clock}>
          <circle cx="145" cy="124" r="42" />
          <circle cx="145" cy="124" r="5" />
          <path className={styles.clockHand} d="M145 124v-25M145 124l19 10" />
        </g>
        <SmartSvgCard
          className={styles.benefitCommand}
          centerX={120}
          y={183}
          height={39}
          minWidth={164}
          maxWidth={210}
          paddingX={18}
          rx={14}
          rows={[
            {
              text: "/buat-laporan",
              y: 209,
              align: "center",
            },
          ]}
        />
        <SmartSvgCard
          className={styles.benefitLabel}
          centerX={120}
          y={264}
          height={48}
          minWidth={168}
          maxWidth={210}
          paddingX={18}
          rx={16}
          rows={[
            {
              text: "Satu perintah",
              y: 295,
              align: "center",
            },
          ]}
        >
          {(layout) => <StepPin layout={layout} step={1} />}
        </SmartSvgCard>
      </g>

      <FlowArrow
        className={styles.benefitArrowOne}
        fromX={214}
        toX={290}
        y={158}
      />

      <g className={`${styles.benefitPanel} ${styles.benefitConsistent}`}>
        <g className={styles.outputStack}>
          {outputRows.map((row) => (
            <g key={row.y}>
              <rect x={row.x} y={row.y} width={row.width} height="38" rx="12" />
              <circle cx={row.x + 21} cy={row.y + 19} r="10" />
              <path d={`m${row.x + 16} ${row.y + 19} 3 3 6-7`} />
              <path
                className={styles.outputLine}
                d={`M${row.x + 38} ${row.y + 14}h${row.lineOne}M${
                  row.x + 38
                } ${row.y + 24}h${row.lineTwo}`}
              />
            </g>
          ))}
        </g>
        <SmartSvgCard
          className={styles.benefitLabel}
          centerX={365}
          y={264}
          height={48}
          minWidth={168}
          maxWidth={210}
          paddingX={18}
          rx={16}
          rows={[
            {
              text: "Satu format",
              y: 295,
              align: "center",
            },
          ]}
        >
          {(layout) => <StepPin layout={layout} step={2} />}
        </SmartSvgCard>
      </g>

      <FlowArrow
        className={styles.benefitArrowTwo}
        fromX={454}
        toX={530}
        y={158}
      />

      <g className={`${styles.benefitPanel} ${styles.benefitShare}`}>
        <g className={styles.shareFolder}>
          <rect x="548" y="72" width="104" height="80" rx="17" />
          <rect x="564" y="58" width="53" height="27" rx="9" />
          <path d="M575 111h50M575 124h36" />
        </g>
        <g className={styles.shareLines}>
          <path pathLength="1" d="M600 151v30M600 181l-48 26M600 181l48 26" />
        </g>
        <g className={styles.sharePeople}>
          {[552, 600, 648].map((x) => (
            <g key={x}>
              <circle cx={x} cy="213" r="11" />
              <path d={`M${x - 18} 246c3-14 9-22 18-22s15 8 18 22Z`} />
            </g>
          ))}
        </g>
        <SmartSvgCard
          className={styles.benefitLabel}
          centerX={600}
          y={264}
          height={48}
          minWidth={176}
          maxWidth={220}
          paddingX={18}
          rx={16}
          rows={[
            {
              text: "Bagikan skill",
              y: 295,
              align: "center",
            },
          ]}
        >
          {(layout) => <StepPin layout={layout} step={3} />}
        </SmartSvgCard>
      </g>
    </svg>
  );
}

function StepPin({
  layout,
  step,
}: {
  layout: { x: number; y: number };
  step: number;
}) {
  const cx = layout.x + 2;
  const cy = layout.y + 2;
  return (
    <g className={styles.stepPin}>
      <circle cx={cx} cy={cy} r="15" />
      <text x={cx} y={cy + 5} textAnchor="middle">
        {step}
      </text>
    </g>
  );
}

function FlowArrow({
  fromX,
  toX,
  y,
  className,
}: {
  fromX: number;
  toX: number;
  y: number;
  className?: string;
}) {
  const span = Math.max(24, toX - fromX);
  const tip = fromX + span;
  const head = span < 42 ? 11 : 15;
  const shaftEnd = tip - head;
  const mid = (fromX + shaftEnd) / 2;
  const rise = y - Math.min(14, Math.max(8, span * 0.28));

  return (
    <g className={`${styles.flowArrow} ${className ?? ""}`}>
      <path
        className={styles.flowArrowShaft}
        pathLength="1"
        d={`M${fromX} ${y}C${mid - span * 0.18} ${rise} ${mid + span * 0.18} ${rise} ${shaftEnd} ${y}`}
      />
      <path
        className={styles.flowArrowHead}
        d={`M${tip - head} ${y - head * 0.55}L${tip} ${y}L${tip - head} ${y + head * 0.55}Z`}
      />
    </g>
  );
}

const TONE_CLASS: Record<NonNullable<EduStoryboardItem["tone"]>, string> = {
  red: styles.toneRed,
  blue: styles.toneBlue,
  yellow: styles.toneYellow,
  clay: styles.toneClay,
  green: styles.toneGreen,
};

function StoryboardIcon({
  icon,
  x,
  y,
}: {
  icon: EduStoryboardIcon;
  x: number;
  y: number;
}) {
  switch (icon) {
    case "folder":
      return (
        <g transform={`translate(${x} ${y})`}>
          <path className={styles.storySolid} d="M-30-10h20l8 8h32v30H-30Z" />
          <rect
            className={styles.storySolid}
            x="-30"
            y="-2"
            width="60"
            height="30"
            rx="5"
          />
        </g>
      );
    case "file":
      return (
        <g transform={`translate(${x} ${y})`}>
          <path className={styles.storySolid} d="M-18-26h24l14 14v38H-18Z" />
          <path className={styles.storyStroke} d="M6-26v14h14" />
          <path className={styles.storyStroke} d="M-8-4h20M-8 8h16" />
        </g>
      );
    case "slash":
      return (
        <g transform={`translate(${x} ${y})`} className={styles.storyIcon}>
          <rect x="-36" y="-20" width="72" height="40" rx="12" />
          <text x="0" y="8" textAnchor="middle" className={styles.storyGlyph}>
            /
          </text>
        </g>
      );
    case "select":
      return (
        <g transform={`translate(${x} ${y})`} className={styles.storyIcon}>
          <rect x="-38" y="-24" width="76" height="48" rx="12" />
          <rect x="-28" y="-10" width="56" height="20" rx="6" />
          <path d="M18-2l6 6 6-6" />
        </g>
      );
    case "enter":
      return (
        <g transform={`translate(${x} ${y})`} className={styles.storyIcon}>
          <rect x="-36" y="-20" width="72" height="40" rx="12" />
          <path d="M-8-8h18v18H0" />
          <path d="M0 10l-8-6 8-6" />
        </g>
      );
    case "spark":
      return (
        <g transform={`translate(${x} ${y})`} className={styles.storyIconFill}>
          <path d="M0-28 9-9 28 0 9 9 0 28-9 9-28 0-9-9Z" />
        </g>
      );
    case "notes":
      return (
        <g transform={`translate(${x} ${y})`} className={styles.storyIcon}>
          <rect x="-28" y="-26" width="56" height="52" rx="8" />
          <path d="M-14-10h28M-14 2h22M-14 14h18" />
        </g>
      );
    case "list":
      return (
        <g transform={`translate(${x} ${y})`} className={styles.storyIcon}>
          <circle cx="-18" cy="-14" r="5" />
          <circle cx="-18" cy="0" r="5" />
          <circle cx="-18" cy="14" r="5" />
          <path d="M-8-14h32M-8 0h28M-8 14h24" />
        </g>
      );
    case "plus":
      return (
        <g transform={`translate(${x} ${y})`} className={styles.storyIcon}>
          <circle cx="0" cy="0" r="26" />
          <path d="M0-14v28M-14 0h28" />
        </g>
      );
    case "search":
      return (
        <g transform={`translate(${x} ${y})`} className={styles.storyIcon}>
          <circle cx="-4" cy="-4" r="18" />
          <path d="M10 10 24 24" />
        </g>
      );
    case "trigger":
      return (
        <g transform={`translate(${x} ${y})`} className={styles.storyIconFill}>
          <path d="M-6-28 16-2H4l10 32-24-24h14Z" />
        </g>
      );
    case "message":
      return (
        <g transform={`translate(${x} ${y})`} className={styles.storyIcon}>
          <rect x="-32" y="-22" width="64" height="40" rx="12" />
          <path d="M-10 18 0 30 10 18" />
        </g>
      );
    case "sheet":
      return (
        <g transform={`translate(${x} ${y})`} className={styles.storyIcon}>
          <rect x="-30" y="-26" width="60" height="52" rx="6" />
          <path d="M-30-8h60M-30 8h60M-10-26v52M10-26v52" />
        </g>
      );
    case "node":
      return (
        <g transform={`translate(${x} ${y})`} className={styles.storyIcon}>
          <rect x="-34" y="-24" width="68" height="48" rx="14" />
          <circle cx="-14" cy="0" r="7" />
          <path d="M-2 0h24" />
        </g>
      );
    case "tag":
      return (
        <g transform={`translate(${x} ${y})`} className={styles.storyIcon}>
          <path d="M-6-24h28l20 24-20 24H-6L-26 0Z" />
          <circle cx="14" cy="0" r="5" />
        </g>
      );
    case "test":
      return (
        <g transform={`translate(${x} ${y})`} className={styles.storyIcon}>
          <path d="M-18-26h36l-10 30h-16Z" />
          <path d="M-8 4h16v22H-8Z" />
          <path d="M-4 14h8" />
        </g>
      );
    case "lock":
      return (
        <g transform={`translate(${x} ${y})`} className={styles.storyIcon}>
          <rect x="-20" y="-2" width="40" height="30" rx="6" />
          <path d="M-12-2v-12a12 12 0 0 1 24 0v12" />
        </g>
      );
    case "settings":
      return (
        <g transform={`translate(${x} ${y})`} className={styles.storyIcon}>
          <circle cx="0" cy="0" r="11" />
          <path d="M0-26v8M0 18v8M-26 0h8M18 0h8M-18-18-12-12M12 12l6 6M18-18 12-12M-12 12l-6 6" />
        </g>
      );
    default:
      return null;
  }
}

function EduStoryboardScene({
  running,
  paused,
  titleId,
  descId,
  alt,
  items,
}: {
  running: boolean;
  paused: boolean;
  titleId: string;
  descId: string;
  alt: string;
  items: EduStoryboardItem[];
}) {
  const safeItems = items.slice(0, 5);
  const count = Math.max(safeItems.length, 1);
  const gap = 720 / (count + 1);
  const panelWidth = Math.min(156, Math.max(108, gap - 52));
  const panelHalf = panelWidth / 2;
  const arrowY = 168;
  const arrowPad = 6;

  return (
    <svg
      className={`${styles.art} ${styles.storyArt} ${
        running ? styles.running : ""
      } ${paused ? styles.paused : ""}`}
      viewBox="0 0 720 405"
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
    >
      <title id={titleId}>Alur langkah edukasi</title>
      <desc id={descId}>{alt}</desc>
      <rect className={styles.backdrop} x="0" y="0" width="720" height="405" />
      <g className={styles.storyGrid}>
        <path d="M48 72H672M48 333H672" />
        <path d="M96 48V357M624 48V357" />
      </g>

      {safeItems.map((item, index) => {
        if (index === 0) return null;
        const x = gap * (index + 1);
        const prevX = gap * index;
        const arrowFrom = prevX + panelHalf + arrowPad;
        const arrowTo = x - panelHalf - arrowPad;

        return (
          <g
            key={`arrow-${item.label}-${index}`}
            className={styles.storyArrowWrap}
            style={{ ["--story-index" as string]: String(index) }}
          >
            <FlowArrow fromX={arrowFrom} toX={arrowTo} y={arrowY} />
          </g>
        );
      })}

      {safeItems.map((item, index) => {
        const x = gap * (index + 1);
        const toneClass = item.tone ? TONE_CLASS[item.tone] : styles.toneInk;

        return (
          <g
            key={`${item.label}-${index}`}
            className={`${styles.storyStep} ${toneClass}`}
            style={{ ["--story-index" as string]: String(index) }}
          >
            <rect
              className={styles.storyPanel}
              x={x - panelHalf}
              y="104"
              width={panelWidth}
              height="148"
              rx="24"
            />
            <StepPin layout={{ x: x - panelHalf, y: 104 }} step={index + 1} />
            <StoryboardIcon icon={item.icon} x={x} y={164} />
            <SmartSvgCard
              className={styles.storyLabel}
              centerX={x}
              y={278}
              height={44}
              minWidth={Math.min(118, panelWidth - 8)}
              maxWidth={panelWidth}
              paddingX={12}
              rx={14}
              rows={[{ text: item.label, y: 306, align: "center" }]}
            />
          </g>
        );
      })}
    </svg>
  );
}
