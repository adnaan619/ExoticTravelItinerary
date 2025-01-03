import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const TripMap = () => {
  const center = {
    lat: 21.9815,
    lng: -159.3711
  };

  return (
    <LoadScript googleMapsApiKey={process.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerClassName="w-full h-full"
        center={center}
        zoom={13}
        options={{
        //   styles: mapStyles, // Custom map styles
          disableDefaultUI: true,
          zoomControl: true,
          fullscreenControl: true
        }}
      >
        {/* Add markers for hotels, activities, etc. */}
      </GoogleMap>
    </LoadScript>
  );
}; 