import React from 'react';
import { BackgroundBeams } from "../ui/background-beams";
import { SparklesCore } from "../ui/sparkles";

const reviews = [
  {
    id: 1,
    name: 'Sarah Chen',
    title: 'Travel Blogger @WanderlustDiaries',
    image: '/images/reviews/sarah.jpg',
    location: 'San Francisco, CA',
    tripType: 'Road Trip through Europe',
    rating: 5,
    text: 'This app completely transformed how I planned my 3-week Europe trip! The route optimization saved us hours of driving time between cities. I especially loved how it suggested hidden gems along our route - we discovered this amazing little vineyard in Tuscany we would have never found otherwise. The collaborative features made it super easy to plan with my travel buddies too.',
    date: 'March 2024',
    stats: {
      countries: 6,
      cities: 12,
      days: 21
    }
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    title: 'Adventure Photographer',
    image: '/images/reviews/marcus.jpg',
    location: 'Denver, CO',
    tripType: 'National Parks Tour',
    rating: 5,
    text: 'As a photographer chasing the perfect shot, I need to maximize my time at each location. This apps sunrise/sunset integration and offline maps have been game-changing for my national parks visits. The ability to plan around golden hour and mark specific photo spots has helped me capture some of my best work. Plus, the hiking trail difficulty ratings are spot-on!',
    date: 'February 2024',
    stats: {
      parks: 8,
      photos: '1000+',
      miles: 3500
    }
  },
  {
    id: 3,
    name: 'Emma & James',
    title: 'Digital Nomads @RemotelyWed',
    image: '/images/reviews/couple.jpg',
    location: 'Currently in Bali',
    tripType: 'Southeast Asia Expedition',
    rating: 5,
    text: 'Working while traveling through Southeast Asia seemed daunting until we found this app. The local SIM card locations, cafe recommendations with wifi ratings, and coworking space markers are perfect for digital nomads. Weve used it to plan stays in 5 countries so far, and the budget tracking feature helps us stay on top of expenses across different currencies.',
    date: 'January 2024',
    stats: {
      countries: 5,
      workspaces: 24,
      daysAbroad: 180
    }
  },
  {
    id: 4,
    name: 'Priya Patel',
    title: 'Food & Culture Explorer',
    image: '/images/reviews/priya.jpg',
    location: 'London, UK',
    tripType: 'Culinary Tour of Japan',
    rating: 5,
    text: 'The restaurant bookmarking and local cuisine filters are incredible! Planned my entire Japan food tour using this app. It helped me find everything from Michelin-starred restaurants to hidden street food gems. The translation cards for dietary restrictions were a lifesaver, and the food market timing updates helped me never miss the famous tuna auctions!',
    date: 'December 2023',
    stats: {
      restaurants: 47,
      dishes: 112,
      prefectures: 6
    }
  }
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1 my-2">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TripStats = ({ stats }) => (
  <div className="flex gap-6 mt-4 pt-4 border-t">
    {Object.entries(stats).map(([key, value]) => (
      <div key={key} className="text-center">
        <div className="text-xl font-bold text-blue-600">{value}</div>
        <div className="text-sm text-gray-500 capitalize">{key}</div>
      </div>
    ))}
  </div>
);

const ReviewCard = ({ review }) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
    <div className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-4">
        <img
          src={review.image}
          alt={review.name}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-100"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                {review.name}
              </h3>
              <p className="text-blue-600 font-medium text-sm">
                {review.title}
              </p>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <span>📍 {review.location}</span>
                <span className="mx-2">•</span>
                <span>{review.date}</span>
              </div>
            </div>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
              {review.tripType}
            </span>
          </div>
          <StarRating rating={review.rating} />
          <p className="text-gray-600 mt-4 leading-relaxed">
            {review.text}
          </p>
          <TripStats stats={review.stats} />
        </div>
      </div>
    </div>
  </div>
);

export const Reviews = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 h-full w-full bg-gray-50">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#93c5fd"
        />
      </div>
      <BackgroundBeams className="absolute inset-0" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Stories from Our Travel Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join over 1 million travelers who've discovered how our platform transforms their travel experiences from ordinary to extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1d4ed8_0%,#60a5fa_50%,#1d4ed8_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-600 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-blue-700 transition-colors">
              Read More Stories
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}; 