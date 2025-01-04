import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CityHeader } from '../components/CityHeader';
import { CityCategories } from '../components/CityCategories';
import { CityContent } from '../components/CityContent';
import { CityMap } from '../components/CityMap';

export const CityGuideTemplate = ({ cityData }) => {
  const [selectedCategory, setSelectedCategory] = useState('what-to-do');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Handle location selection
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    // Smooth scroll to the selected location in the content area if needed
    if (location) {
      const element = document.getElementById(`location-${location.id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // Handle category changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedLocation(null); // Reset selected location when changing categories
  };

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section - Content */}
      <motion.div 
        className="w-1/2 h-screen overflow-y-auto"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <CityHeader 
          title={cityData.title}
          description={cityData.description}
          image={cityData.headerImage}
        />
        
        <CityCategories 
          selected={selectedCategory}
          onSelect={handleCategoryChange}
        />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <CityContent 
              category={selectedCategory}
              data={cityData[selectedCategory]}
              onLocationSelect={handleLocationSelect}
              selectedLocation={selectedLocation}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Right Section - Map */}
      <div className="w-1/2 h-screen sticky top-0">
        <CityMap
          center={cityData.mapCenter}
          locations={cityData[selectedCategory]?.locations || []}
          selectedLocation={selectedLocation}
          onLocationSelect={handleLocationSelect}
          onLoad={() => setIsMapLoaded(true)}
        />
      </div>
    </div>
  );
}; 