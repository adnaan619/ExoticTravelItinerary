import React from 'react';

export const TripSidebar = () => {
  return (
    <div className="w-64 flex-shrink-0 bg-white border-r overflow-y-auto">
      <div className="p-4">
        <button className="flex items-center space-x-2 w-full px-3 py-2 bg-gray-100 rounded-lg">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <span className="font-medium">Overview</span>
        </button>
        
        <nav className="mt-4 space-y-1">
          {['Explore', 'Notes', 'Places to visit', 'Untitled'].map((item) => (
            <button
              key={item}
              className="w-full px-3 py-2 text-left text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              {item}
            </button>
          ))}
        </nav>
        
        <div className="mt-6">
          <h3 className="font-medium mb-2">Itinerary</h3>
          <div className="space-y-1">
            {['Thu 1/9', 'Fri 1/10', 'Sat 1/11', 'Sun 1/12', 'Mon 1/13'].map((day) => (
              <button
                key={day}
                className="w-full px-3 py-2 text-left text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 