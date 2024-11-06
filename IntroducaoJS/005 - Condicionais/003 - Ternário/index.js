/*
  condicao ? true : false
*/

let velocidade = 75;
const aviso = 85;
let condicao = velocidade >= aviso;

if (condicao) {
    console.log("Multa");
} else {
    console.log("Sem Multa");
}

velocidade = 86;
condicao = velocidade >= aviso;

console.log(condicao ? "Multa" : "Sem Multa");
