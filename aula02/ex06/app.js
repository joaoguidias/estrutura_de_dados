import Endereco from "./endereco.js"
import cliente from "./cliente.js"

const endereco1 = new Endereco('Dona virginia Ferraz de Almeida Prado', 'Jardim São Francisco', 274)
const cliente1 = new cliente('Joao',19,"Masculino", Endereco)

endereco1.apresentarEnde()
cliente1.apresentarCli()