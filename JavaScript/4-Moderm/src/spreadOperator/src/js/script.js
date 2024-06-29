/*
Este código demonstra o uso do spread operator (...) para criar cópias de arrays
 e objetos em JavaScript, além de mostrar como o comportamento de referência 
 funciona com variáveis. As alterações feitas em variáveis que compartilham a 
 mesma referência (como 'towns' e 'townsCopy') refletem nas duas variáveis. 
 Para criar cópias independentes, é necessário usar técnicas como spread operator
  ou métodos específicos de cópia, como slice() para arrays e construtores de 
  objeto para objetos.
*/

// Declaração de um array 'towns' contendo nomes de cidades.
const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

// Exibe o array 'towns' no console.
console.log(towns);

// Exibe os elementos do array 'towns' separadamente no console.
console.log(...towns);

// Tenta acessar o primeiro elemento do array 'towns' e exibi-lo. (Erro)
console.log(...towns[0]);

// Cria uma cópia do array 'towns' atribuindo-a a 'townsCopy'.
const townsCopy = towns;

// Remove os dois últimos elementos do array 'townsCopy' e adiciona "Juno".
townsCopy.pop();
townsCopy.pop();
townsCopy.push("Juno");

// Exibe os arrays 'towns' e 'townsCopy' no console.
console.log({ towns, townsCopy });

// Cria uma cópia do array 'towns' usando spread operator (...) e atribui a 'townsClone'.
const townsClone = [...towns];

// Adiciona "Aldebaran" ao array 'townsClone'.
townsClone.push("Aldebaran");

// Exibe os arrays 'towns', 'townsCopy' e 'townsClone' no console.
console.log({ towns, townsCopy, townsClone });

// Converte o array 'towns' em um objeto usando spread operator e atribui a 'townsObj'.
const townsObj = { ...towns };

// Cria uma cópia do objeto 'townsObj' atribuindo-a a 'townsObjClone'.
const townsObjClone = { ...townsObj };

// Adiciona a propriedade 'test' ao objeto 'townsObjClone'.
townsObjClone.test = "Test";

// Exibe os objetos 'townsObj' e 'townsObjClone' no console.
console.log({ townsObj, townsObjClone });
