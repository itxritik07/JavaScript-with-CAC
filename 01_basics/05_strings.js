const name = "admin";
const repoCount = 50

// console.log(name + repoCount) // old method
// console.log(`My name is ${name} and my repo count is ${repoCount}`); // string interpolation

const gameName = new String("admin-pvt-window");

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf("n"));
// console.log(gameName.slice(0, 4))

// const newString = gameName.substring(0, 4);
const newString = gameName.substring(-8, 4);
// console.log(newString);


// const anotherString = gameName.slice(0, 4);
const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

const newStringOne = "      admin       "
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = "https://adminwebsite.com/admin%20website"
// console.log(url.replace("%20", "-"));
// console.log(url.includes("mobile"));
// console.log(url.includes("admin"));

console.log(gameName.split("-"))
