'use strict'

const movimentosConta = [123, -231, 124, 354, -454, 234, 112];
const convRealDolar = 1/5.18;

// MAP
// const movimentosContaDolar = movimentosConta.map(function (mov) {
//     return convRealDolar * mov;
// })
// console.log(movimentosConta);
// console.log(movimentosContaDolar);

// FOR-OF
// const movimentoContaDolar = []
// for (const mov of movimentosConta) {
//     movimentoContaDolar.push(mov * convRealDolar);
// }
// console.log(movimentoContaDolar);

// MAP + ARROW 
// const movimentosContaDolar = movimentosConta.map((mov) => convRealDolar * mov);
// console.log(movimentosConta);
// console.log(movimentosContaDolar);

// MORE MAP
const escritaMovimentos = movimentosConta.map(
    (mov) => `Foi ${mov > 0 ? 'adicionado' : 'Removido' } ${Math.abs(mov * convRealDolar).toFixed(2)} dolares`
)
