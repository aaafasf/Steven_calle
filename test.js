const { sumar, resta, calculadora } = require('./index');


if (sumar(2, 3) === 5) {
  console.log("✔ Test unitario sumar pasado");
} else {
  console.log("❌ Test unitario sumar fallido");
  process.exit(1);
}

if (resta(5, 2) === 3) {
  console.log("✔ Test unitario resta pasado");
} else {
  console.log("❌ Test unitario resta fallido");
  process.exit(1);
}


try {
  const res = calculadora('sumar', 10, 20);
  if (res === 30) {
    console.log("✔ Test de integración pasado");
    process.exit(0);
  } else {
    console.log("❌ Test de integración fallido");
    process.exit(1);
  }
} catch (err) {
  console.log("❌ Error en integración:", err.message);
  process.exit(1);
}
