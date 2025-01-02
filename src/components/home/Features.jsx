import React from 'react';

const features = [
  {
    id: 1,
    title: 'Add places from guides with 1 click',
    description: 'We crawled the web so you dont have to. Easily add mentioned places to your plan.',
    image: '/images/add-places.png', // You'll need to add these images to your public folder
    tags: ['TRIPADVISOR', 'LONELY PLANET', 'POPULAR BLOGS'],
    button: 'Add to plan'
  },
  {
    id: 2,
    title: 'Expense tracking and splitting',
    description: 'Keep track of your budget and split the cost between your tripmates.',
    image: '/images/expense-tracking.png',
    badges: ['NV', 'OM', 'HY', 'PX']
  },
  {
    id: 3,
    title: 'Collaborate with friends in real time',
    description: 'Plan along with your friends with live syncing and collaborative editing.',
    image: '/images/collaborate.png',
    actions: ['Connect', 'Forward']
  },
  {
    id: 4,
    title: 'Track your travel spending',
    description: 'Keep all your expenses organized and categorized.',
    image: '/images/expenses.png'
  },
  {
    id: 5,
    title: 'Create detailed day-by-day plans',
    description: 'Plan every detail of your trip with our intuitive interface.',
    image: '/images/planning.png'
  },
  {
    id: 6,
    title: 'Get smart travel suggestions',
    description: 'Receive personalized recommendations based on your interests.',
    image: '/images/suggestions.png'
  }
];

const FeatureCard = ({ feature }) => (
  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
    <div className="h-48 mb-6 relative">
      <img
        src={feature.image}
        alt={feature.title}
        className="w-full h-full object-contain"
      />
      {feature.tags && (
        <div className="flex gap-2 absolute top-0 left-0">
          {feature.tags.map(tag => (
            <span key={tag} className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}
      {feature.badges && (
        <div className="flex -space-x-2">
          {feature.badges.map(badge => (
            <div key={badge} className="w-10 h-10 rounded-full bg-teal-400 flex items-center justify-center text-white text-sm font-medium">
              {badge}
            </div>
          ))}
        </div>
      )}
      {feature.actions && (
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {feature.actions.map(action => (
            <button key={action} className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
              {action === 'Connect' && <EmailIcon />}
              {action === 'Forward' && <ForwardIcon />}
              {action}
            </button>
          ))}
        </div>
      )}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
    <p className="text-gray-600">{feature.description}</p>
  </div>
);

// Simple icon components
const EmailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ForwardIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Features to replace all your other tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map(feature => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}; 