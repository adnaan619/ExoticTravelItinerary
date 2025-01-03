import React, { useState } from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        id: 'reservations',
        icon: '🛣️',
        label: 'Reservations',
        content: {
            title: 'Optimize your route',
            interface: {
                routes: [
                    {
                        name: 'Pacific Coast Highway',
                        duration: '3 days',
                        distance: '655 miles',
                        stops: ['San Francisco', 'Monterey', 'Big Sur', 'Santa Barbara', 'Los Angeles'],
                        image: 'https://images.unsplash.com/photo-1540820658620-e933c0ec78aa'
                    },
                    {
                        name: 'National Parks Loop',
                        duration: '7 days',
                        distance: '1,200 miles',
                        stops: ['Las Vegas', 'Zion', 'Bryce Canyon', 'Grand Canyon', 'Death Valley'],
                        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800'
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
                                image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7'
                            },
                            {
                                time: '2:00 PM',
                                title: 'Waikiki Beach',
                                type: 'Beach',
                                duration: '4 hours',
                                image: 'https://images.unsplash.com/photo-1507876466758-bc54f384809c'
                            }
                        ]
                    }
                ]
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
                        image: 'https://images.unsplash.com/photo-1519500528352-2d1460777e87'
                    },
                    {
                        type: 'Guides',
                        size: '12 MB',
                        content: ['Restaurant menus', 'Trail maps', 'Local tips'],
                        image: 'https://images.unsplash.com/photo-1502920514313-52581002a659'
                    }
                ]
            }
        }
    },
    {
        id: 'lodging',
        icon: '🏨',
        label: 'Lodging',
        content: {
          title: 'Hotels and lodging',
          interface: {
            location: 'Oahu',
            dates: '3/21 - 3/23',
            guests: '1 room, 2 guests',
            hotels: [
              {
                name: 'Pacific Paradise Resort',
                image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
                rating: '10.0',
                ratingText: 'Exceptional (787)',
                type: '3-star hotel',
                amenities: ['Free WiFi', 'Free parking', 'Free breakfast', 'Pool'],
                price: 205,
                totalPrice: 410,
                provider: 'Wanderlog'
              },
              // ... other hotels
            ]
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
                        items: ['Passport', 'Travel Insurance', 'Medications'],
                        image: 'https://images.unsplash.com/photo-1553531384-cc64ac80f931'
                    },
                    {
                        name: 'Beach Gear',
                        items: ['Swimsuit', 'Sunscreen', 'Beach Towel'],
                        image: 'https://images.unsplash.com/photo-1531547255897-f400dc1b7de2'
                    }
                ]
            }
        }
    },
    {
        id: 'budgeting',
        icon: '📖',
        label: 'Budgeting',
        content: {
            title: 'Local Travel Budgeting',
            interface: {
                guides: [
                    {
                        title: 'Hidden Gems of Oahu',
                        author: 'Local Expert',
                        rating: 4.8,
                        reviews: 234,
                        image: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d'
                    },
                    {
                        title: 'Best Food Spots',
                        author: 'Food Critic',
                        rating: 4.9,
                        reviews: 189,
                        image: 'https://images.unsplash.com/photo-1542528180-1c2803fa048c'
                    }
                ]
            }
        }
    }
];

