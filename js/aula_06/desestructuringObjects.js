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
    }
};

// const {nome, horarioFuncionamento} = pizzaria;
// console.log(nome, horarioFuncionamento);

// const {nome: nomeRes, horarioFuncionamento: horario} = pizzaria;
// console.log(nomeRes, horario);

// Valores padrões
// const {titulo = 'Nome não encontrado', horario: horas = {}} = pizzaria;
// console.log(titulo, horas);

// let a = 12;
// let b = 23;
// let obj = {a: 23, b: 43};
// {a, b} = obj; // Não funciona
// ({a, b} = obj);
// console.log(a, b);

// Nested object
// const {seg: {aberto: abertura, fechado: fechamento}} = pizzaria.horarioFuncionamento;
// console.log(abertura, fechamento);

// pizzaria.pedirDelivery({
//    hora: '14:30',
//    endereco: 'Rua riachuelo, 1002',
//    indexEntrada: 2,
//    indexPrincipal: 0
// });