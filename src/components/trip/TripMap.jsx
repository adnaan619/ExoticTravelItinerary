import React from 'react';

export const TripMap = () => {
  return (
    <div className="w-1/3 flex-shrink-0 bg-gray-100 relative">
      {/* Implement your map component here */}
      <div className="absolute top-4 right-4 z-10 space-y-2">
        <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
      </div>
    </div>
  );
}; 