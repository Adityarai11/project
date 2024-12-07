import React from 'react';

interface EnvelopeFrontProps {
  children: React.ReactNode;
  onClick: () => void;
}

export function EnvelopeFront({ children, onClick }: EnvelopeFrontProps) {
  return (
    <div 
      className="absolute bottom-0 w-full h-[250px] bg-gradient-to-br from-[#f7e7ce] to-[#d4af37] rounded-lg shadow-lg flex flex-col items-center justify-center border-2 border-[#d4af37] z-20 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
}