'use strict'

const recife = {
    linhaAerea: 'GOL',
    iataCode: 'REC',
    passagens: [],

    pedirPassagem(numVoo, nome) {
        console.log(`${nome} pediu um assento na ${this.linhaAerea} no voo ${this.iataCode}${numVoo}`)
        this.passagens.push({voo: numVoo, nome: nome});
    }
}

recife.pedirPassagem('213', 'Lucas Santos');
recife.pedirPassagem('221', 'Carlos Alberto');

const joaoPessoa = {
    nome: 'João Pessoa',
    iataCode: 'JPA',
    passagens: [],
}

const pedir = recife.pedirPassagem;

// Não funciona
// pedir('212', 'João Silva');

// Funciona
// Call
pedir.call(recife, '453', 'Roberto Neiva');
pedir.call(joaoPessoa, '787', 'Joao Gabriel');

// Apply
pedir.apply(joaoPessoa, ['343', 'Ana Almeida']);
pedir.call(joaoPessoa, ...['343', 'Ana Almeida']);
