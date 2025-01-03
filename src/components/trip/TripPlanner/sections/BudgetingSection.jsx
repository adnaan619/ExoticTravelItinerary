import React from 'react';

export const BudgetingSection = ({ budget }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Budgeting</h3>
        <button className="px-3 py-1 bg-red-500 text-white text-sm rounded-md">
          Add expense
        </button>
      </div>
      <div className="mb-4">
        <div className="text-2xl font-bold mb-2">${budget.total.toFixed(2)}</div>
        <div className="w-full bg-blue-100 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full" 
            style={{ width: `${(budget.total / budget.limit) * 100}%` }}
          ></div>
        </div>
        <div className="text-sm text-gray-500 mt-1">Budget: ${budget.limit}</div>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 px-3 py-2 text-sm border rounded hover:bg-gray-50">
          Edit budget
        </button>
        <button className="flex-1 px-3 py-2 text-sm border rounded hover:bg-gray-50">
          Debt summary
        </button>
        <button className="px-3 py-2 text-sm border rounded hover:bg-gray-50">
          Settings
        </button>
      </div>
    </div>
  );
}; 