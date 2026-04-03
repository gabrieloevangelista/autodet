"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

export default function AnimateProvider({ children }: { children: React.ReactNode }) {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.stop(); // Stop scroll during preload

    lenis.on('scroll', ScrollTrigger.update);
    
    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0, 0);

    // Make lenis globally available for other component's effects if needed
    (window as any).lenis = lenis;

    // Lock body temporarily
    gsap.set("body", { opacity: 1 });

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
