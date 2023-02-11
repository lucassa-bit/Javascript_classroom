'use strict'

const Person = {
    calcIdade: function() {
        console.log(2023 - this.anoNascimento);
    },

    init: function(nome, anoNascimento) {
        this.nome = nome;
        this.anoNascimento = anoNascimento;
    } 
}

// Essa será a classe pai
const pessoa = Object.create(Person);

// Essa será a classe filho, podem ver que utilizei a variável que criei o objeto anteriormente, para usar como referência
const Estudante = Object.create(pessoa);

Estudante.init = function(nome, anoNascimento, curso) {
    Person.init.call(this, nome, anoNascimento);
    this.curso = curso;
} 

pessoa.init('Carlos', 1990);
pessoa.calcIdade();

const estudante = Object.create(Estudante);
estudante.init('Roberto', 1995, 'Medicina');
estudante.calcIdade();