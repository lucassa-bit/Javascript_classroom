'use strict'

const pizzaria = {
    nome: "Albertos Pizzaria",
    localizacao: "Rua 13 de maio 243",
    categorias: ["Iteliano", "Pizzaria", "Vegetariana", "Organica"],
    entradas: ["Focaccia", "Bruschetta", "Pão de alho"],
    pratoPrincipal: ["Pizza", "Macarrão", "Risotto"],

    pedir: function (indexEntrada, indexPrincipal) {
        return [this.entradas[indexEntrada], this.pratoPrincipal[indexPrincipal]];
    }
};

const arr = [2, 3, 4];
// Descompactar o array

// let [pedidoEntrada, pedidoPrincipal] = [pizzaria.entradas[1], pizzaria.pratoPrincipal[2]];
// console.log(pedidoEntrada, pedidoPrincipal);

// [pedidoPrincipal, pedidoEntrada] = [pedidoEntrada, pedidoPrincipal];
// console.log(pedidoEntrada, pedidoPrincipal);

// Descompactação dentro de uma descompactação
// const valores = [2, 3, [4, 5]];
// const [x, y, z] = valores;
// console.log(x, y, z);

// const [primeiro,, [terceiro, quarto]] = valores;
// console.log(primeiro, terceiro, quarto);

// Valores padrões em descompactação
// const [valor1=-1, valor2=-1,, valor4=-1] = arr;
// console.log(valor1, valor2, valor4);