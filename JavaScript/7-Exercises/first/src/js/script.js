alert("Bem vindo! A seguir pediremos que informe alguns dados.");

let name = prompt("Qual é o seu nome? ");
let age = prompt("Informe a sua idade: ");

let nameConfirmation = confirm("Seu nome é " + name + "?");
let ageConfimation = confirm("Sua idade é " + age + " anos?");

alert(
  "Nome: " +
    name +
    "\nIdade: " +
    age +
    "\nNome confirmado: " +
    nameConfirmation +
    "\nIdade confirmada: " +
    ageConfimation
);
