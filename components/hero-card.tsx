"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroCard() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        borderRadius: '2rem',
        background: 'rgba(255, 255, 255, 0.33)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        boxShadow: '0 8px 8px 0 rgba(0, 0, 0, 0.15)',
        backdropFilter: 'blur(15px) saturate(1.41)',
        WebkitBackdropFilter: 'blur(15px) saturate(1.41)',
      }}
    >
      {/* Figma Glass: light -45deg 80% */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          borderRadius: '2rem',
          background: 'linear-gradient(-45deg, transparent 10%, rgba(255,255,255,0.80) 50%, transparent 90%)',
          mixBlendMode: 'overlay',
        }}
      />

      {/* Content (above glass layer) */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-6">
        {/* Text group */}
        <div className="flex flex-col items-center gap-4">
          {/* Title */}
          <h1
            className="text-center font-extrabold leading-normal"
            style={{ fontSize: '3rem', color: '#121212' }}
          >
            Trade Real-World Assets,
            <br />
            On-Chain
          </h1>

          {/* Description */}
          <p
            className="max-w-md text-center text-sm leading-normal"
            style={{ color: '#121212' }}
          >
            Enter a referral code to earn a share of trading fees. Or become an
            affiliate, grow your network, and earn even more commission.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pointer-events-auto">
          <Button
            variant="outline"
            size="lg"
            className="group rounded-full border-gray-200 bg-white/30 px-8 text-sm font-medium text-ohayo-coral backdrop-blur-sm transition-all hover:bg-white/50"
          >
            View Trade
            <ArrowRight className="ml-2 h-4 w-4 text-ohayo-coral transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
