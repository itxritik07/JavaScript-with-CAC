//   <   >   <=   >=   ==   !=   ===   !==

// const temp = 52;
// if (temp < 50) {
//     console.log("Temprature is in under control")
// }
// else {
//     console.log("High temprature")
// }


// const score = 200;
// if (score > 100) {
//     const power = "fly";
//     console.log(`User power: ${power}`)
// }


// short-hand notation: (Implicit scope)
// const balance = 1000;
// if (balance > 500) console.log("test");


// not recommended
// const balance = 1000;
// if (balance > 500) console.log("test"),
// console.log("test 2");


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

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if( loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in")
}
