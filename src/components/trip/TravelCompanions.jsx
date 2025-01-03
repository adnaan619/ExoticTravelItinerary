import React from 'react';
import { Plus, Users } from 'lucide-react';

export const TravelCompanions = () => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">
        Who's joining you?
      </label>
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
          <Plus className="w-4 h-4" />
          <span className="text-sm">Invite travelers</span>
        </button>
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
            <Users className="w-4 h-4 text-blue-600" />
          </div>
          {/* Add more companion avatars here */}
        </div>
      </div>
    </div>
  );
}; 