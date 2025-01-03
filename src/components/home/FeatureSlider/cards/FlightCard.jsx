import React from 'react';

export const FlightCard = ({ flight }) => (
  <div className="bg-white rounded-lg border p-4">
    <div className="flex justify-between items-start">
      <div>
        <div className="text-sm text-gray-500">Flight</div>
        <div className="font-medium">{flight.route}</div>
        <div className="text-sm text-gray-600 mt-1">{flight.airline}</div>
      </div>
      <div className="text-right">
        <div className="font-medium">${flight.price}</div>
        <div className="text-sm text-gray-500">{flight.type}</div>
      </div>
    </div>
    <div className="mt-4 flex items-center justify-between text-sm">
      <span>{flight.datetime}</span>
      <span className="px-2 py-1 bg-green-100 text-green-700 rounded">
        {flight.status}
      </span>
    </div>
  </div>
); 