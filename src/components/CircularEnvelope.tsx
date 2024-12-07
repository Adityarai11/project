import React from 'react';
import { Envelope } from './Envelope';
import { WeddingDetails } from '../types/wedding';

interface CircularEnvelopeProps extends WeddingDetails {
  onOpen: () => void;
}

export function CircularEnvelope(props: CircularEnvelopeProps) {
  return (
    <div className="absolute left-1/2 bottom-32 -translate-x-1/2">
      <Envelope {...props} />
    </div>
  );
}