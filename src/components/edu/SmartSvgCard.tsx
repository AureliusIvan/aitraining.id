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
  underlay?: (layout: SmartSvgCardLayout) => ReactNode;
  children?: (layout: SmartSvgCardLayout) => ReactNode;
  onWidthChange?: (width: number) => void;
}) {
  const groupRef = useRef<SVGGElement>(null);
  const rectRef = useRef<SVGRectElement>(null);
  const textRefs = useRef<Array<SVGTextElement | null>>([]);
  const [measuredWidths, setMeasuredWidths] = useState<number[]>(
    rows.map(() => 0),
  );
  useLayoutEffect(() => {
    let cancelled = false;
    const measure = () => {
      if (cancelled) return;
      setMeasuredWidths(
        rows.map(
          (_, index) => textRefs.current[index]?.getComputedTextLength() ?? 0,
        ),
      );
    };

    measure();
    document.fonts?.ready.then(measure);
    return () => {
      cancelled = true;
    };
  }, [rows]);

  const width = useMemo(() => {
    const required = rows.reduce((largest, row, index) => {
      const rowWidth =
        (measuredWidths[index] ?? 0) +
        (row.leadingWidth ?? 0) +
        (row.trailingWidth ?? 0) +
        paddingX * 2 +
        TEXT_MEASUREMENT_SAFETY;
      return Math.max(largest, rowWidth);
    }, minWidth);
    return Math.min(maxWidth, Math.ceil(required));
  }, [maxWidth, measuredWidths, minWidth, paddingX, rows]);

  const layout = useMemo<SmartSvgCardLayout>(
    () => ({
      x: centerX - width / 2,
      width,
      centerX,
      y,
      height,
      paddingX,
    }),
    [centerX, height, paddingX, width, y],
  );

  useLayoutEffect(() => {
    onWidthChange?.(width);
  }, [onWidthChange, width]);

  useLayoutEffect(() => {
    if (!measuredWidths.some((value) => value > 0)) return;

    const frame = requestAnimationFrame(() => {
      const group = groupRef.current;
      const rect = rectRef.current?.getBBox();
      if (!group || !rect) return;

      const overflow = rows.some((row, index) => {
        const text = textRefs.current[index]?.getBBox();
        if (!text) return false;
        const left =
          row.align === "center"
            ? rect.x + paddingX
            : rect.x + paddingX + (row.leadingWidth ?? 0);
        const right = rect.x + rect.width - paddingX - (row.trailingWidth ?? 0);
        return text.x < left - 0.5 || text.x + text.width > right + 0.5;
      });

      group.dataset.smartCardOverflow = String(overflow);
      if (overflow && process.env.NODE_ENV !== "production") {
        console.error("SmartSvgCard overflow detected", {
          rows: rows.map((row) => row.text),
          rect,
        });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [measuredWidths, paddingX, rows]);

  return (
    <g
      ref={groupRef}
      className={className}
      data-smart-card=""
      data-smart-card-overflow="pending"
    >
      {underlay?.(layout)}
      <rect
        ref={rectRef}
        className={rectClassName}
        data-smart-card-rect=""
        x={layout.x}
        y={y}
        width={width}
        height={height}
        rx={rx}
      />
      {children?.(layout)}
      {rows.map((row, index) => {
        const align = row.align ?? "start";
        const available =
          width -
          paddingX * 2 -
          (row.leadingWidth ?? 0) -
          (row.trailingWidth ?? 0);
        const shouldCompress = (measuredWidths[index] ?? 0) > available;

        return (
          <text
            // biome-ignore lint/suspicious/noArrayIndexKey: fixed SVG label rows
            key={index}
            ref={(node) => {
              textRefs.current[index] = node;
            }}
            className={row.className}
            data-smart-card-text=""
            x={
              align === "center"
                ? centerX
                : layout.x + paddingX + (row.leadingWidth ?? 0)
            }
            y={row.y}
            textAnchor={align === "center" ? "middle" : "start"}
            textLength={shouldCompress ? available : undefined}
            lengthAdjust={shouldCompress ? "spacingAndGlyphs" : undefined}
          >
            {row.text}
          </text>
        );
      })}
    </g>
  );
}
