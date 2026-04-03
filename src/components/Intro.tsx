"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Intro() {
  const introRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const introWords = gsap.utils.toArray("#intro-scrub span");
    if(introWords.length > 0 && introRef.current) {
      gsap.to(introWords, {
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: 1,
        },
        color: "#FFFFFF",
        stagger: 0.1
      });
    }
  }, []);

  return (
    <section className="py-20 md:py-32 px-6 md:px-20 max-w-[1600px] mx-auto relative z-20 bg-[#050505]">
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-start border-t border-white/10 pt-4 mb-4 lg:mb-0">
          <span className="text-xs font-mono text-[#FACC15]">01 — FILOSOFIA</span>
        </div>
        <div className="col-span-12 lg:col-span-8 lg:col-start-5">
          <h2 id="intro-scrub" ref={introRef} className="font-space-grotesk md:text-5xl lg:text-6xl leading-[1.1] text-3xl font-medium tracking-tight max-w-6xl">
            <span className="inline-block will-change-[color] text-[#ffffff26]">O&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">veículo&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">não&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">é&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">apenas&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">transporte.&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">É&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">uma&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">extensão&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">da&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">sua&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">identidade&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">—&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">para&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">inspirar,&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">para&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">impressionar,&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">para&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">viver.&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">Um&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">grande&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">desperdício&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">seria&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">nunca&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">vivenciar&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">o&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">seu&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">verdadeiro&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">brilho.&nbsp;</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
