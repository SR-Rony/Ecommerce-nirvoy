/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1404px',
      },
      colors: {
        'primary': '#0198E9',
        'text': "#383838",
        "gd-background":"linear-gradient(82deg, #FF7A00 24.9%, #FFB800 96.57%)"
      },
      fontFamily: {
        'poppins': [ 'Poppins', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

