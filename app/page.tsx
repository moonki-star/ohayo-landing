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
        <div className="flex flex-1 items-center justify-center">
          <HeroCard />
        </div>
      </div>
    </main>
  );
}
