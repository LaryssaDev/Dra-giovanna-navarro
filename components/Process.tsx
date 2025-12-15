import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 text-center mb-16">
          Sua primeira consulta é simples
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-stone-200 -z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-full border-4 border-stone-100 flex items-center justify-center shadow-sm mb-6">
              <span className="text-4xl font-serif text-gold-600 font-bold">1</span>
            </div>
            <h3 className="font-bold text-lg text-stone-900 mb-2">Toque no Botão</h3>
            <p className="text-stone-500 text-sm px-4">
              Clique no botão de WhatsApp aqui na página para iniciar o contato.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-full border-4 border-stone-100 flex items-center justify-center shadow-sm mb-6">
              <span className="text-4xl font-serif text-gold-600 font-bold">2</span>
            </div>
            <h3 className="font-bold text-lg text-stone-900 mb-2">Agendamento</h3>
            <p className="text-stone-500 text-sm px-4">
              Minha equipe vai encontrar o melhor horário na sua agenda para a visita.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-full border-4 border-stone-100 flex items-center justify-center shadow-sm mb-6">
              <span className="text-4xl font-serif text-gold-600 font-bold">3</span>
            </div>
            <h3 className="font-bold text-lg text-stone-900 mb-2">Avaliação Gratuita</h3>
            <p className="text-stone-500 text-sm px-4">
              Você vem ao consultório, tomamos um café e eu avalio seu sorriso sem compromisso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};