/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#75BF7A",
      primaryDarker: "#5F9E63",
      lightGray: "#9E9DA2",
      ligherGray: "#DADADA",
      darkGray: "#8B8BA5",
      darkBlue: "#272042",
      white: "#FFFFFF",
      black: "#000000",
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("tailwindcss-debug-screens")],
};
