import React, { useState } from 'react';
import { Button } from '../common/Button';
import { useNavigate } from 'react-router-dom';

export const TripPlanner = () => {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Plan a new trip</h2>
        <button 
          onClick={() => navigate('/new-trip')}
          className="bg-coral-500 text-white px-8 py-3 rounded-full hover:bg-coral-600 transition-colors"
        >
          Start planning
        </button>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-4">
              <button 
                className={`flex items-center gap-2 ${saved ? 'text-coral-500' : 'text-gray-600'}`}
                onClick={() => setSaved(!saved)}
              >
                <svg className="w-5 h-5" fill={saved ? 'currentColor' : 'none'} 
                     stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                {saved ? 'Saved' : 'Save'}
              </button>
              <div className="flex items-center gap-2 text-gray-600">
                <button>Undo</button>
                <button>Redo</button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline">Share</Button>
              <Button variant="outline">Export</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Kauai trip with family
              </h2>
              <div className="flex items-center gap-2 text-gray-600">
                <span>2/7 - 2/14</span>
                <div className="flex -space-x-2">
                  {/* Avatar placeholders */}
                  <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                </div>
                <span>+3</span>
              </div>
            </div>
            <div className="bg-gray-100 min-h-[300px]">
              {/* Map placeholder */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Map View
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};