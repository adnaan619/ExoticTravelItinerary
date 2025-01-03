import React from 'react';
import { TripHeader } from './TripHeader';
import { TripContent } from './TripContent';
import { TripMap } from './TripMap';

export const TripPlanner = () => {
  return (
    <div className="flex h-screen">
      {/* Left side - Trip Details */}
      <div className="w-1/2 overflow-y-auto border-r">
        <TripHeader />
        <TripContent />
      </div>

      {/* Right side - Map */}
      <div className="w-1/2">
        <TripMap />
      </div>
    </div>
  );
}; 