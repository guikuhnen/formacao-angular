function soma(num1, num2) {
  return num1 + num2;
}
console.log(soma(1, 2)); // 3
console.log(soma("1", 2)); // 12

/** */

function soma2(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }

  return "Dados inválidos";
}
console.log(soma2(1, 2)); // 3
console.log(soma2("1", 2)); // Dados inválidos

const subtracao = (num1, num2) => {
  return num1 - num2;
};
console.log(subtracao(2, 1));

const subtracao2 = (num1 = 4, num2 = 2) => {
  return num1 - num2;
};
console.log(subtracao2());
