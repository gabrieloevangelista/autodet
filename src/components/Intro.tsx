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
            <span className="inline-block will-change-[color] text-[#ffffff26]">Veículos&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">extraordinários&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">exigem&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">um&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">cuidado&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">à&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">altura&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">de&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">sua&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">engenharia.&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">Nosso&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">rigor&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">técnico&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">preserva&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">a&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">integridade&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">e&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">o&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">valor&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">do&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">seu&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">ativo&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">de&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">alto&nbsp;</span>
            <span className="inline-block will-change-[color] text-[#ffffff26]">padrão.&nbsp;</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
