"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroCard() {
  return (
    <div className="w-full max-w-2xl px-6">
      <div
        className="relative overflow-hidden px-12 py-14"
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
        <div className="relative z-10">
          {/* Title */}
          <h1 className="mb-4 text-center text-5xl font-extrabold leading-normal text-gray-900">
            Trade Real-World Assets,
            <br />
            On-Chain
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-md text-center text-sm leading-normal text-gray-900">
            Enter a referral code to earn a share of trading fees. Or become an
            affiliate, grow your network, and earn even more commission.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center pointer-events-auto">
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
    </div>
  );
}
