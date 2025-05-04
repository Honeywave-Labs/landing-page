/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royalpurple: "#5D3A6A",
        royalgold: "#D4AF37",
      },
    },
  },
  plugins: [],
}
