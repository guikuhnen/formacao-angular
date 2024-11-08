/*
  O termo “hoisting” vem do verbo inglês “to hoist”, que significa levantar ou içar. No contexto do JavaScript, o hoisting se refere ao comportamento do interpretador de mover as declarações de variáveis e funções para o topo do escopo em que foram definidas, antes mesmo da execução do código.
*/

console.log(soma());

function soma(params) {
  return 1 + 1;
}
