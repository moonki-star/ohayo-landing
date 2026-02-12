"use client";

import { Button } from "@/components/ui/button";
import { OhayoLogo } from "@/components/ohayo-logo";
import { Globe, Settings } from "lucide-react";

export function Navbar() {
  return (
    <nav className="pointer-events-auto flex w-full items-center justify-between px-6 py-4">
      {/* Left: Logo */}
      <OhayoLogo />

      {/* Center: Navigation Links */}
      <div className="flex items-center gap-8">
        <NavLink active>Trade</NavLink>
        <NavLink>Portfolio</NavLink>
        <NavLink>Me</NavLink>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        <Button className="rounded-full bg-ohayo-coral px-6 text-white hover:bg-ohayo-coral-dark">
          Connect
        </Button>
        <button className="rounded-full p-2 text-gray-500 transition-colors hover:bg-black/5 hover:text-gray-800">
          <Globe className="h-5 w-5" />
        </button>
        <button className="rounded-full p-2 text-gray-500 transition-colors hover:bg-black/5 hover:text-gray-800">
          <Settings className="h-5 w-5" />
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
      className={`text-sm font-medium transition-colors ${
        active ? "text-gray-900" : "text-gray-500 hover:text-gray-800"
      }`}
    >
      {children}
    </button>
  );
}
