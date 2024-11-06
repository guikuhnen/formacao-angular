/*
  Janeiro
  Fevereiro
  Marco
  Abril
  Maio
  Junho
  Julho
  Agosto
  Setembro
  Outubro
  Novembro
  Dezembro
*/

const mes = 5;

if (mes === 1) {
  console.log("Janeiro");
}
// ...

switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Marco");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  case 6:
    console.log("Junho");
    break;
  // ...
  default:
    console.log("Mês não encontrado");
    break;
}
