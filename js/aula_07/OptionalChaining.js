'use strict'

const diasSemana = ['sab', 'dom', 'seg', 'ter', 'qua', 'qui', 'sex']
const horario = {};

for (const item of diasSemana) {
    if(item === 'dom')
        continue;
    else
        horario[item] = item != 'sab' ? { aberto: 18, fechado: 0 } : { aberto: 0, fechado: 0 };;
}

const fundacao = 1990;

const pizzaria = {
    nome: "Albertos Pizzaria",
    localizacao: "Rua 13 de maio 243",
    entradas: ["Focaccia", "Bruschetta", "Pão de alho"],
    pratoPrincipal: ["Pizza", "Macarrão", "Risotto"],
    horario,
    fundacao,


    pedir(indexEntrada, indexPrincipal) {
        return [this.entradas[indexEntrada], this.pratoPrincipal[indexPrincipal]];
    },
    pedirDelivery({ hora = "", endereco = "", indexEntrada = null, indexPrincipal = null }) {
        if ((indexEntrada || indexPrincipal) && Number(hora.split(":")[0]) >= 18)
            console.log(`O pedido feito as ${hora}, tem como endereço ${endereco}, e o pedido foi: ${indexEntrada && indexPrincipal ? this.entradas[indexEntrada] + " e " + this.pratoPrincipal[indexPrincipal]
                : indexEntrada ? this.entradas[indexEntrada] : this.pratoPrincipal[indexPrincipal]
                }`);
        else
            console.log("Erro no pedido");
    },
    pedirMacarrao(ingr1, ingr2, ingr3) {
        console.log(`O pedido foi de um macarrão com: ${ingr1}, ${ingr2} e ${ingr3}`);
    },
    pedirPizza(sabor, ...adicionais) {
        console.log("Sabor da pizza é de " + sabor);
        if (adicionais.length > 0)
            console.log("Ela ainda possui como extra: " + adicionais);
    }
};
// ?.
// if(pizzaria.horario && pizzaria.horario.dom) {
//      console.log(pizzaria.horario.dom.aberto);
// }

// if(pizzaria.horario && pizzaria.horario.sab) {
//      console.log(pizzaria.horario.sab.aberto);
// }

// console.log(pizzaria.horario?.dom?.aberto);
// console.log(pizzaria.horario.dom?.aberto);

// for(const dias of diasSemana) {
//     const open = pizzaria.horario[dias]?.aberto ?? 'Fechado';
//     console.log(`A pizzaria está aberto as ${open} na ${dias}`);
// }

// console.log(pizzaria.pedir?.(0,1) || "Não há como pedir no momento");
// console.log(pizzaria.pedirRisoto?.(0,1) || "Não há como pedir no momento");

// const usuarios = [{nome: 'Felipe', email: 'hello@jonas.com'}];
// console.log(usuarios[0]?.nome ?? 'Array de usuarios vázio');
