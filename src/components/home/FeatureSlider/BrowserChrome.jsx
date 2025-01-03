import React from 'react';

export const BrowserChrome = () => (
  <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 border-b">
    <div className="flex space-x-1">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <div className="flex-1 flex justify-center">
      <div className="px-16 py-1 bg-white rounded text-sm text-gray-600">
        wanderlog.com
      </div>
    </div>
  </div>
); 