/*
ste código simula um combate entre dois personagens em um jogo. Primeiro, ele 
solicita ao usuário informações sobre o personagem atacante (nome e poder de ataque) 
e o personagem defensor (nome, pontos de vida, poder de defesa e se possui escudo). 
Em seguida, ele calcula o dano causado pelo personagem atacante ao personagem 
defensor com base nos poderes de ataque e defesa, considerando se o defensor possui 
ou não um escudo. O dano causado é então subtraído dos pontos de vida do personagem 
defensor, e duas mensagens de alerta são exibidas: uma informando o dano causado, 
e outra com detalhes sobre os personagens envolvidos no combate.
*/

//Solicita ao usuário o nome e o poder de ataque do personagem atacante e armazena os valores em 'atacante' e 'poderDeAtaque', respectivamente.
const atacante = prompt("Qual é o nome do personagem atacante?");
const poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque?"));

// Solicita ao usuário o nome, os pontos de vida, o poder de defesa e se o personagem defensor possui escudo, e armazena os valores em 'defensor', 'pontosDeVida', 'poderDeDefesa' e 'possuiEscudo', respectivamente.
const defensor = prompt("Qual é nome do personagem defensor?");
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"));
const poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"));
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)");

let danoCausado = 0; // Inicializa a variável 'danoCausado' com o valor zero.

// Verifica se o poder de ataque do personagem atacante é maior que o poder de defesa do personagem defensor e se o defensor não possui escudo.
if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
  // Se verdadeiro, calcula o dano causado subtraindo o poder de defesa do defensor do poder de ataque do atacante.
  danoCausado = poderDeAtaque - poderDeDefesa;
}
// Verifica se o poder de ataque do personagem atacante é maior que o poder de defesa do personagem defensor e se o defensor possui escudo.
else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
  // Se verdadeiro, calcula o dano causado dividindo pela metade o resultado da subtração do poder de defesa do defensor do poder de ataque do atacante.
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}

// Subtrai o dano causado dos pontos de vida do personagem defensor.
pontosDeVida -= danoCausado;

// Exibe um alerta informando o dano causado pelo personagem atacante ao personagem defensor.
alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor);

// Exibe um alerta com informações sobre os personagens atacante e defensor, incluindo seus respectivos nomes, poderes de ataque e defesa, e se o defensor possui escudo.
alert(
  atacante +
    "\nPoder de ataque: " +
    poderDeAtaque +
    "\n\n" +
    defensor +
    "\nPontos de vida: " +
    pontosDeVida +
    "\nPoder de defesa: " +
    poderDeDefesa +
    "\nPossui escudo: " +
    possuiEscudo
);
