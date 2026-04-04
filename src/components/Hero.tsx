export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden" id="hero">
      <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0">
        <img id="hero-img" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920&h=1080" className="brightness-[0.3] w-full h-full object-cover" alt="Porsche Premium Car Detailing" />
        
        <div className="flex pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#050505] absolute top-0 right-0 bottom-0 left-0 items-center justify-center z-[5]">
          <a href="#apply" className="pointer-events-auto md:w-40 md:h-40 flex items-center justify-center group cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 bg-transparent w-32 h-32 rounded-full p-1.5">
            <div className="flex flex-col overflow-hidden transition-all duration-300 bg-transparent w-full h-full border-white/20 border rounded-full relative items-center justify-center">
              <div className="absolute inset-2 rounded-full border border-white/20 pointer-events-none transition-all duration-700 ease-out group-hover:scale-[0.85] group-hover:border-[#FACC15]/40"></div>
              
              <div className="relative z-10 flex flex-col items-center gap-1 mt-1">
                <span className="text-[10px] uppercase transition-colors duration-300 group-hover:text-[#FACC15] drop-shadow-lg font-medium text-white/90 tracking-[0.2em]">Agendar</span>
                <span className="text-xs md:text-sm font-medium tracking-[0.15em] text-white uppercase transition-colors duration-300 group-hover:text-[#FACC15] drop-shadow-lg">Serviço</span>
              </div>
              
              <div className="group-hover:opacity-100 transition-all duration-500 opacity-0 absolute left-1/2 -translate-x-1/2 top-[65%] w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-[#FACC15]/80 to-transparent shadow-[0_0_6px_rgba(230,57,70,0.5)]"></div>
            </div>
          </a>
        </div>
      </div>
      
      <div className="relative z-10 w-full h-full flex flex-col justify-between pointer-events-none mix-blend-difference py-32 px-6 md:px-12">
        <div className="overflow-hidden self-start">
          <h1 id="hero-title-l" className="text-[15vw] leading-[0.8] tracking-[-0.06em] mix-blend-difference text-white font-medium translate-y-full block">
            AUTO
          </h1>
        </div>
        <div className="overflow-hidden self-end flex items-end gap-4">
          <h1 id="hero-title-r" className="text-[15vw] leading-[0.8] tracking-[-0.06em] mix-blend-difference text-white font-normal italic translate-y-full block">
            DET.
          </h1>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 md:left-12 flex flex-col z-20 text-white mix-blend-difference md:bottom-12 gap-y-1">
        <span className="md:text-sm uppercase flex items-center gap-2 text-xs font-medium tracking-[0.15em]">Estética Automotiva Premium <span className="w-6 h-[1px] bg-[#FACC15]"></span></span>
        <span className="md:text-sm uppercase text-xs font-medium text-gray-300 tracking-[0.15em]">Atendimento a Domicílio</span>
      </div>
    </section>
  );
}
