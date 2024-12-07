import React from 'react';
import { Flower2 } from 'lucide-react';
import LordGanesh from '../img/Lord ganesh.jpg';
interface CircularContentProps {
  brideNames: string;
  groomNames: string;
  isVisible: boolean;
}

export function CircularContent({ brideNames, groomNames, isVisible }: CircularContentProps) {
  return (
    <div className={`absolute top-32 left-0 right-0 text-center z-20 transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="flex justify-center mb-6">
        <img 
          src={LordGanesh}
          alt="Divine Blessing" 
          className="w-40 h-40 rounded-full border-4 border-[#d4af37] shadow-lg object-cover"
        />
      </div>

      <div className="flex items-center justify-center gap-4 mb-4">
        <Flower2 className="w-8 h-8 text-[#704214]" />
        <h2 className="text-3xl font-serif text-[#704214]">Divine Blessings</h2>
        <Flower2 className="w-8 h-8 text-[#704214]" />
      </div>

      <div className="space-y-2">
        <p className="text-2xl font-serif text-[#704214]">{brideNames}</p>
        <p className="text-xl font-serif text-[#704214]">&</p>
        <p className="text-2xl font-serif text-[#704214]">{groomNames}</p>
      </div>

      <p className="mt-6 text-lg font-serif text-[#8b4513] italic">
        On this sacred union
      </p>
    </div>
  );
}