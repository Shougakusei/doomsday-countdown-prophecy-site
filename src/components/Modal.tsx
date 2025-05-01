
import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      <div className="relative z-10 w-full max-w-md bg-doomsday-dark border-2 border-doomsday-red/50 rounded-lg shadow-lg animate-enter">
        <div className="flex items-center justify-between p-4 border-b border-doomsday-red/30">
          <h3 className="text-xl font-semibold text-doomsday-red">{title}</h3>
          <button 
            onClick={onClose}
            className="h-8 w-8 flex items-center justify-center rounded-full bg-doomsday-gray hover:bg-doomsday-red/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-4 max-h-[70vh] overflow-y-auto">
          {content}
        </div>
        
        <div className="p-4 border-t border-doomsday-red/30 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-doomsday-red/20 hover:bg-doomsday-red/40 rounded-md transition-colors"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
