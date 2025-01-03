import React from 'react';
import { PlaceRating } from './PlaceRating';
import { PlaceDetails } from './PlaceDetails';
import { PlaceImage } from './PlaceImage';

export const PlaceCard = ({ place, onSelect }) => {
  return (
    <div 
      className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={onSelect}
    >
      <div className="flex gap-6">
        <PlaceImage image={place.image} name={place.name} />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium mb-2">{place.name}</h3>
              <PlaceRating rating={place.rating} reviews={place.reviews} />
            </div>
            <div className="text-sm text-gray-500">
              {place.openingHours}
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-4">
            {place.description}
          </p>

          <PlaceDetails 
            duration={place.duration}
            distance={place.distance}
            priceRange={place.priceRange}
          />
        </div>
      </div>
    </div>
  );
}; 