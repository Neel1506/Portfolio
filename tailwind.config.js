/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./index.js'],
  theme: {
    extend: {
      fontSize: {
        'title': ['2rem', { lineHeight: '1.2' }],
        'title-lg': ['2.5rem', { lineHeight: '1.2' }],
        'sub-title': ['1rem', { lineHeight: '1.4' }],
        'sub-title-lg': ['1.5rem', { lineHeight: '1.4' }],
        'para': ['1rem', { lineHeight: '1.3' }],
        'para-lg': ['1.125rem', { lineHeight: '1.6' }],
      },
      colors: {
        primary: '#1E3A8A',      // Dark blue
        secondary: '#3B82F6',    // Light blue
        textPrimary: '#333333',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '60%': { transform: 'translateY(5%)', opacity: '1' },
          '80%': { transform: 'translateY(-2%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.9s ease-in-out forwards',
      },    
  },
  plugins: [],
}
}