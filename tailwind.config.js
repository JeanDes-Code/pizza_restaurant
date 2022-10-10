/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      body: ['Ruda'],
      title: ['Quattrocento'],
    },
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        gold: '#f2c94c',
      },
    },
  },
  plugins: [],
};
