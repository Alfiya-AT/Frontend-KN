class CoffeeMachine {
    boilWater() {
        console.log("Boiling water");
    }
    addCoffee(){
        console.log("Adding coffee");
    }
    addMilk(){
        console.log("Adding milk");
    }
    makeCoffee(){
        this.boilWater();
        this.addCoffee();
        this.addMilk();
        console.log("Coffee is ready");
    }
}
const machine = new CoffeeMachine();
machine.makeCoffee();