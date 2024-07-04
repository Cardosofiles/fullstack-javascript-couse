// Importa os módulos 'os', 'fs' e 'path' do Node.js
const os = require("node:os");
const fs = require("node:fs");
const path = require("node:path");

// Mapeamento dos nomes das plataformas do sistema operacional para nomes mais legíveis
const systemPlatformMap = {
  win32: "Windows",
  linux: "Linux",
  darwin: "MacOS",
  freebsd: "FreeBSD",
};

// Função que obtém as informações do sistema
function getSystemInfo() {
  // Obtém o nome da plataforma do sistema operacional
  const system = systemPlatformMap[os.platform()];
  // Obtém a arquitetura do sistema
  const arch = os.arch();
  // Obtém o modelo do processador
  const cpu = os.cpus()[0].model;

  // Calcula o tempo de atividade do sistema em dias
  const uptimeDays = Math.floor(os.uptime() / 60 / 60 / 24);
  const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60;

  // Calcula o tempo de atividade do sistema em horas
  const uptimeHours = Math.floor((os.uptime() - uptimeDaysInSeconds) / 60 / 60);
  const uptimeHoursInSeconds = uptimeHours * 60 * 60;

  // Calcula o tempo de atividade do sistema em minutos
  const uptimeMins = Math.floor(
    (os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60
  );
  const uptimeMinsInSeconds = uptimeMins * 60;

  // Calcula o tempo de atividade do sistema em segundos
  const uptimeSecs = Math.floor(
    os.uptime() -
      uptimeDaysInSeconds -
      uptimeHoursInSeconds -
      uptimeMinsInSeconds
  );

  // Concatena os tempos de atividade em uma string no formato "dias:horas:minutos:segundos"
  const uptime = `${uptimeDays}:${uptimeHours}:${uptimeMins}:${uptimeSecs}`;

  // Calcula a memória RAM total em gigabytes
  const ramTotal = os.totalmem() / 1024 / 1024 / 1024;
  // Calcula o uso de memória RAM em gigabytes
  const ramUsage = (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024;
  // Calcula o percentual de uso de memória RAM
  const ramUsagePercent = Math.round((ramUsage / ramTotal) * 100);

  // Retorna um objeto com todas as informações coletadas
  return { system, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent };
}

// Função que imprime as informações do sistema no console
function printLog({
  system,
  arch,
  cpu,
  uptime,
  ramUsage,
  ramTotal,
  ramUsagePercent,
}) {
  console.clear();
  console.log("DETALHES DO SISTEMA");
  console.log(`Sistema Operacional: ${system}`);
  console.log(`Arquitetura: ${arch}`);
  console.log(`Modelo do Processador: ${cpu}`);
  console.log(`Tempo de Atividade do Sistema: ${uptime}`);
  console.log(
    `Uso de Memória RAM: ${ramUsage.toFixed(2)} GB / ${ramTotal.toFixed(
      2
    )} GB (${ramUsagePercent} %)`
  );
}

// Função que salva as informações do sistema em um arquivo de log
function saveLog({
  system,
  arch,
  cpu,
  uptime,
  ramUsage,
  ramTotal,
  ramUsagePercent,
}) {
  // Cria o conteúdo do log como uma string
  const logContent = `DETALHES DO SISTEMA | Sistema Operacional: ${system} | Arquitetura: ${arch} | Modelo do Processador: ${cpu} | Tempo de Atividade do Sistema: ${uptime} | Uso de Memória RAM: ${ramUsage.toFixed(
    2
  )} GB / ${ramTotal.toFixed(2)} GB (${ramUsagePercent} %)\n---\n`;

  // Define o diretório onde o log será salvo
  const logDir = path.join("/", "log");

  // Cria o diretório de log se ele não existir
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }

  // Define o caminho do arquivo de log
  const logFilePath = path.join(logDir, "log.txt");
  // Acrescenta o conteúdo do log ao arquivo
  fs.appendFileSync(logFilePath, logContent);
}

// Define um intervalo para executar as funções de obtenção, impressão e salvamento das informações do sistema a cada 1 segundo
setInterval(() => {
  const systemInfo = getSystemInfo();
  printLog(systemInfo);
  saveLog(systemInfo);
}, 1000);
