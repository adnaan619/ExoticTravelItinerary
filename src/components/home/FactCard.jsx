import { motion } from 'framer-motion';

export const FactCard = ({ emoji, title, description, color = "coral" }) => {
  const getIconBackground = () => {
    const colors = {
      coral: 'bg-red-50',
      blue: 'bg-blue-50',
      green: 'bg-green-50',
      yellow: 'bg-amber-50',
      emerald: 'bg-emerald-50',
      orange: 'bg-orange-50',
      purple: 'bg-purple-50',
      indigo: 'bg-indigo-50'
    };
    return colors[color] || 'bg-gray-50';
  };

  const getTitleColor = () => {
    const colors = {
      coral: 'text-red-500',
      blue: 'text-blue-500',
      green: 'text-green-500',
      yellow: 'text-amber-500',
      emerald: 'text-emerald-500',
      orange: 'text-orange-500',
      purple: 'text-purple-500',
      indigo: 'text-indigo-500'
    };
    return colors[color] || 'text-gray-500';
  };

  return (
    <motion.div 
      className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col items-start gap-4">
        <div className={`${getIconBackground()} p-4 rounded-2xl`}>
          <span className="text-2xl">{emoji}</span>
        </div>
        <div>
          <h3 className={`${getTitleColor()} text-xl font-semibold mb-2`}>
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}; 