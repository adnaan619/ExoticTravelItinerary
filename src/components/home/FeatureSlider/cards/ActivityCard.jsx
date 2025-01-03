import React from 'react';

export const ActivityCard = ({ activity }) => (
  <div className="bg-white rounded-lg border p-4">
    <div className="flex gap-4">
      <img
        src={activity.image}
        alt={activity.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <div className="font-medium">{activity.name}</div>
            <div className="text-sm text-gray-600">{activity.datetime}</div>
          </div>
          <div className="text-right">
            <div className="font-medium">${activity.price}</div>
            <div className="text-sm text-gray-500">per person</div>
          </div>
        </div>
        <div className="mt-2">
          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-sm">
            {activity.status}
          </span>
        </div>
      </div>
    </div>
  </div>
); 