import React from 'react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-gray-900 font-medium">
              Log in
            </button>
            <Button variant="primary">Sign up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};