export default class contaBancaria{
    #saldo = 0
    valor;
    depositar(valor){
        this.#saldo +=valor
    }
    sacar(valor){
        this.#saldo -= valor
        console.log(`Valor do saque R${valor},00`)
    }
    verSaldo(){
        console.log(`Saldo atual: R$${this.#saldo},00`)
    }
}
