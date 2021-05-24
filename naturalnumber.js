var number = parseInt(prompt('Enter the value of number'));
var sum = 0;
var i = 1;


while (i <= number) {
    sum += i;
    i++;
}

console.log(`The sum of natural number ${number} is ${sum}`);


//using for loop

var num = prompt('Enter the value of number');
var s = 0;

for (let j = 1; j <= num; j++) {
    s += j;
}

console.log(`The sum of natural number ${num} is ${s}`);