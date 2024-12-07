import React from 'react';
import { Flower2 } from 'lucide-react';
import { Envelope } from './Envelope';
import { FlowerDecoration } from './FlowerDecoration';

interface PrayerPlateProps {
  brideNames: string;
  groomNames: string;
  date: string;
  time: string;
  venue: string;
}

export function PrayerPlate(props: PrayerPlateProps) {
  return (
    <div className="relative">
      {/* Prayer Plate */}
      <div className="relative w-[600px] h-[800px] bg-gradient-to-br from-[#f8d568] to-[#b8860b] rounded-2xl p-12 shadow-2xl border-8 border-[#d4af37] flex flex-col items-center">
        {/* Divine Image */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <img 
            src="https://images.unsplash.com/photo-1582126892906-5ba111b4f218?auto=format&fit=crop&q=80&w=200&h=200" 
            alt="Divine Blessing" 
            className="w-32 h-32 rounded-full border-4 border-[#d4af37] shadow-lg object-cover"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 left-4">
          <Flower2 className="w-12 h-12 text-[#704214]" />
        </div>
        <div className="absolute top-4 right-4">
          <Flower2 className="w-12 h-12 text-[#704214]" />
        </div>

        {/* Flower Decorations */}
        <FlowerDecoration />

        {/* Blessing Text */}
        <div className="text-center mt-40 mb-8">
          <h2 className="text-2xl font-serif text-[#704214]">Divine Blessings</h2>
          <div className="w-32 h-0.5 bg-[#704214] mx-auto my-4" />
          <p className="text-lg font-serif text-[#8b4513] italic">
            On this sacred union
          </p>
        </div>

        {/* Envelope Container */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-4">
          <Envelope {...props} />
        </div>
      </div>
    </div>
  );
}