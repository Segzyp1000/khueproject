/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Manrope'],
      serif: ['inter'],
      mono: ['Poppins']
    },
    extend: {
      colors: {
        primary: {
          50: '#A4ABB8',
          100: '#666D80'
        }
      }
    },
    plugins: []
  }
};
