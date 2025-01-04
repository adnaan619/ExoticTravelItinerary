import React from 'react';
import { useNavigate } from 'react-router-dom';

const adventures = [
  {
    title: 'Paris 5 Day Tourist Itinerary +Rec...',
    description: "I've studied abroad in Paris. Other than that, I've visited Paris another 6 times...",
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a',
    author: {
      name: 'Elisa Li',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      views: '105,590',
      likes: '514'
    }
  },
  {
    title: 'Japan: Video Game Guide 🎮',
    description: 'Did a summer internship in Japan during 2019. Stayed in Shinagawa City...',
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd',
    author: {
      name: 'Tuyet',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      views: '36,112',
      likes: '691'
    }
  },
  {
    title: 'Kandy: Cultural Capital Guide 🏛️',
    description: 'Explore the ancient temples, botanical gardens, and cultural heritage of Kandy, Sri Lanka...',
    image: 'https://images.unsplash.com/photo-1704797390857-640484bad286?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2FuZHl8ZW58MHx8MHx8fDA%3D',
    author: {
      name: 'Amara Silva',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      views: '28,075',
      likes: '142'
    }
  },
  {
    title: 'Ella: Mountain Paradise 🏔️',
    description: 'A complete guide to Ella - from hiking Little Adam\'s Peak to the Nine Arch Bridge and tea plantations...',
    image: 'https://images.unsplash.com/photo-1566766189268-ecac9118f2b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEVsbGF8ZW58MHx8MHx8fDA%3D',
    author: {
      name: 'Kavinda Perera',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      views: '15,488',
      likes: '221'
    }
  }
];

export const AdventureSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (adventure) => {
    if (adventure.title.includes('Japan: Video Game Guide')) {
      navigate('/guides/japan-video-game');
    } else if (adventure.title.includes('Paris 5 Day')) {
      navigate('/guides/paris-5-day');
    } else if (adventure.title.includes('Kandy: Cultural Capital')) {
      navigate('/guides/kandy-cultural-guide');
    } else if (adventure.title.includes('Ella: Mountain Paradise')) {
      navigate('/guides/ella-mountain-guide');
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Find your next adventure</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through itineraries and guides crafted by fellow travelers. Get inspired
            by real experiences and detailed plans for your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-12">
          {adventures.map((adventure) => (
            <div
              key={adventure.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleCardClick(adventure)}
            >
              <div className="relative h-48">
                <img
                  src={adventure.image}
                  alt={adventure.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {adventure.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {adventure.description}
                </p>
                <div className="flex items-center">
                  <img
                    src={adventure.author.avatar}
                    alt={adventure.author.name}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium">
                      {adventure.author.name}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>👁 {adventure.author.views}</span>
                      <span className="mx-2">•</span>
                      <span>❤️ {adventure.author.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center space-x-4">
          <button className="px-8 py-3 bg-coral-500 text-white rounded-full font-medium hover:bg-coral-600 transition-colors">
            Start planning
          </button>
          <a href="#" className="text-coral-500 font-medium hover:text-coral-600 flex items-center">
            Get the app <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}; 