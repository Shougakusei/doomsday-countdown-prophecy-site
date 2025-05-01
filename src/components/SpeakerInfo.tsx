
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import QuoteBlock from './QuoteBlock';

const SpeakerInfo: React.FC = () => {
  return (
    <section id="speaker" className="my-16 w-full max-w-3xl mx-auto px-4 md:px-0 pt-16">
      <div className="relative pixel-border bg-doomsday-gray/30 p-6 md:p-8 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
          <AlertTriangle className="h-6 w-6 text-doomsday-red animate-flashing-warning" />
          <span>О спикере</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="relative w-40 h-40 md:w-56 md:h-56 overflow-hidden rounded-lg border-2 border-doomsday-red/50">
            <div className="absolute inset-0 bg-gradient-to-b from-doomsday-dark/0 to-doomsday-red/30 z-10"></div>
            <img
              src="/yudkowsky.jpg"
              alt="Элиезер Юдковский"
              className="w-full h-full object-cover grayscale contrast-125 brightness-90"
            />
            <div className="absolute inset-0 bg-doomsday-dark/30 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,10,42,0.4)_70%)]"></div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-doomsday-red">Элиезер Юдковский</h3>
            <p className="text-doomsday-light/80 mb-4">
              Исследователь искусственного интеллекта, который предупреждает о катастрофических 
              рисках неконтролируемого развития ИИ. Один из основателей Machine Intelligence 
              Research Institute (MIRI).
            </p>
            <div className="flex flex-col gap-2">
              <QuoteBlock quote="Создание сверхразума при текущих условиях = смерть всего живого. Не 'может быть', а 'очевидно'." />
              <QuoteBlock quote="ИИ не любит вас. Вы — атомы, которые он использует для других целей." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerInfo;
