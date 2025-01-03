import React from 'react';
import { FlightCard } from '../cards/FlightCard';

export const FlightSection = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Flights</h2>
        <button className="p-1.5 hover:bg-gray-100 rounded">
          <img src="/icons/more.svg" alt="More options" className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-4">
        <FlightCard
          departure={{
            airport: 'SFO',
            city: 'San Francisco',
            terminal: 'A',
            gate: '2',
            time: '5:30pm'
          }}
          arrival={{
            airport: 'LIH',
            city: 'Lihue',
            terminal: 'B',
            gate: '-',
            time: '10:45pm'
          }}
          flightInfo={{
            airline: 'United Airlines UA 1234',
            date: 'Sat, Mar 3',
            duration: '5h 15min',
            status: 'ON SCHEDULE',
            confirmation: 'KPS643',
            price: '$273.00'
          }}
        />
        <FlightCard
          departure={{
            airport: 'LIH',
            city: 'Lihue',
            time: '9:30am'
          }}
          arrival={{
            airport: 'SFO',
            city: 'San Francisco',
            time: '2:30pm'
          }}
          flightInfo={{
            airline: 'United Airlines UA 321',
            date: 'Sat, Mar 14',
            confirmation: 'PEY642',
            price: '$290.75',
            note: "We'll show live flight status starting Mar 12, 2024."
          }}
        />
        <button className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg border border-dashed">
          + Add another flight
        </button>
      </div>
    </div>
  );
}; 