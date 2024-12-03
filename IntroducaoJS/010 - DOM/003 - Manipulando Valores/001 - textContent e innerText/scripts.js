"use strict";

const p = document.querySelector("p");

console.log(p.textContent);
console.log(p.innerHTML);

p.textContent = "<strong>Teste</strong>";
//p.innerHTML = "<strong>Teste 2</strong>";