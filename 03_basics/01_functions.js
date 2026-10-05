// Function: like notebook, open ⇢ write ⇢ close ⇢ carry
function sayMyName() {
    console.log("A")
    console.log("D")
    console.log("M")
    console.log("I")
    console.log("N")
};
// sayMyName();


function addNums(number1, number2) {
    console.log(number1 + number2)
};
// addNums(3, 4);
// addNums(3, "4"); // earlier we discussed, returns 34


function addNumsTwo(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2; // or can write this way
};

// const result = addNumsTwo(3, 5);
// console.log("Result: ", result);


function loginUserMessage(username) {
    return `${username} just logged in.`
};
// loginUserMessage("Somebody"); // won't work
// console.log(loginUserMessage()); // pass nothing in arg, returns undefined 
// console.log(loginUserMessage("Somebody")); // right approach


// if-else intro: 
function loginUserMessageTwo(username) {
    // if (username === undefined) {
    if (!username) {
        console.log("User is not defined");
        return;
    }

    return `${username} just logged in.`;
};
// console.log(loginUserMessageTwo()); // returns undefined
// console.log(loginUserMessageTwo("Batman"));


// Passing Default values in params:
function loginUserMessageThree(username = "Sam") {
    if (!username) {
        // console.log("User is not defined");
        return
    }

    return `${username} just logged in.`
};
// console.log(loginUserMessageThree()); // returns Sam
// console.log(loginUserMessageThree("Ram")); // until we overwrite it,  returns Ram



// --------------------------------------------------- PART TWO -----------------------------------------------------------------------



// Rest Operator
function calculateCartPrice(...num1) {
    return num1;
};
// console.log(calculateCartPrice(200, 300, 400));


// IQ: return rest of the values
function calculateCartPriceTwo(val1, val2, ...num1) {
    return num1;
};
// console.log(calculateCartPriceTwo(200, 300, 400, 500, 2000));


// Object passing in function:
const user = {
    username: "IronMan",
    price: 999
};
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}.`);
};
// handleObject(user);

// or passing object directly here
// handleObject({
//     username: "Spiderman",
//     price: 999
// });


// Array passing in function:
// const myNewArray = [400, 300, 500, 200];
function returnSecondValue(getArray) {
    // return getArray;
    return getArray[1];
};
// console.log(returnSecondValue(myNewArray));

// or passing Array directly here
console.log(returnSecondValue([400, 300, 500, 200]));