// Estudos de Vetor (matriz) usando Array

const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Arogorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

// método adiciona elementos dentro da matriz no final do array
// função push
// https://www.w3schools.com/jsref/jsref_push.asp
let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

// método adiciona elementos dentro da matriz no início do vetor arry
// função unshift
//https://www.w3schools.com/jsref/jsref_unshift.asp
tamanho = arr.unshift("Teste");
console.log(arr);
console.log(tamanho);

// método remove elementos de dentro da matriz no final do vetor arry
// função pop
// https://www.w3schools.com/jsref/jsref_pop.asp
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

// método remove o primeirto item de uma matriz
// função shift
// https://www.w3schools.com/jsref/jsref_shift.asp
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

// pesquisar por Elemento
// função includes
// https://www.w3schools.com/jsref/jsref_includes_array.asp
const inclui = arr.includes("Gandalf");
console.log(inclui);

// pesquisa a posição exata do elemtno dentro do Vetor (array)
// função indexOf
// https://www.w3schools.com/jsref/jsref_indexof_array.asp
const indice = arr.indexOf("Gandalf");
console.log(indice);

// método retorna elementos selecionados em uma matriz, como uma nova matriz.
// função slice
// https://www.w3schools.com/jsref/jsref_slice_array.asp

//cortar
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

// concatenar
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// método substitui elementos dentro da matriz array
// função splice
// https://www.w3schools.com/jsref/jsref_splice.asp
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf o cinzento");
console.log(sociedade);
console.log(elementosRemovidos);

// Interar os elementos
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + ", Se encontra na posição " + indice);
}
