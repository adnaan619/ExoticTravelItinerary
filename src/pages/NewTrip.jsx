import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const NewTrip = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [tripType, setTripType] = useState('');

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Where's your next adventure?
            </h1>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Destination
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Where to?"
                />
                <svg
                  className="absolute right-3 top-3 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start date
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholderText="Select start date"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End date
                </label>
                <DatePicker
                  selected={endDate}
                  onChange={date => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholderText="Select end date"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Trip Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Solo Trip', 'Family Vacation', 'Business Trip'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setTripType(type)}
                    className={`px-4 py-2 text-sm border rounded-lg transition-colors
                      ${tripType === type 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Travel Companions
              </label>
              <div className="flex items-center space-x-2">
                <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Invite friends
                </button>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium"
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
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