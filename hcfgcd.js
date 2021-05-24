//using while loop
var number1 = prompt('Enter the value of number1');
var number2 = prompt('Enter the value of number2');

console.log(`The HCF are ${number1} and ${number2} are:`);

while(number1 != number2) {
    if(number1 > number2) {
        number1 -= number2;
    }
    else {
        number2 -= number1;
    }
}

console.log(number1);


//using for loop
var num1 = prompt('Enter the value of num1');
var num2 = prompt('Enter the value of num2');
var hcf;

console.log(`The HCF are ${num1} and ${num2} are:`);

for(let i = 1; i <= num1 && i <= num2; i++) {

    if(num1 % i == 0 && num2 % i == 0) {
        hcf = i;
    }
}

console.log(hcf);