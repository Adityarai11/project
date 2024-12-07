import React from 'react';

interface EnvelopeBackProps {
  isOpen: boolean;
  onClick: () => void;
}

export function EnvelopeBack({ isOpen, onClick }: EnvelopeBackProps) {
  return (
    <>
      {/* Envelope Back */}
      <div className="absolute bottom-0 w-full h-[250px] bg-gradient-to-br from-[#f7e7ce] to-[#d4af37] rounded-lg border-2 border-[#d4af37]" />
      
      {/* Envelope Flap */}
      <div 
        className={`absolute bottom-[248px] w-full h-[150px] transition-transform duration-1000 origin-bottom z-30 ${
          isOpen ? 'rotate-x-180' : ''
        }`}
      >
        <div 
          className="absolute inset-0 cursor-pointer"
          onClick={onClick}
        >
          <div className="w-full h-full bg-gradient-to-br from-[#f7e7ce] to-[#d4af37] clip-envelope-flap border-2 border-[#d4af37]" />
        </div>
      </div>
    </>
  );
}