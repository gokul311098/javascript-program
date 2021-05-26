var value = prompt('Enter the value of number');
var binary = 0;
var num = 1, remainder;
var number = value;

while (number != 0) {
     remainder = number % 2;

     binary = binary + remainder * num;
     num = num * 10;
     number = parseInt(number / 2);
}

console.log(`The binary value of ${value} is ${binary}`);