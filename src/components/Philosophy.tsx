"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Philosophy() {
  const philContainerRef = useRef<HTMLElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (philContainerRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: philContainerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      });

      if (title1Ref.current) {
        tl.fromTo(title1Ref.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, 0);
      }
      if (title2Ref.current) {
        tl.fromTo(title2Ref.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, 0);
      }
      if (textRef.current) {
        tl.fromTo(textRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.5);
      }
    }
  }, []);

  return (
    <section ref={philContainerRef} id="philosophy" className="py-32 md:py-48 bg-[#050505] relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=3840&auto=format&fit=crop" className="w-full h-full object-cover" alt="Luxury Car Detail" />
      </div>
      
      <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
        <h2 className="font-space-grotesk text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white uppercase italic leading-none mb-6">
          <span ref={title1Ref} className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">RIGOR</span>
          <span ref={title2Ref} className="block text-[#FACC15]">ABSOLUTO.</span>
        </h2>
        <p ref={textRef} className="text-gray-400 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
          Não entregamos limpeza; exercemos a custódia da perfeição técnica. Onde outros veem uma superfície, nós enxergamos um legado de engenharia que exige critério, precisão e uma estética atemporal.
        </p>
      </div>
    </section>
  );
}
