import type { Config } from 'tailwindcss';
import { black, white } from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    colors: {
      accent: { dark: '#1D2021', light: '#F9F5D7' },
      background: { dark: '#111213', light: '#F6F5EE' },
      black,
      primary: { dark: '#545C5F', light: '#9B8C17' },
      white,
    },
    transitionDuration: { DEFAULT: '300ms' },
  },
} satisfies Config;
