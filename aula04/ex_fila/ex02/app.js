export class Documento {
    #nome 
    #paginas
    constructor(_nome, _paginas) {
        this.#nome = _nome
        this.#paginas = _paginas
    }
}
export class Fila {
    #itens = []
    #fim = 0
    #inicio = 0

    adicionarDocumento(elemento) {

    }
}