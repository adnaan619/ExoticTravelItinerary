import React from 'react';

export const PackingCategory = ({ category }) => {
  const packedCount = category.items.filter(item => item.packed).length;
  
  return (
    <div className="bg-white rounded-lg border p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{category.name}</h3>
          <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs text-gray-600">
            {category.priority}
          </span>
        </div>
        <span className="text-sm text-gray-500">
          {packedCount}/{category.items.length} packed
        </span>
      </div>

      <div className="space-y-1.5">
        {category.items.map((item) => (
          <div key={item.name} className="flex items-center text-sm">
            <input 
              type="checkbox" 
              checked={item.packed}
              className="h-4 w-4 text-blue-600 rounded"
              readOnly
            />
            <div className="ml-2 flex-1 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>{item.name}</span>
                {item.quantity && (
                  <span className="text-xs text-gray-500">×{item.quantity}</span>
                )}
              </div>
              {item.notes && (
                <span className="text-xs text-gray-500 truncate max-w-[150px]" title={item.notes}>
                  {item.notes}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {(category.packingTips || category.weatherNote || category.localTip) && (
        <div className="mt-2 pt-2 border-t text-xs text-gray-600">
          {category.packingTips && (
            <div className="flex items-center gap-1">
              <span className="text-blue-500">💡</span>
              <span>{category.packingTips.join(', ')}</span>
            </div>
          )}
          {category.weatherNote && (
            <div className="flex items-center gap-1">
              <span>🌤</span>
              <span>{category.weatherNote}</span>
            </div>
          )}
          {category.localTip && (
            <div className="flex items-center gap-1">
              <span>📍</span>
              <span>{category.localTip}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}; 