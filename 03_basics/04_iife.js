// Immediately Invoked Fucnction Expression (IIFE):
(function chai() {
    // named IIFE
    console.log(`DB Connected`)
})(); // ; to end this task here.


(() => {
    // un-named IFFE
    console.log(`DB Connected two`);
})();


((name) => {
    // passing params
    console.log(`DB Connected two by - ${name}`);
})("Sam");
