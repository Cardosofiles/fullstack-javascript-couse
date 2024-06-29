// Expressões Aritméticas:
console.log("Expressões Aritméticas");

let sum = 5 + 3; // Adição
let subtraction = 10 - 4; // Subtração
let multipliocation = 6 * 2; // Multiplicação
let division = 15 / 3; // Divisão

console.log(sum);
console.log(subtraction);
console.log(multipliocation);
console.log(division);

// Expressões de Concatenação de Strings:
console.log("Expressões de Concatenação de Strings");

let yourName = "John";
let surname = "Doe";
let nameSurname = yourName + " " + surname;

console.log(yourName);
console.log(surname);
console.log(nameSurname);

// Expressões de Comparação:
console.log("Expressões de Comparação");

let isEqual = 5 === 5; // Igualdade Estrita
let isNotEqual = 10 !== 5; // Diferente Estrito
let isGreaterThan = 8 > 3; // Maior que
let isLessThanOrEqual = 7 <= 7; // Menor ou Igual a

console.log(isEqual);
console.log(isNotEqual);
console.log(isGreaterThan);
console.log(isLessThanOrEqual);

// Expressões Lógicas:
console.log("Expressões Lógicas");

let logicalAnd = true && false; // AND Lógico (e)
let logicalOr = true || false; // OR Lógico (ou)
let logicalNot = !true; // NOT Lógico (negação)
let logicalXOR = true ^ false; // true

console.log(logicalAnd);
console.log(logicalOr);
console.log(logicalNot);

// Expressões de Atribuição:
console.log("Expressões de Atribuição");

let x = 10; // Atribuição (=)
let y = 5; // Atribuição (=)
y += 3; // Atribuição com Adição (+=)
y -= 1; // Atribuição com subtração (-=)
y *= 2; // Atribuição com multiplicação (*=)
y /= 5; // Atrubuição com divisão (/=)

// Expressões de Chamada de Função:
console.log("Funções");
function newSum(a, b) {
  return a + b;
}
let result = newSum(3, 4);

console.log(newSum);
console.log("O calcula da função é somar 3 + 4");
console.log(result);

// Expressões Condicionais e Operador Ternário:
console.log("Expressões Condicionais e Operador Ternário");
let age = 20;
let status = age >= 18 ? "Adulto" : "Menor de idade";
// o símbolo ? expressao-se-verdadeiro, símbolo : expressao-se-falso

console.log(age);
console.log("status = idade >= 18 ? Adulto : Menor de idade");

// Expressões de Agrupamento:
console.log("Expressões de Agrupamento");

let resultadoAgrupamento = (5 + 3) * 2;
console.log("(5 + 3) * 2");
console.log(resultadoAgrupamento);

/*
Operator	Example	    Same As
=	        x = y	      x = y
+=	      x += y	    x = x + y
-=	      x -= y	    x = x - y
*=	      x *= y	    x = x * y
/=	      x /= y	    x = x / y
%=	      x %= y	    x = x % y
**=	      x **= y	    x = x ** y
*/
