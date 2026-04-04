"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current.querySelectorAll('.footer-anim'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#020202] text-white py-16 md:py-24 border-t border-white/5 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2 footer-anim">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/images/logo.png" 
                alt="AUTODET SELECT" 
                width={200} 
                height={60} 
                className="w-auto h-10 md:h-12 object-contain"
              />
              <span className="text-[10px] font-mono font-normal tracking-widest text-gray-500 uppercase border border-white/10 px-2 py-0.5 rounded-sm h-fit">Studio</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 text-sm leading-relaxed">
              Curadoria estética automotiva para entusiastas que não aceitam o ordinário.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FACC15] transition-all duration-300">
                <Icon icon="mdi:instagram" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FACC15] transition-all duration-300">
                <Icon icon="ic:baseline-whatsapp" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FACC15] transition-all duration-300">
                <Icon icon="mdi:youtube" className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1 footer-anim">
            <h4 className="font-mono text-xs tracking-widest text-[#FACC15] mb-6">MENU</h4>
            <ul className="space-y-4">
              <li><a href="/#journal" className="text-gray-400 hover:text-white text-sm transition-colors">Processo</a></li>
              <li><a href="/#gallery" className="text-gray-400 hover:text-white text-sm transition-colors">Projetos</a></li>
              <li><a href="/#philosophy" className="text-gray-400 hover:text-white text-sm transition-colors">Filosofia</a></li>
            </ul>
          </div>

          <div className="col-span-1 footer-anim">
            <h4 className="font-mono text-xs tracking-widest text-[#FACC15] mb-6">CONTATO</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">Alphaville, SP</li>
              <li className="text-[#FACC15] text-sm font-medium">Atendimento a Domicílio</li>
              <li className="text-gray-400 text-sm">contato@autodet.com.br</li>
              <li className="text-gray-400 text-sm">+55 11 99999-9999</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 footer-anim">
          <p className="text-gray-600 text-xs font-mono">
            © {new Date().getFullYear()} AUTODET SELECT STUDIO. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex gap-6">
            <a href="/termos" className="text-gray-600 hover:text-gray-300 text-xs font-mono">TERMOS</a>
            <a href="/privacidade" className="text-gray-600 hover:text-gray-300 text-xs font-mono">PRIVACIDADE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
