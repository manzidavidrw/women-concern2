/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green:  '#1E4D35',
          yellow: '#D4A017',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['"Jost"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
