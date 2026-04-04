"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const services = [
  "Detalhamento Conceitual",
  "Restauração Óptica",
  "Proteção de Elite (Ceramic Coating)",
  "Consultoria de Ativos",
  "Limpeza Técnica de Interior",
];

const timeSlots = [
  "08:30",
  "10:00",
  "11:30",
  "14:00",
  "15:30",
  "17:00",
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    service: services[0],
    date: "",
  });
  
  const [selectedTime, setSelectedTime] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === "date") {
      const selectedDate = new Date(value);
      const day = selectedDate.getUTCDay(); // 0 is Sunday
      
      if (day === 0) {
        alert("A AUTODET SELECT opera de Segunda a Sábado. Por favor, selecione um dia útil.");
        setFormData((prev) => ({ ...prev, [name]: "" }));
        return;
      }
    }
    
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedTime) {
      alert("Por favor, selecione um horário para o agendamento.");
      return;
    }

    const message = `Olá, gostaria de agendar um serviço conceitual na AUTODET SELECT.
    
Dados do Agendamento:
Nome: ${formData.name}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
Serviço: ${formData.service}
Data: ${formData.date}
Horário Selecionado: ${selectedTime}

Aguardo confirmação para prosseguirmos com a consultoria técnica.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/553171640031?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-[#050505] border-t border-white/5 overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-sm uppercase tracking-[0.3em] text-[#FACC15] mb-4">
              Agendamento Exclusivo
            </h2>
            <h3 className="font-space-grotesk text-4xl md:text-5xl font-medium mb-6">
              SOLICITE SEU DIAGNÓSTICO
            </h3>
            <p className="text-white/60 max-w-xl mx-auto">
              Selecione o horário que melhor se adapta à sua rotina. 
              Confirmaremos a disponibilidade da nossa equipe técnica em Alphaville em instantes.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nome */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Nome Completo</label>
                <input
                  required
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Ex: João Silva"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-none px-6 py-4 outline-none focus:border-[#FACC15] transition-colors text-white font-space-grotesk"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 ml-1">E-mail</label>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Ex: joao@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-none px-6 py-4 outline-none focus:border-[#FACC15] transition-colors text-white font-space-grotesk"
                />
              </div>

              {/* WhatsApp */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 ml-1">WhatsApp de Contato</label>
                <input
                  required
                  type="tel"
                  name="whatsapp"
                  autoComplete="tel"
                  placeholder="Ex: (11) 99999-9999"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-none px-6 py-4 outline-none focus:border-[#FACC15] transition-colors text-white font-space-grotesk"
                />
              </div>

              {/* Serviço */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Tipo de Serviço</label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-none px-4 md:px-6 py-4 outline-none focus:border-[#FACC15] transition-colors text-white font-space-grotesk appearance-none"
                  >
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-[#050505]">
                        {service}
                      </option>
                    ))}
                  </select>
                  <Icon icon="mdi:chevron-down" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none w-5 h-5" />
                </div>
              </div>

              {/* Data */}
              <div className="space-y-2">
                <label 
                  htmlFor="date-input"
                  className="text-xs uppercase tracking-widest text-white/40 ml-1 cursor-pointer"
                >
                  Data da Consultoria
                </label>
                <div 
                  className="relative cursor-pointer group w-full max-w-full overflow-hidden"
                  onClick={() => {
                    const el: any = document.getElementById('date-input');
                    if (el) {
                      if (typeof el.showPicker === 'function') {
                        try {
                          el.showPicker();
                        } catch (e) {
                          el.focus();
                        }
                      } else {
                        el.focus();
                      }
                    }
                  }}
                >
                  <input
                    required
                    id="date-input"
                    type="date"
                    name="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full max-w-full min-w-0 bg-white/5 border border-white/10 rounded-none px-4 md:px-6 py-4 outline-none group-hover:border-white/30 focus:border-[#FACC15] transition-colors text-white font-space-grotesk [color-scheme:dark] cursor-pointer"
                  />
                  <Icon icon="mdi:calendar" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none w-5 h-5 group-hover:text-[#FACC15] transition-colors" />
                </div>
              </div>
            </div>

            {/* Horários / Slots */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 ml-1">
                <Icon icon="mdi:clock-outline" className="text-[#FACC15] w-5 h-5" />
                <label className="text-xs uppercase tracking-widest text-white/40">Selecione o Horário Disponível</label>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-4 border font-space-grotesk text-sm tracking-widest transition-all ${
                      selectedTime === time
                        ? "bg-[#FACC15] border-[#FACC15] text-black font-bold"
                        : "bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Botão de Envio */}
            <div className="pt-8">
              <button
                type="submit"
                className="group relative w-full bg-[#FACC15] text-black font-space-grotesk font-bold py-6 px-10 overflow-hidden transition-all hover:bg-white flex items-center justify-center gap-4"
              >
                <span className="relative z-10 tracking-[0.2em] uppercase">Confirmar e Enviar para WhatsApp</span>
                <Icon icon="mdi:whatsapp" className="w-6 h-6 relative z-10" />
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
            
            <p className="text-center text-white/20 text-[10px] uppercase tracking-widest">
              Ao clicar, você será redirecionado para o atendimento oficial da AUTODET SELECT via WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
