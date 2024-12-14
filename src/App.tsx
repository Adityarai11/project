import React from 'react';
import { CircularPrayerPlate } from './components/CircularPrayerPlate';
import { FallingPetals } from './components/FallingPetals';
import { weddingData } from './data/weddingData';
import marriageImg from './img/marriage.jpg'

function App() {
  return (
  <div 
    style={{
    minHeight: '100vh',
    width: '100%',
    backgroundImage: `url(${marriageImg})`, // Correctly format the backgroundImage
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem'
  }}
  >

      <FallingPetals />
      <div className="backdrop-blur-sm bg-white/30 p-12 rounded-3xl shadow-2xl max-w-[90%] w-auto">
        <CircularPrayerPlate {...weddingData} />
      </div>
    </div>
  );
}

export default App;