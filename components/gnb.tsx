"use client";

import { Home, LineChart, CandlestickChart, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function GNB() {
  return (
    <nav
      className="flex w-full flex-col items-center md:hidden"
      style={{
        position: "sticky",
        bottom: 0,
        zIndex: 50,
        padding: "0.75rem 0",
        background: "#ffffff",
        borderTop: "1px solid #dedede",
      }}
    >
      {/* Contents */}
      <div className="flex w-full max-w-[22.5rem] items-start">
        <GNBButton icon={Home} label="Home" active />
        <GNBButton icon={LineChart} label="Market" />
        <GNBButton icon={CandlestickChart} label="Trade" />
        <GNBButton icon={Users} label="Me" />
      </div>
    </nav>
  );
}

function GNBButton({
  icon: Icon,
  label,
  active,
}: {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}) {
  const color = active ? "#ff6868" : "#d0cdc6";

  return (
    <button
      className={`flex min-w-[4.5rem] flex-1 items-center justify-center gap-2 transition-opacity ${
        active
          ? "cursor-default"
          : "hover:opacity-70 active:opacity-50"
      }`}
      style={{
        padding: "0.5rem 2rem",
        borderRadius: "0.5rem",
      }}
    >
      <Icon className="h-4 w-4 shrink-0" style={{ color }} />
      <span
        className="whitespace-nowrap"
        style={{
          fontSize: "0.875rem",
          fontWeight: 400,
          lineHeight: 1,
          color,
        }}
      >
        {label}
      </span>
    </button>
  );
}
