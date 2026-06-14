"use client";

import { useEffect, useId, useRef, useState } from "react";
import { buildSmoothPath } from "../utils/buildSmoothPath";
import { LineChartPoint } from "../interfaces/home.interfaces";

type LineChartProps = {
  data: LineChartPoint[];
  ariaLabel: string;
  max?: number;
  className?: string;
};

const WIDTH = 360;
const CHART_HEIGHT = 88;
const LABEL_Y = 112;
const PADDING_X = 22;

export default function LineChart({
  data,
  ariaLabel,
  max = 90,
  className = "",
}: LineChartProps) {
  const uid = useId().replace(/:/g, "");
  const fillId = `fill-${uid}`;
  const shadowId = `shadow-${uid}`;
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  const innerWidth = WIDTH - PADDING_X * 2;
  const stepX = innerWidth / (data.length - 1);

  const points = data.map((entry, index) => ({
    x: PADDING_X + index * stepX,
    y: CHART_HEIGHT - (entry.value / max) * CHART_HEIGHT,
    ...entry,
  }));

  const linePath = buildSmoothPath(points);
  const areaPath = `${linePath} L ${WIDTH - PADDING_X} ${CHART_HEIGHT} L ${PADDING_X} ${CHART_HEIGHT} Z`;

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [linePath]);

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${LABEL_Y + 2}`}
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
          <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodOpacity="0.14" />
        </filter>
      </defs>

      <path
        d={areaPath}
        fill={`url(#${fillId})`}
        style={{
          opacity: pathLength ? 1 : 0,
          transition: "opacity 0.8s ease 0.4s",
        }}
      />

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

      {points.map((point, index) =>
        point.dot ? (
          <g
            key={point.day}
            filter={`url(#${shadowId})`}
            style={{
              opacity: 0,
              animation: `home-dot-in 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${0.45 + index * 0.07}s forwards`,
            }}
          >
            <circle
              cx={point.x}
              cy={point.y}
              r={point.active ? 7 : 5.5}
              fill="white"
            />
            <circle
              cx={point.x}
              cy={point.y}
              r={point.active ? 5.5 : 4.2}
              fill={point.dot}
            />
          </g>
        ) : null,
      )}

      {points.map((point, index) => (
        <text
          key={`label-${point.day}`}
          x={point.x}
          y={LABEL_Y}
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
      ))}
    </svg>
  );
}
