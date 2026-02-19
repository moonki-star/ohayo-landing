"use client";

import Image from "next/image";

export function BorderlessTradingSection() {
  return (
    <section style={{ background: "#F8F8F8" }}>
      <div className="mx-auto flex w-full max-w-[63.75rem] flex-col items-center px-[1.5rem] py-[5rem] md:py-[8rem]">
        {/* Title */}
        <div className="flex w-full flex-col items-center gap-[1.5rem] py-[2.75rem]">
          <span
            className="text-[1.5rem] font-extrabold leading-[2rem]"
            style={{ color: "#FF6868" }}
          >
            Global & Decentralized
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
              The new standard for{" "}
              <span style={{ color: "#FF6868" }}>borderless trading</span>
            </span>
            <span
              className="hidden md:block"
              style={{ fontSize: "3.75rem", lineHeight: "3.75rem" }}
            >
              The new standard for{" "}
              <span style={{ color: "#FF6868" }}>borderless trading</span>
            </span>
          </h2>
        </div>

        {/* Feature Cards with hover effect */}
        <div className="grid w-full grid-cols-1 gap-[1.25rem] md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex cursor-default flex-col items-center gap-[1rem] rounded-[1.125rem] border p-[1.8125rem] pb-[2.3125rem] pt-[2.3125rem] text-center"
              style={{
                background: "#FFFFFF",
                borderColor: "#EEEEEE",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-0.25rem)";
                e.currentTarget.style.boxShadow =
                  "0 0.75rem 2.5rem rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <Image
                src={feature.image}
                alt={feature.title}
                width={800}
                height={437}
                className="mb-[0.5rem] w-[65%] object-contain"
                style={{
                  maskImage: "radial-gradient(ellipse 70% 70% at center, black 50%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse 70% 70% at center, black 50%, transparent 100%)",
                }}
              />

              <span
                className="text-[1.125rem] font-semibold leading-[1.75rem]"
                style={{ color: "#121212" }}
              >
                {feature.title}
              </span>
              <span
                className="text-[0.875rem] leading-[1.5rem]"
                style={{ color: "#6e6e80" }}
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
    image: "/images/feature-no-borders.jpg",
    title: "No Borders",
    description:
      "Trade from anywhere in the world. No KYC gatekeeping, no geo-restrictions. One global marketplace for everyone.",
  },
  {
    image: "/images/feature-your-assets.jpg",
    title: "Your Assets, 100% Yours",
    description:
      "Non-custodial trading means your funds never leave your wallet. No counterparty risk, no money printing, no frozen accounts.",
  },
  {
    image: "/images/feature-247-markets.jpg",
    title: "24/7 Markets",
    description:
      "Markets don't sleep and neither does OHAYO. Trade any time — weekdays, weekends, holidays. Always on, always live.",
  },
];
