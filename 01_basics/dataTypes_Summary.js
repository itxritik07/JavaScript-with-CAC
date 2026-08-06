// Primitive datatypes - call by value
// 7 types: Null, Number, String, Symbol, Undefined, Boolean, BigInt

// Symbol example
const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId)


// BigInt example
const bigNumber = 1324123412341234n;

// Refrence type (Non-Primitive datatypes) - call by refrence
// Array, Objects, Functions
const myHeros = ["Iron Man", "Spiderman", "Thor", "Daredevil"];

let myObj = {
    name: "Adam",
    age: 23,
}

const myFunction = function(){
    // console.log("Hello World");
}



// ********************** Memory **********************

// Stack (Primitive) - you get the copy of declared variable
// Heap (Non-Primitive) - you get the refrence of original value

let myYtName = "codewithadam";
let anotherName = myYtName;
anotherName = "coderadam";

// console.log(myYtName)
// console.log(anotherName);


let userOne = {
    email : "userone@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "admin@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
