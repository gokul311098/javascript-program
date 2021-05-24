var number1 = prompt('Enter the value of number1');
var number2 = prompt('Enter the value of number2');

var hcf;

for(let i = 1; i <= number1 && i <= number2; i++) {

    if(number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}
let lcm = (number1 * number2) /hcf;

console.log(`The LCM of ${number1} and ${number2} are: ${lcm}`);


var num1 = prompt('Enter the value of num1');
var num2 = prompt('Enter the value of num2');

let min = (num1 > num2)? num1 : num2;

while(true) {
    if(min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} are: ${min}`);
        break;
    }
    min++;
}