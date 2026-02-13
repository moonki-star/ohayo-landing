"use client";

import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section style={{ background: "#171717" }}>
      <div className="mx-auto flex w-full max-w-[63.75rem] flex-col items-center px-[1.5rem] py-[6rem]">
        {/* Title */}
        <div className="flex flex-col items-center gap-[1.5rem] py-[2.75rem]">
          <h2
            className="text-center font-extrabold"
            style={{
              fontSize: "2.25rem",
              lineHeight: "2.5rem",
              color: "#FFFFFF",
            }}
          >
            <span className="md:hidden">
              The future
              <br />
              trades here
            </span>
            <span
              className="hidden md:block"
              style={{ fontSize: "3.75rem", lineHeight: "3.75rem" }}
            >
              The future trades here
            </span>
          </h2>
          <p
            className="max-w-[30rem] text-center text-[0.875rem] leading-[1.25rem]"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Join the next generation of traders. No middlemen, no borders, no
            limits.
          </p>
        </div>

        {/* CTA Button */}
        <button
          className="flex items-center justify-center gap-[0.5rem]"
          style={{
            padding: "1rem 2.75rem",
            borderRadius: "0.75rem",
            background: "#FF6868",
            color: "#FFFFFF",
            fontSize: "1rem",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-0.125rem)";
            e.currentTarget.style.boxShadow =
              "0 0.5rem 2rem rgba(255,104,104,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Launch App
          <ArrowRight className="h-[1.25rem] w-[1.25rem]" />
        </button>
      </div>
    </section>
  );
}
