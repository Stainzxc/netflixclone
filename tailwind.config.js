/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['NetflixSans', ...defaultTheme.fontFamily.sans],
      },
      fontFamily: {
        serif: ['NetflixSans', ...defaultTheme.fontFamily.serif],
      },
      backgroundColor: {
        'transparent': 'transparent',
      },
    },
  },
  plugins: [],
}

