/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors : {
        'primary-color':'#00CD78',
        'background-color':'#010511',
        'footer-links': '#D9DBE1',
        'footer-bg-color': '#0B0D17',
        'footer-links-text': '#EEEFF4',
        'solution-bg-color': '#151824',
        'solution-features': '#848199'
      },
      fontFamily: {
        monorope: ['Monorope', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
        coolvetica: ['Coolvetica', 'sans-serif'],

      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      backdropBlur: {
        '4xl': '84px',
      },
      fontSize:{
        title : '62px',
        curiosText : '42px',
        titleSecondary : '38px',
        titleTertiary : '28px'
      },
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1240px",

        "2xl": "1536px",
      },
      lineHeight: {
        title: "50px",
      },
      spacing: {
        22: "5.5rem",
      },
      
    },
    
  },
  plugins: [],
};
