import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const PriceRangeSection = () => {
  const [priceRange, setPriceRange] = useState(150);
  const [activeCategory, setActiveCategory] = useState(null);

  const hotelCategories = [
    {
      priceRange: [0, 30],
      stars: 1,
      type: 'Backpacker',
      description: 'Perfect for budget travelers and backpackers looking for basic accommodation with local charm',
      features: [
        'Shared or private rooms',
        'Common kitchen',
        'Free WiFi in common areas',
        'Lockers',
        'Community atmosphere'
      ],
      examples: [
        'Colombo City Hostels',
        'Clock Inn Kandy',
        'Hangover Hostels'
      ],
      amenities: [
        'Basic bathroom facilities',
        'Fan cooling',
        'Bed linens provided',
        'Security lockers',
        '24/7 reception'
      ],
      locations: [
        'Colombo Fort',
        'Kandy City Center',
        'Galle Fort Area',
        'Ella Town'
      ],
      image: '/images/backpacker-hotel.jpg',
      bestFor: ['Solo travelers', 'Backpackers', 'Youth groups'],
      mealOptions: ['Self-catering', 'Nearby local restaurants'],
      averageRating: 4.0
    },
    {
      priceRange: [31, 60],
      stars: 2,
      type: 'Budget',
      description: 'Comfortable local guesthouses and small hotels offering essential amenities at affordable prices',
      features: [
        'Private rooms',
        'En-suite bathroom',
        'Fan or basic AC',
        'Simple breakfast',
        'Local hospitality'
      ],
      examples: [
        'YMCA Rest Houses',
        'Local Guesthouses',
        'Family-run B&Bs'
      ],
      amenities: [
        'Private bathrooms',
        'Daily housekeeping',
        'TV in rooms',
        'Basic toiletries',
        'Dining area'
      ],
      locations: [
        'Residential areas',
        'City outskirts',
        'Local neighborhoods'
      ],
      image: '/images/budget-hotel.jpg',
      bestFor: ['Budget travelers', 'Couples', 'Small families'],
      mealOptions: ['Basic breakfast included', 'Local dining options'],
      averageRating: 4.2
    },
    {
      priceRange: [61, 120],
      stars: 3,
      type: 'Mid-Range',
      description: 'Modern hotels with good amenities and professional service, perfect for comfortable stays',
      features: [
        'AC rooms',
        'Restaurant & bar',
        'Room service',
        'Business facilities',
        'Swimming pool'
      ],
      examples: [
        'Colombo City Hotels',
        'OZO Hotels',
        'Citrus Hotels'
      ],
      amenities: [
        'Full-service restaurant',
        'Conference rooms',
        'Fitness center',
        'Laundry service',
        'Airport shuttle'
      ],
      locations: [
        'City centers',
        'Tourist districts',
        'Beach areas'
      ],
      image: '/images/midrange-hotel.jpg',
      bestFor: ['Business travelers', 'Families', 'Tourist groups'],
      mealOptions: ['Buffet breakfast', 'All-day dining', 'Room service'],
      averageRating: 4.4
    },
    {
      priceRange: [121, 250],
      stars: 4,
      type: 'Upscale',
      description: 'Premium hotels offering excellent facilities and refined service for discerning travelers',
      features: [
        'Luxury rooms & suites',
        'Multiple restaurants',
        'Spa & wellness',
        'Premium amenities',
        'Concierge service'
      ],
      examples: [
        'Cinnamon Hotels',
        'Jetwing Hotels',
        'Amari Resorts'
      ],
      amenities: [
        'Infinity pools',
        'Gourmet dining',
        'Executive lounge',
        'Premium spa services',
        'Beach access'
      ],
      locations: [
        'Prime city locations',
        'Beachfront',
        'Cultural heritage sites'
      ],
      image: '/images/upscale-hotel.jpg',
      bestFor: ['Luxury travelers', 'Honeymooners', 'Corporate executives'],
      mealOptions: ['Multiple restaurants', 'Fine dining', '24-hour dining'],
      averageRating: 4.6
    },
    {
      priceRange: [251, 500],
      stars: 5,
      type: 'Luxury',
      description: 'World-class luxury resorts offering unparalleled service, amenities, and experiences',
      features: [
        'Premium suites',
        'Private pools',
        'Butler service',
        'Helicopter transfers',
        'Exclusive experiences'
      ],
      examples: [
        'Shangri-La Hotels',
        'Anantara Resorts',
        'Taj Hotels'
      ],
      amenities: [
        'Private beach access',
        'Michelin-star dining',
        'Luxury spa treatments',
        'Private yacht services',
        'Personalized butler'
      ],
      locations: [
        'Exclusive beaches',
        'Private islands',
        'Iconic landmarks'
      ],
      image: '/images/luxury-hotel.jpg',
      bestFor: ['VIP guests', 'Celebrities', 'Luxury seekers'],
      mealOptions: ['World-class dining', 'Private dining', 'Celebrity chefs'],
      averageRating: 4.8
    },
    {
      priceRange: [501, 1000],
      stars: 5,
      type: 'Ultra Luxury',
      description: 'Exclusive ultra-luxury resorts offering the pinnacle of hospitality and bespoke experiences',
      features: [
        'Presidential suites',
        'Private villas',
        'Personal staff',
        'Private jet services',
        'Exclusive access'
      ],
      examples: [
        'Aman Resorts',
        'One&Only',
        'Cape Weligama'
      ],
      amenities: [
        'Private island access',
        'Helicopter pad',
        'Luxury car fleet',
        'Private cinema',
        'Wine cellar'
      ],
      locations: [
        'Private peninsulas',
        'Exclusive estates',
        'Heritage properties'
      ],
      image: '/images/ultra-luxury-hotel.jpg',
      bestFor: ['Ultra-high-net-worth individuals', 'Privacy seekers', 'Luxury connoisseurs'],
      mealOptions: ['Personal chef', 'Wine pairing', 'Bespoke dining experiences'],
      averageRating: 4.9
    }
  ];

  useEffect(() => {
    const category = hotelCategories.find(
      cat => priceRange >= cat.priceRange[0] && priceRange <= cat.priceRange[1]
    );
    setActiveCategory(category);
  }, [priceRange]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Accommodations for Every Budget
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From cozy guesthouses to luxury resorts, find the perfect stay that matches your budget
          </p>
        </div>

        {/* Price Range Slider */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-600">Budget</span>
            <span className="text-sm font-medium">${priceRange}/night</span>
          </div>
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-coral-500"
          />
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>$0</span>
            <span>$500+</span>
          </div>
        </div>

        {/* Enhanced Hotel Category Display */}
        {activeCategory && (
          <motion.div
            key={activeCategory.type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-1/3">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={activeCategory.image}
                    alt={activeCategory.type}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <div className="flex items-center gap-1">
                        {[...Array(activeCategory.stars)]?.map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400">★</span>
                        <span className="font-medium">{activeCategory.averageRating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-2/3 p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {activeCategory.type} Hotels
                    </h3>
                    <span className="text-coral-500 font-medium">
                      ${activeCategory.priceRange[0]} - ${activeCategory.priceRange[1]}/night
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {activeCategory.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Features & Amenities */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Features & Amenities</h4>
                    <ul className="space-y-2">
                      {activeCategory.amenities?.map((amenity, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <span className="text-coral-500">✓</span>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Popular Locations */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Popular Locations</h4>
                    <ul className="space-y-2">
                      {activeCategory.locations?.map((location, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <span className="text-coral-500">📍</span>
                          {location}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Perfect For</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeCategory.bestFor?.map((type, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-coral-50 text-coral-600 rounded-full text-sm"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Example Properties */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Popular Chains</h4>
                    <ul className="space-y-2">
                      {activeCategory.examples?.map((example, index) => (
                        <li key={index} className="text-gray-600">
                          • {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">Dining Options:</span>
                    <div className="flex flex-wrap gap-2">
                      {activeCategory.mealOptions?.map((option, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-coral-500 text-white rounded-xl hover:bg-coral-600 transition-colors">
                    Start Planning
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}; 