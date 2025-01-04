/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff1f0',
          100: '#ffe4e1',
          200: '#ffc9c2',
          300: '#ffa094',
          400: '#ff6b57',
          500: '#ff4331',
          600: '#ed2b17',
          700: '#c51f0d',
          800: '#a21d0f',
          900: '#861c13',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
} 