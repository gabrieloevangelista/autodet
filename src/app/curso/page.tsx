"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Icon } from '@iconify/react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academy | Domine a Estética de Luxo',
  description: 'O treinamento definitivo para quem busca o topo do mercado de estética automotiva. Aprenda a metodologia AUTODET de alto ticket e rigor absoluto.',
  openGraph: {
    title: 'AUTODET Academy | Estética de Alto Ticket',
    description: 'Transforme seu estúdio em um atelier de luxo. Aprenda com quem atende os clientes mais exigentes de Alphaville.',
    images: ['https://images.unsplash.com/photo-1603584173870-7f37371ac901?auto=format&fit=crop&q=80&w=1200&h=630'],
  },
};

export default function CoursePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    // Reveal the page immediately as we are not using the Preloader here
    gsap.set("body", { opacity: 1, overflow: "auto" });
    
    // Ensure Lenis starts if it was stopped by the provider
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.start();
    }

    // Initial Hero Animations - More robust fromTo approach
    const tl = gsap.timeline();
    tl.fromTo(".hero-text", 
      { 
        y: 60, 
        opacity: 0 
      }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        stagger: 0.15,
        ease: "power4.out",
        clearProps: "all" // Clears GSAP styles after animation to keep CSS defaults
      }
    );

    // Reveal animations on scroll
    gsap.utils.toArray(".reveal").forEach((el: any) => {
      gsap.fromTo(el, 
        { 
          y: 40, 
          opacity: 0 
        }, 
        {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        }
      );
    });

  }, []);

  const modules = [
    {
      id: "01",
      title: "CURADORIA DE SUPERFÍCIES",
      desc: "A ciência do diagnóstico e descontaminação diagnóstica para preparação de alto nível.",
      icon: "solar:washing-machine-minimalistic-linear"
    },
    {
      id: "02",
      title: "RESTAURAÇÃO ÓPTICA",
      desc: "Técnicas avançadas de nivelamento e correção para o acabamento 'Show Car' impecável.",
      icon: "solar:layers-minimalistic-linear"
    },
    {
      id: "03",
      title: "ENGENHARIA DE PROTEÇÃO",
      desc: "Blindagem molecular com Ceramic Coatings e selantes de performance internacional.",
      icon: "solar:shield-check-linear"
    },
    {
      id: "04",
      title: "BRANDING & ALTO TICKET",
      desc: "A arte de se posicionar, precificar e dominar o mercado de clientes 1%.",
      icon: "solar:hand-money-linear"
    }
  ];

  const testimonials = [
    {
      name: "Ricardo Silva",
      role: "Dono de Studio em Alphaville",
      text: "O curso mudou minha percepção sobre o que é luxo de verdade. Em 2 meses, tripliquei o ticket médio dos meus serviços.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Lucas Ferreira",
      role: "Especialista Mobile",
      text: "A metodologia de atendimento a domicílio ensinada na AUTODET Academy é o que me diferencia no mercado hoje.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  const faqs = [
    {
      q: "Onde acontece a Imersão?",
      a: "O treinamento é realizado em nosso estúdio conceito em Alphaville, SP. Um ambiente controlado e projetado para a máxima performance técnica."
    },
    {
      q: "Sobre o instrumental e insumos?",
      a: "Toda a infraestrutura de elite, incluindo máquinas roto-orbitais de última geração e compostos internacionais, está inclusa na sua experiência."
    },
    {
      q: "Certificação e Reconhecimento?",
      a: "Ao concluir a jornada, você receberá a Certificação de Especialista AUTODET Academy, um selo de excelência reconhecido no mercado de alto padrão."
    }
  ];

  return (
    <main className="bg-[#050505] min-h-screen text-white font-space-grotesk selection:bg-[#FACC15] selection:text-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/images/snow-foam-luxury.jpg" 
            alt="Academy Background" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
        </div>
        
        <div className="relative z-10 max-w-[1200px] px-6 text-center">
          <div className="hero-text inline-block mb-6 px-4 py-1 border border-[#FACC15]/20 rounded-full bg-[#FACC15]/5">
            <span className="text-[#FACC15] font-mono text-xs tracking-widest uppercase">AUTODET ACADEMY // MASTERCLASS</span>
          </div>
          <h1 className="hero-text font-space-grotesk text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-8">
            A MAESTRIA DO <br />
            <span className="text-[#FACC15] italic">DETALHAMENTO</span>
          </h1>
          <p className="hero-text text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Domine a arte da conservação de ativos automotivos de alto valor e posicione-se no topo absoluto do mercado premium. 
          </p>
          <div className="hero-text flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="#offer" className="bg-[#FACC15] text-black px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform duration-300">
              Quero ser um especialista
            </a>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Presencial / Vagas Limitadas</p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
           <Icon icon="solar:arrow-down-linear" className="w-6 h-6" />
        </div>
      </section>

      {/* Value Preposition */}
      <section className="py-24 border-y border-white/5 bg-[#020202]">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="reveal">
            <h3 className="text-[#FACC15] text-4xl font-space-grotesk font-bold mb-2">Prática</h3>
            <p className="text-gray-400 text-xs font-mono tracking-widest uppercase">Imersão em Ativos Reais</p>
          </div>
          <div className="reveal">
            <h3 className="text-[#FACC15] text-4xl font-space-grotesk font-bold mb-2">Network</h3>
            <p className="text-gray-400 text-xs font-mono tracking-widest uppercase">Ecossistema Alphaville</p>
          </div>
          <div className="reveal">
            <h3 className="text-[#FACC15] text-4xl font-space-grotesk font-bold mb-2">Elite</h3>
            <p className="text-gray-400 text-xs font-mono tracking-widest uppercase">Posicionamento High-End</p>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-20 text-center md:text-left">
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-bold tracking-tighter mb-6 uppercase leading-none">
              OS PILARES DA <span className="text-[#FACC15] italic">MAESTRIA</span>
            </h2>
            <p className="text-gray-400 max-w-xl font-light">Do diagnóstico inicial ao branding de alto valor. O conhecimento que separa entusiastas de especialistas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((m, i) => (
              <div key={i} className="reveal group p-8 bg-[#0a0a0a] border border-white/5 hover:border-[#FACC15]/30 transition-all duration-500 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-white/5 text-6xl font-space-grotesk font-bold group-hover:text-[#FACC15]/5 transition-colors">{m.id}</div>
                <div className="w-12 h-12 bg-[#FACC15]/10 rounded-xl flex items-center justify-center text-[#FACC15] mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon icon={m.icon} className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-4 tracking-tight group-hover:text-[#FACC15] transition-colors uppercase">{m.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#020202]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="font-space-grotesk text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase">LEGADO E <span className="text-[#FACC15]">RESULTADOS</span></h2>
             <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">A visão de quem já domina o ecossistema de alto padrão</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="reveal p-8 rounded-3xl bg-[#080808] border border-white/5 flex flex-col md:flex-row gap-6 items-start">
                <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-[#FACC15]/20" />
                <div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed font-light">"{t.text}"</p>
                  <h5 className="font-bold text-[#FACC15]">{t.name}</h5>
                  <p className="text-gray-600 text-[10px] uppercase font-mono tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-space-grotesk text-4xl font-bold tracking-tighter text-center mb-16 uppercase italic text-[#FACC15]">Dúvidas frequentes.</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="reveal overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0a]">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center group"
                >
                  <span className={`font-medium transition-colors ${activeFaq === i ? 'text-[#FACC15]' : 'text-white group-hover:text-gray-300'}`}>{f.q}</span>
                  <Icon 
                    icon={activeFaq === i ? "solar:minus-circle-linear" : "solar:plus-circle-linear"} 
                    className={`w-6 h-6 transition-all duration-300 ${activeFaq === i ? 'text-[#FACC15] rotate-180' : 'text-gray-600'}`} 
                  />
                </button>
                <div className={`transition-all duration-500 ease-in-out ${activeFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0 text-gray-400 text-sm border-t border-white/5 mt-2 bg-white/5 font-light">
                    {f.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-32 px-6 pb-48">
        <div className="max-w-[1000px] mx-auto">
          <div className="bg-gradient-to-br from-[#111] to-[#010101] border border-[#FACC15]/20 p-12 md:p-20 rounded-[40px] text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[#FACC15]/5 opacity-10 animate-pulse pointer-events-none"></div>
            
            <h2 className="reveal font-space-grotesk text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase leading-none text-white">INVESTIMENTO NA SUA <span className="text-[#FACC15]">CARREIRA</span></h2>
            
            <div className="reveal flex flex-col justify-center items-center gap-4 mb-12">
              <div className="text-center">
                <p className="text-[#FACC15] font-mono text-[10px] tracking-widest uppercase mb-1">Parcelamento</p>
                <div className="flex items-baseline justify-center gap-2">
                   <span className="text-lg md:text-xl font-light text-[#FACC15]">12x de</span>
                   <h4 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#FACC15]">R$ 130</h4>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-white/40 font-mono text-[10px] tracking-widest uppercase mb-2">Ou pagamento único</p>
                <h4 className="text-2xl md:text-4x font-bold tracking-tighter text-white">R$ 1.497 <span className="text-xs font-light text-white/50 lowercase">à vista</span></h4>
              </div>
            </div>

            <div className="reveal space-y-6">
              <button className="w-full md:w-auto bg-[#FACC15] text-black px-16 py-6 rounded-full font-bold text-lg tracking-widest uppercase hover:scale-105 transition-transform duration-300 shadow-[0_0_50px_rgba(250,204,21,0.2)]">
                Garantir minha vaga
              </button>
              <div className="flex justify-center gap-4 text-gray-500 grayscale opacity-50">
                <Icon icon="logos:visa" className="w-10 h-6 h-auto" />
                <Icon icon="logos:mastercard" className="w-10 h-6 h-auto" />
                <Icon icon="logos:pix" className="w-10 h-6 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
