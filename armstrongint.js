var lower = prompt('Enter the value of lower number');
var higher = prompt('Enter the value of higher number');

console.log(`The Armstrong number between ${lower} and ${higher} are:`);

for (let i = lower; i <= higher; i++) {

    let sum = 0;
    let numberofdigits = i.toString().length;
    let temp = i;

    while (temp > 0) {
        let remainder = temp % 10;

        sum += remainder ** numberofdigits;

        temp = parseInt(temp / 10);
    }
    if (sum == i) {
        console.log(i);
    }
}