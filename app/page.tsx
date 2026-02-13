import Spline from "@splinetool/react-spline/next";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { RealWorldAssetsSection } from "@/components/real-world-assets-section";
import { CapitalEfficiencySection } from "@/components/capital-efficiency-section";
import { PriceEfficiencySection } from "@/components/price-efficiency-section";
import { BorderlessTradingSection } from "@/components/borderless-trading-section";
import { CTASection } from "@/components/cta-section";
import { GNB } from "@/components/gnb";

export default function Home() {
  return (
    <main>
      {/* First Screen: 100vh Spline 3D + Hero Overlay */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Spline 3D Background */}
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/VRBqgzWLXLAaTks0/scene.splinecode" />
        </div>

        {/* UI Overlay */}
        <div className="pointer-events-none relative z-10 flex h-full w-full flex-col">
          <Navbar />
          <HeroSection />
          <GNB />
        </div>
      </section>

      {/* Scrollable Sections */}
      <RealWorldAssetsSection />
      <CapitalEfficiencySection />
      <PriceEfficiencySection />
      <BorderlessTradingSection />
      <CTASection />
    </main>
  );
}
