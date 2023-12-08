import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    colors: { background: { light: '#F6F5EE' }, primary: { light: '#9B8C17' } },
  },
} satisfies Config;
