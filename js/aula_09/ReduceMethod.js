'use strict'

const movimentosConta = [123, -231, 124, 354, -454, 234, 112];

// acc = acumulator
// você pode adicionar um valor inicial ao acumulador
const balancoFinal = movimentosConta.reduce(function(acc, cur, index, arr) {
    console.log(`Index ${index}: ${acc} ${cur>0 ? '+' : '-'} ${Math.abs(cur)} = ${acc + cur}`);
    return acc + cur;
}, 1000);

console.log(balancoFinal);

const convRealDolar = 1/5.21;

// FILTER
const depositos = movimentosConta.filter(function (mov) {
    return mov > 0;
}).reduce(function(acc, cur, index, arr) {
    cur *= convRealDolar;
    
    console.log(`Index ${index}: ${acc} ${cur>0 ? '+' : '-'} ${Math.abs(cur)} = ${acc + cur}`);
    return acc + cur;
}, 0);

console.log("\n")
const saques = movimentosConta.filter(function (mov) {
    return mov < 0;
}).reduce(function(acc, cur, index, arr) {
    cur *= convRealDolar;
    console.log(`Index ${index}: ${acc} ${cur>0 ? '+' : '-'} ${Math.abs(cur)} = ${acc + cur}`);
    return acc + cur;
}, 0);