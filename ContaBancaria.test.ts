import { beforeEach, describe, expect, test } from "bun:test";
import ContaBancaria from "./ContaBancaria.ts";


describe("Testando classe ContaBancaria", () => {
    let conta1 : ContaBancaria
    let conta2 : ContaBancaria

    beforeEach(() => {
        conta1 = new ContaBancaria()
        conta2 = new ContaBancaria()
    })

    test("Testando depositar valor positivo", () => {
        conta1.depositar(100);
        conta2.depositar(100);
        expect(conta1.consultarSaldo()).toBe(100)
        expect(conta2.consultarSaldo()).toBe(100)
    })
    
    test("Testando depositar valor negativo", () => {
        conta1.depositar(-100);
        expect(conta1.consultarSaldo()).toBe(0)
    })
    
    test("Testando sacar valor positivo", () => {
        conta1.depositar(100);
        conta1.sacar(10);
        expect(conta1.consultarSaldo()).toBe(90)
    })

    test("Testando sacar valor negativo", () => {
        conta1.sacar(-10);
        expect(conta1.consultarSaldo()).toBe(0)
    })
    
    test("Testando sacar valor maior que o saldo da conta", () => {
        conta1.sacar(5000);
        expect(conta1.consultarSaldo()).toBe(0)
    })
    
    test("Testando transferência ", () => {
        conta1.depositar(100);
        conta2.depositar(100);
        conta1.transferir(20,conta2)
        expect(conta1.consultarSaldo()).toBe(80)
        expect(conta2.consultarSaldo()).toBe(120)
    })

    test("Testando extrato ", () => {
        conta1.depositar(100)
        conta2.depositar(100)
        conta1.sacar(10)
        conta1.transferir(10,conta2)
        let data = new Date()
        let retorno = [`Depósito - ${data.toLocaleDateString("pt-BR")}`,`Saque - ${data.toLocaleDateString("pt-BR")}`,  `Transferência - ${data.toLocaleDateString("pt-BR")}`]
        expect(conta1.exibirExtrato()).toEqual(retorno)
    })

})