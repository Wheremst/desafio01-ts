//Modificações feitas por Wheremst (a.k.a Bruno Rabelo)

import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { Ben10Account } from './class/Ben10Account'

//PERSON
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount.getBalance())
peopleAccount.deposit(100)
peopleAccount.withdraw(69)
console.log(peopleAccount.getBalance())

console.log("\n")
//COMPANY
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.getBalance())
companyAccount.deposit(100)
companyAccount.withdraw(69)
console.log(companyAccount.getBalance())
companyAccount.getLoan(69)
console.log(companyAccount.getBalance())

console.log("\n")
//BEN 10
const ben10Account: Ben10Account = new Ben10Account('BEN', 20)
console.log(ben10Account.getBalance())
ben10Account.deposit_mais10(100)
ben10Account.withdraw(69)
console.log(ben10Account.getBalance())
