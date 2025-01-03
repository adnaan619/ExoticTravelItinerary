import React from 'react';

export const PlaceRating = ({ rating, reviews }) => (
  <div className="flex items-center gap-2 mb-2">
    <span className="flex items-center text-yellow-500">
      ★ {rating}
    </span>
    <span className="text-gray-400">•</span>
    <span className="text-gray-600 text-sm">
      {reviews.toLocaleString()} reviews
    </span>
  </div>
); 