import React from 'react';
import { CityGuideTemplate } from '../templates/CityGuideTemplate';

export const GalleGuide = () => {
  const galleData = {
    title: 'GALLE',
    description: 'A historic coastal city featuring a UNESCO World Heritage Dutch colonial fort, surrounded by pristine beaches and rich cultural heritage.',
    headerImage: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe',
    mapCenter: { lat: 6.0535, lng: 80.2210 },
    'what-to-do': {
      categories: [
        { id: 'historical', icon: '🏰', name: 'Historical Sites' },
        { id: 'beaches', icon: '🏖️', name: 'Beaches' },
        { id: 'culture', icon: '🎭', name: 'Culture' },
        { id: 'shopping', icon: '🛍️', name: 'Shopping' },
        { id: 'activities', icon: '🏊‍♂️', name: 'Activities' },
        { id: 'nature', icon: '🌊', name: 'Nature' }
      ],
      locations: [
        {
          id: 'galle-fort',
          name: 'Galle Fort',
          description: 'A UNESCO World Heritage site, this 16th-century Dutch colonial fortress features historic buildings, museums, boutique shops, and cafes within its walls.',
          image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe',
          tags: ['UNESCO Site', 'Historical', 'Must visit'],
          coordinates: { lat: 6.0300, lng: 80.2167 },
          rating: 4.9,
          reviewCount: 3456,
          googleRating: 4.8,
          categories: ['Historical Site', 'Cultural Heritage', 'Shopping'],
          address: 'Church Street, Galle Fort, Galle',
          website: 'https://whc.unesco.org/en/list/451',
          isOpen: true,
          hours: [
            { day: 'Monday - Sunday', time: 'Open 24 hours' }
          ],
          reviews: [
            {
              author: 'Emma Wilson',
              authorImage: 'https://randomuser.me/api/portraits/women/3.jpg',
              date: '1 week ago',
              rating: 5,
              text: 'Walking through Galle Fort feels like stepping back in time. The architecture is stunning, and there are so many cute cafes and shops to explore.'
            },
            {
              author: 'David Kumar',
              authorImage: 'https://randomuser.me/api/portraits/men/4.jpg',
              date: '2 weeks ago',
              rating: 5,
              text: 'Best time to visit is during sunset. The views from the ramparts are breathtaking. Don\'t miss the lighthouse and the Dutch Reformed Church.'
            }
          ],
          highlights: [
            'Walk the historic ramparts at sunset',
            'Visit the iconic lighthouse',
            'Explore colonial-era Dutch architecture',
            'Browse boutique shops and art galleries',
            'Visit the Maritime Museum'
          ],
          nearby: [
            {
              id: 'lighthouse',
              name: 'Galle Lighthouse',
              image: 'https://images.unsplash.com/photo-1590047265471-8e8e3a2d2c88',
              distance: '300m away'
            },
            {
              id: 'dutch-church',
              name: 'Dutch Reformed Church',
              image: 'https://images.unsplash.com/photo-1590125234767-5aecaa98c228',
              distance: '400m away'
            }
          ],
          additionalInfo: [
            { icon: '🎫', text: 'No entrance fee' },
            { icon: '⏰', text: 'Best at sunset' },
            { icon: '👟', text: 'Comfortable walking shoes recommended' },
            { icon: '🌞', text: 'Bring sun protection' }
          ]
        },
        {
          id: 'unawatuna-beach',
          name: 'Unawatuna Beach',
          description: 'A picturesque bay with golden sand and calm waters, perfect for swimming and snorkeling.',
          image: 'https://images.unsplash.com/photo-1590125234767-5aecaa98c228',
          tags: ['Beach', 'Water Sports', 'Restaurants'],
          coordinates: { lat: 6.0104, lng: 80.2494 },
          rating: 4.7,
          reviewCount: 2189,
          googleRating: 4.6,
          categories: ['Beach', 'Water Sports', 'Dining'],
          address: 'Unawatuna, Galle',
          isOpen: true,
          hours: [
            { day: 'Monday - Sunday', time: 'Open 24 hours' }
          ],
          reviews: [
            {
              author: 'Michael Chang',
              authorImage: 'https://randomuser.me/api/portraits/men/5.jpg',
              date: '3 days ago',
              rating: 5,
              text: 'Perfect beach for families. The water is calm and there are plenty of restaurants nearby.'
            }
          ],
          highlights: [
            'Safe swimming bay',
            'Snorkeling opportunities',
            'Beachfront restaurants',
            'Beautiful sunsets',
            'Water sports activities'
          ],
          additionalInfo: [
            { icon: '🏊‍♂️', text: 'Safe for swimming' },
            { icon: '🍽️', text: 'Many restaurants available' },
            { icon: '🏄‍♂️', text: 'Water sports equipment rental' },
            { icon: '🚶‍♂️', text: '5km from Galle Fort' }
          ]
        }
      ]
    },
    'where-to-eat': {
      categories: [
        { id: 'sri-lankan', icon: '🍚', name: 'Sri Lankan' },
        { id: 'seafood', icon: '🦐', name: 'Seafood' },
        { id: 'cafes', icon: '☕', name: 'Cafes' },
        { id: 'international', icon: '🍽️', name: 'International' }
      ],
      locations: [
        {
          id: 'lucky-fort',
          name: 'Lucky Fort Restaurant',
          description: 'Family-run restaurant serving traditional Sri Lankan rice and curry with 10 different curries.',
          image: 'https://example.com/lucky-fort.jpg',
          tags: ['Sri Lankan', 'Local Cuisine', 'Rice & Curry'],
          coordinates: { lat: 6.0297, lng: 80.2167 },
          rating: 4.8,
          reviewCount: 856,
          googleRating: 4.7,
          categories: ['Restaurant', 'Sri Lankan', 'Local'],
          address: '9 Parawa Street, Fort, Galle',
          phone: '+94 77 358 8585',
          isOpen: true,
          hours: [
            { day: 'Monday - Sunday', time: '11:00 AM - 10:00 PM' }
          ],
          priceRange: '$$',
          specialties: [
            'Rice and 10 curry feast',
            'Fresh seafood curries',
            'Homemade coconut sambol'
          ]
        }
      ]
    },
    'where-to-stay': {
      categories: [
        { id: 'boutique', icon: '🏰', name: 'Boutique Hotels' },
        { id: 'beach', icon: '🏖️', name: 'Beach Resorts' },
        { id: 'guesthouses', icon: '🏡', name: 'Guesthouses' },
        { id: 'villas', icon: '🌴', name: 'Private Villas' }
      ],
      locations: [
        {
          id: 'fort-bazaar',
          name: 'Fort Bazaar',
          description: 'Elegant boutique hotel in a renovated 17th-century merchant\'s house within Galle Fort.',
          image: 'https://example.com/fort-bazaar.jpg',
          tags: ['Luxury', 'Historical', 'Boutique'],
          coordinates: { lat: 6.0293, lng: 80.2162 },
          rating: 4.9,
          reviewCount: 324,
          priceRange: '$$$$',
          amenities: [
            'Restaurant & Bar',
            'Spa',
            'Cinema Room',
            'Library'
          ]
        }
      ]
    }
  };

  return <CityGuideTemplate cityData={galleData} />;
}; 