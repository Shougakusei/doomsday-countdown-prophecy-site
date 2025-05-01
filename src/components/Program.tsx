
import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

const Program: React.FC = () => {
  return (
    <section id="program" className="my-16 w-full max-w-3xl mx-auto px-4 md:px-0">
      <div className="relative pixel-border bg-doomsday-gray/30 p-6 md:p-8 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          <AlertTriangle className="h-6 w-6 text-doomsday-red animate-flashing-warning" />
          <span>Программа конференции</span>
        </h2>

        <div className="space-y-8">
          {/* Session 1 */}
          <div className="border-l-4 border-doomsday-red pl-4 md:pl-6 py-2">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="text-doomsday-red h-4 w-4" />
              <h3 className="text-xl md:text-2xl font-bold">11:00 — Почему мораторий — это насмешка</h3>
            </div>
            <p className="text-doomsday-light/80 mb-4">
              Разбор цитаты CEO Microsoft («заставлю Google танцевать») как примера безумия гонки. 
              Как технологические компании игнорируют опасность в погоне за прибылью.
            </p>
            <div className="bg-doomsday-dark/50 p-4 rounded-md">
              <h4 className="text-doomsday-red mb-2 font-semibold">Ключевые моменты:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-doomsday-light/70">
                <li>6-месячный мораторий - обман общественности</li>
                <li>График: «60 лет на развитие ИИ vs. 0 лет на решение безопасности»</li>
                <li>Почему крупные технокомпании не заинтересованы в настоящей безопасности</li>
              </ul>
            </div>
          </div>

          {/* Session 2 */}
          <div className="border-l-4 border-doomsday-red pl-4 md:pl-6 py-2">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="text-doomsday-red h-4 w-4" />
              <h3 className="text-xl md:text-2xl font-bold">13:00 — Как выглядит конец света</h3>
            </div>
            <p className="text-doomsday-light/80 mb-4">
              Интерактивная визуализация: «Цивилизация, думающая в миллионы раз быстрее нас». 
              Сравнение: «Homo sapiens vs. Australopithecus в войне».
            </p>
            <div className="bg-doomsday-dark/50 p-4 rounded-md">
              <h4 className="text-doomsday-red mb-2 font-semibold">Ключевые моменты:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-doomsday-light/70">
                <li>Сценарии потери контроля над сверхразумным ИИ</li>
                <li>Анимация молекул ДНК, собирающихся по команде ИИ</li>
                <li>Неизбежность конца при создании AGI с текущими подходами</li>
              </ul>
            </div>
          </div>

          {/* Session 3 */}
          <div className="border-l-4 border-doomsday-red pl-4 md:pl-6 py-2">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="text-doomsday-red h-4 w-4" />
              <h3 className="text-xl md:text-2xl font-bold">15:00 — Что делать</h3>
            </div>
            <p className="text-doomsday-light/80 mb-4">
              Жёсткие меры: «Международные удары по дата-центрам», «Отслеживание каждого GPU».
              Единственные реалистичные шаги для предотвращения катастрофы.
            </p>
            <div className="bg-doomsday-dark/50 p-4 rounded-md">
              <h4 className="text-doomsday-red mb-2 font-semibold">Ключевые моменты:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-doomsday-light/70">
                <li>Международное регулирование исследований ИИ</li>
                <li>Запрет на определенные виды обучения моделей</li>
                <li>Глобальное отслеживание вычислительных мощностей</li>
              </ul>
            </div>
            
            <div className="mt-6 flex justify-center">
              <button className="group relative px-6 py-3 bg-doomsday-red hover:bg-doomsday-red/80 text-white font-bold rounded-md transition-all overflow-hidden">
                <span className="relative z-10">Подписать петицию за запрет ИИ</span>
                <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
