import React from 'react';
import { CircularPrayerPlate } from './components/CircularPrayerPlate';
import { FallingPetals } from './components/FallingPetals';
import { weddingData } from './data/weddingData';

function App() {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80')] bg-cover bg-center flex items-center justify-center p-8">
      <FallingPetals />
      <div className="backdrop-blur-sm bg-white/30 p-12 rounded-3xl shadow-2xl">
        <CircularPrayerPlate {...weddingData} />
      </div>
    </div>
  );
}

export default App;