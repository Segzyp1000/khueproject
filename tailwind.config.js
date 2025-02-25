/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['inter', 'serif'],
      mono: ['Poppins', 'monospace'],
    },
    extend: {
      colors: {
        primary: {
          50: '#A4ABB8',
          100: '#666D80',
          200: '#454F55',
          300: '#3A4055',
          400: '#2E3745',
          500: '#242B3A',
          600: '#1F253A',
          700: '#151B2E',
          800: '#0E141F',
          900: '#03070F',
        },
      },
    },
  },
  plugins: [],
};
