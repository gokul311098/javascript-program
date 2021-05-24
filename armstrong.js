var number = prompt('Enter the value of number');
let sum = 0;

let temp = number;
while (temp > 0) {
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    temp = parseInt(temp / 10);
}
if (sum == number) {
    console.log(`The given number ${number} is Armstrong number`);
}
else {
    console.log(`The given number ${number} is Not a Armstrong number`);
}


//n digit
var num = prompt('Enter the value of number');
var s = 0;

var t = num;
while (t > 0) {
    let rem = t % 10;
    s += rem ** num.length;

    t = parseInt(t / 10);
}
if (s == num) {
    console.log(`${num} is Armstrong number`);
}
else {
    console.log(`${num} is Not a Armstrong number`);
}