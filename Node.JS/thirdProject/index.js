const os = require("node:os");

const platform = os.platform();
console.log("Plataforma do So", platform);

const arquitetura = os.arch();
console.log("Arquitetura do SO: ", arquitetura);

const processadores = os.cpus();
console.log("Informações da CPU:", processadores);

const memoria = os.totalmem();
console.log(
  "Total de memória do PC:",
  (memoria / 1024 / 1024 / 1024).toFixed(2),
  "GB"
);
