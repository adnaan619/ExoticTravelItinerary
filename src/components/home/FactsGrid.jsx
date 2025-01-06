import { motion } from 'framer-motion';
import { FactCard } from './FactCard';

const facts = [
  {
    emoji: "🏖️",
    title: "Coastal Paradise",
    description: "1,340km of pristine coastline featuring golden beaches, turquoise waters, and vibrant coral reefs perfect for snorkeling and diving.",
    color: "coral"
  },
  {
    emoji: "🏛️",
    title: "Rich Heritage",
    description: "8 UNESCO World Heritage sites including ancient cities, temples, and fortresses dating back over 2,000 years.",
    color: "blue"
  },
  {
    emoji: "🌴",
    title: "Perfect Climate",
    description: "Year-round tropical weather with average temperatures of 25°C and distinct monsoon seasons creating diverse landscapes.",
    color: "green"
  },
  {
    emoji: "🐘",
    title: "Wildlife Haven",
    description: "Home to the world's largest concentration of leopards and Asian elephants, with 26 national parks covering 5,734 sq km.",
    color: "yellow"
  },
  {
    emoji: "🍵",
    title: "Tea Country",
    description: "World-famous Ceylon tea plantations covering misty mountains, producing over 300 million kg of tea annually.",
    color: "emerald"
  },
  {
    emoji: "🌊",
    title: "Surf Paradise",
    description: "World-class surfing spots with waves for all skill levels, making it a top destination for surf enthusiasts.",
    color: "blue"
  },
  {
    emoji: "🍛",
    title: "Culinary Delights",
    description: "Rich culinary heritage featuring aromatic curries, fresh seafood, and unique spice blends influenced by centuries of trade.",
    color: "orange"
  },
  {
    emoji: "🎭",
    title: "Cultural Diversity",
    description: "A vibrant blend of Sinhalese, Tamil, Muslim, and colonial influences creating a unique cultural tapestry.",
    color: "purple"
  },
  {
    emoji: "🚂",
    title: "Scenic Railways",
    description: "Some of the world's most scenic train routes winding through tea plantations and mountain passes.",
    color: "indigo"
  }
];

export const FactsGrid = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
    >
      {facts.map((fact, index) => (
        <motion.div
          key={fact.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            ease: "easeOut"
          }}
        >
          <FactCard {...fact} />
        </motion.div>
      ))}
    </motion.div>
  );
}; 