/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    // ...
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3C2A25',
        accent: '#FF7D54',
        highlight: '#FFD644',
        'background-light': '#FFFEFA',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      fontSize: {
        'responsive-hero': 'clamp(4rem, 16vw, 18rem)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')],
};
