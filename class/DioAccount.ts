export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  //INULTIZADO POR UM DOS DESAFIOS
  /* setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  } */

  getName = (): string => {
    return this.name
  }

  getBalance = (): number => {
    return this.balance
  }

  deposit = (adicionar: number): void => {
    if(this.validateStatus()){
      this.balance += adicionar
      console.log('Voce depositou')
    }
  }

  withdraw = (tirar: number): void => {
    if(this.validateStatus() && this.balance >= tirar){
      this.balance -= tirar
      console.log('Voce sacou')
    }
    else{
      console.log('Conta inválida ou sem dinheiro suficiente na conta...')
    }
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
