import React from 'react';

export const LodgingCard = ({ hotel }) => {
  return (
    <div className="bg-white rounded-lg border p-4 hover:shadow-sm transition-shadow relative">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="text-sm font-medium">
            {hotel.name}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm text-gray-500">
            <span className="font-medium">{hotel.confirmation}</span>
            <button className="ml-2 text-gray-400 hover:text-gray-600">
              📋
            </button>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-600 mb-4">
        {hotel.address}
      </div>

      {hotel.notes && (
        <div className="mt-4">
          <div className="text-sm font-medium text-gray-700 mb-1">NOTES</div>
          <div className="text-sm text-gray-600">
            {hotel.notes}
          </div>
        </div>
      )}

      <button className="absolute top-4 right-4 text-sm text-gray-500 hover:bg-gray-100 px-3 py-1 rounded">
        Edit
      </button>
    </div>
  );
}; 