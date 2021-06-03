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


//using toString()
var number1 = parseInt(prompt('Enter thr value of number1'));
var result = number1.toString(2);
console.log(`The binary value of ${number1} is ${result}`);