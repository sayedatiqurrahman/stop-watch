const counter = document.getElementById('counter')

let num = 0;

// start button
document.getElementById('start').addEventListener('click', function () {
    const countNum = setInterval(() => {
        ++num
        counter.innerText = num;
    }, 1000);

    document.getElementById('stop').addEventListener('click', function () {
        clearInterval(countNum);
    })

    document.getElementById('reset').addEventListener('click', function () {
        clearInterval(countNum);
        counter.innerText = 0;
    })
})

document.getElementById('reset').addEventListener('click', function () {
    counter.innerText
})
document.getElementById('reset').addEventListener('click', function () {
    counter.innerText
})