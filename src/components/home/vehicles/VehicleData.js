export const vehicleData = {
    tuktuk: {
      type: 'tuktuk',
      name: 'Traditional Tuk-Tuks',
      icon: '🛺',
      svgIcon: '/icons/tuktuk.svg',
      tagline: 'Experience Sri Lanka like a local',
      description: 'The iconic three-wheeler thats perfect for city exploration',
      priceRange: '$40-60/day',
      features: [
        { text: 'Perfect for city exploration', position: { top: '25%', right: '10%' } },
        { text: 'Driver included', position: { bottom: '30%', left: '20%' } },
        { text: 'Authentic experience', position: { top: '40%', right: '25%' } },
        { text: 'Flexible routes', position: { bottom: '45%', left: '35%' } },
        { text: 'Local insights', position: { top: '15%', left: '30%' } }
      ],
      models: [
        { name: 'Classic Tuk-Tuk', price: '$40/day', position: { bottom: '20%', right: '15%' } },
        { name: 'Premium Tuk-Tuk', price: '$50/day', position: { top: '15%', left: '40%' } },
        { name: 'Electric Tuk-Tuk', price: '$60/day', position: { bottom: '40%', right: '35%' } }
      ],
      highlights: [
        'City tours available',
        'Market visits',
        'Street food exploration',
        'Photography stops'
      ]
    },
    motorcycle: {
      type: 'motorcycle',
      name: 'Adventure Bikes',
      icon: '🏍️',
      svgIcon: '/icons/motorcycle.svg',
      tagline: 'Freedom to explore at your pace',
      description: 'Perfect for adventurous souls and scenic routes',
      priceRange: '$30-70/day',
      features: [
        { text: 'Helmet & gear provided', position: { top: '20%', left: '15%' } },
        { text: 'GPS navigation', position: { bottom: '35%', right: '20%' } },
        { text: 'Breakdown assistance', position: { top: '45%', left: '25%' } },
        { text: '24/7 support', position: { bottom: '25%', left: '30%' } },
        { text: 'Route planning', position: { top: '30%', right: '25%' } }
      ],
      models: [
        { name: 'Royal Enfield Classic 350', price: '$50/day', position: { top: '25%', right: '20%' } },
        { name: 'Honda CB300R', price: '$60/day', position: { bottom: '25%', left: '30%' } },
        { name: 'Yamaha MT-07', price: '$70/day', position: { top: '35%', right: '35%' } }
      ],
      highlights: [
        'Mountain routes',
        'Coastal rides',
        'Off-road trails',
        'Guided tours available'
      ]
    },
    car: {
      type: 'car',
      name: 'Luxury Cars',
      icon: '🚗',
      svgIcon: '/icons/car.svg',
      tagline: 'Travel in comfort and style',
      description: 'Premium vehicles with professional drivers',
      priceRange: '$80-250/day',
      features: [
        { text: 'Professional chauffeur', position: { top: '20%', left: '15%' } },
        { text: 'Premium comfort', position: { bottom: '35%', right: '20%' } },
        { text: 'Airport transfers', position: { top: '45%', left: '25%' } },
        { text: 'Refreshments included', position: { bottom: '25%', right: '30%' } },
        { text: 'WiFi onboard', position: { top: '30%', right: '35%' } }
      ],
      models: [
        { name: 'Mercedes S-Class', price: '$250/day', position: { top: '25%', right: '20%' } },
        { name: 'BMW 7 Series', price: '$200/day', position: { bottom: '25%', left: '30%' } },
        { name: 'Audi A6', price: '$180/day', position: { top: '35%', right: '35%' } },
        { name: 'Toyota Camry', price: '$100/day', position: { bottom: '35%', left: '25%' } }
      ],
      highlights: [
        'Corporate travel',
        'Wedding services',
        'VIP transport',
        'Long-distance comfort'
      ]
    },
    van: {
      type: 'van',
      name: 'Spacious Vans',
      icon: '🚐',
      svgIcon: '/icons/van.svg',
      tagline: 'Perfect for groups and families',
      description: 'Comfortable travel for larger groups with ample space',
      priceRange: '$100-300/day',
      features: [
        { text: 'Up to 12 passengers', position: { top: '30%', left: '10%' } },
        { text: 'Ample luggage space', position: { bottom: '25%', right: '15%' } },
        { text: 'Tour packages available', position: { top: '35%', right: '30%' } },
        { text: 'Entertainment system', position: { bottom: '40%', left: '25%' } },
        { text: 'Flexible seating', position: { top: '20%', right: '40%' } }
      ],
      models: [
        { name: 'Mercedes V-Class', price: '$300/day', position: { bottom: '30%', left: '25%' } },
        { name: 'Toyota Granvia', price: '$250/day', position: { top: '20%', right: '25%' } },
        { name: 'VW Caravelle', price: '$200/day', position: { bottom: '35%', right: '30%' } }
      ],
      highlights: [
        'Airport transfers',
        'Multi-day tours',
        'Corporate groups',
        'Family vacations'
      ]
    },
    yacht: {
      type: 'yacht',
      name: 'Luxury Yachts',
      icon: '🛥️',
      svgIcon: '/icons/yacht.svg',
      tagline: 'Explore the coastal paradise',
      description: 'Premium maritime experiences with full crew service',
      priceRange: '$500-5000/day',
      features: [
        { text: 'Professional crew', position: { top: '15%', left: '20%' } },
        { text: 'Gourmet catering', position: { bottom: '40%', right: '25%' } },
        { text: 'Water activities', position: { top: '30%', right: '20%' } },
        { text: 'Overnight stays', position: { bottom: '20%', left: '35%' } },
        { text: 'Bar service', position: { top: '25%', left: '40%' } }
      ],
      models: [
        { name: 'Luxury Catamaran', price: '$1500/day', position: { top: '40%', left: '15%' } },
        { name: 'Sport Yacht', price: '$2500/day', position: { bottom: '20%', right: '20%' } },
        { name: 'Super Yacht', price: '$5000/day', position: { top: '25%', right: '35%' } }
      ],
      highlights: [
        'Sunset cruises',
        'Island hopping',
        'Whale watching',
        'Private events'
      ]
    },
    helicopter: {
      type: 'helicopter',
      name: 'Helicopter Services',
      icon: '🚁',
      svgIcon: '/icons/helicopter.svg',
      tagline: 'See Sri Lanka from above',
      description: 'Exclusive aerial experiences with stunning views',
      priceRange: '$400-3000/trip',
      features: [
        { text: 'Experienced pilots', position: { top: '25%', left: '15%' } },
        { text: 'Scenic routes', position: { bottom: '30%', right: '20%' } },
        { text: 'Custom itineraries', position: { top: '35%', right: '25%' } },
        { text: 'Photography flights', position: { bottom: '35%', left: '30%' } },
        { text: 'VIP service', position: { top: '20%', right: '35%' } }
      ],
      models: [
        { name: 'City Tour (30min)', price: '$400/person', position: { bottom: '25%', left: '20%' } },
        { name: 'Island Transfer', price: '$2000/trip', position: { top: '30%', right: '25%' } },
        { name: 'Custom Charter', price: '$3000/hour', position: { bottom: '35%', right: '30%' } }
      ],
      highlights: [
        'Aerial photography',
        'Temple tours',
        'Hotel transfers',
        'Special occasions'
      ]
    }
  }; 