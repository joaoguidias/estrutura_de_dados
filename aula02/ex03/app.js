import Animal from "./animal.js";
import Gato from "./gato.js";
import Cachorro from "./cachorro.js"

const meuPet = new Cachorro("Luna",20)
const meuPet2 = new Cachorro("Socrates",25)
meuPet.apresentar();
meuPet.som();
meuPet2.apresentar();
const meuGato = new Gato("Xica",4)
meuGato.som()
meuGato.apresentar()