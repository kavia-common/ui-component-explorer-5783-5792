/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#F59E0B',
        success: '#F59E0B',
        error: '#EF4444',
        background: '#f9fafb',
        surface: '#ffffff',
        text: '#111827'
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,0.15)'
      },
      borderRadius: {
        xl: '1rem'
      },
      transitionProperty: {
        'colors-transform': 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter'
      }
    }
  },
  plugins: []
};
