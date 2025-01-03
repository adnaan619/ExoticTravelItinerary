import React from 'react';

export const FeatureNav = ({ features, selectedFeature, onSelect }) => {
  return (
    <div className="flex justify-center flex-wrap gap-4 mb-12 max-w-4xl mx-auto">
      {features.map((feature) => (
        <button
          key={feature.id}
          onClick={() => onSelect(feature)}
          className={`flex flex-col items-center p-4 rounded-lg transition-colors min-w-[120px]
            ${selectedFeature.id === feature.id 
              ? 'border-2 border-black bg-white' 
              : 'hover:bg-white/50'}`}
        >
          <span className="text-2xl mb-2">{feature.icon}</span>
          <span className="text-sm font-medium text-gray-900">{feature.label}</span>
        </button>
      ))}
    </div>
  );
}; 