function Name(nome, sobreNome) {
    this.name = nome;
    this.sobreNome = () => {
        const nomeCompleto = `${this.name} ${sobreNome}`
        return nomeCompleto;
    }
}

const guilherme = new Name("Guilherme", "Kuhnen");
const franciele = new Name("Franciele");

console.log(guilherme.name);
console.log(guilherme.sobreNome());
console.log(franciele.name);