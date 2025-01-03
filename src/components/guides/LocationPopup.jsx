import React from 'react';

export const LocationPopup = ({ location, onClose }) => {
  return (
    <div className="absolute bottom-8 left-8 right-8 bg-white rounded-lg shadow-xl p-6 z-10 max-h-[80vh] overflow-y-auto">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-semibold mb-2">{location.name}</h3>
          <div className="flex items-center gap-2">
            <span className="flex items-center text-yellow-500">
              ★ {location.rating}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 text-sm">
              {location.reviews} reviews
            </span>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>

      <div className="grid grid-cols-[2fr,1fr] gap-6">
        <div>
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600 mb-4 whitespace-pre-line">
            {location.longDescription}
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Visitor Tips</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                {location.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Location Info</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📍 {location.address}</p>
              <p>⏱ {location.openingHours}</p>
              <p>💴 {location.priceRange}</p>
            </div>
          </div>

          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 flex items-center justify-center gap-2">
              <img src="https://www.google.com/favicon.ico" alt="" className="w-4 h-4" />
              Open in Google Maps
            </button>
            <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 flex items-center justify-center gap-2">
              <img src="https://www.tripadvisor.com/favicon.ico" alt="" className="w-4 h-4" />
              View on Tripadvisor
            </button>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700">
              Add to My Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 