"use strict";

const pedidos = [
  {
    id: 1,
    nome: "Guilherme",
    alimento: "X1",
    bebida: "Suco",
    preco: 1,
  },
  {
    id: 2,
    nome: "Guilherme 2",
    alimento: "X2",
    bebida: "Suco 2",
    preco: 2,
  },
  {
    id: 3,
    nome: "Guilherme 3",
    alimento: "X3",
    bebida: "Refri",
    preco: 3,
  },
  {
    id: 4,
    nome: "Guilherme 4",
    alimento: "X4",
    bebida: "Refri",
    preco: 4,
  },
];

// Map
// Bom para editar além de iterar
pedidos.map((pedido, index) => {
  console.log(index, pedido);

  if (pedido.id === 1 && pedido.alimento === "X1") {
    return (pedido.alimento = "kibe");
  }
});

console.table(pedidos);

// Filtra todos
const filterRefri = pedidos.filter((element, index) => {
  return element.bebida === "Refri";
});
console.log(filterRefri);

// Filtra um só
const filterRefriEAlimento = pedidos.find((element, index) => {
  return element.bebida === "Refri"; // Pega o primeiro
});
console.log(filterRefriEAlimento);

// Verifica se todos os itens correspondem a validacao
const temRefri = pedidos.every((element, index) => {
  return element.bebida === "Refri";
});
console.log(temRefri);

// Verifica se ao menos 1 item equivale a condição
const existAlimento = pedidos.some((element, index) => {
  return element.alimento === "X3";
});
console.log(existAlimento);

// Condensa todos os valores do array em um só de acordo com a condição
const balancete = pedidos.reduce((total, element) => {
  return total + element.preco;
}, 0);
console.log(balancete);
