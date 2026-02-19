"use client";

import { useInView } from "@/lib/use-in-view";

export function CapitalEfficiencySection() {
  const [ref, inView] = useInView(0.5, "-10% 0px -10% 0px");

  return (
    <section style={{ background: "#F8F8F8" }}>
      <div className="mx-auto flex w-full max-w-[63.75rem] px-[1.5rem] py-[5rem] md:py-[8rem]">
        {/* Desktop: 2-column horizontal layout / Mobile: vertical stack */}
        <div className="flex w-full flex-col gap-[1.5rem] md:flex-row md:items-center md:justify-between">
          {/* Left: Title + Description + TSLA Box */}
          <div className="flex flex-col items-start gap-[1.5rem] py-[2.75rem] md:flex-1">
            <span
              className="text-[1.5rem] font-extrabold leading-[2rem]"
              style={{ color: "#FF6868" }}
            >
              Capital Efficiency
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
                Same capital,
                <br />
                <span style={{ color: "#FF6868" }}>50x the position</span>
              </span>
              <span
                className="hidden md:block"
                style={{ fontSize: "3.75rem", lineHeight: "3.75rem" }}
              >
                Same capital,
                <br />
                <span style={{ color: "#FF6868" }}>50x the position</span>
              </span>
            </h2>
            <p
              className="text-left text-[0.875rem] leading-[1.25rem]"
              style={{ color: "#52525B" }}
            >
              Maximize your capital efficiency with up to 50x leverage on
              perpetual contracts. The same $1,000 that buys one share of stock
              can control a $50,000 position on OHAYO.
            </p>

            {/* TSLA Example Box */}
            <div
              className="flex w-full max-w-[27.0625rem] items-center justify-between rounded-[0.875rem] border px-[1.5625rem] py-[1.3125rem]"
              style={{
                background: "#FFFFFF",
                borderColor: "#DEDEDE",
                boxShadow:
                  "0 0.25rem 0.375rem -0.0625rem rgba(0,0,0,0.1), 0 0.125rem 0.25rem -0.125rem rgba(0,0,0,0.1)",
              }}
            >
              <div className="flex flex-col gap-[0.5rem]">
                <span
                  className="text-[0.75rem] font-light"
                  style={{ color: "#999999" }}
                >
                  If TSLA moves +10%
                </span>
                <span
                  className="text-[0.75rem] font-light"
                  style={{ color: "#C4B89A" }}
                >
                  Stock → $100 profit
                </span>
              </div>
              <div className="flex flex-col items-end gap-[0.5rem]">
                <span
                  className="text-[0.75rem] font-semibold"
                  style={{ color: "#FF6868" }}
                >
                  OHAYO 50x
                </span>
                <span
                  className="text-[1.5rem] font-semibold"
                  style={{ color: "#121212" }}
                >
                  +$5,000
                </span>
              </div>
            </div>
          </div>

          {/* Right: Comparison Chart - animated bars */}
          <div
            ref={ref}
            className="flex items-end justify-center py-[3.5rem]"
            style={{ gap: "1.75rem" }}
          >
            {comparisons.map((item, i) => (
              <div
                key={item.label}
                className="flex shrink-0 flex-col items-center gap-[0.625rem]"
              >
                <span
                  className="whitespace-nowrap text-[0.8125rem] font-bold"
                  style={{ color: item.valueColor }}
                >
                  {item.value}
                </span>
                <div
                  className="flex w-[4.5rem] shrink-0 rounded-[0.625rem]"
                  style={{
                    height: inView ? item.height : "0rem",
                    background: item.background,
                    transition: `height 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.15}s`,
                  }}
                />
                <span
                  className="whitespace-nowrap text-[0.8125rem] font-semibold"
                  style={{ color: "#121212" }}
                >
                  {item.label}
                </span>
                <span
                  className="whitespace-nowrap text-[0.75rem]"
                  style={{ color: "#B0B0B0" }}
                >
                  $1,000 invested
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const comparisons = [
  {
    value: "$1,000",
    label: "Stock (1x)",
    height: "1.5rem",
    background: "#D0CDC6",
    valueColor: "#D0CDC6",
  },
  {
    value: "$3,000",
    label: "ETF (3x)",
    height: "3.75rem",
    background: "#B0B0B0",
    valueColor: "#B0B0B0",
  },
  {
    value: "$50,000",
    label: "OHAYO (50x)",
    height: "12.5rem",
    background: "linear-gradient(180deg, #FF6868 0%, #FFA3A3 100%)",
    valueColor: "#FF6868",
  },
];
