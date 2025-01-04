import React from 'react';
import { CityGuideTemplate } from '../templates/CityGuideTemplate';

export const ColomboGuide = () => {
  const colomboData = {
    title: 'COLOMBO',
    description: 'The commercial capital and largest city of Sri Lanka, blending modern life, colonial buildings, and South Asian traditions.',
    headerImage: 'https://images.unsplash.com/photo-1590125234767-5aecaa98c228',
    mapCenter: { lat: 6.9271, lng: 79.8612 },
    'what-to-do': {
      categories: [
        { id: 'attractions', icon: '🏛️', name: 'Attractions' },
        { id: 'photo-spots', icon: '📸', name: 'Photo spots' },
        { id: 'temples', icon: '🕍', name: 'Temples' },
        { id: 'shopping', icon: '🛍️', name: 'Shopping' },
        { id: 'parks', icon: '🌳', name: 'Parks & Nature' },
        { id: 'museums', icon: '🏛️', name: 'Museums' }
      ],
      locations: [
        {
          id: 'gangaramaya',
          name: 'Gangaramaya Temple',
          description: 'One of the most important temples in Colombo, featuring a unique blend of Sri Lankan, Thai, Indian, and Chinese architecture.',
          image: 'https://images.unsplash.com/photo-1625736300986-c9d77204ddb5',
          tags: ['Temple', 'Cultural', 'Must visit'],
          coordinates: { lat: 6.9167, lng: 79.8573 },
          rating: 4.8,
          reviewCount: 1234,
          googleRating: 4.7,
          categories: ['Temple', 'Cultural Site', 'Museum'],
          address: '61 Sri Jinarathana Road, Colombo 02',
          phone: '+94 11 2435169',
          website: 'https://gangaramaya.com',
          isOpen: true,
          hours: [
            { day: 'Monday - Sunday', time: '5:30 AM - 10:00 PM' }
          ],
          reviews: [
            {
              author: 'John Smith',
              authorImage: 'https://randomuser.me/api/portraits/men/1.jpg',
              date: '2 weeks ago',
              rating: 5,
              text: 'An incredible temple with amazing architecture. The museum section is particularly fascinating with its collection of artifacts. A must-visit in Colombo!'
            },
            {
              author: 'Sarah Chen',
              authorImage: 'https://randomuser.me/api/portraits/women/2.jpg',
              date: '1 month ago',
              rating: 4,
              text: 'Beautiful temple complex. Try to visit during a puja ceremony for the full experience. Remember to dress modestly.'
            }
          ],
          highlights: [
            'Beautiful architecture spanning centuries',
            'Houses important Buddhist artifacts',
            'Peaceful atmosphere for meditation',
            'Museum with rare artifacts',
            'Regular religious ceremonies'
          ],
          nearby: [
            {
              id: 'seema-malaka',
              name: 'Seema Malaka Temple',
              image: 'https://images.unsplash.com/photo-1625736300986-c9d77204ddb5',
              distance: '400m away'
            },
            {
              id: 'beira-lake',
              name: 'Beira Lake',
              image: 'https://images.unsplash.com/photo-1590125234767-5aecaa98c228',
              distance: '600m away'
            }
          ],
          additionalInfo: [
            { icon: '👞', text: 'Remove shoes before entering' },
            { icon: '👔', text: 'Modest dress required' },
            { icon: '📸', text: 'Photography allowed' },
            { icon: '💰', text: 'Entrance fee: LKR 1000' }
          ]
        },
        // Add more locations with similar detailed data
      ]
    },
    'where-to-eat': {
      categories: [
        { id: 'local-food', icon: '🍚', name: 'Local Cuisine' },
        { id: 'fine-dining', icon: '🍽️', name: 'Fine Dining' },
        { id: 'cafes', icon: '☕', name: 'Cafes' },
        { id: 'street-food', icon: '🥘', name: 'Street Food' }
      ],
      locations: [
        // Add restaurant data with similar structure
      ]
    },
    'where-to-stay': {
      categories: [
        { id: 'luxury', icon: '⭐⭐⭐⭐⭐', name: 'Luxury' },
        { id: 'mid-range', icon: '⭐⭐⭐', name: 'Mid-range' },
        { id: 'budget', icon: '⭐⭐', name: 'Budget' },
        { id: 'hostels', icon: '🛏️', name: 'Hostels' }
      ],
      locations: [
        // Add hotel data with similar structure
      ]
    }
  };

  return <CityGuideTemplate cityData={colomboData} />;
}; 