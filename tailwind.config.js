/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1b1b1f",
        paper: "#FFF6F1",
        pink: "#FFB6D3",
        lilac: "#D4BFFF",
        sky: "#B5E3FF",
        mint: "#BFF2D0",
        peach: "#FFD3A8",
        butter: "#FFF1A8",
      },
      fontFamily: {
        display: ['"Archivo Black"', "Impact", "sans-serif"],
        body: ['"Space Grotesk"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
