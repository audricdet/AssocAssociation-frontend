/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans : ["Roboto", "sans-serif"]
      }, 
      colors: {
        'assoc' : '#183071',
        'assoc-bg' : '#8faadc',
        'assoc-gray' : '#d4d4e3'
      }
    },
  },
  plugins: [],
}