const calculadora = new calculadora();

function sumas(a, b) {
  let resultadosSumas = a + b;
  return resultadosSumas;
}

return resultadosSumas;
console.log(sumas(8 + 5));

function restas(a, b) {
  let resultadosRestas = a - b;
  return resultadosRestas;
}

return resultadosRestas;
console.log(restas(7 - 5));

function multiplicacion() {
  let resultadosMultiplicaciones = a * b;
  return resultadosMultiplicaciones;
}

return resultadosMultiplicaciones;
console.log(multiplicacion(4 * 4));

function diviciones(numeros) {
  let resultadosDiviciones = a / b;
  return resultadosDiviciones;
}

return resultadosDiviciones;
console.log(diviciones(7 / 2));

const myArray = [21, 32, 45, 67, 78, 89, 53];

function sumaArreglo() {
  let resultado = myArray.reduce((a, b) => a + (myArray || 0), 0);
  return resultado;
}
console.log(sumaArreglo);
