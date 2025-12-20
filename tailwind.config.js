/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['Inter', 'serif'],
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
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem', // px-5
          md: '2.5rem',       // px-10
          lg: '3.75rem',      // px-15
        },
        screens: {
          xl: '87.5rem',      // 1400px
        },
      },
    },
  },
  plugins: [],
};