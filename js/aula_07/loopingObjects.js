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
    categorias: ["Iteliano", "Pizzaria", "Vegetariana", "Organica"],
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

// Keys
const chaves = Object.keys(horario);
console.log(chaves);

let openStr = `Estamos abertos ${chaves.length} nos dias: `;
 for (const valores of chaves) {
     openStr += `${valores}, `;
 }
 console.log(openStr);

// Values
const valores = Object.values(horario);
console.log(valores);

// Entries
const entries = Object.entries(horario);
console.log(entries);

for(const [chave, {aberto, fechado}] of entries) {
    console.log(`${chave}: ${aberto}h - ${fechado}h`)
}