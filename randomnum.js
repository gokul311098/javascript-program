var min = parseInt(prompt('Enter the value of min'));
var max = parseInt(prompt('Enter the value of max'));

var value = Math.random() * (max - min + 1) + min;

console.log(`The random value between ${min} and ${max} is ${value}`);



//using function
function random() {
    return Math.floor(Math.random() * (10 - 1)) + 1;
}

console.log(random());