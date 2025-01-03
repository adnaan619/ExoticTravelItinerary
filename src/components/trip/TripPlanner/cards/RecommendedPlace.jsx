import React from 'react';

export const RecommendedPlace = ({ place }) => {
  return (
    <div className="flex-shrink-0 w-48 group cursor-pointer">
      <div className="relative h-32 mb-2">
        <img 
          src={place.image} 
          alt={place.name}
          className="w-full h-full object-cover rounded-lg"
        />
        <button className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          +
        </button>
      </div>
      <div className="text-sm font-medium">{place.name}</div>
    </div>
  );
}; 