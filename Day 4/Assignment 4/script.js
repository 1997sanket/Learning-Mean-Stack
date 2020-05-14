class Account 
{
    constructor(name,balance)
    {
        this.name = name;
        this.balance = balance;
    }

    deposit(x)
    {
        this.balance = this.balance + x;
    }


}

class CurrentAccount extends Account
{
    constructor(name,balance)
    {
        super(name,balance)     //Calls Parent class's constructor.
    }

    withdraw(x)
    {
        this.balance = this.balance - x;
    }

    show()
    {   
        console.log("Name : " + this.name + ", " + "Balance : " + this.balance);
    }

}



let sanket = new CurrentAccount("Sanket", 100000);
let shraddha = new CurrentAccount("Shraddha", 100000);


sanket.deposit(100000);
shraddha.deposit(100000);
console.log("After depositing");
sanket.show();
shraddha.show();


sanket.withdraw(50000);
shraddha.withdraw(50000);
console.log("After withdrawing");
sanket.show();
shraddha.show();






