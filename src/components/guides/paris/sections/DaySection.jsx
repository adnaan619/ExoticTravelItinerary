import React from 'react';
import { PlaceCard } from '../cards/PlaceCard';

export const DaySection = ({ section, onLocationSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <button className="text-blue-600 text-sm hover:text-blue-700">
            Show only these on map
          </button>
        </div>
        <p className="text-gray-600">{section.description}</p>
      </div>

      <div className="divide-y">
        {section.places.map((place) => (
          <PlaceCard 
            key={place.name}
            place={place}
            onSelect={() => onLocationSelect(place)}
          />
        ))}
      </div>
    </div>
  );
}; 