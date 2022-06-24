class Account{
    min_bal=500
    constructor(name,mobile,address){
        this.acc_Name=name
        
        
    }
}
class Savings_Account extends Account{
    min_bal=8000

constructor(id,Name,mobile,address,amount ){
    super(Name,mobile,address)
    this.acc_Id=id
}
}let s1=new Savings_Account(23455456,"kavi",3334455355,"kuppam street",4000)
console.log(s1)
class Current_Account extends Account{}