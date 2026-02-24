export default class Endereco{
    constructor(_rua,_bairro,_numero){
        this.rua = _rua
        this.birro= _bairro
        this.numero = _numero
    }
    apresentarEnde(){
        console.log(`RUA:${this.rua} | BAIRRO:${this.birro} | NÚMERO: ${this.numero}`)
    }
}
