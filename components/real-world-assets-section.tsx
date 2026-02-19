"use client";

import { TickerRing } from "@/components/ticker-ring";
import { useState, useEffect } from "react";

const COMPANY_NAMES = [
  "SpaceX",
  "Meta",
  "NVDA",
  "Microsoft",
  "Netflix",
  "Tesla",
  "Apple",
  "Amazon",
  "Google",
  "Intel",
];

export function RealWorldAssetsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % COMPANY_NAMES.length);
        setIsAnimating(false);
      }, 300);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const companyName = COMPANY_NAMES[currentIndex];

  return (
    <section style={{ background: "#FFFFFF" }}>
      <style>{`
        @keyframes tickerIn {
          from { opacity: 0; transform: translateY(0.5rem); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tickerOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-0.5rem); }
        }
      `}</style>
      <div className="mx-auto flex w-full max-w-[63.75rem] flex-col px-[1.5rem] py-[5rem] md:py-[8rem]">
        {/* Desktop: 2-column layout / Mobile: vertical stack */}
        <div className="flex w-full flex-col items-center gap-[4rem] md:flex-row md:items-center md:justify-between">
          {/* Left: Title Section */}
          <div className="flex w-full flex-col items-start gap-[1.5rem] py-[2.75rem] md:flex-1">
            <span
              className="text-[1.5rem] font-extrabold leading-[2rem]"
              style={{ color: "#FF6868" }}
            >
              Real World Assets
            </span>
            <h2
              className="text-left font-extrabold"
              style={{
                fontSize: "2.25rem",
                lineHeight: "2.5rem",
                color: "#121212",
              }}
            >
              <span className="md:hidden">
                Invest in{" "}
                <span
                  style={{
                    color: "#FF6868",
                    display: "inline-block",
                    animation: isAnimating
                      ? "tickerOut 0.3s ease forwards"
                      : "tickerIn 0.3s ease forwards",
                  }}
                >
                  {companyName}
                </span>
                <br />
                before it goes public
              </span>
              <span
                className="hidden md:block"
                style={{ fontSize: "3.75rem", lineHeight: "3.75rem" }}
              >
                Invest in{" "}
                <span
                  style={{
                    color: "#FF6868",
                    display: "inline-block",
                    animation: isAnimating
                      ? "tickerOut 0.3s ease forwards"
                      : "tickerIn 0.3s ease forwards",
                  }}
                >
                  {companyName}
                </span>
                <br />
                before it goes public
              </span>
            </h2>
            <p
              className="text-left text-[0.875rem] leading-[1.25rem]"
              style={{ color: "#52525B" }}
            >
              Access pre-IPO companies, unlisted equities, and trending tickers —
              all in one decentralized exchange. From Tesla to OnlyFans, trade the
              assets traditional markets won&apos;t let you.
            </p>
          </div>

          {/* Right: TickerRing */}
          <div className="flex shrink-0 items-center justify-center">
            <TickerRing />
          </div>
        </div>
      </div>
    </section>
  );
}
