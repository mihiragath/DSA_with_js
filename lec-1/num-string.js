a = 10;
console.log(a);
var a; //ans = 10
//but using let or const it will not work we first initialise the variable then use it

let b = 20;
let c = 30;
console.log("sum of no is:" + b + c); //ans = sum of no is:2030
//to get the sum we need to use brackets
//nuber + integer = string concatenation
console.log("sum of no is:" + (b + c)); //ans = sum of no is:50
console.log(b + c + " is the sum of b and c"); //ans = 50 is the sum of b and

console.log("1" - 1); //ans = 0
console.log("1" + 1); //ans = 11
console.log("1" * 0); //ans = 0
console.log("1" / 1); //ans = 1

const prompt = require("prompt-sync")();
let d = prompt("Enter a number"); //prompt will take input as string
d = Number(d); //convert string to number
console.log(d);
//if we pass a string that cannot be converted to a number, it will return NaN

//swapping
let x = 10;
let y = 20;
//method 1:-
let temp = x;
x = y;
y = temp;
console.log("x is: " + x + " y is: " + y); //ans = x is: 20 y is: 10
//method 2:-
x = x + y; //x = 30
y = x - y; //y = 10
x = x - y; //x = 20
console.log("x is: " + x + " y is: " + y); //ans = x is: 20 y is: 10
//method 3:-
[x, y] = [y, x]; //destructuring
//this will swap the values of x and y
console.log("x is: " + x + " y is: " + y); //ans = x is: 10 y is: 20

let m = 7;
let n = 3;
let result = m % n; //modulus operator
let result2 = m / n; //division operator
console.log("The result of " + m + " divided by " + n + " is: " + result2); //ans = The result of 7 divided by 3 is: 2.333333333333333
//to get exact no without points we use Math.floor() or Math.ceil()
console.log("The remainder of " + m + " divided by " + n + " is: " + result); //ans = The remainder of 7 divided by 3 is: 1
console.log(342 % 10); //ans = 2 we give last digit of the number
console.log(342 / 10); //ans = 34.2 we remove last digit of the number
console.log(342 % 100); //ans = 42 we give last two digits of the number
console.log(Math.floor(342 / 100)); //ans = 3 we remove last two

console.log(12 == 12); //ans = true
console.log(12 == "12"); //ans = true
console.log(12 === "12"); //ans = false

console.log(Math.round(12.5)); //ans = 13
console.log(Math.ceil(12.5)); //ans = 13
console.log(Math.floor(12.5)); //ans = 12
console.log(Math.trunc(12.5)); //ans = 12
console.log(Math.abs(-12.5)); //ans = 12.5
console.log(Math.max(12, 15, 20)); //ans = 20
console.log(Math.min(12, 15, 20)); //ans = 12
console.log(Math.pow(2, 3)); //ans = 8 (2 raised to the power of 3)
console.log(Math.sqrt(16)); //ans = 4 (square root of 16)
console.log(Math.random()); //ans = random number between 0 and 1
console.log(Math.floor(Math.random() * 100)); //ans = random number between 0 and 99
console.log(Math.cbrt(27)); //ans = 3 (cube root of 27)

//random number between 1 and 100
console.log(Math.trunc(Math.random() * 9000 + 1000)); //ans = random number between 1000 and 9999
//this will give us a random 4 digit number

let str = 12.8679;
console.log(str.toFixed(2)); //ans = 12.87 (rounds to 2 decimal places)
console.log(str.toPrecision(4)); //ans = 12.87 (rounds to 4 significant figures)
console.log(str.toExponential(2)); //ans = 1.29e+1
