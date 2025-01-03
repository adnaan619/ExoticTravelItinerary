import React from 'react';
import { DaySection } from './sections/DaySection';
import { attractionsData } from './data/attractionsData';

export const GuideAttractions = ({ onLocationSelect }) => {
  return (
    <div className="space-y-8">
      {attractionsData.map((section) => (
        <DaySection 
          key={section.title}
          section={section}
          onLocationSelect={onLocationSelect}
        />
      ))}
    </div>
  );
}; 