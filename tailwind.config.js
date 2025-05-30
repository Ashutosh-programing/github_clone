/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
        colors:{
        'gray-custom' : '#9198a1',
        'blue-custom' : '#4493f8',
        'gray-custom-dashboard' : '#151b23',
        'gray-custom-2' : '#3d444d',
        'bg-custom-gray' : '#0d1116',
      },
      width: {
        'custom-29': '28.5rem',
      },
            flex: {
        'flex-50-percent': '0 0 50%'
      }
    },
  },
  plugins: [],
}

