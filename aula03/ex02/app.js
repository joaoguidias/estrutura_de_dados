const MeuArray = require('./meuArray.js');

let arr = new MeuArray;
arr.adicionar('Gabriel')
arr.adicionar('Joao')
arr.adicionar('Alice')
arr.adicionar('Fabio')
arr.mostrar()
arr.mostrarfun(0)

console.log('Limpandos todos os registros do vetor...')
arr.limpar()
arr.mostrar()
arr.mostrarfun(1)