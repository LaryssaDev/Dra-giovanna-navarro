import React from 'react';
import { HeartHandshake, Microscope, Award, Clock } from 'lucide-react';
import { WhatsAppButton } from './Button';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-lg transition-shadow duration-300">
    <div className="w-14 h-14 bg-gold-400/10 rounded-full flex items-center justify-center text-gold-600 mb-6">
      {icon}
    </div>
    <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">{title}</h3>
    <p className="text-stone-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

export const WhyTrust: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">
            Por que confiar no meu trabalho?
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Acredito que um tratamento de sucesso começa com confiança e transparência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard 
            icon={<HeartHandshake size={28} />}
            title="Avaliação Honesta"
            desc="Sem tratamentos desnecessários. Eu indico apenas o que você realmente precisa para ter saúde e beleza."
          />
          <FeatureCard 
            icon={<Award size={28} />}
            title="Atendimento Comigo"
            desc="Você será atendida diretamente por mim em todas as etapas, garantindo a continuidade e qualidade do cuidado."
          />
          <FeatureCard 
            icon={<Microscope size={28} />}
            title="Clareza Total"
            desc="Explico tudo sem termos complicados. Você sai do consultório entendendo exatamente o seu plano."
          />
          <FeatureCard 
            icon={<Clock size={28} />}
            title="Respeito ao Tempo"
            desc="Consultas agendadas com intervalo adequado para que você não fique esperando na recepção."
          />
        </div>

        {/* Intermediate CTA */}
        <div className="bg-stone-900 rounded-3xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
          
          <h3 className="text-2xl md:text-3xl font-serif mb-4 relative z-10">
            Ainda com dúvidas?
          </h3>
          <p className="text-stone-300 mb-8 max-w-xl mx-auto relative z-10">
            Converse diretamente com a nossa equipe. Vamos entender sua necessidade antes mesmo de você vir ao consultório.
          </p>
          <div className="relative z-10 flex justify-center">
             <WhatsAppButton text="Tirar dúvidas no WhatsApp" />
          </div>
        </div>
      </div>
    </section>
  );
};