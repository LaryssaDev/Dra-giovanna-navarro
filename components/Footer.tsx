import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="container mx-auto px-4 text-center">
        
        <h4 className="font-serif text-2xl text-white mb-2">{CONTACT_INFO.name}</h4>
        <p className="text-sm mb-6">{CONTACT_INFO.title} | {CONTACT_INFO.cro}</p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href={CONTACT_INFO.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gold-500 transition-colors"
          >
            <div className="flex items-center gap-2">
                <Instagram size={20} />
                <span>@dragiovannanavarro</span>
            </div>
          </a>
        </div>

        <div className="text-xs text-stone-600 border-t border-stone-800 pt-8">
          &copy; {new Date().getFullYear()} {CONTACT_INFO.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};