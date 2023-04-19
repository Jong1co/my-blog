/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          40: "#5E5D67",
          50: "#66FFA6",
          60: "#83FFB7",
        },
        neutral: {
          100: "#fff",
          95: "#f2effa",
          90: "#e3e1ec",
          80: "#c7c5d0",
          70: "#a4a3b1",
          60: "#7e7c8c",
          50: "#5f5d6c",
          40: "#4b4a56",
          30: "#3b3b44",
          20: "#2f3038",
          10: "#1a1b23",
        },
      },
      font: {
        logo: `
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    `,
        header_01: `font-family: Pretendard;
  font-size: 2.625rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;`,
        header_02: `font-family: Pretendard;
  font-size: 1.75rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;`,
        header_03: `
  font-family: Pretendard;
  font-size: 1.5rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
    `,
        title_01: `  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;`,
        title_02: `font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;`,
        title_03: `font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;`,
        body_01: `  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;`,
        body_02: `  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;`,
        body_03: `font-family: SUIT;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;`,
        caption_01: `font-family: Pretendard;
  font-size: 0.75rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;`,
        caption_02: `font-family: Pretendard;
  font-size: 0.625rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;`,
        caption_04: `font-family: Pretendard;
  font-size: 0.5rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;`,
      },
    },
  },
  plugins: [],
};
