const fs = require("node:fs");

const streamLeitura = fs.createWriteStream("mensage.txt");
// const streamLeitura = fs.createReadStream("wallpaper.png");
const buffer = [];

streamLeitura.on("data", (chunk) => {
  buffer.push(chunk);
  console.log("Um chuck foi processado");
});

streamLeitura.on("end", () => {
  console.log("Buffer:\n,", buffer);
  const dadosCompletos = Buffer.concat(buffer).toString();
  console.log("Dados Listados\n", dadosCompletos);
});
