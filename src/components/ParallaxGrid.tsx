"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CardImage from "@/components/CardImage";

export default function ParallaxGrid() {
  const gridContainerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (gridContainerRef.current && leftColRef.current && rightColRef.current) {
      if (window.innerWidth > 768) {
        gsap.to(leftColRef.current, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: gridContainerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(rightColRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: gridContainerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }
  }, []);

  return (
    <section ref={gridContainerRef} id="gallery" className="relative py-20 md:py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div ref={leftColRef} className="flex flex-col gap-8 md:gap-16 mt-0 md:mt-24">
          <div className="group relative overflow-hidden rounded-sm aspect-[4/5]">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
            <CardImage 
              src="/images/snow-foam-luxury.jpg" 
              alt="Lavagem Detalhada Carro Luxo" 
              title="LAVAGEM DETALHADA"
              category="PROJETO 01"
              className="grayscale mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
              <span className="text-white text-xs font-mono tracking-widest uppercase opacity-80">01</span>
              <h3 className="text-white text-xl font-medium mt-1">LAVAGEM DETALHADA</h3>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-sm aspect-[4/3]">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
            <CardImage 
              src="/images/clay-bar.jpg" 
              alt="McLaren 720S Descontaminação" 
              title="DESCONTAMINAÇÃO"
              category="PROJETO 02"
              className="grayscale mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
              <span className="text-white text-xs font-mono tracking-widest uppercase opacity-80">02</span>
              <h3 className="text-white text-xl font-medium mt-1">DESCONTAMINAÇÃO</h3>
            </div>
          </div>
        </div>

        <div ref={rightColRef} className="flex flex-col gap-8 md:gap-16">
          <div className="group relative overflow-hidden rounded-sm aspect-[4/3]">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
            <CardImage 
              src="/images/polishing-compound.jpg" 
              alt="Ferrari SF90 Polimento Técnico" 
              title="POLIMENTO TÉCNICO"
              category="PROJETO 03"
              className="grayscale mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
              <span className="text-white text-xs font-mono tracking-widest uppercase opacity-80">03</span>
              <h3 className="text-white text-xl font-medium mt-1">POLIMENTO TÉCNICO</h3>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-sm aspect-[4/5]">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
            <CardImage 
              src="/images/hydrophobic-beading.jpg" 
              alt="Luxury Car Detail Proteção Cerâmica" 
              title="PROTEÇÃO CERÂMICA"
              category="PROJETO 04"
              className="grayscale mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
              <span className="text-white text-xs font-mono tracking-widest uppercase opacity-80">04</span>
              <h3 className="text-white text-xl font-medium mt-1">PROTEÇÃO CERÂMICA</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
