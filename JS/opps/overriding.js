// method overriding => run time polymorphism
class Parent {
    constructor(name) {
        this.name = name;
    }
    marry() {
        console.log("marry at 28");
    }
}
class child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    marry() {
        console.log("marry at 20");
    }
}
let child = new child("Alfiya", 22);
child.marry();