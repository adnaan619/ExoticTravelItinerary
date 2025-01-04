import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

export const CityMap = ({ center, locations, selectedLocation, onLocationSelect }) => {
  return (
    <div className="h-full">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerClassName="w-full h-full"
          center={selectedLocation?.coordinates || center}
          zoom={selectedLocation ? 16 : 13}
          options={{
            styles: [{ /* Add custom map styles here */ }],
            disableDefaultUI: true,
            zoomControl: true,
          }}
        >
          {locations.map(location => (
            <Marker
              key={location.id}
              position={location.coordinates}
              title={location.name}
              animation={selectedLocation?.id === location.id ? 1 : null}
              onClick={() => onLocationSelect(location)}
            />
          ))}

          {selectedLocation && (
            <InfoWindow
              position={selectedLocation.coordinates}
              onCloseClick={() => onLocationSelect(null)}
            >
              <div className="max-w-xs">
                <div className="flex flex-col">
                  <img 
                    src={selectedLocation.image}
                    alt={selectedLocation.name}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <div className="p-3">
                    <h3 className="font-semibold mb-1">{selectedLocation.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {selectedLocation.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {selectedLocation.tags.map(tag => (
                        <span 
                          key={tag}
                          className="px-2 py-0.5 text-xs bg-gray-100 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {selectedLocation.details && (
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        {selectedLocation.details.map((detail, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <span>{detail.icon}</span>
                            <span>{detail.text}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}; 