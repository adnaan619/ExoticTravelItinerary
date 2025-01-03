import React from 'react';

export const HotelCard = ({ hotel }) => (
  <div className="bg-white rounded-lg border p-4">
    <div className="flex gap-4">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <div className="font-medium">{hotel.name}</div>
            <div className="text-sm text-gray-600">{hotel.dates}</div>
          </div>
          <div className="text-right">
            <div className="font-medium">${hotel.price}</div>
            <div className="text-sm text-gray-500">Total</div>
          </div>
        </div>
        <div className="mt-2 flex items-center space-x-2">
          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">
            {hotel.provider}
          </span>
          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
            {hotel.status}
          </span>
        </div>
      </div>
    </div>
  </div>
); 