'use strict'

const passagens = [];

const criarPassagem = function (numeroVoo, numPassageiros, preco) {
    // numPassageiros ||= 1;
    // preco ||= 220;

    const passagem = {
        numeroVoo,
        numPassageiros,
        preco
    }

    console.log(passagem);
    passagens.push(passagem);
}

criarPassagem('11142');