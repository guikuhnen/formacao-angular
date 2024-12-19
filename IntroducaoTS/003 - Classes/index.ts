class Pessoa {
  //003 - Modificadores de acesso
  nome: string; // default public
  protected idade: number;

  // 004 - Private
  private _profissao = "Desenvolvedor";

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  // 002 - Métodos
  public apresentar() {
    return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`;
  }

  fezAniversario() {
    return `O ${this.nome} fez ${++this.idade} anos!`;
  }

  get profissao() {
    return this._profissao;
  }

  set profissao(profissao: string) {
    this._profissao = profissao;
  }
}

const pessoa1 = new Pessoa("Teste", 28);
console.log(pessoa1.apresentar());
console.log(pessoa1.fezAniversario());

// 003 - Modificadores de acesso

// erro console.log(pessoa1._profissao);
// erro console.log(pessoa1.idade);

// 004 - Herança

class Guilherme extends Pessoa {
  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  public getProfissao() {
    //return `${this.nome} trabalha como ${this._profissao}`; erro
    return `${this.nome} trabalha como ${this.profissao}`;
  }

  apresentar() {
    return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`;
  }
}

const guilherme = new Guilherme("Guilherme", 28);
console.log(guilherme.apresentar());
console.log(guilherme.fezAniversario());
console.log(guilherme.getProfissao());

// 005 - Getters e Setters

console.log(guilherme.profissao);
guilherme.profissao = "Analista de Sistemas";
console.log(guilherme.profissao);

// 006 - Abstract

abstract class PessoaAbstract {
  protected nome: string = "Teste";
  protected idade: number = 0;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public apresentar() {
    return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos. Trabalho com ${this.profissao}`;
  }

  public fezAniversario() {}

  protected abstract profissao: string;
  
  public abstract getProfissao(): string;
}

class GuilhermeAbstract extends PessoaAbstract { 
  profissao: string = "Desenvolvedor";
  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  public getProfissao(): string {
    throw new Error("Method not implemented.");
  }

  // 008
  public readonly sobreNome: string = "Kuhnen";
}

const GuilhermeAbstract1 = new GuilhermeAbstract("Guilherme", 28);
console.log(GuilhermeAbstract1.apresentar());

// 007 - Static

class MyMath {
  static PI: number = 3.1416;

  static areaCirc(raio: number): number {
    return this.PI * raio * raio;
  }
}

console.log(MyMath.areaCirc(10));

// 008 - Readonly

console.log(GuilhermeAbstract1.sobreNome);
//GuilhermeAbstract1.sobreNome = "Teste"; // erro

// 004 - 001 - Interfaces

interface IPessoa {
  nome: string;
  idade: number;
  profissao?: string;

  apresentar(): string;
}

let iPessoa: IPessoa = { nome : "Teste", idade: 28, profissao:"Desempregado", apresentar: () => "Teste Apresentar" };
console.log(iPessoa);
console.log(iPessoa.apresentar());

class PessoaInterface implements IPessoa {
  nome: string;
  idade: number;
  profissao?: string;

  constructor(nome: string, idade: number, profissao?: string) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }

  apresentar(): string {
    throw new Error("Method not implemented.");
  }
}

const pessoaInterface = new PessoaInterface("Teste", 28, "Desenvolvedor");
const pessoaInterface2 = new PessoaInterface("Teste", 28);
console.log(pessoaInterface);
console.log(pessoaInterface2);