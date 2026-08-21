const clock = document.getElementById("clock");

const localTime = setInterval(() => {
    let date = new Date();
    // console.log(date.toLocaleString())
    clock.innerHTML = date.toLocaleString()
}, 1000);

console.log(localTime)
clearInterval(2)