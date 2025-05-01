
import React, { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import BurningText from '@/components/BurningText';
import CountdownTimer from '@/components/CountdownTimer';
import SpeakerInfo from '@/components/SpeakerInfo';
import Program from '@/components/Program';
import QuoteBlock from '@/components/QuoteBlock';
import RegistrationForm from '@/components/RegistrationForm';
import { generateDoomsdayDate, formatDate } from '@/utils/dateUtils';

const Index = () => {
  const [doomsdayDate] = useState<Date>(generateDoomsdayDate());
  
  // Create a background with falling binary data animation
  useEffect(() => {
    const dataElements = 20;
    const container = document.getElementById('data-container');
    
    if (container) {
      // Clear existing data elements
      container.innerHTML = '';
      
      for (let i = 0; i < dataElements; i++) {
        const dataEl = document.createElement('div');
        dataEl.className = 'falling-data animate-falling-data';
        
        // Random content (binary or error messages)
        const content = Math.random() > 0.7 
          ? 'ERROR' 
          : (Math.random() > 0.5 ? '01' : '10');
        
        dataEl.textContent = content;
        
        // Random positioning
        dataEl.style.left = `${Math.random() * 100}%`;
        dataEl.style.top = `${Math.random() * 100}%`;
        dataEl.style.animationDuration = `${15 + Math.random() * 20}s`;
        dataEl.style.animationDelay = `${Math.random() * 5}s`;
        dataEl.style.opacity = `${0.2 + Math.random() * 0.3}`;
        
        container.appendChild(dataEl);
      }
    }
  }, []);
  
  return (
    <div className="relative min-h-screen w-full">
      {/* Background elements */}
      <div className="data-center-bg"></div>
      <div id="data-container" className="fixed inset-0 overflow-hidden pointer-events-none z-0"></div>
      
      {/* Warning banner */}
      <div className="sticky top-0 z-50 bg-doomsday-red px-4 py-2 text-center font-mono text-sm text-white flex items-center justify-center gap-2">
        <AlertTriangle className="h-4 w-4 animate-flashing-warning" />
        <span className="uppercase tracking-wider font-bold">NO FIREWALL WILL SAVE YOU</span>
        <AlertTriangle className="h-4 w-4 animate-flashing-warning" />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto flex flex-col items-center py-12 md:py-20">
        {/* Header section */}
        <header className="w-full max-w-3xl mx-auto text-center px-4 md:px-0">
          <BurningText text="PAUSING ≠ SAFETY" />
          <BurningText text="SHUT IT ALL DOWN" className="mt-2" />
          
          <h2 className="text-xl md:text-2xl mt-6 text-doomsday-light/90 font-medium italic">
            Конференция о том, почему 6-месячный мораторий — капля в море, 
            а единственный выход — полная остановка
          </h2>
          
          <div className="mt-8 px-4">
            <p className="text-center text-sm text-doomsday-light/70 mb-2">
              ДЕНЬ РАСПЛАТЫ: {formatDate(doomsdayDate)}
            </p>
            <CountdownTimer targetDate={doomsdayDate} />
          </div>
          
          <QuoteBlock quote="GPT-5 — это рулетка: мы не знаем, создаём ли разумное существо или инструмент для апокалипсиса." />
        </header>
        
        {/* Main sections */}
        <SpeakerInfo />
        <Program />
        <RegistrationForm />
        
        {/* Footer */}
        <footer className="w-full mt-16 border-t border-doomsday-red/30 pt-6 text-center text-doomsday-light/60 text-sm">
          <p>Этот сайт написан человеком. Пока что.</p>
          <p className="mt-2">© {new Date().getFullYear()} Конференция о конце света</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
