import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapSection } from './components/MapSection';

export const EllaGuide = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      id: 'nine-arch',
      title: 'Nine Arch Bridge 🌉',
      description: 'This iconic colonial-era railway bridge spans 91 meters through lush mountain scenery.',
      image: 'https://images.unsplash.com/photo-1586033921061-25b41ea56ea3',
      tags: ['Must visit', 'Photography spot'],
      coordinates: { lat: 6.8741, lng: 81.0622 },
      details: [
        { icon: '🕒', text: 'Best time: Early morning' },
        { icon: '💰', text: 'Free entry' },
        { icon: '⏱️', text: 'Visit duration: 1-2 hours' },
        { icon: '📸', text: 'Photography allowed' }
      ]
    },
    {
      id: 'little-adams-peak',
      title: 'Little Adam\'s Peak 🗻',
      description: 'A moderate hike offering panoramic views of Ella Gap and surrounding mountains.',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
      tags: ['Hiking', 'Sunrise spot'],
      coordinates: { lat: 6.8667, lng: 81.0647 },
      details: [
        { icon: '🕒', text: 'Best time: Sunrise/Sunset' },
        { icon: '⏱️', text: 'Hike duration: 2-3 hours' },
        { icon: '📏', text: 'Elevation: 1141m' },
        { icon: '🥾', text: 'Moderate difficulty' }
      ]
    },
    // ... other locations
  ];

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Content Section */}
      <div className="w-1/2 overflow-y-auto">
        {/* Hero Section */}
        <div className="relative h-[40vh]">
          <img 
            src="https://images.unsplash.com/photo-1566766189268-ecac9118f2b7"
            alt="Ella Mountain Paradise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white backdrop-blur-sm">
                Verified guide
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white backdrop-blur-sm">
                Sri Lanka guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Ella: Mountain Paradise 🏔️
            </h1>
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <img 
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Kavinda Perera"
                  className="w-8 h-8 rounded-full"
                />
                <span>Kavinda Perera</span>
              </div>
              <span>•</span>
              <span>Sep 16th, 2024</span>
              <span>•</span>
              <span>15,488 views</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">General tips</h2>
            <p className="text-gray-600 mb-6">
              Ella is a small mountain town in Sri Lanka known for its stunning landscapes, hiking trails, and tea plantations. The weather can be quite unpredictable with frequent mist and rain, so pack accordingly! 🌧️
            </p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">What to pack</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  Good hiking shoes - trails can be slippery
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  Light rain jacket or umbrella
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  Warm clothes for evenings
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  Sun protection - altitude means stronger UV
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  Camera - views are spectacular!
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Best time to visit</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  January to March for best weather
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  Early mornings for clearest mountain views
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  Avoid monsoon season (October-November)
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  Sunrise hikes offer the best photo opportunities
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Getting around</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  Take the scenic train journey from Kandy to Ella - book in advance!
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  Tuk-tuks are readily available for local transportation
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  Most hiking trails are accessible from the town center
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  Consider hiring a driver for day trips to nearby attractions
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Ella attractions</h2>
            <p className="text-gray-600 mb-6">
              Discover breathtaking viewpoints, historic bridges, and serene tea plantations.
            </p>

            <div className="space-y-6">
              {locations.map(location => (
                <div 
                  key={location.id}
                  className={`bg-gray-50 rounded-xl p-6 cursor-pointer transition-all duration-200 ${
                    selectedLocation?.id === location.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => handleLocationClick(location)}
                >
                  <div className="flex items-start gap-4">
                    <img 
                      src={location.image}
                      alt={location.title}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold mb-2">{location.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {location.description}
                      </p>
                      <div className="flex gap-2">
                        {location.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 text-sm bg-gray-200 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t">
                    {location.details.map((detail, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span>{detail.icon}</span>
                        <span className="text-sm">{detail.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Local Food & Cafes</h2>
            <p className="text-gray-600 mb-6">
              Experience the best of Sri Lankan cuisine and international favorites in Ella.
            </p>
            {/* Add restaurant recommendations */}
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Where to Stay</h2>
            <p className="text-gray-600 mb-6">
              From budget hostels to luxury eco-resorts, find your perfect stay in Ella.
            </p>
            {/* Add accommodation recommendations */}
          </section>
        </div>
      </div>

      {/* Right Map Section */}
      <MapSection 
        locations={locations}
        selectedLocation={selectedLocation}
        center={{ lat: 6.8667, lng: 81.0494 }}
        zoom={14}
        onLocationSelect={setSelectedLocation}
      />
    </div>
  );
}; 