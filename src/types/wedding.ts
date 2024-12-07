export interface WeddingDetails {
  brideNames: string;
  groomNames: string;
  date: string;
  time: string;
  venue: string;
  rsvpDate: string;
  dressCode: string;
  schedule: EventSchedule[];
  additionalInfo: string[];
  contactInfo: ContactInfo;
}

export interface EventSchedule {
  time: string;
  event: string;
  description?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  website?: string;
}