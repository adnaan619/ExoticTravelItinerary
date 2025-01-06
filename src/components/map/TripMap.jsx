import React from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';
import { motion } from 'framer-motion';

const GOOGLE_MAPS_API_KEY = "AIzaSyDIfqau-owCvGAfqNlv0nI-ZktUMTO_73M";

const mapStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#e9e9e9" }]
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#f5f5f5" }]
  }
];

const LocationCard = ({ location, onClose }) => {
  return (
    <motion.div 
      className="absolute top-6 right-6 w-80 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {/* ... LocationCard content ... */}
    </motion.div>
  );
};

const MapControls = ({ onToggleTraffic, onToggleTransit, onToggleBikes }) => {
  return (
    <div className="absolute top-6 left-6 bg-white rounded-lg shadow-md p-2 z-10">
      <button 
        onClick={onToggleTraffic}
        className="p-2 hover:bg-gray-100 rounded-lg"
        title="Show traffic"
      >
        🚗
      </button>
      <button 
        onClick={onToggleTransit}
        className="p-2 hover:bg-gray-100 rounded-lg"
        title="Show public transport"
      >
        🚇
      </button>
      <button 
        onClick={onToggleBikes}
        className="p-2 hover:bg-gray-100 rounded-lg"
        title="Show bike routes"
      >
        🚲
      </button>
    </div>
  );
};

const HotelReviewCard = () => {
  return (
    <div className="absolute bottom-6 right-6 z-10 w-80">
      <motion.div 
        className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="relative">
          {/* Hotel Image */}
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            alt="Galle Face Hotel"
            className="w-full h-40 object-cover"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
            ⭐ 4.8 (2,145 reviews)
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-semibold text-gray-900">Galle Face Hotel</h3>
              <p className="text-sm text-gray-600">Colonial-era oceanfront hotel</p>
            </div>
            <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
              Superb
            </span>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2 mb-3">
            {['Ocean View', 'Spa', 'Pool', 'Fine Dining'].map(amenity => (
              <span 
                key={amenity}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {amenity}
              </span>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="text-center p-2 bg-blue-50 rounded-lg">
              <div className="text-blue-600 text-sm font-medium">Location</div>
              <div className="text-blue-700">9.5/10</div>
            </div>
            <div className="text-center p-2 bg-purple-50 rounded-lg">
              <div className="text-purple-600 text-sm font-medium">Cleanliness</div>
              <div className="text-purple-700">9.8/10</div>
            </div>
            <div className="text-center p-2 bg-coral-50 rounded-lg">
              <div className="text-coral-600 text-sm font-medium">Service</div>
              <div className="text-coral-700">9.7/10</div>
            </div>
          </div>

          {/* Latest Review */}
          <div className="border-t pt-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                <img 
                  src="https://i.pravatar.cc/100"
                  alt="Reviewer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-medium">Sarah M.</div>
                <div className="text-xs text-gray-500">2 days ago</div>
              </div>
              <div className="ml-auto text-yellow-400">⭐⭐⭐⭐⭐</div>
            </div>
            <p className="text-sm text-gray-600">
              "Absolutely stunning colonial property with incredible ocean views. The service was impeccable..."
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-3">
            <button className="flex-1 px-3 py-2 bg-coral-500 text-white rounded-lg text-sm font-medium hover:bg-coral-600">
              Book Now
            </button>
            <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
              More Details
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const TripMap = ({ 
  center,
  locations,
  activeLocation,
  selectedLocation,
  showDirections,
  selectedRoute,
  onLocationSelect,
  onLocationClose,
  onGetDirections 
}) => {
  const getMarkerIcon = (type) => {
    const icons = {
      attraction: '🏛️',
      restaurant: '🍽️',
      hotel: '🏨',
      default: '📍'
    };
    return icons[type] || icons.default;
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <div className="relative w-full h-full">
        <GoogleMap
          mapContainerClassName="w-full h-[600px]"
          center={center}
          zoom={13}
          options={{
            styles: mapStyles,
            disableDefaultUI: true,
            zoomControl: true,
            borderRadius: '0 1rem 1rem 0',
          }}
        >
          <MapControls />

          {/* Location Markers */}
          {locations?.map(location => (
            <Marker
              key={location.id}
              position={location.coordinates}
              label={{
                text: getMarkerIcon(location.type),
                className: 'marker-label'
              }}
              onClick={() => onLocationSelect(location)}
            />
          ))}

          {/* Active Location Card */}
          {activeLocation && (
            <LocationCard 
              location={activeLocation}
              onClose={onLocationClose}
              onGetDirections={onGetDirections}
            />
          )}

          {/* Directions */}
          {showDirections && selectedRoute && (
            <DirectionsRenderer
              directions={selectedRoute}
              options={{
                suppressMarkers: true,
                polylineOptions: {
                  strokeColor: "#FF6B6B",
                  strokeWeight: 4
                }
              }}
            />
          )}

          {/* Flight and Hotel Markers */}
          {selectedLocation?.type === 'flight' && (
            <>
              <Marker position={selectedLocation.from} />
              <Marker position={selectedLocation.to} />
            </>
          )}
          
          {selectedLocation?.type === 'hotel' && (
            <Marker position={selectedLocation.coordinates} />
          )}
        </GoogleMap>

        {/* Featured Location Card */}
        <div className="absolute bottom-6 left-6 z-10 max-w-sm">
          <motion.div 
            className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* ... Featured location card content ... */}
          </motion.div>
        </div>

        {/* Add the HotelReviewCard */}
        <HotelReviewCard />
      </div>
    </LoadScript>
  );
}; 