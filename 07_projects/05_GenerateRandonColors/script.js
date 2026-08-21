// generate random colors
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color
};
console.log(randomColor())


let interval;
const startChangingColor = function () {
    if (!interval) {
        interval = setInterval(changingColor, 1000)
    };

    function changingColor() {
        document.body.style.backgroundColor = randomColor();
    };
};

const stopChangingColor = function () {
    clearInterval(interval) // block scope error.
    interval = null;
};


document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);