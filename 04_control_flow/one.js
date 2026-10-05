//  <   >   <=   >=   ==   !=   ===   !==

// const temp = 52;
// if (temp < 50) {
//     console.log("Temprature is in under control")
// }
// else {
//     console.log("High temprature")
// }


// Ternary Operator
// const temp = 52;
// (temp < 50) ? console.log("Temprature is in under control") : console.log("High temprature");


// const score = 200;
// if (score > 100) {
//     const power = "fly";
//     console.log(`User power: ${power}`)
// }


// Short-hand notation: (Implicit scope) - code executed in one line
// const balance = 1000;
// if (balance > 500) console.log("test");


// const balance = 1000;
// if (balance > 500) console.log("test"),console.log("test 2"); // not recommended


// Nesting:
// const balance = 1000;
// if (balance < 500) {
//     console.log("less than 500");
// }
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }


const userLoggedIn = true;
const debitCard = true;

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// both statement should be true in &&
if (userLoggedIn && debitCard) {
    // console.log("Allow to buy course");
}

// choice
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
