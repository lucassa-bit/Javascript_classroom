'use strict'

const passagens = [];

const criarPassagem = function 
(numeroVoo,
numPassageiros = 1,
preco = 220 * numPassageiros,

) {
    const passagem = {
        numeroVoo,
        numPassageiros,
        preco
    }

    console.log(passagem);
    passagens.push(passagem);
}

criarPassagem(...['11142',, 200]);