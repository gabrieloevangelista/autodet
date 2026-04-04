"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { Icon } from '@iconify/react';

export default function TermsPage() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.from(".fade-in", {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out"
    });
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen text-white font-sans">
      <Navigation />
      
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-[1000px] mx-auto">
        <div className="mb-12 fade-in">
          <a href="/" className="inline-flex items-center gap-2 text-[#FACC15] text-xs font-mono tracking-widest uppercase hover:opacity-70 transition-opacity mb-8 group">
            <Icon icon="solar:arrow-left-linear" className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para o Início
          </a>
          <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase">
            TERMOS DE <span className="text-[#FACC15] italic">SERVIÇO</span>
          </h1>
          <p className="text-gray-400 font-mono text-[10px] tracking-widest uppercase border-l border-[#FACC15] pl-4 py-1">AUTODET SELECT STUDIO // ESTÉTICA DE ALTO PADRÃO</p>
        </div>

        <div className="space-y-16 text-gray-300 leading-relaxed fade-in">
          <section className="border-t border-white/5 pt-8">
            <h2 className="text-[#FACC15] font-space-grotesk text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FACC15]"></span> 01. PRESTAÇÃO DE SERVIÇO
            </h2>
            <div className="space-y-4 text-sm md:text-base font-light">
              <p>
                Os serviços da AUTODET SELECT são executados seguindo os mais rigorosos protocolos internacionais de detalhamento automotivo. A utilização do nosso site e a reserva de serviços implicam na aceitação integral destes termos.
              </p>
              <p>
                Nossa atuação é focada em Alphaville e região metropolitana de São Paulo, oferecendo tanto atendimento em nosso estúdio quanto a modalidade "Service at Home" (atendimento a domicílio).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[#FACC15] font-space-grotesk text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FACC15]"></span> 02. RESERVAS E CANCELAMENTOS
            </h2>
            <div className="space-y-4 text-sm md:text-base font-light">
              <p>
                Devido à alta complexidade e ao tempo dedicado a cada projeto, agendamentos devem ser realizados com antecedência. Cancelamentos com menos de 48 horas de aviso prévio podem estar sujeitos à retenção do valor de sinal para cobertura de logística e custos operacionais.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[#FACC15] font-space-grotesk text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FACC15]"></span> 03. RESPONSABILIDADE SOBRE O VEÍCULO
            </h2>
            <div className="space-y-4 text-sm md:text-base font-light">
              <p>
                Embora utilizemos os melhores produtos e ferramentas do mercado mundial, a AUTODET SELECT não se responsabiliza por danos pré-existentes, oxidações profundas ou avarias mecânicas que não tenham relação direta com o processo estético contratado.
              </p>
              <p>
                Solicitamos que todos os objetos de valor sejam removidos do veículo antes da entrega técnica.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[#FACC15] font-space-grotesk text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FACC15]"></span> 04. GARANTIA DE PROTEÇÃO
            </h2>
            <div className="space-y-4 text-sm md:text-base font-light">
              <p>
                Garantias relacionadas a proteções cerâmicas (Ceramic Coating) e PPF são válidas desde que as manutenções sejam realizadas conforme o cronograma estabelecido pelo AUTODET SELECT Studio.
              </p>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}

