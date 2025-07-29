import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', './public/**/*.svg'],
  theme: {
    extend: {
      colors: {
        'deep-grey': '#4a4a4a',
        'charcoal': '#333333',
        'light-grey': '#f5f5f5',
        'twitter-blue': '#1DA1F2',
      },
    },
  },
  plugins: [],
}

export default config
