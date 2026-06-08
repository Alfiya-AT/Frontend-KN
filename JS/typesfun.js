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



// adding 3 num

let add1=function(a,b,c){
    console.log(a+b+c);
}
add1(2,3,4)

let add2= (a,b,c) => console.log(a+b+c);
add2(23,34,33);

(function(a,b,c){
    console.log(a+b+c);
})(23,32,94);