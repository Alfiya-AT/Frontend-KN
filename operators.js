// let a=10;
// let b=20;

// document.write("Arithmetic Operators <br> ");
// document.write("a + b = " + (a+b) + "<br>");
// document.write("a - b = " + (a-b) + "<br>");
// document.write("a * b = " + (a*b) + "<br>");
// document.write("a / b = " + (a/b) + "<br>");
// document.write("a % b = " + (a%b) + "<br>");
// document.write("a ** b = " + (a**b) + "<br>");

// let x=8;
// document.write("x++ = " + (x++) + "<br>");
// document.write("x = " + (x) + "<br>");

// let y=4;
// document.write("y-- = " + (y--) + "<br>");
// document.write("y = " + (y) + "<br><br><br>");


// // document.writeln("Assignment operators / Shorthand operators");
// // document.writeln("<br>");
// // let c = 5;
// // document.writeln(c);// 5
// // document.writeln("<br>");
// // document.writeln(c+=3);//c = c+3; 8
// // document.writeln("<br>");
// // document.writeln(c-=3);//c = c-3; 5
// // document.writeln("<br>");
// // document.writeln(c*=3);//c = c*3; 15
// // document.writeln("<br>");
// // document.writeln(c/=3);//c = c/3; 5
// // document.writeln("<br>");
// // document.writeln(c%=3);//c = c%3; 2
// // document.writeln("<br>");



// document.write("Assignment Operators  / Short hand Operators <br> ");
// let c=5;
// document.write("c = " + c + "<br>");
// document.write("c += 3 => c = c + 3 => " + (c += 3) + "<br>");
// document.write("c -= 2 => c = c - 2 => " + (c -= 2) + "<br>");
// document.write("c *= 4 => c = c * 4 => " + (c *= 4) + "<br>");
// document.write("c /= 2 => c = c / 2 => " + (c /= 2) + "<br>");
// document.write("c %= 3 => c = c % 3 => " + (c %= 3) + "<br>");
// document.write("c **= 2 => c = c ** 2 => " + (c **= 2) + "<br><br><br>");

// // let a = 10;
// // let b = 5;
// // document.writeln("Arithmetic operator");
// // document.writeln("<br>");
// // document.writeln(a+b);// 15
// // document.writeln("<br>");
// // document.writeln(a-b);// 5
// // document.writeln("<br>");
// // document.writeln(a*b);// 50
// // document.writeln("<br>");
// // document.writeln(a/b);// 2
// // document.writeln("<br>");
// // document.writeln(a%b);// 0
// // document.writeln("<br>");
// // document.writeln(a**b);// 100000
// // document.writeln("<br>");
// // let x = 8;
// // document.writeln(x++); //8.  mem - 9
// // document.writeln(x);// 9
// // document.writeln("<br>");
// // let y = 4;
// // document.writeln(y--);// 4
// // document.writeln(y);// 3
// // document.writeln("<br>");


// document.write("Relational Operators <br> ");
// let d=10;
// // imp *** diff bw =,==,===
// // assignment operator assigns value to variable
// let e=20;
// // comparision operator checks only values not data type
// document.write("d == e => " + (d == e) + "<br>");
// // check values as well as data type 
// document.write("d === e => " + (d === e) + "<br>");


// document.write("d != e => " + (d != e) + "<br>");
// document.write("d < e => " + (d < e) + "<br>");
// document.write("d > e => " + (d > e) + "<br>");
// document.write("d <= e => " + (d <= e) + "<br>");
// document.write("d >= e => " + (d >= e) + "<br><br><br>");

// let m = 5;//number
// let n = "5";//string
// let o = "3";//string
// document.writeln(m==n);// values true
// document.writeln("<br>");
// document.writeln(m===n);//false - values + datatype - strictly equalto
// document.writeln("<br>");
// document.writeln(m!=o);// true - values
// document.writeln("<br>");
// document.writeln(m!==o);//true - values + datatype - strictly not eqval
// document.writeln("<br>");
// document.writeln(m<o);//false
// document.writeln("<br>");
// document.writeln(m<=o);//false
// document.writeln("<br>");
// document.writeln(m>o);//true
// document.writeln("<br>");
// document.writeln(m>=o);//true
// document.writeln("<br>");


