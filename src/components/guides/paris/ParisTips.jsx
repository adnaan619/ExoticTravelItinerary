import React from 'react';

export const GuideTips = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Essential Paris Tips</h2>
        <button className="text-gray-400">▼</button>
      </div>

      <div className="space-y-4">
        <p className="text-gray-600">
          Paris is divided into 20 arrondissements (districts) that spiral out from the center. The lower the number, the more central the location. Most major attractions are in 1-8. ⭐ Get a Navigo Easy pass for public transport - much more convenient than individual tickets!
        </p>

        <div className="space-y-2">
          <h3 className="font-medium">Local Tips:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              Learn basic French phrases - even a simple "Bonjour" before starting a conversation goes a long way
            </li>
            <li>
              Most museums are free on the first Sunday of each month 🎨
            </li>
            <li>
              Restaurants often have better-value fixed price menus for lunch than dinner 🍽️
            </li>
            <li>
              Book major attractions in advance to avoid long queues, especially the Eiffel Tower and Louvre
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Safety Tips:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              Watch out for common scams around tourist areas (friendship bracelet, petition signers)
            </li>
            <li>
              Keep your belongings close, especially in crowded metro stations
            </li>
            <li>
              Emergency number: 112 (works in all EU countries) 🚨
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}; 