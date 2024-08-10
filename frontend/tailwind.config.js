/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      classes: {
        error: 'bg-red-100 border-red-200 text-red-600', // define the styles for the error class
      },
    },
  },
  plugins: [],
}

