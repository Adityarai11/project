import React, { useState } from 'react';
import { Flower } from 'lucide-react';

interface CardProps {
  date: string;
  time: string;
  venue: string;
  brideNames: string;
  groomNames: string;
}

export function Card({ date, time, venue, brideNames, groomNames }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-[400px] h-[600px] perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${
        isFlipped ? 'rotate-y-180' : ''
      }`}>
        {/* Front of the card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full bg-gradient-to-br from-[#f7e7ce] to-[#d4af37] rounded-lg shadow-2xl p-8 flex flex-col items-center justify-center border-4 border-[#d4af37]">
            <Flower className="w-16 h-16 text-[#b8860b] mb-6" />
            <h1 className="text-4xl font-serif text-[#704214] mb-4 text-center">Wedding Invitation</h1>
            <div className="w-32 h-1 bg-[#b8860b] mb-6"></div>
            <p className="text-2xl font-serif text-[#704214] mb-2">{brideNames}</p>
            <p className="text-xl font-serif text-[#704214] mb-4">&</p>
            <p className="text-2xl font-serif text-[#704214] mb-6">{groomNames}</p>
            <div className="flex items-center gap-2 text-[#8b4513] mt-4">
              <p className="text-sm italic">Click to view details</p>
            </div>
          </div>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-gradient-to-br from-[#f7e7ce] to-[#d4af37] rounded-lg shadow-2xl p-8 flex flex-col items-center justify-center border-4 border-[#d4af37]">
            <h2 className="text-2xl font-serif text-[#704214] mb-6">Wedding Details</h2>
            <div className="space-y-4 text-center">
              <div>
                <p className="text-lg font-semibold text-[#8b4513]">Date</p>
                <p className="text-[#704214]">{date}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-[#8b4513]">Time</p>
                <p className="text-[#704214]">{time}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-[#8b4513]">Venue</p>
                <p className="text-[#704214]">{venue}</p>
              </div>
            </div>
            <div className="absolute bottom-4 text-sm text-[#8b4513] italic">
              Click to flip back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}