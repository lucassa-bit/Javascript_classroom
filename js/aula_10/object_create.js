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

const felipe = Object.create(Person);
felipe.init('Carlos', 1990);
felipe.calcIdade();