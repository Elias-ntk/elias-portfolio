/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#050208',
        accent: 'rgb(0,255,247)',
        secondary: '#ff0055',
        blueL: 'rgb(0,255,247)',
        pinkcust:'rgb(0, 255, 229)' ,
      },
      
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}