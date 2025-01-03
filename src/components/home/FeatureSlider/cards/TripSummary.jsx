import React from 'react';

export const TripSummary = ({ expenses }) => {
  const {
    breakdown: {
      transportation,
      accommodation,
      activities,
      dining,
      extras
    },
    summary,
    paymentMethods,
    currency
  } = expenses;

  const categories = {
    'Transportation': Object.values(transportation).reduce((a, b) => a + b, 0),
    'Accommodation': Object.values(accommodation).reduce((a, b) => a + b, 0),
    'Activities': Object.values(activities).reduce((a, b) => a + b, 0),
    'Food & Dining': Object.values(dining).reduce((a, b) => a + b, 0),
    'Other Expenses': Object.values(extras).reduce((a, b) => a + b, 0)
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="font-medium mb-4">Trip Summary</h3>
      <div className="space-y-4">
        {/* Categories Breakdown */}
        <div className="space-y-2">
          {Object.entries(categories).map(([category, amount]) => (
            <div key={category} className="flex justify-between text-sm">
              <span>{category}</span>
              <span>${amount}</span>
            </div>
          ))}
        </div>

        {/* Summary Totals */}
        <div className="border-t pt-2">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${summary.subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>${summary.taxes}</span>
            </div>
            <div className="flex justify-between">
              <span>Fees</span>
              <span>${summary.fees}</span>
            </div>
          </div>
          <div className="border-t mt-2 pt-2">
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${summary.total}</span>
            </div>
          </div>
        </div>

        {/* Payment Status */}
        <div className="bg-blue-50 p-3 rounded-lg space-y-2">
          <div className="flex justify-between text-sm">
            <span>Paid</span>
            <span className="text-green-600">${summary.paid}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Remaining</span>
            <span className="text-blue-600">${summary.remaining}</span>
          </div>
          <div className="text-xs text-gray-500">
            Due by {summary.dueDate}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="text-sm text-gray-600">
          <div>Primary: {paymentMethods.primary}</div>
          <div>Backup: {paymentMethods.backup}</div>
        </div>
      </div>
    </div>
  );
}; 