/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2d2e32",
        secondary: "#6ff7a7",
        tertiary: "#7d7e87"
      }
    },
  },
  plugins: [],
}
