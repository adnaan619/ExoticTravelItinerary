export const features = [
  {
    id: 'reservations',
    icon: '✈️',
    label: 'Reservations',
    content: {
      title: 'Optimize your route',
      interface: {
        flight: {
          route: 'SFO → HNL',
          airline: 'United Airlines • UA 1789',
          price: 425,
          type: 'Round trip',
          datetime: 'Mar 21, 8:00 AM - 11:30 AM',
          status: 'Confirmed',
          details: {
            departure: {
              terminal: 'Terminal 3',
              gate: 'G92',
              checkIn: '6:00 AM',
              baggage: 'Carousel 6',
              seat: '12A (Window)',
              class: 'Economy Plus',
              mileage: '2,397 miles'
            },
            return: {
              flight: 'UA 1790',
              date: 'Mar 25',
              time: '2:15 PM - 9:45 PM',
              terminal: 'Terminal 2',
              gate: 'C45',
              seat: '14F (Window)',
              status: 'Confirmed'
            },
            baggage: {
              included: '1 Carry-on + 1 Personal Item',
              checkedBags: '1 included (50 lbs limit)',
              extraBag: '$35',
              tracking: 'Available'
            },
            amenities: [
              'In-flight WiFi',
              'Power outlets',
              'Meal service',
              'Entertainment system'
            ],
            loyalty: {
              program: 'MileagePlus',
              earnedMiles: '4,794',
              tierPoints: '2,397'
            }
          }
        },
        hotel: {
          name: 'Pacific Paradise Resort',
          dates: 'Mar 21 - Mar 23 • 2 nights',
          price: 410,
          provider: 'Booking.com',
          status: 'Confirmed',
          image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9',
          details: {
            room: {
              type: 'Ocean View Deluxe',
              beds: '1 King',
              floor: '15th floor',
              size: '45 m²',
              maxOccupancy: '2 adults, 1 child'
            },
            checkIn: {
              time: 'After 3:00 PM',
              location: 'Main lobby',
              earlyCheckIn: 'Available (+$50)',
              lateCheckOut: 'Until 2:00 PM'
            },
            amenities: {
              room: [
                'Balcony',
                'Air conditioning',
                'Mini bar',
                'Safe',
                'Free WiFi',
                'Room service'
              ],
              property: [
                'Beachfront',
                '3 Restaurants',
                '2 Pools',
                'Spa',
                'Fitness center',
                'Business center'
              ]
            },
            dining: {
              breakfast: 'Included (6:30 AM - 10:30 AM)',
              restaurants: [
                {
                  name: 'Ocean View Restaurant',
                  cuisine: 'International',
                  hours: '6:30 AM - 11:00 PM'
                },
                {
                  name: 'Teppanyaki Grill',
                  cuisine: 'Japanese',
                  hours: '5:30 PM - 10:00 PM'
                }
              ]
            },
            policies: {
              cancellation: '48 hours notice',
              deposit: 'First night',
              pets: 'Not allowed',
              smoking: 'Non-smoking property'
            }
          }
        },
        activity: {
          name: 'Sunset Sailing Tour',
          datetime: 'Mar 22 • 5:00 PM - 8:00 PM',
          price: 89,
          status: 'Pending',
          image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5',
          details: {
            tour: {
              operator: 'Hawaii Ocean Adventures',
              vessel: '45ft Sailing Catamaran',
              capacity: '24 passengers',
              meetingPoint: 'Pier 7, Honolulu Harbor',
              duration: '3 hours'
            },
            includes: [
              'Welcome drink',
              'Light appetizers',
              'Snorkeling equipment',
              'Professional crew',
              'Safety equipment',
              'Photos'
            ],
            highlights: [
              'Sunset views',
              'Marine life viewing',
              'Coastal sightseeing',
              'Swimming opportunity'
            ],
            requirements: {
              minAge: '6 years',
              fitness: 'Moderate',
              swimming: 'Basic skills required'
            },
            cancellation: {
              policy: '24 hours notice',
              refund: 'Full refund if cancelled 24h before',
              weather: 'Alternative date or full refund'
            }
          }
        },
        expenses: {
          breakdown: {
            transportation: {
              flights: 425,
              airportTransfers: 75,
              localTransport: 50
            },
            accommodation: {
              hotels: 410,
              taxes: 45,
              resortFees: 35
            },
            activities: {
              tours: 89,
              attractions: 120,
              equipment: 45
            },
            dining: {
              restaurants: 150,
              groceries: 50,
              snacks: 30
            },
            extras: {
              insurance: 65,
              souvenirs: 100,
              contingency: 150
            }
          },
          summary: {
            subtotal: 1839,
            taxes: 185,
            fees: 100,
            total: 2124,
            paid: 924,
            remaining: 1200,
            dueDate: 'Mar 15, 2024'
          },
          paymentMethods: {
            primary: 'Visa ***4582',
            backup: 'Mastercard ***7891'
          },
          currency: {
            code: 'USD',
            exchangeRate: 1,
            localCurrency: 'USD'
          }
        },
        tripProtection: {
          insurance: {
            provider: 'TravelGuard',
            policy: 'Gold Plan',
            coverage: {
              medical: '$100,000',
              evacuation: '$500,000',
              cancellation: 'Up to trip cost',
              baggage: '$2,500'
            },
            cost: 65,
            documents: 'PDF available'
          },
          contacts: {
            emergency: '+1-800-555-0123',
            local: '911',
            embassy: '+1-808-555-4567'
          }
        }
      }
    }
  },
  {
    id: 'packing',
    icon: '✓',
    label: 'Packing checklists',
    content: {
      title: 'Packing Checklist',
      interface: {
        categories: [
          {
            name: 'Essentials',
            items: [
              { name: 'Passport', packed: false, expiry: '2025-06-15', notes: 'Check validity 6 months after return' },
              { name: 'Travel Insurance', packed: true, provider: 'WorldCover', policyNumber: 'WC123456' },
              { name: 'Medications', packed: true, notes: 'Pack in carry-on' },
              { name: 'Phone Charger', packed: true, type: 'USB-C + Power Bank' },
              { name: 'Travel Documents', packed: false, notes: 'Print hotel & flight confirmations' }
            ],
            priority: 'High',
            packingTips: ['Pack in carry-on', 'Keep documents together']
          },
          {
            name: 'Clothes',
            items: [
              { name: 'T-shirts', packed: true, quantity: 5, notes: 'Quick-dry preferred' },
              { name: 'Shorts', packed: true, quantity: 3 },
              { name: 'Swimwear', packed: false, quantity: 2 },
              { name: 'Walking shoes', packed: true, notes: 'Break in before trip' }
            ],
            priority: 'Medium',
            weatherNote: 'Pack for 75-85°F, chance of rain'
          },
          {
            name: 'Beach Gear',
            items: [
              { name: 'Sunscreen', packed: false, notes: 'SPF 50+, reef-safe' },
              { name: 'Beach Towel', packed: false, notes: 'Microfiber recommended' },
              { name: 'Sunglasses', packed: true, notes: 'UV protection' },
              { name: 'Hat', packed: false, type: 'Wide-brim sun hat' }
            ],
            priority: 'Medium',
            localTip: 'Sunscreen is expensive in Hawaii - bring from home'
          }
        ],
        stats: {
          totalItems: 25,
          packedItems: 15,
          essentialsPacked: '60%',
          daysUntilDeparture: 7
        },
        quickAdd: [
          'Toothbrush',
          'Socks',
          'Camera',
          'Water Bottle'
        ],
        packingTips: [
          'Roll clothes to save space',
          'Pack heavy items at the bottom',
          'Use packing cubes for organization'
        ],
        weightLimits: {
          carryOn: '22 lbs',
          checkedBag: '50 lbs',
          currentEstimate: '35 lbs'
        }
      }
    }
  },
  {
    id: 'guides',
    icon: '📖',
    label: 'Travel guides',
    content: {
      title: 'Local Travel Guides',
      interface: {
        guides: [
          {
            title: 'Hidden Gems of Hawaii',
            description: 'Discover secret beaches, local favorite restaurants, and off-the-beaten-path attractions that most tourists miss.',
            author: 'Local Expert',
            authorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            rating: 4.8,
            reviews: 234,
            views: '12.5K',
            readTime: '15 min read',
            lastUpdated: 'Updated 2 days ago',
            image: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d',
            badge: 'Editor\'s Choice',
            highlights: [
              'Secret Beaches',
              'Local Restaurants',
              'Hiking Trails',
              'Cultural Sites'
            ],
            features: [
              { icon: '🗺️', label: 'Offline maps' },
              { icon: '📸', label: 'Photo spots' },
              { icon: '🎯', label: 'GPS guided' }
            ]
          },
          {
            title: 'Best Food Spots',
            description: 'A foodie\'s ultimate guide to Hawaii\'s culinary scene, from traditional dishes to modern fusion cuisine.',
            author: 'Food Critic',
            authorAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            rating: 4.9,
            reviews: 189,
            views: '8.3K',
            readTime: '12 min read',
            lastUpdated: 'Updated 1 week ago',
            image: 'https://images.unsplash.com/photo-1542528180-1c2803fa048c',
            badge: 'Food & Dining',
            highlights: [
              'Local Cuisine',
              'Hidden Gems',
              'Food Tours',
              'Markets'
            ],
            features: [
              { icon: '🍽️', label: 'Restaurant bookings' },
              { icon: '📝', label: 'Reviews' },
              { icon: '💰', label: 'Price guide' }
            ]
          },
          {
            title: 'Adventure Trails',
            description: 'Complete guide to Hawaii\'s best hiking trails, waterfalls, and outdoor adventures for all skill levels.',
            author: 'Hiking Guide',
            authorAvatar: 'https://randomuser.me/api/portraits/women/68.jpg',
            rating: 4.7,
            reviews: 156,
            views: '15.2K',
            readTime: '20 min read',
            lastUpdated: 'Updated 3 days ago',
            image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4',
            badge: 'Adventure',
            highlights: [
              'Hiking Trails',
              'Waterfalls',
              'Camping Spots',
              'Safety Tips'
            ],
            features: [
              { icon: '🗺️', label: 'Trail maps' },
              { icon: '⛺️', label: 'Camping info' },
              { icon: '🏃‍♂️', label: 'Difficulty levels' }
            ]
          }
        ]
      }
    }
  },
  {
    id: 'itinerary',
    icon: '📋',
    label: 'Itinerary',
    content: {
      title: 'Daily Itinerary Planning',
      interface: {
        days: [
          {
            date: 'Day 1 - March 21',
            activities: [
              {
                time: '9:00 AM',
                title: 'Diamond Head Hike',
                type: 'Outdoor Activity',
                duration: '2-3 hours',
                location: 'Diamond Head State Monument',
                description: 'Iconic volcanic crater with panoramic city views',
                tips: ['Bring water', 'Wear comfortable shoes', 'Start early to avoid crowds'],
                image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7'
              },
              {
                time: '2:00 PM',
                title: 'Waikiki Beach',
                type: 'Beach',
                duration: '4 hours',
                location: 'Waikiki',
                description: 'World-famous beach with calm waters perfect for swimming',
                activities: ['Swimming', 'Surfing', 'Sunbathing'],
                rentals: ['Beach chairs', 'Umbrellas', 'Surfboards'],
                image: 'https://images.unsplash.com/photo-1507876466758-bc54f384809c'
              },
              {
                time: '7:00 PM',
                title: 'Sunset Dinner Cruise',
                type: 'Dining',
                duration: '2 hours',
                location: 'Honolulu Harbor',
                description: 'Enjoy dinner while watching the sunset over the ocean',
                includes: ['Buffet dinner', 'Welcome drink', 'Live music'],
                image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5'
              }
            ],
            weatherForecast: {
              high: '82°F',
              low: '72°F',
              condition: 'Partly cloudy',
              sunrise: '6:45 AM',
              sunset: '6:30 PM'
            },
            totalActivities: 3,
            totalDuration: '8-9 hours'
          },
          {
            date: 'Day 2 - March 22',
            activities: [
              {
                time: '8:00 AM',
                title: 'Pearl Harbor Visit',
                type: 'Historical Site',
                duration: '3 hours',
                location: 'Pearl Harbor',
                description: 'Historic WWII site and memorial',
                tickets: 'Reserved - Entry 8:30 AM',
                image: 'https://images.unsplash.com/photo-1568430462989-44163eb1b2c7'
              }
            ],
            weatherForecast: {
              high: '83°F',
              low: '71°F',
              condition: 'Sunny',
              sunrise: '6:44 AM',
              sunset: '6:31 PM'
            }
          }
        ],
        tripStats: {
          totalDays: 5,
          plannedActivities: 12,
          reservations: 8,
          estimatedCost: '$1,245'
        }
      }
    }
  },
  {
    id: 'offline',
    icon: '📱',
    label: 'Offline access',
    content: {
      title: 'Access your plans offline',
      interface: {
        downloads: [
          {
            type: 'Maps',
            size: '45 MB',
            areas: ['Oahu Island', 'Honolulu', 'North Shore'],
            features: [
              'Detailed street maps',
              'Hiking trails',
              'Points of interest',
              'Public transport routes'
            ],
            lastUpdated: '2024-03-15',
            image: 'https://images.unsplash.com/photo-1519500528352-2d1460777e87',
            downloadProgress: 85
          },
          {
            type: 'Guides',
            size: '12 MB',
            content: [
              'Restaurant menus',
              'Trail maps',
              'Local tips',
              'Emergency information'
            ],
            categories: [
              'Food & Dining',
              'Activities',
              'Transportation',
              'Safety'
            ],
            languages: ['English', 'Japanese', 'Korean'],
            lastUpdated: '2024-03-14',
            image: 'https://images.unsplash.com/photo-1502920514313-52581002a659',
            downloadProgress: 100
          },
          {
            type: 'Photos & Media',
            size: '156 MB',
            content: [
              'Location photos',
              'Video guides',
              'Audio tours',
              '360° views'
            ],
            quality: 'High Resolution',
            format: 'Optimized for offline viewing',
            coverage: '250+ locations',
            lastUpdated: '2024-03-16',
            image: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552',
            downloadProgress: 32
          }
        ],
        storageInfo: {
          available: '2.4 GB',
          recommended: '500 MB',
          autoUpdate: true,
          wifiOnly: true
        },
        offlineFeatures: [
          'Full itinerary access',
          'Navigation without data',
          'Reservation details',
          'Emergency contacts'
        ]
      }
    }
  },
  {
    id: 'lodging',
    icon: '🏨',
    label: 'Lodging',
    content: {
      title: 'Find the perfect stay',
      interface: {
        hotels: [
          {
            id: 1,
            name: 'Pacific Paradise Resort',
            location: 'Waikiki Beach, Honolulu',
            price: 299,
            rating: 4.8,
            reviews: 1243,
            image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9',
            badge: 'Beachfront',
            amenities: ['Ocean View', 'Pool', 'Spa', 'Free WiFi']
          },
          {
            id: 2,
            name: 'Tropical Garden Hotel',
            location: 'North Shore',
            price: 199,
            rating: 4.6,
            reviews: 856,
            image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
            badge: 'Best Value',
            amenities: ['Garden View', 'Pool', 'Restaurant', 'Parking']
          },
          {
            id: 3,
            name: 'Sunset Bay Resort',
            location: 'Ko Olina',
            price: 399,
            rating: 4.9,
            reviews: 2156,
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
            badge: 'Luxury',
            amenities: ['Ocean View', 'Private Beach', 'Spa', '5 Restaurants']
          }
        ]
      }
    }
  }
]; 