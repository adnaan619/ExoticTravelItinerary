import React from 'react';

export const CollaborationMockup = ({ content }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6">
        {/* User Avatars */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex -space-x-2">
            {content.users.map((user, index) => (
              <div 
                key={index}
                className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-medium text-blue-600"
              >
                {user}
              </div>
            ))}
            <button className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-gray-600 hover:bg-gray-200">
              +
            </button>
          </div>
          <div className="flex items-center gap-1 text-sm text-green-600">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Live</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {content.actions.map(action => (
            <button 
              key={action}
              className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 text-sm font-medium"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}; 