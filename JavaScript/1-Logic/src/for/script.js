/*
Este código solicita ao usuário um número para o qual deseja calcular a tabuada.
Em seguida, ele usa um loop for para calcular os resultados da tabuada desse 
número, multiplicando-o por cada fator de 1 a 20. Cada resultado é concatenado 
à variável resultado no formato " -> número x fator = resultado". Finalmente, 
um alerta é exibido com o título "Resultado da Tabuada de [número]" e o 
conteúdo contendo os resultados calculados.
*/

// Solicita ao usuário que informe o número para o qual deseja calcular a tabuada e converte o valor para um número de ponto flutuante.
const numero = parseFloat(
  prompt("De qual número você deseja calcular a tabuada?")
);

// Inicializa a variável 'resultado' com uma string vazia para armazenar os resultados da tabuada.
let resultado = "";

// Loop 'for' que itera de 1 a 20 para calcular os resultados da tabuada.
for (let fator = 1; fator <= 20; fator++) {
  // Concatena o resultado da multiplicação do número pelo fator atual no formato " -> número x fator = resultado" à variável 'resultado'.
  resultado += " -> " + numero + " x " + fator + " = " + numero * fator + "\n";
}

// Exibe um alerta com o título "Resultado da Tabuada de [número]" e o conteúdo contendo os resultados calculados anteriormente.
alert("Resultado da Tabuada de " + numero + ":\n\n" + resultado);
