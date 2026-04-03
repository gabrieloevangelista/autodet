"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { Icon } from '@iconify/react';

export default function PrivacyPage() {
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
            POLÍTICA DE <span className="text-[#FACC15] italic">PRIVACIDADE</span>
          </h1>
          <p className="text-gray-400 font-mono text-[10px] tracking-widest uppercase border-l border-[#FACC15] pl-4 py-1">SEGURANÇA E CONFIDENCIALIDADE // AUTODET</p>
        </div>

        <div className="space-y-16 text-gray-300 leading-relaxed fade-in">
          <section className="border-t border-white/5 pt-8">
            <h2 className="text-[#FACC15] font-space-grotesk text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FACC15]"></span> 01. COMPROMISSO
            </h2>
            <div className="space-y-4 text-sm md:text-base font-light">
              <p>
                A AUTODET preza pela privacidade total de seus clientes, muitos dos quais possuem coleções privadas e veículos de alto valor. O tratamento de seus dados pessoais é realizado com o máximo rigor técnico e jurídico.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[#FACC15] font-space-grotesk text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FACC15]"></span> 02. COLETA DE DADOS
            </h2>
            <div className="space-y-4 text-sm md:text-base font-light">
              <p>
                Coletamos apenas as informações estritamente necessárias para a prestação do serviço: nome, contato e detalhes do veículo. Fotos do processo podem ser tiradas para fins de documentação técnica e portfólio, sempre preservando a privacidade das placas e localizações, exceto quando expressamente autorizado pelo proprietário.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[#FACC15] font-space-grotesk text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FACC15]"></span> 03. USO E PROTEÇÃO
            </h2>
            <div className="space-y-4 text-sm md:text-base font-light">
              <p>
                Seus dados nunca serão compartilhados com terceiros para fins comerciais. Utilizamos sistemas de criptografia em nossas comunicações de agendamento e garantimos o cumprimento da LGPD.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[#FACC15] font-space-grotesk text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FACC15]"></span> 04. DIREITOS DO TITULAR
            </h2>
            <div className="space-y-4 text-sm md:text-base font-light">
              <p>
                A qualquer momento, o cliente pode solicitar o acesso, retificação ou exclusão de seus dados de nossos arquivos digitais através do e-mail contato@autodet.com.br.
              </p>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}

