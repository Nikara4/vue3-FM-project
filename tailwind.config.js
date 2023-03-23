/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['montserrat', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['"Open Sans"'],
    },
    lineHeight: {
      'quiz-block': '14rem',
    },
    height: {
      'block-sm': '12rem',
      'block-lg': '20rem',
      'block-xl': '16rem',
      'bar-sm': '14px',
      'full-h': '100%',
      'respnsive-detail-img': '36rem',
    },
    screens: {
      xsm: '320px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
