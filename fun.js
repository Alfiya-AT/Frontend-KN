function add(){
    let c = 10+20;
    console.log(c);
}

add();


function add(a,b){
    let c = a+b;
    console.log(c);
}


add(10,20);

function square(){
    let a = 10;
    let b = a*a;
    console.log(b);
}

// square of number

// 1. w/o i/p n op

function square(){
    let num=10;
    let res=num*num;
    console.log(res);
}
square();
// 2. wi i/p n wt op
function square(num){
    let res=num*num;
    console.log(res);
}
square(10);
// 3. w/o p w/i n op

function square(){
    let res=4;
    return res*res
}
// 4. w/o i/p wi n op

function square(num){
    return num*num;
}

let res=square(10);
console.log(res);