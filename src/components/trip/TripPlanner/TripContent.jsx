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
            image: "https://example.com/waimea.jpg",
            hasDirections: true
          },
          {
            name: "Lava Poke",
            type: "Restaurant",
            description: "Guests enjoy fresh poke bowls with bold flavors and a touch of island heat. Taste the aloha!",
            image: "https://example.com/poke.jpg"
          }
        ]}
        recommendedPlaces={[
          {
            name: "Haupia Hut",
            image: "https://example.com/haupia.jpg"
          },
          {
            name: "Waikiki Beach",
            image: "https://example.com/waikiki.jpg"
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