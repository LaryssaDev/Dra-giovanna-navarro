import React from 'react';
import { ASSETS } from '../constants';
import { WhatsAppButton } from './Button';
import { Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-24 lg:pb-32 bg-stone-50">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 text-gold-600 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>Sorrisos Reais, Autoestima Renovada</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 leading-tight mb-6">
              Eu sou <span className="text-gold-600 italic">Giovanna Navarro</span>.
            </h1>
            
            <p className="text-lg sm:text-xl text-stone-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Cirurgiã Dentista apaixonada por transformar vidas através do sorriso. 
              Agende sua avaliação e descubra a melhor versão de você mesma com segurança e leveza.
            </p>

            <div className="max-w-md mx-auto lg:mx-0">
              <WhatsAppButton text="Agendar primeira consulta gratuita" subtext={true} fullWidth={true} />
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 order-1 lg:order-2 w-full max-w-md lg:max-w-lg relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-200 border-4 border-white">
              <img 
                src={ASSETS.hero} 
                alt="Dra. Giovanna Navarro" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/90 p-4 rounded-xl shadow-lg border border-white/50">
                <p className="font-serif text-stone-900 font-bold text-lg">Dra. Giovanna Navarro</p>
                <p className="text-stone-600 text-sm">CROSP 168560</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};