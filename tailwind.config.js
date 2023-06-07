/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx,md}'],
  theme: {
    extend: {
      screens: {
        mobile: '520px',
        web: '1180px',
        post: '768px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#fff',
          },
        },
      }),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          40: '#5E5D67',
          50: '#66FFA6',
          60: '#83FFB7',
        },
        neutral: {
          100: '#fff',
          95: '#f2effa',
          90: '#e3e1ec',
          80: '#c7c5d0',
          70: '#a4a3b1',
          60: '#7e7c8c',
          50: '#5f5d6c',
          40: '#4b4a56',
          30: '#3b3b44',
          20: '#2f3038',
          10: '#1a1b23',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
