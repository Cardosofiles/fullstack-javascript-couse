/*
Este código manipula sessionStorage, localStorage e cookies no navegador. Quando
o usuário interage com os elementos da página e aciona os eventos de clique nos 
botões, os dados são armazenados ou recuperados desses locais de armazenamento, 
permitindo a persistência de informações entre diferentes sessões ou mesmo 
diferentes páginas do mesmo site. As informações armazenadas na sessionStorage 
e na localStorage são associadas a um determinado domínio da web e são mantidas 
até que o usuário as limpe ou até que expirem. Já os cookies são armazenados no 
navegador e podem ser definidos com uma data de expiração específica ou podem 
ser cookies de sessão, que são excluídos quando o navegador é fechado.
*/

// Adiciona um evento de clique ao botão com o ID "sessionBtn".
document.getElementById("sessionBtn").addEventListener("click", function () {
  // Obtém o elemento de entrada com o ID "session".
  const input = document.getElementById("session");
  // Armazena o valor do campo de entrada na sessionStorage com a chave "info".
  sessionStorage.setItem("info", input.value);
  // Limpa o campo de entrada.
  input.value = "";
});

// Adiciona um evento de clique ao botão com o ID "readSession".
document.getElementById("readSession").addEventListener("click", function () {
  // Obtém o valor armazenado na sessionStorage com a chave "info".
  const info = sessionStorage.getItem("info");
  // Exibe um alerta com o valor recuperado da sessionStorage.
  alert("A informação salva é: " + info);
});

// Adiciona um evento de clique ao botão com o ID "localBtn".
document.getElementById("localBtn").addEventListener("click", function () {
  // Obtém o elemento de entrada com o ID "local".
  const input = document.getElementById("local");
  // Armazena o valor do campo de entrada na localStorage com a chave "text".
  localStorage.setItem("text", input.value);
  // Limpa o campo de entrada.
  input.value = "";
});

// Adiciona um evento de clique ao botão com o ID "readLocal".
document.getElementById("readLocal").addEventListener("click", function () {
  // Obtém o valor armazenado na localStorage com a chave "text".
  const t = localStorage.getItem("text");
  // Exibe um alerta com o valor recuperado da localStorage.
  alert("O texto salvo no local storage é: " + t);
});

// Adiciona um evento de clique ao botão com o ID "cookieBtn".
document.getElementById("cookieBtn").addEventListener("click", function () {
  // Obtém o elemento de entrada com o ID "cookie".
  const input = document.getElementById("cookie");
  // Cria uma string representando o cookie com o valor do campo de entrada.
  const cookie = "info=" + input.value + ";";
  // Define a data de expiração do cookie (9 de outubro de 2022).
  const expiration = "expires=" + new Date(2022, 9, 9) + ";";
  // Define o caminho do cookie como "/".
  const path = "path=/;";
  // Define o cookie usando document.cookie.
  document.cookie = cookie + expiration + path;
  // Limpa o campo de entrada.
  input.value = "";
  // Exibe no console os cookies atuais.
  console.log(document.cookie);
});

// Adiciona um evento de clique ao botão com o ID "cookie2Btn".
document.getElementById("cookie2Btn").addEventListener("click", function () {
  // Obtém o elemento de entrada com o ID "cookie2".
  const input = document.getElementById("cookie2");
  // Cria uma string representando o cookie com o valor do campo de entrada.
  const cookie = "text=" + input.value + ";";
  // Define a data de expiração do cookie (9 de setembro de 2022).
  const expiration = "expires=" + new Date(2022, 8, 9) + ";";
  // Define o caminho do cookie como "/".
  const path = "path=/;";
  // Define o cookie usando document.cookie.
  document.cookie = cookie + expiration + path;
  // Limpa o campo de entrada.
  input.value = "";
  // Exibe no console os cookies atuais.
  console.log(document.cookie);
});
