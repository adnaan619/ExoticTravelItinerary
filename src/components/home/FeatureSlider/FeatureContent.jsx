import React from 'react';
import { ReservationsFeature } from './features/ReservationsFeature';
import { PackingFeature } from './features/PackingFeature';
import { GuidesFeature } from './features/GuidesFeature';
import { ItineraryFeature } from './features/ItineraryFeature';
import { OfflineFeature } from './features/OfflineFeature';
import { LodgingFeature } from './features/LodgingFeature';

export const FeatureContent = ({ feature }) => {
  const renderFeatureContent = () => {
    switch (feature.id) {
      case 'reservations':
        return <ReservationsFeature data={feature.content.interface} />;
      case 'packing':
        return <PackingFeature data={feature.content.interface} />;
      case 'guides':
        return <GuidesFeature data={feature.content.interface} />;
      case 'itinerary':
        return <ItineraryFeature data={feature.content.interface} />;
      case 'offline':
        return <OfflineFeature data={feature.content.interface} />;
      case 'lodging':
        return <LodgingFeature data={feature.content.interface} />;
      default:
        return null;
    }
  };

  return renderFeatureContent();
}; 