import React from 'react';

interface CircularFrameProps {
  children: React.ReactNode;
}

export function CircularFrame({ children }: CircularFrameProps) {
  return (
    <div className="relative w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#f8d568] to-[#b8860b] p-12 shadow-2xl border-8 border-[#d4af37] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-4 rounded-full border-4 border-[#d4af37] opacity-50" />
      <div className="absolute inset-8 rounded-full border-2 border-[#d4af37] opacity-30" />
      {children}
    </div>
  );
}