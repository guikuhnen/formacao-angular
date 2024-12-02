"use strict";

const h1 = document.querySelector("h1"); // Tag Html
console.log(h1);

const p = document.querySelector("p"); // Tag Html, acha apenas 1
console.log(p);

const classP = document.querySelector(".paragrafo"); // Via classe, representada por .
console.log(classP);

const idP = document.querySelector("#paragrafo"); // Via ID, representada por #
console.log(idP);


const classPStrong = document.querySelector(".paragrafo strong"); // Via classe, representada por ., espaço próximo elemento dentro
console.log(classPStrong);
console.log(classP.querySelector("strong")); // OU isso

let timer = 0;
setInterval(() => {
    h1.innerText = timer;
    timer++;
}, 1000);