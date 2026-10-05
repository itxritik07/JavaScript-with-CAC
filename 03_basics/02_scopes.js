// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a);
// console.log(b);
// console.log(c);


// Scope:
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("Inner: ", a); // block scope
}
// console.log(a);
// console.log(b);   
// console.log(c);


// Block and Global Scope:
let a = 100;
if (true) {
    let a = 10;
    // console.log(a); // runs first
}
// console.log(a); // runs second

// NOTE: checking Global Scope in browser vs here are two different things.


// --------------------------------------------------- PART TWO -------------------------------------------------------------


// Nested Scope: function inside function
function one() {
    const username = "Superman";

    function two() {
        const website = "www.superman_website.com";
        // console.log(username); // returns second
        // console.log(website); //  returns third
    }
    // console.log(website); // returns error out of scope
    // console.log(username); // returns first
    // two();
};
// one();

// if...else example:
if (true) {
    const username = "Batman";

    if (username === "Batman") {
        const website = " marvel";
        // console.log(username + website);
    };
    // console.log(website) // returns error out of scope
};
// console.log(username) // returns error out of scope


// Normal Funtion:
function addOne(num) {
    return num + 1;
};
// addOne(2);

// Function Expression: function holds under a variable
const addTwo = function (num) {
    return num + 2;
};
// addTwo(2);


// Concept of Hoisting:
// console.log(addThree(5)) // it works
// function addThree(num) {
//     return num + 1
// };

// console.log(addFour(5)) // we can't execute this function here before initialization
const addFour = function (num) {
    return num + 2
};