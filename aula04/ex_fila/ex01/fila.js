export default class Cliente{
    #itens =[]
    #inicio =0
    #fim = 0
    enqueue(elemento){
        this.#itens[this.#fim] = elemento 
        //incrementa o fim da fila, primeiro elemento vale 0, ai incrementa o proximo item ta no espaco 1
        this.#fim ++
        return console.log(`${elemento} entrou na fila`)


    }
    dequeue(){
        if(this.#fim ===0){
            return this.estaVazia()
        
        }
        const item = this.#itens[this.#inicio]
        delete this.#itens[this.#inicio]
        this.#inicio ++ 

        return console.log(`O cliente ${item} saiu da fila`)

        
        if(this.#inicio === this.#fim){
            this.#inicio = 0
            this.#fim = 0
        }

    }
    front(){
        if(this.#inicio ===0 ){
            return this.estaVazia()
        }
        return this.#itens[this.#inicio]
    }
    estaVazia(){
        if (this.#fim === this.#inicio){
            return console.log('Fila esta vazia ? True')
        }else{
            return console.log('Fila esta vazia ? False ')
        }
    }
    tamanho = () => this.#fim - this.#inicio
    limpar(){
        this.#fim =0
        this.#inicio=0
        this.#itens = []
    }
    teste = () => this.#itens
}