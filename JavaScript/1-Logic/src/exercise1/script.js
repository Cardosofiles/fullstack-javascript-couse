/*
Este código JavaScript solicita ao usuário que confirme um cadastro de recruta. 
Se o usuário confirmar, o programa solicita informações como nome, sobrenome, 
área de estudo e ano de nascimento. Ele verifica se todos os campos estão 
preenchidos e, se não estiverem, exibe um alerta solicitando que todos os campos
 sejam preenchidos. Após preencher todos os campos, o programa calcula a idade 
 do recruta com base no ano de nascimento fornecido usando a função 
 calcularIdade(). Em seguida, exibe um alerta informando que o cadastro foi 
 efetuado com sucesso, junto com os detalhes fornecidos pelo usuário. 
 Se o usuário não confirmar o cadastro, o programa exibe um alerta informando 
 que o cadastro foi cancelado.
*/

// Exibe uma caixa de diálogo de confirmação com o texto "Cadastro de Recrutas" e armazena o resultado em 'confirmacao'.
const confirmacao = confirm("Cadastro de Recrutas");

// Verifica se o usuário confirmou o cadastro.
if (confirmacao) {
  let primeiroNome, sobreNome, campoEstudo, anoNascimento;

  // Loop para garantir que todos os campos sejam preenchidos
  do {
    // Solicita ao usuário que insira seu nome, sobrenome, área de estudo e ano de nascimento.
    primeiroNome = prompt("Insira seu nome: ");
    sobreNome = prompt("Insira seu sobrenome: ");
    campoEstudo = prompt("Qual é a sua área de estudos? ");
    anoNascimento = prompt("Insira seu ano de nascimento: ");

    // Verifica se algum campo está vazio e exibe um alerta se estiver.
    if (!primeiroNome || !sobreNome || !campoEstudo || !anoNascimento) {
      alert("Por favor, preencha todos os campos antes de continuar.");
    }
  } while (!primeiroNome || !sobreNome || !campoEstudo || !anoNascimento); // Continua o loop enquanto algum campo estiver vazio.

  // Calcula a idade do recruta com base no ano de nascimento fornecido.
  const idade = calcularIdade(parseInt(anoNascimento, 10));

  // Exibe um alerta informando que o cadastro foi efetuado com sucesso, junto com os detalhes fornecidos pelo usuário.
  alert("Cadastro efetuado com sucesso!");
  alert(
    "Prazer, recruta: " +
      primeiroNome +
      " " +
      sobreNome +
      ".\n" +
      "Sua área de estudo é: " +
      campoEstudo +
      ".\n" +
      "Sua idade no momento: " +
      idade +
      " anos."
  );
} else {
  // Se o usuário não confirmar o cadastro, exibe um alerta informando que o cadastro foi cancelado.
  alert("Cadastro cancelado.");
}

// Função que calcula a idade com base no ano de nascimento.
function calcularIdade(anoNascimento) {
  const anoAtual = new Date().getFullYear(); // Obtém o ano atual.
  return anoAtual - anoNascimento; // Calcula e retorna a idade.
}
