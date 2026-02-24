export default class cliente{ 
    nome; 
    idade;
    sexo;
    endereco;
    constructor(_nome,_idade,_sexo,_endereco){
        this.nome = _nome 
        this.idade = _idade 
        this.sexo = _sexo 
        this.endereco = _endereco
    }
    apresentarCli(){
        console.log(`NOME: ${ this.nome} | IDADE:${this.idade} | SEXO: ${this.sexo}`)
        
    }
}
