// this: refers to the current context or value
const user = {
    username: "Rolex",
    price: 999,
    welcomeMessage: function () {
        // console.log(`${username}, welcome to website`); // returns error
        console.log(`${this.username}, welcome to website`);
        // console.log(this); // returns user's Object {}
    }
};
// user.welcomeMessage();
// user.username = "Samay"; // here we change context
// user.welcomeMessage();
// console.log(this); // returns epmty {} in Node environment, but in browser it gives you window (Prereqset)



// this keyword works in function ?
function chai() {
    let username = "Batman";
    // console.log(this);
    console.log(this.username); // returns undefined, because this keyword works only in objects not in functions, for here remember
};
// chai();


// also Check in Funtion Expression:
// const chai = function () {
//     let username = "Spiderman";
//     console.log(this.username); // also returns undefined
// };
// chai();


// Arrow function: combination of Function Expression and remove the name (function only)
// const chaiOne = () => { 
//     let username = "Ellie";
//     console.log(this.username); // also returns undefined
//     // console.log(this);
// };
// chaiOne();


// Basic Arrow function: (Explicit return: use {} with return)
// const addTwo = (num1, num2) => { 
//     return num1 + num2;
// };
// console.log(addTwo(3, 4));


// Implicit return: not using {} and return, also can we use () - that's for one line statement
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (
//     num1 + num2
// ); // also we can use ()
// console.log(addTwo(3, 4));


// Return object: we have to implement ({})
const addTwo = () => ({ username: "Sam" });
console.log(addTwo());
