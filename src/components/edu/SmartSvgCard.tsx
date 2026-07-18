"use client";

import {
  type ReactNode,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type SmartSvgCardRow = {
  text: string;
  y: number;
  className?: string;
  align?: "start" | "center";
  leadingWidth?: number;
  trailingWidth?: number;
  /** When false, long text is compressed instead of wrapped. Default true. */
  wrap?: boolean;
};

export type SmartSvgCardLayout = {
  x: number;
  width: number;
  centerX: number;
  y: number;
  height: number;
  paddingX: number;
};

const TEXT_MEASUREMENT_SAFETY = 6;
const DEFAULT_LINE_HEIGHT = 20;
const BOTTOM_PAD = 12;

type DrawnLine = {
  key: string;
  text: string;
  y: number;
  align: "start" | "center";
  className?: string;
  leadingWidth: number;
  compressTo?: number;
};

function tokenize(text: string): string[] {
  return text.split(/(\s+|\/)/).filter((token) => token.length > 0);
}

function wrapToWidth(
  text: string,
  maxWidth: number,
  measure: (value: string) => number,
): { text: string; width: number }[] {
  if (maxWidth <= 0) return [{ text, width: measure(text) }];

  const full = measure(text);
  if (full <= maxWidth) return [{ text, width: full }];

  const tokens = tokenize(text);
  const lines: { text: string; width: number }[] = [];
  let current = "";

  const pushCurrent = () => {
    if (!current) return;
    lines.push({ text: current, width: measure(current) });
    current = "";
  };

  for (const token of tokens) {
    const candidate = current + token;
    if (!current || measure(candidate) <= maxWidth) {
      current = candidate;
      continue;
    }

    pushCurrent();

    if (measure(token) <= maxWidth) {
      current = token.replace(/^\s+/, "");
      continue;
    }

    let chunk = "";
    for (const char of token) {
      const next = chunk + char;
      if (chunk && measure(next) > maxWidth) {
        lines.push({ text: chunk, width: measure(chunk) });
        chunk = char;
      } else {
        chunk = next;
      }
    }
    current = chunk;
  }

  pushCurrent();
  return lines.length > 0 ? lines : [{ text, width: full }];
}

export function SmartSvgCard({
  className,
  rectClassName,
  centerX,
  y,
  height,
  minWidth,
  maxWidth,
  paddingX = 16,
  rx = 14,
  rows,
  lineHeight = DEFAULT_LINE_HEIGHT,
  underlay,
  children,
  onWidthChange,
}: {
  className?: string;
  rectClassName?: string;
  centerX: number;
  y: number;
  height: number;
  minWidth: number;
  maxWidth: number;
  paddingX?: number;
  rx?: number;
  rows: SmartSvgCardRow[];
  lineHeight?: number;
  underlay?: (layout: SmartSvgCardLayout) => ReactNode;
  children?: (layout: SmartSvgCardLayout) => ReactNode;
  onWidthChange?: (width: number) => void;
}) {
  const groupRef = useRef<SVGGElement>(null);
  const measureRef = useRef<SVGTextElement>(null);
  const [drawn, setDrawn] = useState<{
    width: number;
    height: number;
    lines: DrawnLine[];
  }>(() => ({
    width: minWidth,
    height,
    lines: rows.map((row, index) => ({
      key: `init-${index}`,
      text: row.text,
      y: row.y,
      align: row.align ?? "start",
      className: row.className,
      leadingWidth: row.leadingWidth ?? 0,
    })),
  }));

  useLayoutEffect(() => {
    let cancelled = false;

    const run = () => {
      if (cancelled) return;
      const probe = measureRef.current;
      if (!probe) return;

      const measureText = (value: string) => {
        probe.textContent = value;
        return probe.getComputedTextLength();
      };

      const firstBaseline = rows[0]?.y ?? y + height * 0.65;
      let cursor = firstBaseline;
      const lines: DrawnLine[] = [];
      let widest = minWidth;

      for (const [rowIndex, row] of rows.entries()) {
        const leadingWidth = row.leadingWidth ?? 0;
        const trailingWidth = row.trailingWidth ?? 0;
        const wrap = row.wrap !== false;
        const available = Math.max(
          24,
          maxWidth - paddingX * 2 - leadingWidth - trailingWidth,
        );
        const align = row.align ?? "start";

        if (rowIndex > 0) cursor += 6;

        if (!wrap) {
          const textWidth = measureText(row.text);
          const needed =
            textWidth +
            leadingWidth +
            trailingWidth +
            paddingX * 2 +
            TEXT_MEASUREMENT_SAFETY;
          widest = Math.max(widest, needed);
          const cardWidth = Math.min(maxWidth, Math.ceil(widest));
          const inner = cardWidth - paddingX * 2 - leadingWidth - trailingWidth;
          lines.push({
            key: `${rowIndex}-0-${row.text}`,
            text: row.text,
            y: row.y,
            align,
            className: row.className,
            leadingWidth,
            compressTo: textWidth > inner ? inner : undefined,
          });
          cursor = row.y + lineHeight;
          continue;
        }

        const wrapped = wrapToWidth(row.text, available, measureText);
        for (const [lineIndex, line] of wrapped.entries()) {
          const needed =
            line.width +
            leadingWidth +
            trailingWidth +
            paddingX * 2 +
            TEXT_MEASUREMENT_SAFETY;
          widest = Math.max(widest, needed);
          lines.push({
            key: `${rowIndex}-${lineIndex}-${line.text}`,
            text: line.text,
            y: cursor,
            align,
            className: row.className,
            leadingWidth,
          });
          cursor += lineHeight;
        }
      }

      const cardWidth = Math.min(maxWidth, Math.ceil(widest));
      const lastY = lines[lines.length - 1]?.y ?? firstBaseline;
      const cardHeight = Math.max(height, lastY - y + BOTTOM_PAD);

      setDrawn({ width: cardWidth, height: cardHeight, lines });
    };

    run();
    document.fonts?.ready.then(run);
    return () => {
      cancelled = true;
    };
  }, [height, lineHeight, maxWidth, minWidth, paddingX, rows, y]);

  const layout = useMemo<SmartSvgCardLayout>(
    () => ({
      x: centerX - drawn.width / 2,
      width: drawn.width,
      centerX,
      y,
      height: drawn.height,
      paddingX,
    }),
    [centerX, drawn.height, drawn.width, paddingX, y],
  );

  useLayoutEffect(() => {
    onWidthChange?.(drawn.width);
  }, [drawn.width, onWidthChange]);

  return (
    <g
      ref={groupRef}
      className={className}
      data-smart-card=""
      data-smart-card-overflow="false"
    >
      <text
        ref={measureRef}
        x={-9999}
        y={-9999}
        opacity={0}
        style={{ pointerEvents: "none" }}
      />
      {underlay?.(layout)}
      <rect
        data-smart-card-rect=""
        className={rectClassName}
        x={layout.x}
        y={y}
        width={drawn.width}
        height={drawn.height}
        rx={rx}
      />
      {children?.(layout)}
      {drawn.lines.map((line) => (
        <text
          key={line.key}
          className={line.className}
          data-smart-card-text=""
          x={
            line.align === "center"
              ? centerX
              : layout.x + paddingX + line.leadingWidth
          }
          y={line.y}
          textAnchor={line.align === "center" ? "middle" : "start"}
          textLength={line.compressTo}
          lengthAdjust={line.compressTo ? "spacingAndGlyphs" : undefined}
        >
          {line.text}
        </text>
      ))}
    </g>
  );
}
