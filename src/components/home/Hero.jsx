import React from 'react';
import { Button } from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { TypewriterEffect } from "../ui/typewriter-effect";

export const Hero = () => {
  const navigate = useNavigate();

  const words = [
    {
      text: "One",
    },
    {
      text: "app",
    },
    {
      text: "for",
    },
    {
      text: "all",
    },
    {
      text: "your",
    },
    {
      text: "travel",
    },
    {
      text: "planning",
    },
    {
      text: "needs",
    },
  ];

  return (
    <div className="pt-32 pb-20 text-center">
      <div className="mb-6">
        <TypewriterEffect 
          words={words}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900"
          cursorClassName="hidden"
        />
      </div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Create detailed itineraries, explore user-shared guides, and manage your
        bookings seamlessly — all in one place.
      </p>
      <div className="flex justify-center items-center gap-4">
        <Button onClick={() => navigate('/new-trip')}
          variant="primary" className="px-8 py-3">
          Start planning
        </Button>
        <Button variant="outline" className="px-8 py-3">
          Get the app →
        </Button>
      </div>
    </div>
  );
};