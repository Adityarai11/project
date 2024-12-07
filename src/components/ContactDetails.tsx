import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';
import { ContactInfo } from '../types/wedding';

interface ContactDetailsProps {
  contact: ContactInfo;
}

export function ContactDetails({ contact }: ContactDetailsProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-serif text-[#8b4513]">Contact Information</h3>
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-2">
          <Mail className="w-4 h-4 text-[#b8860b]" />
          <span className="text-[#704214]">{contact.email}</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Phone className="w-4 h-4 text-[#b8860b]" />
          <span className="text-[#704214]">{contact.phone}</span>
        </div>
        {contact.website && (
          <div className="flex items-center justify-center gap-2">
            <Globe className="w-4 h-4 text-[#b8860b]" />
            <span className="text-[#704214]">{contact.website}</span>
          </div>
        )}
      </div>
    </div>
  );
}