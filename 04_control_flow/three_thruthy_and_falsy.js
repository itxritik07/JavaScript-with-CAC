// Falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy values: "0", "false", " ", [], {}, function(){}



// const userEmail = "marvel@gmail.com";
// const userEmail = "";
// const userEmail = " ";
// const userEmail = [];
// const userEmail = [""];
// const userEmail = ["batman@marvel.com"];
// if (userEmail) {
//     console.log("Got the email")
// }
// else {
//     console.log("User don't have email")
// }



// Way to check an Array if it is empty:
// const userEmail = [];
// if (userEmail.length === 0) {
//     console.log("Array is empty ", userEmail)
// }



// Way to check an Object if it is empty:
// const emptyObj = {};
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty", emptyObj)
// }



// IQ: always returns true
// false == 0
// false == ''
// 0 == ''



// Nullish Coalescing Operator (??) : made for null or undefined
let val1;
// val1 = 5 ?? 10; // returns 5
// val1 = null ?? 10; // returns 10
// val1 = undefined ?? 10; // returns 10
val1 = null ?? 10 ?? 20; // returns 10 , assigns only first value 
// console.log(val1);



// Ternary operator: condition ? true : false
// const priceOfCoffee = 50;
// priceOfCoffee >= 40 ? console.log("Coffee is under budget") : console.log("Coffee is over budget");