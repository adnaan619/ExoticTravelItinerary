import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const footerSections = {
    wanderlog: [
      { title: 'Hotels', link: '/hotels' },
      { title: 'Blog', link: '/blog' },
      { title: 'Report security issue', link: '/security' },
      { title: 'Terms, Privacy policy & Copyright', link: '/legal' },
      { title: 'Mobile app', link: '/app' },
      { title: 'Browser extension', link: '/extension' },
      { title: 'Travel budgeting & cost tracking', link: '/budgeting' },
      { title: 'Jobs', link: '/jobs' },
      { title: 'Contact us', link: '/contact' },
      { title: 'Google data disclosure', link: '/privacy/google' },
      { title: 'How to embed a map on your travel blog', link: '/embed-map' },
    ],
    guideAndResources: [
      { title: 'Trip planners by destination', link: '/planners' },
      { title: 'Explore cities and countries', link: '/explore' },
      { title: 'Road trips by destination', link: '/road-trips' },
      { title: 'Best places to visit by category', link: '/best-places' },
      { title: 'Popular search terms by destination', link: '/search-terms' },
      { title: 'Weather around the world', link: '/weather' },
      { title: 'Travel questions & answers', link: '/qa' },
      { title: 'Travel itinerary guides', link: '/guides' },
      { title: 'Maps of cities and national parks', link: '/maps' },
      { title: 'Destinations at different times of the year', link: '/seasonal' },
      { title: 'Places to visit by destination', link: '/destinations' },
    ],
  };

  return (
    <footer className="bg-gray-50 py-16 border-t">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <p className="text-gray-600 text-sm">
              Made with ❤️ from SF & more © 2022 Travelchime Inc.
            </p>
          </div>

          {/* Wanderlog Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Wanderlog</h3>
            <ul className="space-y-2">
              {footerSections.wanderlog.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.link}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guide and Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Guide and resources</h3>
            <ul className="space-y-2">
              {footerSections.guideAndResources.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.link}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get the app */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Get the app</h3>
            <div className="space-y-3">
              <a
                href="https://apps.apple.com/app/wanderlog/id1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  className="h-10"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.wanderlog"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 