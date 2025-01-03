import React from 'react';

export const PlaceImage = ({ image, name }) => (
  <div className="w-48 h-32 flex-shrink-0">
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover rounded-lg shadow-sm"
    />
  </div>
); 