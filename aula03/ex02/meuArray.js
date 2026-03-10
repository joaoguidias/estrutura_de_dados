class MeuArray{
    constructor(){

    }
    #itens =[]
    #tamanho = 0
    adicionar(elemento){
        this.#itens[this.#tamanho] = elemento
        this.#tamanho ++

    }
    remover(){
        if(this.#tamanho == 0){
            return undefined
        }
        const ultimoItem = this.#itens[this.#tamanho -1];

        delete this.#itens[this.#tamanho -1]
        console.log(`O ultimo valor (${ultimoItem}) foi excluido!`)
    }
    
    limpar(){
        this.#itens = ' '
        this.#tamanho = 0

    }
    obterElemento(indice){
        if(indice < 0 || indice >= this.#tamanho){
            return undefined
        }
        console.log(`${this.#itens[indice]}`)
    }
    mostrarfun(indice){
        if (indice < 0 || indice >= this.#tamanho){
            return console.log('Funcionario nao localizado')
        }
        console.log(`${this.#itens[indice]}`)
    }
    mostrar(){
        console.table(this.#itens)  
    }
}
module.exports = MeuArray


//adicionar 
//remover 
//obter element 
//tamanho arrya 
//limpar 