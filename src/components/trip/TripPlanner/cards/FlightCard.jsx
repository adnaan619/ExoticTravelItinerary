import React from 'react';

export const FlightCard = ({ departure, arrival, flightInfo }) => {
  return (
    <div className="bg-white rounded-lg border p-4 hover:shadow-sm transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="text-sm font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded">
            {flightInfo.status || 'FLIGHT'}
          </div>
          <div className="text-sm text-gray-600">{flightInfo.airline}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm text-gray-500">
            <span className="font-medium">{flightInfo.confirmation}</span>
            <button className="ml-2 text-gray-400 hover:text-gray-600">
              📋
            </button>
          </div>
          <div className="text-sm font-medium">{flightInfo.price}</div>
        </div>
      </div>

      <div className="flex gap-8 mb-4">
        <div>
          <div className="text-2xl font-medium">{departure.time}</div>
          <div className="text-sm text-gray-600">{departure.airport} {departure.city}</div>
          {departure.terminal && (
            <div className="text-sm text-gray-500 mt-1">
              Terminal {departure.terminal} • Gate {departure.gate}
            </div>
          )}
        </div>
        <div>
          <div className="text-2xl font-medium">{arrival.time}</div>
          <div className="text-sm text-gray-600">{arrival.airport} {arrival.city}</div>
          {arrival.terminal && (
            <div className="text-sm text-gray-500 mt-1">
              Terminal {arrival.terminal} • Gate {arrival.gate}
            </div>
          )}
        </div>
      </div>

      {flightInfo.note ? (
        <div className="text-sm text-gray-500">{flightInfo.note}</div>
      ) : (
        <div className="flex items-center gap-2">
          <span className="text-sm text-blue-600 hover:underline cursor-pointer">
            Haven't checked in yet? Check in
          </span>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Updating live status</span>
          </div>
        </div>
      )}

      <button className="absolute top-4 right-4 text-sm text-gray-500 hover:bg-gray-100 px-3 py-1 rounded">
        Edit
      </button>
    </div>
  );
}; 