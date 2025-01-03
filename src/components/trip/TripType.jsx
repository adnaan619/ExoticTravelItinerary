import React, { useState } from 'react';
import { Plane, Users, Briefcase, Bike, Umbrella, Heart } from 'lucide-react';

export const TripType = () => {
  const [selectedType, setSelectedType] = useState('');

  const tripTypes = [
    { id: 'solo', label: 'Solo Trip', icon: <Plane className="w-4 h-4" /> },
    { id: 'family', label: 'Family', icon: <Users className="w-4 h-4" /> },
    { id: 'business', label: 'Business', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'adventure', label: 'Adventure', icon: <Bike className="w-4 h-4" /> },
    { id: 'leisure', label: 'Leisure', icon: <Umbrella className="w-4 h-4" /> },
    { id: 'honeymoon', label: 'Honeymoon', icon: <Heart className="w-4 h-4" /> }
  ];

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">
        What type of trip is this?
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {tripTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`px-4 py-3 border rounded-lg transition-all flex items-center justify-center space-x-2
              ${selectedType === type.id 
                ? 'border-blue-500 bg-blue-50 text-blue-700' 
                : 'border-gray-200 text-gray-600 hover:border-blue-500 hover:bg-blue-50'
              }`}
          >
            {type.icon}
            <span className="text-sm font-medium">{type.label}</span>
          </button>
        ))}
      </div>
      {selectedType && (
        <p className="text-sm text-gray-500 mt-2">
          Great choice! We'll customize your itinerary for a perfect {selectedType} experience.
        </p>
      )}
    </div>
  );
}; 