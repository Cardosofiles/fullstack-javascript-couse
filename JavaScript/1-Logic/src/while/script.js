/*
Durante cada iteração do loop, a velocidade atual do carro é exibida em um alerta,
seguida por uma redução de 20 km/h na velocidade. O loop continua até que a 
velocidade atinja 0 ou se torne negativa, momento em que o loop é encerrado e o 
código termina sua execução.
*/

// Inicializa a variável 'speed' com o valor 80, representando a velocidade inicial do carro.
let speed = 80;

// Inicia um loop 'while' que continuará executando enquanto a velocidade (speed) for maior que 0.
while (speed > 0) {
  // Exibe um alerta informando a velocidade atual do carro.
  alert("O carro está a " + speed + " km/h");

  // Diminui a velocidade em 20 km/h.
  speed -= 20;

  // Exibe um alerta informando que a velocidade foi diminuída em 20 km/h.
  alert("Diminuindo 20 km/h");
}
