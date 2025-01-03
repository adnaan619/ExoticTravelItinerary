import React from 'react';

const cities = [
    {
        name: 'Paris',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a',
        landmarks: 'Eiffel Tower • Louvre Museum • Notre-Dame Cathedral',
        size: 'normal' // normal size card
    },
    {
        name: 'Tokyo',
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26',
        landmarks: 'Tokyo Tower • Senso-ji Temple • Shibuya Crossing',
        size: 'normal'
    },
    {
        name: 'Rome',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5',
        landmarks: 'Colosseum • Vatican City • Pantheon',
        size: 'normal'
    },
    {
        name: 'Bangkok',
        image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed',
        landmarks: 'Grand Palace • Wat Phra Kaew • Wat Arun',
        size: 'wide' // wide card
    },
    {
        name: 'New York',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
        landmarks: 'Times Square • Central Park • Empire State Building',
        size: 'wide'
    }
];

export const ExplorePlaces = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        Explore hundreds of places to visit
                    </h2>
                    <h3 className="text-2xl text-gray-600">
                        for every corner of the world
                    </h3>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {cities.map((city) => (
                        <div
                            key={city.name}
                            className={`relative rounded-2xl overflow-hidden cursor-pointer group
                ${city.size === 'wide' ? 'col-span-3' : 'col-span-1'}
                ${city.size === 'wide' ? 'h-[400px]' : 'h-[300px]'}`}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={city.image}
                                    alt={city.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <h3 className="text-3xl font-bold mb-2">{city.name}</h3>
                                <p className="text-sm text-white/90">{city.landmarks}</p>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-coral-500 text-white rounded-full font-medium hover:bg-coral-600 transition-colors">
                        View all destinations
                    </button>
                </div>
            </div>
        </section>
    );
}; 