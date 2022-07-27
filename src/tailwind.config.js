const aspect = require('@tailwindcss/aspect-ratio')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@la-moore/shared/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--primary-50, #eef2ff)',
          100: 'var(--primary-100, #e0e7ff)',
          200: 'var(--primary-200, #c7d2fe)',
          300: 'var(--primary-300, #a5b4fc)',
          400: 'var(--primary-400, #818cf8)',
          500: 'var(--primary-500, #6366f1)',
          600: 'var(--primary-600, #4f46e5)',
          700: 'var(--primary-700, #4338ca)',
          800: 'var(--primary-800, #3730a3)',
          900: 'var(--primary-900, #312e81)',
        }
      },
      boxShadow: {
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'inner-border': 'inset 0 0 0 1px rgba(0, 0, 0, 0.10)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '8rem',
        '8xl': '12rem',
      }
    }
  },
  variants: {
    extend: {
      opacity: ['hover'],
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [
    aspect,
    plugin(function ({ addVariant }) {
      addVariant('thumb', ['&::-webkit-slider-thumb', '&::-moz-range-thumb', '&::-ms-thumb'])
    })
  ],
}
