"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

// Esto es solo para probar si los pollyfills funcionan
console.log("   Cómo le va Ludwing? xd".trimStart()); // Le voy a agregar un par de cosas para ver el plugin de arrow function

const prueba = function () {
  console.log("Test");
}; // Prueba de plugin de string templates


console.log("Este es un ejemplo de presets ".concat(1 + 1)); // instanceof plugin

var texto = "asdf";

if (_instanceof(texto, String)) {
  console.log("yesss");
}
