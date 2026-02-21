export default class Animal{
    especie;
    peso;
    constructor(_especie,_peso){
        this.especie = _especie
        this.peso = _peso
    }
    apresentar(){
        console.log(`Animal da epsecie ${this.especie} pesando ${this.peso} kg`)
    }
    som(){
        console.log("Som générico de animal génerico")
    }
}
const bixo = new Animal("Bixo",20);
bixo.apresentar();
bixo.som();