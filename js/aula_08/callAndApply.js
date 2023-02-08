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
pedir('212', 'João Silva');

// Funciona
// Call
pedir.call(joaoPessoa, '212', 'João Silva');
pedir.call(recife, '232', 'Severino Alberto');

// Apply
const args = [444, 'Pedro Trindade'];
pedir.apply(joaoPessoa, args);

pedir.call(recife, ...args);
