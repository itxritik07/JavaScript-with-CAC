const tinderUserOne = new Object(); // Singleton object as a constructor
const tinderUserTwo = {}; // Non-Singleton object 

// console.log(tinderUserOne); // here both returns the same empty objects
// console.log(tinderUserTwo); // here both returns the same empty objects

tinderUserTwo.id = "123abc";
tinderUserTwo.name = "Vikram";
tinderUserTwo.isLoggedIn = false;
// console.log(tinderUserTwo); // returns object


// Object inside Object
const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Laxman",
            lastname: "Das"
        }
    }
};

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.lastname); // open nesting through accessing values from . notation

// console.log(regularUser.fullname ? regularUser.fullname.userfullname.firstname : regularUser.fullname.userfullname.lastname); // Ternary Operator: condition ? () : ()


const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj1, obj2 };
// console.log(obj3); // returns {{},{}}

// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2); // returns same object but giving optional param {} is good, least usage
// console.log(obj3);

// const obj3 = { ...obj1, ...obj2 }; // Spread Operator, mostly used
// console.log(obj3);


// Very important - specially used in DB
// console.log(tinderUserTwo);

// console.log(Object.keys(tinderUserTwo)); // here it returns datatype Array, now can run loop etc... 
// console.log(Object.values(tinderUserTwo));

// console.log(Object.entries(tinderUserTwo)); // Array inside Array, least usage.

// console.log(tinderUserTwo.hasOwnProperty('isLoggedIn'));