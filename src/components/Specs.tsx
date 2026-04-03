"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Specs() {
  const specsRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const specItems = gsap.utils.toArray<HTMLElement>('.spec-item');
    specItems.forEach((item, i) => {
      gsap.fromTo(item, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          }
        }
      );
    });
  }, []);

  return (
    <section ref={specsRef} id="specs" className="py-24 md:py-32 bg-[#0A0A0A] border-y border-white/10 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="spec-item col-span-1">
            <h4 className="text-[#FACC15] font-mono text-sm tracking-widest mb-4">01 // PRECISÃO</h4>
            <div className="text-white font-space-grotesk text-3xl mb-2">Microns</div>
            <p className="text-gray-400 text-sm leading-relaxed">Avaliação de espessura de verniz ponto a ponto pré-polimento.</p>
          </div>
          <div className="spec-item col-span-1 border-white/10 md:border-l md:pl-8">
            <h4 className="text-[#FACC15] font-mono text-sm tracking-widest mb-4">02 // TEMPO</h4>
            <div className="text-white font-space-grotesk text-3xl mb-2">40h+</div>
            <p className="text-gray-400 text-sm leading-relaxed">Média de horas dedicadas por veículo nos pacotes flagship.</p>
          </div>
          <div className="spec-item col-span-1 border-white/10 md:border-l md:pl-8">
            <h4 className="text-[#FACC15] font-mono text-sm tracking-widest mb-4">03 // PRODUTOS</h4>
            <div className="text-white font-space-grotesk text-3xl mb-2">Tier 1</div>
            <p className="text-gray-400 text-sm leading-relaxed">Uso exclusivo de compostos e cerâmicas alemãs e japonesas.</p>
          </div>
          <div className="spec-item col-span-1 border-white/10 md:border-l md:pl-8">
            <h4 className="text-[#FACC15] font-mono text-sm tracking-widest mb-4">04 // RESULTADO</h4>
            <div className="text-white font-space-grotesk text-3xl mb-2">99%</div>
            <p className="text-gray-400 text-sm leading-relaxed">Taxa de correção de defeitos alcançável em vernizes originais.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
