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

module.exports = { sumar, resta, calculadora };

console.log("Resultado final (2+3):", sumar(2, 3));