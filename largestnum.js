var num1 = prompt('Enter the value of num1');
var num2 = prompt('Enter the value of num2');
var num3 = prompt('Enter the value of num3');

if (num1 >= num2 && num1 >= num3) {
    console.log(`The largest number is ${num1}`);
}
else if (num2 >= num1 && num2 >= num3) {
    console.log(`The largest number is ${num2}`);
}
else {
    console.log(`The largest number is ${num3}`);
}


//using variable
var n1 = prompt('Enter the value of n1');
var n2 = prompt('Enter the value of n2');
var n3 = prompt('enter the value of n3');
var result;

if (n1 >= n2 && n1 >= n3) {
    largest = n1;
}
else if (n2 >= n1 && n2 >= n3) {
    largest = n2;
}
else {
    largest = n3;
}

console.log(`The largest number is ${largest}`);


//using math.max()
var m1 = prompt('Enter the value of m1');
var m2 = prompt('Enter the value of m2');
var m3 = prompt('Enter the value of m3');
var res = Math.max(m1, m2, m3);

console.log(`The largest number is ${res}`);