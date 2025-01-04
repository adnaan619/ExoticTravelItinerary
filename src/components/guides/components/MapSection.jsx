import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

export const MapSection = ({ 
  locations, 
  selectedLocation, 
  center, 
  zoom,
  onLocationSelect 
}) => {
  return (
    <div className="w-1/2 h-screen sticky top-0">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerClassName="w-full h-full"
          center={selectedLocation?.coordinates || center}
          zoom={selectedLocation ? 16 : zoom}
        >
          {locations.map(location => (
            <Marker
              key={location.id}
              position={location.coordinates}
              title={location.title}
              animation={selectedLocation?.id === location.id ? 1 : null}
              onClick={() => onLocationSelect(location)}
            />
          ))}
          
          {selectedLocation && (
            <InfoWindow
              position={selectedLocation.coordinates}
              onCloseClick={() => onLocationSelect(null)}
            >
              <div className="p-3 max-w-xs">
                <div className="flex items-start gap-3">
                  <img 
                    src={selectedLocation.image}
                    alt={selectedLocation.title}
                    className="w-20 h-20 rounded object-cover"
                  />
                  <div>
                    <h3 className="font-semibold mb-1">{selectedLocation.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {selectedLocation.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {selectedLocation.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-2 py-0.5 bg-gray-100 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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