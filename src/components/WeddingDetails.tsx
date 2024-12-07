import React from 'react';
import { Flower, Heart } from 'lucide-react';
import { EnvelopeContent } from './EnvelopeContent';
import { WeddingDetails as WeddingDetailsType } from '../types/wedding';

interface WeddingDetailsProps {
  isRevealed: boolean;
  details: WeddingDetailsType;
}

export function WeddingDetails({ isRevealed, details }: WeddingDetailsProps) {
  return (
    <div className="absolute bottom-0 w-full transform-style-3d">
      <div className={`relative w-full max-h-[600px] overflow-y-auto bg-gradient-to-br from-[#fff] to-[#f7e7ce] rounded-lg shadow-xl p-8 flex flex-col items-center justify-center border-2 border-[#d4af37] z-10 transition-all duration-1000 ${
        isRevealed ? 'translate-y-[-50px] opacity-100' : 'opacity-0'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Flower className="w-6 h-6 text-[#b8860b]" />
          <Heart className="w-6 h-6 text-[#b8860b]" />
          <Flower className="w-6 h-6 text-[#b8860b]" />
        </div>
        
        <EnvelopeContent details={details} />
      </div>
    </div>
  );
}