/*
Este código simula uma operação bancária básica onde o usuário pode adicionar ou
remover dinheiro do saldo inicial. Primeiro, ele solicita ao usuário informar a
quantidade inicial de dinheiro. Em seguida, entra em um loop do-while que 
continua executando até que o usuário escolha a opção "Sair" (opção 3). Dentro
do loop, o programa exibe um menu com opções para adicionar dinheiro, remover
dinheiro ou sair, mostrando o saldo atual. Dependendo da opção escolhida pelo
usuário, o programa solicita o valor a ser adicionado ou removido do saldo 
e realiza a operação correspondente. O loop continua até que o usuário 
decida sair do programa.
*/

// Solicita ao usuário que informe a quantidade inicial de dinheiro e armazena o valor em 'saldo', convertido para um número de ponto flutuante.
let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"));

// Declaração da variável 'opcao' e inicialização com uma string vazia.
let opcao = "";

// Inicia um loop 'do-while' que continuará executando enquanto 'opcao' for diferente de "3".
do {
  // Exibe um prompt para o usuário escolher uma opção, mostrando o saldo atual.
  opcao = prompt(
    "Saldo disponível: R$ " +
      saldo +
      "\n1 - Adicionar dinheiro" +
      "\n2 - Remover dinheiro" +
      "\n3 - Sair"
  );

  // Utiliza um switch para determinar a ação com base na opção escolhida pelo usuário.
  switch (opcao) {
    case "1":
      // Se a opção for "1", solicita ao usuário o valor a ser adicionado ao saldo e o adiciona ao saldo existente.
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"));
      break;
    case "2":
      // Se a opção for "2", solicita ao usuário o valor a ser removido do saldo e o subtrai do saldo existente.
      saldo -= prompt("Informe o valor a ser removido:");
      break;
    case "3":
      // Se a opção for "3", exibe um alerta informando que o usuário está saindo do programa.
      alert("Saindo...");
      break;
    default:
      // Se a opção não for válida, exibe um alerta informando que a entrada é inválida.
      alert("Entrada inválida.");
      break;
  }
} while (opcao !== "3"); // O loop continua enquanto 'opcao' for diferente de "3".
