import React from 'react';

export const BudgetMockup = ({ content }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-1">
          {content.total}
        </h3>
        <div className="w-full bg-blue-100 rounded-full h-2 mb-4">
          <div 
            className="bg-blue-500 h-2 rounded-full" 
            style={{ width: `${(parseFloat(content.total.replace(/[^0-9.-]+/g,"")) / parseFloat(content.budget.replace(/[^0-9.-]+/g,""))) * 100}%` }}
          ></div>
        </div>
        
        <div className="space-y-3 mb-4">
          {content.expenses.map((expense, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl">{expense.icon}</span>
                <div>
                  <div className="font-medium">{expense.title}</div>
                  <div className="text-sm text-gray-500">{expense.date}</div>
                </div>
              </div>
              <div className="font-medium">{expense.amount}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          {content.actions.map(action => (
            <button 
              key={action}
              className="flex-1 px-3 py-2 text-sm border rounded hover:bg-gray-50"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}; 