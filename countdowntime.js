const date = new Date("Jun 6, 2021 16:15:36").getTime();
console.log(date);

let x = setInterval(function () {

    let now = new Date().getTime();

    let timeLeft = date - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(timeLeft / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(timeLeft / (1000 * 60) % 60);
    let seconds = Math.floor(timeLeft / (1000) % 60);

    console.log(days + 'days ' + hours + 'hrs ' + minutes + 'min ' + seconds + 'sec');


    if (timeLeft < 0) {
        clearInterval(x);
        console.log('countDown Finished');
    }

}, 1000);