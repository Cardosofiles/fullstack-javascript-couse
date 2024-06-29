/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayColor: "#2c2c2d",
        greenColor: "#00ff9f",
        redColor: "#f64348",
      },
    },
  },
  plugins: [],
};
