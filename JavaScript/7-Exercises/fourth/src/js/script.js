let distanceInLY = parseFloat(prompt("Digite a distância em anos-luz"));
let chosenOption = prompt(
  "Para qual unidade deseja converter?\n1. Parsec(pc)\n2. Unidade Astronômica (AU)\n3. Quilômetros (km)\n\n(Digite o número da opção desejada)"
);
let chosenUnity;
let convertedDistance;
switch (chosenOption) {
  case "1":
    chosenUnity = "Parsec";
    convertedDistance = (distanceInLY * 0.306601).toFixed(2);
    break;
  case "2":
    chosenUnity = "Unidade Astronômica";
    convertedDistance = (distanceInLY * 63241.1).toFixed(2);
    break;
  case "3":
    chosenUnity = "Quilômetros";
    convertedDistance = (distanceInLY * 9.5 * Math.pow(10, 12)).toFixed(2);
    break;
  default:
    chosenUnity = "Unidade não identificada";
    convertedDistance = "Conversão fora do escopo";
}

// Formatando números com separador de milhares e duas casas decimais
convertedDistance = parseFloat(convertedDistance).toLocaleString("pt-BR", {
  minimumFractionDigits: 2,
});

alert(
  "Distância em Anos-luz: " +
    distanceInLY +
    "\n" +
    chosenUnity +
    ": " +
    convertedDistance
);
