import React from 'react';
import { RecommendedPlace } from '../cards/RecommendedPlace';

export const RecommendedPlaces = ({ places }) => {
  return (
    <div>
      <h3 className="text-sm text-gray-600 mb-3">Recommended places</h3>
      <div className="flex gap-4 overflow-x-auto">
        {places.map((place, index) => (
          <RecommendedPlace key={index} place={place} />
        ))}
      </div>
    </div>
  );
}; 