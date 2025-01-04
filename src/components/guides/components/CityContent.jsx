import React from 'react';
import { motion } from 'framer-motion';
import { StarRating } from './StarRating';

export const CityContent = ({ category, data, onLocationSelect, selectedLocation }) => {
  const renderLocationDetails = (location) => {
    return (
      <div className="space-y-4">
        {/* Ratings & Reviews Section */}
        <div className="flex items-center gap-4 mb-2">
          <StarRating rating={location.rating} />
          <span className="text-gray-600">
            {location.rating} ({location.reviewCount})
          </span>
          {location.googleRating && (
            <div className="flex items-center gap-1">
              <img src="/google-icon.svg" className="w-4 h-4" alt="Google" />
              <span className="text-gray-600">{location.googleRating}</span>
            </div>
          )}
        </div>

        {/* Tags & Categories */}
        <div className="flex flex-wrap gap-2">
          {location.categories?.map(cat => (
            <span key={cat} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {cat}
            </span>
          ))}
        </div>

        {/* Location & Contact Info */}
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>{location.address}</span>
          </div>
          {location.phone && (
            <div className="flex items-center gap-2">
              <span>📞</span>
              <a href={`tel:${location.phone}`} className="hover:text-blue-600">
                {location.phone}
              </a>
            </div>
          )}
          {location.website && (
            <div className="flex items-center gap-2">
              <span>🌐</span>
              <a 
                href={location.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                {location.websiteDisplay || 'Visit website'}
              </a>
            </div>
          )}
        </div>

        {/* Opening Hours */}
        {location.hours && (
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium">Opening Hours</h4>
              <span className={`text-sm ${location.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                {location.isOpen ? 'Open now' : 'Closed'}
              </span>
            </div>
            <div className="space-y-1 text-sm">
              {location.hours.map((hour, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-600">{hour.day}</span>
                  <span>{hour.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews Section */}
        {location.reviews && (
          <div className="space-y-4">
            <h4 className="font-medium">Recent Reviews</h4>
            {location.reviews.map((review, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <img 
                    src={review.authorImage} 
                    alt={review.author}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div className="font-medium">{review.author}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                </div>
                <StarRating rating={review.rating} size="small" />
                <p className="text-gray-600 mt-2">{review.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tips & Highlights */}
        {location.highlights && (
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-medium mb-3">Highlights</h4>
            <ul className="space-y-2">
              {location.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span>✨</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Nearby Attractions */}
        {location.nearby && (
          <div>
            <h4 className="font-medium mb-3">Nearby Attractions</h4>
            <div className="grid grid-cols-2 gap-4">
              {location.nearby.map((place, index) => (
                <button
                  key={index}
                  className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100"
                  onClick={() => onLocationSelect(place)}
                >
                  <img 
                    src={place.image} 
                    alt={place.name}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div className="text-left">
                    <div className="font-medium text-sm">{place.name}</div>
                    <div className="text-xs text-gray-500">{place.distance}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Additional Information */}
        {location.additionalInfo && (
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium mb-2">Good to know</h4>
            <div className="grid grid-cols-2 gap-4">
              {location.additionalInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-gray-500">{info.icon}</span>
                  <span className="text-sm">{info.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-8">
      {/* Categories Grid */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {data?.categories?.map(cat => (
          <button 
            key={cat.id}
            className="flex items-center gap-3 p-4 bg-white rounded-lg border hover:border-gray-300 transition-colors"
          >
            <span className="text-2xl">{cat.icon}</span>
            <span className="font-medium">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Locations List */}
      <div className="space-y-6">
        {data?.locations?.map(location => (
          <motion.div
            id={`location-${location.id}`}
            key={location.id}
            className={`bg-white rounded-lg border p-6 cursor-pointer transition-all
              ${selectedLocation?.id === location.id 
                ? 'border-blue-500 shadow-md' 
                : 'hover:border-gray-300'}`}
            onClick={() => onLocationSelect(location)}
            whileHover={{ scale: 1.01 }}
            animate={{
              borderColor: selectedLocation?.id === location.id ? '#3B82F6' : '#E5E7EB'
            }}
          >
            {/* Main Content */}
            <div className="flex gap-4 mb-4">
              <img 
                src={location.image} 
                alt={location.name}
                className="w-32 h-32 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                <p className="text-gray-600 mb-3">{location.description}</p>
                <div className="flex gap-2">
                  {location.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-gray-100 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Content */}
            {selectedLocation?.id === location.id && renderLocationDetails(location)}
          </motion.div>
        ))}
      </div>
    </div>
  );
}; 