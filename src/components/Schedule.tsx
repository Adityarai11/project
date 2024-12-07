import React from 'react';
import { EventSchedule } from '../types/wedding';
import { Clock } from 'lucide-react';

interface ScheduleProps {
  schedule: EventSchedule[];
}

export function Schedule({ schedule }: ScheduleProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-serif text-[#8b4513]">Schedule of Events</h3>
      <div className="space-y-3">
        {schedule.map((event, index) => (
          <div key={index} className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#b8860b]" />
            <span className="text-[#704214] font-medium">{event.time}</span>
            <span className="text-[#8b4513]">-</span>
            <span className="text-[#704214]">{event.event}</span>
            {event.description && (
              <span className="text-[#8b4513] text-sm">({event.description})</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}