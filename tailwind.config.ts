import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'twitter-blue': '#1DA1F2',
        'twitter-blue-dark': '#1a91da',
        'twitter-blue-light': '#e8f5fe',
        'charcoal': '#14171a',
        'deep-grey': '#333333',
        'dark-grey': '#657786',
        'light-grey': '#f7f9fa',
        'off-white': '#fafbfc',
        'grey': '#e1e8ed',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out',
      },
    },
  },
  plugins: [],
}
export default config