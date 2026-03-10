export default class Bau{
    #itens = []
    #tamanho = 0

    adicionarTopo(elemento){
        this.#itens[this.#tamanho] = elemento

        this.#tamanho ++ 

    }
    remover(){
        if (this.#tamanho ===0){
            return undefined
        }
        const item = this.#itens[this.#tamanho - 1]

        delete this.#itens[this.#tamanho -1]

        return console.log(`O valor deletado foi ${item}`)
    }
    topo(){
        if(this.#tamanho ===0){
            undefined
        }
        return console.log(`O valor do ultimo item é ${this.#itens[this.#tamanho -1]}`)
    }
    bauVazio(){
        if(this.#tamanho ===0){
            return console.log(`Bau vazio ? True `)
        }else{
            return console.log('Bau vazio ? False')
        }
    }


    teste = () => this.#itens
}