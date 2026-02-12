"use client";

import { ArrowRight } from "lucide-react";

export function HeroCard() {
  return (
    <div
      className="relative w-full overflow-hidden"
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
      {/* Mobile: py-14 px-2 gap-6 | Desktop: py-6 px-6 gap-6 */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-2 py-14 md:px-6 md:py-6">
        {/* Text group */}
        <div className="flex flex-col items-center gap-2 md:gap-4">
          {/* Title: Mobile 36px/40px | Desktop 3rem/normal */}
          <h1
            className="text-center font-extrabold"
            style={{ color: '#121212' }}
          >
            <span className="block md:hidden" style={{ fontSize: '2.25rem', lineHeight: '2.5rem' }}>
              Trade Real-World Assets,
              <br />
              On-Chain
            </span>
            <span className="hidden md:block" style={{ fontSize: '3rem', lineHeight: 'normal' }}>
              Trade Real-World Assets,
              <br />
              On-Chain
            </span>
          </h1>

          {/* Description: Mobile 14px/20px | Desktop 14px/normal */}
          <p
            className="max-w-md text-center text-sm"
            style={{ color: '#121212', lineHeight: '1.25rem' }}
          >
            Enter a referral code to earn a share of trading fees. Or become an
            affiliate, grow your network, and earn even more commission.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pointer-events-auto">
          {/* Mobile: outline rectangle | Desktop: outline rounded-full */}
          <button
            className="group flex items-center justify-center gap-2 transition-opacity hover:opacity-80 active:opacity-70"
            style={{
              height: '3rem',
              padding: '0.5rem 2rem',
              background: '#fdfdfd',
              border: '1px solid #e5e5e5',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              lineHeight: '1.25rem',
              color: '#ff6868',
              whiteSpace: 'nowrap',
            }}
          >
            View Trade
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" style={{ color: '#ff6868' }} />
          </button>
        </div>
      </div>
    </div>
  );
}
