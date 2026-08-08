// singleton
// Object.create

// object litreals

// Define symbol and use in object as an key
const mySymbol = Symbol("key123");

const jsUser = {
    name: "Admin",
    "full name": "Admin Castle", // we can not get this by using .
    // mySymbol: "myKey1", // shows String.
    [mySymbol]: "myKey1", // proper syntax to declare symbol .
    age: 18,
    location: "India",
    email: "admin@yahoo.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email); // ❌ correct way.
// console.log(jsUser["full name"]); // ❌ cant use.
// console.log(typeof jsUser.mySymbol); // typeof shows String.
// console.log(jsUser[mySymbol]); // typeof shows Symbol.


// jsUser.email = "admin@google.com";
// Object.freeze(jsUser); // email do not change afte this.

// jsUser.email = "admin@chatgpt.com";
// console.log(jsUser);


jsUser.greetingOne = function(){
    console.log("Hello Js User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}


console.log(jsUser.greetingOne());
console.log(jsUser.greetingTwo());




