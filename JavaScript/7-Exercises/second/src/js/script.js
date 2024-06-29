let olderPersonName = prompt("Nome da pessoa mais velha: ");
let olderPersonAge = prompt("Idade da pessoa mais velha: ");

let youngerPersonName = prompt("Nome da pessoa mais nova: ");
let youngerPersonAge = prompt("Idade da pessoa mais nova: ");

const ageDifference = olderPersonAge - youngerPersonAge;

alert(
  "O senhor(a) " +
    olderPersonName +
    " tem " +
    olderPersonAge +
    " anos de idade." +
    "\nO(a) adolescente " +
    youngerPersonName +
    " tem " +
    youngerPersonAge +
    " anos de idade. " +
    "\nA diferença de idade é: " +
    ageDifference +
    " anos."
);
