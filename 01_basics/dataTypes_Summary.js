// 1. Primitive datatypes: call by value
// 7 types: Null, Number, String, Symbol, Undefined, Boolean, BigInt


// Symbol example: specially declaring Sybmbol keyword
const id = Symbol("123"); 
const anotherId = Symbol("123");
// console.log(id === anotherId) // returns false


// BigInt example: n - automatically changes into BigInt
const bigNumber = 1324123412341234n;


// 2. Refrence type (Non-Primitive datatypes) - call by refrence
// Note: JavaScript is dynamically typed language
// Array, Objects, Functions (master these, also browse events)

const myHeros = ["Iron Man", "Spiderman", "Thor", "Daredevil"];

let myObj = {
    name: "Adam",
    age: 23,
};

// Declaring function as a variable:
const myFunction = function(){
    // console.log("Hello World");
};

console.log(typeof myFunction) // returns function, but called as object function or functoin object 


// ********************** Memory **********************

// Stack memory (Primitive) - you get the copy of declared variable - Null, Number, String, Symbol, Undefined, Boolean, BigInt
// Heap memory (Non-Primitive) - you get the refrence of original value - Array, Objects, Functions

let myYtName = "codewithadam";
let anotherName = myYtName;
anotherName = "coderadam";
// console.log(myYtName) // remains same value
// console.log(anotherName) // value changed


let userOne = {
    email : "userone@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "admin@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);