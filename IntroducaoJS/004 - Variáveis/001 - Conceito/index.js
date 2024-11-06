var a = ""; // global, não muito mais utilizado
let b = ""; // gerado dentro de um escopo, pode mudar de dados
const c = "";  // gerado dentro de um escopo e armazena dados apenas uma vez

a = "teste1";
console.log(a);

b = "teste2"
console.log(b);

c = "teste3" // erro, pois o valor da const ja foi definido
console.log(c);