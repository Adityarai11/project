import { WeddingDetails } from '../types/wedding';

export const weddingData: WeddingDetails = {
  brideNames: "Anjali Rai",
  groomNames: "Shardendu Shekhar",
  date: "Jan 19, 2025",
  time: "7:00 PM",
  venue: " BIKA BANQUET,RANGOLI MALL,LILIUAH,HOWRAH",
  
  schedule: [
    {
      time: "4:00 PM",
      event: "Wedding Ceremony",
      description: "Garden Pavilion"
    },
    {
      time: "5:00 PM",
      event: "Cocktail Hour",
      description: "Terrace Lounge"
    },
    {
      time: "6:00 PM",
      event: "Reception Dinner",
      description: "Grand Ballroom"
    },
    {
      time: "7:30 PM",
      event: "Dancing & Celebrations",
      description: "Grand Ballroom"
    }
  ],
  additionalInfo: [
    "Accommodation options available at The Grand Hotel",
    "Complimentary valet parking provided",
    "Gift registry details available on our website",
    "Children's menu available upon request"
  ],
  contactInfo: {
    email: "celebration@emilyandjames.com",
    phone: "+1 (555) 123-4567",
    website: "www.emilyandjames.com"
  }
};