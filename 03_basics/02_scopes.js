let a = 100

if (true) {
    let a = 10
    // const b = 20
    // var c = 30
    // console.log("Inner: ", a) // block scope
}

// console.log("Outer", a) // global scope
// console.log(b)
// console.log(c) // the problem is here




// Nested Scope
function one() {
    const username = "Admin"

    function two() {
        const website = "www.admin_website.com"
        // console.log(username) // ✅ parent
        // console.log(website) // ✅ child
    }
    // console.log(website) // ❌ child
    // console.log(username) // ✅ parent

    // two()
}
// one()


if (true) {
    const username = "Elli"

    if (username === "Elli") {
        const website = " yt"
        // console.log(username + website)
    }
    // console.log(website) // ❌
}
// console.log(username) // ❌



// ****************************** intresting fact (Hoisting) ******************************

console.log(addOne(5)) // ✅
function addOne(num) {
    return num + 1
}


 console.log(addTwo(5)) // ❌
const addTwo = function(num) {
    return num + 2
}