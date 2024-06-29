var yourName = "João Batista";
var age;
let weight = 120;
const city = "Ituitaba";

console.log(yourName, typeof yourName);

age = 27;
console.log(age, typeof age);

age = 28;
console.log(age);

weight = 80;

console.log(weight);

console.log(city);

/*
Em JavaScript, var, let e const são palavras-chave utilizadas para declarar variáveis,
mas elas têm escopos e comportamentos ligeiramente diferentes. 

Aqui estão as principais diferenças entre elas:

var:

var era a única forma de declarar variáveis antes do ECMAScript 6 (ES6).
Variáveis declaradas com var têm escopo de função, 
o que significa que são visíveis em toda a função em que foram declaradas.
Se declaradas fora de qualquer função, têm escopo global.
var não tem escopo de bloco, o que pode levar a comportamentos
 inesperados em loops e condicionais.
Exemplo:
*/

if (true) {
  var x = 5;
}
console.log(x); // 5 (x está visível fora do bloco if)

/*
let:

let foi introduzido no ES6 para resolver alguns dos problemas associados ao var.
Variáveis declaradas com let têm escopo de bloco, o que significa que são visíveis 
apenas dentro do bloco em que foram declaradas.
let permite reatribuição de valor, ou seja, você pode atualizar o valor da variável 
posteriormente no mesmo escopo.
Exemplo:
*/

if (true) {
  let y = 10;
  console.log(y); // 10 (y está visível dentro do bloco if)
}
// console.log(y); // Gera um erro, y não está definido fora do bloco

/*
const:

const também foi introduzido no ES6 e é usado para declarar constantes.
Variáveis declaradas com const têm escopo de bloco.
Uma vez atribuído um valor a uma variável const, não é possível reatribuir 
um novo valor a ela.
Exemplo:
*/

const PI = 3.14;
console.log(PI, typeof PI);
// PI = 4; // Gera um erro, não é possível reatribuir um novo valor a uma constante

/*
Geralmente, é uma boa prática usar const sempre que possível, para indicar que 
a variável não será reatribuída.
Use let quando precisar de reatribuição, e evite o uso de var em código moderno. 
O uso de let e const oferece uma melhor gestão de escopo
e reduz possíveis problemas associados ao uso excessivo de var.
*/

let nomeDeUsuario;
let camelCase;
