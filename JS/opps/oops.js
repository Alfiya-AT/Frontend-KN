// // creating object


// // direct creation
// let student = {
//     name: "Alfiya",
//     age: 20,

    
//     study(){
//         console.log("student studies");

//     }
// };

// console.log(student.name);
// console.log(student.age);
// student.study();






// //using method
// class Student{
//     name="Ali"
//     age=23

//     study(){
//         console.log("Studies");
//     }
// }
// let s= new Student();
// console.log(s.name);
// console.log(s.age);
// s.study();



// constructor

class Student1{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    study(){
        console.log("Studies");
    }
}
let s1= new Student1("Ali",23);
console.log(s1.name);
console.log(s1.age);
s1.study();


