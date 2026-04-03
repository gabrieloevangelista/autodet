"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const steps = [
  {
    id: "01",
    label: "ETAPA 1 // LAVAGEM TÉCNICA",
    title: "LAVAGEM",
    description: "Início do ritual. Remoção de contaminantes superficiais com shampoo de pH neutro e técnica de dois baldes para evitar swirl marks.",
    bgImage: "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=3840&auto=format&fit=crop",
    technical: [
      {
        label: "Processo",
        title: "Snow Foam",
        desc: "Pré-lavagem com espuma densa para encapsular a sujeira mais pesada.",
        image: "porsche_snow_foam_detailing_1775250379608.png"
      },
      {
        label: "Ferramenta",
        title: "Pincéis Macios",
        desc: "Detalhando emblemas e grades com cerdas naturais de javali.",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"
      },
      {
        label: "Acabamento",
        title: "Secagem Segura",
        desc: "Toalhas de microfibra de alta gramatura e ar filtrado.",
        image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80"
      }
    ]
  },
  {
    id: "02",
    label: "ETAPA 2 // DESCONTAMINAÇÃO",
    title: "CORREÇÃO",
    description: "Remoção de partículas ferrosas e oxidação. A superfície torna-se lisa como vidro, pronta para a fase de nivelamento de verniz.",
    bgImage: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=3840&auto=format&fit=crop",
    technical: [
      {
        label: "Técnica",
        title: "Clay Bar",
        desc: "Barra de argila especial atua na remoção de overspray e poluição.",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80"
      },
      {
        label: "Detecção",
        title: "Medição de Verniz",
        desc: "Uso de medidor ultrassônico para garantir segurança no processo.",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80"
      },
      {
        label: "Análise",
        title: "Inspeção",
        desc: "Luzes Scangrip revelam a verdadeira condição da pintura.",
        image: "ferrari_luxury_detailing_1775249767609.png"
      }
    ]
  },
  {
    id: "03",
    label: "ETAPA 3 // POLIMENTO TÉCNICO",
    title: "POLIMENTO",
    description: "Onde a mágica acontece. Nivelamento microscópico do verniz para eliminar riscos e restaurar a profundidade máxima da cor.",
    bgImage: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=3840&auto=format&fit=crop",
    technical: [
      {
        label: "Maquinário",
        title: "Roto-Orbital",
        desc: "Movimento preciso que evita o aquecimento excessivo da peça.",
        image: "ferrari_polishing_detailing_1775250398202.png"
      },
      {
        label: "Abrasivos",
        title: "Compostos Alemães",
        desc: "Micro-abrasivos que quebram durante o uso para brilho final.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
      },
      {
        label: "Uso",
        title: "Boina de Lã",
        desc: "Corte pesado para remoção de defeitos severos no verniz.",
        image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800&q=80"
      }
    ]
  },
  {
    id: "04",
    label: "ETAPA 4 // PROTEÇÃO CERÂMICA",
    title: "PROTEÇÃO",
    description: "Selando a perfeição sob uma camada vítrea. Um escudo invisível garantindo repelência extrema e brilho duradouro.",
    bgImage: "https://images.unsplash.com/photo-1542362567-b055002b91f4?q=80&w=3840&auto=format&fit=crop",
    technical: [
      {
        label: "Produto",
        title: "Ceramic Coating",
        desc: "Barreira de nano-sílica que forma um escudo de vidro sobre o verniz.",
        image: "ceramic_coating_water_beading_lamborghini_1775250436835.png"
      },
      {
        label: "Repelência",
        title: "Hidrofobia",
        desc: "Tensão superficial elevada que impede a aderência de sujeira.",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80"
      },
      {
        label: "Equipamento",
        title: "Luz Infravermelha",
        desc: "Aceleração do tempo de cura para máxima dureza do coating.",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80"
      }
    ]
  },
      {
        id: "05",
        label: "ETAPA 5 // DETALHAMENTO INTERNO",
        title: "ENTREGA",
        description: "O sprint final. Limpeza profunda orgânica e proteção de todas as superfícies internas: couro, alcântara e fibra de carbono.",
        bgImage: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=3840&auto=format&fit=crop",
        technical: [
          {
            label: "Cockpit",
            title: "Detalhamento Lógico",
            desc: "Limpeza minuciosa de cada fresta, botão e costura do interior.",
            image: "mclaren_steering_wheel_detail.png"
          },
          {
            label: "Couro",
            title: "Hidratação Fosca",
            desc: "Devolvendo a textura original de fábrica sem brilho artificial.",
            image: "https://images.unsplash.com/photo-1563720360-c1e1a0ee0a54?w=800&q=80"
          },
          {
            label: "Filtro",
            title: "Oxi-Sanitização",
            desc: "Eliminação de odores e bactérias através de gerador de ozônio.",
            image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80"
          }
        ]
      }
    ];

