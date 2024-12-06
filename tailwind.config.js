/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
      colors: {
        greentheame: "#E31226",
        greentheameHover: "#d74150"
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.w-calc': {
          width: 'calc(100% - 20px)',
        },
        '.h-calc': {
          height: 'calc(100vh - 240px)',
        },
        // Add more calc() utilities as needed
      })
    }
  ],
}