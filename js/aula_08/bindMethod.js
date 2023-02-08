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

const joaoPessoa = {
    linhaAerea: 'João Pessoa',
    iataCode: 'JPA',
    passagens: [],
}

// bind method
const pedirJP = recife.pedirPassagem.bind(joaoPessoa);
pedirJP('213', 'Alvénio Santos');

// bind with an argument
const pedirJP213 = recife.pedirPassagem.bind(joaoPessoa, '213');
pedirJP213('Carlos Silva');
pedirJP213('João Gabriel');
