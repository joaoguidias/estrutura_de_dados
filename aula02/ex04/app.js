import contaBancaria from "./contaBancaria.js";

const conta = new contaBancaria()

conta.depositar(100)
conta.depositar(300)
conta.sacar(100)
conta.verSaldo();