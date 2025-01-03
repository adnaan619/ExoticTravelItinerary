import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SearchDestination } from '../components/trip/SearchDestination';
import { TripDates } from '../components/trip/TripDates';
import { TripType } from '../components/trip/TripType';
import { TravelCompanions } from '../components/trip/TravelCompanions';
import { TripPreferences } from '../components/trip/TripPreferences';

export const NewTrip = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 pt-32 pb-20">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Plan a new trip
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create detailed itineraries, explore user-shared guides, and manage your bookings
              seamlessly — all in one place.
            </p>
          </div>

          <div className="space-y-12">
            <SearchDestination />
            <TripDates />
            <TripType />
            <TravelCompanions />
            <TripPreferences />

            <div className="space-y-3 pt-4">
              <button className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                Start Planning
              </button>
              <button className="w-full px-4 py-2 text-gray-600 text-sm hover:text-gray-900 transition-colors">
                Create a Travel Guide Instead
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}; 