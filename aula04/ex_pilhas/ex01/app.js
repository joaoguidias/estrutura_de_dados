import Torre from "./pilha1.js"

let torre1 = new Torre
torre1.adicionarTopo('a')
torre1.adicionarTopo(1)
torre1.adicionarTopo(10)
torre1.remover()
torre1.topo()
torre1.verificarVazia()
console.table(torre1.teste())