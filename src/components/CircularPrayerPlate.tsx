import React, { useState } from 'react';
import { CircularFrame } from './CircularFrame';
import { CircularContent } from './CircularContent';
import { CircularDecoration } from './CircularDecoration';
import { CircularEnvelope } from './CircularEnvelope';
import { PlateDetails } from './PlateDetails';
import { WeddingDetails } from '../types/wedding';

interface CircularPrayerPlateProps extends WeddingDetails {}

export function CircularPrayerPlate(props: CircularPrayerPlateProps) {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);

  return (
    <div className="relative">
      <CircularFrame>
        <CircularDecoration />
        <CircularContent 
          brideNames={props.brideNames} 
          groomNames={props.groomNames}
          isVisible={!isEnvelopeOpened}
        />
        <PlateDetails 
          details={props}
          isVisible={isEnvelopeOpened}
        />
        <CircularEnvelope {...props} onOpen={() => setIsEnvelopeOpened(true)} />
      </CircularFrame>
    </div>
  );
}