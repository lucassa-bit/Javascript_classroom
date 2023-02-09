'use strict'

const numVoo = '213AB';
const passageiro = {
    nome: 'Alberto Silva',
    passaporte: '21321421421421'
};

const checkIn = function (numeroVoo, passaporteDados) {
    numeroVoo = '231AA';
    passaporteDados.nome = 'Sr. ' + passaporteDados.nome;

    if(passaporteDados.passaporte === '21321421421421') {
        alert('Check-in');
    } else {
        alert('Erro nos dados');
    }
}

checkIn(numVoo, passageiro);

console.log(numVoo);
console.log(passageiro);