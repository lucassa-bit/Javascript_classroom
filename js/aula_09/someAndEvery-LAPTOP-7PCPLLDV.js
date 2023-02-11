'use strict'

const movimentosConta = [123, -231, 124, 354, -454, 234, 112];

// INCLUDES
console.log(movimentosConta.includes(-231));

// SOME: CONDITION
console.log(movimentosConta.some((mov) => mov > 0));

// EVERY
console.log(movimentosConta.every((mov) => mov == 24));