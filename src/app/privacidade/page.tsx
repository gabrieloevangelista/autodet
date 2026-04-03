"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

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
        <div className="mb-16 fade-in">
          <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            POLÍTICA DE <span className="text-[#FACC15] italic">PRIVACIDADE</span>
          </h1>
          <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">Última atualização: Abril 2026</p>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed fade-in">
          <section>
            <h2 className="text-[#FACC15] font-space-grotesk text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FACC15]"></span> 01. COLETA DE DADOS
            </h2>
            <p>
              A AUTODET coleta informações básicas para garantir a excelência no atendimento, incluindo dados de contato (Nome, telefone e e-mail) informados através de nosso formulário de agendamento ou canais diretos (WhatsApp).
            </p>
          </section>

          <section>
            <h2 className="text-[#FACC15] font-space-grotesk text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FACC15]"></span> 02. USO DAS INFORMAÇÕES
            </h2>
            <p>
              Seus dados são utilizados exclusivamente para o gerenciamento de agendamentos, comunicação técnica sobre o serviço solicitado e avisos ocasionais sobre novas tecnologias de tratamento automotivo ou ofertas exclusivas da AUTODET. Não comercializamos seus dados com terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-[#FACC15] font-space-grotesk text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FACC15]"></span> 03. SEGURANÇA
            </h2>
            <p>
              Implementamos medidas de segurança técnicas e organizativas para proteger seus dados pessoais contra acessos não autorizados. No entanto, nenhum sistema digital é totalmente imune, por isso recomendamos cautela ao compartilhar dados sensíveis online.
            </p>
          </section>

          <section>
            <h2 className="text-[#FACC15] font-space-grotesk text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FACC15]"></span> 04. COOKIES
            </h2>
            <p>
              Utilizamos cookies para melhorar a performance do carregamento de nossas imagens de alta resolução e para análises anônimas de tráfego, visando otimizar a experiência visual do nosso portfólio digital.
            </p>
          </section>

          <section>
            <h2 className="text-[#FACC15] font-space-grotesk text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FACC15]"></span> 05. SEUS DIREITOS
            </h2>
            <p>
              O cliente tem o direito de solicitar a exclusão definitiva de seus dados de nossa base a qualquer momento, enviando um e-mail para contato@autodet.com.br. Atuamos em total conformidade com a LGPD (Lei Geral de Proteção de Dados).
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
