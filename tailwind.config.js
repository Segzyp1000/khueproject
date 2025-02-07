/** @type {import('tailwindcss').Config} */ 

module.exports = { 
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}", 
  ], 
  theme: { 
    fontFamily: {
      display: ['Manrope', 'sans-serif'],
      body: ['Manrope', 'sans-serif'],
    },
    eextend: {
      fontSize: {
        14: '14px',
      },
    colors: { 
      "sidebarColor": "#666d80",
      "sidebarTitle": "#a4abb8",
      "tableTextColor": "#666d80",
      "buttonBg": "#280058",
      'pendingColor': "#f36f4a",
      'activeColor': '#4e5FEF',
      'companyTitle': "#0D0D12"
    },
    "max-width": "1720px"
  }, 
  plugins: [], 
}
}