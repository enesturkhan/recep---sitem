/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7dd3fc', // açık mavi
          DEFAULT: '#0ea5e9', // canlı mavi
          dark: '#0369a1', // koyu mavi
        },
        secondary: {
          light: '#fef9c3', // açık sarı
          DEFAULT: '#fde047', // canlı sarı
          dark: '#facc15', // koyu sarı
        },
        background: {
          light: '#f8fafc', // çok açık gri
          DEFAULT: '#f1f5f9', // açık gri
          dark: '#1e293b', // koyu gri
        },
        accent: {
          light: '#fbcfe8', // açık pembe
          DEFAULT: '#ec4899', // canlı pembe
          dark: '#be185d', // koyu pembe
        },
      },
    },
  },
  plugins: [],
}

