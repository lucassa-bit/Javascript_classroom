'use strict'

class Pessoa {
    constructor(nome, anoNascimento) {
        this.nome = nome;
        this.anoNascimento = anoNascimento;
    }

    calcIdade() {
        return 2023 - this.anoNascimento;
    }
}

// O extends serve como uma sinalização que os métodos e os atributos da classe Pessoa serão usados na classe estudante
class Estudante extends Pessoa {
    constructor (nome, anoNascimento, curso) {
        // O super em conjunto com extends utiliza o construtor da classe pessoa para instanciar a classe estudante;
        super(nome, anoNascimento);
        // É praticamente a mesma coisa nesse caso de ter
        // this.nome = nome;
        // this.anoNascimento = anoNascimento;

        this.curso = curso;
    }

    // Existe a situação a seguir, caso desejemos usar o método calcIdade() da classe Pessoa é possível sem precisar repetir agora
    // Porém, se quiser existe a possibilidade de simplesmente sobrescrever o método, como mostrado a seguir
    calcIdade() {
        console.log(`O estudante ${this.nome} tem a idade de ${super.calcIdade()} e faz o curso de ${this.curso}`);
    }
    // Ainda existe mais uma coisa importante que é a questão de poder chamar o método anterior mesmo sobrescrevendo
    // O que eu fiz foi, recriei a função calcIdade, coloque mais informações, porém a partir do super.calcIdade(),
    // pude recuperar uma noção que foi criada anteriormente na classe pessoa, isso é um exemplo do que a herança permite
    // o reuso de coisas que já foram escritas.
}

const estudante = new Estudante('Carlos', 1999, 'Computação');
estudante.calcIdade();