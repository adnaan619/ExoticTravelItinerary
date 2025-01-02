import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-coral-500 hover:bg-coral-600 text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900',
    outline: 'border border-gray-300 hover:bg-gray-50 text-gray-700'
  };

  return (
    <button
      className={`
        px-4 py-2 rounded-full font-medium transition-colors
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};