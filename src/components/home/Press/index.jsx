import React from 'react';
import { PressHeader } from './PressHeader';
import { PressCarousel } from './PressCarousel';
import { Stats } from './Stats';

export const Press = () => {
  return (
    <section className="py-20 bg-[#F8F7FF]">
      <div className="max-w-7xl mx-auto px-4">
        <PressHeader />
        <PressCarousel />
        <Stats />
      </div>
    </section>
  );
}; 