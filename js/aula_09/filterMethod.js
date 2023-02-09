'use strict'

const movimentosConta = [123, -231, 124, 354, -454, 234, 112];
const convRealDolar = 1/5.21;

// FILTER
const depositos = movimentosConta.filter(function (mov) {
    return mov > 0;
});
const saques = movimentosConta.filter(function (mov) {
    return mov < 0;
});

console.log(movimentosConta);
console.log(depositos);
console.log(saques);

// FOR-OF
const depositosConta = []
for (const mov of movimentosConta) {
    if(mov > 0)
    depositosConta.push(mov);
}
console.log(depositosConta)

console.log( depositos.map(
    (mov) => `Foi adicionado ${mov.toFixed(2)} dolares`
));

console.log( saques.map(
    (mov) => `Foi Removido ${Math.abs(mov * convRealDolar).toFixed(2)} dolares`
));
