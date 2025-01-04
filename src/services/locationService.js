import axios from 'axios';

const GOOGLE_PLACES_API_KEY = process.env.VITE_GOOGLE_MAPS_API_KEY;

export const locationService = {
  async getPlacesByCategory(city, category, coordinates) {
    // First, search for places using Text Search
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json`,
      {
        params: {
          query: `${category} in ${city}`,
          location: `${coordinates.lat},${coordinates.lng}`,
          radius: '5000',
          type: this.getGooglePlacesType(category),
          key: GOOGLE_PLACES_API_KEY
        }
      }
    );

    // Get additional details for each place
    const placesWithDetails = await Promise.all(
      response.data.results.map(async (place) => {
        const details = await this.getPlaceDetails(place.place_id);
        return { ...place, ...details };
      })
    );

    return this.transformPlacesData(placesWithDetails);
  },

  async getPlaceDetails(placeId) {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json`,
      {
        params: {
          place_id: placeId,
          fields: 'formatted_phone_number,website,opening_hours,photos,reviews',
          key: GOOGLE_PLACES_API_KEY
        }
      }
    );
    return response.data.result;
  },

  getGooglePlacesType(category) {
    const categoryMap = {
      'historical': 'tourist_attraction',
      'beaches': 'natural_feature',
      'culture': 'museum',
      'shopping': 'shopping_mall',
      'activities': 'amusement_park',
      'nature': 'park'
    };
    return categoryMap[category] || 'point_of_interest';
  },

  transformPlacesData(places) {
    return places.map(place => ({
      id: place.place_id,
      name: place.name,
      description: place.editorial_summary?.overview || place.formatted_address,
      image: place.photos?.[0] 
        ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${place.photos[0].photo_reference}&key=${GOOGLE_PLACES_API_KEY}`
        : 'https://via.placeholder.com/400x300?text=No+Image',
      coordinates: {
        lat: place.geometry.location.lat,
        lng: place.geometry.location.lng
      },
      rating: place.rating,
      reviewCount: place.user_ratings_total,
      categories: place.types.map(type => this.formatPlaceType(type)),
      address: place.formatted_address,
      phone: place.formatted_phone_number,
      website: place.website,
      openingHours: place.opening_hours?.weekday_text,
      reviews: place.reviews?.map(review => ({
        author: review.author_name,
        rating: review.rating,
        text: review.text,
        time: new Date(review.time * 1000).toLocaleDateString(),
        authorImage: review.profile_photo_url
      }))
    }));
  },

  formatPlaceType(type) {
    return type
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}; 