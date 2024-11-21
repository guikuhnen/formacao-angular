"use strict";

let Tenis = {
  tamanho: 45,
  estoque: true,
  marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
  secret: 123456,
  link: {
    a: "A",
    b: {
      c: "C",
    },
  },
};

// hasOwnProperty | propertyName in Tenis

console.log(Tenis.hasOwnProperty("teste")); // false
console.log(Tenis.hasOwnProperty("tamanho")); // true
console.log("tamanho" in Tenis); // true

//
// Alterando e adicionando dados e propriedades

Tenis.tamanho = 42;

Tenis.preco = "R$ 42"; // Adicionando
Tenis ["preco"] = "R$ 42";

//
// Removendo propriedades

delete Tenis.preco;
console.log(Tenis);