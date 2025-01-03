import React from 'react';
import { GuideHeader } from '../GuideHeader';
import { GuideMap } from '../GuideMap';
import { GuideTips } from './ParisTips';
import { GuideAttractions } from './ParisAttractions';
import { LocationPopup } from '../LocationPopup';

export const ParisGuideDetail = () => {
  const [selectedLocation, setSelectedLocation] = React.useState(null);
  
  const guideData = {
    title: 'Paris 5 Day Tourist Itinerary +Recommendations',
    author: {
      name: 'Elisa Li',
      date: 'Mar 15th, 2024',
      views: '105,590 views'
    },
    description: 'I\'ve studied abroad in Paris. Other than that, I\'ve visited Paris another 6 times. This guide contains all my favorite spots and local secrets for the perfect 5-day visit.',
    tags: ['Verified guide', 'Paris guide', '5 days'],
    headerImage: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a'
  };

  return (
    <div className="min-h-screen grid grid-cols-[45%,55%]">
      {/* Left Column - Scrollable Content */}
      <div className="h-screen overflow-y-auto">
        <GuideHeader data={guideData} />
        <div className="px-8 py-6 space-y-8">
          <GuideTips />
          <GuideAttractions onLocationSelect={setSelectedLocation} />
        </div>
      </div>
      
      {/* Right Column - Fixed Map */}
      <div className="relative h-screen">
        <GuideMap />
        {selectedLocation && (
          <LocationPopup 
            location={selectedLocation} 
            onClose={() => setSelectedLocation(null)}
          />
        )}
      </div>
    </div>
  );
}; 