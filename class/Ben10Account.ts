import { DioAccount } from "./DioAccount"

export class Ben10Account extends DioAccount {
    
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
  
  deposit_mais10 = (adicionar: number): void =>{
    if(this.validateStatus()){
      this.deposit(adicionar + 10)
      console.log('Voce depositou e te dei mais 10 só de meme')
    }
  }

}