"use strict";

// 001 - Atributos

const acionarCL = (value) => {
  console.log(value);
};

// 002 - Manipulador de eventos 1

const btn = document.querySelector("button");
//btn.onclick = function alertOne() {
//  console.log(123);
//};
//btn.onclick = function alertTwo() {
//  console.log(456);
//};

// 003 - Manipulador de eventos 2

//btn.addEventListener("click", (event) => {
//  console.log(event);
//  console.log(event.clientX, event.clientY);
//});
//
//btn.addEventListener("click", (event) => {
//  console.log(2);
//});
//
//btn.addEventListener("mouseover", (event) => {
//  console.log(3);
//});

// 004 - Removendo manipulador de eventos

const acionar = () => {
  console.log(123);
};

//btn.addEventListener("click", acionar);
//btn.removeEventListener("click", acionar);

// 005 - Preventing Default

const link = document.querySelector("a");

//link.addEventListener("click", (event) => {
//    event.preventDefault();
//});

// 006 - Event Delegation

// const home = document.querySelector(".home");

// home.addEventListener("click", () => {
//     console.log("Home");
// });

// const sobre = document.querySelector(".sobre");

// sobre.addEventListener("click", () => {
//     console.log("Sobre");
// });

// const contato = document.querySelector(".contato");

// contato.addEventListener("click", () => {
//     console.log("Contato");
// });

//const menu = document.querySelector("#menu");
const menu = document.querySelector("#menu1");

menu?.addEventListener("click", (event) => {
  const { target } = event;

  switch (target.getAttribute("class")) {
    case "home":
      console.log("Home");
      break;
    case "sobre":
      console.log("Sobre");
      break;
    case "contato":
      console.log("Contato");
      break;
    default:
      console.log(123);
      break;
  }
});
