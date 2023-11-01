/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nest: "#5F8D4E",
        nestDark: "#285430",
        nestDarker: "#1D3C22",
        nestDarkest: "#0F1F12",
        nestLight: "#A4BE7B",
        nestLighter: "#D7E3C6",
        nestLightest: "#F0F4E9",
      },
    },
  },
  plugins: [],
};
