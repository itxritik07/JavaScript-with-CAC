// 1. Concat and String Interpolation:
const name = "admin"; // first method to define a string
const repoCount = 50;
// console.log(name + repoCount) // old concat method
// console.log(`My name is ${name} and my repo count is ${repoCount}`) // advance method string interpolation


const gameName = new String("admin-pvt-window"); // second method to define a string using new keyword, using Js objects
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(0))
// console.log(gameName.indexOf("n"))
// console.log(gameName.slice(0, 4)


// const newString = gameName.substring(0, 4); // returns hite
const newString = gameName.substring(-8, 4); // reverse string
// console.log(newString);


// const anotherString = gameName.slice(0, 4);
const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);


const newStringOne = "      admin       ";
// console.log(newStringOne); // spaces remains the same
// console.log(newStringOne.trim()); // removes white spaces


const url = "https://adminwebsite.com/admin%20website"
console.log(url.replace("%20", "-"));
// console.log(url.includes("mobile"));
// console.log(url.includes("admin"));

console.log(gameName.split("-"))