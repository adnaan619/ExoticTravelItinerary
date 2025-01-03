import React from 'react';
import { PackingCategory } from '../cards/PackingCategory';
import { PackingProgress } from '../cards/PackingProgress';

export const PackingFeature = ({ data }) => {
  const { categories, stats, weightLimits, quickAdd, packingTips } = data;
  
  return (
    <div className="grid grid-cols-[2fr,1fr] gap-6">
      <div className="space-y-4">
        {categories.map((category) => (
          <PackingCategory 
            key={category.name} 
            category={category}
          />
        ))}
      </div>
      <div>
        <PackingProgress 
          stats={stats}
          weightLimits={weightLimits}
          quickAdd={quickAdd}
          packingTips={packingTips}
        />
      </div>
    </div>
  );
}; 