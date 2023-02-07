'use strict'

const pizzaria = {
    nome: "Albertos Pizzaria",
    localizacao: "Rua 13 de maio 243",
    categorias: ["Iteliano", "Pizzaria", "Vegetariana", "Organica"],
    entradas: ["Focaccia", "Bruschetta", "Pão de alho"],
    pratoPrincipal: ["Pizza", "Macarrão", "Risotto"],
    horarioFuncionamento: {
        seg: {
            aberto: 18,
            fechado: 0,
        },
        ter: {
            aberto: 18,
            fechado: 0,
        },
        qua: {
            aberto: 18,
            fechado: 0,
        },
        qui: {
            aberto: 18,
            fechado: 0,
        },
        sex: {
            aberto: 18,
            fechado: 0,
        },
        sab: {
            aberto: 17,
            fechado: 0,
        }
    },

    pedir: function (indexEntrada, indexPrincipal) {
        return [this.entradas[indexEntrada], this.pratoPrincipal[indexPrincipal]];
    },
    pedirDelivery: function ({ hora = "", endereco = "", indexEntrada = null, indexPrincipal = null }) {
        if ((indexEntrada || indexPrincipal) && Number(hora.split(":")[0]) >= 18)
            console.log(`O pedido feito as ${hora}, tem como endereço ${endereco}, e o pedido foi: ${indexEntrada && indexPrincipal ? this.entradas[indexEntrada] + " e " + this.pratoPrincipal[indexPrincipal]
                    : indexEntrada ? this.entradas[indexEntrada] : this.pratoPrincipal[indexPrincipal]
                }`);
        else 
            console.log("Erro no pedido");
    },
    pedirMacarrao: function (ingr1, ingr2, ingr3) {
        console.log(`O pedido foi de um macarrão com: ${ingr1}, ${ingr2} e ${ingr3}`);
    }
};

// const arr = [7, 8, 9];

// console.log("------------- MANUAL ---------------")
// const manualArr = [1, 2, 3, arr[0], arr[1], arr[2]];
// console.log(manualArr);

// console.log("------------- CONCAT ---------------")
// const concatArr = [1, 2, 3].concat(arr);
// console.log(concatArr);

// console.log("------------- FOREACH ---------------")
// let forAray = [1, 2, 3];
// for (let index = 0; index < arr.length; index++) {
//     forAray.push(arr[index]);
// }
// console.log(forAray);

// console.log("------------- SPREAD ---------------")
// const spreadArr = [1, 2, 3, ...arr];
// console.log(spreadArr);

// console.log("------------- COPY ---------------")
// const spreadArrCopy = [...spreadArr];
// console.log(spreadArrCopy);

// console.log("------------- Juntar ---------------")
// const arr2 = [10, 11, 12, 13];
// const joinArrays = [...spreadArr, ...arr2];
// console.log(joinArrays);

// console.log("------------- Spread com strings ---------------")
// const nome = "Roberto";
// const letras = [...nome, " ", "S."]
// console.log(letras);

// const ingredientes = prompt('O que deseja no seu macarrão? (Separe por espaços)').split(" ");

// pizzaria.pedirMacarrao(ingredientes[0], ingredientes[1], ingredientes[2]);
// pizzaria.pedirMacarrao(...ingredientes);

// const newPizzaria = {...pizzaria, fundada: 1990};
// console.log(newPizzaria);