// let age=25;
// console.log("bitwise operators <br> ");
// console.log("age & 1 => " + (age & 1) + "<br>"); // bitwise AND
// console.log("age | 1 => " + (age | 1) + "<br>"); // bitwise OR
// console.log("age ^ 1 => " + (age ^ 1) + "<br>");    // bitwise XOR      

// document.write("Logical Operators <br> ");
// console.log("age > 18 && age < 30 => " + (age > 18 && age < 30) + "<br>"); // logical AND
// console.log("age < 18 || age > 30 => " + (age < 18 || age > 30) + "<br>"); // logical OR
// console.log("check output on console ")

// document.write("Ternary Operator <br> ");
// let result = (age >= 18) ? "Adult" : "Minor";
// console.log("result => " + result + "<br>"); // Ternary operator
// document.write(result);



// document.write("Type operator <br> ");
// let p=10;
// document.write("typeof p => " + (typeof p) + "<br>"); // type operator
// let q="Hello";
// document.write("typeof q => " + (typeof q) + "<br>");
// let r=true;
// document.write("typeof r => " + (typeof r) + "<br>");

// console.lof(typeof "Hello")

// console.log([1,2,3] instanceof Array); // true
// console.log([1,2] instanceof Object); // true

// ====================14/5/26====================

console.log(5+10); // 15
console.log("5"+10); // "510" - string concatenation
console.log(5+"10");








// =======================18/5/26========================
// int+srt=str
// console.log(1+"2"+3);//123
// console.log(1+2+"3");//33
// // due to - 3 will behave like int 
// console.log("3"-1);//2
// // str + int = str
// console.log("3"+1);//31

// console.log("3"*"1");//3


// console.log(0==false); // true 
// console.log(0===false); // false - data type is different

// console.log(null == undefined); // true
// console.log(null === undefined); // false - data type is different

// console.log(NaN == NaN); // true
// console.log(NaN === false); // false - data type is different

// let a=5
// console.log(a++); // 5
// console.log(a); // 6

// let b=5
// console.log(++b); // 6

// let x=5
// let y=x++ + ++x;
// console.log(y); // 5 + 7 = 12

// console.log(true + true);//2
// console.log(true + false);//1
// console.log(true - false);//1
// console.log(true * false);//0
// console.log(true / false);//Infinity

// console.log([] == false);//true
// console.log(5 && 10);//10
// console.log(0 || 100);//100
// console.log(!"hello");//false
// console.log(!0);//true
// console.log([] == ![]); // true

// console.log("10"*"2");
// console.log("10"/2);
// console.log("hello"*2);//NaN Not A Number
// console.log(typeof NaN); // number
// console.log(typeof null); // object
// console.log([]+[]);//""
// console.log([]+{});//"[object Object]"
// console.log({}+[]);//0

// // {}=> Object
// let c="5";
// let d=2;
// console.log(c-d+c);//35
// console.log([]==![]);// true
// console.log([]==0); // true 
// console.log([1,2]+[3,4]);// "1,2,3,4"
// console.log("2">"12");// true - lexicographical comparison
// console.log(2>"12");// false - numeric comparison
// console.log(Boolean("false"));// true
// console.log(Boolean("")); // false
// console.log(c==d); // true
// console.log(c===d); // false

// console.log(100/"10");//10
// console.log(true == "1");//true
// console.log(true === "0");//true
// console.log(false == "0");//false

// console.log(1<2<3);//true
// console.log(3>2>1);//false

// console.log(+"5");// 5
// console.log(+"hello"); // NaN

// let p=10;
// console.log(p+=5);// p = p + 5 => 15

// let q=10;
// console.log(q*=5);// q = q * 5 => 50

// console.log(5**3); // 125

// console.log(typeof typeof 1);// string : "number" => "string"
// console.log([] instanceof Array); // true
// console.log([] instanceof Object); // true

// console.log([] == ""); // true
// console.log([0] == 0); // false

// console.log([1] == 1); // true
// console.log([1] === 1); // false