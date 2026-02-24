export class moto{
    modelo;
    ano;
    cor;
    constructor(_modelo, _ano,_cor){
        this.modelo = _modelo 
        this.ano = _ano
        this.cor = _cor
    }
    buzinar(){
        console.log("Fon fon!")
    }
    apresentar(){
        console.log(`MODELO:${this.modelo} | ANO:${this.ano} | COR: ${this.cor}`)
    }
}
export class carro{
    modelo;
    cor;
    ano;
    constructor(_modelo,_cor,_ano){
        this.modelo = _modelo
        this.cor = _cor
        this.ano = _ano
    }
    buzinar(){
        console.log("Bi bi!")
    }
    apresentar(){
        console.log(`MODELO:${this.modelo} | ANO:${this.ano} | COR: ${this.cor}`)
    }
}

