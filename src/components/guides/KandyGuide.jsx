import React, { useState } from 'react';
import { GuideLayout } from '../layout/GuideLayout';
import { GuideContent } from './components/GuideContent';
import { MapSection } from './components/MapSection';

export const KandyGuide = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const guideData = {
    title: "Kandy: Cultural Capital Guide",
    author: {
      name: "Amara Silva",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      date: "Sep 16th, 2024",
      views: "28,075"
    },
    badges: ["Verified guide", "Sri Lanka guide"],
    coverImage: "https://images.unsplash.com/photo-1625736300986-c9d77204ddb5",
    sections: [
      {
        id: 'general-tips',
        title: 'General tips',
        content: `When visiting Kandy, the cultural heart of Sri Lanka, it's best to plan your temple visits for early morning or late afternoon to avoid both the heat and crowds. The weather can be unpredictable, so always carry an umbrella! 🌂`,
        subsections: [
          {
            title: 'Cultural etiquette',
            items: [
              'Remove shoes before entering temples and sacred sites',
              'Dress modestly - cover shoulders and knees, especially in temples',
              'Don\'t take photos with your back to Buddha statues',
              'Women may need to cover their heads in certain temples',
              'Ask permission before photographing monks or ceremonies'
            ]
          },
          {
            title: 'Best time to visit',
            items: [
              'July and August for the Esala Perahera festival',
              'December to April for the best weather conditions',
              'Early mornings (6-8 AM) for temple visits to avoid crowds',
              'Evening times (4-6 PM) for comfortable walks around Kandy Lake'
            ]
          },
          {
            title: 'Getting around',
            items: [
              'Tuk-tuks are readily available - negotiate price before riding',
              'Local buses are cheap but can be crowded during peak hours',
              'Many attractions in city center are within walking distance',
              'Consider hiring a driver for day trips to surrounding areas'
            ]
          }
        ]
      },
      {
        id: 'kandy-attractions',
        title: 'Kandy attractions',
        content: 'Discover the most iconic cultural and historical sites in Kandy, each offering unique insights into Sri Lankan heritage.',
        locations: [
          {
            id: 'tooth-temple',
            title: 'Temple of the Sacred Tooth Relic 🏛️',
            description: 'The crown jewel of Kandy, this temple houses Sri Lanka\'s most important Buddhist relic. The temple complex, known as Sri Dalada Maligawa, is part of the royal palace complex.',
            image: 'https://images.unsplash.com/photo-1625736300986-c9d77204ddb5',
            tags: ['Must visit', 'Cultural site', 'UNESCO Heritage'],
            coordinates: { lat: 7.2936, lng: 80.6413 },
            details: [
              { icon: '🕒', text: 'Open: 5:30 AM - 8 PM' },
              { icon: '💰', text: 'Entry: 2000 LKR' },
              { icon: '⏱️', text: 'Suggested: 2-3 hours' },
              { icon: '📸', text: 'Photography allowed outside' },
              { icon: '🎫', text: 'Ticket includes museum access' },
              { icon: '👔', text: 'Modest dress required' }
            ],
            highlights: [
              'Three daily pujas (offerings) at 5:30 AM, 9:30 AM, and 6:30 PM',
              'Visit the museum to see ancient artifacts',
              'Beautiful architecture spanning several centuries',
              'Regular traditional dance performances'
            ]
          },
          {
            id: 'botanical-gardens',
            title: 'Royal Botanical Gardens 🌺',
            description: 'One of the finest botanical gardens in South Asia, featuring diverse plant collections, spice gardens, and an orchid house.',
            image: 'https://images.unsplash.com/photo-1544219111-6f2c82d0d46c',
            tags: ['Nature', 'Half-day trip', 'Family friendly'],
            coordinates: { lat: 7.2720, lng: 80.5974 },
            details: [
              { icon: '🕒', text: 'Open: 7:30 AM - 5:00 PM' },
              { icon: '💰', text: 'Entry: 1500 LKR' },
              { icon: '⏱️', text: 'Suggested: 3-4 hours' },
              { icon: '📸', text: 'Photography allowed' },
              { icon: '🚶‍♂️', text: 'Guided tours available' },
              { icon: '🍽️', text: 'Cafe on premises' }
            ],
            highlights: [
              'Giant Javan fig tree covering 1600 sqm',
              'Orchid house with over 300 varieties',
              'Avenue of Royal Palms',
              'Spice garden with medicinal plants'
            ]
          },
          {
            id: 'kandy-lake',
            title: 'Kandy Lake 🌅',
            description: 'Artificial lake in the heart of the city, perfect for evening walks and photography. Created in 1807 by the last king of Sri Lanka.',
            image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
            tags: ['Scenic', 'Free', 'Sunset spot'],
            coordinates: { lat: 7.2912, lng: 80.6421 },
            details: [
              { icon: '🕒', text: 'Best time: Sunrise/Sunset' },
              { icon: '💰', text: 'Free entry' },
              { icon: '⏱️', text: 'Walk around: 1 hour' },
              { icon: '📸', text: 'Great photo spots' },
              { icon: '🚶‍♂️', text: '3.5km walking path' }
            ],
            highlights: [
              'Beautiful sunset views',
              'Historic cloud wall (Walakulu wall)',
              'Various bird species',
              'Street food vendors in evening'
            ]
          }
        ]
      },
      {
        id: 'food-scene',
        title: 'Local Cuisine',
        content: 'Experience the unique flavors of Kandyan cuisine, known for its spicy curries and traditional sweets.',
        locations: [
          {
            id: 'devon-restaurant',
            title: 'Devon Restaurant & Bakery 🍛',
            description: 'Famous local restaurant serving authentic Sri Lankan cuisine and short eats.',
            image: 'https://example.com/devon.jpg',
            tags: ['Local cuisine', 'Budget friendly'],
            coordinates: { lat: 7.2931, lng: 80.6368 },
            details: [
              { icon: '🕒', text: 'Open: 7 AM - 10 PM' },
              { icon: '💰', text: 'Budget: 500-1500 LKR' },
              { icon: '⭐', text: 'Local favorite' },
              { icon: '🍽️', text: 'Sri Lankan breakfast' }
            ],
            specialties: [
              'Rice and curry buffet',
              'String hoppers',
              'Lamprais',
              'Fresh pastries'
            ]
          }
          // Add more restaurants...
        ]
      },
      {
        id: 'shopping',
        title: 'Shopping & Crafts',
        content: 'Discover traditional Kandyan crafts, gems, and souvenirs.',
        locations: [
          {
            id: 'central-market',
            title: 'Kandy Central Market 🛍️',
            description: 'Historic market complex selling fresh produce, spices, and local crafts.',
            coordinates: { lat: 7.2912, lng: 80.6334 },
            details: [
              { icon: '🕒', text: 'Open: 7 AM - 6 PM' },
              { icon: '💰', text: 'Bargaining expected' },
              { icon: '🛍️', text: 'Local produce & spices' }
            ]
          }
          // Add more shopping locations...
        ]
      }
    ]
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <GuideLayout>
      <div className="flex">
        <GuideContent 
          data={guideData} 
          onLocationClick={handleLocationClick}
        />
        <MapSection 
          locations={guideData.sections.find(s => s.id === 'kandy-attractions')?.locations || []}
          center={{ lat: 7.2906, lng: 80.6337 }}
          zoom={14}
          selectedLocation={selectedLocation}
        />
      </div>
    </GuideLayout>
  );
}; 