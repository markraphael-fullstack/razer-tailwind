/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["monteserrat", "sans"],
      },
      colors: {
        night: "#0F0F0Fff",
        midnight: "#080808ff",
        razergreen: "#00FF00ff",
      },
      fontSize: {
        xxs: "0.682em",
      },
    },
  },
  plugins: [],
};
