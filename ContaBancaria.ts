export default class ContaBancaria {
  private numeroConta : Number;
  private agencia = 1;
  private saldo = 0;
  private extrato : string[] = []

  public getNumeroConta(){
    return this.numeroConta
  }
  
  public depositar(valor : number,transferencia = false){
    if(valor > 0){
      this.saldo += valor
      const dataDeposito = new Date()
      !transferencia && this.registarOperação(`Depósito - ${dataDeposito.toLocaleDateString("pt-BR")}`)
    } else {
      console.log("Valor invalido, deposite um valor maior que 0.")
    }
  }
  public sacar(valor : number){
    if(valor <= this.saldo && valor > 0){
      this.saldo -= valor
      const dataSaque = new Date()
      this.registarOperação(`Saque - ${dataSaque.toLocaleDateString("pt-BR")}`)
    } else {
      console.log("Saldo insuficiente para o saque.")
    }
  }
  public transferir(valor : number, contaDestino : ContaBancaria){
    if(valor <= this.saldo){
      this.saldo -= valor
      contaDestino.depoistar(valor,true)
      const dataTransferencia = new Date()
      this.registarOperação(`Transferência - ${dataTransferencia.toLocaleDateString("pt-BR")}`)
      contaDestino.registarOperação(`Recebimento de Transferência - ${dataTransferencia.toLocaleDateString("pt-BR")}`)
    }
  }

  public consultarSaldo(){
    return this.saldo
  }
  
  private registarOperação(descricao : string){
    this.extrato.push(descricao)
  }

  public exibirExtrato(){
    return this.extrato
  }
}