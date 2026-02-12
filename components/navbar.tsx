"use client";

import { OhayoLogo } from "@/components/ohayo-logo";
import { Globe, Settings } from "lucide-react";

export function Navbar() {
  return (
    <nav
      className="pointer-events-auto flex w-full items-center justify-between"
      style={{
        padding: "0.625rem 1.125rem",
        borderBottom: "1px solid #dedede",
        background: "#ffffff",
      }}
    >
      {/* Left: Button_Container (logo + nav links) */}
      <div className="flex items-center" style={{ gap: "1.125rem" }}>
        <OhayoLogo />

        {/* Navigation Links */}
        <NavLink active>Trade</NavLink>
        <NavLink>Portfolio</NavLink>
        <NavLink>Me</NavLink>
      </div>

      {/* Right: Container (Connect + icons) */}
      <div className="flex items-center gap-2">
        {/* Connect Button */}
        <button
          className="flex shrink-0 items-center justify-center whitespace-nowrap"
          style={{
            height: "2.0625rem",
            padding: "0 1rem",
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

        {/* Globe Icon Button */}
        <button
          className="flex shrink-0 items-center justify-center"
          style={{
            width: "2rem",
            height: "2rem",
            padding: "0.25rem",
            borderRadius: "0.375rem",
            background: "#fdfdfd",
            border: "1px solid #e5e5e5",
          }}
        >
          <Globe className="h-4 w-4" style={{ color: "#121212" }} />
        </button>

        {/* Settings Icon Button */}
        <button
          className="flex shrink-0 items-center justify-center"
          style={{
            width: "2rem",
            height: "2rem",
            padding: "0.25rem",
            borderRadius: "0.375rem",
            background: "#fdfdfd",
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
      className="flex shrink-0 flex-col items-start justify-center"
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
