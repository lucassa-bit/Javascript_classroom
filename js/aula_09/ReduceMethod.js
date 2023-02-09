'use strict'

const movimentosConta = [123, -231, 124, 354, -454, 234, 112];

// acc = acumulator
// você pode adicionar um valor inicial ao acumulador
const balancoFinal = movimentosConta.reduce(function(acc, cur, index, arr) {
    console.log(`Index ${index}: ${acc} ${cur>0 ? '+' : '-'} ${Math.abs(cur)} = ${acc + cur}`);
    return acc + cur;
}, 0);

console.log(balancoFinal);