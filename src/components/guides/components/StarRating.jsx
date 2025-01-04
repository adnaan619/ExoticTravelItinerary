import React from 'react';

export const StarRating = ({ rating, size = 'normal' }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const filled = i < Math.floor(rating);
    const half = i === Math.floor(rating) && rating % 1 !== 0;
    
    return (
      <span 
        key={i}
        className={`${size === 'small' ? 'text-sm' : 'text-base'} ${
          filled ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        {half ? '★' : '★'}
      </span>
    );
  });

  return <div className="flex gap-0.5">{stars}</div>;
}; 