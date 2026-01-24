/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#050208',   // Un negro más profundo y puro
        accent: '#8d35ff',   // Tu violeta eléctrico
        secondary: '#ff0055', // El rosa brilloso
      },
    },
  },
  plugins: [],
}