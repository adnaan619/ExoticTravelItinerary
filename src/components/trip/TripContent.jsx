import React from 'react';
import { ItineraryCard } from './cards/ItineraryCard';

export const TripContent = () => {
  return (
    <div className="p-4 space-y-4">
      <ItineraryCard 
        places={[
          {
            name: "Waimea Canyon",
            type: "Scenic Point",
            duration: "20 min",
            distance: "2m",
            description: "Expansive, mountain top gorge known as the \"Grand Canyon of the Pacific\" features sweeping views.",
            image: "https://images.unsplash.com/photo-1526604648377-1433c7c1f5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
            hasDirections: true
          },
          {
            name: "Lava Poke",
            type: "Restaurant",
            description: "Guests enjoy fresh poke bowls with bold flavors and a touch of island heat. Taste the aloha!",
            image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
          }
        ]}
        recommendedPlaces={[
          {
            name: "Haupia Hut",
            image: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
          },
          {
            name: "Waikiki Beach",
            image: "https://images.unsplash.com/photo-1507876466758-bc54f384809c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
          }
        ]}
        budget={{
          total: 3750,
          limit: 5000
        }}
      />
    </div>
  );
}; 