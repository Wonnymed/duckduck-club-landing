import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        night: '#07050D',
        violetDeep: '#120B24',
        lilac: '#B59BFF',
        cta: '#FFD84D',
      },
      boxShadow: {
        glow: '0 12px 48px rgba(181, 155, 255, 0.22)',
      },
    },
  },
  plugins: [],
};

export default config;
