import React from 'react';
import { Button } from '../common/Button';

export const Hero = () => {
  return (
    <div className="pt-32 pb-20 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
        One app for all your travel planning needs
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Create detailed itineraries, explore user-shared guides, and manage your
        bookings seamlessly — all in one place.
      </p>
      <div className="flex justify-center items-center gap-4">
        <Button variant="primary" className="px-8 py-3">
          Start planning
        </Button>
        <Button variant="outline" className="px-8 py-3">
          Get the app →
        </Button>
      </div>
    </div>
  );
};