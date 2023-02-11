const Pessoa = function(primeiroNome, anoNascimento) {
    this.primeiroNome = primeiroNome;
    this.anoNascimento = anoNascimento;

    // Nunca crie um método dentro da função
    // this.calcIdade = function() {
    //     console.log(2023 - this.anoNascimento);
    // };
};
Pessoa.prototype.calcIdade = function() {
    console.log(2023 - this.anoNascimento);
};

const usuario = new Pessoa('Felipe', 1991);

const Student = function(nome, anoNascimento, curso) {
// Essa chamada a seguir serve para pegar todos os atributos da classe pessoa
    Pessoa.call(this, nome, anoNascimento);
    this.curso = curso;
};

// Essa chamada a seguir serve para pegar todos os métodos da classe pessoa
Student.prototype = Object.create(Pessoa);
const student = new Student('Carlos', 1920, 'CC');

console.log(student);
