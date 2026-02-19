// [3D] Spline 3D 배경을 다시 사용하려면 아래 주석을 해제하고, Hero Background Image 블록을 주석처리하세요.
// import Spline from "@splinetool/react-spline/next";
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
      {/* First Screen: 100vh Hero Image + Overlay */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* [3D] Spline 3D 배경 (사용 시 아래 주석 해제, Hero Background Image 블록 주석처리) */}
        {/* <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/VRBqgzWLXLAaTks0/scene.splinecode" />
        </div> */}

        {/* Hero Background Image */}
        <picture className="absolute inset-0 z-0">
          <source
            srcSet="/images/hero-mobile.webp 768w, /images/hero-tablet.webp 1280w, /images/hero-desktop.webp 1920w, /images/hero-2k.webp 2560w, /images/hero-4k.webp 3840w"
            sizes="100vw"
            type="image/webp"
          />
          <source
            srcSet="/images/hero-mobile.jpg 768w, /images/hero-tablet.jpg 1280w, /images/hero-desktop.jpg 1920w, /images/hero-2k.jpg 2560w, /images/hero-4k.jpg 3840w"
            sizes="100vw"
            type="image/jpeg"
          />
          <img
            src="/images/hero-desktop.jpg"
            alt="OHAYO Hero"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
        </picture>

        {/* UI Overlay */}
        <div className="relative z-10 flex h-full w-full flex-col">
          <Navbar />
          <HeroSection />
        </div>
      </section>

      {/* Scrollable Sections */}
      <RealWorldAssetsSection />
      <CapitalEfficiencySection />
      <PriceEfficiencySection />
      <BorderlessTradingSection />
      <CTASection />

      {/* Mobile GNB - sticky bottom */}
      <GNB />
    </main>
  );
}
