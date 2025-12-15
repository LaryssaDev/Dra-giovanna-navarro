import React from 'react';
import { BACKSTAGE_IMAGES } from '../constants';

export const Backstage: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/3">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
              Experiência Premium
            </h2>
            <p className="text-stone-600 mb-6">
              Cuidamos de cada detalhe para que sua experiência seja relaxante. 
              Do ambiente climatizado à tecnologia de ponta, tudo foi pensado em você.
            </p>
            <p className="text-stone-600 font-medium italic">
              "Beleza e saúde andam juntas."
            </p>
          </div>

          <div className="w-full lg:w-2/3">
             {/* Simple flex scroll for mobile, grid for desktop */}
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
               {BACKSTAGE_IMAGES.map((src, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden shadow-lg h-64 sm:h-80">
                      <img src={src} alt="Bastidores" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};