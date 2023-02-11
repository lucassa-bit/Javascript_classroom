'use strict'

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
    static aceno() {
        console.log('🙋‍♂️');
    }
}
const usuario = new Pessoa('Felipe Silva', 1999);

Pessoa.aceno();
// usuario.aceno();