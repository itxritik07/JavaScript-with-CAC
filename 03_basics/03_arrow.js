const user = {
    username: "Elli",
    price: 999,

    welcomeMessage: function () {
        // console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this) // here gives you empty {} object, but in browser it gives you window (Prereqset)


// this keyword:
// function chai(){
//     let username = "Elli";
//     console.log(this);
//     console.log(this.username);
// }
// chai();


// const chai = function () {
//     let username = "Elli";
//     console.log(this.username);
// }
// chai()


// Arrow function: 
// const chai = () => {
//     let username = "Elli";
//     console.log(this.username);
//     console.log(this);
// }
// chai()


// Basic Arrow function: (Explicit return - means we have to use return if we use { })
// const addTwo = (num1, num2) => { 
//     return num1 + num2
// }


// Implicit return means we can directly write values 
// const addTwo = (num1, num2) => num1 + num2 ;
// const addTwo = (num1, num2) => (num1 + num2) ; // also we can use ()


// Return object: we have to implement ({})
const addTwo = (num1, num2) => ({ username: "Sam" }); 

console.log(addTwo(3, 4))

