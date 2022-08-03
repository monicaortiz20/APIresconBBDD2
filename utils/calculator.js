const { restart } = require("nodemon");

//suma
// resta
// multiplicación 
// división

const calculator = {
    add: (a,b) => a + b,
    sub: (a,b) => a - b,
    mul: (a,b) => a * b,
    div: (a,b) => a / b,
}

module.exports = calculator;        // tenemos el módulo creado, ahora lo exportamos y lo pongo en app.js

// Prueba:
// console.log("suma: " + calculator.add(2,2))
