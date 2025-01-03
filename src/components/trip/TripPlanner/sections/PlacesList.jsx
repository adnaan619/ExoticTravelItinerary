import React from 'react';

export const PlacesList = ({ places }) => {
  return (
    <div className="space-y-4">
      {places.map((place, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex-1">
            <h3 className="font-medium mb-1">{place.name}</h3>
            <p className="text-sm text-gray-600">{place.description}</p>
          </div>
          {place.image && (
            <div className="w-24 h-24 flex-shrink-0">
              <img 
                src={place.image} 
                alt={place.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}; 