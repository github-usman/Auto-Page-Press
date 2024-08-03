/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        richBlack: '#121417',
        inputBg: '#121212',
        charcoal: '#222325',
        bg: '#1A1A1A',
        conetentBg: '#282828',
        logoColor: '#5DFECA',
        blue: '#DDEAFC',
        lblue: '#EEF5FF',
        dblue: '#1A73E8',
      },
      screens: {
        xsm: '320px',
        sm: '540px',
        md: '768px',
        lg: '990px',
        xlg: '1100px',
        mxl: '1215px',
      },
      borderRadius: {
        lg: '6px',
      },
    },
  },
  plugins: [],
};
