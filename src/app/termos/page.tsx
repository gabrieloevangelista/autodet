"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

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
        <div className="mb-16 fade-in">
          <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            TERMOS DE <span className="text-[#FACC15] italic">USO</span>
          </h1>
          <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">Última atualização: Abril 2026</p>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed fade-in">
          <section>
            <h2 className="text-[#FACC15] font-space-grotesk text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FACC15]"></span> 01. ACEITAÇÃO
            </h2>
            <p>
              Ao acessar e utilizar os serviços da AUTODET, você concorda em cumprir e estar vinculado aos seguintes termos e condições. Nossos serviços são focados em estética automotiva de alto padrão e atendimento especializado a domicílio ou em nosso estúdio.
            </p>
          </section>

          <section>
            <h2 className="text-[#FACC15] font-space-grotesk text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FACC15]"></span> 02. SERVIÇOS
            </h2>
            <p>
              A AUTODET reserva-se o direito de recusar serviços em veículos que apresentem condições estruturais comprometidas ou que possam oferecer risco à segurança de nossos profissionais. O escopo do serviço é definido no momento da reserva e qualquer alteração posterior deve ser acordada entre as partes.
            </p>
          </section>

          <section>
            <h2 className="text-[#FACC15] font-space-grotesk text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FACC15]"></span> 03. AGENDAMENTO E CANCELAMENTO
            </h2>
            <p>
              Agendamentos devem ser feitos com antecedência mínima de 48 horas. Cancelamentos realizados com menos de 24 horas de antecedência podem estar sujeitos a taxas de administrativo. Valorizamos o tempo de nossos clientes e de nossa equipe técnica.
            </p>
          </section>

          <section>
            <h2 className="text-[#FACC15] font-space-grotesk text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FACC15]"></span> 04. RESPONSABILIDADES
            </h2>
            <p>
              O cliente é responsável por remover objetos de valor do interior do veículo antes do início do serviço. A AUTODET utiliza produtos e técnicas de ponta, porém não se responsabiliza por danos pré-existentes ou oxidações ocultas que possam vir à tona durante o processo de limpeza profunda.
            </p>
          </section>

          <section>
            <h2 className="text-[#FACC15] font-space-grotesk text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FACC15]"></span> 05. PAGAMENTO
            </h2>
            <p>
              Os pagamentos podem ser realizados via PIX, Cartão de Crédito ou Faturamento para empresas parceiras. O serviço só é considerado finalizado após a inspeção conjunta entre o técnico e o cliente.
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
