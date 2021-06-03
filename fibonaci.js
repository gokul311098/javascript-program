//using while loop
var number = prompt('Enter the value of number');
var n1 = 0;
var n2 = 1;

console.log('Fibonaci series are..');
console.log(n1);
console.log(n2);

var n3 = n1 + n2;

while (number >= n3) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    console.log(n3);
}


//using for loop
var number1 = prompt('Enter the value of number1');
var num1 = 0;
var num2 = 1;

console.log('Fibonaci series are....');
console.log(num1);

var num3 = num1 + num2;

for (let i = 1; i <= number1; i++) {
    console.log(num3);
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;

}