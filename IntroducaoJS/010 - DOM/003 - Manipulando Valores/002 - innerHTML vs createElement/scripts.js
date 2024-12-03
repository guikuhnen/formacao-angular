"use strict";

const div = document.querySelector("div");

console.log(1, div.innerHTML);

div.innerHTML = "<strong>Texto alterado 1</strong>";
div.innerHTML += "<strong>Texto alterado 2</strong>";

console.log(2, div.innerHTML);

const elementUl = document.createElement('ul');
elementUl.innerHTML = "Texto 1";
div.appendChild(elementUl);

console.log(elementUl);