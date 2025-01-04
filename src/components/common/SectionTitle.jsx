import React from 'react';

export const SectionTitle = ({ title, className }) => {
  return (
    <h2 className={`text-4xl font-bold text-gray-900 ${className}`}>
      {title}
    </h2>
  );
}; 