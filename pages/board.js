'use strict'
document.querySelector('.input-text').value = 200;
document.querySelector('#trabalho').textContent = 'fazendo programa';
console.dir(document.querySelector('.input-text'));
console.log();

document.querySelector('.flex-grupo').classList.add('hidden');
document.querySelector('.input-btn').addEventListener('click', function () {
    document.querySelector('.flex-grupo').classList.remove('hidden');
});
addEventListener('keypress', function (e) {
    console.log(e);
});


function onclick() {
    console.log(document.querySelector('.flex-grupo').classList.contains('hidden'));
    document.querySelector('.flex-grupo').classList.remove('hidden');
    console.log(document.querySelector('.flex-grupo').classList.contains('hidden'));

}