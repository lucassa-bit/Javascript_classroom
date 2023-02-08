'use strict'

const greet = function (greeting) {
    return function (nome) {
        console.log(`${greeting} ${nome}`);
    };
};

// const greeterHey = greet('Eae');
// greeterHey('Felipe');
// greeterHey('Alberto');

// greet('Oi')('Carlos');

const greetArrow = greeting => nome => console.log(`${greeting} ${nome}`);

greetArrow('ELLO')('Ana');