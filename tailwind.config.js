/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['montserrat', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    lineHeight: {
        'quiz-block': '14rem',
      },
    height: {
      'block-sm': '16rem',
      'full-h': '100%',
      'respnsive-detail-img': '36rem'
    },
    screens: {
      'xsm': '360px',
    }
  },
  plugins: [],
}
