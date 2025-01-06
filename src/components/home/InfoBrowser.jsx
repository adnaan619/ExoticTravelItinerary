import React from 'react';
import { motion } from 'framer-motion';
import { IconBrowser, IconSun, IconMountain, IconPaw, IconWhale, IconTeapot, IconBuilding, IconFortress, IconTrain, IconChefHat, IconBeach, IconFireworks, IconCamera, IconGem, IconSurfing, IconYoga } from '@tabler/icons-react';
import { useInView } from 'react-intersection-observer';

const InfoCard = ({ title, description, icon: Icon, image, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Browser-like header */}
      <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 text-center text-sm text-gray-500 font-medium">
          discover-srilanka.com
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start gap-4">
          {Icon && (
            <div className="bg-coral-50 p-3 rounded-xl">
              <Icon size={24} className="text-coral-500" stroke={1.5} />
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
        
        {image && (
          <motion.div 
            className="mt-4 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src={image} 
              alt={title}
              className="w-full h-48 object-cover"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const infoCards = [
  {
    title: "The Island of Eternal Summer",
    description: "Sri Lanka boasts year-round sunshine and a tropical vibe, perfect for beach getaways, mountain escapes, and cultural explorations!",
    // icon: IconSun,
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3"
  },
  {
    title: "A World of Wonders in a Small Island",
    description: "Experience golden beaches, misty mountains, lush tea plantations, and ancient ruins—all within a single day's journey.",
    // icon: IconMountain,
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?ixlib=rb-4.0.3"
  },
  // ... Add the rest of the cards with their respective icons and high-quality images
];

export const InfoBrowser = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {infoCards.map((card, index) => (
            <InfoCard key={card.title} {...card} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}; 