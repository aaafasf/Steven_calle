const http = require('http');

// Funciones originales
function sumar(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function calculadora(op, a, b) {
  if (op === 'sumar') return sumar(a, b);
  if (op === 'restar') return resta(a, b);
  throw new Error('Operación no válida');
}

// Servidor HTTP para Docker
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`2+3 = ${sumar(2, 3)}\n5-2 = ${resta(5,2)}`);
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});