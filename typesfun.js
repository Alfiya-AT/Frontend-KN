// function declaration 
function greet() {
    console.log("Function declaration");
}
greet();

// function expression

let greet1 = function(){
    console.log("function expression");
}
greet1();
// Arrow function 

let greet2 = () => {
    console.log("Arrow function");
}
greet2();
// IIFE Immediately Invoked Function Expression  / Anonymous function 
// *****imp
(function(){
    console.log("IIFE");
})();
