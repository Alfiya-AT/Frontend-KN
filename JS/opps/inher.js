// class Employee {
//     constructor(name, age, role) {
//         this.name = name;
//         this.age = age;
//         this.role = role;
//     }
//     display() {
//         console.log(this.name);
//         console.log(this.age);
        
//     }
//     designation (){
//         console.log(this.role);
//     }
// }

// class Developer extends Employee {
//     work(){
//         console.log("i do coding");
//     }  
// }

// class Tester extends Employee {
//     work(){
//         console.log("i do debugging");
//     }  
// }

// let dev = new Developer("Alfiya", 20, "Developer");
// dev.display();
// dev.work();
// dev.designation();

// let tester = new Tester("Ali", 23, "Tester");
// tester.display();
// tester.work();
// tester.designation();




//method overriding

class Parent {
    marry() {
        console.log("i am married");
    }
}

class Child extends Parent {
    marry() {
        console.log("i am not married");
    }
}

let child = new Child();