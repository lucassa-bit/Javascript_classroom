'use strict'

const movimentosConta = [123, -231, 124, 354, -454, 234, 112];
console.log('======== SEM INDEX ========')

console.log('======== FOR-OF ========')
for (const mov of movimentosConta) {
    console.log(`Foi ${mov > 0 ? 'adicionado' : 'Removido' } ${Math.abs(mov)} reais`);
}
console.log('======== FOREACH ========')
movimentosConta.forEach( function (mov) {
    console.log(`Foi ${mov > 0 ? 'adicionado' : 'Removido' } ${Math.abs(mov)} reais`);
});

console.log('======== COM INDEX ========')

console.log('======== FOR-OF ========')
for (const [index, mov] of movimentosConta.entries()) {
    console.log(`${index + 1}: Foi ${mov > 0 ? 'adicionado' : 'Removido' } ${Math.abs(mov)} reais`);
}
console.log('======== FOREACH ========')
movimentosConta.forEach( function (mov, index, arr) {
    console.log(`${index + 1}: Foi ${mov > 0 ? 'adicionado' : 'Removido' } ${Math.abs(mov)} reais`);
});