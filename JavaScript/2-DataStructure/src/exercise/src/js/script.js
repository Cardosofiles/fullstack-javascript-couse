/*
Este programa apresenta um menu interativo onde o usuário pode adicionar novos 
imóveis, listar todos os imóveis cadastrados e sair do programa. Os imóveis são 
armazenados em um array chamado imoveis, e as informações de cada imóvel (nome do
roprietário, quantidade de quartos, quantidade de banheiros e se possui garagem)
são solicitadas ao usuário e armazenadas em objetos JavaScript.
*/

// Array para armazenar os imóveis cadastrados.
const imoveis = [];

// Variável que armazenará a opção escolhida pelo usuário no menu.
let opcao = "";

// Loop 'do-while' que continuará executando até que o usuário escolha a opção de sair.
do {
  // Exibe um prompt com o menu interativo, mostrando a quantidade de imóveis cadastrados.
  opcao = prompt(
    "Bem-vindo(a) ao Cadastro de Imóveis!\n" +
      "Total de Imóveis: " +
      imoveis.length +
      "\n\nEscolha uma opção:\n1. Novo Imóvel\n2. Lista de Imóveis\n3. Sair"
  );

  // Utiliza um switch para determinar a ação com base na opção escolhida pelo usuário.
  switch (opcao) {
    case "1":
      // Se a opção for "1", o programa solicita as informações do novo imóvel.
      const imovel = {};
      imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:");
      imovel.quartos = prompt("Quantos quartos possui o imóvel?");
      imovel.banheiros = prompt("Quantos banheiros possui o imóvel?");
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)");

      // Exibe um prompt de confirmação com os detalhes do imóvel para confirmar o salvamento.
      const confirmacao = confirm(
        "Salavar este imóvel?\n" +
          "\nProprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nPossui garagem? " +
          imovel.garagem
      );

      // Se o usuário confirmar, o imóvel é adicionado ao array 'imoveis' e uma mensagem de sucesso é exibida.
      if (confirmacao) {
        imoveis.push(imovel);
        alert("Imóvel salvo com sucesso!");
      } else {
        // Se o usuário cancelar, uma mensagem indicando que o salvamento foi cancelado é exibida.
        alert("Voltando ao navegador!");
      }
      break;
    case "2":
      // Se a opção for "2", o programa exibe os detalhes de todos os imóveis cadastrados.
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui garagem? " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      // Se a opção for "3", exibe uma mensagem de encerramento do programa.
      alert("Encerando...");
      break;
    default:
      // Se a opção não for válida, exibe uma mensagem informando que a opção é inválida.
      alert("Opção invalida!");
  }
} while (opcao !== "3"); // O loop continua até que a opção escolhida seja "3" (Sair).
