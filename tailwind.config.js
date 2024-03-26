/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'theme': {
        100: '#F4EEFF',
        200: '#DCD6F7',
        300: '#A6B1E1',
        400: '#424874',
      },
      'indigo': {950: '#1e1b4b' },
      'white': '#ffff',
    },
  },
  plugins: [],
}