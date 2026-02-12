import Spline from "@splinetool/react-spline/next";
import { Navbar } from "@/components/navbar";
import { HeroCard } from "@/components/hero-card";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {/* Layer 0: Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/EpEsOG9cJB3780xK/scene.splinecode" />
      </div>

      {/* Layer 1: UI Overlay */}
      <div className="pointer-events-none relative z-10 flex h-full w-full flex-col">
        <Navbar />
        {/* cotentswrapper: Figma flex column, align-items center */}
        <div className="flex flex-1 flex-col items-center">
          {/* contents: Figma max-width 63.75rem, padding 1.5rem, flex column, justify-content center, align-items center, gap 1.5rem */}
          <div className="flex w-full max-w-[63.75rem] flex-1 flex-col items-center justify-center gap-6 p-6">
            <HeroCard />
          </div>
        </div>
      </div>
    </main>
  );
}
