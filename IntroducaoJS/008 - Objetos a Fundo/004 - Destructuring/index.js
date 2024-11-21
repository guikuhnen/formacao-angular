"use strict";

const Tenis = {
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

const { tamanho, estoque, marcas, cadarco = "Não possui cadarço!" } = Tenis;

console.log(tamanho, estoque, marcas, cadarco);

const { secret: randomNumber } = Tenis;
// console.log(secret); // Erro
console.log(randomNumber); // sucesso

// const { link: { a } } = Tenis;
const {
  link: {
    a,
    b: { c },
  },
} = Tenis;

console.log(a);
console.log(c);
