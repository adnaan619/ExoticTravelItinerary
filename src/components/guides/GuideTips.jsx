import React from 'react';

export const GuideTips = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">General tips</h2>
        <button className="text-gray-400">▼</button>
      </div>

      <div className="space-y-4">
        <p className="text-gray-600">
          When traveling from the Tokyo area to Kyoto, the shinkansen is very reliable and quick ⚡ No need to go through the airport security screening. Recommended to take transit the entire time you're here as the trains/buses are very prompt 🚅 maybe too prompt! Get to things early 😌
        </p>

        <div className="space-y-2">
          <h3 className="font-medium">Manner tip:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              try not to be too loud on the trains! It's frowned upon and there will occasionally be posters for foreigners as well
            </li>
            <li>
              keep on the left side! unless you're in Osaka 😆
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}; 