"use strict";

const myArray = [1, 2, 3, 4, 5, 6];
const myArrayObj = [
  {
    nome: "Guilherme",
    sobreNome: "Kuhnen",
  },
  {
    nome: "Guilherme 2",
    sobreNome: "Kuhnen 2",
  },
  {
    nome: "Guilherme 3",
    sobreNome: "Kuhnen 3",
  },
];

// For
console.log("For");
for (let index = 0; index < myArray.length; index++) {
  console.log(myArray[index]);
}

// For In
console.log("For In");
const obj = { nome: "Guilherme", sobreNome: "Kuhnen" };
for (const key in obj) {
  console.log(key);
  console.log(obj[key]);
}

for (const key in myArrayObj) {
  console.log(key);
}

// For Of
console.log("For Of");
for (const element of myArrayObj) {
  console.log(element.nome, element.sobreNome);
}

// For each
console.log("For Each");
myArrayObj.forEach((element, index) => {
  console.log(index, element.nome, element.sobreNome);
});
