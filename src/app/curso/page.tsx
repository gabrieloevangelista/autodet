"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Icon } from '@iconify/react';
import CardImage from "@/components/CardImage";

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

    // Initial Hero Animations
    const tl = gsap.timeline();
    tl.fromTo(".hero-text", 
      { 
        y: 40, 
        opacity: 0 
      }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "all"
      }
    );

    // Reveal animations on scroll
    gsap.utils.toArray(".reveal").forEach((el: any) => {
      gsap.fromTo(el, 
        { 
          y: 35, 
          opacity: 0 
        }, 
        {
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out"
        }
      );
    });

  }, []);

  const stats = [
    {
      number: "40h",
      label: "Carga Horária",
      desc: "Imersão técnica com 90% de prática em veículos reais",
      icon: "solar:clock-circle-linear"
    },
    {
      number: "04",
      label: "Alunos por Turma",
      desc: "Atenção individualizada e bancada exclusiva",
      icon: "solar:users-group-rounded-linear"
    },
    {
      number: "100%",
      label: "Insumos Importados",
      desc: "Compostos alemães, cerâmicas e máquinas de ponta",
      icon: "solar:medal-ribbon-star-linear"
    },
    {
      number: "VIP",
      label: "Certificação Oficial",
      desc: "Selo de Especialista AUTODET SELECT reconhecido",
      icon: "solar:diploma-verified-linear"
    }
  ];

  const modules = [
    {
      id: "01",
      title: "CURADORIA DE SUPERFÍCIES",
      subtitle: "Diagnóstico, Micragem & Preparação",
      desc: "A ciência da descontaminação mecânica e química profunda, medição ultrassônica de verniz e análise óptica sob iluminação Scangrip.",
      icon: "solar:washing-machine-minimalistic-linear",
      image: "/images/scangrip-inspection.jpg",
      topics: ["Inspeção de micragem ponto a ponto", "Descontaminação com Clay Bar e descontaminante ferroso", "Identificação de repinturas e defeitos críticos"]
    },
    {
      id: "02",
      title: "RESTAURAÇÃO ÓPTICA",
      subtitle: "Polimento Técnico & Nivelamento",
      desc: "Técnicas avançadas de corte, refino e lustro com politrizes roto-orbitais e compostos de microabrasivos alemães de última geração.",
      icon: "solar:layers-minimalistic-linear",
      image: "/images/polishing-machine.jpg",
      topics: ["Setup e empunhadura de roto-orbitais", "Combinações exatas de boinas e compostos", "Eliminação de hologramas para acabamento espelhado"]
    },
    {
      id: "03",
      title: "ENGENHARIA DE PROTEÇÃO",
      subtitle: "Ceramic Coating 9H & Cura",
      desc: "Blindagem molecular com vitrificadores cerâmicos 9H, aplicação de selantes de alta densidade e cura controlada com lâmpadas de infravermelho.",
      icon: "solar:shield-check-linear",
      image: "/images/ceramic-application.jpg",
      topics: ["Aplicação e nivelamento de Ceramic Coating", "Controle de tempo de flash e ancoragem", "Repelência hidrofóbica e proteção contra raios UV"]
    },
    {
      id: "04",
      title: "BRANDING & ALTO TICKET",
      subtitle: "Posicionamento no Mercado 1%",
      desc: "A arte de precificar serviços de 4 dígitos, montar propostas irrecusáveis e encantar clientes de alto poder aquisitivo no ecossistema Alphaville.",
      icon: "solar:hand-money-linear",
      image: "/images/philosophy-lamborghini.jpg",
      topics: ["Estruturação de pacotes de R$ 2.000 a R$ 8.000", "Protocolo de atendimento exclusivo a domicílio", "Fidelização e esteira de manutenção contínua"]
    }
  ];

  const methodologySteps = [
    {
      step: "01",
      title: "Diagnóstico Clínico",
      desc: "Aprenda a analisar a lataria com medidores de espessura e luzes técnicas antes de tocar na pintura."
    },
    {
      step: "02",
      title: "Bancada Prática Individual",
      desc: "Cada aluno tem sua própria máquina, boinas e painéis para treinar até alcançar a perfeição."
    },
    {
      step: "03",
      title: "Aplicação em Supercarro Real",
      desc: "Viva a experiência real de executar o detalhamento completo em veículos de alta performance."
    },
    {
      step: "04",
      title: "Mentoria de Negócios & Vendas",
      desc: "Saia do curso sabendo exatamente como prospectar, cobrar e entregar valor de alto padrão."
    }
  ];

  const testimonials = [
    {
      name: "Ricardo Silva",
      role: "Proprietário de Studio • Alphaville, SP",
      text: "O curso transformou a minha visão sobre o que é serviço de luxo. Em menos de 60 dias, tripliquei o ticket médio dos meus pacotes de polimento e vitrificação.",
      img: "/images/leather-conditioning.jpg",
      highlight: "+300% de Faturamento"
    },
    {
      name: "Lucas Ferreira",
      role: "Especialista Mobile • São Paulo, SP",
      text: "A metodologia de atendimento a domicílio e o rigor técnico que aprendi na Academy me colocaram em um nível onde não disputo preço com ninguém.",
      img: "/images/polishing-compound.jpg",
      highlight: "Clientes Recorrentes"
    }
  ];

  const faqs = [
    {
      q: "Onde acontece a Masterclass presencial?",
      a: "O treinamento é 100% presencial e acontece em nosso atelier conceito em Alphaville, SP. O estúdio conta com iluminação de inspeção Scangrip, ambiente climatizado e toda a infraestrutura de ponta."
    },
    {
      q: "Preciso ter experiência prévia para participar?",
      a: "Não é obrigatório. O curso foi desenhado tanto para profissionais que desejam migrar para o mercado de luxo quanto para iniciantes comprometidos com a excelência técnica desde o primeiro dia."
    },
    {
      q: "Todos os materiais e equipamentos estão inclusos?",
      a: "Sim. Máquinas roto-orbitais, boinas, compostos alemães, vitrificadores cerâmicos e equipamentos de proteção individual são fornecidos integralmente durante todo o treinamento."
    },
    {
      q: "Como funciona a certificação e o suporte pós-curso?",
      a: "Ao concluir o treinamento, você recebe o Certificado Oficial AUTODET SELECT Academy e acesso exclusivo ao nosso grupo VIP para tirar dúvidas técnicas diretamente com o instrutor."
    }
  ];

  return (
    <main className="bg-[#050505] min-h-screen text-white font-space-grotesk selection:bg-[#FACC15] selection:text-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#0a0a0a]">
        {/* Background Image with smooth CardImage loader */}
        <div className="absolute inset-0 z-0 opacity-35">
          <CardImage 
            src="/images/og-academy.jpg" 
            alt="Academy Masterclass Background" 
            title="AUTODET SELECT Academy Masterclass"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/60 to-[#050505] pointer-events-none"></div>
        </div>
        
        <div className="relative z-10 max-w-[1100px] px-6 text-center flex flex-col items-center justify-center mx-auto">
          {/* Badge */}
          <div className="hero-text inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#FACC15]/30 rounded-full bg-[#FACC15]/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#FACC15] shadow-[0_0_8px_#FACC15] animate-pulse"></span>
            <span className="text-[#FACC15] font-mono text-xs tracking-widest uppercase">
              AUTODET SELECT ACADEMY // MASTERCLASS
            </span>
          </div>

          {/* Refined Headline */}
          <h1 className="hero-text font-space-grotesk text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl">
            A MAESTRIA DO <br className="hidden sm:inline" />
            <span className="text-[#FACC15] italic">DETALHAMENTO AUTOMOTIVO</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-text text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Domine a ciência do polimento técnico, vitrificação e posicionamento de alto ticket para atender os clientes mais exigentes do mercado de luxo.
          </p>

          {/* Centered CTA Section */}
          <div className="hero-text flex flex-col items-center justify-center gap-4 w-full">
            <a 
              href="#offer" 
              className="group relative inline-flex items-center justify-center bg-[#FACC15] text-black px-12 py-5 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:bg-white shadow-[0_0_30px_rgba(250,204,21,0.25)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Quero ser um especialista
                <Icon icon="solar:arrow-right-linear" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Presencial em Alphaville • Vagas Limitadas (Máx. 4 Alunos)</span>
            </div>
          </div>
        </div>

        {/* Floating scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
           <Icon icon="solar:arrow-down-linear" className="w-5 h-5 text-[#FACC15]" />
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="py-16 border-y border-white/5 bg-[#020202] relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((st, i) => (
            <div key={i} className="reveal p-6 rounded-2xl bg-[#080808] border border-white/5 flex flex-col items-center text-center group hover:border-[#FACC15]/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#FACC15]/10 flex items-center justify-center text-[#FACC15] mb-4 group-hover:scale-110 transition-transform">
                <Icon icon={st.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-[#FACC15] text-3xl md:text-4xl font-space-grotesk font-bold mb-1">{st.number}</h3>
              <p className="text-white font-medium text-sm mb-1">{st.label}</p>
              <p className="text-gray-400 text-xs leading-relaxed font-light">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modules Section with Background Images on Every Card */}
      <section className="py-28 px-6 relative z-10">
        <div className="max-w-[1300px] mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#FACC15] font-mono text-xs tracking-widest uppercase mb-3 block">
              Grade Curricular Completa
            </span>
            <h2 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">
              OS PILARES DA <span className="text-[#FACC15] italic">MAESTRIA</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
              Estrutura pedagógica desenhada para transformar você em uma autoridade em estética automotiva de alto padrão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((m, i) => (
              <div 
                key={i} 
                className="reveal group relative p-8 md:p-10 bg-[#0a0a0a] border border-white/10 hover:border-[#FACC15]/50 transition-all duration-500 rounded-2xl overflow-hidden flex flex-col justify-between min-h-[380px] shadow-2xl"
              >
                {/* Background Image of the Service with Smooth Overlay */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                  <CardImage 
                    src={m.image} 
                    alt={m.title} 
                    title={m.title}
                    category={`MÓDULO ${m.id}`}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700 grayscale mix-blend-luminosity group-hover:mix-blend-normal"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/70"></div>
                </div>

                {/* Card Top Info */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#FACC15] border border-[#FACC15]/40 px-3 py-1 rounded bg-[#FACC15]/10">
                      MÓDULO {m.id}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FACC15]/10 border border-[#FACC15]/20 flex items-center justify-center text-[#FACC15] group-hover:bg-[#FACC15] group-hover:text-black transition-all">
                      <Icon icon={m.icon} className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-[#FACC15] transition-colors uppercase mb-1">
                    {m.title}
                  </h3>
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">
                    {m.subtitle}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed font-light mb-6">
                    {m.desc}
                  </p>
                </div>

                {/* Card Syllabus Highlights */}
                <div className="relative z-10 pt-4 border-t border-white/10">
                  <ul className="space-y-2">
                    {m.topics.map((t, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-400">
                        <Icon icon="solar:check-circle-bold" className="w-4 h-4 text-[#FACC15] shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Animated Gold Bottom Border */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#FACC15] group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-[#030303] border-y border-white/5 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[#FACC15] font-mono text-xs tracking-widest uppercase mb-2 block">
              Metodologia de Ensino
            </span>
            <h2 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase">
              COMO FUNCIONA A <span className="text-[#FACC15]">IMERSÃO</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map((st, i) => (
              <div key={i} className="reveal p-6 rounded-2xl bg-[#080808] border border-white/5 relative">
                <span className="text-3xl font-bold font-mono text-[#FACC15]/40 mb-4 block">
                  {st.step}
                </span>
                <h4 className="text-lg font-bold text-white mb-2">{st.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed font-light">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-[#020202] relative z-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
             <span className="text-[#FACC15] font-mono text-xs tracking-widest uppercase mb-2 block">
               Prova Social & Depoimentos
             </span>
             <h2 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase">
               QUEM VIVEU A <span className="text-[#FACC15]">TRANSFORMAÇÃO</span>
             </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="reveal p-8 rounded-3xl bg-[#080808] border border-white/10 flex flex-col md:flex-row gap-6 items-start hover:border-[#FACC15]/30 transition-colors">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-[#FACC15]/30">
                  <CardImage 
                    src={t.img} 
                    alt={t.name} 
                    title={t.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 text-[#FACC15] mb-3">
                    {[...Array(5)].map((_, s) => (
                      <Icon key={s} icon="solar:star-bold" className="w-4 h-4" />
                    ))}
                    <span className="text-xs font-mono text-gray-500 ml-2">{t.highlight}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 italic leading-relaxed font-light">"{t.text}"</p>
                  <h4 className="font-bold text-[#FACC15] text-base">{t.name}</h4>
                  <p className="text-gray-500 text-xs uppercase font-mono tracking-widest mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-[850px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#FACC15] font-mono text-xs tracking-widest uppercase mb-2 block">
              Tire Suas Dúvidas
            </span>
            <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold tracking-tight uppercase italic text-[#FACC15]">
              PERGUNTAS FREQUENTES
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="reveal overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center group transition-colors"
                >
                  <span className={`font-medium text-sm md:text-base transition-colors ${activeFaq === i ? 'text-[#FACC15]' : 'text-white group-hover:text-gray-200'}`}>
                    {f.q}
                  </span>
                  <Icon 
                    icon={activeFaq === i ? "solar:minus-circle-linear" : "solar:plus-circle-linear"} 
                    className={`w-6 h-6 shrink-0 transition-all duration-300 ${activeFaq === i ? 'text-[#FACC15] rotate-180' : 'text-gray-500'}`} 
                  />
                </button>
                <div className={`transition-all duration-500 ease-in-out ${activeFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-2 bg-white/[0.02] font-light">
                    {f.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section with WhatsApp Integration */}
      <section id="offer" className="py-28 px-6 pb-40 relative z-10">
        <div className="max-w-[1000px] mx-auto">
          <div className="bg-gradient-to-br from-[#111111] via-[#090909] to-[#020202] border border-[#FACC15]/30 p-10 md:p-16 rounded-[36px] text-center relative overflow-hidden shadow-[0_0_80px_rgba(250,204,21,0.1)]">
            <div className="absolute inset-0 bg-[#FACC15]/5 opacity-10 animate-pulse pointer-events-none"></div>
            
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 border border-[#FACC15]/30 rounded-full bg-[#FACC15]/10">
              <span className="text-[#FACC15] font-mono text-[11px] tracking-widest uppercase">
                Próxima Turma Exclusiva • Inscrições Abertas
              </span>
            </div>

            <h2 className="reveal font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 uppercase text-white">
              INVESTIMENTO NA SUA <span className="text-[#FACC15]">CARREIRA</span>
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-10 font-light">
              Garanta sua bancada individual e tenha acesso a 40 horas de treinamento prático de alta performance em Alphaville.
            </p>

            <div className="reveal flex flex-col justify-center items-center gap-4 mb-10">
              <div className="text-center">
                <p className="text-[#FACC15] font-mono text-xs tracking-widest uppercase mb-1">Parcelamento Facilitado</p>
                <div className="flex items-baseline justify-center gap-2">
                   <span className="text-lg md:text-xl font-light text-[#FACC15]">12x de</span>
                   <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-[#FACC15]">R$ 130</h3>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-white/40 font-mono text-[10px] tracking-widest uppercase mb-1">Ou pagamento à vista</p>
                <h4 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                  R$ 1.497 <span className="text-xs font-light text-white/50 lowercase">via Pix</span>
                </h4>
              </div>
            </div>

            {/* Checklist of what is included */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto text-left mb-10 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Icon icon="solar:check-circle-bold" className="text-[#FACC15] w-4 h-4 shrink-0" />
                <span>Bancada prática individual</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="solar:check-circle-bold" className="text-[#FACC15] w-4 h-4 shrink-0" />
                <span>Insumos alemães inclusos</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="solar:check-circle-bold" className="text-[#FACC15] w-4 h-4 shrink-0" />
                <span>Certificado Oficial AUTODET</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="solar:check-circle-bold" className="text-[#FACC15] w-4 h-4 shrink-0" />
                <span>Suporte contínuo no grupo VIP</span>
              </div>
            </div>

            <div className="reveal flex flex-col items-center gap-6">
              <a 
                href="https://wa.me/553171640031?text=Ol%C3%A1%2C%20gostaria%20de%20garantir%20minha%20vaga%20na%20Masterclass%20AUTODET%20SELECT%20Academy."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FACC15] text-black px-16 py-5 rounded-full font-bold text-base tracking-widest uppercase hover:scale-105 hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(250,204,21,0.3)]"
              >
                <span>Garantir minha vaga</span>
                <Icon icon="mdi:whatsapp" className="w-6 h-6" />
              </a>
              
              <div className="flex items-center justify-center gap-4 text-gray-500 grayscale opacity-60">
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
