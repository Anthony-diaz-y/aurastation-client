"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  LINE_CHART_DEFAULT_MAX,
  LINE_CHART_HEIGHT,
  LINE_CHART_LABEL_Y,
  LINE_CHART_PADDING_X,
  LINE_CHART_WIDTH,
  STRESS_LABELS,
  UNREGISTERED_STRESS_LABEL,
} from "../constants/home.constants";
import { type LineChartPoint, type LineChartProps } from "../interfaces/home.interfaces";
import { buildSmoothPath } from "../utils/buildSmoothPath";

type ChartRenderPoint = LineChartPoint & {
  x: number;
  y: number | null;
};

export default function LineChart({
  data,
  ariaLabel,
  max = LINE_CHART_DEFAULT_MAX,
  className = "",
}: LineChartProps) {
  const uid = useId().replace(/:/g, "");
  const fillId = `fill-${uid}`;
  const shadowId = `shadow-${uid}`;
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  const [hoveredPoint, setHoveredPoint] = useState<ChartRenderPoint | null>(null);

  const innerWidth = LINE_CHART_WIDTH - LINE_CHART_PADDING_X * 2;
  const stepX = data.length > 1 ? innerWidth / (data.length - 1) : 0;

  const allPoints = data.map((entry, index) => ({
    x: LINE_CHART_PADDING_X + index * stepX,
    y:
      entry.value != null
        ? LINE_CHART_HEIGHT - (entry.value / max) * LINE_CHART_HEIGHT
        : null,
    ...entry,
  }));

  const dataPoints = allPoints.filter((point) => point.y != null) as Array<
    (typeof allPoints)[number] & { y: number }
  >;

  const linePath = buildSmoothPath(dataPoints);
  const areaPath =
    dataPoints.length > 1
      ? `${linePath} L ${dataPoints[dataPoints.length - 1].x} ${LINE_CHART_HEIGHT} L ${dataPoints[0].x} ${LINE_CHART_HEIGHT} Z`
      : "";

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [linePath]);

  useEffect(() => {
    const handleGlobalClick = () => setHoveredPoint(null);
    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, []);

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${LINE_CHART_WIDTH} ${LINE_CHART_LABEL_Y + 2}`}
        className={`block h-auto w-full max-h-29.5 ${className}`}
        role="img"
        aria-label={ariaLabel}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5ecfea" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <filter id={shadowId} x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="1.5"
              stdDeviation="2"
              floodOpacity="0.14"
            />
          </filter>
        </defs>

        {areaPath && (
          <path
            d={areaPath}
            fill={`url(#${fillId})`}
            style={{
              opacity: pathLength ? 1 : 0,
              transition: "opacity 0.8s ease 0.4s",
            }}
          />
        )}

        {linePath && (
          <path
            ref={pathRef}
            d={linePath}
            fill="none"
            stroke="#5ecfea"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={pathLength || undefined}
            strokeDashoffset={pathLength || undefined}
            style={
              pathLength
                ? {
                    animation:
                      "home-line-draw 1.1s cubic-bezier(0.4, 0, 0.2, 1) 0.25s forwards",
                  }
                : undefined
            }
          />
        )}

        {allPoints.map((point, index) =>
          point.dot && point.y != null ? (
            <g
              key={`dot-${point.day}-${index}`}
              filter={`url(#${shadowId})`}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPoint(point)}
              onMouseLeave={() => setHoveredPoint(null)}
              onClick={(e) => {
                e.stopPropagation();
                setHoveredPoint((prev) => (prev?.x === point.x ? null : point));
              }}
              style={{
                opacity: 0,
                animation: `home-dot-in 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${0.45 + index * 0.07}s forwards`,
              }}
            >
              <circle cx={point.x} cy={point.y} r={16} fill="transparent" />
              <circle
                cx={point.x}
                cy={point.y}
                r={
                  point.active || (hoveredPoint && hoveredPoint.x === point.x)
                    ? 7
                    : 5.5
                }
                className="transition-all duration-200"
                fill="white"
              />
              <circle
                cx={point.x}
                cy={point.y}
                r={
                  point.active || (hoveredPoint && hoveredPoint.x === point.x)
                    ? 5.5
                    : 4.2
                }
                className="transition-all duration-200"
                fill={point.dot}
              />
            </g>
          ) : null,
        )}

        {allPoints.map((point, index) =>
          point.day ? (
            <text
              key={`label-${point.day}-${index}`}
              x={point.x}
              y={LINE_CHART_LABEL_Y}
              textAnchor="middle"
              fill={point.active ? "#1e293b" : "#94a3b8"}
              fontSize="12"
              fontWeight={point.active ? 700 : 500}
              style={{
                opacity: 0,
                animation: `home-fade-up 0.4s ease ${0.7 + index * 0.04}s forwards`,
              }}
            >
              {point.day}
            </text>
          ) : null,
        )}
      </svg>

      {hoveredPoint && (
        <div
          className="absolute z-30 flex flex-col items-center pointer-events-none transition-all duration-150 ease-out select-none bg-[#0c5395] text-white px-3 py-1.5 rounded-xl shadow-lg border border-[#36A9E1]"
          style={{
            left: `${(hoveredPoint.x / LINE_CHART_WIDTH) * 100}%`,
            top: `${((hoveredPoint.y ?? 0) / (LINE_CHART_LABEL_Y + 2)) * 100 - 45}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="text-[10px] font-black uppercase tracking-widest text-[#36A9E1] leading-none mb-0.5">
            {hoveredPoint.value} BPM
          </span>
          <span className="text-[9px] font-extrabold tracking-wide text-white/90 whitespace-nowrap leading-none">
            {STRESS_LABELS[hoveredPoint.stressLevel || ""] || UNREGISTERED_STRESS_LABEL}
          </span>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0c5395] rotate-45 border-r border-b border-[#36A9E1]" />
        </div>
      )}
    </div>
  );
}
