/* eslint-env node */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#fb4c0d'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

