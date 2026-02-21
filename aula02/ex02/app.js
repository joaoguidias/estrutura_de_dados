import Carro from "./carro.js"

const meuCarro = new Carro("Corsa", 2011)
let continuar = true

while (continuar) {
    let acao = prompt(`Velocidade atual:${meuCarro.valocidade}km/h.
    O que deseja fazer? 
    [A] Aelerar
    [B] Frear
    [S] Sair (Parar corrida)` ).toUpperCase();

    if (acao == "A") {
        meuCarro.acelerar();
        console.log("Voce acelerou 10km/h !")
    }
    else if (acao == "B") {
        meuCarro.frear();
        console.log("Voce freiou 5km/h")
    } else if (acao == "S") {
        continuar = false
        console.log("Corrida finalizada")
    } else {
        alert("opcao iválida! digite a,b ou s")
    }
    meuCarro.apresentar()
} 
console.log("fim")