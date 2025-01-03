import React from 'react';
import { PlaceItem } from './PlaceItem';
import { AddPlaceButton } from '../components/AddPlaceButton';
import { RecommendedPlace } from './RecommendedPlace';

export const ItineraryCard = ({ places, recommendedPlaces, budget }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Places List */}
      <div className="space-y-4 p-4">
        {places.map((place, index) => (
          <PlaceItem key={index} place={place} />
        ))}
        <AddPlaceButton />
      </div>

      {/* Recommended Places */}
      <div className="p-4 border-t">
        <h3 className="text-sm text-gray-600 mb-3">Recommended places</h3>
        <div className="flex gap-4 overflow-x-auto">
          {recommendedPlaces.map((place, index) => (
            <RecommendedPlace key={index} place={place} />
          ))}
        </div>
      </div>

      {/* Days Section */}
      <div className="border-t">
        <button className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50">
          <span className="font-medium">Monday, March 8</span>
          <span>•••</span>
        </button>
        <button className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 border-t">
          <span className="font-medium">Tuesday, March 9</span>
          <span>•••</span>
        </button>
      </div>

      {/* Budgeting Section */}
      <div className="border-t">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Budgeting</h3>
            <button className="px-3 py-1 bg-red-500 text-white text-sm rounded-md">
              Add expense
            </button>
          </div>
          <div className="mb-4">
            <div className="text-2xl font-bold mb-2">${budget.total.toFixed(2)}</div>
            <div className="w-full bg-blue-100 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full" 
                style={{ width: `${(budget.total / budget.limit) * 100}%` }}
              ></div>
            </div>
            <div className="text-sm text-gray-500 mt-1">Budget: ${budget.limit}</div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 px-3 py-2 text-sm border rounded hover:bg-gray-50">
              Edit budget
            </button>
            <button className="flex-1 px-3 py-2 text-sm border rounded hover:bg-gray-50">
              Debt summary
            </button>
            <button className="px-3 py-2 text-sm border rounded hover:bg-gray-50">
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 