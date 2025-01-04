import React from 'react';
import { motion } from 'framer-motion';

export const VehicleDisplay = ({ vehicle }) => {
  return (
    <div className="relative h-[800px]">
      {/* Central Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <img 
          src={vehicle.svgIcon} 
          alt={vehicle.name}
          className="w-[200px] h-[200px] opacity-10"
        />
      </motion.div>

      {/* Vehicle Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h3 className="text-4xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
        <p className="text-xl text-gray-600">{vehicle.tagline}</p>
        <p className="text-lg text-coral-600 mt-2">{vehicle.priceRange}</p>
        <p className="text-md text-gray-500 mt-2 max-w-2xl mx-auto">{vehicle.description}</p>
      </motion.div>

      {/* Features */}
      {vehicle.features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="absolute bg-white p-4 rounded-xl shadow-lg"
          style={feature.position}
        >
          <p className="text-gray-700">{feature.text}</p>
        </motion.div>
      ))}

      {/* Models */}
      {vehicle.models.map((model, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2 }}
          className="absolute bg-coral-50 p-6 rounded-xl"
          style={model.position}
        >
          <div className="text-coral-600 font-medium">{model.name}</div>
          <div className="text-coral-800 text-lg font-bold">{model.price}</div>
        </motion.div>
      ))}

      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex gap-4">
          {vehicle.highlights.map((highlight, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600"
            >
              {highlight}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}; 