import React from 'react';

export const RecommendationsMockup = ({ content }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6">
        <div className="space-y-4">
          {content.items.map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-medium">{item.title}</div>
                  <div className="flex items-center gap-1 text-sm text-yellow-500">
                    <span>★</span>
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 