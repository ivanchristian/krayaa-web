import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {
      colors: {
        background: '#0a0405',
        card: '#1a0f11',

        krayaa: {
          primary: '#f25f2b',
          yellow: '#f4b73a',
        },
      },

      maxWidth: {
        '8xl': '1440px',
      },

      screens: {
        xs: '480px',
      },

      boxShadow: {
        glow: '0 0 40px rgba(242,95,43,0.2)',
      },
    },
  },

  plugins: [],
};

export default config;
