//using temporary variable
var a = prompt('Enter the value of a');
var b = prompt('Enter the value of b');
var temp;

temp = a;
a = b;
b = temp;

console.log(`The value of swap variable a is ${a}`);
console.log(`The value of swap variable b is ${b}`);


//using destructuring
var a1 = prompt('Enter the value of a1');
var b1 = prompt('Enter the value of b1');

[a1, b1] = [b1, a1];

console.log(`The value of swap variable a1 is ${a1}`);
console.log(`The value of swap variable b1 is ${b1}`);


//using arithmetic operation
var a2 = parseInt(prompt('Enter the value of a2'));
var b2 = parseInt(prompt('Enter the value of b2'));

a2 = a2 + b2;
b2 = a2 - b2;
a2 = a2 - b2;

console.log(`The value of swap variable a2 is ${a2}`);
console.log(`The value of swap variabe b2 is ${b2}`);


//using XOR operator
var a3 = prompt('Enter the value of a3');
var b3 = prompt('Enter the value of b3');

a3 = a3 ^ b3;
b3 = a3 ^ b3;
a3 = a3 ^ b3;

console.log(`The value of swap variable a3 is ${a3}`);
console.log(`The value of swap variable b3 is ${b3}`);