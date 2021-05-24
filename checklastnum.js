var number1 = prompt('Enter the value of number1');
var number2 = prompt('Enter the value of number2');
var number3 = prompt('Enter the value of number3');

var result1 = number1 % 10;
var result2 = number2 % 10;
var result3 = number3 % 10;

if (result1 == result2 && result1 == result3) {
    console.log(`${number1}, ${number2} and ${number3} have same last digits`);
}
else {
    console.log('The given number are not have same digits');
}