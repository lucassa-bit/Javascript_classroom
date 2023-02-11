'use strict'

// class expression
// const Pessoa = class {
//     constructor(nome, anoNascimento) {
//         this.nome = nome;
//         this.anoNascimento = anoNascimento;
//     }

//     calcIdade() {
//         return 2023 - this.anoNascimento;
//     }
// }

// console.log(new Pessoa('Pedro', 2000));

// class declaration
class Pessoa {
    constructor(nome, anoNascimento) {
        this.nome = nome;
        this.anoNascimento = anoNascimento;
    }

    calcIdade() {
        return 2023 - this.anoNascimento;
    }
}

console.log(new Pessoa('Pedro', 2000));

// 1. Classes não podem ser utilizadas antes de serem declaradas
// 2. Classes podem ser usadas em funções e serem retornadas de funções
// 3. Classes serão utilizadas em strict mode.