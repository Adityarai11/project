import React from 'react';
import { Flower, Heart } from 'lucide-react';
import { WeddingDetails } from '../types/wedding';
import { Schedule } from './Schedule';
import { AdditionalInfo } from './AdditionalInfo';
import { ContactDetails } from './ContactDetails';

interface PlateDetailsProps {
  details: WeddingDetails;
  isVisible: boolean;
}

export function PlateDetails({ details, isVisible }: PlateDetailsProps) {
  return (
    <div className={`absolute inset-16 rounded-full bg-gradient-to-br from-[#fff] to-[#f7e7ce] shadow-xl p-12 flex flex-col items-center justify-start overflow-y-auto transition-all duration-1000 ${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    }`}>
      <div className="w-full max-w-2xl space-y-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Flower className="w-6 h-6 text-[#b8860b]" />
          <Heart className="w-6 h-6 text-[#b8860b]" />
          <Flower className="w-6 h-6 text-[#b8860b]" />
        </div>

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
    </div>
  );
}