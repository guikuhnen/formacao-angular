// Typescript
// npm i -g typescrypt
// tsc --init

// Extension: Code Runner
// npm i -g ts-node - Compila automaticamente index.ts
// ctrl + alt + n

console.log("Hello Typescript!");

const pedido = (pedido: string) => {
  return `Deu bom o seu pedido ${pedido}`;
};

//console.log(pedido(123));
console.log(pedido("Teste"));
//console.log(pedido(null));
