class BankBalance {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }
    getBalance() {
        return this.#balance;
    }
    deposit(amt){
        this.#balance += amt;
        console.log(`Deposited ${amt} and balance is ${this.#balance}`);
    }
}

let bank = new BankBalance(1000);
bank.deposit(500);
console.log(bank.getBalance());