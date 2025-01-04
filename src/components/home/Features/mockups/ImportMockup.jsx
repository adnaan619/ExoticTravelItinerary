import React from 'react';

export const ImportMockup = ({ content }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6">
        {/* Email Section */}
        <div className="mb-6">
          <div className="text-sm text-gray-500 mb-2">Forward your bookings to</div>
          <div className="flex items-center gap-2">
            <div className="px-4 py-2 bg-gray-100 rounded-lg font-mono text-sm flex-1">
              {content.email}
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              📋
            </button>
          </div>
        </div>

        {/* Providers */}
        <div className="space-y-3">
          {content.providers.map((provider, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 rounded-lg border hover:border-blue-500 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{provider.icon}</span>
                <span className="font-medium">{provider.name}</span>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 