export const FeatureSlider = () => {
    const [selectedFeature, setSelectedFeature] = useState(features[0]);

    const renderFeatureContent = (feature) => {
        switch (feature.id) {
            case 'reservations':
                return (
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-2">
                            <div className="space-y-4">
                                {/* Flight Reservation */}
                                <div className="bg-white rounded-lg border p-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="text-sm text-gray-500">Flight</div>
                                            <div className="font-medium">SFO → HNL</div>
                                            <div className="text-sm text-gray-600 mt-1">United Airlines • UA 1789</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-medium">$425</div>
                                            <div className="text-sm text-gray-500">Round trip</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between text-sm">
                                        <span>Mar 21, 8:00 AM - 11:30 AM</span>
                                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded">Confirmed</span>
                                    </div>
                                </div>

                                {/* Hotel Reservation */}
                                <div className="bg-white rounded-lg border p-4">
                                    <div className="flex gap-4">
                                        <img
                                            src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
                                            alt="Hotel"
                                            className="w-24 h-24 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                            <div className="flex justify-between">
                                                <div>
                                                    <div className="font-medium">Pacific Paradise Resort</div>
                                                    <div className="text-sm text-gray-600">Mar 21 - Mar 23 • 2 nights</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="font-medium">$410</div>
                                                    <div className="text-sm text-gray-500">Total</div>
                                                </div>
                                            </div>
                                            <div className="mt-2 flex items-center space-x-2">
                                                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">Booking.com</span>
                                                <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">Confirmed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Activity Reservation */}
                                <div className="bg-white rounded-lg border p-4">
                                    <div className="flex gap-4">
                                        <img
                                            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5"
                                            alt="Activity"
                                            className="w-24 h-24 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                            <div className="flex justify-between">
                                                <div>
                                                    <div className="font-medium">Sunset Sailing Tour</div>
                                                    <div className="text-sm text-gray-600">Mar 22 • 5:00 PM - 8:00 PM</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="font-medium">$89</div>
                                                    <div className="text-sm text-gray-500">per person</div>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-sm">Pending</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Summary Panel */}
                        <div className="bg-gray-50 rounded-lg p-4">
                            <h3 className="font-medium mb-4">Trip Summary</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Flights</span>
                                    <span>$425</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Hotels</span>
                                    <span>$410</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Activities</span>
                                    <span>$89</span>
                                </div>
                                <div className="border-t pt-2 mt-2">
                                    <div className="flex justify-between font-medium">
                                        <span>Total</span>
                                        <span>$924</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'packing':
                return (
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-2 space-y-6">
                            {feature.content.interface.categories.map((category) => (
                                <div key={category.name} className="bg-white rounded-lg border p-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-medium">{category.name}</h3>
                                        <span className="text-sm text-gray-500">3/5 packed</span>
                                    </div>
                                    <div className="space-y-2">
                                        {category.items.map((item) => (
                                            <div key={item} className="flex items-center space-x-3">
                                                <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4">
                            <div className="bg-gray-50 rounded-lg p-4">
                                <h3 className="font-medium mb-3">Progress</h3>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                                </div>
                                <div className="mt-2 text-sm text-gray-600">15/25 items packed</div>
                            </div>
                            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg">
                                Add new item
                            </button>
                        </div>
                    </div>
                );

            case 'guides':
                return (
                    <div className="grid grid-cols-3 gap-6">
                        {feature.content.interface.guides.map((guide) => (
                            <div key={guide.title} className="bg-white rounded-lg border overflow-hidden">
                                <img src={guide.image} alt={guide.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-medium mb-2">{guide.title}</h3>
                                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                                        <span>By {guide.author}</span>
                                        <span>•</span>
                                        <div className="flex items-center">
                                            <span className="text-yellow-400">★</span>
                                            <span>{guide.rating}</span>
                                        </div>
                                        <span>({guide.reviews})</span>
                                    </div>
                                    <button className="mt-4 w-full px-4 py-2 bg-coral-500 text-white rounded-lg">
                                        Read guide
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'budgeting':
                return (
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-2">
                            <div className="bg-white rounded-lg border p-4">
                                <h3 className="font-medium mb-4">Expense Tracking</h3>
                                <div className="space-y-3">
                                    {[
                                        { category: 'Transportation', amount: 425, color: 'bg-blue-500' },
                                        { category: 'Accommodation', amount: 410, color: 'bg-green-500' },
                                        { category: 'Food & Dining', amount: 200, color: 'bg-yellow-500' },
                                        { category: 'Activities', amount: 89, color: 'bg-purple-500' },
                                    ].map((expense) => (
                                        <div key={expense.category} className="flex items-center">
                                            <div className={`w-3 h-3 rounded-full ${expense.color} mr-3`}></div>
                                            <div className="flex-1">
                                                <div className="flex justify-between mb-1">
                                                    <span>{expense.category}</span>
                                                    <span>${expense.amount}</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                    <div className={`${expense.color} h-1.5 rounded-full`} style={{ width: `${(expense.amount / 1124) * 100}%` }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-gray-50 rounded-lg p-4">
                                <h3 className="font-medium mb-3">Total Budget</h3>
                                <div className="text-3xl font-bold">$1,124</div>
                                <div className="text-sm text-gray-600 mt-1">of $1,500 budget</div>
                                <div className="mt-4">
                                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg">
                                        Add expense
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            // ... previous cases (route, itinerary, lodging) remain the same
        }
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Feature Icons */}
                <div className="flex justify-center space-x-8 mb-12">
                    {features.map((feature) => (
                        <button
                            key={feature.id}
                            onClick={() => setSelectedFeature(feature)}
                            className={`flex flex-col items-center p-4 rounded-lg transition-colors
                ${selectedFeature.id === feature.id ? 'bg-white shadow-sm' : 'hover:bg-white/50'}`}
                        >
                            <span className="text-2xl mb-2">{feature.icon}</span>
                            <span className="text-sm font-medium text-gray-900">{feature.label}</span>
                        </button>
                    ))}
                </div>

                {/* Feature Content */}
                <motion.div
                    key={selectedFeature.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                    {/* Browser Chrome */}
                    <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 border-b">
                        <div className="flex space-x-1">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="px-16 py-1 bg-white rounded text-sm text-gray-600">
                                wanderlog.com
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-6">{selectedFeature.content.title}</h2>
                        {renderFeatureContent(selectedFeature)}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}; 