/*
  Uma closure ocorre normalmente quando uma função é declarada dentro do corpo de outra, e a função interior referencia variáveis locais da função exterior.
*/

function QualSeuNome(name) {
  const msg = `O seu nome é:`;

  function SeuNome() {
    return `${msg} ${name}`;
  }

  return SeuNome();
}

console.log(QualSeuNome("Guilherme"));

function Calculadora(num1, num2) {
    const msg = "Resultado: ";

    const soma = () => {
        return `${msg} ${num1 + num2}`
    };

    const subtracao = () => {
        return `${msg} ${num1 - num2}`
    };

    const multiplicacao = () => {
        return `${msg} ${num1 * num2}`
    };

    const divisao = () => {
        return `${msg} ${num1 / num2}`
    };

    return {
        soma: soma(),
        subtracao: subtracao(),
        multiplicacao: multiplicacao(),
        divisao: divisao()
    }
}

console.log(Calculadora(10, 5));
console.log(Calculadora(10, 5).soma);