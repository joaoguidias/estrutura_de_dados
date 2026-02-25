import matematica from "./matematica.js"

const n1= 10
const n2=5
let resultadoSoma = matematica.somar(n1,n2)
let subtracao = matematica.subtrair(n1,n2)
let fatorial = matematica.fatorial(n1)

console.log(`Soma entre ${n1} + ${n2} = ${resultadoSoma}`)
console.log(`Subtração entre ${n1} - ${n2} = ${subtracao} `)
console.log(`Fatorial de ${n1} é ${fatorial}`)