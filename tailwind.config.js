/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'edu': ['"Edu NSW ACT Foundation"', 'cursive']
      }
    },
  },
  plugins: [],
}
