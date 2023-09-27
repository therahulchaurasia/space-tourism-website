/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      barlow: ['Barlow Condensed', 'sans-serif'],
      bellefair: ['Bellefair', 'serif'],
    },
    extend: {
      boxShadow: {
        ring: '0 0 0 25px rgba(255,255,255, 0.1)',
        ringmd: '0 0 0 35px rgba(255,255,255, 0.1)',
        ringxl: '0 0 0 50px rgba(255,255,255, 0.1)',
      },
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
        rocketBanner:
          "url('/src/assets/technology/image-launch-vehicle-landscape.jpg')",
        rocketBannerDesktop:
          "url('/src/assets/technology/image-launch-vehicle-portrait.jpg')",
      },
    },
  },
  plugins: [],
}
