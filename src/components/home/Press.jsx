import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const pressReviews = [
  {
    id: 1,
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Thrillist_logo.png",
    quote: "If you're looking for a more 360-degree travel planner, Wanderlog might be a good option for you. The platform is very intuitive, and it's super easy to navigate regardless of the many features it offers. In short, it gives you a lot of tools, but isn't overwhelming.",
    source: 'Thrillist'
  },
  {
    id: 2,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/Cond%C3%A9_Nast_Traveler_logo.png",
    quote: "One of the best travel apps for planning every kind of trip, including road trips and group travel: create a trip itinerary, budget costs, organise flights and hotel reservations, and collaborate with friends. After your trip, share a travel guide to inspire other travellers.",
    source: 'Condé Nast Traveler'
  },
  {
    id: 3,
    logo: "https://www.androidauthority.com/wp-content/uploads/2019/05/Android-Authority-logo-1-1200x508.png",
    quote: "If you're looking for an app to help you plan trips, try Wanderlog. It is the travel planner to end all travel planners. It can easily replace lists in Maps, spreadsheets, Chrome bookmarks, calendar events, personal notes, and more. I used to get exhausted planning one or two trips a year; now, I can plan 10 trips a year and have time to spare. That's how good this app is.",
    source: 'Android Authority'
  },
  {
    id: 4,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Forbes_logo.svg/1280px-Forbes_logo.svg.png",
    quote: "A comprehensive travel planning tool that streamlines the entire process from inspiration to execution.",
    source: 'Forbes'
  },
  {
    id: 5,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_of_National_Geographic.svg/2560px-Logo_of_National_Geographic.svg.png",
    quote: "The perfect blend of functionality and simplicity for modern travelers seeking seamless trip planning.",
    source: 'National Geographic'
  },
  {
    id: 6,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/BBC_logo.svg/2560px-BBC_logo.svg.png",
    quote: "An innovative approach to travel planning that puts everything you need at your fingertips.",
    source: 'BBC Travel'
  }
];

export const Press = () => {
  return (
    <section className="py-20 bg-[#F8F7FF]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Recommended by the press
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leading companies and media outlets are talking about Wanderlog.
            <br />
            Discover why we're their top choice for travel planning.
          </p>
        </div>

        <div className="relative px-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="px-4"
          >
            {pressReviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-white rounded-2xl p-8 h-full flex flex-col shadow-sm">
                  <div className="h-16 mb-8 flex items-center">
                    <img
                      src={review.logo}
                      alt={review.source}
                      className="h-full max-w-[200px] object-contain"
                    />
                  </div>
                  <blockquote className="flex-1">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      "{review.quote}"
                    </p>
                  </blockquote>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10 focus:outline-none hover:bg-gray-50 transition-colors">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10 focus:outline-none hover:bg-gray-50 transition-colors">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}; 