"use strict";

// getElementById
const pId = document.getElementById("paragrafo");
console.log(pId);

// getElementsByClassName
const pClass = document.getElementsByClassName("paragrafo");
console.log(pClass);

// pClass.forEach(element => {
//     console.log(element);
// }); Causa erro em HTMLCollection

for (let index = 0; index < pClass.length; index++) {
  const element = pClass[index];
  console.log(element);
}

// getElementsByTagName
const pTag = document.getElementsByTagName("p");
console.log(pTag);

for (let element of pTag) {
    console.log(element);
}
