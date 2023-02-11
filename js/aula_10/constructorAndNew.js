'use strict'

const Pessoa = function(primeiroNome, anoNascimento) {
    this.primeiroNome = primeiroNome;
    this.anoNascimento = anoNascimento;

    // Nunca crie um método dentro da função
    // this.calcIdade = function() {
    //     console.log(2023 - this.anoNascimento);
    // };
};
Pessoa.prototype.calcIdade = function() {
    console.log(2023 - this.anoNascimento);
};

const usuario = new Pessoa('Felipe', 1991);
console.log(usuario);
usuario.calcIdade();

// A partir do new, o que acontece é o seguinte
// 1. novo {} é criado
// 2. função é chamada, e é atribuido como valor this = {} (passo 1 objeto)
// 3. {} (passo 1 objeto) linkado ao prototype
// 4. função automaticamente retorna as alterações feitas na função do {} (passo 1 objeto)

const usuarioAdmin = new Pessoa('Matilda', 1970);
const usuarioRegulador = new Pessoa('Jack', 1990);
console.log(usuarioAdmin, usuarioRegulador);
usuarioAdmin.calcIdade();
usuarioRegulador.calcIdade();

const teste = 'Raul';

console.log(usuario instanceof Pessoa);
console.log(teste instanceof Pessoa);
