"use client";

import { OhayoLogo } from "@/components/ohayo-logo";
import { OhayoLogoSymbol } from "@/components/ohayo-logo-symbol";
import { Globe, Settings } from "lucide-react";

export function Navbar() {
  return (
    <nav
      className="pointer-events-auto flex w-full items-center justify-between"
      style={{
        padding: "0.625rem",
        borderBottom: "1px solid #dedede",
        background: "#ffffff",
      }}
    >
      {/* Left: Button_Container */}
      <div className="flex items-center" style={{ gap: "0.625rem" }}>
        {/* Mobile: logo symbol only */}
        <div className="md:hidden">
          <OhayoLogoSymbol />
        </div>

        {/* Desktop: full logo + nav links */}
        <div className="hidden md:flex md:items-center" style={{ gap: "1.125rem" }}>
          <OhayoLogo />
          <NavLink active>Trade</NavLink>
          <NavLink>Portfolio</NavLink>
          <NavLink>Me</NavLink>
        </div>
      </div>

      {/* Right: Container */}
      <div className="flex items-center gap-2">
        {/* Connect Button */}
        <button
          className="flex shrink-0 items-center justify-center whitespace-nowrap transition-opacity hover:opacity-80 active:opacity-70"
          style={{
            height: "2.0625rem",
            padding: "0.0625rem 1.0625rem",
            borderRadius: "0.375rem",
            background: "#ff6868",
            color: "#ffffff",
            fontSize: "0.75rem",
            fontWeight: 400,
            lineHeight: "1.9375rem",
          }}
        >
          Connect
        </button>

        {/* Desktop only: Globe + Settings */}
        <button
          className="hidden shrink-0 items-center justify-center transition-colors hover:bg-gray-100 active:bg-gray-200 md:flex"
          style={{
            width: "2rem",
            height: "2rem",
            padding: "0.25rem",
            borderRadius: "0.375rem",
            border: "1px solid #e5e5e5",
          }}
        >
          <Globe className="h-4 w-4" style={{ color: "#121212" }} />
        </button>

        <button
          className="hidden shrink-0 items-center justify-center transition-colors hover:bg-gray-100 active:bg-gray-200 md:flex"
          style={{
            width: "2rem",
            height: "2rem",
            padding: "0.25rem",
            borderRadius: "0.375rem",
            border: "1px solid #e5e5e5",
          }}
        >
          <Settings className="h-4 w-4" style={{ color: "#121212" }} />
        </button>
      </div>
    </nav>
  );
}

function NavLink({
  active,
  children,
}: {
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      className={`flex shrink-0 flex-col items-start justify-center transition-opacity hover:opacity-70 active:opacity-50 ${
        active ? "cursor-default hover:opacity-100" : ""
      }`}
      style={{
        height: "2rem",
        padding: "0.5rem 0.625rem",
        fontSize: "0.75rem",
        fontWeight: 400,
        lineHeight: "1rem",
        color: active ? "#ff6868" : "#121212",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
}
