/* eslint-env node */
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#fb4c0d'
      },
      fontFamily: {
        roboto: 'Roboto',
        'roboto-black': 'Roboto Black',
        'roboto-medium': 'Roboto Medium',
        'roboto-bold': 'Roboto Bold'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;

