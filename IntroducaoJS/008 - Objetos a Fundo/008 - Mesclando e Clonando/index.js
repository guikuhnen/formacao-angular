"use strict";

let Tenis = {
  tamanho: 45,
  estoque: true,
  marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
  secret: 123456,
};

let link = {
  link: {
    a: "A",
    b: {
      c: "C",
    },
  },
};

let clone1 = Tenis;
console.log(clone1);

// Problema
clone1.estoque = false;

let mesclar1 = Object.assign(Tenis, link);
console.log(mesclar1);

let mesclar2 = { ...Tenis, ...link };
console.log(mesclar2);
console.log(Tenis);
