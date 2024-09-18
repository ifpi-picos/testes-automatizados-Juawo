import ContaBancaria from "./ContaBancaria";

const conta1 = new ContaBancaria()
const conta2 = new ContaBancaria()

conta1.depositar(100)
conta2.depositar(100)
conta1.sacar(10)
conta1.transferir(10,conta2)

// Ver extrato
console.log(conta1.exibirExtrato())
console.log(conta2.exibirExtrato())