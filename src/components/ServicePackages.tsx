export default function ServicePackages() {
  return (
    <section id="route" className="z-20 border-white/5 border-t py-20 md:py-32 relative bg-[#050505]">
      <div className="md:px-20 flex max-w-[1600px] mx-auto mb-12 px-6 items-end justify-between">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#FACC15] shadow-[0_0_8px_#FACC15]"></div>
            <span className="text-xs font-medium uppercase tracking-widest text-gray-500">Níveis de Detalhamento</span>
          </div>
          <h2 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">PACOTES DE SERVIÇO</h2>
        </div>
        <div className="hidden md:flex gap-4">
          <div className="flex items-center gap-2"><div className="w-3 h-[2px] bg-[#FACC15]"></div><span className="text-xs font-mono uppercase text-gray-400">Serviço Premium</span></div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full border border-[#FACC15]"></div><span className="text-xs font-mono uppercase text-gray-400">Adicional</span></div>
        </div>
      </div>
      <div className="md:px-20 w-full max-w-[1600px] mx-auto px-4">
        <div className="relative w-full aspect-[4/5] lg:aspect-[21/9] bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-80 lg:border-b-0 lg:border-r p-5 md:p-6 lg:p-8 flex flex-col z-20 shrink-0 bg-[#050505]/80 w-full border-white/10 border-b backdrop-blur-md">
            <h3 className="text-xs font-mono text-[#FACC15] mb-8 tracking-widest uppercase">Especificações</h3>
            <div className="space-y-6 mb-auto flex-1">
              <div><span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Duração Média</span><span className="font-space-grotesk text-3xl font-normal text-white">04<span className="text-sm text-gray-400 mr-1">h</span>30<span className="text-sm text-gray-400">m</span></span></div>
              <div><span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Proteção Externa</span><span className="font-space-grotesk text-3xl font-normal text-white">12 <span className="text-sm text-gray-400 mes">meses</span></span></div>
              <div><span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Cura Total</span><span className="font-space-grotesk text-3xl font-normal text-white">24 <span className="text-sm text-gray-400">horas</span></span></div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 hidden lg:block">
              <span className="block text-xs uppercase tracking-widest text-gray-500 mb-4">Etapas do Processo</span>
              <ul className="space-y-3">
                <li className="flex justify-between items-center group cursor-default"><span className="text-xs font-normal text-gray-400 group-hover:text-white transition-colors">01. Lavagem Premium</span><span className="text-xs font-mono text-gray-600">INÍCIO</span></li>
                <li className="flex justify-between items-center group cursor-default"><span className="text-xs font-normal text-gray-400 group-hover:text-white transition-colors">02. Descontaminação</span><span className="text-xs font-mono text-gray-600">PREP</span></li>
                <li className="flex justify-between items-center group cursor-default"><span className="text-xs font-normal text-gray-400 group-hover:text-white transition-colors">03. Correção Tinta</span><span className="text-xs font-mono text-gray-600">POLIMENTO</span></li>
                <li className="flex justify-between items-center group cursor-default"><span className="text-xs font-normal text-gray-400 group-hover:text-white transition-colors">04. Vitrificação</span><span className="text-xs font-mono text-gray-600">SELANTE</span></li>
              </ul>
            </div>
          </div>
          <div className="relative flex-1 bg-[#0A0A0A] overflow-hidden min-h-[300px] md:min-h-[400px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/bg_porsche.jpg" alt="Luxury Car Detail" className="opacity-40 w-full h-full object-cover absolute inset-0 mix-blend-luminosity grayscale" />
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="absolute bg-[#FACC15] shadow-[0_0_8px_#FACC15] opacity-80" style={{ left: '70%', top: '75%', width: '10%', height: '2px' }}></div>
              <div className="absolute bg-[#FACC15] shadow-[0_0_8px_#FACC15] opacity-80" style={{ left: '70%', top: '60%', width: '2px', height: '15%' }}></div>
              <div className="absolute bg-[#FACC15] shadow-[0_0_8px_#FACC15] opacity-80" style={{ left: '55%', top: '60%', width: '15%', height: '2px' }}></div>
              <div className="absolute bg-[#FACC15] shadow-[0_0_8px_#FACC15] opacity-80" style={{ left: '55%', top: '20%', width: '2px', height: '40%' }}></div>
              <div className="absolute bg-[#FACC15] shadow-[0_0_8px_#FACC15] opacity-80" style={{ left: '35%', top: '20%', width: '20%', height: '2px' }}></div>
              <div className="absolute bg-[#FACC15] shadow-[0_0_8px_#FACC15] opacity-80" style={{ left: '35%', top: '20%', width: '2px', height: '45%' }}></div>
              <div className="absolute bg-[#FACC15] shadow-[0_0_8px_#FACC15] opacity-80" style={{ left: '15%', top: '65%', width: '20%', height: '2px' }}></div>
              <div className="absolute bg-[#FACC15] shadow-[0_0_8px_#FACC15] opacity-80" style={{ left: '15%', top: '65%', width: '2px', height: '20%' }}></div>
            </div>
            {/* Info Box 1 */}
            <div className="absolute z-30 flex flex-col items-center group cursor-pointer" style={{ left: '76%', top: '60%' }}>
              <div className="border-[#FACC15] group-hover:bg-[#FACC15] transition-all duration-300 bg-[#0A0A0A] w-3 h-3 border-2 rounded-full shadow-[0_0_10px_rgba(230,57,70,0.5)]"></div>
              <span className="absolute top-4 text-xs font-mono text-white tracking-widest uppercase bg-[#050505]/60 px-1.5 py-0.5 rounded backdrop-blur-md pointer-events-none drop-shadow-md">Lavagem</span>
              <div className="absolute bottom-6 w-32 md:w-40 p-2 md:p-3 max-md:-translate-x-[60%] bg-[#050505] border border-white/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-2xl origin-bottom scale-95 group-hover:scale-100">
                <p className="text-[10px] md:text-xs text-[#FACC15] font-mono mb-1 uppercase tracking-widest">Passo 1 / Prep</p>
                <p className="text-white text-xs md:text-sm font-medium tracking-tight">Premium Wash</p>
                <p className="text-[10px] md:text-xs text-gray-500 mt-1 leading-tight">Limpeza profunda com snow foam e pincéis de detalhamento.</p>
              </div>
            </div>
            {/* Info Box 2 */}
            <div className="absolute z-30 flex flex-col items-center group cursor-pointer" style={{ left: '55%', top: '18%' }}>
              <div className="w-2.5 h-2.5 rounded-full bg-white group-hover:scale-150 transition-transform duration-300 shadow-[0_0_8px_rgba(255,255,255,0.4)]"></div>
              <span className="absolute bottom-4 text-xs font-mono text-white tracking-widest uppercase bg-[#050505]/60 px-1.5 py-0.5 rounded backdrop-blur-md pointer-events-none drop-shadow-md whitespace-nowrap">Descontaminação</span>
              <div className="absolute left-6 top-0 w-32 md:w-40 p-2 md:p-3 max-md:-translate-x-[40%] bg-[#050505] border border-white/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-2xl origin-left scale-95 group-hover:scale-100">
                <p className="text-[10px] md:text-xs text-[#FACC15] font-mono mb-1 uppercase tracking-widest">Passo 2 / Clay Bar</p>
                <p className="text-white text-xs md:text-sm font-medium tracking-tight">Superfície Lisa</p>
                <p className="text-[10px] md:text-xs text-gray-500 mt-1 leading-tight">Remoção de impurezas incrustadas no verniz da pintura.</p>
              </div>
            </div>
            {/* Info Box 3 */}
            <div className="absolute z-30 flex flex-col items-center group cursor-pointer" style={{ left: '48%', top: '22%' }}>
              <div className="w-3 h-3 rounded-full bg-[#0A0A0A] border-2 border-[#FACC15] group-hover:bg-[#FACC15] transition-all duration-300 shadow-[0_0_10px_rgba(230,57,70,0.5)]"></div>
              <span className="absolute bottom-4 text-xs font-mono text-white tracking-widest uppercase bg-[#050505]/60 px-1.5 py-0.5 rounded backdrop-blur-md pointer-events-none drop-shadow-md">Polimento</span>
              <div className="absolute md:left-6 top-1/2 max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-full max-md:mt-4 -translate-y-1/2 max-md:translate-y-0 w-36 md:w-48 p-2 md:p-3 bg-[#050505] border border-white/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-2xl origin-left scale-95 group-hover:scale-100">
                <p className="text-[10px] md:text-xs text-[#FACC15] font-mono mb-1 uppercase tracking-widest">Passo 3 / Correção</p>
                <p className="text-white text-xs md:text-sm font-medium tracking-tight">Polimento Técnico</p>
                <p className="text-[10px] md:text-xs text-gray-500 mt-1 leading-tight">Correção de micro-riscos, hologramas e restauração do brilho.</p>
                <div className="mt-2 pt-2 border-t border-white/5 hidden md:flex justify-between"><span className="text-[10px] md:text-xs text-gray-400 font-mono">BRILHO: 100%</span></div>
              </div>
            </div>
            {/* Info Box 4 */}
            <div className="absolute z-30 flex flex-col items-center group cursor-pointer" style={{ left: '37%', top: '71%' }}>
              <div className="w-2.5 h-2.5 rounded-full bg-white group-hover:scale-150 transition-transform duration-300 shadow-[0_0_8px_rgba(255,255,255,0.4)]"></div>
              <span className="absolute top-4 text-xs font-mono text-white tracking-widest uppercase bg-[#050505]/60 px-1.5 py-0.5 rounded backdrop-blur-md pointer-events-none drop-shadow-md">Vitrificação</span>
              <div className="absolute bottom-6 w-32 md:w-40 p-2 md:p-3 max-md:-translate-x-1/2 max-md:left-1/2 bg-[#050505] border border-white/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-2xl origin-bottom scale-95 group-hover:scale-100">
                <p className="text-[10px] md:text-xs text-[#FACC15] font-mono mb-1 uppercase tracking-widest">Passo 4 / Selante</p>
                <p className="text-white text-xs md:text-sm font-medium tracking-tight">Ceramic Coating 9H</p>
                <p className="text-[10px] md:text-xs text-gray-500 mt-1 leading-tight">Aplicação de camada de nano cerâmica para proteção extrema.</p>
              </div>
            </div>
            {/* Info Box 5 */}
            <div className="absolute z-30 flex flex-col items-center group cursor-pointer" style={{ left: '11%', top: '92%' }}>
              <div className="relative flex items-center justify-center w-6 h-6">
                <div className="absolute inset-0 rounded-full bg-[#FACC15] opacity-20 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-[#FACC15] shadow-[0_0_12px_#FACC15] group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <span className="absolute left-8 text-xs font-mono text-[#FACC15] font-medium tracking-widest uppercase bg-[#050505]/80 px-1.5 py-0.5 rounded backdrop-blur-md pointer-events-none drop-shadow-md">Finalização</span>
              <div className="absolute bottom-8 right-0 max-md:right-auto max-md:left-0 w-36 md:w-48 p-2 md:p-3 bg-[#050505] border border-[#FACC15]/30 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-2xl origin-bottom-right scale-95 group-hover:scale-100">
                <p className="text-[10px] md:text-xs text-[#FACC15] font-mono mb-1 uppercase tracking-widest">Passo 5 / Entrega</p>
                <p className="text-white text-xs md:text-sm font-medium tracking-tight">Inspeção de Qualidade</p>
                <p className="text-[10px] md:text-xs text-gray-500 mt-1 leading-tight">Detalhamento interno final, condicionamento e entrega das chaves.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
