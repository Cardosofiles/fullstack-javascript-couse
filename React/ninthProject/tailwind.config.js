/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        82: "23.5rem",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
};
