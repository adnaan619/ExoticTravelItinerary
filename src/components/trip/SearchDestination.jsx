import React, { useState } from 'react';
import { Search } from 'lucide-react';

export const SearchDestination = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Where to?</label>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white/90"
          placeholder="Enter a destination"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        
        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <div className="absolute w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion.id}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-2"
              >
                <span>{suggestion.icon}</span>
                <div>
                  <p className="font-medium">{suggestion.name}</p>
                  <p className="text-sm text-gray-500">{suggestion.description}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}; 