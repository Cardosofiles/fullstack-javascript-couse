/*
   Tabela Verdade do Operador Lógico E (&&):

   +----------------+----------------+----------------+
   |   A (Operando) |   B (Operando) |   A && B       |
   +----------------+----------------+----------------+
   |       true     |       true     |      true      |
   |       true     |       false    |      false     |
   |       false    |       true     |      false     |
   |       false    |       false    |      false     |
   +----------------+----------------+----------------+
   
   O resultado (A && B) é true apenas quando ambos A e B são true.
   Caso contrário, o resultado é false.
   A e B representam os operandos do operador lógico "E" (&&).
   A && B é verdadeiro (true) apenas quando ambos A e B são verdadeiros (true).
   Se pelo menos um dos operandos (A ou B) for falso (false), então A && B será falso (false).
*/

// Truth E Table Comparison AND
console.log("Tabela Verdade E (AND) símbolo: &&");
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(6 > 7 && 8 === 9); // false
console.log(6 < 7 && 8 !== 9); // true

/*
   Tabela Verdade do Operador Lógico OU (||):

   +----------------+----------------+----------------+
   |   A (Operando) |   B (Operando) |   A || B       |
   +----------------+----------------+----------------+
   |       true     |       true     |      true      |
   |       true     |       false    |      true      |
   |       false    |       true     |      true      |
   |       false    |       false    |      false     |
   +----------------+----------------+----------------+
   
   O resultado (A || B) é true se pelo menos um dos operandos (A ou B) for true.
   Caso contrário, o resultado é false.
   A e B representam os operandos do operador lógico "OU" (||).
   A || B é verdadeiro (true) se pelo menos um dos operandos (A ou B) for verdadeiro (true).
   Se ambos os operandos (A e B) forem falsos (false), então A || B será falso (false).
*/

// Truth Table Comparison OR
console.log("Tabela Verdade Ou (OR) símbolo: ||");
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log("João" !== "Lucas" || 9 < 5); // true
console.log("João" !== "João" || 9 > 5); // true
console.log("João" !== "João" || 9 < 5); // false

/*
   Tabela Verdade do Operador Lógico NÃO (!):

   +-----------+-------------+
   | Operando  |   !Operando  |
   +-----------+-------------+
   |   true    |     false    |
   |   false   |     true     |
   +-----------+-------------+
   
   O resultado (!Operando) é o oposto lógico do operando.
   Se o operando for true, !Operando será false.
   Se o operando for false, !Operando será true.
   Operando representa o valor original.
   !Operando representa o valor oposto lógico do operando.
   O operador lógico NOT (!) inverte o valor booleano do operando. 
   Se o operando for true, !Operando será false, e se o operando for false, !Operando será true.
*/

// Table Comparison Truth NOT
console.log("Tabela Verdade Não (NOT) símbolo: !");
console.log(!true); // false
console.log(!false); // true
