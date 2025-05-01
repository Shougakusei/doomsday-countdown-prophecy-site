
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-doomsday-dark/80 backdrop-blur-sm z-50 border-b border-doomsday-red/30 h-14">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        <div className="text-doomsday-red font-mono text-sm">DOOMSDAY CONF</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-doomsday-light/80">
          <li>
            <button 
              onClick={() => scrollToSection('speaker')} 
              className="hover:text-doomsday-red transition-colors"
            >
              О спикере
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('program')} 
              className="hover:text-doomsday-red transition-colors"
            >
              Программа
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('registration')} 
              className="hover:text-doomsday-red transition-colors"
            >
              Регистрация
            </button>
          </li>
        </ul>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-doomsday-light/80 hover:text-doomsday-red" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-doomsday-dark/95 backdrop-blur-md md:hidden border-b border-doomsday-red/30">
          <ul className="flex flex-col py-4">
            <li className="py-2 text-center">
              <button 
                onClick={() => scrollToSection('speaker')} 
                className="w-full py-2 hover:bg-doomsday-red/20 transition-colors"
              >
                О спикере
              </button>
            </li>
            <li className="py-2 text-center">
              <button 
                onClick={() => scrollToSection('program')} 
                className="w-full py-2 hover:bg-doomsday-red/20 transition-colors"
              >
                Программа
              </button>
            </li>
            <li className="py-2 text-center">
              <button 
                onClick={() => scrollToSection('registration')} 
                className="w-full py-2 hover:bg-doomsday-red/20 transition-colors"
              >
                Регистрация
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
