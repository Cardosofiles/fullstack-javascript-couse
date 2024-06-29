// Number: Represents integers or floating-point numbers.
let age = 25;
let weight = 29.99;
console.log(age, typeof age);
console.log(weight, typeof weight);

// BigInt(): The BigInt() function can be used to convert values to BigInt.
const integerNumber = 1234567890123456789012345678901234567890n;
const anotherNumber = BigInt(9876543210);
console.log(integerNumber, typeof integerNumber);
console.log(anotherNumber, typeof anotherNumber);

// String: Represents sequences of characters.
let name = "John";
console.log(name, typeof name);

// Boolean: Represents logical values true or false.
let isActive = true;
let n1 = 1 == 1;
let n2 = 1 == "1";
let n3 = 1 == 2;
let n4 = 1 == "2";

console.log(isActive, typeof isActive);
console.log(n1, typeof n1); //true
console.log(n2, typeof n2); //true
console.log(n3, typeof n3); //false
console.log(n4, typeof n4); //false

// Null (null): Represents the absence of value or a deliberately assigned null value.
let nullValue = null;
console.log(nullValue, typeof nullValue);

/*
O resultado de typeof null como "object" é considerado um erro 
histórico na implementação do JavaScript e é uma fonte comum de 
confusão. Na verdade, null não é um objeto, mas sim um valor 
primitivo em JavaScript.

A razão para esse comportamento é um erro na implementação original
 do JavaScript no Netscape, e por questões de retrocompatibilidade, 
esse comportamento não foi corrigido para evitar quebrar código existente.

Em termos mais precisos:

typeof null retorna "object".
typeof undefined retorna "undefined".
typeof {} retorna "object".
typeof [] retorna "object".
Quando você encontrar typeof null retornando "object",
 é importante lembrar que isso é uma peculiaridade da linguagem e null é,
 de fato, um valor primitivo em JavaScript, não um objeto.

Se você quiser verificar se uma variável é null, é aconselhável 
fazer uma verificação direta, por exemplo:
*/
if (nullValue === null) {
  console.log("A variável é null. Tipo:", typeof nullValue);
}

// Undefined (undefined): Represents a variable that has been declared but not yet assigned a value.
let undefinedValue;
console.log(undefinedValue, typeof undefinedValue);

// Object: Represents a collection of key-value pairs.
let person = { name: "Alice", age: 30 };

// Array: Represents an ordered collection of elements.
let fruits = ["Apple", "Banana", "Pear"];
console.log(fruits[0], typeof fruits);
console.log(fruits[1], typeof fruits);
console.log(fruits[2], typeof fruits);

// Function: Represents a reusable block of code.
function add(a, b) {
  return a + b;
}
console.log(add(5, 3), typeof add(5, 3));

let result = add(10, 20);
console.log(result, typeof result);

// Symbol (Symbol): Introduced in ECMAScript 6, represents unique and immutable values, often used as unique identifiers for object properties.
let mySymbol = Symbol("description");
console.log(mySymbol);
