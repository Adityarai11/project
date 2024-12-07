import React from 'react';
import { WeddingDetails } from '../types/wedding';
import { Schedule } from './Schedule';
import { AdditionalInfo } from './AdditionalInfo';
import { ContactDetails } from './ContactDetails';

interface EnvelopeContentProps {
  details: WeddingDetails;
}

export function EnvelopeContent({ details }: EnvelopeContentProps) {
  return (
    <div className="w-full space-y-6 text-center">
      <div className="space-y-2">
        <h1 className="text-3xl font-serif text-[#704214] mb-2">
          {details.brideNames} & {details.groomNames}
        </h1>
        <h2 className="text-2xl font-serif text-[#704214] mb-4">Wedding Celebration</h2>
        <p className="text-lg font-serif text-[#8b4513]">{details.date}</p>
        <p className="text-lg font-serif text-[#8b4513]">{details.time}</p>
        <p className="text-lg font-serif text-[#8b4513] whitespace-pre-wrap">{details.venue}</p>
      </div>

      <div className="w-32 h-0.5 bg-[#b8860b] mx-auto my-4" />

      <div className="space-y-2">
        <p className="text-lg font-serif text-[#8b4513]">Dress Code</p>
        <p className="text-md text-[#704214]">{details.dressCode}</p>
      </div>

      <Schedule schedule={details.schedule} />
      
      <div className="w-32 h-0.5 bg-[#b8860b] mx-auto my-4" />

      <AdditionalInfo info={details.additionalInfo} />
      
      <div className="w-32 h-0.5 bg-[#b8860b] mx-auto my-4" />

      <ContactDetails contact={details.contactInfo} />

      <div className="mt-6">
        <p className="text-md font-serif text-[#8b4513]">
          Please RSVP by {details.rsvpDate}
        </p>
      </div>
    </div>
  );
}