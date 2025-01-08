/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "primary-color": "#00CD78",
        "background-color": "#010511",
        "footer-links": "#D9DBE1",
        "footer-bg-color": "#0B0D17",
        "footer-links-text": "#EEEFF4",
        "solution-bg-color": "#151824",
        "solution-features": "#848199",
        "card-text": "#231D4F",
        "card-button-active": "#000D08",
        faqIconCircular: "#090C18",
        faqQuestionBg: "#151824",
        "home-footer-bg": "#010714",
        "check-bg": "#00F076",
        "login-bg": "#020402C4",
        "Sidebar-bg": "#0E131F",
        "Sidebar-links": "#86898F",
        "Sidebar-Active": "#2FE5A7",
        "CompanyInfo-divider": "#2C2626E3",
        "Tabs-button": "#07090F",
        "Table-Yellow-text": "#F7B11E",
        customDark: "#222222",
        customLight: "#414141",
        "MobileDashboardTitle" : "#00CC83",
        "Divider" : "#DEDEDE21",
        "DropdownBg" : "#222222",
        "BottomNavBg" : "#272727",
        "Searchbg" : "#464646",
        "SearchTableBg" : "#2B2B2B",
        "SearchTableDivider" : "#515151",
        "TableEvenRow" : "#343434"
      },
      fontFamily: {
        monorope: ["Manrope"],
        sans: ["DM Sans", "sans-serif"],
        coolvetica: ["Coolvetica", "sans-serif"],
        avenir: ["Avenir"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins"],
        barlow: ["Barlow"],
        helvetica: ["Helvetica"],
        inter: ["Inter", "sans-serif"],
        gotham : ["'iCiel Gotham', sans-serif;"]
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      backdropBlur: {
        "4xl": "84px",
      },
      fontSize: {
        title: "62px",
        curiosText: "42px",
        titleSecondary: "38px",
        titleTertiary: "28px",
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
