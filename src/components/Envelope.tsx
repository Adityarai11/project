// src/components/Envelope.tsx
import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { EnvelopeFront } from './EnvelopeFront';
import { EnvelopeBack } from './EnvelopeBack';
import { WeddingDetails } from './WeddingDetails';
import { WeddingDetails as WeddingDetailsType } from '../types/wedding';

interface EnvelopeProps extends WeddingDetailsType {
  onOpen: () => void;
}

export function Envelope({ onOpen, ...props }: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setIsHidden(true);
        onOpen();
      }, 1000);
    }
  };

  return (
    <div className="relative w-[400px] perspective-1000">
      <div 
        className={`transition-all duration-1000 transform-style-3d ${
          isOpen ? 'translate-y-[-100px]' : ''
        } ${isHidden ? 'opacity-0 translate-y-[-200px]' : ''}`}
      >
        {/* Envelope Back with Flap */}
        <EnvelopeBack isOpen={isOpen} onClick={handleEnvelopeClick} />

        {/* Envelope Front */}
        <EnvelopeFront onClick={handleEnvelopeClick}>
          <Heart className="w-8 h-8 text-[#b8860b]" />
          <p className="text-lg font-serif text-[#704214] mt-4">Wedding Invitation</p>
          <p className="text-sm text-[#8b4513] mt-2 italic">Click to open</p>
        </EnvelopeFront>

        {/* Wedding Details Card - Only show when envelope is open */}
        {isOpen && (
          <WeddingDetails
            isRevealed={isHidden}
            details={props}
          />
        )}
      </div>
    </div>
  );
}