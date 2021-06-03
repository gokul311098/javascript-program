var number = prompt('Enter the value of number');

if (number % 2 == 0) {
    console.log('The given number is even');
}
else {
    console.log('The given number is odd')
}



//using ternary operator
var num = prompt('Enter the value of num');

var result = (num % 2 == 0) ? 'even' : 'odd';

console.log(`The given number is ${result}`);