import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const TripPlanner = () => {
  const [trips, setTrips] = useState([
    {
      id: 'flight1',
      type: 'flight',
      from: {
        code: 'CMB',
        city: 'Colombo',
        terminal: 'A',
        gate: '2',
        coordinates: { lat: 7.1824, lng: 79.8841 }
      },
      to: {
        code: 'HRI',
        city: 'Hambantota',
        terminal: 'B',
        gate: '-',
        coordinates: { lat: 6.1240, lng: 81.1185 }
      },
      airline: 'SriLankan Airlines',
      flightNumber: 'UL 1234',
      date: 'Sat, Mar 3',
      duration: '1h 15min',
      status: 'ON SCHEDULE',
      confirmation: 'KPS643',
      price: '$273.00'
    }
  ]);

  const [hotels, setHotels] = useState([
    {
      id: 'hotel1',
      name: 'Island Serenity Suites',
      address: '555 Lagoon Vista Lane, Lihue, HI 96766',
      checkIn: 'Sat, Mar 7',
      checkOut: 'Sat, Mar 14',
      confirmation: '23S74G',
      price: '$1745.25',
      coordinates: { lat: 6.0174, lng: 80.2489 }
    }
  ]);

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeTab, setActiveTab] = useState('itinerary');
  const colomboCenter = { lat: 6.9271, lng: 79.8612 };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'itinerary':
        return renderItineraryContent();
      case 'explore':
        return (
          <div className="space-y-8">
            {/* Popular Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Popular in Colombo</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Temples', icon: '🕍', count: '24' },
                  { name: 'Shopping', icon: '🛍️', count: '15' },
                  { name: 'Restaurants', icon: '🍽️', count: '42' },
                  { name: 'Museums', icon: '🏛️', count: '8' },
                  { name: 'Beaches', icon: '🏖️', count: '6' },
                  { name: 'Parks', icon: '🌳', count: '12' }
                ].map(category => (
                  <button 
                    key={category.name}
                    className="p-4 bg-white rounded-xl border hover:border-coral-500 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{category.icon}</span>
                        <div className="text-left">
                          <div className="font-medium">{category.name}</div>
                          <div className="text-sm text-gray-600">{category.count} places</div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Top Attractions */}
            <div>
              <h4 className="font-medium mb-4">Must-Visit Attractions</h4>
              <div className="space-y-4">
                {[
                  {
                    name: 'Gangaramaya Temple',
                    image: 'temple-image.jpg',
                    rating: 4.8,
                    reviews: 1245,
                    duration: '2 hours',
                    price: '$5',
                    tags: ['Temple', 'Cultural', 'Historic']
                  },
                  {
                    name: 'Galle Face Green',
                    image: 'galle-face.jpg',
                    rating: 4.6,
                    reviews: 2156,
                    duration: '1-2 hours',
                    price: 'Free',
                    tags: ['Park', 'Sunset', 'Street Food']
                  },
                  // Add more attractions
                ].map(attraction => (
                  <motion.div
                    key={attraction.name}
                    className="bg-white rounded-xl border p-4 hover:shadow-md transition-all cursor-pointer"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex gap-4">
                      <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                        <img 
                          src={attraction.image}
                          alt={attraction.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold mb-1">{attraction.name}</h5>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-yellow-400">⭐</span>
                          <span className="font-medium">{attraction.rating}</span>
                          <span className="text-sm text-gray-600">({attraction.reviews} reviews)</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {attraction.tags.map(tag => (
                            <span 
                              key={tag}
                              className="px-2 py-1 bg-gray-100 rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{attraction.price}</div>
                        <div className="text-sm text-gray-600">{attraction.duration}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Local Experiences */}
            <div>
              <h4 className="font-medium mb-4">Local Experiences</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    name: 'Cooking Class',
                    description: 'Learn to cook authentic Sri Lankan curry',
                    duration: '3 hours',
                    price: '$45/person'
                  },
                  {
                    name: 'Tuk Tuk Tour',
                    description: 'Explore the city like a local',
                    duration: '4 hours',
                    price: '$30/person'
                  },
                  // Add more experiences
                ].map(experience => (
                  <div 
                    key={experience.name}
                    className="bg-white rounded-xl border p-4 hover:shadow-md transition-all"
                  >
                    <h5 className="font-medium mb-1">{experience.name}</h5>
                    <p className="text-sm text-gray-600 mb-2">{experience.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{experience.duration}</span>
                      <span className="font-medium">{experience.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'tips':
        return (
          <div className="space-y-8">
            {/* Weather & Best Time */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
              <h3 className="font-medium text-blue-800 mb-4">Weather & Best Time to Visit</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                  { season: 'Dec - Mar', weather: 'Dry Season', temp: '27-32°C' },
                  { season: 'Apr - Jun', weather: 'First Monsoon', temp: '28-32°C' },
                  { season: 'Jul - Sep', weather: 'Inter-Monsoon', temp: '27-30°C' },
                  { season: 'Oct - Nov', weather: 'Second Monsoon', temp: '26-29°C' }
                ].map(period => (
                  <div key={period.season} className="bg-white/60 rounded-lg p-3">
                    <div className="font-medium">{period.season}</div>
                    <div className="text-sm text-blue-800">{period.weather}</div>
                    <div className="text-sm text-blue-600">{period.temp}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cultural Tips */}
            <div>
              <h4 className="font-medium mb-3">Cultural Etiquette</h4>
              <div className="space-y-3">
                {[
                  {
                    tip: 'Temple Dress Code',
                    description: 'Cover shoulders and knees, remove shoes',
                    icon: '👔'
                  },
                  {
                    tip: 'Greetings',
                    description: 'Join hands and say "Ayubowan" (May you live long)',
                    icon: '🙏'
                  },
                  {
                    tip: 'Photography',
                    description: 'Ask permission before photographing people or temples',
                    icon: '📸'
                  }
                ].map(item => (
                  <div key={item.tip} className="flex items-start gap-4 bg-white rounded-xl border p-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-medium">{item.tip}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Tips */}
            <div>
              <h4 className="font-medium mb-3">Safety & Health</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Emergency', info: '119', icon: '🚨' },
                  { title: 'Tourist Police', info: '1912', icon: '👮' },
                  { title: 'Ambulance', info: '1990', icon: '🚑' },
                  { title: 'Tourist Board', info: '1912', icon: 'ℹ️' }
                ].map(contact => (
                  <div key={contact.title} className="bg-white rounded-xl border p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span>{contact.icon}</span>
                      <span className="font-medium">{contact.title}</span>
                    </div>
                    <div className="text-lg font-mono">{contact.info}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Transportation */}
            <div>
              <h4 className="font-medium mb-3">Getting Around</h4>
              <div className="space-y-3">
                {[
                  {
                    mode: 'Tuk Tuk',
                    tips: [
                      'Always negotiate price before riding',
                      'Use metered tuk-tuks when possible',
                      'Typical rate: LKR 50-60 per km'
                    ],
                    icon: '🛺'
                  },
                  // Add more transportation modes
                ].map(transport => (
                  <div key={transport.mode} className="bg-white rounded-xl border p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{transport.icon}</span>
                      <span className="font-medium">{transport.mode}</span>
                    </div>
                    <ul className="space-y-1">
                      {transport.tips.map((tip, index) => (
                        <li key={index} className="text-sm text-gray-600">• {tip}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'budget':
        return (
          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-800">Trip Budget Overview</h3>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between text-green-700">
                  <span>Flights</span>
                  <span>$546.00</span>
                </div>
                <div className="flex justify-between text-green-700">
                  <span>Hotels</span>
                  <span>$1,745.25</span>
                </div>
                <div className="flex justify-between text-green-700">
                  <span>Activities</span>
                  <span>$200.00</span>
                </div>
                <div className="h-px bg-green-200 my-2" />
                <div className="flex justify-between font-medium text-green-800">
                  <span>Total</span>
                  <span>$2,491.25</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Daily Budget Suggestions</h4>
              <div className="space-y-3">
                {[
                  { type: 'Budget', cost: '$30-50/day', includes: 'Hostels, local food, public transport' },
                  { type: 'Mid-range', cost: '$100-150/day', includes: '3-star hotels, restaurants, some activities' },
                  { type: 'Luxury', cost: '$200+/day', includes: '5-star hotels, fine dining, private tours' }
                ].map(budget => (
                  <div key={budget.type} className="p-3 bg-white rounded-lg border">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{budget.type}</span>
                      <span className="text-gray-600">{budget.cost}</span>
                    </div>
                    <div className="text-sm text-gray-600">{budget.includes}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  const renderItineraryContent = () => {
    return (
      <div className="space-y-8">
        {/* Trip Summary Card */}
        <div className="bg-gradient-to-r from-coral-50 to-coral-100 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3">Sri Lanka Adventure</h3>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span>🗓️</span>
              <span>Mar 3 - Mar 14</span>
            </div>
            <div className="flex items-center gap-2">
              <span>👥</span>
              <span>2 travelers</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>4 destinations</span>
            </div>
          </div>
        </div>

        {/* Flights Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Flights</h3>
            <button className="text-sm text-coral-600 hover:text-coral-700">
              + Add flight
            </button>
          </div>
          
          {trips.map(trip => (
            <motion.div
              key={trip.id}
              className="bg-white rounded-xl border shadow-sm hover:shadow-md transition-all cursor-pointer p-5"
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedLocation({
                type: 'flight',
                from: trip.from.coordinates,
                to: trip.to.coordinates
              })}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    ✈️
                  </div>
                  <div>
                    <div className="font-medium">{trip.airline}</div>
                    <div className="text-sm text-gray-600">{trip.flightNumber}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Confirmation #</div>
                  <div className="font-mono text-sm">{trip.confirmation}</div>
                </div>
              </div>

              <div className="flex items-center gap-8 mb-4">
                <div className="flex-1">
                  <div className="text-2xl font-bold">{trip.from.code}</div>
                  <div className="text-sm text-gray-600">{trip.from.city}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Terminal {trip.from.terminal} • Gate {trip.from.gate}
                  </div>
                </div>

                <div className="flex flex-col items-center px-4">
                  <div className="text-sm text-gray-600 mb-1">{trip.duration}</div>
                  <div className="w-32 h-px bg-gray-300 relative">
                    <motion.div
                      className="absolute -top-1.5 left-0"
                      animate={{ x: [0, 128, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      ✈️
                    </motion.div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{trip.date}</div>
                </div>

                <div className="flex-1 text-right">
                  <div className="text-2xl font-bold">{trip.to.code}</div>
                  <div className="text-sm text-gray-600">{trip.to.city}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Terminal {trip.to.terminal} • Gate {trip.to.gate}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    {trip.status}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold">{trip.price}</span>
                  <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100">
                    Check in
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hotels Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Accommodations</h3>
            <button className="text-sm text-coral-600 hover:text-coral-700">
              + Add hotel
            </button>
          </div>

          {hotels.map(hotel => (
            <motion.div
              key={hotel.id}
              className="bg-white rounded-xl border shadow-sm hover:shadow-md transition-all cursor-pointer p-5"
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedLocation({
                type: 'hotel',
                coordinates: hotel.coordinates
              })}
            >
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="https://example.com/hotel-image.jpg" 
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-semibold">{hotel.name}</h4>
                      <p className="text-sm text-gray-600">{hotel.address}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Confirmation #</div>
                      <div className="font-mono text-sm">{hotel.confirmation}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end mt-4">
                    <div>
                      <div className="text-sm text-gray-600">Check-in</div>
                      <div className="font-medium">{hotel.checkIn}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-medium">7 nights</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Check-out</div>
                      <div className="font-medium">{hotel.checkOut}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4 pt-4 border-t">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm text-gray-600">Confirmed</span>
                </div>
                <div className="text-lg font-bold">{hotel.price}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Daily Activities Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Daily Activities</h3>
            <button className="text-sm text-coral-600 hover:text-coral-700">
              + Add activity
            </button>
          </div>

          <div className="space-y-6">
            {['Mar 3', 'Mar 4', 'Mar 5'].map(date => (
              <div key={date} className="space-y-2">
                <h4 className="font-medium text-gray-600">{date}</h4>
                <div className="bg-white rounded-xl border shadow-sm p-4">
                  <div className="space-y-3">
                    {[
                      { time: '09:00 AM', activity: 'City Tour', duration: '3 hours' },
                      { time: '12:30 PM', activity: 'Lunch at Ministry of Crab', duration: '1.5 hours' },
                      { time: '02:30 PM', activity: 'Shopping at Dutch Hospital', duration: '2 hours' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="text-sm text-gray-600 w-20">{item.time}</div>
                        <div className="flex-1">
                          <div className="font-medium">{item.activity}</div>
                          <div className="text-sm text-gray-600">{item.duration}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div className="bg-white rounded-2xl shadow-lg overflow-hidden flex">
          {/* Left Section */}
          <div className="w-[45%] border-r">
            {/* Header */}
            <div className="p-6 border-b">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <button className="text-gray-600 hover:text-gray-900">
                    ↩ Undo
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    ↪ Redo
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <button className="px-4 py-2 bg-coral-500 text-white rounded-lg">
                    Share
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900">⋮</button>
                </div>
              </div>
              
              {/* Navigation Tabs */}
              <div className="flex gap-2 mt-4">
                {[
                  { id: 'itinerary', label: '📍 Itinerary' },
                  { id: 'explore', label: '🔍 Explore' },
                  { id: 'tips', label: '💡 Tips' },
                  { id: 'budget', label: '💰 Budget' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                      ${activeTab === tab.id 
                        ? 'bg-coral-500 text-white' 
                        : 'text-gray-600 hover:bg-gray-100'}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="h-[calc(100vh-200px)] overflow-y-auto">
              <div className="p-6">
                {renderTabContent()}
              </div>
            </div>
          </div>

          {/* Right Section - Map */}
          <div className="w-[55%] relative">
            {/* Featured Location Card - Now at bottom right */}
            <div className="absolute bottom-6 left-6 z-10 max-w-sm">
              <motion.div 
                className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex p-3">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1589302168068-964664d93dc0" 
                      alt="Colombo Skyline"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 ml-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">Galle Face Hotel</h3>
                        <p className="text-xs text-gray-600">Colonial-era oceanfront hotel</p>
                      </div>
                      <button 
                        className="p-1.5 hover:bg-gray-100 rounded-full"
                        onClick={() => setSelectedLocation({
                          type: 'hotel',
                          coordinates: { lat: 6.9271, lng: 79.8612 }
                        })}
                      >
                        📍
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-xs">
                      <div className="flex items-center">
                        <span className="text-yellow-400">⭐</span>
                        <span className="font-medium ml-0.5">4.8</span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-600">Heritage Hotel</span>
                    </div>
                    <div className="flex gap-1.5 mt-1.5">
                      <span className="px-1.5 py-0.5 bg-coral-50 text-coral-600 rounded-full text-xs">
                        Ocean View
                      </span>
                      <span className="px-1.5 py-0.5 bg-coral-50 text-coral-600 rounded-full text-xs">
                        Colonial
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerClassName="w-full h-[calc(100vh-100px)]"
                center={colomboCenter}
                zoom={13}
                options={{
                  styles: [{ /* Add custom map styles here */ }],
                  disableDefaultUI: true,
                  zoomControl: true,
                  borderRadius: '0 1rem 1rem 0',
                }}
              >
                {selectedLocation?.type === 'flight' && (
                  <>
                    <Marker position={selectedLocation.from} />
                    <Marker position={selectedLocation.to} />
                  </>
                )}
                
                {selectedLocation?.type === 'hotel' && (
                  <Marker position={selectedLocation.coordinates} />
                )}
              </GoogleMap>
            </LoadScript>
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 