class Pessoa{ 
    nome;
    idade;
    constructor(nomeInformado, idadeInformada){
        this.nome = nomeInformado;
        this.idade = idadeInformada;
    }
    apresentar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}
const pessoa1 = new Pessoa("Joao",19)
const pessoa2 = new Pessoa("Alice",20)

pessoa1.apresentar();
pessoa2.apresentar();