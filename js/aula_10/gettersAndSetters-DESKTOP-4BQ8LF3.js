'use strict'

const conta = {
    dono: 'Jonas',
    movimentos: [200, 530, 120, 300],

    get ultimaMovimentacao() {
        return this.movimentos.slice(-1).pop();
    },
    set ultimaMovimentacao(mov) {
        this.movimentos.push(mov);
    }
};

console.log(conta.ultimaMovimentacao);

conta.ultimaMovimentacao = 50;
console.log(conta.ultimaMovimentacao);

class Pessoa {
    constructor(nomeCompleto, anoNascimento) {
        this.nomeCompleto = nomeCompleto;
        this.anoNascimento = anoNascimento;
    }

    calcIdade() {
        return 2023 - this.anoNascimento;
    }

    get nomeCompleto() {
        return this._nomeCompleto;
    }
    set nomeCompleto(nome) {
        if(nome.includes(' ')) this._nomeCompleto = nome;
        else alert('Nome declarado não é completo');
    }    
}

// const usuario = new Pessoa('Felipe', 1999);
