// "use strict";
// Se estiver comentado o 2o código e o var arguments funciona
// https://www.geeksforgeeks.org/use-strict-in-javascript/

var arguments;

(() => {
    let teste = "teste";
    console.log(teste);
}) ();
// Funciona

(() => {
    teste = "teste2";
}) ();
console.log(teste);
// Hoisting, funciona

