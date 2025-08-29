/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      bebas: ["Bebas Neue", "sans-serif"],
      cairo: ["Cairo", "sans-serif"],
    },
  },
},
  plugins: [],
}
