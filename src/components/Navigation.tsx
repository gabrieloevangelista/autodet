"use client";

import { Icon } from '@iconify/react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full px-6 py-4 md:px-12 md:py-8 flex justify-between items-center z-50 mix-blend-difference text-white">
      <a href="/#hero" className="flex items-center">
        <h2 className="font-space-grotesk text-xl font-semibold tracking-tighter hover:opacity-80 transition-opacity">AUTODET.</h2>
      </a>
      <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase opacity-80">
        <a href="/#journal" className="hover:text-[#FACC15] transition-colors">Processo</a>
        <a href="/#gallery" className="hover:text-[#FACC15] transition-colors">Projetos</a>
        <a href="/curso" className="hover:text-[#FACC15] transition-colors border-b border-[#FACC15]/30">Curso</a>
        <a href="/#contato" className="hover:text-[#FACC15] transition-colors">Agendar</a>
      </div>
      <button className="md:hidden group flex items-center justify-center">
        <Icon icon="solar:hamburger-menu-linear" className="w-6 h-6 group-hover:text-[#FACC15] transition-colors" style={{ strokeWidth: "1.5px" }} />
      </button>
    </nav>
  );
}
