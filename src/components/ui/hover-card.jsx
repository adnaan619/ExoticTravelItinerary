import React from 'react';
import { motion } from 'framer-motion';

export const HoverCard = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
}; 