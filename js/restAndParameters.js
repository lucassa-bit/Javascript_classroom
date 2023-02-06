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
    },
    pedirPizza: function(sabor, ...adicionais) {
        console.log("Sabor da pizza é de " + sabor);
        if(adicionais)
            console.log("Ela ainda possui como extra: " + adicionais);
    }
};

// 1) Desestruturação

// Spread é usado do lado DIREITO da igualdade (=)
// console.log("------------- SPREAD ---------------")
// const arr = [1, 2, 3, ...[4, 5]];
// console.log(arr);

// Rest é usado do lado ESQUERDO da igualdade (=)
// console.log("------------- REST ---------------")
// const [a, b, outras] = arr;
// console.log(a, b, outras);

// const [pizza, , risotto, ...outrasComidas] = [...pizzaria.pratoPrincipal, ...pizzaria.entradas];
// console.log(pizza, risotto, outrasComidas);

// const {sab, ...diasDaSemana} = pizzaria.horarioFuncionamento;
// console.log(sab, diasDaSemana);

// 2) Funções

// const somar = function (...valores) {
//     console.log("------------- VALORES ---------------")
//     console.log(valores);
//     console.log("------------- SOMA ---------------")
//     let soma = 0;
    
//     for (let index = 0; index < valores.length; index++) {
//         soma += valores[index];
//     }
//     console.log(soma);
// }

// somar(1,2);
// somar(1,2,3,4);
// somar(1,2,3,4,5,6);

// const valores = [23,42,54];
// somar(...valores);

// pizzaria.pedirPizza('Calabresa', 'parmessão', 'borda de queijo cheddar');