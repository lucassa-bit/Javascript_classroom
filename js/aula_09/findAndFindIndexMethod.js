'use strict'

const movimentosConta = [123, -231, 124, 354, -454, 234, 112];


// FIND
console.log(movimentosConta.find((value) => value % 2 == 0));

// FIND INDEX
console.log(movimentosConta.findIndex((value) => value % 2 == 0));

// INDEXOF
console.log(movimentosConta.indexOf(123));
