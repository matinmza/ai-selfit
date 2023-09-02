import pxToRem from "./src/utils/methods/pxToRem";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#5DB075",
        },
        secondary: "",
        dark: {
          100: "#363C4F",
          200: "#2B2B2B",
          300: "#454545",
        },
        gray: {
          100: "#727272",
          200: "#757575",
          300: "#DCDFE5",
        },
        orange: {
          100: "#FF6B01",
        },
      },
    },
    fontFamily: {
      iranSans: "IranSans",
      vazir: "Vazir",
    },
    fontSize: {
      h1: [pxToRem(20), pxToRem(32)],
      h2: [pxToRem(16), pxToRem(25)],
      h3: [pxToRem(14), pxToRem(25)],
      text1: [pxToRem(14), pxToRem(16)],
      text2: [pxToRem(12), pxToRem(16)],
    },
  },
  plugins: [],
};
