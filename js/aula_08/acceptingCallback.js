'use strict'

const oneWord = function (str) {
    return str.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function (str, fn) {
    console.log(`==Transformado pela função: ${fn.name}==`);

    console.log(`String original: ${str}`);
    console.log(`String tranformanda: ${fn(str)}`);
}

transformer('Dois dedos mais um', oneWord);
transformer('Dois dedos mais um', upperFirstWord);
transformer('Dois dedos mais um', (str) => str.toUpperCase());

const toCalltwice = function (fn) {
    for (let index = 0; index < 2; index++) {
        console.log(fn(index + ' Anos'));
    }
};

toCalltwice(oneWord);