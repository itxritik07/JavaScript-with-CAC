// Two ways to declare Objects: (1) Literal and (2) Constructor
// Simple Note: 
// Object created from literals, singleton does not work out
// Object created from constructor always singleton. [Object.create: make through constructor method, discuss this later]


// Object litreals:
const jsUser = {
    name: "Batman",
    "full name": "Bruce Wayne", // can get this by console.log(jsUser["email"]) only
    age: 34,
    location: "USA",
    email: "batman@marvel.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// console.log(jsUser.email); // can access email
// console.log(jsUser["email"]); // correct way to access (BTS it is defined as a String "email")
// console.log(jsUser["full name"]); // here the catch



// IQ. Take a symbol, add it to the object's keys, and print it.
const mySymbol = Symbol("key123");

const jsUserTwo = {
    name: "Batman",
    [mySymbol]: "key123", // refer a Symbol, accessing it by [ ]
    age: 34,
    email: "superman@marvel.com"
};

// console.log(typeof jsUserTwo[mySymbol]);
// console.log(jsUserTwo);

// console.log(jsUserTwo["email"]);
// console.log(jsUserTwo.email = "thor@marvel.com"); // overwrite the email
// console.log(jsUserTwo);

// Object.freeze(jsUserTwo); // freeze the email

// console.log(jsUserTwo.email = "spiderman@marvel.com"); // can not change because you freeze the email
// console.log(jsUserTwo);


jsUser.greetingOne = function () {
    console.log("Hello Js User");
}
jsUser.greetingTwo = function () {
    console.log(`Hello Js User, ${this.name}`);
}

// console.log(jsUser.greetingOne());
// console.log(jsUser.greetingTwo());

// Note:
// In most of the cases we use jsUser.email to access the values
// but in some cases like Symbol as a key example we have no choice that's why we use - jsUser["email"] to access the values