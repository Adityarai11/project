import React from 'react';

const PETAL_COUNT = 15;

export function FallingPetals() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(PETAL_COUNT)].map((_, index) => (
        <div
          key={index}
          className="absolute animate-falling-petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 5}s`
          }}
        >
          <div 
            className="w-4 h-4 bg-[#ffd700] opacity-60 rounded-full rotate-45 animate-petal-swing"
            style={{
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        </div>
      ))}
    </div>
  );
}