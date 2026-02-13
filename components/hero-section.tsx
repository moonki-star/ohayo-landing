export function HeroSection() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(2rem); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="flex w-full max-w-[63.75rem] flex-col items-start px-[1.5rem]">
        <h1
          className="text-left font-extrabold"
          style={{
            fontSize: "2.25rem",
            lineHeight: "2.5rem",
            color: "#121212",
            animation: "fadeInUp 0.8s ease 0.1s both",
          }}
        >
          <span className="md:hidden">
            Liberate your
            <br />
            <span style={{ color: "#450A0A" }}>Financial border</span>
          </span>
          <span
            className="hidden md:block"
            style={{ fontSize: "4.5rem", lineHeight: "4.5rem" }}
          >
            Liberate your
            <br />
            <span style={{ color: "#450A0A" }}>Financial border</span>
          </span>
        </h1>

        <p
          className="mt-[1.5rem] max-w-[31.5rem] text-left text-[0.875rem] leading-[1.25rem]"
          style={{
            color: "#52525B",
            animation: "fadeInUp 0.8s ease 0.3s both",
          }}
        >
          Trade pre-IPO stocks, crypto, and real-world assets with up to 50x
          leverage. No borders, no intermediaries. 24/7.
        </p>
      </div>
    </div>
  );
}
