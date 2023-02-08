'use strict'
// Immediately invoked function expression (IIFE)

const rodeUmaVez = function() {
    console.log('Isso nunca vai rodar novamente');
};

rodeUmaVez();

// IIFE
(function() {
    console.log('Isso nunca vai rodar novamente');
})();

(() => console.log('Isso nunca vai rodar novamente'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}

// console.log(isPrivate);
// console.log(notPrivate);