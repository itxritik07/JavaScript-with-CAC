let myDate = new Date();
// console.log(myDate.toString());
// console.log(typeof myDate); // Date => object

// let myCreatedDate = new Date(2026, 6, 9, 16, 44);
// let myCreatedDate = new Date("2026-7-9"); // Default 
let myCreatedDate = new Date("09-07-2026"); // India
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);


let today = newDate.toLocaleString("default", {
    weekday: "long"
})
console.log(`Today is ${today}`);

