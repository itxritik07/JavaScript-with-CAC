// function chai() {
//     console.log(`DB Connected`)
// };
// chai();


// Immediately Invoked Fucnction Expression (IIFE): avoid problem of global scope pollution
// named IIFE
(function chai() {
    console.log(`DB Connected`)
})(); // semicolon is important here to end this task, so next function can able to run


// un-named IFFE
(() => {
    console.log(`DB Connected Two`)
})();


// passing params
((name) => {
    console.log(`DB Connected Three by - ${name}`);
})("Sam");
