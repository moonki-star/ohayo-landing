export function OhayoLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-xl font-bold tracking-tight text-ohayo-coral">
        OHAYO
      </span>
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-ohayo-coral"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Sparkle / rising sun icon */}
        <path d="M12 3v1m0 16v1m-8-9H3m18 0h-1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707" />
        <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
      </svg>
    </div>
  );
}
