"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const TICKERS = [
  { name: "SpaceX", src: "/logos/spacex.svg", color: "#1a1a2e" },
  { name: "Meta", src: "/logos/meta.svg", color: "#1877F2" },
  { name: "NVDA", src: "/logos/nvda.svg", color: "#76B900" },
  { name: "Microsoft", src: "/logos/microsoft.svg", color: "#00A4EF" },
  { name: "Netflix", src: "/logos/netflix.svg", color: "#E50914" },
  { name: "Tesla", src: "/logos/tesla.svg", color: "#CC0000" },
  { name: "Apple", src: "/logos/apple.svg", color: "#000000" },
  { name: "Amazon", src: "/logos/amazon.svg", color: "#FF9900" },
  { name: "Google", src: "/logos/google.svg", color: "#4285F4" },
  { name: "Intel", src: "/logos/intel.svg", color: "#0071C5" },
];

const LOGO_SIZE = 62;
const HALF_LOGO = LOGO_SIZE / 2;
const POSITIONS = TICKERS.map((_, i) => {
  const angle = (i / TICKERS.length) * 360;
  const rad = (angle * Math.PI) / 180;
  const r = 140;
  const cx = 170;
  const cy = 170;
  const xPx = cx + r * Math.cos(rad) - HALF_LOGO;
  const yPx = cy + r * Math.sin(rad) - HALF_LOGO;
  return {
    left: `${Math.round(xPx * 100) / 100}px`,
    top: `${Math.round(yPx * 100) / 100}px`,
  };
});

export function TickerRing() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="relative"
      style={{ width: "21.25rem", height: "21.25rem", margin: "0 auto" }}
    >
      <style>{`
        @keyframes spinRing { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      {/* Rotating ring */}
      <div
        className="absolute inset-0"
        style={{
          animation: mounted ? "spinRing 30s linear infinite" : "none",
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        {TICKERS.map((t, i) => (
          <div
            key={t.name}
            className="absolute flex items-center justify-center"
            style={{
              left: POSITIONS[i].left,
              top: POSITIONS[i].top,
              width: `${LOGO_SIZE}px`,
              height: `${LOGO_SIZE}px`,
              animation: mounted
                ? "spinRing 30s linear infinite reverse"
                : "none",
            }}
          >
            <Image
              src={t.src}
              alt={t.name}
              width={62}
              height={62}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        ))}
      </div>

      {/* Center text */}
      <div
        className="absolute flex flex-col items-center"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <span
          className="text-[0.8125rem] font-semibold tracking-[0.08em]"
          style={{ color: "#B0B0B0" }}
        >
          TRADE
        </span>
        <span
          className="text-[1.25rem] font-bold"
          style={{ color: "#121212" }}
        >
          Any Asset
        </span>
      </div>
    </div>
  );
}
