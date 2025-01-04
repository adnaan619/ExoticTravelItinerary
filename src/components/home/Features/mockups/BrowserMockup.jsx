import React from 'react';

export const BrowserMockup = ({ content }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Browser Chrome */}
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

      {/* Content */}
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {content.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-xs font-medium bg-gray-100 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <img 
            src={content.preview.image} 
            alt={content.preview.title}
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div>
            <h4 className="font-medium mb-1">{content.preview.title}</h4>
            <p className="text-sm text-gray-600">{content.preview.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 