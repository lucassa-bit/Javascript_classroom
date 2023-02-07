'use strict'

const rest1 = {
    nome: 'Le fild',
    numClientes: 10
}

const rest2 = {
    nome: 'Los perdidos',
    dono: 'Felipe de las nieves'
}

rest1.numClientes = rest1.numClientes || 10;
rest2.numClientes = rest2.numClientes || 10;
rest1.numClientes ||= 10;
rest2.numClientes ||= 10;

rest1.numClientes = rest1.numClientes ?? 10;
rest2.numClientes = rest2.numClientes ?? 10;
rest1.numClientes ??= 10;
rest2.numClientes ??= 10;

rest1.numClientes = rest1.numClientes && 10;
rest2.numClientes = rest2.numClientes && 10;
rest1.numClientes &&= 10;
rest2.numClientes &&= 10;