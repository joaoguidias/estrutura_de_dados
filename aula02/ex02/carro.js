export default class Carro{
    modelo;
    ano;
    velocidade=30
   
    constructor (_modelo,_ano){
        this.modelo = _modelo
        this.ano= _ano
        
    }
    acelerar(){
        this.velocidade = this.velocidade + 10
    }
    frear(){
        this.velocidade = this.velocidade - 5 
    }
   apresentar(){
    console.log(`MODELO:${this.modelo} - ANO:${this.ano} - VELOCIDADE ATUAL: ${this.velocidade}km/h`)
   }
}