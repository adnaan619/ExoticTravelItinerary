import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FeatureNav } from './FeatureNav';
import { FeatureContent } from './FeatureContent';
import { BrowserChrome } from './BrowserChrome';
import { features } from './data/features';

export const FeatureSlider = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <FeatureNav 
          features={features}
          selectedFeature={selectedFeature}
          onSelect={setSelectedFeature}
        />

        <motion.div
          key={selectedFeature.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <BrowserChrome />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">{selectedFeature.content.title}</h2>
            <FeatureContent feature={selectedFeature} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 