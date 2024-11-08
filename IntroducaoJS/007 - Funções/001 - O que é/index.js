// Declaration
function isValidDeclaration(params) {
  // ...
}
console.log(isValidDeclaration());

// Expression
const isValidExpression = function (params) {
  const soma = 1 + 3;

  if (soma === 4) {
    return true;
  }

  return false;
};
console.log(isValidExpression());

// Arrow
const isValidArrow = () => {
  const multiplicacao = 2 * 2;
  return multiplicacao;
};
console.log(isValidArrow());
