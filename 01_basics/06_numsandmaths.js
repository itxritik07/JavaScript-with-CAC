const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance); // specifically casting ie a Number

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // mostly used prices for ecommerce applications. 

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(3)); // gives the precision price.

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // Indian standard Number System


// ****************************** Maths ******************************


// console.log(Math); // returns empty object
// console.log(Math.abs(-5)); // Absolute value: only -ve value changes into positive value

// console.log(Math.round(4.9)); // changes into bigger number or smaller number
// console.log(Math.ceil(4.9)); // 5 higher value
// console.log(Math.floor(4.9)); // 4 small value

// console.log(Math.min(4,5,6,7));
// console.log(Math.max(4,5,6,7));


// Important usecasees:
// console.log(Math.random()); // returns 0 - 1
// console.log(Math.random() * 10); // returns 0 - 10
// console.log(Math.random() * 10 + 1); // returns 1 - 10
// console.log((Math.random() * 10) + 1); // returns 1 - 10

// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.ceil(Math.random() * 10) + 1); // can be 11

// console.log((Math.random() * 6) + 1); // mostly used , always between 0 and 1 - making dice
// console.log(Math.floor(Math.random() * 10) + 1);

// Important Formula: to get number between 10 to 20 
const min = 10;
const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);