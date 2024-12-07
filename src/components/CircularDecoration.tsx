import React from 'react';
import { Flower } from 'lucide-react';

export function CircularDecoration() {
  return (
    <>
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            transform: `rotate(${index * 30}deg)`,
            transformOrigin: 'center',
          }}
        >
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: '2rem',
            }}
          >
            <Flower className="w-8 h-8 text-[#b8860b]" style={{ transform: `rotate(-${index * 30}deg)` }} />
          </div>
        </div>
      ))}
    </>
  );
}