import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Results } from './components/Results';
import { WhyTrust } from './components/WhyTrust';
import { Process } from './components/Process';
import { Backstage } from './components/Backstage';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/Button';
import { CONTACT_INFO } from './constants';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button after scrolling past the first 300px
      if (window.scrollY > 300) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-stone-50 selection:bg-gold-200 selection:text-stone-900">
      
      <main>
        <Hero />
        <About />
        <Results />
        <WhyTrust />
        <Process />
        <Backstage />
        
        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-stone-50 to-stone-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">
              Seu novo sorriso começa agora
            </h2>
            <p className="text-lg text-stone-600 mb-10 max-w-2xl mx-auto">
              Não adie mais a sua autoestima. A primeira consulta é totalmente gratuita e sem compromisso.
            </p>
            <div className="max-w-md mx-auto">
               <WhatsAppButton text="Agendar consulta agora" fullWidth={true} />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Sticky Mobile Button */}
      <div 
        className={`fixed bottom-6 right-6 z-40 transition-all duration-500 transform ${
          showSticky ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <a 
          href={CONTACT_INFO.whatsapp_link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
};

export default App;