export default function Journal() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (triggerRef.current && wrapRef.current) {
      gsap.to(wrapRef.current, {
        x: "-80%",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=500%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="journal" className="bg-[#050505]">
      <div ref={triggerRef} className="h-screen overflow-hidden">
        <div ref={wrapRef} id="horiz-wrap" className="flex w-[500%] h-full will-change-transform">
          {steps.map((step) => (
            <div key={step.id} className="relative w-1/5 h-full flex flex-col md:flex-row items-center justify-evenly md:justify-between px-6 md:px-20 bg-[#050505] pt-24 pb-8 md:py-0 overflow-hidden shrink-0">
              <div className="absolute inset-0 z-0 pointer-events-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={step.bgImage} 
                  className="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity" 
                  alt={step.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent md:to-[#050505]/30"></div>
              </div>

              <div className="relative z-10 w-full md:w-[45%] flex flex-col justify-center mt-6 md:mt-0">
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <span className="text-[10px] md:text-xs font-mono text-[#FACC15] tracking-widest border border-[#FACC15]/30 px-2 py-1 bg-[#FACC15]/10">PASSO {step.id}</span>
                  <span className="text-[10px] md:text-xs font-mono text-gray-500 tracking-widest uppercase">{step.label}</span>
                </div>
                <h2 className="font-space-grotesk text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-4 md:mb-6">
                  {step.title}
                </h2>
                <p className="max-w-md text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
              
              <div className="relative z-10 w-full md:w-[50%] shrink-0 pb-6 md:pb-0 perspective-[2000px]">
                <div className="flex items-center gap-3 mb-4 pl-2">
                  <div className="w-1.5 h-1.5 bg-[#FACC15] rounded-full animate-pulse shadow-[0_0_8px_#FACC15]"></div>
                  <h3 className="text-white font-mono text-xs md:text-sm tracking-widest uppercase opacity-80">Foco Técnico</h3>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-3 h-[260px] sm:h-[320px] md:h-[400px] -skew-x-3 transform group/bento w-full">
                  {step.technical.map((tech, i) => (
                    <div 
                      key={i} 
                      className={`relative overflow-hidden rounded-sm border border-white/10 bg-[#0A0A0A] group/card hover:border-white/30 transition-colors duration-500 ${i === 0 ? 'col-span-1 row-span-2' : 'col-span-1 row-span-1'}`}
                    >
                      <div className="absolute inset-[-10%] skew-x-3 scale-[1.15] group-hover/card:scale-[1.2] transition-transform duration-700 ease-out">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={tech.image} 
                          className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover/card:opacity-70 group-hover/card:mix-blend-normal transition-all duration-700" 
                          alt={tech.title} 
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent"></div>
                      <div className="relative z-10 p-3 md:p-4 flex flex-col h-full justify-end skew-x-3">
                        <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#FACC15] font-medium mb-1 transform translate-y-2 opacity-80 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
                          {tech.label}
                        </span>
                        <h4 className="text-white text-xs sm:text-sm md:text-base font-medium mb-1 tracking-tight transform translate-y-2 group-hover/card:translate-y-0 transition-all duration-300 delay-75">
                          {tech.title}
                        </h4>
                        <p className={`text-[10px] md:text-xs text-gray-400 leading-tight transform translate-y-4 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300 delay-100 ${i === 0 ? 'line-clamp-3' : 'line-clamp-2'}`}>
                          {tech.desc}
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FACC15] group-hover/card:w-full transition-all duration-700 ease-out"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
