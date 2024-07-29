// Importa o módulo 'path' do Node.js
const path = require("node:path");

// Define o nome do diretório
const dir = "src";
// Define o nome do arquivo
const file = "app.js";

// Cria um caminho completo juntando o diretório atual (__dirname), o diretório 'src' e o arquivo 'app.js'
const fullPath = path.join(__dirname, dir, file);
// Imprime o caminho completo no console
console.log(fullPath);

// Define um caminho relativo para um arquivo PDF
const relativePath = "../arquivos/relatorio.pdf";

// Resolve o caminho relativo para um caminho absoluto baseado no diretório atual (__dirname)
const absolutePath = path.resolve(__dirname, relativePath);
// Imprime o caminho absoluto no console
console.log(absolutePath);

// Extrai o nome do arquivo do caminho relativo
const fileName = path.basename(relativePath);
// Imprime o nome do arquivo no console
console.log(fileName);

// Extrai a extensão do arquivo do caminho absoluto
const ext = path.extname(absolutePath);
// Imprime a extensão do arquivo no console
console.log(ext);
