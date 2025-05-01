
import React from 'react';

interface BurningTextProps {
  text: string;
  className?: string;
}

const BurningText: React.FC<BurningTextProps> = ({ text, className }) => {
  return (
    <h1 
      className={`text-4xl md:text-6xl font-bold text-center burning-text animate-burning-text ${className || ''}`}
    >
      {text}
    </h1>
  );
};

export default BurningText;
