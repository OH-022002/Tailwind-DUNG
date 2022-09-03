
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px',
        '1': '1px',},
      spacing: {
        '18': '4.5rem',
        '46':'11.5rem',
        '50':'12.5rem',
        '54':'13.5rem',
        '77':'19.25rem',
        '85':'21.25rem',
        '100':'25rem',
        '192':'48rem',
        '360': '90rem',
      },
      colors: {
        gray: {
          100: '#EBF1F5',
          200: '#D9E3EA',
          300: '#C5D2DC',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          800: '#25282C',
          900: '#151719',
      },
    purple: {
        100: '#F4F4FF',
        200: '#E2E1FF',
        300: '#CBCCFF',
        400: '#ABABFF',
        500: '#8D8DFF',
        600: '#5D5DFF',
        700: '#4B4ACF',
        800: '#38379C',
        900: '#262668',
    },
    'green':'#48BB78',
  },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      'architects-daughter': ['"Architects Daughter"', 'sans-serif'],
  },
  },
plugins: []
}}