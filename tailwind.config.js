/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'cp-building': 'url("/src/assets/cp.png")'
      }
    }
  },
  plugins: []
}
