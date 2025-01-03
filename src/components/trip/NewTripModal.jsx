import React from 'react';
import { motion } from 'framer-motion';
import { SearchDestination } from './SearchDestination';
import { TripDates } from './TripDates';
import { TripType } from './TripType';
import { TravelCompanions } from './TravelCompanions';
import { TripPreferences } from './TripPreferences';

export const NewTripModal = () => {
  return (
    <div className="min-h-screen bg-black/40 backdrop-blur-md flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Plan a new trip
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Create detailed itineraries, explore user-shared guides, and manage your bookings
            seamlessly — all in one place.
          </p>

          <div className="space-y-8">
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
      </motion.div>
    </div>
  );
}; 