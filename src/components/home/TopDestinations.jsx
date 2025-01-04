import React from 'react';
import { Link } from 'react-router-dom';

export const TopDestinations = () => {
  const destinations = {
    'Top 20 Cities': [
      { name: 'Colombo', link: '/guides/colombo' },
      { name: 'Kandy', link: '/guides/kandy-cultural-guide' },
      { name: 'Galle', link: '/guides/galle' },
      { name: 'Ella', link: '/guides/ella-mountain-guide' },
      { name: 'Sigiriya', link: '/guides/sigiriya' },
      { name: 'Nuwara Eliya', link: '/guides/nuwara-eliya' },
      { name: 'Anuradhapura', link: '/guides/anuradhapura' },
      { name: 'Mirissa', link: '/guides/mirissa' },
      { name: 'Trincomalee', link: '/guides/trincomalee' },
      { name: 'Jaffna', link: '/guides/jaffna' }
    ],
    'Top 20 parks & nature': [
      { name: 'Yala National Park', link: '/guides/yala' },
      { name: 'Horton Plains', link: '/guides/horton-plains' },
      { name: 'Sinharaja Forest', link: '/guides/sinharaja' },
      { name: 'Udawalawe National Park', link: '/guides/udawalawe' },
      { name: 'Minneriya National Park', link: '/guides/minneriya' },
      { name: 'Knuckles Mountain Range', link: '/guides/knuckles' },
      { name: 'Wilpattu National Park', link: '/guides/wilpattu' },
      { name: 'Bundala National Park', link: '/guides/bundala' },
      { name: 'Pigeon Island', link: '/guides/pigeon-island' },
      { name: 'Adams Peak', link: '/guides/adams-peak' }
    ],
    'Top 20 attractions': [
      { name: 'Temple of the Tooth', link: '/guides/temple-of-tooth' },
      { name: 'Nine Arch Bridge', link: '/guides/nine-arch-bridge' },
      { name: 'Sigiriya Rock Fortress', link: '/guides/sigiriya-rock' },
      { name: 'Dambulla Cave Temple', link: '/guides/dambulla-caves' },
      { name: 'Galle Fort', link: '/guides/galle-fort' },
      { name: 'World\'s End', link: '/guides/worlds-end' },
      { name: 'Polonnaruwa Ancient City', link: '/guides/polonnaruwa' },
      { name: 'Royal Botanical Gardens', link: '/guides/peradeniya-gardens' },
      { name: 'Little Adam\'s Peak', link: '/guides/little-adams-peak' },
      { name: 'Mihintale', link: '/guides/mihintale' }
    ]
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Sri Lanka
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the best destinations, natural wonders, and cultural attractions across the island
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {Object.entries(destinations).map(([category, places]) => (
            <div key={category} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-4 border-b">
                {category}
              </h2>
              <div className="space-y-3">
                {places.map((place) => (
                  <Link
                    key={place.name}
                    to={place.link}
                    className="group flex items-center py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">
                      →
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {place.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            More destinations being added regularly
          </p>
        </div>
      </div>
    </section>
  );
}; 