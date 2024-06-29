/*
Este código solicita ao usuário que escolha uma opção de um menu através de um 
prompt. Dependendo da opção escolhida, uma mensagem é exibida usando alert(). 
O loop continua executando até que o usuário escolha a opção "5", momento em 
que o programa é encerrado.
*/

// Inicializa a variável 'opcao' como uma string vazia.
let opcao = "";

// Inicia um loop 'do-while' que continuará executando enquanto 'opcao' for diferente de "5".
do {
  // Exibe um prompt para o usuário escolher uma opção.
  opcao = prompt(
    "Seja bem-vindo(a)!\n" +
      "\nEscolha uma das opções abaixo:" +
      "\n1 - Opção Um" +
      "\n2 - Opção Dois" +
      "\n3 - Opção Três" +
      "\n4 - Opção Quatro" +
      "\n5 - Encerrar"
  );

  // Utiliza um switch para determinar a ação com base na opção escolhida pelo usuário.
  switch (opcao) {
    case "1":
      alert("Você escolheu a opção 1.");
      break; // intrução para encerrar o loop
    case "2":
      alert("Você escolheu a opção 2.");
      break;
    case "3":
      alert("Você escolheu a opção 3.");
      break;
    case "4":
      alert("Você escolheu a opção 4.");
      break;
    case "5":
      alert("Encerrando o programa...");
      break;
    default:
      alert("Entrada inválida! Escolha uma das cinco opções.");
  }
} while (opcao !== "5"); // O loop continua enquanto 'opcao' for diferente de "5".
