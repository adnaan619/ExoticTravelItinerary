import React from 'react';

export const PressCard = ({ review }) => {
  const { logo, quote, author, source, handle } = review;
  
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm h-full">
      <img 
        src={logo} 
        alt={source} 
        className="h-8 mb-6 object-contain"
      />
      <blockquote className="mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          "{quote}"
        </p>
      </blockquote>
      <div className="text-sm text-gray-600">
        {author} {handle && <span className="text-blue-600">{handle}</span>}
      </div>
    </div>
  );
}; 