/*
   Em JavaScript, existem quatro operadores de comparação comumente utilizados:

   1. == (Igualdade solta):
      - Compara os valores, convertendo os operandos, se necessário, para o mesmo tipo antes da comparação.
      - Exemplo: 5 == "5" é true, pois ocorre uma conversão implícita do tipo string para número.

   2. === (Igualdade estrita):
      - Compara os valores e os tipos dos operandos, sem fazer conversão de tipos.
      - Exemplo: 5 === "5" é false, pois os tipos são diferentes.

   3. != (Diferente solto):
      - Retorna true se os valores não são iguais, fazendo conversão de tipos se necessário.
      - Exemplo: 5 != "5" é false, pois ocorre uma conversão implícita do tipo string para número.

   4. !== (Diferente estrito):
      - Retorna true se os valores ou os tipos dos operandos são diferentes, sem fazer conversão de tipos.
      - Exemplo: 5 !== "5" é true, pois os tipos são diferentes.

   Em geral, é recomendável usar a igualdade estrita (=== e !==) sempre que possível, pois ela evita surpresas relacionadas à conversão automática de tipos, o que pode ocorrer com a igualdade solta (== e !=). O uso da igualdade estrita é considerado mais seguro e menos propenso a erros inesperados.
*/

console.log(" 3 == 3 ", 3 == 3); // true
console.log("4 == 3", 4 == 3); // false
console.log("3 * 3 + 1 == 10", 3 * 3 + 1 == 10); // true
console.log("10 === 10", 10 === 10); // true
console.log("10 === 11", 10 === 11); // false
console.log("10 == '10'", 10 == "10"); // true
console.log("10 === '10'", 10 === "10"); // false

console.log("3 != 3", 3 != 3); // false
console.log("5 != 3", 5 != 3); // true
console.log("5 != '5'", 5 != "5"); // false
console.log("5 !== '5'", 5 !== "5"); // true

console.log("3 > 2", 3 > 2); // true
console.log("3 >= 2", 3 >= 2); // true
console.log("3 >= 4", 3 >= 4); // false
console.log("3 < 4", 3 < 4); // true
console.log("8 < 4", 8 < 4); // false
console.log("4 <= 4", 4 <= 4); // true
