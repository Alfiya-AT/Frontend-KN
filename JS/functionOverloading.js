// function add() {
//     console.log(10+20);
// }

// function add(a) {
//     console.log(a+20);
// }

// function  add(a,b) {
//     console.log(a+b);
// }

// add()
// add(10)
// add(10,20)

// function overloading is not supported in javascript and only the last executed function is retured 

// but function overloading can be implemented using closures


// spread operator
// ... = 0 - n =1D array

function add(...numbers){
    let sum=0;
    for (let num of numbers){
        sum+=num
    }
    return sum
}

console.log(add(10,20,30));
console.log(add(10,20));