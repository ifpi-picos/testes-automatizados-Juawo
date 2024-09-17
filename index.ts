import ContaBancaria from "./ContaBancaria";

const conta1 = new ContaBancaria()
const conta2 = new ContaBancaria()

// Deposito
conta1.depositar(1000)
conta2.depositar(1000)

// Saque

conta1.sacar(20)
conta2.sacar(20)

// Transferência
conta1.transferir(500, conta2)
conta2.transferir(10, conta1)

// Ver saldo
console.log(conta1.consultarSaldo())
console.log(conta2.consultarSaldo())

// Ver extrato
console.log(conta1.exibirExtrato())
console.log(conta2.exibirExtrato())