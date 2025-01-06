import React from 'react';
import { Button } from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { TypewriterEffect } from "../ui/typewriter-effect";
import { motion } from 'framer-motion';
import { InfoBrowser } from './InfoBrowser';

export const Hero = () => {
  const navigate = useNavigate();

  const words = [
    {
      text: "Your",
      className: "text-black"
    },
    {
      text: "personal",
      className: "text-black"
    },
    {
      text: "travel",
      className: "text-coral-500"
    },
    {
      text: "companion",
      className: "text-coral-500"
    },
    {
      text: "for",
      className: "text-black"
    },
    {
      text: "exploring",
      className: "text-black"
    },
    {
      text: "Sri Lanka",
      className: "text-black"
    },
  ];

  return (
    <>
      <div className="relative pt-32 pb-0 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <TypewriterEffect 
                words={words}
                className="text-5xl sm:text-6xl md:text-5xl font-bold"
                cursorClassName="hidden"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm text-gray-600 max-w-xl mx-auto mb-8"
            >
              Join thousands of travelers who've planned their perfect Sri Lankan adventure
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-20"
            >
              <Button 
                onClick={() => navigate('/new-trip')}
                variant="primary" 
                className="px-8 py-3 bg-coral-500 hover:bg-coral-600 text-white font-medium"
              >
                Start Planning
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};