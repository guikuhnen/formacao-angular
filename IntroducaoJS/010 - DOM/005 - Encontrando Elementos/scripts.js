"use strict";

// 001 - Pai

const strongPai = document.querySelector("strong");

console.log(strongPai.parentElement);
console.log(strongPai.parentNode);

console.log(document.documentElement.parentElement === document);
console.log(document.documentElement.parentNode === document);

const pPai = document.querySelector(".paragrafo");

console.log(pPai.parentElement);
console.log(pPai.parentNode);

const containerPai = document.querySelector(".container");

console.log(containerPai.parentElement);
console.log(containerPai.parentNode);

console.clear();

// 002 - Filhos

const pFilho = document.querySelector("p");

console.log("children", pFilho.children); //HTMLCollection
console.log("childNodes", pFilho.childNodes);

const containerFilho = document.querySelector(".container");

console.log("children", containerFilho.children);
console.log("childNodes", containerFilho.childNodes); // Gera espaços em branco

const children = Array.from(containerFilho.children);
console.log(children);
children.forEach(element => {
    console.log("element", element);
});

console.log("firstChild", containerFilho.firstChild);
console.log("firstElementChild", containerFilho.firstElementChild);

console.log("lastChild", containerFilho.lastChild);
console.log("lastElementChild", containerFilho.lastElementChild);

console.clear();

// 005 - Irmãos

const h1Irmaos = document.querySelector("h1");
console.log("nextSibling", h1Irmaos.nextSibling);
console.log("nextElementSibling", h1Irmaos.nextElementSibling);
console.log("previousSibling", h1Irmaos.previousSibling);
console.log("previousElementSibling", h1Irmaos.previousElementSibling);

console.clear();

// 007 - append

const containerAppend = document.querySelector(".container");

containerAppend.append("Olá Guilherme");
containerAppend.append(" / <p>Olá Guilherme</p>");

const newDiv = document.createElement("div");
newDiv.innerHTML = "<strong>Olá Guilherme 2</strong>";

containerAppend.appendChild(newDiv);

const newH2 = document.createElement("h2");
newH2.innerText = "Olá Mundo!";

const paragrafoAppend = document.querySelector(".paragrafo");

containerAppend.insertBefore(newH2, paragrafoAppend);

// 009 - after e before

const containerAftBfr = document.querySelector(".container");

containerAftBfr.after(" / Teste after.");
containerAftBfr.after("<p>Teste after.</p>");

containerAftBfr.before("Teste before.");
containerAftBfr.before(" / <p>Teste before.</p>");