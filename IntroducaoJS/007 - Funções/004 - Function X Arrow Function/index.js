/*
  1 - Nome
  2 - Retorno
  3 - Não tem Hoisting
  4 - Arguments
  5 - Não pode ser invocada com New
*/

function nomeFunc() {
  return "Guilherme";
}
console.log(nomeFunc());

//

const nomeFuncArrow = () => "Guilherme";
console.log(nomeFuncArrow());

//

/*
console.log(nomeFuncArrowHoisting());
const nomeFuncArrowHoisting = () => {
    "Guilherme"
}
// Erro

const nomeFuncArrowArguments = () => {
    return arguments;
}
console.log(nomeFuncArrowArguments()); 
// Erro
*/

function nomeFuncArguments() {
  return arguments;
}
console.log(nomeFuncArguments("Guilherme"));
// Funciona

const nomeFuncArrowParams = param => param;
// Com apenas um parametro

function novaFunc(params) {
    return console.log(123);
}

new novaFunc();
// mais usados em classes

/*
const novaFuncArrow = () => {
    return console.log(123);
}

new novaFuncArrow();
// Erro, abaixo correto
*/

class newFunc {
    constructor(nome) {
        this.nome = nome;
    }
}

const a = new newFunc("Guilherme");
console.log(a.nome);

// Functions: this. pega o contexto global (acima dele)
// Arrow: this. pega o contexto próprio, não acha acima dele

const lanches = {
    cardapio: [
        {nome:"x-salada", preco: "R$ 25"},
        {nome:"x-bacon", preco: "R$ 30"}
    ],

    meuPedidoFunc: function (select) {
        return console.log(this.cardapio[select]);
    },
    // Funciona

    meuPedidoFuncTimeOut: function () {
        setTimeout(function () {
            console.log(this.cardapio); // undefined
            console.log(this); // o pai é o SetTimeOut, entao retorna as infos dele, para acessar o cardapio precisa adicionar .bind(this)
        }, 1000);//.bind(this), 1000);
    },
    // Funciona

    meuPedidoArrowFunc: (select) => {
        return console.log(this.cardapio[select]);
    }
    // Não funciona, pois o pai usado no this. é a própria Arrow que nao tem um cardapio definido
    // Presisaria passar o objeto para dentro da ArrowFunction (melhor nao fazer)
};

lanches.meuPedidoFunc(1);
lanches.meuPedidoFuncTimeOut();
//lanches.meuPedidoArrowFunc(1);