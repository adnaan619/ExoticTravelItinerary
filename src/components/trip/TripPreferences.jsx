import React from 'react';

export const TripPreferences = () => {
  const preferences = [
    { id: 'culture', label: 'Culture & History', icon: '🏛️' },
    { id: 'nature', label: 'Nature & Outdoors', icon: '🏞️' },
    { id: 'food', label: 'Food & Dining', icon: '🍽️' },
    { id: 'adventure', label: 'Adventure', icon: '🏃‍♂️' },
    { id: 'relaxation', label: 'Relaxation', icon: '🌅' },
    { id: 'shopping', label: 'Shopping', icon: '🛍️' }
  ];

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">
        What interests you most about this destination?
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {preferences.map((pref) => (
          <button
            key={pref.id}
            className="px-4 py-3 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors flex items-center space-x-2"
          >
            <span>{pref.icon}</span>
            <span className="text-sm">{pref.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}; 