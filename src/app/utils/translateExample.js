// Esto es solo para probar si los pollyfills funcionan
console.log("   Cómo le va Ludwing? xd".trimStart());
// Le voy a agregar un par de cosas para ver el plugin de arrow function
const prueba = () => {
    console.log("Test");
}
// Prueba de plugin de string templates
console.log(`Este es un ejemplo de presets ${1+1}`);

// instanceof plugin
var texto = "asdf"
if(texto instanceof String){
    console.log("yesss");
}