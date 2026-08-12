// 🚩 map is better than forEach because it returns value automatically.
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNumbers.map(num => num * 10)
// console.log(newNums)



// 🚩 Chaining: we can use 2-3 methods like map, filter etc..
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNumbers
    .map(num => num * 10)
    .map(num => num + 1)
    .filter(num => num >= 40)

console.log(newNums)