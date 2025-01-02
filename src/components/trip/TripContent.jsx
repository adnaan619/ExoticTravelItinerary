import React from 'react';

export const TripContent = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-white">
      <div className="p-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <h1 className="text-3xl font-bold">Trip to Tokyo</h1>
            <span className="text-gray-500">1/9 - 2/12</span>
          </div>

          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Explore</h2>
              <button className="px-4 py-2 bg-coral-500 text-white rounded-full text-sm font-medium">
                Browse all
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {/* Example cards */}
              <ExploreCard
                title="Top places for Tokyo"
                description="Most often-seen on the web"
                image="/images/tokyo-temple.jpg"
              />
              <ExploreCard
                title="Best restaurants in Tokyo"
                description="Most often-seen on the web"
                image="/images/tokyo-restaurant.jpg"
              />
              <ExploreCard
                title="Search hotels with transparent pricing"
                description="Unlike most sites, we don't sort based on commissions"
                image="/images/tokyo-hotel.jpg"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

const ExploreCard = ({ title, description, image }) => (
  <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
); 