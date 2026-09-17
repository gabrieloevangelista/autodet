"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Icon } from '@iconify/react';

export default function CoursePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    gsap.set("body", { opacity: 1, overflow: "auto" });
    
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.start();
    }

    const tl = gsap.timeline();
    tl.fromTo(".hero-text", 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out", clearProps: "all" }
    );

    gsap.utils.toArray(".reveal").forEach((el: any) => {
      gsap.fromTo(el, 
        { y: 30, opacity: 0 }, 
        {
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        }
      );
    });
  }, []);

  const stats = [
    {
      number: "40h",
      label: "Carga Horária",
      desc: "Imersão com foco prático em carros reais",
      icon: "solar:clock-circle-linear"
    },
    {
      number: "08",
      label: "Vagas por Turma",
      desc: "Turma reduzida com bancada individual para cada aluno",
      icon: "solar:users-group-rounded-linear"
    },
    {
      number: "100%",
      label: "Material Incluso",
      desc: "Politrizes, compostos e vitrificadores fornecidos no curso",
      icon: "solar:box-minimalistic-linear"
    },
    {
      number: "Oficial",
      label: "Certificado Técnico",
      desc: "Certificação profissional emitida pela AUTODET SELECT",
      icon: "solar:diploma-verified-linear"
    }
  ];

  const modules = [
    {
      id: "01",
      title: "Diagnóstico & Preparação",
      subtitle: "Inspeção Óptica & Descontaminação",
      desc: "Avaliação milimétrica da espessura de verniz com medidor digital, descontaminação química (ferrosa) e mecânica com clay bar sem causar riscos.",
      icon: "solar:magnifer-linear",
      image: "/images/scangrip-inspection.jpg",
      topics: [
        "Uso de luminárias técnicas Scangrip para mapear imperfeições",
        "Medição de micragem em painéis originais e repintados",
        "Descontaminação química e técnica com clay bar",
        "Mascaramento técnico de borrachas, plásticos e frisos"
      ]
    },
    {
      id: "02",
      title: "Polimento Técnico",
      subtitle: "Corte, Refino & Lustro",
      desc: "Domínio das politrizes roto-orbitais e rotativas. Escolha correta de boinas de lã e espuma com compostos microabrasivos alemães para eliminar riscos.",
      icon: "solar:refresh-circle-linear",
      image: "/images/polishing-machine.jpg",
      topics: [
        "Setup, velocidade e pressão correta em máquinas roto-orbitais",
        "Técnica de corte sem deixar hologramas ou marcas de boina",
        "Etapas de refino e lustro para acabamento espelhado",
        "Controle térmico da chapa para evitar danos ao verniz"
      ]
    },
    {
      id: "03",
      title: "Vitrificação Cerâmica",
      subtitle: "Aplicação de Ceramic Coating 9H",
      desc: "Aplicação precisa de vitrificador cerâmico. Controle de tempo de cura, técnica de nivelamento com microfibra e aceleração com lâmpada infravermelha.",
      icon: "solar:shield-check-linear",
      image: "/images/ceramic-application.jpg",
      topics: [
        "Desengraxe absoluto com álcool isopropílico / prep",
        "Técnica cruzada de aplicação em blocos de suede",
        "Identificação do tempo de flash e remoção no ponto exato",
        "Cura controlada com infravermelho e teste de hidrofobia"
      ]
    },
    {
      id: "04",
      title: "Detalhamento Interno",
      subtitle: "Higienização & Tratamento de Couro",
      desc: "Limpeza minuciosa de cada fresta da cabine com pincéis de cerdas naturais, extratora profissional e hidratação com acabamento fosco original de fábrica.",
      icon: "solar:armchair-linear",
      image: "/images/interior-detailing.jpg",
      topics: [
        "Limpeza profunda e hidratação de bancos de couro fosco",
        "Higienização de alcântara, carpetes e cintos de segurança",
        "Detalhamento de difusores, botões e telas sensíveis",
        "Oxi-sanitização com gerador de ozônio para eliminar odores"
      ]
    }
  ];

  const practicalFeatures = [
    {
      title: "Bancada Individual",
      desc: "Cada aluno tem sua própria bancada com politriz, kit de boinas, compostos e painéis de teste para treinar à vontade.",
      icon: "solar:tuning-square-2-linear"
    },
    {
      title: "Carros Reais na Prática",
      desc: "Você não treina apenas em peças soltas: as etapas finais são executadas em carros reais do início ao fim.",
      icon: "solar:wheel-linear"
    },
    {
      title: "Suporte Técnico Direto",
      desc: "Grupo de WhatsApp pós-curso direto com o instrutor para tirar dúvidas práticas durante seus primeiros atendimentos.",
      icon: "solar:chat-round-dots-linear"
    },
    {
      title: "Apostila & Tabela de Produtos",
      desc: "Material de apoio com passo a passo das etapas, tempos de cura, diluições recomendadas e fornecedores de confiança.",
      icon: "solar:document-text-linear"
    }
  ];

  const faqs = [
    {
      q: "Quantas pessoas participam por turma?",
      a: "As turmas são estritamente limitadas a no máximo 8 alunos. Isso garante que cada participante tenha sua própria bancada e que o instrutor consiga acompanhar a pega de máquina e a técnica de cada um de perto."
    },
    {
      q: "Preciso ter experiência prévia para fazer o curso?",
      a: "Não. O curso começa nos fundamentos (diagnóstico, lavagem técnica e mascaramento) e progride até as técnicas avançadas de polimento e vitrificação. É ideal tanto para iniciantes quanto para quem já atua e quer elevar seu nível de entrega."
    },
    {
      q: "Preciso levar minhas próprias máquinas ou materiais?",
      a: "Não precisa trazer nada. Nós fornecemos 100% dos equipamentos (politrizes roto-orbitais e rotativas, lâmpadas Scangrip, boinas, compostos de polimento, vitrificadores cerâmicos e EPIs) durante toda a duração do curso."
    },
    {
      q: "Onde o curso é realizado?",
      a: "O curso acontece no nosso espaço técnico em Ponte Nova, MG, com estrutura completa de iluminação de detalhamento, climatização e bancadas individuais."
    },
    {
      q: "Como funciona a emissão do certificado?",
      a: "Ao final do treinamento prático de 40 horas, você recebe o Certificado de Conclusão oficial da AUTODET SELECT, atestando suas competências em polimento técnico e proteção cerâmica."
    }
  ];

  return (
    <main className="bg-[#050505] min-h-screen text-white font-space-grotesk selection:bg-[#FACC15] selection:text-black" suppressHydrationWarning>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#050505]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/bg_porsche.jpg" 
            alt="Detalhamento Técnico de Alto Padrão" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-[#050505] pointer-events-none"></div>
        </div>
        
        <div className="relative z-10 max-w-[1000px] px-6 text-center flex flex-col items-center justify-center mx-auto">
          {/* Headline */}
          <h1 className="hero-text font-space-grotesk text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl text-white uppercase">
            Curso Prático de <br className="hidden sm:inline" />
            <span className="text-[#FACC15]">Estética Automotiva & Polimento</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-text text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Aprenda na prática todas as etapas do detalhamento automotivo: diagnóstico com micragem, polimento técnico sem hologramas e aplicação profissional de vitrificadores cerâmicos 9H.
          </p>

          {/* CTA Section */}
          <div className="hero-text flex flex-col items-center justify-center gap-4 w-full">
            <a 
              href="#offer" 
              className="inline-flex items-center justify-center gap-4 bg-[#FACC15] text-black font-bold text-sm sm:text-base tracking-[0.2em] uppercase px-12 sm:px-16 py-5 sm:py-5.5 hover:bg-white transition-colors duration-300 rounded-none"
            >
              <span>Garantir Minha Vaga</span>
              <Icon icon="solar:arrow-right-linear" className="w-5 h-5" />
            </a>
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-emerald-400"></span>
              <span>40h de Imersão • Ponte Nova, MG • Máximo 8 Alunos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="py-14 border-y border-white/5 bg-[#080808] relative z-10">
        <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((st, i) => (
            <div key={i} className="reveal p-6 rounded-none bg-[#0a0a0a] border border-white/10 flex flex-col items-center text-center group hover:border-[#FACC15]/40 transition-colors">
              <div className="w-10 h-10 rounded-none border border-[#FACC15]/20 bg-[#FACC15]/5 flex items-center justify-center text-[#FACC15] mb-3">
                <Icon icon={st.icon} className="w-5 h-5" />
              </div>
              <h3 className="text-[#FACC15] text-3xl font-bold mb-1">{st.number}</h3>
              <p className="text-white font-medium text-sm mb-1">{st.label}</p>
              <p className="text-gray-400 text-xs leading-relaxed font-light">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-[1300px] mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[#FACC15] font-mono text-xs tracking-widest uppercase mb-2 block">
              Conteúdo Programático
            </span>
            <h2 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">
              O Que Você Vai <span className="text-[#FACC15]">Aprender</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
              Etapas detalhadas e organizadas de forma lógica para você executar com segurança e precisão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((m, i) => (
              <div 
                key={i} 
                className="reveal p-8 md:p-9 bg-[#0a0a0a] border border-white/10 flex flex-col justify-between min-h-[340px]"
              >
                {/* Card Header */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-[#FACC15] border border-[#FACC15]/40 px-2.5 py-1 rounded-none bg-[#FACC15]/10">
                      MÓDULO {m.id}
                    </span>
                    <div className="w-8 h-8 rounded-none border border-[#FACC15]/20 bg-[#FACC15]/5 flex items-center justify-center text-[#FACC15]">
                      <Icon icon={m.icon} className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-1 uppercase">
                    {m.title}
                  </h3>
                  <p className="text-xs font-mono text-[#FACC15]/80 uppercase tracking-wider mb-3">
                    {m.subtitle}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed font-light mb-6">
                    {m.desc}
                  </p>
                </div>

                {/* Topics list */}
                <div className="pt-4 border-t border-white/10">
                  <ul className="space-y-2.5">
                    {m.topics.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-400">
                        <Icon icon="solar:check-circle-bold" className="w-3.5 h-3.5 text-[#FACC15] shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Features / Differential */}
      <section className="py-20 bg-[#080808] border-y border-white/5 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-[#FACC15] font-mono text-xs tracking-widest uppercase mb-2 block">
              Estrutura do Treinamento
            </span>
            <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold tracking-tight uppercase">
              Diferenciais da <span className="text-[#FACC15]">Nossa Turma</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {practicalFeatures.map((f, i) => (
              <div key={i} className="reveal p-6 rounded-none bg-[#0a0a0a] border border-white/10 flex flex-col justify-start hover:border-[#FACC15]/30 transition-colors">
                <div className="w-9 h-9 rounded-none border border-[#FACC15]/20 bg-[#FACC15]/5 flex items-center justify-center text-[#FACC15] mb-4">
                  <Icon icon={f.icon} className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{f.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#FACC15] font-mono text-xs tracking-widest uppercase mb-2 block">
              Dúvidas Frequentes
            </span>
            <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold tracking-tight uppercase">
              Perguntas <span className="text-[#FACC15]">Frequentes</span>
            </h2>
          </div>

          <div className="space-y-3" suppressHydrationWarning>
            {faqs.map((f, i) => (
              <div 
                key={i} 
                className="reveal overflow-hidden rounded-none border border-white/10 bg-[#0a0a0a]"
                suppressHydrationWarning
              >
                <div 
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveFaq(activeFaq === i ? null : i);
                    }
                  }}
                  className="w-full p-5 text-left flex justify-between items-center group transition-colors cursor-pointer select-none"
                  aria-expanded={activeFaq === i}
                >
                  <span className={`font-medium text-sm sm:text-base transition-colors ${activeFaq === i ? 'text-[#FACC15]' : 'text-white group-hover:text-gray-200'}`}>
                    {f.q}
                  </span>
                  <div className={`w-5 h-5 shrink-0 flex items-center justify-center transition-transform duration-300 ${activeFaq === i ? 'text-[#FACC15] rotate-45' : 'text-gray-500'}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
                <div className={`transition-all duration-300 ease-in-out ${activeFaq === i ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-5 pt-0 text-gray-400 text-xs sm:text-sm leading-relaxed border-t border-white/5 mt-1 font-light">
                    {f.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-20 px-6 pb-36 relative z-10">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-[#0a0a0a] border border-white/10 p-8 sm:p-14 rounded-none text-center relative">
            
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-[#FACC15]/30 bg-[#FACC15]/5 rounded-none">
              <span className="w-1.5 h-1.5 bg-[#FACC15]"></span>
              <span className="text-[#FACC15] font-mono text-xs tracking-widest uppercase">
                TURMA EXCLUSIVA • APENAS 8 VAGAS
              </span>
            </div>

            <h2 className="reveal font-space-grotesk text-2xl sm:text-4xl font-bold tracking-tight mb-4 uppercase text-white">
              GARANTA SUA VAGA NA <span className="text-[#FACC15]">PRÓXIMA TURMA</span>
            </h2>
            
            <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto mb-8 font-light">
              Bancada individual, 100% dos insumos inclusos e 40 horas de prática direta em Ponte Nova, MG.
            </p>

            <div className="reveal flex flex-col justify-center items-center gap-3 mb-8">
              <div className="text-center">
                <p className="text-[#FACC15] font-mono text-xs tracking-widest uppercase mb-1">Parcelamento no Cartão</p>
                <div className="flex items-baseline justify-center gap-2">
                   <span className="text-base font-light text-[#FACC15]">12x de</span>
                   <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#FACC15]">R$ 130</h3>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-white/40 font-mono text-[10px] tracking-widest uppercase mb-1">Ou pagamento à vista</p>
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  R$ 1.497 <span className="text-xs font-light text-white/50 lowercase">via Pix</span>
                </h4>
              </div>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto text-left mb-8 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Icon icon="solar:check-circle-bold" className="text-[#FACC15] w-4 h-4 shrink-0" />
                <span>Bancada de trabalho individual</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="solar:check-circle-bold" className="text-[#FACC15] w-4 h-4 shrink-0" />
                <span>Politrizes e insumos 100% inclusos</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="solar:check-circle-bold" className="text-[#FACC15] w-4 h-4 shrink-0" />
                <span>Certificado oficial AUTODET SELECT</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="solar:check-circle-bold" className="text-[#FACC15] w-4 h-4 shrink-0" />
                <span>Suporte técnico pós-curso no WhatsApp</span>
              </div>
            </div>

            <div className="reveal flex flex-col items-center gap-5">
              <a 
                href="https://wa.me/553171640031?text=Ol%C3%A1%2C%20gostaria%20de%20garantir%20minha%20vaga%20no%20Curso%20Presencial%20da%20AUTODET%20SELECT."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-[#FACC15] text-black font-bold text-sm sm:text-base tracking-[0.2em] uppercase px-12 sm:px-16 py-5 sm:py-5.5 hover:bg-white transition-colors duration-300 rounded-none"
              >
                <span>Garantir Minha Vaga</span>
                <Icon icon="mdi:whatsapp" className="w-5 h-5" />
              </a>
              
              <div className="flex items-center justify-center gap-4 text-gray-500 opacity-50 text-xs font-mono">
                <span>Visa</span>
                <span>•</span>
                <span>Mastercard</span>
                <span>•</span>
                <span>Pix</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
