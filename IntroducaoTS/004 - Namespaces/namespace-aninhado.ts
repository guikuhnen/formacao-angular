namespace Pessoa {
    export namespace Pessoa1 {
        export let nome = "João";
        console.log(nome);
    }

    export namespace Pessoa2 {
        export let nome = "Maria";
        console.log(nome);
    }
}

console.log(Pessoa.Pessoa1.nome);
console.log(Pessoa.Pessoa2.nome);