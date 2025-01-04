import React from 'react';

export const CityCategories = ({ selected, onSelect }) => {
  const categories = [
    { id: 'what-to-do', icon: '📍', label: 'What to do' },
    { id: 'where-to-eat', icon: '🍽️', label: 'Where to eat' },
    { id: 'where-to-stay', icon: '🏨', label: 'Where to stay' }
  ];

  return (
    <div className="border-b sticky top-0 bg-white z-10">
      <div className="flex gap-8 px-8 py-4">
        {categories.map(category => (
          <button
            key={category.id}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors
              ${selected === category.id 
                ? 'bg-gray-100 text-gray-900' 
                : 'text-gray-600 hover:text-gray-900'}`}
            onClick={() => onSelect(category.id)}
          >
            <span>{category.icon}</span>
            <span>{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}; 