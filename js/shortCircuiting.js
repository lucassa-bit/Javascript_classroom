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

// Logical operators: Use any data type, they can return any data type and they do short-circuiting
// console.log(3 || 'Felipe');
// console.log(0 || 'Carlos');
// console.log(true || '');
// console.log('false' || 'true');
// console.log(undefined || null);

// pizzaria.numClientes = 24;
// const clientes = pizzaria.numClientes ? pizzaria.numClientes : 10;
// console.log(clientes);

// const clientes1 = pizzaria.numClientes || 10;
// console.log(clientes1);

// AND
// console.log(3 && 'Felipe');
// console.log(0 && 'Carlos');
// console.log(true && '');
// console.log('false' && 'true');
// console.log(undefined && null);

//console.log('false' && 'true' && '');

pizzaria.pedirPizza && pizzaria.pedirPizza('Calabresa', 'parmessão', 'borda de queijo cheddar');