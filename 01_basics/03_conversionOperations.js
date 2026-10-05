// let score = 33;
// let score = "33abc";
// let score = null;
// let score = undefined;
// let score = true;
// let score = false;

// console.log(typeof score) 
// console.log(typeof(score)) // second way



// 1. Number conversion:
// let score = "33abc"; // returns NaN (Not a Number) 
// let score = null; // returns 0
// let score = undefined; // returns NaN (Not a Number)
// let score = true; // returns 1
// let score = false; // returns 0
// let score = "adam"; // returns NaN (Not a Number)

// let valueInNumber = Number(score); // mostly used in react or typescript
// console.log(valueInNumber);
// console.log(typeof valueInNumber);



// 2. Boolean conversion:
// let isLoggedIn = 1; // true
// let isLoggedIn = 0; // false
// let isLoggedIn = ""; // false
// let isLoggedIn = "adam"; // true

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);



// 3. String conversion:
// let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(stringNumber)
// console.log(typeof stringNumber);



// ----------------------------------------------- Operations -----------------------------------------------


// Value change in negative
// let value = 3;
// let negValue = -value; // returns -3
// console.log(negValue);


// let str1 = "hello";
// let str2 = " friend";
// let str3 = str1 + str2;
// console.log(str3);


// Complex situations:
// console.log("1" + 2) // returns 12
// console.log(1 + "2") // returns 12
// console.log("1" + 2 + 2 ) // returns 122
// console.log(1 + 2 + "2" ) // returns 32 - because converting into preffered type (string or number) in EcmaScript


// Not recommended
// console.log(true); // returns true
// console.log(+true); // returns 1
// console.log(true+); // returns error
// console.log(+"");  // returns 0

// Not recommended
// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;


// Prefix: the value is incremented first & Postfix: the value is incremented afterwards.
let gameCounter = 100;
gameCounter++;
// console.log(gameCounter);


let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`); // x:4, y:3

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`); // a:4, b:4
