/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'twitter-blue': '#1DA1F2',
        'charcoal': '#333333',
        'deep-grey': '#555555',
        'light-grey': '#F5F5F5',
      },
    },
  },
  plugins: [require('@plaiceholder/tailwindcss')],
};
