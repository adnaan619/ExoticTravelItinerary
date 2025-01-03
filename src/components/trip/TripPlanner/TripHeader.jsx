import React from 'react';

export const TripHeader = () => {
  return (
    <div className="px-4 py-3 border-b bg-white">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <img src="/wanderlog-logo.svg" alt="Wanderlog" className="h-6" />
          <span className="text-sm font-medium">SAVED</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 text-sm text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">
            <span>↩</span>
            <span>Undo</span>
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">
            <span>↪</span>
            <span>Redo</span>
          </button>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-1.5 bg-gray-900 text-white rounded-md text-sm font-medium">
            Share
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded">
            <img src="/icons/gallery.svg" alt="Gallery view" className="w-5 h-5" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded">
            <img src="/icons/list.svg" alt="List view" className="w-5 h-5" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded">
            <img src="/icons/more.svg" alt="More options" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}; 