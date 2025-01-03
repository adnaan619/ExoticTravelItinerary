import React from 'react';

const GuideCard = ({ guide }) => (
  <div className="bg-white rounded-lg border overflow-hidden group hover:shadow-lg transition-shadow">
    <div className="relative">
      <img 
        src={guide.image} 
        alt={guide.title} 
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      {guide.badge && (
        <span className="absolute top-3 right-3 px-3 py-1 bg-coral-500 text-white text-xs rounded-full">
          {guide.badge}
        </span>
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <div className="flex items-center gap-2">
          <img 
            src={guide.authorAvatar} 
            alt={guide.author} 
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <div className="text-white">
            <div className="text-sm font-medium">By {guide.author}</div>
            <div className="text-xs opacity-80">Local Expert • {guide.lastUpdated}</div>
          </div>
        </div>
      </div>
    </div>

    <div className="p-4">
      <h3 className="font-medium text-lg mb-2 group-hover:text-coral-500 transition-colors">
        {guide.title}
      </h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {guide.description}
      </p>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1">
          <span className="text-yellow-400">★</span>
          <span className="font-medium">{guide.rating}</span>
          <span className="text-gray-500 text-sm">({guide.reviews})</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <span>👁</span>
          <span>{guide.views} views</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <span>⏱</span>
          <span>{guide.readTime}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {guide.highlights.map((highlight, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
          >
            {highlight}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {guide.features.map((feature, index) => (
            <span 
              key={index} 
              className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-sm"
              title={feature.label}
            >
              {feature.icon}
            </span>
          ))}
        </div>
        <button className="px-4 py-2 bg-coral-500 text-white rounded-lg text-sm hover:bg-coral-600 transition-colors">
          Read guide
        </button>
      </div>
    </div>
  </div>
);

export const GuidesFeature = ({ data }) => (
  <div>
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-xl font-semibold mb-1">Local Travel Guides</h2>
        <p className="text-gray-600">Curated guides by local experts and experienced travelers</p>
      </div>
      <div className="flex gap-2">
        <select className="px-4 py-2 border rounded-lg text-sm">
          <option>Most Popular</option>
          <option>Recently Updated</option>
          <option>Highest Rated</option>
        </select>
        <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">
          Filters
        </button>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-6">
      {data.guides.map((guide) => (
        <GuideCard key={guide.title} guide={guide} />
      ))}
    </div>
  </div>
); 