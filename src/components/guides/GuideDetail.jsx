import React from 'react';
import { GuideHeader } from './GuideHeader';
import { GuideMap } from './GuideMap';
import { GuideTips } from './GuideTips';
import { GuideAttractions } from './GuideAttractions';
import { LocationPopup } from './LocationPopup';

export const GuideDetail = () => {
  const [selectedLocation, setSelectedLocation] = React.useState(null);
  
  const guideData = {
    title: 'Japan: Video Game Guide 🎮 2024',
    author: {
      name: 'Tuyet',
      date: 'Sep 16th, 2024',
      views: '58134 views'
    },
    description: 'Did a summer internship in Japan during 2019. Stayed in Shinagawa City, Tokyo for 3 months. Went back to Japan for 3 weeks in August 2024 to climb Mt. Fuji 🗻 This guide contains all of the places I\'ve personally been to and loved in a quest-like fashion 🎮 Updated 2024',
    tags: ['Verified guide', 'Japan guide'],
    headerImage: 'https://images.unsplash.com/photo-1480796927426-f609979314bd'
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