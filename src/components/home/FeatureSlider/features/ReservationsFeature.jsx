import React from 'react';
import { FlightCard } from '../cards/FlightCard';
import { HotelCard } from '../cards/HotelCard';
import { ActivityCard } from '../cards/ActivityCard';
import { TripSummary } from '../cards/TripSummary';

export const ReservationsFeature = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <div className="space-y-4">
          <FlightCard flight={data.flight} />
          <HotelCard hotel={data.hotel} />
          <ActivityCard activity={data.activity} />
        </div>
      </div>
      <TripSummary expenses={data.expenses} />
    </div>
  );
}; 