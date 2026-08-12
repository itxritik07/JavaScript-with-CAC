// const coding = ["Js", "Python", "Cpp", "Java"];

// for each storing in variable does not return any value:
// const values = coding.forEach((item) => {
// console.log(item)
// return item
// })
// console.log(values)




// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 🚩 Explicit return:
// const newNums = myNums.filter((num) => {
//     return num > 4
// })

// 🚩 Implicit return:
// const newNums = myNums.filter((num) => num > 4)

// 🚩 Using forEach:
// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num)
//   }
// })
// console.log(newNums)




const books = [
    { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
    { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
    { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
    { title: "Book Four", genre: "Science", publish: 2001, edition: 2010 },
    { title: "Book Five", genre: "Fantasy", publish: 2005, edition: 2012 },
    { title: "Book Six", genre: "Biography", publish: 1995, edition: 2006 },
    { title: "Book Seven", genre: "Mystery", publish: 2010, edition: 2018 },
    { title: "Book Eight", genre: "Romance", publish: 2003, edition: 2011 },
    { title: "Book Nine", genre: "Horror", publish: 1998, edition: 2009 },
    { title: "Book Ten", genre: "Adventure", publish: 2012, edition: 2020 },
    { title: "Book Eleven", genre: "Fiction", publish: 1988, edition: 2002 },
    { title: "Book Twelve", genre: "Science", publish: 2015, edition: 2021 },
    { title: "Book Thirteen", genre: "History", publish: 1990, edition: 2005 },
    { title: "Book Fourteen", genre: "Fantasy", publish: 2018, edition: 2023 },
    { title: "Book Fifteen", genre: "Biography", publish: 2007, edition: 2014 },
    { title: "Book Sixteen", genre: "Mystery", publish: 1993, edition: 2000 },
    { title: "Book Seventeen", genre: "Romance", publish: 2011, edition: 2019 },
    { title: "Book Eighteen", genre: "Non-Fiction", publish: 1986, edition: 1999 },
    { title: "Book Nineteen", genre: "Adventure", publish: 2020, edition: 2024 },
    { title: "Book Twenty", genre: "Horror", publish: 1997, edition: 2003 }
];

// using let for overriding:
let userBooks = books.filter((book) => book.genre === "Horror")

// userBooks = books.filter((book)=> book.publish >= 2000)
userBooks = books.filter((book) => book.publish >= 2000 && book.genre === "Fantasy")

console.log(userBooks)