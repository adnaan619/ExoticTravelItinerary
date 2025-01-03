import React from 'react';

const LodgingCard = ({ lodging }) => (
  <div className="bg-white rounded-lg border overflow-hidden">
    <div className="relative">
      <img 
        src={lodging.image} 
        alt={lodging.name} 
        className="w-full h-48 object-cover"
      />
      {lodging.badge && (
        <span className="absolute top-2 right-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
          {lodging.badge}
        </span>
      )}
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-medium">{lodging.name}</h3>
          <div className="text-sm text-gray-600">{lodging.location}</div>
        </div>
        <div className="text-right">
          <div className="font-medium">${lodging.price}</div>
          <div className="text-sm text-gray-500">per night</div>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-yellow-400">★</span>
        <span>{lodging.rating}</span>
        <span className="text-gray-400">•</span>
        <span className="text-sm text-gray-600">{lodging.reviews} reviews</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {lodging.amenities.map((amenity) => (
          <span 
            key={amenity}
            className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
          >
            {amenity}
          </span>
        ))}
      </div>
      <button className="w-full px-4 py-2 bg-coral-500 text-white rounded-lg">
        View Details
      </button>
    </div>
  </div>
);

export const LodgingFeature = ({ data }) => (
  <div>
    <div className="flex items-center justify-between mb-6">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">Available Hotels</h2>
        <p className="text-gray-600">Mar 21 - Mar 23 • 2 nights • 2 guests</p>
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 border rounded-lg text-sm">
          Filter
        </button>
        <button className="px-4 py-2 border rounded-lg text-sm">
          Sort by: Price
        </button>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-6">
      {data.hotels.map((hotel) => (
        <LodgingCard key={hotel.id} lodging={hotel} />
      ))}
    </div>
  </div>
); 