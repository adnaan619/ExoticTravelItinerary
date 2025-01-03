import React from 'react';

export const AddPlaceButton = () => {
  return (
    <button className="w-full flex items-center gap-2 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg border border-dashed">
      <span>📍</span>
      <span>Add a place</span>
    </button>
  );
}; 