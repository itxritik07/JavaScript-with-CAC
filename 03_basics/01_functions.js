function sayMyName() {
    console.log("A")
    console.log("D")
    console.log("M")
    console.log("I")
    console.log("N")
}
// sayMyName()



function addTwoNumbers(number1, number2) {
    // console.log(number1 + number2);
}
// addTwoNumbers(3, 5);



function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2 // or we can use this.
}

const result = addTwoNumbers(3, 5);
// console.log("Result: ", result)



function loginUserMessage(username) {
    return `${username} just logged in.`
}
// loginUserMessage("Somebody") // ❌ 
// console.log(loginUserMessage("Somebody")); // ✅
// console.log(loginUserMessage()); // we passed nothing => undefined 



// if-else intro: 
function loginUserMessage(username) {
    // if (username === undefined) {
    if (!username) { // also can use this
        console.log("User is not defined");
        return
    }
    return `${username} just logged in.`
}
// console.log(loginUserMessage()); // if nothing we are passing.
// console.log(loginUserMessage("Ram")); // if we are passing.



// given value and overriding 
function loginUserMessage(username = "Sam") { // given the value.
    if (!username) {
        console.log("User is not defined");
        return
    }
    return `${username} just logged in.`
}
// console.log(loginUserMessage()); // we pass nothing here, Sam will takes the place
// console.log(loginUserMessage("Ram")); // if we pass anything here, Sam will be override.



function calculateCartPrice(...num1) {
    return num1;
}
// console.log(calculateCartPrice(200, 300, 400));


// Object passing in function:
const user = {
    username: "Varun",
    price: 999
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}.`); // type checking is very important in this case.
}

// handleObject(user)
// handleObject({  // also we can make object here, getting the same value.
//     username: "Varun",
//     price: 999
// })



// Array passing in function:
const myNewArray = [400, 300, 500, 200];

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue[400, 300, 500, 200]); // also we can make array here we get the same second value.

