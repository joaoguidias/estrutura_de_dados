class MeuArray{
    constructor(){

    }
    #itens =[]; // Cria o array itens onde sera armazenado os dados 
    #tamanho =0 //Tamnho do array

    adicionar(elemento){
        this.#itens[this.#tamanho] = elemento // NO ARRAY ITENS NA POSICAO 0 VAI REVEBER ELEMENTO
        
        this.#tamanho++ 
    }

    remover(){
        if(this.#tamanho ===0){ //SE O ARRAY TIVER 0 DE TAMANHO NAO DA PRA REMOVER NADA, RETORNA UNDEFINED
            return undefined 
        }

        const ultimoItem = this.#itens[this.#tamanho - 1] //CRIA VARIAVEL DO ELEMENTO ULTIMO ITEM

        delete this.#itens[this.#tamanho -1]; //COMANDO DELETE deleta o ultimo indice do array
        console.log(`O ultimo valor deletado foi ${ultimoItem}`)

    }

    obterElemento(indice){
        if(indice <0 || indice >= this.#tamanho){ //sE O INDICE DIGITADO FOR MENOR QUE 0 OU INDICE FOR MAIOR OU IGUAL A TAMANHO FACA
            return undefined;

        }
        return console.log(this.#itens[indice])
    }

    tamanhoArray(){
        console.log(this.#tamanho);
    }
    limpar(){
        this.#itens = ' '
        this.#tamanho =0 


    }
    editar(indice, novoValor){
         
    }
    obterIndice(valor){
        
    }
    exibir(){
        console.table(this.#itens)
    }
}

module.exports = MeuArray;