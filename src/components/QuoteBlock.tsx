
import React from 'react';

interface QuoteBlockProps {
  quote: string;
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({ quote }) => {
  return (
    <div className="my-6 px-4 py-3 bg-doomsday-red/10 border-l-4 border-doomsday-red rounded relative">
      <div className="absolute -top-3 -left-2 text-4xl text-doomsday-red/40">"</div>
      <p className="text-lg md:text-xl italic text-doomsday-light/90 ml-3">
        {quote}
      </p>
      <div className="absolute -bottom-5 -right-2 text-4xl text-doomsday-red/40">"</div>
    </div>
  );
};

export default QuoteBlock;
