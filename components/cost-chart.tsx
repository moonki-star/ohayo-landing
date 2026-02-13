"use client";

import { useState } from "react";
import { useInView } from "@/lib/use-in-view";

const ETF_DATA = [
  { month: 0, etf: 10000, perp: 10000 },
  { month: 3, etf: 10650, perp: 10720 },
  { month: 6, etf: 11180, perp: 11490 },
  { month: 9, etf: 11590, perp: 12310 },
  { month: 12, etf: 11880, perp: 13190 },
  { month: 18, etf: 12150, perp: 14980 },
  { month: 24, etf: 12080, perp: 16920 },
  { month: 36, etf: 11540, perp: 19580 },
];

export function CostChart() {
  const [ref, inView] = useInView(0.3);
  const [hovered, setHovered] = useState<number | null>(null);

  const W = 560,
    H = 280,
    PL = 56,
    PR = 20,
    PT = 20,
    PB = 40;
  const cw = W - PL - PR,
    ch = H - PT - PB;
  const maxVal = 20000,
    minVal = 9000;

  const toX = (i: number) => PL + (i / (ETF_DATA.length - 1)) * cw;
  const toY = (v: number) => PT + ch - ((v - minVal) / (maxVal - minVal)) * ch;

  const makePath = (key: "etf" | "perp") =>
    ETF_DATA.map(
      (d, i) => `${i === 0 ? "M" : "L"}${toX(i)},${toY(d[key])}`
    ).join(" ");

  const etfPath = makePath("etf");
  const perpPath = makePath("perp");

  return (
    <div ref={ref} style={{ width: "100%", maxWidth: "35rem", margin: "0 auto" }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: "100%", height: "auto", overflow: "visible" }}
      >
        {/* Grid lines */}
        {[10000, 13000, 16000, 19000].map((v) => (
          <g key={v}>
            <line
              x1={PL}
              x2={W - PR}
              y1={toY(v)}
              y2={toY(v)}
              stroke="#e8e8ed"
              strokeWidth={1}
            />
            <text
              x={PL - 8}
              y={toY(v) + 4}
              textAnchor="end"
              fill="#B0B0B0"
              fontSize={11}
              fontFamily="var(--font-inter), sans-serif"
            >
              ${(v / 1000).toFixed(0)}k
            </text>
          </g>
        ))}

        {/* X-axis labels */}
        {ETF_DATA.map((d, i) => (
          <text
            key={i}
            x={toX(i)}
            y={H - 8}
            textAnchor="middle"
            fill="#B0B0B0"
            fontSize={11}
            fontFamily="var(--font-inter), sans-serif"
          >
            {d.month}m
          </text>
        ))}

        {/* ETF line */}
        <path
          d={etfPath}
          fill="none"
          stroke="#D0CDC6"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={inView ? "none" : "1000"}
          strokeDashoffset={inView ? 0 : 1000}
          style={{ transition: "stroke-dashoffset 1.5s ease" }}
        />

        {/* OHAYO line */}
        <path
          d={perpPath}
          fill="none"
          stroke="#FF6868"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={inView ? "none" : "1000"}
          strokeDashoffset={inView ? 0 : 1000}
          style={{ transition: "stroke-dashoffset 1.5s ease 0.3s" }}
        />

        {/* Data points & hover areas */}
        {ETF_DATA.map((d, i) => (
          <g
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ cursor: "pointer" }}
          >
            <rect
              x={toX(i) - 16}
              y={PT}
              width={32}
              height={ch}
              fill="transparent"
            />
            <circle
              cx={toX(i)}
              cy={toY(d.etf)}
              r={hovered === i ? 5 : 3}
              fill="#D0CDC6"
              style={{ transition: "r 0.2s" }}
            />
            <circle
              cx={toX(i)}
              cy={toY(d.perp)}
              r={hovered === i ? 5 : 3}
              fill="#FF6868"
              style={{ transition: "r 0.2s" }}
            />
            {hovered === i && (
              <g>
                <rect
                  x={toX(i) - 52}
                  y={toY(d.perp) - 38}
                  width={104}
                  height={30}
                  rx={6}
                  fill="#121212"
                />
                <text
                  x={toX(i)}
                  y={toY(d.perp) - 19}
                  textAnchor="middle"
                  fill="white"
                  fontSize={11}
                  fontWeight={600}
                  fontFamily="var(--font-inter), sans-serif"
                >
                  +${(d.perp - d.etf).toLocaleString()} gap
                </text>
              </g>
            )}
          </g>
        ))}

        {/* Legend */}
        <g transform={`translate(${W - PR - 180}, ${PT})`}>
          <circle cx={0} cy={6} r={4} fill="#FF6868" />
          <text
            x={10}
            y={10}
            fill="#121212"
            fontSize={11}
            fontWeight={500}
            fontFamily="var(--font-inter), sans-serif"
          >
            Perp DEX (OHAYO)
          </text>
          <circle cx={0} cy={24} r={4} fill="#D0CDC6" />
          <text
            x={10}
            y={28}
            fill="#B0B0B0"
            fontSize={11}
            fontWeight={500}
            fontFamily="var(--font-inter), sans-serif"
          >
            3x Leveraged ETF
          </text>
        </g>
      </svg>
    </div>
  );
}
