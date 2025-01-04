import React from 'react';
import { FeatureGrid } from './FeatureGrid';
import { motion } from 'framer-motion';

export const Features = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Features to replace all your other tools
          </h2>
        </motion.div>
        <FeatureGrid />
      </div>
    </section>
  );
}; 