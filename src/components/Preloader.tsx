"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Preloader() {
  const counterRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    document.body.style.overflow = "hidden";

    // We must ensure the element is there to animate
    const tlLoader = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        const lenis = (window as any).lenis;
        if (lenis) lenis.start();
        ScrollTrigger.refresh(); 
      }
    });

    tlLoader
      .to(counterRef.current, { y: 0, duration: 1, ease: "power4.out" })
      .to(progressRef.current, { width: "100%", duration: 1.5, ease: "power2.inOut" }, "-=0.5")
      .to({ val: 0 }, { 
        val: 100, 
        duration: 1.5, 
        ease: "power2.inOut",
        onUpdate: function() {
          if (counterRef.current) {
            counterRef.current.textContent = Math.round(this.targets()[0].val).toString();
          }
        }
      }, "-=1.5")
      .to(loaderRef.current, { yPercent: -100, duration: 1, ease: "power4.inOut", delay: 0.2 })
      .from("#hero-img", { scale: 1.2, duration: 1.5, ease: "power3.out" }, "-=0.8")
      .to("#hero-title-l", { y: 0, duration: 1, ease: "power4.out" }, "-=1")
      .to("#hero-title-r", { y: 0, duration: 1, ease: "power4.out" }, "-=0.8");

  }, []);

  return (
    <div ref={loaderRef} id="loader" className="fixed inset-0 bg-[#050505] z-[10000] flex justify-center items-center text-white">
      <div className="overflow-hidden mb-6">
        <div ref={counterRef} id="loader-counter" className="font-space-grotesk text-8xl md:text-9xl font-medium tracking-tighter leading-none translate-y-full pb-2">0</div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 overflow-hidden">
        <div ref={progressRef} id="loader-progress" className="w-0 h-full bg-[#FACC15]"></div>
      </div>
    </div>
  );
}
