import React from 'react';

const CategoryButton = ({ icon, text }) => (
  <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow transition-shadow">
    <span className="text-xl">{icon}</span>
    <span className="text-sm font-medium text-gray-700">{text}</span>
  </button>
);

const PlaceCard = ({ name, rating, reviews, price, description, image }) => (
  <div className="bg-white rounded-lg p-4 mb-4">
    <div className="flex justify-between items-start">
      <div>
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <h3 className="font-medium">{name}</h3>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500">{rating} ({reviews} reviews)</span>
        </div>
      </div>
      <button className="px-3 py-1 bg-gray-900 text-white text-sm rounded-md">
        Save
      </button>
    </div>
    
    {price && (
      <div className="mt-2">
        <span className="inline-block px-2 py-1 bg-gray-100 text-sm rounded">
          {price}
        </span>
      </div>
    )}
    
    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
      {description}
    </p>
  </div>
);

export const AttractionsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-6 relative z-10">
              {/* Browser Chrome */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"/>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                  <div className="w-3 h-3 rounded-full bg-green-500"/>
                </div>
                <div className="flex-1 bg-gray-100 rounded-full h-8 flex items-center px-4">
                  <span className="text-sm text-gray-400">wanderlog.com</span>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <CategoryButton icon="🍽️" text="American restaurants" />
                  <CategoryButton icon="🌳" text="Parks" />
                  <CategoryButton icon="🏘️" text="Neighborhoods" />
                  <CategoryButton icon="🏛️" text="Science & space museums" />
                </div>
              </div>

              {/* Places */}
              <div>
                <h3 className="text-lg font-medium mb-3">Top places to visit</h3>
                <PlaceCard
                  name="Space Needle"
                  rating="4.4"
                  reviews="867"
                  price="$$$ • Observation deck"
                  description="The Space Needle is a renowned observation tower located at the Seattle Center. It features a rotating restaurant and an observation deck that offers panoramic views..."
                />
                <PlaceCard
                  name="Chihuly Garden and Glass"
                  rating="4.7"
                  reviews="523"
                  price="$$$ • Museum"
                  description="A magnificent exhibition hall featuring stunning glass art installations..."
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              See top attractions and restaurants from the entire web
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Get recommended the top places to visit and the best restaurants. Get
              ratings for top attractions, check their opening hours, and access links
              to official websites. We've gathered the top attractions from across the
              web in one place so you can see what are the consensus picks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 