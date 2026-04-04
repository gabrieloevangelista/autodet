"use client";

import { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 w-full px-6 py-4 md:px-12 md:py-8 flex justify-between items-center z-[100] mix-blend-difference text-white">
        <a href="/#hero" className="flex items-center" onClick={closeMenu}>
          <h2 className="font-space-grotesk text-xl font-semibold tracking-tighter hover:opacity-80 transition-opacity">AUTODET SELECT.</h2>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase opacity-80">
          <a href="/#journal" className="hover:text-[#FACC15] transition-colors">Processo</a>
          <a href="/#gallery" className="hover:text-[#FACC15] transition-colors">Projetos</a>
          <a href="/curso" className="hover:text-[#FACC15] transition-colors border-b border-[#FACC15]/30">Curso</a>
          <a href="/#contato" className="hover:text-[#FACC15] transition-colors">Agendar</a>
        </div>

        {/* Hamburger Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden group flex items-center justify-center relative z-[110]"
          aria-label="Abrir Menu"
        >
          <Icon 
            icon={isOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} 
            className={`w-7 h-7 transition-all duration-300 ${isOpen ? 'text-[#FACC15]' : 'group-hover:text-[#FACC15]'}`} 
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#050505] z-[90] md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto visibility-visible' : 'opacity-0 pointer-events-none visibility-hidden'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          <a 
            href="/#journal" 
            onClick={closeMenu}
            className={`text-3xl font-space-grotesk font-medium tracking-tighter transition-all duration-500 delay-100 uppercase ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Processo
          </a>
          <a 
            href="/#gallery" 
            onClick={closeMenu}
            className={`text-3xl font-space-grotesk font-medium tracking-tighter transition-all duration-500 delay-200 uppercase ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Projetos
          </a>
          <a 
            href="/curso" 
            onClick={closeMenu}
            className={`text-3xl font-space-grotesk font-medium tracking-tighter transition-all duration-500 delay-300 uppercase border-b border-[#FACC15]/30 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Curso
          </a>
          <a 
            href="/#contato" 
            onClick={closeMenu}
            className={`mt-6 bg-[#FACC15] text-black px-12 py-5 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-500 delay-400 ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
          >
            Agendar Agora
          </a>

          <div className="absolute bottom-12 flex flex-col items-center gap-4">
             <span className="text-[10px] font-mono tracking-widest text-gray-600 uppercase">Siga-nos</span>
             <div className="flex gap-6 opacity-40">
                <Icon icon="mdi:instagram" className="w-5 h-5" />
                <Icon icon="ic:baseline-whatsapp" className="w-5 h-5" />
             </div>
          </div>
        </div>
      </div>
    </>
  );
}
