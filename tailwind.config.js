import bgMobile from './src/assets/home/background-home-mobile.jpg'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      barlow: ['Barlow Condensed', 'sans-serif'],
      bellefair: ['Bellefair', 'serif'],
    },
    extend: {
      colors: {
        lilac: '#D0D6F9',
        jetBlack: '#0B0D17',
        white: '#FFFFFF',
      },
      backgroundImage: {
        heroMobile: "url('/src/assets/home/background-home-mobile.jpg')",
      },
    },
  },
  plugins: [],
}
