import React from 'react';
import { Flower } from 'lucide-react';

export function FlowerDecoration() {
  return (
    <>
      {/* Corner Flowers */}
      <div className="absolute top-0 left-0 -translate-x-6 -translate-y-6 rotate-45">
        <Flower className="w-16 h-16 text-[#b8860b]" />
      </div>
      <div className="absolute top-0 right-0 translate-x-6 -translate-y-6 -rotate-45">
        <Flower className="w-16 h-16 text-[#b8860b]" />
      </div>
      <div className="absolute bottom-0 left-0 -translate-x-6 translate-y-6 -rotate-45">
        <Flower className="w-16 h-16 text-[#b8860b]" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-6 translate-y-6 rotate-45">
        <Flower className="w-16 h-16 text-[#b8860b]" />
      </div>

      {/* Side Decorations */}
      <div className="absolute left-0 top-1/2 -translate-x-8 -translate-y-1/2">
        <div className="space-y-8">
          <Flower className="w-12 h-12 text-[#b8860b]" />
          <Flower className="w-12 h-12 text-[#b8860b]" />
          <Flower className="w-12 h-12 text-[#b8860b]" />
        </div>
      </div>
      <div className="absolute right-0 top-1/2 translate-x-8 -translate-y-1/2">
        <div className="space-y-8">
          <Flower className="w-12 h-12 text-[#b8860b]" />
          <Flower className="w-12 h-12 text-[#b8860b]" />
          <Flower className="w-12 h-12 text-[#b8860b]" />
        </div>
      </div>
    </>
  );
}