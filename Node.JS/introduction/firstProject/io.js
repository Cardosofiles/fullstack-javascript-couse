const process = require("process");

console.log("Qual é o seu nome?");

process.stdin.on("data", (Keyboard) => {
  process.stdout.write(`Texto do usuário: ${Keyboard}`);
  process.exit();
});
