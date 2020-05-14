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

    display()
    {
     // Display name and balance.
     console.log("Name : " + this.name + ", " + "Balance : " + this.balance);
     
    }
}



var sanket = new Account("Sanket", 100000);
sanket.display();
sanket.deposit(100000);
sanket.display();




