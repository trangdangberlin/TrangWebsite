/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      ...colors,
      neongreen: '#2fff32'
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};

