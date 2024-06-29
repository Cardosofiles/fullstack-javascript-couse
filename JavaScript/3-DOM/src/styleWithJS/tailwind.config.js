/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightButtonBg: "#ffffff",
        lightButtonText: "#212529",
        darkButtonBg: "#212529",
        darkButtonText: "#ffffff",
        activeButtonBg: "#4a5568",
      },
      boxShadow: {
        lightButton:
          "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
        darkButton:
          "0 1px 3px rgba(255, 255, 255, 0.1), 0 1px 2px rgba(255, 255, 255, 0.06)",
      },
    },
  },
  plugins: [],
};
