import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { vehicleData } from './vehicles/VehicleData';
import { VehicleDisplay } from './vehicles/VehicleDisplay';

export const VehicleFleet = () => {
  const [activeVehicle, setActiveVehicle] = useState('tuktuk');

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Travel Your Way
          </h2>
          <p className="text-xl text-gray-600">
            From streets to skies, explore Sri Lanka in style
          </p>
        </div>

        {/* Vehicle Selection */}
        <div className="flex justify-center gap-8 mb-20 overflow-x-auto pb-4">
          {Object.values(vehicleData).map(vehicle => (
            <motion.button
              key={vehicle.type}
              onClick={() => setActiveVehicle(vehicle.type)}
              className={`group relative p-8 rounded-2xl transition-all flex-shrink-0
                ${activeVehicle === vehicle.type ? 'bg-coral-50' : 'hover:bg-gray-50'}`}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={vehicle.svgIcon}
                alt={vehicle.name}
                className={`w-16 h-16 mb-4 mx-auto transition-colors
                  ${activeVehicle === vehicle.type ? 'text-coral-600' : 'text-gray-600'}`}
              />
              <span className={`text-sm font-medium block text-center
                ${activeVehicle === vehicle.type ? 'text-coral-600' : 'text-gray-600'}`}
              >
                {vehicle.name}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Active Vehicle Display */}
        <VehicleDisplay vehicle={vehicleData[activeVehicle]} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-coral-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 right-20 w-48 h-48 bg-coral-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-coral-300 rounded-full opacity-20"></div>
      </div>
    </section>
  );
}; 