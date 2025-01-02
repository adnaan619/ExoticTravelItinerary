import React from 'react';

const PackingList = () => (
  <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
    <h3 className="font-medium mb-2">Packing checklist</h3>
    <p className="text-sm text-gray-500 mb-4">12 items selected</p>
    
    <div className="space-y-3">
      <div className="border-b pb-2">
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium">Essentials</span>
          <svg className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        {['Boarding pass', 'Cash / foreign currency', 'Credit and debit cards', "Driver's license"].map((item) => (
          <div key={item} className="flex items-center justify-between py-1">
            <span className="text-gray-600">{item}</span>
            <svg className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        ))}
      </div>
    </div>
    
    <button className="w-full mt-4 bg-coral-500 text-white rounded-full py-2 px-4 hover:bg-coral-600 transition-colors">
      Add 12 items to checklist
    </button>
  </div>
);

const BudgetingInterface = () => (
  <div className="bg-white rounded-lg shadow-sm p-4">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-2xl font-bold">Budgeting</h3>
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"/>
        <div className="w-3 h-3 rounded-full bg-yellow-500"/>
        <div className="w-3 h-3 rounded-full bg-green-500"/>
      </div>
    </div>
    
    <div className="mb-6">
      <h2 className="text-3xl font-bold text-gray-900">$2345.10</h2>
      <div className="h-1 w-full bg-blue-500 rounded mt-2"/>
    </div>
    
    <div className="flex space-x-3 mb-6">
      <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium">Edit budget</button>
      <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium">Debt summary</button>
      <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium">Settings</button>
    </div>
    
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium">Expenses</h4>
        <button className="text-sm text-gray-600">Sort: Date ▼</button>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3.414 7.828h13.172a1 1 0 011 1v2.344a1 1 0 01-1 1H3.414a1 1 0 01-1-1V8.828a1 1 0 011-1z"/>
              </svg>
              <span className="font-medium">SFO to HNL</span>
            </div>
            <span className="text-sm text-gray-500">Feb 15 • Flights</span>
          </div>
          <span className="font-medium">$890.12</span>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
              <span className="font-medium">Waikiki Hotel Resort and Spa</span>
            </div>
            <span className="text-sm text-gray-500">Feb 15 • Lodging</span>
          </div>
          <span className="font-medium">$1230.89</span>
        </div>
      </div>
    </div>
  </div>
);

export const BudgetSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-8 relative z-10">
              <BudgetingInterface />
            </div>
            <div className="absolute top-8 -right-8 z-20 w-64">
              <PackingList />
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Pack and budget efficiently
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Keep track of your budget and split costs with your trip mates. View
              expense breakdowns. Use our preset packing lists or create your own.
              Customize to-do lists, shopping lists, and more to ensure you bring
              everything you need on your trip.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 