//TODO: DELETE ALL THE IMPORTS WITH ONE CLICK.
import bgMobile from './src/assets/home/background-home-mobile.jpg'
import bgTablet from './src/assets/home/background-home-tablet.jpg'
import bgDesktop from './src/assets/home/background-home-desktop.jpg'
import bgDestMobile from './src/assets/destination/background-destination-mobile.jpg'
import bgDestTablet from './src/assets/destination/background-destination-tablet.jpg'
import bgDestDesktop from './src/assets/destination/background-destination-desktop.jpg'
import bgCrewMobile from './src/assets/crew/background-crew-mobile.jpg'
import bgCrewTablet from './src/assets/crew/background-crew-tablet.jpg'
import bgCrewDesktop from './src/assets/crew/background-crew-desktop.jpg'
import bgTechMobile from './src/assets/technology/background-technology-mobile.jpg'
import bgTechTablet from './src/assets/technology/background-technology-tablet.jpg'
import bgTechDesktop from './src/assets/technology/background-technology-desktop.jpg'
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
        heroTablet: "url('/src/assets/home/background-home-tablet.jpg')",
        heroDesktop: "url('/src/assets/home/background-home-desktop.jpg')",
        destinationMobile:
          "url('/src/assets/destination/background-destination-mobile.jpg')",
        destinationTablet:
          "url('/src/assets/destination/background-destination-tablet.jpg')",
        destinationDesktop:
          "url('/src/assets/destination/background-destination-desktop.jpg')",
        crewMobile: "url('/src/assets/crew/background-crew-mobile.jpg')",
        crewTablet: "url('/src/assets/crew/background-crew-tablet.jpg')",
        crewDesktop: "url('/src/assets/crew/background-crew-desktop.jpg')",
        techMobile:
          "url('/src/assets/technology/background-technology-mobile.jpg')",
        techTablet:
          "url('/src/assets/technology/background-technology-tablet.jpg')",
        techDesktop:
          "url('/src/assets/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
}
