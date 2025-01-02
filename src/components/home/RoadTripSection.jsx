import React from 'react';

const TripDay = ({ city, description, distance, duration, image }) => (
  <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg">
    <div className="flex-1">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <h3 className="font-medium text-gray-900">{city}</h3>
          </div>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
          {distance && (
            <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>{distance} • {duration} • Directions</span>
            </div>
          )}
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
      </div>
    </div>
    {image && (
      <div className="w-20 h-20 flex-shrink-0">
        <img src={image} alt={city} className="w-full h-full object-cover rounded-lg"/>
      </div>
    )}
  </div>
);

export const RoadTripSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative z-10">
              {/* Phone Header */}
              <div className="bg-white px-4 py-2 flex items-center justify-between border-b">
                <div className="flex items-center space-x-1">
                  <span className="text-sm">9:41</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
              </div>

              {/* Trip Header */}
              <div className="p-4 border-b">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Trip to Oahu</h2>
                  <button className="text-gray-600">•••</button>
                </div>
                <div className="flex space-x-4 text-sm">
                  <button className="text-gray-600">Overview</button>
                  <button className="text-blue-500 font-medium">Itinerary</button>
                  <button className="text-gray-600">Explore</button>
                  <button className="text-gray-600">$</button>
                </div>
              </div>

              {/* Date Navigation */}
              <div className="flex items-center space-x-4 p-4 border-b overflow-x-auto">
                <div className="flex-shrink-0 text-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mb-1">
                    21
                  </div>
                  <span className="text-xs text-blue-500 font-medium">Sat</span>
                </div>
                {['Sun', 'Mon', 'Tue'].map((day, i) => (
                  <div key={day} className="flex-shrink-0 text-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 text-sm mb-1">
                      {22 + i}
                    </div>
                    <span className="text-xs text-gray-500">{day}</span>
                  </div>
                ))}
              </div>

              {/* Itinerary */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Sat 3/21</h3>
                  <button className="text-blue-500 text-sm font-medium flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>Optimize route</span>
                  </button>
                </div>

                <div className="space-y-4">
                  <TripDay
                    city="Seattle"
                    description="The Emerald City is one of the fastest-growing cities in America, and for good reason. With a thriving..."
                    distance="40 min"
                    duration="33.8 mi"
                    image="https://images.unsplash.com/photo-1502175353174-a7a70e73b362?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  />
                  <TripDay
                    city="Tacoma" 
                    description="A charming port city and popular Puget Sound getaway, Tacoma is a beautiful place to visit any time of..."
                    distance="43 min"
                    duration="30.6 mi"
                    image="https://images.unsplash.com/photo-1571160258097-2dd080a53ac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  />
                  <TripDay
                    city="Olympia"
                    description="Olympia, the capital of Washington state, is at the southern end of Puget Sound..."
                    image="https://images.unsplash.com/photo-1623091411395-09e79fdbfcf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  />
                </div>
              </div>
            </div>

            {/* Map View */}
            <div className="absolute top-0 -right-8 w-2/3 bg-white rounded-3xl shadow-xl overflow-hidden z-20">
              <div className="p-4 border-b flex items-center space-x-4">
                <button className="text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="font-medium">Map view</span>
              </div>
              <div className="h-[400px] relative">
                <img 
                  src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122.3321,47.6062,9/600x400@2x?access_token=YOUR_MAPBOX_TOKEN"
                  alt="Route map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M200,100 C200,200 300,300 400,300"
                      stroke="#4F46E5"
                      strokeWidth="3"
                      fill="none"
                    />
                    {[1, 2, 3, 4].map((num) => (
                      <circle
                        key={num}
                        cx={100 + num * 100}
                        cy={100 + num * 50}
                        r="6"
                        fill="#4F46E5"
                        stroke="white"
                        strokeWidth="2"
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Plan road trips and hit the road
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Create a detailed itinerary for your road trip. Add all your stops, check
              distances and time between each location. See lists of best stops on
              your route between cities. We optimize your route to save gas and
              ensure a smooth journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};