import React from 'react';
import { LodgingCard } from '../cards/LodgingCard';

export const LodgingSection = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Hotels and lodging</h2>
        <button className="p-1.5 hover:bg-gray-100 rounded">
          <img src="/icons/more.svg" alt="More options" className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-4">
        <LodgingCard
          hotel={{
            name: 'Island Serenity Suites',
            address: '555 Lagoon Vista Lane, Lihue, HI 96766',
            confirmation: '23S74G',
            notes: ''
          }}
        />
      </div>
    </div>
  );
}; 