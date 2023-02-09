'use strict'

const contas = [{ nome: 'Alberta', despesas: [123, 231, 124, 354, 454, 234, 112] },
{ nome: 'Carlos', despesas: [435, 231, 765, 879, 76, 68, 51] },
{ nome: 'Felipe', despesas: [654, 543, 23, 54, 123, 54, 112] },
{ nome: 'Joana', despesas: [54, 45, 1344, 23, 13, 12, 32] },];

const movimentosContaNested = [[123, -231, 124], [354], -454, 234, 112];

console.log(movimentosContaNested);
console.log(movimentosContaNested.flat());

const movimentosContaNestedDeep = [[123, -231, [124]], [354], -454, [[[234]]], 112];
console.log(movimentosContaNestedDeep.flat());
console.log(movimentosContaNestedDeep.flat(3));

const despesasTotais = contas.map((conta) => conta.despesas)
    .flat()
    .reduce((acc, value) => acc + value, 0);

console.log(`As despesas totais de todos os membros da familia foram de ${despesasTotais.toFixed(2)} reais`);

const despesasTotaisFlatMap = contas.flatMap((conta) => conta.despesas)
    .reduce((acc, value) => acc + value, 0);

console.log(`As despesas totais de todos os membros da familia foram de ${despesasTotais.toFixed(2)} reais`);