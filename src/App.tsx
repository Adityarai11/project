import React from 'react';
import { CircularPrayerPlate } from './components/CircularPrayerPlate';
import { FallingPetals } from './components/FallingPetals';
import { weddingData } from './data/weddingData';

function App() {
  return (
    <div className="min-h-screen bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJG_BV3jNJeHzGwdX-MmtzhLmOYABqL6ZYbMO2vMKA09Czj0C')] bg-cover bg-center flex items-center justify-center p-8">
      <FallingPetals />
      <div className="backdrop-blur-sm bg-white/30 p-12 rounded-3xl shadow-2xl">
        <CircularPrayerPlate {...weddingData} />
      </div>
    </div>
  );
}

export default App;