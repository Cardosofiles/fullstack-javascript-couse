const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");
const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

// Adiciona evento de clique em todos os botões com a classe charKey
document.querySelectorAll(".charKey").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    input.value += value;
  });
});

// Adiciona evento de clique no botão de limpar
document.getElementById("clear").addEventListener("click", () => {
  input.value = "";
  input.focus();
});

// Adiciona evento de teclado para o input
input.addEventListener("keydown", (event) => {
  if (allowedKeys.includes(event.key)) {
    event.preventDefault();
    input.value += event.key;
  } else if (event.key === "Backspace") {
    event.preventDefault();
    input.value = input.value.slice(0, -1);
  } else if (event.key === "Enter") {
    event.preventDefault();
    calculate();
  }
});

// Adiciona evento de clique ao botão igual
document.getElementById("equal").addEventListener("click", calculate);

// Função para calcular o resultado
function calculate() {
  try {
    const result = eval(input.value);
    resultInput.value = result;
    resultInput.classList.remove("error");
  } catch {
    resultInput.value = "ERROR";
    resultInput.classList.add("error");
  }
}

// Adiciona evento de clique ao botão de copiar para a área de transferência
document
  .getElementById("copyToClipboard")
  .addEventListener("click", (event) => {
    const button = event.currentTarget;
    if (button.innerText === "Copy") {
      button.innerText = "Copied!";
      button.classList.add("success");
      navigator.clipboard.writeText(resultInput.value);
    } else {
      button.innerText = "Copy";
      button.classList.remove("success");
    }
  });

// Adiciona evento de clique ao botão de alternar tema
document.getElementById("themeSwitcher").addEventListener("click", () => {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
});
