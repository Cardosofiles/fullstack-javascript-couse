/*
Este código JavaScript solicita ao usuário que informe o nome e a velocidade de 
dois veículos diferentes. Em seguida, compara as velocidades dos dois veículos e
 exibe um alerta informando qual veículo é mais rápido. Se as velocidades forem 
 iguais, ele informa que os dois veículos possuem velocidades iguais.
*/

// Solicita ao usuário que informe o nome do primeiro veículo e armazena o resultado em 'veiculo1'.
const veiculo1 = prompt("Informe o nome do primeiro veículo:");

// Solicita ao usuário que informe a velocidade do primeiro veículo e converte o resultado para um número de ponto flutuante, armazenando-o em 'velocidade1'.
const velocidade1 = parseFloat(
  prompt("Informe a velocidade do primeiro veículo:")
);

// Solicita ao usuário que informe o nome do segundo veículo e armazena o resultado em 'veiculo2'.
const veiculo2 = prompt("Informe o nome do segundo veículo:");

// Solicita ao usuário que informe a velocidade do segundo veículo e converte o resultado para um número de ponto flutuante, armazenando-o em 'velocidade2'.
const velocidade2 = parseFloat(
  prompt("Informe a velocidade do segundo veículo:")
);

// Verifica se a velocidade do primeiro veículo é maior do que a velocidade do segundo veículo.
if (velocidade1 > velocidade2) {
  // Se verdadeiro, exibe um alerta informando que o veículo 1 é mais rápido que o veículo 2.
  alert(veiculo1 + " é mais rápido do que " + veiculo2);
}
// Verifica se a velocidade do segundo veículo é maior do que a velocidade do primeiro veículo.
else if (velocidade2 > velocidade1) {
  // Se verdadeiro, exibe um alerta informando que o veículo 2 é mais rápido que o veículo 1.
  alert(veiculo2 + " é mais rápido do que " + veiculo1);
}
// Se as velocidades forem iguais, entra neste bloco.
else {
  // Exibe um alerta informando que os dois veículos possuem velocidades iguais.
  alert(veiculo1 + " e " + veiculo2 + " possuem velocidades iguais.");
}
