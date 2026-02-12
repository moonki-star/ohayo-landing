"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroCard() {
  return (
    <div className="w-full max-w-2xl px-6">
      <div
        className="relative overflow-hidden rounded-3xl border border-white/25 px-12 py-14 shadow-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.33)',
          backdropFilter: 'blur(15px) saturate(1.41)',
          WebkitBackdropFilter: 'blur(15px) saturate(1.41)',
        }}
      >
        {/* Light reflection: -45deg, 80% */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl"
          style={{
            background: 'linear-gradient(-45deg, transparent 20%, rgba(255,255,255,0.8) 50%, transparent 80%)',
            mixBlendMode: 'soft-light',
          }}
        />

        {/* Content (above light layer) */}
        <div className="relative z-10">
          {/* Title */}
          <h1 className="mb-4 text-center text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Trade Real-World Assets,
            <br />
            On-Chain
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-md text-center text-base leading-relaxed text-gray-600">
            Enter a referral code to earn a share of trading fees. Or become an
            affiliate, grow your network, and earn even more commission.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center pointer-events-auto">
            <Button
              variant="outline"
              className="group rounded-full border-ohayo-coral/20 bg-white/70 px-8 py-6 text-base text-ohayo-coral shadow-sm backdrop-blur-sm transition-all hover:bg-white/90 hover:shadow-md"
            >
              View Trade
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
