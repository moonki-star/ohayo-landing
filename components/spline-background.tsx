"use client";

import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";
import { useEffect, useRef } from "react";

const MOBILE_BREAKPOINT = 768;
const MOBILE_ZOOM = 0.65;
const DESKTOP_ZOOM = 1;

export function SplineBackground() {
  const splineRef = useRef<Application | null>(null);

  function handleLoad(spline: Application) {
    splineRef.current = spline;
    adjustZoom(spline);
  }

  useEffect(() => {
    function handleResize() {
      if (splineRef.current) {
        adjustZoom(splineRef.current);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Spline
      scene="https://prod.spline.design/EpEsOG9cJB3780xK/scene.splinecode"
      onLoad={handleLoad}
    />
  );
}

function adjustZoom(spline: Application) {
  const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
  spline.setZoom(isMobile ? MOBILE_ZOOM : DESKTOP_ZOOM);
}
