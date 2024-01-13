// importacion de un modulo, este caso, llamandolo con require y la carpeta de la funcion
const saludos = require('./saludos.js');


// aca llamamos con console.log la constante saludos, que nos lleva a node.js , y trae la funcion, mas el argumento
// que le estamos pasando

console.log(saludos.holaMundo());

// podemos exportar varios bloques

console.log(saludos.saludar());
