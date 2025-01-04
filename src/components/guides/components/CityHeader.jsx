import React from 'react';

export const CityHeader = ({ title, description, image }) => {
  return (
    <div className="relative h-[50vh]">
      <img 
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-white/90 text-lg max-w-2xl">
          {description}
        </p>
        
        <div className="mt-6">
          <div className="inline-flex bg-white rounded-lg p-2">
            <input 
              type="date" 
              className="px-4 py-2"
              placeholder="Start date"
            />
            <span className="px-2 py-2">—</span>
            <input 
              type="date" 
              className="px-4 py-2"
              placeholder="End date"
            />
            <button className="ml-2 px-6 py-2 bg-coral-500 text-white rounded-md">
              Start planning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 