// forEach:
const coding = ["Js", "Python", "Cpp", "Java"];
coding.forEach(function (item) {
    // console.log(item)
})


// Arrow function: 
coding.forEach((item) => {
    // console.log(item)
});


// Passing function through loops:
function printMe(item) {
    // console.log(item)
}
// coding.forEach(printMe)


// forEach also takes item/value, index, array: 
coding.forEach((vlaue, index, array) => {
    // console.log(vlaue, index, array)
})  


// [{}, {}, {}]
const myCoding = [
    {
        "languageName": "JavaScript",
        "languageFileName": "js"
    },
    {
        "languageName": "Python",
        "languageFileName": "py"
    },
    {
        "languageName": "Java",
        "languageFileName": "java"
    }
] 

myCoding.forEach((item) => {
    console.log(item.languageName)
})
