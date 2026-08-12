// ["", "", ""]
// [{}, {}, {}]




// for of loop on array:
const arr = [1, 2, 3, 4, 5]
for (const element of arr) {
    // console.log(element)
}


// for of loop on strings:
const greetings = "Hello World!"
for (const element of greetings) {
    // console.log(element)
}


// maps:
const map = new Map();
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
// console.log(map);

for (const [element, vlaue] of map) {
    // console.log(element, ":", vlaue)
}

// maps on objects:
const myObj = {
    "game1": "NFS",
    "game2": "Forza Horizon 5"
}

for (const element of myObj) {
    console.log(element)
}