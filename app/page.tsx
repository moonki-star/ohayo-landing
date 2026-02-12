import Spline from "@splinetool/react-spline/next";
import { Navbar } from "@/components/navbar";
import { HeroCard } from "@/components/hero-card";
import { GNB } from "@/components/gnb";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {/* Layer 0: Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/VRBqgzWLXLAaTks0/scene.splinecode" />
      </div>

      {/* Layer 1: UI Overlay */}
      <div className="pointer-events-none relative z-10 flex h-full w-full flex-col">
        <Navbar />

        {/* cotentswrapper: flex column, align-items center */}
        <div className="flex flex-1 flex-col items-center">
          {/* contents: Mobile px-5 centered | Desktop max-width 63.75rem */}
          <div className="flex w-full max-w-[22.0625rem] flex-1 flex-col items-center justify-center px-0 md:max-w-[63.75rem] md:p-6">
            <HeroCard />
          </div>
        </div>

        {/* Bottom Navigation - mobile only */}
        <GNB />
      </div>
    </main>
  );
}
