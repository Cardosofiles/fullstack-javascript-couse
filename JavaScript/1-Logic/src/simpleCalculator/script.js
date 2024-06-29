// Função com loop para obter os valores a serem calculados.
function calcular(operacao, num1, num2) {
  switch (operacao) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Operação inválida";
  }
}

// Variável que solicita ao usuário o operação desejada
const operacao = prompt("Digite a operação desejada (+, -, *, /):");

// variáveis que obtem a entrada dos números pelo usuário
const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

// Verifica se as entradas são válidas
if (isNaN(numero1) || isNaN(numero2)) {
  alert("Por favor, insira números válidos.");
} else {
  // Chama a função calcular e exibe o resultado
  const resultado = calcular(operacao, numero1, numero2);
  alert("Resultado: " + resultado);
}
