import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Lightbox } from './Lightbox';
import { Maximize2 } from 'lucide-react';

export const Results: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold tracking-wider uppercase text-sm">Transformações</span>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-2 mb-4">
            Resultados que falam por si
          </h2>
          <p className="text-stone-500">
            Veja como devolvemos a confiança de nossos pacientes. 
            <br className="hidden sm:block" />
            Clique nas imagens para ampliar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((src, index) => (
            <div 
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md bg-white aspect-square"
              onClick={() => openLightbox(src)}
            >
              <img 
                src={src} 
                alt={`Resultado ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 w-8 h-8" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-stone-400 border border-stone-200 inline-block px-4 py-2 rounded-full bg-white">
            * Resultados podem variar de acordo com as características biológicas de cada paciente.
          </p>
        </div>
      </div>

      <Lightbox 
        isOpen={isOpen} 
        imageSrc={selectedImage} 
        onClose={() => setIsOpen(false)} 
      />
    </section>
  );
};