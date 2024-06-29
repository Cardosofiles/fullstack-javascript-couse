/* 
Switch é uma estrutura condicional com várias atribuições
para se achar o valor verdadeiro e efetuar uma operação.
*/

const unidadeMedida = prompt("Insira uma metragem para conversão:");
const escolha = prompt(
  "Escolha uma unidade de medida:" +
    "\n1. decímetros (dm)" +
    "\n2. centìmnetros (cm)" +
    "\n3. milímetros (mm)" +
    "\n4. decâmetros (dam)" +
    "\n5. hectômetros (hm)" +
    "\n6. quilômetros (km)"
);

const dm = unidadeMedida * 10;
const cm = unidadeMedida * 100;
const mm = unidadeMedida * 1000;
const dam = unidadeMedida / 10;
const hm = unidadeMedida / 100;
const km = unidadeMedida / 1000;

switch (escolha) {
  case "1":
    alert(
      "O valor de " +
        unidadeMedida +
        " metro(s) é igual a: " +
        dm +
        " decímetros(s)"
    );
    break;
  case "2":
    alert(
      "O valor de " +
        unidadeMedida +
        " metro(s) é igual a: " +
        cm +
        " centímetro(s)"
    );
    break;
  case "3":
    alert(
      "O valor de " +
        unidadeMedida +
        " metro(s) é igual a: " +
        mm +
        " milímetros"
    );
    break;
  case "4":
    alert(
      "O valor de " +
        unidadeMedida +
        " metro(s) é igual a: " +
        dam +
        " decâmetros(s)"
    );
    break;
  case "5":
    alert(
      "O valor de " +
        unidadeMedida +
        " metro(s) é igual a: " +
        hm +
        " hectômetro(s)"
    );
    break;
  case "6":
    alert(
      "O valor de " +
        unidadeMedida +
        " metro(s) é igual a: " +
        km +
        " quilômetro(s)"
    );
    break;
  default:
    alert("Insira uma metragem válida!");
}

// 1 metro = 10 decímetro (dm) multiplique o valor de comprimento por 10
// 1 metro = 100 centímetro (cm) multiplique o valor de comprimento por 100
// 1 metro = 1.000 milímetro (mm) multiplioque o valor de comprimento por 1000
// 1 metro = 0,1 decâmetro (dam) divida o valor de comprimento por 10
// 1 metro = 0,01 hectômetro (hm) divida o valor de comprimento por 100
// 1 metro = 0,001 quilômetro (km) divida o valor de comprimento por 1000
