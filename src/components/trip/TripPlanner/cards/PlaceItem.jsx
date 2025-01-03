import React from 'react';

export const PlaceItem = ({ place }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <h3 className="font-medium mb-1">{place.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{place.description}</p>
        {place.duration && (
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>🚶‍♂️ {place.duration}</span>
            <span>📍 {place.distance}</span>
            {place.hasDirections && (
              <span className="text-blue-600 hover:underline cursor-pointer">
                Directions
              </span>
            )}
          </div>
        )}
      </div>
      <div className="w-24 h-24 flex-shrink-0">
        <img 
          src={place.image} 
          alt={place.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}; 