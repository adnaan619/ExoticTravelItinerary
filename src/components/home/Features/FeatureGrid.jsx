import React from 'react';
import { FeatureCard } from './FeatureCard';
import { features } from './data/features';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const FeatureGrid = () => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {features.map(feature => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </motion.div>
  );
}; 