import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        swiss: {
          bg: '#ffffff',
          ink: '#111111',
          accent: '#8a1f1a',
          line: 'rgba(17,17,17,0.12)',
        },
      },
      letterSpacing: {
        widest: '0.35em',
      },
    },
  },
  plugins: [],
} satisfies Config;
