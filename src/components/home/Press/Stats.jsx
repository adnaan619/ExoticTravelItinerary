import React from 'react';

const stats = [
  {
    number: "8M+",
    label: "Trips planned",
    description: "See why millions of trips have been planned with Wanderlog."
  },
  {
    number: "33K+",
    label: "Reviews",
    description: "Trusted by thousands—see why travelers rave about their experience."
  },
  {
    number: "4.9★",
    label: "Rating on App Store",
    description: "Top-rated on the App Store for exceptional travel planning."
  },
  {
    number: "4.7★",
    label: "Rating on Google Play",
    description: "Highly rated and selected as Editor's Choice on Google Play."
  }
];

export const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {stat.number}
          </div>
          <div className="text-gray-600 font-medium mb-2">
            {stat.label}
          </div>
          <p className="text-sm text-gray-500">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
}; 