import React from 'react';

export const PlaceDetails = ({ duration, distance, priceRange }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center text-sm text-gray-500 space-x-4">
      <span>⏱ {duration}</span>
      <span>📍 {distance}</span>
      <span>💶 {priceRange}</span>
    </div>
    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
      View Details →
    </button>
  </div>
); 