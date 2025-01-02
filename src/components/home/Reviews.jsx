import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'Nadia',
    title: 'Travel Blogger @Couple Tr...',
    image: 'https://source.unsplash.com/100x100/?portrait-woman-1',
    rating: 5,
    text: 'Planning your trip by having all the attractions already plugged into a map makes trip planning so much easier.'
  },
  {
    id: 2,
    name: 'Sharon Brewster',
    initial: 'S',
    rating: 5,
    text: 'amazing app! easy to use, love the AI functionality.'
  },
  {
    id: 3,
    name: 'Lydia Yang',
    initial: 'L',
    title: 'Founder @LydiaScapes Ad...',
    rating: 5,
    text: 'So much easier to visualize and plan a road trip to my favourite rock climbing destinations and explore the area around.'
  },
  {
    id: 4,
    name: 'Jayson Oite',
    image: 'https://source.unsplash.com/100x100/?portrait-man-1',
    rating: 5,
    text: 'It seems to be this is my new travel app buddy. Very handy, convenient and very easy to use. It also recommends tourist destinations and nearby places. Kudos to the programmer. 👏 👏 👏 👏'
  },
  {
    id: 5,
    name: 'Jorge D.',
    image: 'https://source.unsplash.com/100x100/?portrait-man-2',
    rating: 5,
    text: 'It left me speechless that I can add places to my trip and they get automatically populated with a featured pic and description from the web.'
  },
  {
    id: 5,
    name: 'Jorge D.',
    image: 'https://source.unsplash.com/100x100/?portrait-man-2',
    rating: 5,
    text: 'It left me speechless that I can add places to my trip and they get automatically populated with a featured pic and description from the web.'
  },
  
];

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5 my-2">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Avatar = ({ name, image, initial }) => {
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
    );
  }
  return (
    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
      <span className="text-gray-600 text-lg">{initial}</span>
    </div>
  );
};

export const Reviews = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What travelers are raving about
        </h2>
        <p className="text-lg text-gray-600">
          Over 1 million people have already tried Wanderlog and loved its easy trip planning features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-start gap-3">
              <Avatar 
                name={review.name} 
                image={review.image} 
                initial={review.initial}
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {review.name}
                    </h3>
                    {review.title && (
                      <p className="text-sm text-gray-500">
                        {review.title}
                      </p>
                    )}
                  </div>
                </div>
                <StarRating rating={review.rating} />
                <p className="text-gray-600 text-sm leading-relaxed">
                  {review.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 