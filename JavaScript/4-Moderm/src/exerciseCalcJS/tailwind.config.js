/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Certifique-se de incluir todos os tipos de arquivos necessários
  theme: {
    extend: {
      colors: {
        bgColor: {
          dark: "#212529", // Cor de fundo para o tema escuro
          light: "#f1f5f9", // Cor de fundo para o tema claro
        },
        borderColor: {
          dark: "#666", // Cor de borda para o tema escuro
          light: "#aaa", // Cor de borda para o tema claro
        },
        fontColor: {
          dark: "#f1f5f9", // Cor de fonte para o tema escuro
          light: "#212529", // Cor de fonte para o tema claro
        },
        primaryColor: {
          dark: "#4dff91", // Cor primária para o tema escuro
          light: "#26834a", // Cor primária para o tema claro
        },
        errorColor: {
          DEFAULT: "#ff0043", // Cor de erro padrão
        },
      },
    },
  },
  plugins: [],
};
