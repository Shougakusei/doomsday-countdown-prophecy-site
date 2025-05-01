
import React, { useState, FormEvent } from 'react';
import { useToast } from "@/hooks/use-toast";
import Modal from './Modal';

interface FormData {
  name: string;
  email: string;
  riskAssessment: string;
}

const RegistrationForm: React.FC = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showTeethAnimation, setShowTeethAnimation] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    riskAssessment: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Easter egg for "Nina"
    if (name === 'name' && value.toLowerCase() === 'nina') {
      setShowTeethAnimation(true);
      setTimeout(() => setShowTeethAnimation(false), 3000);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success toast
      toast({
        title: "Регистрация получена",
        description: "Ваши данные в безопасности... пока что.",
        variant: "destructive"
      });
      
      // Show modal
      setIsModalOpen(true);
    } catch (error) {
      toast({
        title: "Ошибка регистрации",
        description: "Возможно, ИИ уже захватил нашу форму.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const modalContent = (
    <div className="text-doomsday-light space-y-4">
      <p className="text-lg font-semibold text-doomsday-red">Спойлер: никак.</p>
      <p>
        Если ИИ достигнет сверхразума, у человечества не будет шансов на выживание.
        Наша единственная надежда — остановить разработку AGI сейчас.
      </p>
      <div className="bg-doomsday-dark p-4 border-l-4 border-doomsday-red rounded">
        <p className="text-sm italic text-doomsday-light/80">
          "GPT-5 — это рулетка: мы не знаем, создаём ли разумное существо или инструмент для апокалипсиса."
        </p>
      </div>
    </div>
  );

  return (
    <section id="register" className="my-16 w-full max-w-3xl mx-auto px-4 md:px-0 relative">
      <div className="relative pixel-border bg-doomsday-gray/30 p-6 md:p-8 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Регистрация
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Имя
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-doomsday-dark border border-doomsday-red/30 rounded-md text-doomsday-light focus:outline-none focus:ring-2 focus:ring-doomsday-red/50"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-doomsday-dark border border-doomsday-red/30 rounded-md text-doomsday-light focus:outline-none focus:ring-2 focus:ring-doomsday-red/50"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="riskAssessment" className="block text-sm font-medium">
              Как вы оцениваете риск вымирания?
            </label>
            <select
              id="riskAssessment"
              name="riskAssessment"
              required
              value={formData.riskAssessment}
              onChange={handleChange}
              className="w-full p-2 bg-doomsday-dark border border-doomsday-red/30 rounded-md text-doomsday-light focus:outline-none focus:ring-2 focus:ring-doomsday-red/50"
            >
              <option value="">Выберите...</option>
              <option value="panic">Паникёр</option>
              <option value="worried">Обеспокоен</option>
              <option value="neutral">Нейтрально</option>
              <option value="optimist">Технооптимист</option>
            </select>
          </div>
          
          <div className="flex items-start space-x-2 py-2">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 border-doomsday-red/30 rounded bg-doomsday-dark text-doomsday-red focus:ring-doomsday-red/50"
            />
            <label htmlFor="consent" className="text-sm text-doomsday-light/80">
              Я понимаю, что регистрация не спасёт меня, если ИИ станет сверхразумным
            </label>
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-3 bg-doomsday-red hover:bg-doomsday-red/80 text-white font-bold rounded-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Загрузка..." : "Узнать, как выжить"}
            </button>
          </div>
        </form>

        {showTeethAnimation && (
          <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 animate-tooth-fall">
            <div className="relative">
              <div className="text-5xl">🦷</div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-bold text-doomsday-red mt-2 bg-doomsday-dark/80 px-2 py-1 rounded">
                Она не должна умереть
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Как выжить?"
        content={modalContent}
      />
    </section>
  );
};

export default RegistrationForm;
