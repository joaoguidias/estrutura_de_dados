import {carro, moto } from "./veiculos.js"

const meuCarro = new carro("Corsa", "Prata escuro", 2011)
const minhaMoto = new moto("Titan 160",'Preto', 2020)

meuCarro.apresentar()
meuCarro.buzinar()
minhaMoto.apresentar()
minhaMoto.buzinar()