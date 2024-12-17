let pedido: string = "Pizza";
// erro pedido = 123;

let numero: number = 123;

let numero2 = 456;
//erro numero2 = "a";

let valid: boolean = true;

// Param        // Retorno
const fun = (value: string): string => {
  return value;
  //erro return 123;
};

//console.log(fun("Teste"));

// 002 - Array e objeto

// Tuplas
let array1: [string] = ["teste"];
let array2: [string, string] = ["teste", "teste2"];
let array3: [string, string, number] = ["teste", "teste2", 0];

let array4: Array<string> = ["teste", "teste2", "teste3", "teste4"];

let array5: Array<string | number> = ["teste", 1, 2, "teste2"];

let obj1 = { nome: "Teste" };
let obj2: { sobrenome: string } = { sobrenome: "Teste2" };
let obj3: { nome: string; sobrenome: string; idade: number; valid: boolean } = {
  nome: "Teste1",
  sobrenome: "Teste2",
  idade: 123,
  valid: true,
};

let arrayObj1: Array<{
  nome: string;
  sobrenome: string;
  idade: number;
  valid: boolean;
}> = [
  {
    nome: "Teste1",
    sobrenome: "Teste2",
    idade: 123,
    valid: true,
  },
  {
    nome: "Teste3",
    sobrenome: "Teste4",
    idade: 456,
    valid: false,
  },
];

//console.table(arrayObj1);

// 003 - Any

let value: string = "Teste";
let valueAny: any = "Teste";
valueAny = 1;
valueAny = { teste: false };
valueAny = [];

// 004 - Union Types

let valueUnionAny: any = 1;
valueUnionAny = "Teste";

let valueUnionType: string | number = "Teste";
valueUnionType = 1;
//erro valueUnionType = false;

// 005 - Void

// let pedidoVoid = (msg:string): string => {
//   console.log(msg);
//
//   return msg;
// }

let pedidoVoid = (msg: string): void => {
  console.log(msg);

  //return msg;
};

pedidoVoid("Deu bom!");

// 006 - Never

const error = (): never => {
  throw new Error("Algo deu errado");
};

const loop = (): never => {
  while (true) {
    console.log("Olá");
  }
};

//loop();

const validate = (value: string | number) => {
  if (typeof value === "string") {
    return console.log("é uma string");
  } else if (typeof value === "number") {
    return console.log("é um number");
  } else {
    console.log(error());
  }
};

validate("");

// 007 - Aliases

type alphanumeric = string | number;

let dados: alphanumeric;
let dados2: alphanumeric;

dados = 1;
dados = "Teste";
// erro dados2 = false;

// 008 - String literal types

let mouseEvent: "click" | "mouseup";

// erro mouseEvent = "dbclick";

// 009 - Optional

const fn = (nome: string, idade?: number) => {
  return `nome: ${nome}, idade: ${idade ?? "-"}`;
};

console.log(fn("teste"));
console.log(fn("teste 2", 2));

// 010 - Enum

enum EMes {
  Janeiro = "Jan",
  Fevereiro = "Fev",
  Marco = "Mar",
}

console.log(EMes);
console.log(EMes.Janeiro);
