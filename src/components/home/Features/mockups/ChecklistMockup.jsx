import React from 'react';

export const ChecklistMockup = ({ content }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">{content.title}</h3>
          <span className="text-sm text-gray-500">12 items selected</span>
        </div>

        <div className="space-y-3 mb-4">
          {content.items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <input 
                type="checkbox" 
                checked={item.checked}
                readOnly
                className="w-4 h-4 rounded border-gray-300 text-blue-600"
              />
              <span className={item.checked ? 'text-gray-500' : ''}>
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <button className="w-full px-4 py-2 text-sm text-red-600 bg-red-50 rounded-lg hover:bg-red-100">
          {content.action}
        </button>
      </div>
    </div>
  );
}; 