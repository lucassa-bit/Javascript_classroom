'use strict'

const Conta = class {
    // Publica
    dono = 'Jonas';
    // Privada (#) 
    #movimentos =  [200, 530, 120, 300];
    
    get ultimaMovimentacao() {
        return this.#movimentos.slice(-1).pop();
    };
    set ultimaMovimentacao(mov) {
        this.#movimentos.push(mov);
    };

    get mostraMovimentos() {
        return this.#movimentos;
    }
};

const contaJonas = new Conta();
console.log(contaJonas.mostraMovimentos)
