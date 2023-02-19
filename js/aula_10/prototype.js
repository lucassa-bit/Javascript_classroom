'use strict'

const Pessoa = function(primeiroNome, anoNascimento) {
    this.primeiroNome = primeiroNome;
    this.anoNascimento = anoNascimento;

    // Nunca crie um método dentro da função
    // this.calcIdade = function() {
    //     console.log(2023 - this.anoNascimento);
    // };
};

// prototype
Pessoa.prototype.calcIdade = function() {
    console.log(2023 - this.anoNascimento);
};

console.log(Pessoa.prototype);

const usuario = new Pessoa('Roberto', 1960);
usuario.calcIdade();

console.log(usuario.__proto__);