export default class Torre {
    #itens = [];
    #tamanho = 0;

    adicionarTopo(elemento) {
        this.#itens[this.#tamanho] = elemento;
        this.#tamanho++;
    }

    remover() {
        if (this.#tamanho === 0) {
            return undefined;
        }
        
        const item = this.#itens[this.#tamanho - 1];
        delete this.#itens[this.#tamanho - 1];
        this.#tamanho--;
        
        return item; // É importante retornar o item removido
    }

    topo() {
        if (this.#tamanho === 0) {
            return undefined;
        }
        return this.#itens[this.#tamanho - 1];
    }

    verificarVazia() {
        return this.#tamanho === 0; 

    }

    teste = () => this.#itens;
}