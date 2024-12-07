import React from 'react';
import { Info } from 'lucide-react';

interface AdditionalInfoProps {
  info: string[];
}

export function AdditionalInfo({ info }: AdditionalInfoProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-serif text-[#8b4513]">Additional Information</h3>
      <div className="space-y-2">
        {info.map((item, index) => (
          <div key={index} className="flex items-center justify-center gap-2">
            <Info className="w-4 h-4 text-[#b8860b]" />
            <span className="text-[#704214]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}