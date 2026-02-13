import { CostChart } from "@/components/cost-chart";

export function PriceEfficiencySection() {
  return (
    <section style={{ background: "#FFFFFF" }}>
      <div className="mx-auto flex w-full max-w-[63.75rem] flex-col items-center px-[1.5rem] py-[3.5rem]">
        {/* Title */}
        <div className="flex w-full flex-col items-center gap-[1.5rem] py-[2.75rem]">
          <span
            className="text-[1.5rem] font-extrabold leading-[2rem]"
            style={{ color: "#FF6868" }}
          >
            Price Efficiency
          </span>
          <h2
            className="text-center font-extrabold"
            style={{
              fontSize: "2.25rem",
              lineHeight: "2.5rem",
              color: "#121212",
            }}
          >
            <span className="md:hidden">
              Better than leveraged{" "}
              <span style={{ color: "#FF6868" }}>ETFs</span>
            </span>
            <span
              className="hidden md:block"
              style={{ fontSize: "3.75rem", lineHeight: "3.75rem" }}
            >
              Better than leveraged{" "}
              <span style={{ color: "#FF6868" }}>ETFs</span>
            </span>
          </h2>
          <p
            className="max-w-[40rem] text-center text-[0.875rem] leading-[1.25rem]"
            style={{ color: "#52525B" }}
          >
            Leveraged ETFs lose value over time due to daily rebalancing and
            management fees. Perpetual contracts on OHAYO don&apos;t suffer from
            volatility decay.
          </p>
        </div>

        {/* Cost Chart */}
        <CostChart />

        {/* Feature Cards */}
        <div className="mt-[2.5rem] grid w-full grid-cols-1 gap-[1.25rem] md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-[0.625rem] rounded-[0.875rem] p-[1.5rem] text-center"
              style={{ background: "#F8F8F8" }}
            >
              <span className="text-[1.5rem]">{feature.emoji}</span>
              <span
                className="text-[0.875rem] font-semibold"
                style={{ color: "#121212" }}
              >
                {feature.title}
              </span>
              <span
                className="text-[0.8125rem] leading-[1.375rem]"
                style={{ color: "#B0B0B0" }}
              >
                {feature.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    emoji: "📉",
    title: "No Volatility Decay",
    description:
      "ETFs rebalance daily, eroding returns in volatile markets",
  },
  {
    emoji: "💸",
    title: "0% Management Fee",
    description: "No annual expense ratio eating into your position",
  },
  {
    emoji: "🎯",
    title: "Precise Leverage",
    description:
      "Get exactly the leverage you want, not a fixed 2x or 3x",
  },
];
