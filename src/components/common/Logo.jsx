import React from 'react';

export const Logo = () => {
  return (
    <div className="flex items-center">
      <svg className="w-8 h-8 text-coral-500" viewBox="0 0 24 24" fill="currentColor">
        {/* Add your logo SVG path here */}
        <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99z" />
      </svg>
      <span className="ml-2 text-xl font-semibold text-gray-900">ExoPlanner</span>
    </div>
  );
};