import React from 'react';

export const PackingProgress = ({ stats, weightLimits, quickAdd, packingTips }) => (
  <div className="space-y-3">
    <div className="bg-gray-50 rounded-lg p-3">
      <h3 className="font-medium mb-2">Progress</h3>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div 
          className="bg-blue-600 h-2 rounded-full" 
          style={{ width: `${(stats.packedItems / stats.totalItems) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>{stats.packedItems}/{stats.totalItems} items packed</span>
        <span>{stats.daysUntilDeparture}d until departure</span>
      </div>
    </div>

    <div className="bg-gray-50 rounded-lg p-3">
      <h3 className="font-medium mb-2 text-sm">Weight Limits</h3>
      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span>Carry-on:</span>
          <span>{weightLimits.carryOn}</span>
        </div>
        <div className="flex justify-between">
          <span>Checked bag:</span>
          <span>{weightLimits.checkedBag}</span>
        </div>
        <div className="flex justify-between text-blue-600">
          <span>Current estimate:</span>
          <span>{weightLimits.currentEstimate}</span>
        </div>
      </div>
    </div>

    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2">
      <span>+</span>
      <span>Add new item</span>
    </button>

    <div className="text-xs text-gray-500">
      <span className="font-medium">Quick add:</span>
      <div className="flex flex-wrap gap-1 mt-1">
        {quickAdd.map(item => (
          <span key={item} className="px-2 py-1 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
); 