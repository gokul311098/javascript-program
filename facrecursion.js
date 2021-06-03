var number = prompt('Enter the value of number');

if (number < 0) {
    console.log('Enter the positive number');
}
else {
    let result = factorial(number);
    console.log(`The factorial of ${number} is ${result}`);
}


function factorial(num) {
    if (num == 0) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}