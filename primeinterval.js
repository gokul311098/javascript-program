var lower = prompt('Enter the value of lowernumber');
var higher = prompt('Enter the value of highernumber');


console.log(`The given number between ${lower} and ${higher} are:`)

for (let i = lower; i <= higher; i++) {
    let isprime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isprime = false;
            break;
        }
    }
    if (isprime && i > 1) {
        console.log(i);
    }
}