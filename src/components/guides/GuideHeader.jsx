import React from 'react';

export const GuideHeader = ({ data }) => {
  return (
    <div className="relative h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={data.headerImage}
          alt={data.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-white text-2xl">⊕</div>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-200">
              <span className="mr-1">↺</span> Undo
            </button>
            <button className="text-gray-400">
              <span className="mr-1">↻</span> Redo
            </button>
            <button className="bg-gray-900 text-white px-4 py-1.5 rounded-md">
              Share
            </button>
            <button className="text-white">Export</button>
            <button className="text-white">⋯</button>
          </div>
        </div>

        {/* Guide Info */}
        <div className="absolute bottom-8">
          <div className="flex space-x-2 mb-4">
            {data.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-white/20 rounded-full text-white text-sm">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{data.title}</h1>
          <div className="flex items-center text-white/80 text-sm space-x-4">
            <span>{data.author.name}</span>
            <span>•</span>
            <span>{data.author.date}</span>
            <span>•</span>
            <span>{data.author.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 