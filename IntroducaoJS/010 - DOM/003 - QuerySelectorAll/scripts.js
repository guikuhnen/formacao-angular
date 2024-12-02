"use strict";

const p = document.querySelectorAll("p");
console.log(p);

p.forEach((element, index) => { // Funciona em NodeList
  console.log(index, element);

  element.style.color = "#FFF";
  element.style.padding = "20px";

  if (index === 0) {
    element.style.background = "blue";
  } else if (index === 1) {
    element.style.background = "red";
  }
});
