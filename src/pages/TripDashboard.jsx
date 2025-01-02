import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export const TripDashboard = () => {
    const googleMapsApiKey = process.env.VITE_GOOGLE_MAPS_API_KEY;

    return (
        <div className="h-screen flex flex-col">
            {/* Top Navigation */}
            <nav className="h-12 bg-white border-b flex items-center justify-between px-4">
                <div className="flex items-center space-x-4">
                    <img src="/logo.svg" alt="Logo" className="h-6" />
                    <div className="flex items-center space-x-2">
                        <button className="text-gray-400 hover:text-gray-600">
                            <span>SAVED</span>
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                            ↩ Undo
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                            ↪ Redo
                        </button>
                    </div>
                </div>

                <div className="flex items-center space-x-3">
                    <button className="px-4 py-1.5 bg-gray-800 text-white rounded-md text-sm">
                        Share
                    </button>
                    <button className="px-4 py-1.5 bg-gray-800 text-white rounded-md text-sm">
                        Get app
                    </button>
                    <button className="text-gray-600">⋮</button>
                </div>
            </nav>

            <div className="flex-1 flex">
                {/* Left Sidebar */}
                <div className="w-60 bg-white border-r flex flex-col">
                    <div className="p-2">
                        <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded w-full">
                            <span className="text-purple-600">⚡</span>
                            <span>AI Assistant</span>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        <div className="p-2">
                            <button className="flex items-center justify-between p-2 bg-gray-100 rounded w-full">
                                <span className="font-medium">Overview</span>
                                <span>▼</span>
                            </button>

                            <div className="mt-2 space-y-1">
                                {['Explore', 'Notes', 'Places to visit', 'Untitled'].map(item => (
                                    <button key={item} className="p-2 hover:bg-gray-100 rounded w-full text-left">
                                        {item}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-4">
                                <div className="p-2 font-medium">Itinerary</div>
                                {['Thu 1/9', 'Fri 1/10', 'Sat 1/11', 'Sun 1/12', 'Mon 1/13'].map(day => (
                                    <button key={day} className="p-2 hover:bg-gray-100 rounded w-full text-left">
                                        {day}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button className="p-2 flex items-center space-x-2 hover:bg-gray-100 border-t">
                        <span>◀</span>
                        <span>Hide sidebar</span>
                    </button>
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-white">
                    <div className="p-6">
                        <div className="flex items-center space-x-4 mb-6">
                            <h1 className="text-2xl font-bold">Trip to Tokyo</h1>
                            <div className="flex items-center space-x-2 text-gray-600">
                                <span>1/9 - 2/12</span>
                                <button className="w-8 h-8 bg-gray-100 rounded-full">A</button>
                                <button className="text-blue-600">+</button>
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold flex items-center">
                                    Explore
                                    <span className="ml-2">▼</span>
                                </h2>
                                <button className="px-4 py-2 bg-coral-500 text-white rounded-full text-sm">
                                    Browse all
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <ExploreCard
                                    image="/tokyo-temple.jpg"
                                    title="Top places for Tokyo"
                                    description="Most often-seen on the web"
                                    logo="/wanderlog-logo.svg"
                                />
                                <ExploreCard
                                    image="/tokyo-food.jpg"
                                    title="Best restaurants in Tokyo"
                                    description="Most often-seen on the web"
                                    logo="/wanderlog-logo.svg"
                                />
                                <ExploreCard
                                    image="/tokyo-hotel.jpg"
                                    title="Search hotels with transparent pricing"
                                    description="Unlike most sites, we don't sort based on commissions"
                                    logo="/wanderlog-logo.svg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="w-1/2 relative">
                    <LoadScript googleMapsApiKey={googleMapsApiKey}>
                        <GoogleMap
                            mapContainerStyle={{ width: '100%', height: '100%' }}
                            center={{ lat: 35.6762, lng: 139.6503 }}
                            zoom={10}
                        />
                    </LoadScript>

                    <div className="absolute top-4 right-4 space-y-2">
                        <button className="bg-white p-2 rounded shadow">
                            <span className="flex items-center space-x-1">
                                <span>🗺️</span>
                                <span>Export</span>
                                <span className="text-xs bg-yellow-400 px-1 rounded">PRO</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ExploreCard = ({ image, title, description, logo }) => (
    <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
            <h3 className="font-medium mb-1">{title}</h3>
            <p className="text-sm text-gray-600 mb-2">{description}</p>
            <img src={logo} alt="Logo" className="h-5" />
        </div>
    </div>
); 