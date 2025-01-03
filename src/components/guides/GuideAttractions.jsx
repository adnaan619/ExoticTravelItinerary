import React from 'react';

export const GuideAttractions = ({ onLocationSelect }) => {
  const attractions = [
    {
      title: 'Tokyo attractions',
      description: 'The heart of Japan\'s gaming culture, featuring iconic locations from retro gems to modern gaming landmarks.',
      places: [
        {
          name: 'Super Potato Akihabara',
          description: 'Retro game heaven spread across multiple floors. Amazing selection of classic games and consoles. The 5th floor features a small retro gaming arcade where you can play classic games.',
          longDescription: `A must-visit for any retro gaming enthusiast! Super Potato is legendary among gamers for its incredible collection of retro games, consoles, and merchandise. The store spans multiple floors:
          • B1F: Modern games and current-gen consoles
          • 1F-3F: Retro games, vintage consoles, and collectibles
          • 4F: Rare items and premium collectibles
          • 5F: Retro gaming arcade`,
          image: 'https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2020/05/super-potato-akihabara-iStock-1217739391-1024x600.jpg',
          duration: '1-2 hours',
          distance: '0.2 km',
          country: 'Japan',
          address: '1 Chome-11-2 Sotokanda, Chiyoda City, Tokyo',
          coordinates: { lat: 35.6989, lng: 139.7714 },
          tips: [
            'Visit during weekday mornings for smaller crowds',
            'Bring cash - some rare items can\'t be purchased with cards',
            'Check the condition of used games before buying'
          ],
          priceRange: '¥500-¥50,000',
          rating: 4.7,
          reviews: 1250,
          openingHours: '11:00 AM - 8:00 PM'
        },
        {
          name: 'Nintendo TOKYO',
          description: 'Official Nintendo store with exclusive merchandise, games, and interactive displays. Features limited edition items only available in Japan.',
          longDescription: `Located in Shibuya Parco, Nintendo TOKYO is Nintendo's flagship store in Japan. The store features:
          • Exclusive Nintendo merchandise
          • Interactive game demos
          • Limited edition items
          • Seasonal displays and events
          • Photo opportunities with life-sized characters`,
          image: 'https://www.nintendolife.com/uploads/2019/11/nintendo_tokyo_store_opens-900x.jpg',
          duration: '2-3 hours',
          distance: '1.5 km',
          country: 'Japan',
          address: 'Shibuya Parco 6F, 15-1 Udagawacho, Shibuya',
          coordinates: { lat: 35.6738, lng: 139.7600 },
          tips: [
            'Get there early - lines can be long on weekends',
            'Check their Twitter for limited edition item releases',
            'Join their point system for exclusive rewards'
          ],
          priceRange: '¥1,000-¥20,000',
          rating: 4.8,
          reviews: 2100,
          openingHours: '10:00 AM - 9:00 PM'
        },
        {
          name: 'Sega Arcade Building Akihabara',
          description: 'Multi-story gaming paradise with the latest arcade games, crane games, and VR experiences.',
          longDescription: `A towering monument to gaming culture in Akihabara. Each floor offers a different gaming experience:
          • 1F: Latest arcade fighting games
          • 2F-3F: Rhythm and music games
          • 4F: Prize games and UFO catchers
          • 5F: VR Zone with exclusive SEGA VR experiences
          • 6F: Competitive eSports space`,
          image: 'https://www.japan-guide.com/g18/3003_02.jpg',
          duration: '2-4 hours',
          distance: '0.3 km',
          country: 'Japan',
          address: '1 Chome-11-1 Sotokanda, Chiyoda City, Tokyo',
          coordinates: { lat: 35.6989, lng: 139.7714 },
          tips: [
            'Get a SEGA points card for better value',
            'Try the exclusive VR games not available outside Japan',
            'Visit during off-peak hours for shorter wait times'
          ],
          priceRange: '¥100 per play',
          rating: 4.6,
          reviews: 3300,
          openingHours: '10:00 AM - 11:30 PM'
        }
      ]
    },
    {
      title: 'Kyoto Gaming Spots',
      description: 'Home to Nintendo\'s headquarters and historical gaming landmarks.',
      places: [
        {
          name: 'Nintendo Former Headquarters',
          description: 'The historic original Nintendo building where the company started as a playing card manufacturer.',
          longDescription: `While not open to the public, this historic building represents Nintendo's humble beginnings:
          • Original headquarters from 1889
          • Started as a playing card company
          • Beautiful traditional architecture
          • Historical landmark for gaming history`,
          image: 'https://www.nintendolife.com/uploads/2019/04/nintendo_original_headquarters.jpg',
          duration: '30 mins',
          distance: '2.5 km',
          country: 'Japan',
          address: 'Shimogyo Ward, Kyoto',
          coordinates: { lat: 34.9887, lng: 135.7595 },
          tips: [
            'Building is not open to public - viewing from outside only',
            'Great photo opportunity for Nintendo fans',
            'Combine with visit to nearby shrines'
          ],
          priceRange: 'Free',
          rating: 4.3,
          reviews: 520,
          openingHours: 'External viewing only'
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {attractions.map((section) => (
        <div key={section.title} className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <button className="text-blue-600 text-sm hover:text-blue-700">
                Show only these on map
              </button>
            </div>
            <p className="text-gray-600">{section.description}</p>
          </div>

          <div className="divide-y">
            {section.places.map((place) => (
              <div 
                key={place.name} 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => onLocationSelect(place)}
              >
                <div className="flex gap-6">
                  <div className="w-48 h-32 flex-shrink-0">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover rounded-lg shadow-sm"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-medium mb-2">{place.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="flex items-center text-yellow-500">
                            ★ {place.rating}
                          </span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600 text-sm">
                            {place.reviews} reviews
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {place.openingHours}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {place.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span>⏱ {place.duration}</span>
                        <span>📍 {place.distance}</span>
                        <span>💴 {place.priceRange}</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}; 