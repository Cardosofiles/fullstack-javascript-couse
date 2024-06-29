/*
Este código JavaScript é destinado a um formulário HTML com o id "conditionalForm". 
Ele adiciona um ouvinte de evento para o evento "submit" desse formulário. 
Quando o formulário é enviado, o evento é acionado, mas o comportamento padrão de 
enviar o formulário é interrompido usando event.preventDefault(). Em seguida, ele 
obtém o valor do campo de entrada com o id "age", converte-o para um número inteiro
e determina uma mensagem com base na idade inserida. Essa mensagem é então exibida 
no elemento com o id "result". O código é projetado para fornecer uma mensagem 
diferente dependendo da idade inserida no formulário.
*/

// Adiciona um ouvinte de evento ao formulário com o id "conditionalForm" quando ele é enviado.
document
  .getElementById("conditionalForm")
  .addEventListener("submit", function (event) {
    // Impede o comportamento padrão do formulário de ser enviado.
    event.preventDefault();

    // Obtém o valor do campo de entrada com o id "age" e o converte para um número inteiro.
    const age = parseInt(document.getElementById("age").value);

    let message; // Declaração de uma variável para armazenar a mensagem resultante.

    // Condições para determinar a mensagem com base na idade inserida.
    if (age >= 18) {
      message = "Você é maior de idade";
    } else if (age >= 11) {
      message = "Você é um adolescente";
    } else if (age >= 3) {
      message = "Você é uma criança";
    } else {
      message = "Volta para o berço";
    }

    // Define o texto do elemento com o id "result" como a mensagem determinada acima.
    document.getElementById("result").innerText = message;
  });
