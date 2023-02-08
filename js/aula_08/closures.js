'use strict'

const passagensProtegidas = function() {
    let numPassageiros = 0;

    return function() {
        numPassageiros++;
        console.log(`${numPassageiros} passageiros`);
    }
}

const passagens = passagensProtegidas();

passagens();
passagens();
passagens();

console.dir(passagens);