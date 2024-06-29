// Selecione o input e o elemento onde o texto será exibido
const input = document.getElementById("dynamicText");
const output = document.getElementById("output");

// Adicione um ouvinte de evento para reagir às mudanças de entrada
input.addEventListener("input", () => {
  // Recupere o valor do input
  const userInput = input.value;

  // Crie um template literal usando a entrada do usuário
  const templateLiteral = `<p>O template literal "${userInput}" se dá pelo uso das crases.</p>`;

  // Atualize o conteúdo do elemento de saída
  output.innerHTML = templateLiteral;
});
