const userEmail = ["jinn@gmail.com"];
// const userEmail = [];

if (userEmail) {
    console.log("Got the email")
}
else {
    console.log("User don't have email")
}


// falsy values: false, 0, -0, BigInt 0n, "", null, undefined,  NaN
// truthy values: "0", "false", " ", [], {}, function(){}


// 🚩 way to check an array:
// if (userEmail.length === 0) {
//     console.log("Array is empty ")
// }
// else{
//     console.log("Something in array: ", userEmail)
// }


// 🚩 way to check an object:
// const emptyObj = {};
// const emptyObj = {
//     "name": "John",
//     "age": 30,
//     "city": "New York"
// };

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty")
// }
// else{
//     console.log("Something in object: ", emptyObj)
// }


// 🚩 for interviews and competitive programming:
// false == 0
// true
// false == ''
// true
// 0 == ''
// true


// 🚩 Nullish Coalescing Operator (??) : null undefined
// let val1;
// // val1 = 5 ?? 10;
// // val1 = null ?? 10;
// // val1 = undefined ?? 10;
// val1 = null ?? 10 ?? 10;
// console.log(val1)


// 🚩 Ternary operator:
const priceOfCoffee = 50;
priceOfCoffee <= 80 ? console.log("Coffee is under budget") : console.log("Coffee is over budget")
