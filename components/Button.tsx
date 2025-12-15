import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface ButtonProps {
  text?: string;
  className?: string;
  subtext?: boolean;
  fullWidth?: boolean;
}

export const WhatsAppButton: React.FC<ButtonProps> = ({ 
  text = "Agendar primeira consulta gratuita", 
  className = "", 
  subtext = false,
  fullWidth = false
}) => {
  return (
    <div className={`flex flex-col items-center ${fullWidth ? 'w-full' : ''}`}>
      <a
        href={CONTACT_INFO.whatsapp_link}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          group relative flex items-center justify-center gap-3 
          bg-green-600 hover:bg-green-700 text-white 
          font-semibold py-4 px-8 rounded-full shadow-lg shadow-green-900/20
          transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl
          ${fullWidth ? 'w-full' : 'w-auto'}
          ${className}
        `}
      >
        <MessageCircle className="w-6 h-6 animate-pulse" />
        <span className="text-lg tracking-wide">{text}</span>
      </a>
      {subtext && (
        <p className="mt-3 text-xs uppercase tracking-widest text-stone-500 font-medium">
          Resposta rápida • Sem compromisso
        </p>
      )}
    </div>
  );
};