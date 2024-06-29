/*

A funcionalidade desse código é encontrar a letra "mais alta" 
(isto é, a última em ordem alfabética) em uma string. 
Ambas as funções realizam a mesma tarefa, mas de maneiras 
ligeiramente diferentes em termos de passos de processamento. 

*/

function highestLetter(str) {
  const lowerCaseString = str.toLowerCase();
  const lettersArray = lowerCaseString.split("");
  const sortedLetters = lettersArray.sort();
  return sortedLetters[sortedLetters.length - 1];
}

function highestLetter(str) {
  const sortedLetters = str.toLowerCase().split("").sort();
  return sortedLetters[sortedLetters.length - 1];
}
