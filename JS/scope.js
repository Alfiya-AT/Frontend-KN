let globalVar = "I'm a global variable";

function outerFunction() {
    let outerVar = "I'm a local variable";
    
    function innerFunction() {
        let innerVar = "I'm an inner variable";
        console.log(globalVar);
        console.log(outerVar);
        console.log(innerVar);
    }
    innerFunction();
}
outerFunction();