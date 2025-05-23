"use client";

import { useEffect, useState } from 'react';
import { Button } from "'components/ui/button'";
import { Play, CalendarDays, MapPin, Clock } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      <div className="container-custom mx-auto pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section - Left Side */}
          <div
            className={`relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-black/40 z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <button
                className="bg-white/90 hover:bg-white text-orange-600 rounded-full p-4 transition-all transform hover:scale-105"
                aria-label="Reproduzir vídeo"
              >
                <Play size={32} fill="currentColor" />
              </button>
            </div>
            {/* Placeholder Video Thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 z-0">
              <div className="absolute inset-0 opacity-40 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div
            className={`flex flex-col transform transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-orange-600 text-white px-4 py-2 text-sm font-bold inline-block rounded mb-3 w-fit">
              IMERSÃO PRESENCIAL
            </div>
            <img src="/images/logopro.png" alt="Logo" className="mb-6 w-auto h-16" />

            <p className="text-lg text-gray-300 mb-6">
              Uma IMERSÃO PRESENCIAL PRÁTICA E COMPLETA, desenvolvida para capacitar empresários com ferramentas práticas para expandir suas habilidades e alcançar o sucesso.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-300">
                <CalendarDays className="text-orange-500 h-5 w-5 mr-3" />
                <span>17 e 18 de Maio de 2025</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="text-orange-500 h-5 w-5 mr-3" />
                <span>SINCOMÉRCIO CATANDUVA</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="text-orange-500 h-5 w-5 mr-3" />
                <span>8h às 18:30 (16 horas de imersão)</span>
              </div>
            </div>

            <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800 mb-8">
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-400 text-sm">Valor promocional (Lote 1)</span>
                <span className="text-orange-500 text-sm font-semibold">Oferta por tempo limitado</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 line-through">R$ 1.997,00</span>
                <span className="text-2xl font-bold text-white">R$ 1.497,00</span>
              </div>
              <div className="text-right text-sm text-gray-400">ou 12x de R$ 153,01</div>
            </div>
          </div>
        </div>

        {/* CTA Button - Bottom Center */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white text-xl px-10 py-6 rounded-full transform transition-all hover:scale-105 shadow-lg"
          >
            GARANTA SUA VAGA
          </Button>

          <p className="mt-4 text-orange-500 font-medium">
            Vagas limitadas! Não perca essa oportunidade.
          </p>
        </div>
      </div>
    </section>
  );
}
