// 🚩 Reduce: 
// const myNumbers = [1, 2, 3];

// const myTotal = myNumbers.reduce(function (acc, cV) {
//     console.log(`accumulator: ${acc} and currentValue: ${cV}`)
//     return acc + cV
// }, 0) // 0 is the initial value.

// const myTotal = myNumbers.reduce((acc, cV) => acc + cV, 0)
// console.log(myTotal)




const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price , 0)
console.log(priceToPay)