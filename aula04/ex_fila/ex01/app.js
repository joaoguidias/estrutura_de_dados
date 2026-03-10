import Cliente from "./fila.js"

let fila1 = new Cliente

fila1.enqueue(1)
fila1.enqueue(2)
fila1.enqueue(3)
fila1.dequeue()
console.table(fila1.teste())
fila1.estaVazia()
