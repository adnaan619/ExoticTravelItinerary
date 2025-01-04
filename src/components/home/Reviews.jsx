import React from 'react';
import { motion } from 'framer-motion';

export const Reviews = () => {
  const reviews = [
    // English Reviews
    {
      text: "Sri Lanka exceeded all expectations! The cultural heritage and beaches are amazing. The locals were incredibly welcoming.",
      author: "Sarah Mitchell",
      location: "United Kingdom",
      rating: 5,
      language: "en",
      position: { top: '5%', left: '5%' },
      photo: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      text: "Best family vacation we've ever had. The kids loved the elephants at Pinnawala!",
      author: "John Peterson",
      location: "USA",
      rating: 5,
      language: "en",
      position: { top: '5%', right: '5%' },
      photo: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      text: "The food was incredible! Don't miss the seafood in Negombo.",
      author: "Emma Thompson",
      location: "Australia",
      rating: 5,
      language: "en",
      position: { bottom: '5%', left: '5%' },
      photo: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      text: "Stunning beaches and amazing wildlife. A photographer's paradise!",
      author: "David Wilson",
      location: "Canada",
      rating: 5,
      language: "en",
      position: { bottom: '5%', right: '5%' },
      photo: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    
    // Russian Reviews
    {
      text: "Прекрасный отдых! Удивительная природа и древние храмы впечатляют.",
      author: "Анна Петрова",
      location: "Россия",
      rating: 5,
      language: "ru",
      position: { top: '25%', left: '25%' },
      photo: "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
      text: "Незабываемое путешествие по Шри-Ланке. Обязательно вернёмся!",
      author: "Михаил Иванов",
      location: "Россия",
      rating: 5,
      language: "ru",
      position: { top: '25%', right: '25%' },
      photo: "https://randomuser.me/api/portraits/men/6.jpg"
    },

    // Chinese Reviews
    {
      text: "斯里兰卡的自然风光太美了！文化遗产令人惊叹。",
      author: "李明",
      location: "中国",
      rating: 5,
      language: "zh",
      position: { center: true, left: '15%' },
      photo: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      text: "完美的旅行体验，美食很棒，人们很友善。",
      author: "张伟",
      location: "中国",
      rating: 5,
      language: "zh",
      position: { center: true, right: '15%' },
      photo: "https://randomuser.me/api/portraits/men/8.jpg"
    },

    // German Reviews
    {
      text: "Eine wunderbare Reise! Die Strände sind traumhaft schön.",
      author: "Hans Mueller",
      location: "Deutschland",
      rating: 5,
      language: "de",
      position: { bottom: '25%', left: '25%' },
      photo: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      text: "Perfekte Mischung aus Kultur und Entspannung. Sehr empfehlenswert!",
      author: "Maria Schmidt",
      location: "Österreich",
      rating: 5,
      language: "de",
      position: { bottom: '25%', right: '25%' },
      photo: "https://randomuser.me/api/portraits/women/10.jpg"
    },

    // Hindi Reviews
    {
      text: "श्रीलंका की यात्रा बेहद यादगार रही। प्राकृतिक सौंदर्य अद्भुत है।",
      author: "अमित शर्मा",
      location: "भारत",
      rating: 5,
      language: "hi",
      position: { top: '45%', left: '5%' },
      photo: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
      text: "अद्भुत अनुभव! खाना स्वादिष्ट और लोग बहुत मिलनसार हैं।",
      author: "प्रिया पटेल",
      location: "भारत",
      rating: 5,
      language: "hi",
      position: { top: '45%', right: '5%' },
      photo: "https://randomuser.me/api/portraits/women/12.jpg"
    },

    // Arabic Reviews
    {
      text: "تجربة رائعة! الطبيعة خلابة والثقافة غنية.",
      author: "محمد عبدالله",
      location: "الإمارات",
      rating: 5,
      language: "ar",
      position: { center: true, left: '40%' },
      photo: "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
      text: "رحلة لا تُنسى! الضيافة والطعام رائعان.",
      author: "فاطمة الأحمد",
      location: "السعودية",
      rating: 5,
      language: "ar",
      position: { center: true, right: '40%' },
      photo: "https://randomuser.me/api/portraits/women/14.jpg"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Loved by Travelers Worldwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who have experienced the beauty of Sri Lanka
          </p>
        </div>

        {/* Scattered Reviews */}
        <div className="relative h-[1000px]">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="absolute"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              style={{
                ...review.position,
                maxWidth: '300px',
                transform: review.center ? 'translateY(-50%)' : 'none',
                top: review.center ? '50%' : review.position.top,
              }}
            >
              <div 
                className={`bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform
                  ${review.language === 'ar' ? 'text-right' : 'text-left'}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={review.photo} 
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{review.author}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>

                <p className="text-gray-700 mb-4" style={{ 
                  fontSize: review.language === 'zh' ? '1.1rem' : '1rem',
                  lineHeight: review.language === 'ar' || review.language === 'hi' ? '1.8' : '1.5'
                }}>
                  "{review.text}"
                </p>

                <div className="flex justify-end">
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
                    {review.language.toUpperCase()}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-coral-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 right-20 w-32 h-32 bg-coral-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-coral-300 rounded-full opacity-20"></div>
      </div>
    </section>
  );
}; 