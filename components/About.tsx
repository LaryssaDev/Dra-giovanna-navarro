import React from 'react';
import { ASSETS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gold-400/20 rounded-2xl transform rotate-3"></div>
              <img 
                src={ASSETS.about_extra} 
                alt="Dra. Giovanna em atendimento" 
                className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
              Muito prazer, sou a sua futura dentista
            </h2>
            <div className="w-20 h-1 bg-gold-500 mb-8"></div>
            
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              Não vejo a odontologia apenas como procedimentos clínicos, mas como uma arte de devolver a confiança. 
              Meu objetivo é que você se sinta acolhida desde o primeiro "oi" até o resultado final do seu tratamento.
            </p>
            
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Cada rosto é único, e meu trabalho é realçar o que você já tem de melhor, com técnicas modernas e, acima de tudo, honestidade no diagnóstico.
            </p>

            <ul className="space-y-4">
              {[
                "Atendimento 100% humanizado e sem pressa.",
                "Explicação clara de cada etapa do tratamento.",
                "Foco em resultados naturais e harmônicos.",
                "Ambiente acolhedor e seguro."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                  <span className="text-stone-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};