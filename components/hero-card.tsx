"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroCard() {
  return (
    <div className="w-full max-w-2xl px-6">
      <div
        className="relative overflow-hidden border-none px-12 py-14"
        style={{
          borderRadius: '2rem',
          background: 'rgba(0, 0, 0, 0.00)',
          boxShadow: '0 8px 8px 0 rgba(0, 0, 0, 0.15)',
        }}
      >

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
